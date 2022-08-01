// Library
import * as React from 'react';
import { Global } from '@emotion/react';

// Queries
import { useContentPageQuery } from '../../hooks/useContentPageQuery';

// Styles
import { PageStyles } from './styles';

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';
import Section from '../../components/Sections';
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';
import Button from '../../components/Buttons/Button';

const ResourceCenterPage = () => {
  const { page } = useContentPageQuery();

  return (
    <Layout staticHeader>
      <Global styles={PageStyles} />
      <Seo title="Get Counsel"/>
      <Section page="get-counsel" color="primary" heading="Related resources">
        <Cards>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle1.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle1.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle2.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle2.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle3.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle3.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle4.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle4.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle4.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle5.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle5.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle5.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle6.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle6.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle6.content }} />
          </Card>
        </Cards>
        <div style={{ marginTop: "3.4rem", textAlign: "center" }}>
          <Button background="accent" border="accent" color="light">View more articles</Button>
        </div>
      </Section>
      <Section color="light" heading="Related content">
        <Cards>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle1.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle1.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle2.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle2.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle3.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle3.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle4.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle4.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle4.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle5.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle5.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle5.content }} />
          </Card>
          <Card
            image={page.contentPageCustomFields.contentArticles.contentArticle6.image.sourceUrl}
            title={page.contentPageCustomFields.contentArticles.contentArticle6.title}>
            <div dangerouslySetInnerHTML={{ __html: page.contentPageCustomFields.contentArticles.contentArticle6.content }} />
          </Card>
        </Cards>
        <div style={{ marginTop: "3.4rem", textAlign: "center" }}>
          <Button background="accent" border="accent" color="light">View more articles</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ResourceCenterPage;