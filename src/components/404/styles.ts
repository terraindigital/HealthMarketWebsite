import styled from "@emotion/styled"

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 120px 0 0 0;
`

export const Wrapper = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: center;
 font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
 padding: 0 20px;
 @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`
export const Left = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 16px 80px 16px;
 width: fit-content;
 h1 {
    color: #009fda;
    font-size: 128px;
    margin: 0;
    @media only screen and (max-width: 991px) {
        font-size: 80px;
        margin: 0 0 32px 0;
      }
 }
 h3 {
    color: #4d4d4d;
    font-size: 28px;
    line-height: 1.5;
    text-align: center;
    margin: 0 0 32px 0;
    @media only screen and (max-width: 991px) {
        font-size: 25px
      }
 }
 p{
    text-align: center;
    margin: 0 0 32px 0;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    width: 100%;
 }
 a{
    text-decoration: none;
    color: #69BE28;
    &:hover{
        text-decoration: underline;
        color: #04911e;
    }
 }
`

export const ListWrapper = styled.div`
 max-width: 538px;
 width: 100%;
 display: flex;
 aign-items: flex-start;
 justify-content: center;
 @media only screen and (max-width: 991px) {
    width: 100%;
    padding-left: 20px;
  }
`

export const List = styled.div`
 display: flex;
 align-items: flex-start;
 flex-direction: column;
 max-width: 293px;
 width: 100%;
 img {
    height: 40px;
    width: 40px;
    object-fit: contain;
 }
 .text {
    text-align: left;
    color: #4d4d4d;
    font-size: 18px;
    margin-bottom: 18px;
    font-weight: 400;
    max-width: 200px;
 }
 .line {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
    width: 85%;
 }
 ul{
    color: #69BE28;
    font-size: 18px;
    line-height: 1.5;
    @media only screen and (max-width: 479px) {
       li{
            max-width: 130px
       }
    }
    li::marker{
        color: #4d4d4d;
    }
 }
`

export const Right = styled.div`
 width: fit-content;
 img {
    object-fit: contain;
    height: 650px;
    width: 520px;
    @media only screen and (max-width: 991px) {
        height: 550px;
        width: 420px;
      }
    @media only screen and (max-width: 991px) {
        display: none;
      }
 }
`
