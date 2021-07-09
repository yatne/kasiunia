import React, { useState } from 'react';
import styled from 'styled-components';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

const GeneralKnowledgeTab = () => {
  const [unlockedQuestion, setUnlockedQuestion] = useState(0);

  const handleCorrectAnswer = (questionNr) => {
    if (unlockedQuestion === questionNr - 1) {
      setUnlockedQuestion(questionNr);
    }
  };

  return (
    <TabContainer>
      <h2>Test z wiedzy ogólnej oraz popkultury</h2>
      <div>
        <QuizQuestion
          question="Jak się nazywa najmłodszy piesek z Psiego Patrolu?"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={unlockedQuestion >= 1}
          answer="Rubble"
        />
        { unlockedQuestion >= 1 && (
          <QuizQuestion
            question="aa"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="12"
            correct={unlockedQuestion >= 2}
          />
        )}
        { unlockedQuestion >= 2 && (
          <QuizQuestion
            question="aa"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="12"
            correct={unlockedQuestion >= 3}
          />
        )}
        { unlockedQuestion >= 3 && (
          <QuizQuestion
            question="aa"
            onCorrectAnswer={() => handleCorrectAnswer(4)}
            answer="12"
            correct={unlockedQuestion >= 4}
          />
        )}
      </div>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: block;
`;

export default GeneralKnowledgeTab;
