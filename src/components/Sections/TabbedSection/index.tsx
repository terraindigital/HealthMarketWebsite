import { Link } from 'gatsby';
import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper, Tabs } from "./styles";

interface Props {
  color: String,
  children: ReactNode,
  tabs: SectionTabs[]
}

interface SectionTabs {
  id: number,
  name: String
}

const switchBgColor = (bgColor) => {
  switch (bgColor) {
    case 'primary':
      return "#F3FAFD"
    case 'accent':
      return "#F1FBEA"
    case 'dark':
      return "#4D4D4D"
    default:
      return "#FFFFFF"
  }
}

const TabbedSection: FC<Props> = ({ color, tabs, children}) => {
  const bgColor = switchBgColor(color)

  return (
    <Wrapper backgroundColor={bgColor} className={`section ` + color}>
      <Tabs>
        {tabs.map(tab => (
          <a className="section-tab" href={`#` + tab} key={tab.id}>{tab}</a>
        ))}
      </Tabs>
      {children}
    </Wrapper>
  )
};

export default TabbedSection