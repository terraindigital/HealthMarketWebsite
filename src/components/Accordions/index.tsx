import React, {FC, ReactNode} from 'react';

// Styles
import {
  Wrapper,
  Title,
  Content
} from "./styles"

interface Props {
  title: String,
  content: String,
  html?: boolean
}

const toggleAccordion = (el) => {
  const parent = el.target.closest('.accordion')
  parent.classList.toggle('active')
}

const Accordion: FC<Props> = ({ title, content, html=false }) => {
  return (
    <Wrapper className="accordion">
      <Title className="title" onClick={toggleAccordion}>
        <h2>{title}</h2>
      </Title>
      <Content className="content">
        {(!html) ? (
          <p>{content}</p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </Content>
    </Wrapper>
  )
};

export default Accordion