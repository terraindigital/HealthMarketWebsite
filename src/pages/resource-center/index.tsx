// Library
import * as React from 'react';

// Queries
import { useResourceCenterPageQuery } from '../../hooks/useResourceCenterPageQuery';

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';
import Hero from '../../components/Hero';
import { HeroHeading, HeroSubheading } from '../../components/Hero/Variants/stdPageStyles';
import TabbedSection from '../../components/Sections/TabbedSection';
import Section from '../../components/Sections';
import Medial from '../../components/Medials';
import Button from '../../components/Buttons/Button';
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';
import Flag from '../../components/Flag';
import Icons from '../../components/Icons';
import Icon from '../../components/Icons/Icon';

const ResourceCenterPage = () => {
  const { page } = useResourceCenterPageQuery();

  const sectionTabs = Array()
  sectionTabs.push("Medicare")
  sectionTabs.push("Health Insurance")
  sectionTabs.push("Life Insurance")
  sectionTabs.push("Other Plans")
  sectionTabs.push("Wellness")

  return (
    <Layout>
      <Seo title="Home"/>
      <Hero
        image={page.featuredImage.node.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroHeadlines.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroHeadlines.subheadline}</HeroSubheading>
      </Hero>
      <TabbedSection
        color="primary"
        tabs={sectionTabs}>
        {/* navigation */}
        <Section color="primary" heading="Featured Medicare articles">
          <Flag>
            <div className="left" style={{ maxWidth: "54rem" }}>
              <h2>{page.resourceCenterPageCustomFields.featuredArticle.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.featuredArticle.content }} />
              <p><a href="#">View article</a></p>
            </div>
            <div className="right">
              <img
                src={page.resourceCenterPageCustomFields.featuredArticle.image.sourceUrl}
                alt={page.resourceCenterPageCustomFields.featuredArticle.title} />
            </div>
          </Flag>
          <Cards>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article1.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article1.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article1.content }} />
            </Card>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article2.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article2.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article2.content }} />
            </Card>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article3.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article3.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article3.content }} />
            </Card>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article4.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article4.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article4.content }} />
            </Card>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article5.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article5.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article5.content }} />
            </Card>
            <Card
              image={page.resourceCenterPageCustomFields.additionalArticles.article6.image.sourceUrl}
              title={page.resourceCenterPageCustomFields.additionalArticles.article6.title}>
              <div dangerouslySetInnerHTML={{ __html: page.resourceCenterPageCustomFields.additionalArticles.article6.content }} />
            </Card>
          </Cards>
          <div style={{ marginTop: "3.4rem", textAlign: "center" }}>
            <Button background="accent" border="accent" color="light">View more articles</Button>
          </div>
        </Section>
      </TabbedSection>
      <Section color="light" heading="Our Plans">
        <Icons>
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan1.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan1.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan2.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan2.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan3.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan3.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan4.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan4.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan5.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan5.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan6.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan6.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan7.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan7.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan8.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan8.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan9.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan9.title} />
          <Icon
            icon={page.resourceCenterPageCustomFields.rcPlans.rcPlan10.icon.sourceUrl}
            title={page.resourceCenterPageCustomFields.rcPlans.rcPlan10.title} />
        </Icons>
      </Section>
      <Medial color="primary">
        <div>
          <h1>Need help?</h1>
          <h5>Talk to a licensed insurance agent.</h5>
        </div>
        <div>
          <span style={{ marginRight: "8.9rem" }}>
            <Button background="accent" border="accent" color="light">Call 900-000-0000</Button>
          </span>
          <span>
            <Button background="accent" border="accent" color="light">Find an agent</Button>
          </span>
        </div>
      </Medial>
    </Layout>
  );
};

export default ResourceCenterPage;