import React, {FC, ReactNode} from "react"
import Layout from "../../../components/Layout";
import styled from "@emotion/styled";

interface CardPros {
    icon: ReactNode;
    title: string;
    content: string;
    name: string;
    location: string;
}

const Title = styled.h3``

const Content = styled.p``

const Name = styled.p``

const Location = styled.p``

const Card: FC<CardPros> = ({icon, title, content, name, location}) => {
    return (
        <>
            <Title>{icon} {title} ::</Title>
            <Content>{content}</Content>
            <>
                <Name>{name}</Name> - <Location>{location}</Location>
            </>
        </>
    )
}

const StatePage = () => {
    return (
        <Layout>
            <div className="bg-light-blue theme-white pv-s6 mb-s4">
                <div className="container-fluid ui-max-width color-themeable">
                    <div className="row">
                        <Card
                            icon="\e920"
                            title="Choice"
                            content="Our HealthMarkets agent was excellent. She explained our Medicare choices and followed up at every level."
                            name="Leon"
                            location="La Jolla, CA"
                        />
                        <Card
                            icon={<></>}
                            title="Choice"
                            content="Our HealthMarkets agent was excellent. She explained our Medicare choices and followed up at every level."
                            name="Leon"
                            location="La Jolla, CA"
                        />
                        <Card
                            icon={<></>}
                            title="Choice"
                            content="Our HealthMarkets agent was excellent. She explained our Medicare choices and followed up at every level."
                            name="Leon"
                            location="La Jolla, CA"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default StatePage

// plans-by-state/dental-insurance/al
// plans-by-state/health-insurance/al
// plans-by-state/life-insurance/al
// plans-by-state/medicare/al
