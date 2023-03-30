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

const MedicarePrescriptionDrugPage = () => {
    const {page} = useMedicarePrescriptionDrugPageQuery();
    return (
        <Layout>
            <Tracing/>
            <MainTitle>Compare Medicare Part D plans</MainTitle>
            <Subtitle>Find prescription drug coverage that fits your lifestyle</Subtitle>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

const MainTitle = styled.h1`
  width: 286px;

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
  
  width: 328px;
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
