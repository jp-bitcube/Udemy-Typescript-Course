import React from 'react'
import styled from 'styled-components';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';
import InputStyled from '../Input/InputStyled'

const MainWrapperDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background: rgba(150,200,200, 0.6);
  
`
const WrapperContainer = styled.div`
  background: rgba(139,197,205, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export default function MainWrapper(props): JSX.Element {
  return (
    <WrapperContainer>
      <TopBar/>
      <InputStyled/>
      <MainWrapperDiv>
        {props.children}
      </MainWrapperDiv>
      <Footer/>
    </WrapperContainer>

  )
}
