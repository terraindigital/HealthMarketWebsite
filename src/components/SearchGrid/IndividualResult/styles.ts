import styled from "@emotion/styled";

export const ResultTitle  = styled.div`
  color: #4d4d4d;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  padding-bottom: 12px;
  transition: 0.3s;
`

export const BreadcrumbPill = styled.div`
    font-weight: 400;
    font-size: 12px;
    background-color: #F3FAFD;
    border-radius: 3px;
    color: #4d4d4d!important;
    padding: 4px;
    line-height: 1.1;
`
export const BreadcrumbSeparator = styled.div`
    font-size: 12px;
    color: #4d4d4d!important;
    padding-left: 3px;
    padding-right: 3px;
`

export const Container = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  max-width: 48%;
  padding: 16px;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: 0.3s;
  &:hover {
    border: 1px solid #F3FAFD;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.05);
  }
  &:hover ${ResultTitle} {
    color: #009FDA;
  }
  @media screen and (max-width: 1044px) {
    max-width: 100%;
  }
`

export const Linkbox = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 1;
`

export const Result  = styled.div`
  position: relative;
  width: calc(100% - 24px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`


export const Breadcrumb  = styled.div`
  color: #4d4d4d;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
`

export const BodyText = styled.div`
  color: #4d4d4d;
  opacity: 0.8;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
   & ais-highlight-0000000000 {
    background-color: #FFF349;
    border-radius: 4px;
  }
`

export const BulletPoint = styled.div`
  width: 8px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 8px;
  display: flex;
  margin-top: 12px;
  align-items: flex-start;
  border-radius: 9999px;
  flex-direction: column;
  background-color: #009fda;
`
