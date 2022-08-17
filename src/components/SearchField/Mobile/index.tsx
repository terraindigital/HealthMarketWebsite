import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Logo, CloseButton, Inner } from "./styles"

// Scripts
import { toggleMobileSearch } from "../../../assets/scripts/global";

// Components
import Input from "../../Inputs/Input";

// Images
import siteLogo from "../../../images/HMIA_logo2.png"
import Icon from "../../../images/search-icon.png"

const SearchFieldMobile = () => {
  return (
    <Wrapper className="search-box-mobile">
      <Link to="/">
        <Logo src={siteLogo} />
      </Link>
      <CloseButton onClick={toggleMobileSearch} />
      <Inner>
        <div>
          <form className="search-box">
            <Input classes="search-box-input" id="searchBox" type="text" name="search" placeholder="Search" />
            <button type="submit" className="search-box-submit">
              <img src={Icon} alt="search icon" />
            </button>
          </form>
        </div>
      </Inner>
    </Wrapper>
  )
}

export default SearchFieldMobile