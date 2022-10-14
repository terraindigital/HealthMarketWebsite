import React, { FC } from "react"
import FooterComponent, {FooterProps} from "./component";

const Footer: FC<Omit<FooterProps, "data">> = () => {

  return <FooterComponent data={process.env.FOOTER_MENU as any || {}} complianceCode="" children="" />
}

export default Footer
