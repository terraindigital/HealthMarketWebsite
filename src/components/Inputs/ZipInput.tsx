import React, {ChangeEventHandler, useState} from "react";
import {Styles} from "./Geocode/AutocompleteField/styles";
import {Global} from "@emotion/react";
import {isValidZip} from "../../static/scripts/global";
import styled from "@emotion/styled";

const ZipInput = ({zip, setZip}: { zip: string, setZip: (value: string) => void }) => {

  const [touched, setTouched] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setZip(e.target.value);
  }

  const onBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTouched(true);
  }

  const shouldShowError = touched && !isValidZip(zip);

  return (
    <>
      <Global styles={Styles}/>
      <div className="group input">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgBrVSxUttAEN09ayKnivIFyEUycpo4dYrIhBSp4A8wBTPGFPgPkP8ACsAd8AXQMQN4ZApqTIWgEn9Ah/EMWvY8Olk2Z8kMvBnZu9Luu727fYugQf3McVHQIps2IFrDl0Q9fi72Fu6OYQbgGOGJY6MJ+2y6GTkhPcNK+1/QzYgBoYzV0x8VNPFKQxpO+DYWwG/4zibkEctKDSM64v1aqaqqJva/7s0HJX5Q+gRwqBKJwFs7/740jXh4FPWOs48ItWECJxex39yqhg+6BI71ODauFh9MfCzpYrFx+q1CRuFKVSorhBzUO+UtRNqIK2+1/wbeZIyICkYNRttrwQwoikcvqQzhjy5G8Mo/Rwn9mVop3no3dl0tccoOp52rDnwX98pevyzPZRHb8AbwrSdkO79v7l8RE+G1cqTiYHbqSvzf030VEFFyrtz4mU2v0PDLG6rn+Y70xLE0w9h38xQlFSrFofwI9J1kyB+pfSnToc1JjY5jRwPuz/9BqAKbR7Y1sD4vE5GXVmgR+toLT4bQuKISdJFY3pIIhZsiTBFQ7xM+VSc7any6dZxaTG5DBiQZJZenJ0+3G7A0Dwh52BCswEgACiEfwzZ/L+3O3/6iKDWQeJEBmX7Tt63RYjmQwVMH0rlzgAKWdZXnEudhGvm7iXXkcpgJ+AC0F4Ja+syFgLkPqVhBzmkB9CUS0HoB6Cbcq5bImd0AAAAASUVORK5CYII="
          alt="map location pin image"/>
        <input type="text" autoComplete="off" className="geocode input" placeholder="Enter Zip Code" value={zip} onChange={onChange} onBlur={onBlur}/>
        {shouldShowError && <ValidationMessage>Please enter a valid ZIP code</ValidationMessage>}
      </div>
    </>
  )
}

export const ValidationMessage = styled.span`
  color: white;
  text-align: left;
  display: block;
  position: absolute;
`;

export default ZipInput;
