import { graphql, useStaticQuery } from "gatsby";

export const useMedicarePrescriptionDrugPageQuery = () => {
    const data = useStaticQuery(graphql`
query MedicarePrescriptionDrugPageQuery {
  page: wpPage(databaseId: {eq: 7352}) {
    medicarePrescriptionDrugPageCustomFields {
      heroDisclaimer
      medicarePrescriptionDrugSection1 {
        heading
        subheading
        color
        listTitle
        listItems
        sectionCta {
          text
          link
        }
      }
      medicarePrescriptionDrugSection2 {
        title
        subtitle
        buttonTextDesktop
        buttonUrlDesktop
        buttonTextMobile
        buttonUrlMobile
      }
      medicarePrescriptionDrugRelated {
        sectionHeading
        sectionColor
        medicarePrescriptionDrugRelated1 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
        medicarePrescriptionDrugRelated2 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
        medicarePrescriptionDrugRelated3 {
          title
          content
          link
          image {
            sourceUrl
          }
        }
      }
    }
    pageHeroFields {
      heroImage {
        sourceUrl
      }
      mobileHeroImage {
        sourceUrl
      }
      headline
      subheadline
      heroButtons {
        heroButton1 {
          text
        }
        heroButton2 {
          text
        }
      }
      callUs
    }
    disclaimers {
      disclaimer
    }
    seo {
      title
      metaDesc
    }
  }
}
`);

    return data;
};