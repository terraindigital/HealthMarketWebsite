import React from "react";
import {useLocation, WindowLocation} from "@reach/router";
import algoliasearch from "algoliasearch";
import * as qs from 'qs';

/*
* ssrQuery: prerendered search results from Gatsby
* documentHeading: Heading that can be templated - will be used to change the document title.
* */

const useLocationSearch = (props?: { searchTerm?: string,  basePath?: string }) => {
    const { basePath = "", searchTerm = "" } = props || {}
    const [searchQuery, setSearchQuery] = React.useState(searchTerm)
    const [filterQueries, setFilterQueries] = React.useState<null | { [key: string]: string }>(null)

    const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID as string, process.env.GATSBY_ALGOLIA_SEARCH_API_KEY as string);
    const postCodeIndex = searchClient.initIndex('plans_geo_data');

    const location = useLocation();

    React.useEffect(() => {
        setSearchQuery(searchTerm)
    }, [searchTerm])

    const DEBOUNCE_TIME = 700;
    const createURL = (state: any) => `?${qs.stringify(state)}`;
    const urlToSearchState = (location: WindowLocation<unknown>) => qs.parse(location.search.slice(1));
    const setStateId: React.MutableRefObject<NodeJS.Timeout | null | undefined> = React.useRef();

    const [searchState, setSearchState] = React.useState(
        urlToSearchState(location)
    );

    const searchStateToUrl = (location: any, searchState: any) =>
        searchState ? `${location.pathname.replace(basePath, "")}${createURL(searchState)}` : '';

    function onSearchStateChange(nextSearchState: any) {
        if (setStateId.current !== null && setStateId.current !== undefined) {
            clearTimeout(setStateId.current);
        }

        setStateId.current = setTimeout(() => {
           window.history.replaceState(nextSearchState, "", searchStateToUrl(location, nextSearchState));
        }, DEBOUNCE_TIME);

        setSearchState(nextSearchState);
    }

    React.useEffect(() => {
        const nextSearchState = urlToSearchState(location);

        if (nextSearchState?.query && nextSearchState?.query.length === 5 && /^[0-9]+$/.test(nextSearchState.query as string)) {
            // @ts-ignore
            postCodeIndex.search('', {
                filters: `zip:${nextSearchState?.query} OR city:${nextSearchState?.query}`
                // @ts-ignore
            }).then(({hits}) => {
                if (hits && hits.length > 0) {
                    // @ts-ignore
                    const searchTerm = hits[0].city + ", " + hits[0].state_id
                    setSearchState({query: searchTerm});
                }
            })

        } else {
            if (JSON.stringify(searchState) !== JSON.stringify(nextSearchState)) {
                setSearchState(nextSearchState);
            }
        }

        // eslint-disable-next-line
    }, [location, searchTerm]);

    const processFilterQueries = (facet: string, value: string) => {
        if (!value) {
            if (filterQueries && Object.keys(filterQueries).length === 1 && Object.keys(filterQueries)[0] === facet) {
                setFilterQueries(null)
            } else {
                const clonedQueries = { ...filterQueries }
                delete clonedQueries[facet]
                setFilterQueries(clonedQueries)
            }
        } else {
            let clonedQueries;
            if (!filterQueries) {
                clonedQueries = {}
            } else {
                clonedQueries = {...filterQueries}
            }
            clonedQueries[facet] = value
            setFilterQueries(clonedQueries)
        }
    }


    return {
        searchQuery,
        filterQueries,
        searchClient,
        searchState,
        setSearchQuery,
        onSearchStateChange,
        processFilterQueries,
        createURL
    }
}

export default useLocationSearch
