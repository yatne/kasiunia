import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { GEOGRAPHIC_TAB, HISTORICAL_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';
import q1 from '../../../static/img/1.jpg';
import q2 from '../../../static/img/2.jpg';
import q3 from '../../../static/img/3.jpg';
import q4 from '../../../static/img/4.jpg';
import q5 from '../../../static/img/6.jpg';
import q6 from '../../../static/img/7.jpg';
import q7 from '../../../static/img/8.jpg';

const HistoricalTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[HISTORICAL_TAB]);
  const unlockedTabs = useSelector((state) => state.unlockedTabs);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(HISTORICAL_TAB, questionNr));
    }
    if (questionNr === 7) {
      dispatch(unlockTab(GEOGRAPHIC_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Test historyczny</Header>
      <div>
        <QuizQuestion
          question="Kto siedzi obok Ciebie?"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
          answers={['poznańska', 'ania poznańska']}
          image={q1}
        />
        { stage >= 1 && (
          <QuizQuestion
            question="Nad jaką rzeką babcia i tata masują Ci nogi?"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answers={['wisła', 'wisłą']}
            correct={stage >= 2}
            image={q2}
          />
        )}
        { stage >= 2 && (
          <QuizQuestion
            question="Jak nazywał się artysta przed którego domem stoisz?"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answers={['cesar manrique', 'manrique']}
            correct={stage >= 3}
            image={q3}
          />
        )}
        { stage >= 3 && (
          <QuizQuestion
            question="W jakim mieście zrobiono to zdjęcie?"
            onCorrectAnswer={() => handleCorrectAnswer(4)}
            answer="uddevalla"
            correct={stage >= 4}
            image={q4}
          />
        )}
        { stage >= 4 && (
          <QuizQuestion
            question="Gdzie można spotkać takiego gościa w kuble?"
            onCorrectAnswer={() => handleCorrectAnswer(5)}
            answers={['centrum pompidou', 'pompidou']}
            correct={stage >= 5}
            image={q5}
          />
        )}
        { stage >= 5 && (
          <QuizQuestion
            question="Co świętujesz wznosząc kieliszek?"
            onCorrectAnswer={() => handleCorrectAnswer(6)}
            answers={['18', 'osiemnastka', 'osiemnastkę']}
            correct={stage >= 6}
            image={q6}
          />
        )}
        { stage >= 6 && (
          <QuizQuestion
            question="A co to za piękne miasto?"
            onCorrectAnswer={() => handleCorrectAnswer(7)}
            answer="chojnice"
            correct={stage >= 7}
            image={q7}
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

export default HistoricalTab;
