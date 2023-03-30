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
            <HeroContainer>
                <MainTitle>Compare Medicare Part D plans</MainTitle>
                <Subtitle>Find prescription drug coverage that fits your lifestyle</Subtitle>
                <PageHeroForm
                    light
                    btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
                    hideFooter
                />
                <CallUsCtn>
                    <img src={PhoneIcon}/>
                    <CallUsText>Call XXX-XXX-XXXX to speak to a licensed insurance agent.</CallUsText>
                </CallUsCtn>
                <DisclaimerText>
                    We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                </DisclaimerText>
                {/*<HeroDisclaimerResponsive dangerouslySetInnerHTML={{__html: page.medicarePrescriptionDrugPageCustomFields?.heroDisclaimer}}/>*/}
            </HeroContainer>
            <HeroMobileImg src={page.pageHeroFields.mobileHeroImage.sourceUrl} alt="Hero"/>
            <SectionContainer>
                <SectionTitle>
                    Prescription Drug
                </SectionTitle>
                <SectionText>
                    A Medicare prescription drug plan can be a smart way to manage the cost of the medications you take now—and those you may need in the future. If you’re entitled to Part A and/or enrolled in Part B of Original Medicare,
                    you’re eligible to join a Part D plan, which helps cover prescription drugs. HealthMarkets can help you understand your eligibility and help you find the Medicare Part D plans that are available.
                </SectionText>
                <SectionSubtitle>
                    Plan facts
                </SectionSubtitle>
                <ListContainer>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.listItems?.split("\n").filter((item: string) => Boolean(item.trim())).map((item: string, i: number) => (
                        <ListItem key={`list-item-${i}`}>{item}</ListItem>
                    ))}
                </ListContainer>
            </SectionContainer>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

const HeroContainer = styled.div`
  padding: 0 24px;
  background-color: #E3DEDA;
`;

const SectionContainer = styled.div`
  background: #f3fafd;
  padding: 40px 0px;
`;

const SectionTitle = styled.h2`
  font-family: 'IvyPresto Display';
  font-family: 'IvyPresto Display-SemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;

  letter-spacing: 0.02em;

  color: #FFFFFF;
  background: #009FDA;

  width: 275px;
  height: 112px;
  padding: 18px 26px 0;
`;

const SectionSubtitle = styled.h2`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: #009FDA;

  padding: 0 30px;
  margin-top: 40px;
`;

const ListContainer = styled.ul`
  padding: 0px 30px;
  list-style: none;
  margin: 22px 0 0;
`;

const ListItem = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  color: #4D4D4D;
`;

const SectionText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  color: #4D4D4D;
  padding: 0 36px;
  margin-top: 40px;
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

const DisclaimerText = styled.div`
  margin-top: 12px;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;

  text-align: center;

  color: #4D4D4D;
`;

const MainTitle = styled.h1`
  padding: 0 24px;

  font-family: 'IvyPresto Display';
  font-family: 'IvyPresto Display-SemiBold', serif;

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

const HeroMobileImg = styled.img`
  background: #E3DEDA;
  margin: -14px 0 0;

  @media only screen and (min-width: 621px) {
    display: none;
  }
`


export default MedicarePrescriptionDrugPage;
