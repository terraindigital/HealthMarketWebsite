import React, { FC, ReactNode } from "react"

// Queries
import { useFooterProductMenuQuery } from "../../hooks/footer/useFooterProductMenuQuery"
import { useFooterConnectMenuQuery } from "../../hooks/footer/useFooterConnectMenuQuery"
import { useFooterGetCounselMenuQuery } from "../../hooks/footer/useFooterGetCounselMenuQuery"
import { useFooterGetToKnowUsMenuQuery } from "../../hooks/footer/useFooterGetToKnowUsMenuQuery"
import FooterComponent, {FooterProps} from "./component";

interface Props {
  complianceCode: string
  children: string
}

const Footer: FC<Omit<FooterProps, "data">> = ({ complianceCode, children }) => {
  const { productMenu } = useFooterProductMenuQuery()
  const { connectMenu } = useFooterConnectMenuQuery()
  const { counselMenu } = useFooterGetCounselMenuQuery()
  const { getToKnowUsMenu } = useFooterGetToKnowUsMenuQuery()

  return <FooterComponent data={{
    productMenu,
    connectMenu,
    counselMenu,
    getToKnowUsMenu
  }} complianceCode={complianceCode} children={children} />
}

export default Footer
