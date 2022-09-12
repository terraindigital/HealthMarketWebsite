import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Logo, CloseButton, Inner } from "./styles"

// Scripts
import { toggleSearch } from "../../assets/scripts/global";

// Components
import Input from "../Inputs/Input";

// Images
import siteLogo from "../../assets/images/HMIA_logo2.png"
import Icon from "../../assets/images/search-icon.png"

const SearchField = () => {
  return (
    <Wrapper className="search-box-mobile">
      <Link to="/">
        <Logo src={siteLogo} />
      </Link>
      <CloseButton onClick={toggleSearch} />
      <Inner>
        <div>
          <form className="search-box">
            <Input classes="search-box-input" id="searchBox" type="text" name="query" placeholder="Search" />
            <button type="submit" className="search-box-submit">
              <img src={Icon} alt="search icon" />
            </button>
          </form>
        </div>
      </Inner>
    </Wrapper>
  )
}

export default SearchField