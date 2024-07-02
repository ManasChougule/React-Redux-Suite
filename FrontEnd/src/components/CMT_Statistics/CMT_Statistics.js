import { useSelector } from "react-redux";
import { cmtSelector } from "../../redux/reducers/cmtReducer";
export const CMT_Statistics = () => {
  const { total_capacity , seats_left} = useSelector(cmtSelector);

  return (<>
    <h2 style={{marginTop:'1rem'}}>Total Capacity: {total_capacity}</h2>
    <h3>Seats Left: {seats_left}</h3>
  </>)
};
