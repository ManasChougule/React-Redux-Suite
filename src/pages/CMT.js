import {CMT_Statistics} from "../components/CMT_Statistics/CMT_Statistics";
import CMTForm from "../components/CMT_Form/CMT_Form";
import CMT_Table from "../components/CMT_Table/CMT_Table";


export const CMT = ()=>{
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "100vh", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "4rem" }}>
                <h1 style={{marginTop:'1%'}}>Customer Management Tool</h1>
            </div>
            <CMT_Statistics />
            <CMTForm />
            <CMT_Table />
        </div>
    );
};