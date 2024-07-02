import { useDispatch,useSelector } from "react-redux";
import { scoreKeeperSelector } from "../../redux/reducers/cricketScoreKeeperReducer";
import { actions } from "../../redux/reducers/cricketScoreKeeperReducer";
import { createRef } from "react";
import { Box, Button, TextField } from '@mui/material';
export const Score_Commentary = () => {
    const { score, wicket, hit,  ballWiseRes} = useSelector(scoreKeeperSelector);
    const dispatch = useDispatch();
    const scoreValues = [0, 1, 2, 3, 4, 5, 6];
    let inputRef = createRef();
    let hitRef = createRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!hit){
            hitRef.current.value=null;
            inputRef.current.value = "";
            return;
        }
        if(hit == "Out"){
            dispatch(actions.addWicket());
        }
        else{
            dispatch(actions.addScore(hit));
        }

        let commentary = inputRef.current.value;
        dispatch(actions.addStatus({hit,commentary}));

        inputRef.current.value = "";
    }

    const ScoreButtons = () => (
        <div style={{ whiteSpace: 'nowrap' , marginTop:'1rem' }}>
            {scoreValues.map((score) => (
                <button key={score} onClick={() => dispatch(actions.setHitStatus(score))} style={{ display: 'inline-block' }}>
                    {score}
                </button>
            ))}
            <button onClick={() => dispatch(actions.setHitStatus(-1))} style={{ display: 'inline-block' }}>Wicket</button>
        </div>
    )

    const Form = () => (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
                value={hit ? hit : undefined}
                onChange={(e) => {}}
                inputRef={hitRef}
                variant="outlined"
                size="small"
            />
            <TextField
                placeholder="Add a comment"
                inputRef={inputRef}
                variant="outlined"
                size="small"
            />
            <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                Submit
            </Button>
        </Box>
    )

  return (<>
        <h2> Score: {score} / {wicket}</h2>
        <ScoreButtons />
        <br /><br />
        <Form />
        <hr />
        <div>
            {ballWiseRes.map((res, index) => (
                (
                    <p key={index + 1}>
                        {res.hit === "." ? "" : `${res.hit}`} , {"~ "}{res.commentary}
                    </p>
                )
            ))}
        </div>
  </>)
};
