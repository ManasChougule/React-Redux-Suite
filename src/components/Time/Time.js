import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions , timerSelector } from "../../redux/reducers/timerReducer";
export const Time = () => {
    const dispatch = useDispatch();
    const { isRunning, elapsedTime } = useSelector(timerSelector);
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
            dispatch(actions.incrementTimer());
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };

    }, [isRunning, dispatch]);

    return <b className="outer-time-div">{elapsedTime}</b>;
};
