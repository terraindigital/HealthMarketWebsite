import React, {FC, ReactNode} from 'react';
import { parentPort } from 'worker_threads';

// Styles
import {
  Wrapper,
  Title,
  Content
} from "./styles"

interface Props {
  title: String,
  content: String
}

const toggleAccordion = (el) => {
  const parent = el.target.parentElement
  parent.classList.toggle('active')
}

const Accordion: FC<Props> = ({ title, content }) => {
  return (
    <Wrapper className="accordion">
      <Title className="title" onClick={toggleAccordion}>
        {title}
      </Title>
      <Content className="content">
        {content}
      </Content>
    </Wrapper>
  )
};

export default Accordion