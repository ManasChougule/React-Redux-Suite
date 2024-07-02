import { Score_Commentary } from "../components/Score_Commentary/Score_Commentary";


export const CricketScoreKeeper = ()=>{
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "100vh", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "4rem" }}>
                <h1 style={{marginTop:'1%'}}>Cricket Score Keeper</h1>
            </div>
            <Score_Commentary/>
        </div>
    );
};