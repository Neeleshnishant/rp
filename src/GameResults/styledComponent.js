import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 370px;
  flex-wrap: wrap;
  margin-top: 60px;
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
`
export const GameImage = styled.img`
  width: 150px;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultName = styled.p`
  color: white;
`

export const ResultButton = styled.button`
  width: 100px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`
