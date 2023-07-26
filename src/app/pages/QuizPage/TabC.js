import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_C } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';

const TabC = () => {
  const questions = [
    { type: 'organise',
      question: 'ustaw chronologicznie wyjazdy - brałem pod uwagę tylko takie z nocowaniem.',
      tags: [
        { id: 1, content: 'Opener 2012 - The Kills, Penderecki, Bjork, Bon Iver, Mumfordzi, Franz', order: 5, data: '2012-07' },
        { id: 2, content: 'Opener 2013 - Cyganeria - Blur, Alt-J, Arctic Monkeys, Nick Cave, QotSA, Skunk Anansie, Kings of Leon', order: 8, data: '2013-07' },
        { id: 3, content: 'Opener 2014 - Pearl Jam, The Black Keys, Jack White, Faith no More, Chromeo', order: 11, data: '2013-07' },
        { id: 4, content: 'Opener 2015 - Mumford & Sons, Major Lazer, Drake, Kasabian, Hozier, Alt-J', order: 12, data: '2013-07' },
        { id: 5, content: 'Opener 2016 - Florence + the Machine, Red Hot Chili Peppers, LCD Soundsystem, Pharrel Williams, Sigur Ros', order: 16, data: '2016-07' },
        { id: 6, content: 'Opener 2017 - Ksiądz Tomasz, Radiohead (tylko 1 dzień)', order: 20, data: '2016-07' },
        { id: 7, content: 'Góry - Szklarska Poręba z pracą Antka', order: 28, data: '2023-05' },
        { id: 8, content: 'Góry - Karkonosze - Dom Mariano', order: 7, data: '2012-09' },
        { id: 9, content: 'Góry - Zakopane po raz pierwszy', order: 3, data: '2011-q3' },
        { id: 10, content: 'Góry - Zakopane po raz drugi - Małołączniak', order: 10, data: '2014-05' },
        { id: 11, content: 'Góry - Wyjazd na narty', order: 19, data: '2017-02' },
        { id: 12, content: 'Dziura pod Zamościem z Tkaczykami', order: 25, data: '2021-09-27' },
        { id: 13, content: 'Mazury z Tkaczykami po raz pierwszy', order: 22, data: '2018-08-?' },
        { id: 14, content: 'Mazury z Tkaczykami po raz drugi (Giżycko itd.) ', order: 26, data: '2022-05-06' },
        { id: 15, content: 'Tykocin z Tkaczykami', order: 24, data: '2020-06-12' },
        { id: 16, content: 'Wisełka u Molesta', order: 17, data: '2015-09-18' },
        { id: 17, content: 'Szczurowo po raz pierwszy', order: 6, data: '2012-08' },
        { id: 18, content: 'Rumia nad morzem z dziećmi', order: 27, data: '2022-08-27' },
        { id: 19, content: 'Gdańsk z Jankiem i rodzicami Antka', order: 23, data: '2019-08-04' },
        { id: 20, content: 'Sopot', order: 29, data: '2023-07-29' },
        { id: 21, content: 'Jarosławiec', order: 30, data: '2023-08' },
        { id: 22, content: 'Toruń + Bydgoszcz', order: 21, data: '2017-08' },
        { id: 23, content: 'Poznań', order: 2, data: '2011-q2' },
        { id: 24, content: 'Lublin - wyjazd z ekipą', order: 4, data: '2012-03' },
        { id: 25, content: 'Kazimierz na Wisłą', order: 9, data: '2013-11' },
        { id: 26, content: 'Londyn', order: 14, data: '2016-02' },
        { id: 27, content: 'Sztokholm', order: 18, data: '2016-10' },
        { id: 28, content: 'Praga', order: 13, data: '2015-10' },
        { id: 29, content: 'Rzym', order: 15, data: '2016-05' },
        { id: 30, content: 'Żagle', order: 1, data: '2010' },
        { id: 31, content: 'Kopenhaga', order: 31, data: '2023-11' },
      ] },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Tu tylko jedno zadanie ale bardzo trudne:</Header>
      <Quiz quizId={TAB_C} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_C, 'Prezencik jest kartką papieru schowaną w lewej szufladzie pod drzewkiem Bonsai'))} />
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

export default TabC;
