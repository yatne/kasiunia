import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DraggableArea } from 'react-draggable-tags';

const OrganiseOrderQuestion = ({ question,
  correct,
  tags,
  onCorrectAnswer }) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  const [currentTags, setCurrentTags] = useState(tags);

  const handleOrderChange = (newTags) => {
    setCurrentTags(newTags);
    const isAscending = (t) => t.slice(1).every((tag, i) => tag.order > t[i].order);
    if (isAscending(newTags)) {
      onCorrectAnswer();
    }
  };

  return (
    <QuestionContainer borderStyle={style}>
      <Question>{question}</Question>
      <Simple>
        <DraggableArea
          isList
          tags={currentTags}
          render={({ tag }) => (
            <Tag className="tag">
              {tag.content}
            </Tag>
          )}
          onChange={(newTags) => handleOrderChange(newTags)}
        />
      </Simple>
    </QuestionContainer>
  );
};

const Simple = styled.div`
  margin: 16px;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  width: 294px;
  padding: 5px;
`;

const Tag = styled.div`
  margin: 3px;
  font-size: 13px;
  border: 1px dashed #cccccc;
  border-radius: 4px;
  padding: 0 8px;
  line-height: 30px;
  color: #666666;
  background: rgba(255, 255, 255, 0.7);
`;

const Question = styled.div`
  display: block;
  width: 100%;
  margin-right: 20px;
  text-align: center;
`;

// const AnswerContainer = styled.div`
//   display: flex;
//   margin: 20px;
//   width: 100%;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;
//
// const Answer = styled.div`
//   width: 45%;
//   margin: 10px;
//
//   label {
//     margin-left: 5px;
//   }
// `;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

OrganiseOrderQuestion.propTypes = { question: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool };

OrganiseOrderQuestion.defaultProps = { question: '',
  correct: false };

export default OrganiseOrderQuestion;
