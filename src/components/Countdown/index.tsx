import React, {FC} from "react"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// Styles
import { Wrapper } from "./styles"

interface Props {
  date?: number,
}


const Countdown: FC<Props> = ({date}) => {
  return (
    <Wrapper>
    <FlipClockCountdown labelStyle={{ fontFamily: 'IvyPresto Display-SemiBold'}} className='flip-clock' to={date as number} showSeparators={false} />
    </Wrapper>
  );
};

export default Countdown
