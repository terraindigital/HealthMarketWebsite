import React from 'react'
import { Container, Results, ResultsInner, ResultsHeadingArea, PaginationList, PaginationListItem, Divider, NoResultsArea } from "./styles"
import Heading from "./Heading";
import useLocationSearch from "../../hooks/useLocationSearch";
import {
    InstantSearch,
    connectHits,
    connectPagination,
    connectSearchBox,
    Index,
    SearchBox
} from 'react-instantsearch-dom';
import IndividualResult from "./IndividualResult";
import { Configure } from 'react-instantsearch-dom';
import flattenSnippet from "./flatten-algolia-snippet";

const Pagination = connectPagination(({ currentRefinement, nbPages, refine }) => {
    return (
        <PaginationList>
            <PaginationListItem>
                <button
                    name="Go to previous page"
                    disabled={currentRefinement === 1 || nbPages < 2}
                    onClick={event => {
                        event.preventDefault();
                        refine(currentRefinement - 1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" transform="scale(-1,1)" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </PaginationListItem>
            {new Array(nbPages).fill(null).map((_, index) => {
                const page = index + 1;
                return (
                    <PaginationListItem key={index}>
                        <button
                            className={currentRefinement === page ? "selected" : ""}
                            onClick={event => {
                                event.preventDefault();
                                refine(page);
                            }}
                        >
                            {page}
                        </button>
                    </PaginationListItem>
                );
            }).slice(Math.max(currentRefinement-2, 0), Math.max(currentRefinement-2, 0) + 3)}
            <PaginationListItem>
                <button
                    name="Go to next page"
                    disabled={currentRefinement === nbPages}
                    onClick={event => {
                        event.preventDefault();
                        refine(currentRefinement + 1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </PaginationListItem>
        </PaginationList>
    )
});

const SearchTitle = connectSearchBox(({ currentRefinement }) => (
    <>
        <ResultsHeadingArea>
            <Heading>{currentRefinement ? `Results for: ${currentRefinement}` : "Recommended"}</Heading>
            <Pagination/>
        </ResultsHeadingArea>
    </>
))

const WrappedResults = connectHits(({ hits, category }: { hits: { objectID: string, [key: string]: any }[], category?: string }) => {

    return (
        <ResultsInner>
            {(hits && hits.length > 0) ? hits.map((hit: any) => {
                const foundProducts = (hit?.taxonomies?.product || []).map((x: any) => ({title: x}))
                const flattedSnipped = flattenSnippet(hit._snippetResult)
                return (
                    <IndividualResult
                        title={hit?.post_title}
                        breadcrumbs={[
                            {title: category},
                            ...foundProducts
                        ]}
                        bodyText={flattedSnipped}
                        link={hit?.permalink}
                    />
                )
            }) : <NoResultsArea>
                <h3>No results</h3>
                <p>Try changing your search terms and try again.</p>
            </NoResultsArea>}
        </ResultsInner>
    )
})

/*const WrappedPosts = connectHits(({ hits }) => {

    if (!hits || hits.length === 0) return null
    return (
        <Results>
            <ResultsHeadingArea>
                <Heading>Results</Heading>
                <Pagination/>
            </ResultsHeadingArea>
            <Divider />
            <ResultsInner>
                {hits.map((hit: any) => {
                    return (
                        <ArticlesInner
                            title={hit?.post_title}
                            bodyText={hit?.post_excerpt}
                            link={hit?.permalink}
                        />
                    )
                })}
            </ResultsInner>
        </Results>
    )
})*/

interface SearchBoxProvided {
    refine: (...args: any[]) => any;
    currentRefinement: string;
    isSearchStalled: boolean;
    searchTerm: string
}

const HiddenSearchBox = connectSearchBox(({ searchTerm, refine }: SearchBoxProvided) => {
    React.useEffect(() => {
        refine(searchTerm)
    }, [searchTerm])
    return null
})

const SearchGrid = ({ searchTerm = "" }) => {

    const { searchClient, searchState, onSearchStateChange, createURL } = useLocationSearch({ searchTerm })
    //const plansSearch = useLocationSearch({ searchTerm })
    //const articlesSearch = useLocationSearch({ searchTerm })

    return (
        <Container>
            <InstantSearch searchClient={searchClient} searchState={searchState} onSearchStateChange={onSearchStateChange} createURL={createURL} indexName="wp_content_searchable_posts">
                <HiddenSearchBox searchTerm={searchTerm} />
                <Configure hitsPerPage={6} />
                <Results>
                    <SearchTitle/>
                    <Divider />
                    <WrappedResults category="Resources" />
                    <Index indexName="wp_core_searchable_posts">
                        <ResultsHeadingArea>
                            <Heading>From our site</Heading>
                            <Pagination/>
                        </ResultsHeadingArea>
                        <Divider/>
                        <WrappedResults category="HealthMarkets.com" />
                    </Index>
                </Results>
            </InstantSearch>
            {/*<InstantSearch {...plansSearch} indexName="hm-agents">
                <PlansByState>
                    <Heading>Find Plans by State</Heading>
                    <PlansInner>

                    </PlansInner>
                </PlansByState>
            </InstantSearch>
            <InstantSearch {...articlesSearch} indexName="wp_searchable_posts">
                <HiddenSearchBox searchTerm={searchTerm} />
                <WrappedPosts />
            </InstantSearch>*/}
        </Container>
    )
}

export default SearchGrid
