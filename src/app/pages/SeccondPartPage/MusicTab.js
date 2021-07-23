import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FINAL_FINAL_TAB, MUSIC_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';
import SongQuestion from '../../components/QuizQuestion/SongQuestion';

const MusicTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[MUSIC_TAB]);
  const unlockedTabs = useSelector((state) => state.unlockedTabs);
  const questions = [
    {
      texts: ['W układzie słonecznym', 'planety. Wszystkie w innym tempie okrążają', '. Różnią się', ',', 'i', '.'],
      blanks: ['wirują', 'słońce', 'kolorem', 'masą', 'rozmiarem'],
    },
    {
      texts: ['Znowu płakać mi się chce Bo', '', 'pada deszcz A do ', 'miałem iść na zakupy Czemu wszystko musi być tak do'],
      blanks: ['na', 'polu', 'Biedronki', 'chrzanu'],
    },
    {
      texts: ['Jak sobota to tylko', '', '', '', ' bo promocje tam parking', '', '', '', ''],
      blanks: ['do', 'Lidla', 'do', 'Lidla', 'ram', 'pam', 'pam', 'pam'],
    },
    {
      texts: ['Jak się bawią ludzie', '', '', ''],
      blanks: ['Wtedy', 'kiedy', 'pada', 'deszcz'],
    },
    {
      texts: ['', ',', ', pamiętasz lato ze snu'],
      blanks: ['żonka', 'żonka'],
    },
    {
      texts: ['...', ',', ',', ',', ',', ',', 'Tak! To paczka ta!'],
      blanks: ['marshall', 'rubble', 'chase', 'rocky', 'zuma', 'skye'],
    },
    {
      texts: ['Oj dziecko, dziecko to jest', ''],
      blanks: ['dziki', 'świat'],
    },
    {
      texts: ['... 너에게로 점점 다가갈래 점점내 앞에서 떠날 수 없게', ' ', ' ', ' ', ' '],
      blanks: ['rolly', 'polly', 'rolly', 'rolly', 'polly'],
    },
  ];

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(MUSIC_TAB, questionNr));
    }
    if (questionNr === questions.length) {
      dispatch(unlockTab(FINAL_FINAL_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Uzupełnij tekst piosenki</Header>
      <div>
        {questions.map((question, index) => stage >= index && (
        <SongQuestion
          key={question.texts[0] + question.blanks[0]}
          texts={question.texts}
          blanks={question.blanks}
          onAllCorrect={() => handleCorrectAnswer(index + 1)}
          correct={stage >= index + 1}
        />
        ))}
      </div>
    </TabContainer>
  );
};

const Header = styled.h2`
  text-align: center;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const TabContainer = styled.div`
  display: block;
`;

export default MusicTab;
