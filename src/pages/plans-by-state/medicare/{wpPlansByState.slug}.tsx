// Library
import React from "react"
import {graphql} from "gatsby";
import {GatsbyImage, getImage, ImageDataLike} from "gatsby-plugin-image";
// Component
import Layout from "../../../components/Layout";

interface Proof {

    title: string,
    content: string,
    name: string,
    location: string,
}

interface PageInfo {
    page: {
        title: string;
        pageData: {
            medicare: {
                hero: {
                    title: string,
                    subtitle: string,
                    image: {
                        mediaItemUrl: string;
                        localFile: ImageDataLike;
                    },
                },
                proof1: Proof;
                proof2: Proof;
                proof3: Proof;
            }
            cityList: string
        }
    }
}

const StatePage = ({data}: { data: PageInfo }) => {
    const {title} = data.page
    const cityList: string[] = data.page.pageData.cityList.split(",")
    const {hero, proof1, proof2, proof3} = data.page.pageData.medicare
    const imageData = getImage(hero.image.localFile)

    // Parse text with variables. e.g: {pageTitle}
    const heroTitle = hero.title.replace("{pageTitle}", title)
    const heroSubtitle = hero.subtitle.replace("{pageTitle}", title)

    return (
        <Layout>
            {/* Hero */}
            <div
                className="flex pt-10 bg-center bg-cover"
                style={{
                    backgroundImage: "url(https://www.healthmarkets.com/wp-content/uploads/2016/03/bg-blue-people.jpg)"
                }}
            >
                <div className="w-2/3  pl-16">
                    <h1>{heroTitle}</h1>
                    <h4>{heroSubtitle}</h4>
                    <button className="">Free Quotes</button>
                    <p className="mt-8 text-xl font-semibold leading-7 box-border text-neutral-600">
                       <span id="" className="font-semibold box-border">
                          <a
                              className="leading-7 bg-transparent cursor-pointer box-border hover:text-neutral-800 focus:text-neutral-800"
                              href="tel:+18666830506"
                              data-wpel-link="internal"
                          >
                              Call us 24/7 at (866) 683-0506
                          </a>
                      </span><br/>
                        or&nbsp;
                        <a
                            href="https://www.healthmarkets.com/local-health-insurance-agent/"
                            target="_blank"
                            className="font-semibold text-sky-500 hover:text-sky-800 focus:text-sky-800" rel="noreferrer"
                        >
                            Find an Agent
                        </a>&nbsp;
                        near you
                    </p>

                </div>
                <div className="">
                    {imageData && <GatsbyImage image={imageData} alt="Hero Image"/>}
                </div>
            </div>

            {/* Proof Section */}
            <div className="flex flex-col bg-sky-500 md:flex-row">
                {
                    [proof1, proof2, proof3].map((proof, index) => (
                        <div key={index}>
                            <h2>{proof.title} ::</h2>
                            <p>{proof.content}</p>
                            <p>
                                <span>{proof.name}</span> - <i>{proof.location}</i>
                            </p>
                        </div>
                    ))

                }
            </div>

            {/* Insurance Type*/}
            <div className="grid grid-cols-1 text-center p-20">
                <h1 className="">HealthMarkets offers the following types of insurance for residents
                    of {title}.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-green-600 hover:text-green-900">
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>
                    <div>
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>
                    <div>
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>
                    <div>
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>
                    <div>
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>
                    <div>
                        <i>Icon</i>
                        <h6>Title</h6>
                    </div>

                </div>
            </div>

            {/* Coverage */}
            <div
                className="
                    grid grid-cols-1
                    p-20
                    border border-solid box-border border-zinc-300 bg-stone-100
                    text-neutral-600
                    md:grid-cols-2
                "
            >
                <div className="">
                    <h5 className="font-bold">Here are a few of the cities where we offer coverage.</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {
                            cityList.map((city, index) => (
                                <li key={index}>{city}</li>
                            ))
                        }
                    </div>
                </div>
                <div className="grid content-center px-5 text-center">
                    <h3 className="text-2xl font-semibold">
                        Call us 24/7 at&nbsp;
                        <a
                            className="text-lime-500 hover:text-lime-700 focus:text-lime-700"
                            href="tel:+18666830506"
                            data-wpel-link="internal"
                        >
                            (866) 683-0506
                        </a>
                        <br/>
                        or&nbsp;
                        <a
                            href="https://www.healthmarkets.com/local-health-insurance-agent/"
                            data-wpel-link="internal"
                            className="text-lime-500 hover:text-lime-700 focus:text-lime-700"
                        >
                            Find an Agent
                        </a>&nbsp;near you.
                    </h3>
                </div>
            </div>
        </Layout>
    )
}

export default StatePage

export const pageQuery = graphql`
query($slug: String!)
    {
        page: wpPlansByState(slug
    :
        {
            eq: $slug
        }
    )
        {
            id
            slug
            title
            pageData
            {
                cityList
                medicare
                {
                    proof1
                    {
                        content
                        title
                        name
                        location
                    }
                    proof2
                    {
                        content
                        fieldGroupName
                        location
                        name
                        title
                    }
                    proof3
                    {
                        content
                        fieldGroupName
                        location
                        name
                        title
                    }
                    isActive
                    hero
                    {
                        fieldGroupName
                        subtitle
                        title
                        image {
                            mediaItemUrl
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(quality: 100)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
