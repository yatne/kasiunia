import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import GeoQuestion from '../../components/GeoQuestion/GeoQuestion';
import { FINAL_ROUND_TAB, GENERAL_KNOWLEDGE_TAB, GEOGRAPHIC_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';
import i1 from '../../../static/img/51.jpg';
import i2 from '../../../static/img/52.jpg';
import GeoImageQuestion from '../../components/GeoQuestion/GeoImageQuestion';

const GeographicsTab = () => {
  const dispatch = useDispatch();
  const quizStage = useSelector((state) => state.quizStages[GEOGRAPHIC_TAB]);

  const [lat, setLat] = useState(52.229609700027126);
  const [lng, setLng] = useState(21.008587478535755);

  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 11,
  };

  const questions = [
    {
      id: 0,
      question: 'Na rozgrzewkę: Gdzie mieszkasz?',
      answer: {
        minLat: 52.244173666070274,
        maxLat: 52.24611811893077,
        minLng: 20.9644266257684,
        maxLng: 20.966486562291838,
      },
    },
    {
      id: 1,
      question: 'Gdzie były robione te zdjęcia?',
      answer: {
        minLat: 52.271139209275006,
        maxLat: 52.27492222615222,
        minLng: 20.950276058346404,
        maxLng: 20.9549573942045,
      },
      images: [i1, i2],
    },
    {
      id: 2,
      question: 'Gdzie doszło do pierwszego pocałunku prawdziwej miłości? ♡',
      answer: {
        minLat: 52.14002189315282,
        maxLat: 52.142617272817404,
        minLng: 20.81254513919752,
        maxLng: 20.816964906467035,
      },
    },
    {
      id: 3,
      question: 'Gdzie poznałaś pierwszego nowego członka rodziny?',
      answer: {
        minLat: 52.2282880246145,
        maxLat: 52.230702455337706,
        minLng: 21.028410266596797,
        maxLng: 21.033684367541145,
      },
    },
    {
      id: 4,
      question: 'Najwyższy szczyt świata?',
      answer: {
        minLat: 49.23234994164293,
        maxLat: 49.238762722617885,
        minLng: 19.91302088073849,
        maxLng: 19.925633411519122,
      },
    },
    {
      id: 5,
      question: 'Teraz trudne: Gdzie najlepiej zjeść w Rzymie?',
      answer: {
        minLat: 41.898363256930246,
        maxLat: 41.89888406754099,
        minLng: 12.46958333825355,
        maxLng: 12.47021677699477,
      },
    },
  ];

  const isDragCorrect = (answer) => lat <= answer.maxLat && lat >= answer.minLat
    && lng <= answer.maxLng && lng >= answer.minLng;

  const handleDrag = (map) => {
    setLat(map.center.lat());
    setLng(map.center.lng());
    if (questions[quizStage] && isDragCorrect(questions[quizStage].answer)) {
      if (quizStage === 5) {
        dispatch(unlockTab(FINAL_ROUND_TAB, [GENERAL_KNOWLEDGE_TAB, GEOGRAPHIC_TAB]));
      }
      dispatch(setQuizStage(GEOGRAPHIC_TAB, quizStage + 1));
    }
  };

  return (
    <div>
      <Header>Test z geografii historycznej! (Twoja mocna strona)</Header>
      {questions.map((question) => quizStage >= question.id && (question.images ? (
        <GeoImageQuestion
          key={question.id}
          correct={quizStage > question.id}
          question={question.question}
          images={question.images}
        />
      )
        : (
          <GeoQuestion
            key={question.id}
            correct={quizStage > question.id}
            question={question.question}
          />
        )
      ))}
      <div style={{
        height: '50vh', width: '75%', margin: 'auto', display: 'relative', marginBottom: '20px',
      }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAfg4RdIeaVu-21_A71n_eYZdE72wUZqGw' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onDrag={(map) => handleDrag(map)}
        />
        <CrosshairLeft />
        <CrosshairTop />
      </div>
    </div>
  );
};

const CrosshairLeft = styled.div`
  height: 50vh;
  left: 50%;
  top: -50vh;
  border: 1px dotted gray;
  position: relative;
  width: 0;
`;

const CrosshairTop = styled.div`
  height: 0;
  width: 100%;
  left: 0;
  top: -75vh;
  border: 1px dotted gray;
  position: relative;
`;

const Header = styled.h2`
  text-align: center;
  width: 99%;
  margin-right: auto;
  margin-left: auto;
`;

export default GeographicsTab;
