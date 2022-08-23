import {Link} from "gatsby";
import React from "react";
import {PlansByStateLinks} from "./styles";
import {useMedicareMenuQuery} from "../../hooks/plans-by-state/useMedicareMenuQuery";
import {useDentalInsuranceMenuQuery} from "../../hooks/plans-by-state/useDentalInsuranceMenuQuery";
import {useHealthInsuranceMenuQuery} from "../../hooks/plans-by-state/useHealthInsuranceMenuQuery";
import {useLifeInsuranceMenuQuery} from "../../hooks/plans-by-state/useLifeInsuranceMenuQuery";
import {useMedicareEligibilityMenuQuery} from "../../hooks/plans-by-state/useMedicareEligibilityMenuQuery";

const PlansByStateMenu = () => {
    const {medicareEligibility} = useMedicareEligibilityMenuQuery();
    const {medicare} = useMedicareMenuQuery();
    const {healthInsurance} = useHealthInsuranceMenuQuery();
    const {dentalInsurance} = useDentalInsuranceMenuQuery();
    const {lifeInsurance} = useLifeInsuranceMenuQuery();

    return (
        <PlansByStateLinks>
            <h6>Medicare Eligibility by State</h6>
            <div className="medicare-eligibility-by-state">
                {medicareEligibility.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <Link
                            key={index}
                            to={`/medicare-eligibility/${node.slug}`}
                        >
                            {node.slug.toUpperCase()}
                        </Link>
                    )
                )}
            </div>
            <h6>Medicare Plans by State</h6>
            <div className="medicare-plans-by-state">
                {medicare.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <Link
                            key={index}
                            to={`https://healthmarkets.com/plans-by-state/${node.slug}/medicare/${node.slug}`}
                        >
                            {node.slug.toUpperCase()}
                        </Link>
                    )
                )}
            </div>
            <h6>Health Insurance Plans by State</h6>
            <div className="health-insurance-by-state">
                {healthInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <Link
                            key={index}
                            // to={`/plans-by-state/${node.slug}/health-insurance/${node.slug}`}
                            to={`https://healthmarkets.com/plans/aca-health/${node.title.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            {node.slug.toUpperCase()}
                        </Link>
                    )
                )}
            </div>
            <h6>Dental Insurance Plans by State</h6>
            <div className="dental-insurance-by-state">
                {dentalInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <Link
                            key={index}
                            to={`https://healthmarkets.com/plans-by-state/${node.slug}/dental-insurance/${node.slug}`}
                        >
                            {node.slug.toUpperCase()}
                        </Link>
                    )
                )}
            </div>
            <h6>Life Insurance Plans by State</h6>
            <div className="life-insurance-by-state">
                {lifeInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <Link
                            key={index}
                            to={`https://healthmarkets.com/plans-by-state/${node.slug}/life-insurance/${node.slug}`}
                        >
                            {node.slug.toUpperCase()}
                        </Link>
                    )
                )}
            </div>
        </PlansByStateLinks>
    )
}

export default PlansByStateMenu
