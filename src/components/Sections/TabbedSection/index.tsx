import { Link } from 'gatsby';
import React, {FC, Children} from 'react';

// Styles
import { Wrapper, Tabs } from "./styles";

interface Props {
  color: String,
  children: ReactNode,
  tabs: SectionTabs[]
}

interface SectionTabs {
  id: number,
  name: String,
  active: String,
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

const changeSeoUrl = (name: String) => {
    return name.toString()               // Convert to string
        .normalize('NFD')               // Change diacritics
        .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
        .replace(/\s+/g,'-')            // Change whitespace to dashes
        .toLowerCase()                  // Change to lowercase
        .replace(/&/g,'-and-')          // Replace ampersand
        .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
        .replace(/-+/g,'-')             // Remove duplicate dashes
        .replace(/^-*/,'')              // Remove starting dashes
        .replace(/-*$/,'');             // Remove trailing dashes
}
const TabbedSection: FC<Props> = ({ color, tabs, children, activeTab}) => {
  const bgColor = switchBgColor(color)
  const currentTab = activeTab ? activeTab.substring(1) : changeSeoUrl(tabs[0]);

  return (
    <Wrapper backgroundColor={bgColor} className={`section ` + color}>
      <Tabs>
        {tabs.map(tab => (
          <a className={changeSeoUrl(tab) == currentTab ? "section-tab active" : "section-tab"} href={`#` + changeSeoUrl(tab)} key={tab.id}>{tab}</a>
        ))}
      </Tabs>
      {
          Array.isArray(children) ? (
            Children.map(children, (child: ReactNode) => <> {child.props.page == currentTab ? (<>{child}</>) : ''}</>)
          ) : ({children})
          }
    </Wrapper>
  )
};

export {changeSeoUrl}
export default TabbedSection