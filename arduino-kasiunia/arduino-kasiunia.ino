#include <Arduino_LSM6DSOX.h>
#include <LiquidCrystal.h>
#include <WiFiNINA.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

int GAME_STATE = -1;

// GRYO VARS
float Gx, Gy, Gz;
float sumGx[] = {0, 0, 0};
float sumGy[] = {0, 0, 0};
float sumGz[] = {0, 0, 0};
float X;
float Y;
float Z;
int pointer = 0;
int gyroStep = 1;

// HALL VARS
int val;

//METER VARS
int distance;
int distances[] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
int distPointer = 0;
float avgDistance;
boolean firstTry = false;
boolean recheck = false;
int recheckCounter = 0;

//test
int testValue = 0;

void setup() {
  if (!IMU.begin()) {
    while (1);
  }

  digitalWrite(10, HIGH);
  digitalWrite(7, HIGH);
  pinMode(6, INPUT);
  //Serial.begin(9600);
  //changeState(3, "test", "");  
}

void setDiodes(int number) {
  if (number == 0) {
    digitalWrite(10, LOW);
    digitalWrite(9, LOW);
    digitalWrite(8, LOW);
    digitalWrite(7, LOW);
  }
  if (number == 1) {
    digitalWrite(10, HIGH);
    digitalWrite(9, LOW);
    digitalWrite(8, LOW);
    digitalWrite(7, LOW);
  }
  if (number == 2) {
    digitalWrite(10, HIGH);
    digitalWrite(9, HIGH);
    digitalWrite(8, LOW);
    digitalWrite(7, LOW);
  }
  if (number == 3) {
    digitalWrite(10, HIGH);
    digitalWrite(9, HIGH);
    digitalWrite(8, HIGH);
    digitalWrite(7, LOW);
  }
  if (number == 4) {
    digitalWrite(10, HIGH);
    digitalWrite(9, HIGH);
    digitalWrite(8, HIGH);
    digitalWrite(7, HIGH);
  }
}

void writeLCD(String s) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(s);
}

void writeValue(int value) {
  if (testValue != value) {
    testValue = value;
    writeLCD(String(value));
  }
}

void changeState(int number, String message1, String message2) {
  GAME_STATE = number;
  writeLCD(message1);
  setDiodes(number);
}

void loop() {
  if (GAME_STATE == -1) {
    digitalWrite(10, LOW);
    digitalWrite(9, LOW);
    digitalWrite(8, LOW);
    digitalWrite(7, LOW);
    writeLCD("Dzien Dobry!");
    digitalWrite(10, HIGH);
    delay(1000);
    digitalWrite(9, HIGH);
    delay(1000);
    digitalWrite(8, HIGH);
    delay(1000);
    digitalWrite(7, HIGH);
    delay(4000);
    changeState(1, "pumpernikiel", "");
  };

  if (GAME_STATE == 1) {
    if (IMU.gyroscopeAvailable()) {
      IMU.readGyroscope(Gx, Gy, Gz);

      pointer = (pointer + 1) % 3;

      sumGx[pointer] = Gx;
      sumGy[pointer] = Gy;
      sumGz[pointer] = Gz;

      X = sumGx[0] + sumGx[1] + sumGx[2];
      Y = sumGy[0] + sumGy[1] + sumGy[2];
      Z = sumGz[0] + sumGz[1] + sumGz[2];

      if (X < -70 && X > -180) {
        gyroStep = 2;
        setDiodes(1);
      }
      if (gyroStep == 2 && Y > 150 && Y < 280) {
        gyroStep = 3;
        setDiodes(2);
      }
      if (gyroStep == 3 && X > 70 && X < 180) {
        gyroStep = 4;
        setDiodes(3);
      }
      if (gyroStep == 4 && Z > 150 && Z < 280) {
        gyroStep = 5;
        setDiodes(4);
        changeState(2, "jabadabadu", "");
      }
    }
    delay(600);
  };

  if (GAME_STATE == 2) {
    val = digitalRead(6);
    if (val == LOW) {
      delay(800);
      val = digitalRead(6);
      if (val == LOW) {
        changeState(3, "jaksydraksy", "");
      }
    }
  };

  if (GAME_STATE == 3) {
    distance = analogRead(A6);
    distPointer = (distPointer + 1) % 9;
    distances[distPointer] = distance;
    avgDistance = (distances[0] + distances[1] + distances[2] + distances[3] + distances[4] + distances[5] + distances[6] + distances[7] + distances[8]) / 9;
    
    if (avgDistance > 1000 && avgDistance < 1015 && firstTry == false) {
      firstTry = true;
      for (int i=0; i==8; i++) {
        distances[i] = 0;
      }
      delay(1000);
    }
    if (firstTry) {
      recheckCounter = recheckCounter + 1;
      if (recheckCounter > 10) {
        if (avgDistance > 1000 && avgDistance < 1015) {
          changeState(4, "olejupa", "");
        } else {
          firstTry = false;
          recheckCounter = 0;
        }
      }      
    }
    //writeValue(avgDistance);
    //Serial.println(avgDistance);
    delay(300);
  };
}
