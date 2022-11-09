import React from "react";
import Layout from "../components/Layout";
import { Left, Wrapper, Right, ListWrapper, List, Container } from "../components/404/styles";
import LittleGirl from "../static/images/little-girl-image.png";
import Magnifier from "../static/images/magnifying-glass.png";
import PriceTag from "../static/images/price-tag.png";

function NotFound() {
    return (
        <Layout>
            <Container>
                <Wrapper>
                    <Left>
                        <h1>Uh-oh,</h1>
                        <h3>Something may be broken</h3>
                        <p>
                            The page you are looking for can't be found. Get your{" "}
                            <a href="https://shop.healthmarkets.com/"> FitScore®</a>, <br />{" "}
                            <a href="https://www.healthmarkets.com/local-health-insurance-agent/">
                                Find an agent,
                            </a>{" "}
                            or follow the links below to access more pages.
                        </p>
                        <ListWrapper>
                            <ListItems
                                icon={Magnifier}
                                list={listItemsOne}
                                text="Get Counsel"
                            />
                            <ListItems
                                icon={PriceTag}
                                list={listItemsTwo}
                                text="Compare affordable insurance plans"
                            />
                        </ListWrapper>
                    </Left>
                    <Right>
                        <img src={LittleGirl} />
                    </Right>
                </Wrapper>
            </Container>
        </Layout>
    );
}

const ListItems = ({ icon, list, text }: any) => {
    return (
        <List>
            <img src={icon} alt="icon" />
            <div className="line" />
            <p className="text">{text}</p>
            <ul>
                {Object.keys(list).map(function(key){
                    return <li><a href={list[key]}>{key}</a></li>;
                })}
            </ul>
        </List>
    );
};

const listItemsOne = {
    "Find an Agent":
        "https://www.healthmarkets.com/local-health-insurance-agent/",
    "Get your FitScore®": "https://shop.healthmarkets.com/",
};
const listItemsTwo = {
    "Health" : "https://www.healthmarkets.com/health-insurance/",
    "Medicare": "https://www.healthmarkets.com/medicare/",
    "Small Business": "https://www.healthmarkets.com/small-business/",
    "Dental": "https://www.healthmarkets.com/debtal/",
    "Vision": "https://www.healthmarkets.com/vision/",
    "Life": "https://www.healthmarkets.com/life/",
    "Supplemental": "https://www.healthmarkets.com/supplemental/",
};

export default NotFound;
