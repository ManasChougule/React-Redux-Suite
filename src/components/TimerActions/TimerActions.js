import { useDispatch, useSelector } from "react-redux";

import { actions , timerSelector } from "../../redux/reducers/timerReducer";
import "./TimerActions.css"
export const TimerActions = () => {
  const dispatch = useDispatch();
  const { isRunning } = useSelector(timerSelector);
  console.log( useSelector(timerSelector));
  return (
    <div className="actions outer-div">
      <button disabled={isRunning} onClick={() => dispatch(actions.startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(actions.pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(actions.resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
