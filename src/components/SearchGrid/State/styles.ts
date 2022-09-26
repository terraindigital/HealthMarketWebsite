import styled from "@emotion/styled";

export const Container = styled.li`
  width: calc(33.33% - 13.33px);
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 20px;
  background-color: #F5F5F5;
`

export const StateImage = styled.div`
  width: 64px;
  object-fit: cover;
  margin-right: 32px;
`

export const TextContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const StateTitle = styled.div`
  color: #4d4d4d;
  font-size: 20px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 28px;
`

export const StateText = styled.div`
  color: #4d4d4d;
  font-size: 20px;
  font-family: Open Sans;
  line-height: 28px;
`
