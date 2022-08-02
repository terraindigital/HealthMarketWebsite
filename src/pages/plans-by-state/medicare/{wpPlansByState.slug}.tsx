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
        slug: string;
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
    const {title, slug} = data.page
    const cityList: string[] = data.page.pageData.cityList.split(",")
    const {hero, proof1, proof2, proof3} = data.page.pageData.medicare
    const imageData = getImage(hero.image.localFile)

    // Parse text with variables. e.g: {pageTitle}
    const heroTitle = hero.title.replace("{pageTitle}", title)
    const heroSubtitle = hero.subtitle.replace("{pageTitle}", title)

    return (
        <Layout>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* Hero */}
            <div
                className="flex pt-10 bg-center bg-cover"
                style={{
                    backgroundImage: "url(https://www.healthmarkets.com/wp-content/uploads/2016/03/bg-blue-people.jpg)"
                }}
            >
                {/* Hero - Left */}
                <div className="w-full p-6 pl-12 md:pl-16 md:p-10 lg:w-2/3">
                    <h1 className="my-8 text-5xl font-bold box-border text-sky-500 md:">
                        {heroTitle}
                    </h1>
                    <h4 className="text-3xl">
                        {heroSubtitle}
                    </h4>
                    <button
                        className="
                            my-14 p-4 md:px-16
                            text-white font-semibold
                            bg-orange-400 rounded-md
                            border border-orange-400 border-solid
                            hover:border-orange-600 hover:bg-orange-600 hover:text-white
                            focus:border-amber-800 focus:bg-orange-600 focus:text-white
                        "
                    >
                        <a
                            href="https://shop.healthmarkets.com/about-me/info/?dentalenrollonline=yes&healthACAenrollonline=yes&healthShortTermEnrollOnline=yes&lob=medicare%3Flob%3DMedicare&medicareMAenrollonline=yes&medicarePDPenrollonline=yes&medicareSuppenrollonline=yes&utm_medium=direct&visionenrollonline=yes&_ga=2.158806586.1436626026.1658779043-35000582.1656101147"
                        >
                            Free Quotes
                        </a>
                    </button>
                    <p className="font-bold text-neutral-600">
                        <span>
                            <a
                                className="hover:underline hover:text-neutral-800 focus:text-neutral-800"
                                href="tel:+18666830506"
                                data-wpel-link="internal"
                            >
                              Call us 24/7 at (866) 683-0506
                            </a>
                        </span>
                        <br/>
                        or&nbsp;
                        <a
                            href="https://www.healthmarkets.com/local-health-insurance-agent/"
                            target="_blank"
                            className="font-bold text-sky-500 hover:text-sky-800 focus:text-sky-800"
                            rel="noreferrer"
                        >
                            Find an Agent
                        </a>
                        &nbsp;
                        near you
                    </p>
                </div>
                {/* Hero - Image */}
                <div className="hidden lg:block">
                    {imageData && <GatsbyImage image={imageData} alt="Hero Image"/>}
                </div>
            </div>

            {/* Proof Section */}
            <div className="grid gap-16 grid-cols-1 md:grid-cols-3 p-12 bg-sky-500 text-white">
                {
                    [proof1, proof2, proof3].map((proof, index) => (
                        <div key={index} className="grid gap-5">
                            <h4 className="text-3xl font-bold">{proof.title} ::</h4>
                            <p>{proof.content}</p>
                            <footer className="text-xl">
                                <span>{proof.name}</span> - <cite>{proof.location}</cite>
                            </footer>
                        </div>
                    ))
                }
            </div>


            {/* Insurance Type*/}
            <div className="grid grid-cols-1 gap-10 text-center p-20 md:px-60">
                <h4 className="text-3xl font-bold">
                    HealthMarkets offers the following types of insurance for residents of {title}.
                </h4>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-10">
                    {
                        [
                            {slug: `/plans-by-state/health-insurance/${slug}`, title: "Individual Health Insurance"},
                            {slug: "/small-business", title: "Small Business"},
                            {slug: `/plans-by-state/life-insurance/${slug}`, title: "Life Insurance"},
                            {slug: `/plans-by-state/dental-insurance/${slug}`, title: "Dental Insurance"},
                            {slug: "/vision-insurance", title: "Vision Insurance"},
                            {slug: "/supplemental-insurance", title: "Supplemental Insurance"},
                        ].map((product, index) => (
                            <a
                                key={index}
                                className="grid grid-cols-1 gap-5 text-green-600 hover:text-green-900"
                                href={product.slug}
                            >
                                <i>Icon</i>
                                <span>{product.title}</span>
                            </a>
                        ))
                    }
                </ul>
            </div>

            {/* Coverage */}
            <div
                className="
                    grid grid-cols-1
                    p-32
                    border border-solid box-border border-zinc-300 bg-stone-100
                    text-neutral-600
                    md:grid-cols-2
                "
            >
                <div>
                    <h5 className="pb-8 font-bold">Here are a few of the cities where we offer coverage.</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2">
                        {
                            cityList.map((city, index) => (
                                <li key={index}>{city}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="grid content-center px-5  text-4xl leading-relaxed font-semibold text-center">
                    <h3>
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

            {/* Related Info */}
            <div className="flex flex-col px-32 py-24 gap-6">
                <h3
                    className="text-5xl font-bold text-center text-sky-500"
                >
                    Related Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        [
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            },
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            },
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            },
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            },
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            },
                            {
                                title: "The Truth About Medicare Part B's Dental Coverage",
                                content: "What exactly is included in Medicare Part B dental coverage? HealthMarkets can help you learn how your Medicare health plan handles dentists and..."
                            }
                        ].map((article, index) => (
                            <a
                                key={index}
                                className="
                                flex flex-col flex-grow
                                py-10 px-10
                                text-center break-words
                                box-border basis-auto
                                border-b-1 border-solid border-neutral-100
                                md:border-r-2 md:border-solid md:border-neutral-100
                                hover:border-transparent hover:bg-neutral-100 hover:text-lime-700 focus:text-lime-700"
                                href="https://www.healthmarkets.com/content/medicare-part-b-dental-coverage"
                                data-wpel-link="internal"
                                // style="text-decoration: none; transition: all 0.2s ease-in 0s; flex-shrink: 2;"
                            >
                                <h4
                                    className="pb-6 text-3xl font-semibold capitalize text-lime-500"
                                >
                                    {article.title}
                                </h4>
                                <p
                                    className="break-words"
                                    // style="line-height: normal;"
                                >
                                    {article.content}
                                </p>
                            </a>
                        ))
                    }
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
                        image
                        {
                            mediaItemUrl
                            localFile
                            {
                                childImageSharp
                                {
                                    gatsbyImageData(quality
                                :
                                    100
                                )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
