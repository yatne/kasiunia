import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GeoImageQuestion = ({ question, correct, images }) => (
  <QuestionContainer correct={correct}>
    <ImagesContainer>
      {images.map((image) => <Image src={image} />)}
    </ImagesContainer>
    {question}
  </QuestionContainer>
);

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  border: 2px solid ${(props) => (props.correct ? 'green' : 'black')};
  background: ${(props) => (props.correct ? '#bbffbb' : 'white')};
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  margin: 30px;
`;

const Image = styled.img`
  max-width: 30%;
  margin-bottom: 10px;
`;

GeoImageQuestion.propTypes = { question: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  images: PropTypes.string.isRequired };

export default GeoImageQuestion;
