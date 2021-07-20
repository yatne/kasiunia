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

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(MUSIC_TAB, questionNr));
    }
    if (questionNr === 6) {
      dispatch(unlockTab(FINAL_FINAL_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Uzupełnij tekst piosenki</Header>
      <div>
        <SongQuestion
          texts={['', ',', ', pamiętasz lato ze snu']}
          blanks={['żonka', 'żonka']}
          onAllCorrect={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
        />
        { stage >= 1 && (
          <SongQuestion
            texts={['너에게로 점점 다가갈래 점점내 앞에서 떠날 수 없게', '       ', ' ', ' ', ' ']}
            blanks={['rolly', 'polly', 'rolly', 'rolly', 'polly']}
            onAllCorrect={() => handleCorrectAnswer(2)}
            correct={stage >= 2}
          />
        )}
        { stage >= 2 && (
          <SongQuestion
            texts={['jajaje', ' jumbo']}
            blanks={['coco', 'jajaje']}
            onAllCorrect={() => handleCorrectAnswer(3)}
            correct={stage >= 3}
          />
        )}
        { stage >= 3 && (
          <SongQuestion
            texts={['jajaje', ' jumbo']}
            blanks={['coco', 'jajaje']}
            onAllCorrect={() => handleCorrectAnswer(4)}
            correct={stage >= 4}
          />
        )}
        { stage >= 4 && (
          <SongQuestion
            texts={['jajaje', ' jumbo']}
            blanks={['coco', 'jajaje']}
            onAllCorrect={() => handleCorrectAnswer(5)}
            correct={stage >= 5}
          />
        )}
        { stage >= 5 && (
          <SongQuestion
            texts={['jajaje', ' jumbo']}
            blanks={['coco', 'jajaje']}
            onAllCorrect={() => handleCorrectAnswer(6)}
            correct={stage >= 6}
          />
        )}
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
