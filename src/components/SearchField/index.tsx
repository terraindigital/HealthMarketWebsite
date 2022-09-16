import React from "react";
import { Link } from "gatsby";

// Styles
import {
  Wrapper,
  TopBar,
  Logo,
  CloseButton,
  Inner,
  Results
} from "./styles"

// Scripts
import { toggleSearch } from "../../static/scripts/global";

// Components
import Input from "../Inputs/Input";

// Images
import siteLogo from "../../static/images/HMIA_logo2.png"
import Icon from "../../static/images/search-icon.png"

const SearchField = () => {
  return (
    <Wrapper className="search-box-mobile">
      <Inner>
        <TopBar>
          <Link to="/">
            <Logo src={siteLogo} />
          </Link>
          <CloseButton onClick={toggleSearch} />
          <div>
            <form className="search-box">
              <Input classes="search-box-input" id="searchBox" type="text" name="query" placeholder="Search" />
              <button type="submit" className="search-box-submit">
                <img src={Icon} alt="search icon" />
              </button>
            </form>
          </div>
        </TopBar>
        <Results />
      </Inner>
    </Wrapper>
  )
}

export default SearchField