// Library
import React from "react";

// Query
import {useMedicarePrescriptionDrugPageQuery} from "../../../hooks/insurance/useMedicarePrescriptionDrugPageQuery";

// Styles
// Scripts
// Components
import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import {Tracing} from "../../../components/Tracing/Tracing";
import styled from "@emotion/styled";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import PhoneIcon from "../../../static/images/phone-icon.png";

const MedicarePrescriptionDrugPage = () => {
    const {page} = useMedicarePrescriptionDrugPageQuery();
    return (
        <Layout>
            <Tracing/>
            <PageContainer>
                <MainTitle>Compare Medicare Part D plans</MainTitle>
                <Subtitle>Find prescription drug coverage that fits your lifestyle</Subtitle>
                <PageHeroForm
                    light
                    btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
                    hideFooter
                />
                <CallUsCtn>
                    <img src={PhoneIcon} />
                    <CallUsText>Call XXX-XXX-XXXX to speak to a licensed insurance agent.</CallUsText>
                </CallUsCtn>
                {/*<HeroDisclaimerResponsive dangerouslySetInnerHTML={{__html: page.medicarePrescriptionDrugPageCustomFields?.heroDisclaimer}}/>*/}
            </PageContainer>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

const PageContainer = styled.div`
  padding: 0 24px;
  background-color: #E3DEDA;
`;

const CallUsCtn = styled.div`
  display: flex;
  align-items: center;
  padding: 0 38px;

  > img {
    width: 19px;
    margin: 4px 15px 0 2px;
  }
`;

const CallUsText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  color: #4D4D4D;
`;

const MainTitle = styled.h1`
  padding: 0 24px;

  font-family: 'IvyPresto Display';
  font-family: 'IvyPresto Display-SemiBold', serif;;

  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 115%;

  text-align: center;

  color: #4D4D4D;

  margin: 0 auto 14px;
`;

const Subtitle = styled.h2`
  margin: 0 auto 50px;

  height: 48px;

  font-family: 'Open Sans', Arial, Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;

  text-align: center;

  color: #4D4D4D;
`;

export default MedicarePrescriptionDrugPage;
