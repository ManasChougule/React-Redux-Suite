import { Count } from "../components/Count/Count";
import { CounterActions } from "../components/CounterActions/CounterActions";

export const Counter = ()=>{
    return (
        <div className="page">
            <h1>Counter</h1>
            <Count  />
            <CounterActions />
        </div>
    );
};