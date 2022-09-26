import styled from "@emotion/styled";


export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  
`

export const Results = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 2.1rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 3.4rem;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 1044px) {
    padding-left: 3.4rem;
    padding-right: 3.4rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media only screen and (max-width: 620px) {
    padding-top: 2.1rem;
    padding-left: 0;
    padding-right: 0;
  }
`

export const ResultsHeadingArea = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const Divider = styled.hr`
    width: 100%;
    border-top: 1px solid #4d4d4d0a;
    margin: 20px 0;
`

export const ResultsInner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`

export const PaginationList = styled.ul`
    display: flex;
    margin: none!important;
`

export const PaginationListItem = styled.li`
    & button { 
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4d4d4d!important;
        font-weight: 400;
        transition: background-color 0.3s;
        border-radius: 50%;
        margin-left: 4px;
        margin-right: 4px;
        border: 1px solid #F3FAFD;
        font-size: 14px;
        &.selected {
            font-weight: 700;
            color: #009FDA!important;
            background-color: #F3FAFD;
            border: 1px solid #009FDA;
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.4;
        }
        &:hover {
            background-color: #F3FAFD;
        }
    }
`

export const ResultsSegment = styled.div`
  width: calc(50% - 40px);
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 0px;
  flex-direction: column;
`

export const PlansByState = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const PlansInner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 140px;
  flex-direction: row;
  justify-content: space-between;
`


export const ArticlesInner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
`

export const NoResultsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    max-width: 600px;
    border-radius: 12px;
    background-color: #F3FAFD;
    margin: 10vh auto;
    h3 {
        color: #009FDA;
        padding-bottom: 16px;
    }
    p {
        color: #4d4d4d!important;
        font-weight: 400;
        text-align: center;
    }
`
