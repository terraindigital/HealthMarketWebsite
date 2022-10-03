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
import {isSearchBoxOpen, toggleSearch} from "../../static/scripts/global";

// Components
import Input from "../Inputs/Input";

// Images
import siteLogo from "../../static/images/HMIA_logo2.png"
import Icon from "../../static/images/search-icon.png"
import SearchGrid from "../SearchGrid";
import {useLocation} from "@reach/router";
import * as qs from "qs";
import debounce from "debounce";

const SearchField = () => {

  const [query, setQuery] = React.useState("")

  const location = useLocation()

  React.useEffect(() => {
    const q = qs.parse(location.search.slice(1))
    if (q.search || q.query) {
      setQuery(q.search as string || q.search as string)
      if (!isSearchBoxOpen()) {
        toggleSearch()
      }
    }
  }, [location])

  const debouncedUpdater = debounce(setQuery, 600)

  return (
    <Wrapper className="search-box">
      <Inner>
        <TopBar>
          <Link to="/">
            <Logo src={siteLogo} />
          </Link>
          <CloseButton onClick={toggleSearch} />
          <div>
            <form className="search-box" onSubmit={(e) => e.preventDefault()}>
              <Input defaultValue={query} classes="search-box-input" id="searchBox" type="text" name="query" placeholder="Search" onChange={(e) => {
                e.preventDefault()
                debouncedUpdater(e.currentTarget.value)
              }} />
              <button type="submit" className="search-box-submit">
                <img src={Icon} alt="search icon" />
              </button>
            </form>
          </div>
        </TopBar>
        <Results>
          {query && <SearchGrid searchTerm={query} />}
        </Results>
      </Inner>
    </Wrapper>
  )
}

export default SearchField
