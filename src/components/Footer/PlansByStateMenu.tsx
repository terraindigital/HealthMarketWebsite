import React from "react";
import {PlansByStateLinks} from "./styles";
import {useMedicareMenuQuery} from "../../hooks/plans-by-state/useMedicareMenuQuery";
import {useDentalInsuranceMenuQuery} from "../../hooks/plans-by-state/useDentalInsuranceMenuQuery";
import {useHealthInsuranceMenuQuery} from "../../hooks/plans-by-state/useHealthInsuranceMenuQuery";
import {useLifeInsuranceMenuQuery} from "../../hooks/plans-by-state/useLifeInsuranceMenuQuery";
import {useMedicareEligibilityMenuQuery} from "../../hooks/plans-by-state/useMedicareEligibilityMenuQuery";

const PlansByStateMenu = () => {
    const { wpcontent: { allMedicareEligibility: medicareEligibility } } = useMedicareEligibilityMenuQuery();
    const { wpcontent: { allPlansByState: medicare } } = useMedicareMenuQuery();
    const { wpcontent: { allPlansByState: healthInsurance } } = useHealthInsuranceMenuQuery();
    const { wpcontent: { allPlansByState: dentalInsurance } } = useDentalInsuranceMenuQuery();
    const { wpcontent: { allPlansByState: lifeInsurance } } = useLifeInsuranceMenuQuery();

    return (
        <PlansByStateLinks>
            <h6>Medicare Eligibility by State</h6>
            <div className="medicare-eligibility-by-state">
                {medicareEligibility.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <a href={`https://www.healthmarkets.com/content/medicare-eligibility-${node.title.toLowerCase().replaceAll(' ', '-')}`}>
                            {node.slug.toUpperCase()}
                        </a>
                    )
                )}
            </div>
            <h6>Medicare Plans by State</h6>
            <div className="medicare-plans-by-state">
                {medicare.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <a href={`https://www.healthmarkets.com/plans-by-state/${node.slug}/medicare/${node.slug}`}>
                            {node.slug.toUpperCase()}
                        </a>
                    )
                )}
            </div>
            <h6>Health Insurance Plans by State</h6>
            <div className="health-insurance-by-state">
                {healthInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <a href={`https://www.healthmarkets.com/plans/aca-health/${node.title.replace(/\s+/g, '-').toLowerCase()}`}>
                            {node.slug.toUpperCase()}
                        </a>
                    )
                )}
            </div>
            <h6>Dental Insurance Plans by State</h6>
            <div className="dental-insurance-by-state">
                {dentalInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <a href={`https://www.healthmarkets.com/plans-by-state/${node.slug}/dental-insurance/${node.slug}`}>
                            {node.slug.toUpperCase()}
                        </a>
                    )
                )}
            </div>
            <h6>Life Insurance Plans by State</h6>
            <div className="life-insurance-by-state">
                {lifeInsurance.nodes.map((node: { title: string; slug: string }, index: number) => (
                        <a href={`https://www.healthmarkets.com/plans-by-state/${node.slug}/life-insurance/${node.slug}`}>
                            {node.slug.toUpperCase()}
                        </a>
                    )
                )}
            </div>
        </PlansByStateLinks>
    )
}

export default PlansByStateMenu
