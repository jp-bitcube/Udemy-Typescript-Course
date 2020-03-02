import React from 'react'
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  display: flex;
  font-family: 'Comic Sans MS';
`;

const Title = styled.h1`
  margin-left: 20px;
`;
const TodaysDate = styled.h3`
  margin-right: 20px;
`

function createTodaysDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  let todaysDate = `${mm}/${dd}/${yyyy}`;
  return todaysDate;
}

export default function TopBar():JSX.Element {
  return (
    <Banner>
      <Title>
        Daily 2 Do's
      </Title>
      <TodaysDate>
        {createTodaysDate()}
      </TodaysDate>
    </Banner>
  )
}
