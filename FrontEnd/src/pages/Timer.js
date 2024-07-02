import {Time} from "../components/Time/Time";
import {TimerActions} from "../components/TimerActions/TimerActions";


export const Timer = ()=>{
    return (
        <div className="page">
            <h1>Timer</h1>
            <Time  />
            <TimerActions />
        </div >
    );
};