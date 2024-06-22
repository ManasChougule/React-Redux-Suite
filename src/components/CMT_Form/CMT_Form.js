import { useDispatch , useSelector } from "react-redux";
import { actions } from "../../redux/reducers/cmtReducer";
import { createRef } from "react";
import { cmtSelector } from "../../redux/reducers/cmtReducer";

function CMTForm() {
    const { seats_left} = useSelector(cmtSelector);

    let inputRef1 = createRef();
    let inputRef2 = createRef();
    let inputRef3 = createRef();

    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault();  
        const now = new Date();

        const timeString = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

        if(seats_left>=inputRef1.current.value){
            let arr2=[]; 
            arr2.push(
                        inputRef1.current.value,
                        inputRef2.current.value,
                        inputRef3.current.value,
                        timeString,
                        "-",
                        "Click to Checkout",
                        "Delete"
                    )
            let value = inputRef1.current.value
            dispatch(actions.unshift({arr2,value}));
        }else{
            alert("Guest count exceeds capacity");
        }

        inputRef1.current.value="";
        inputRef2.current.value="";
        inputRef3.current.value="";
    }

    return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '14rem'  }}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center',  }}> 
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="number" ref={inputRef1} placeholder="Guests Count" required/><br/>
            <input type='text' ref={inputRef2} placeholder="Primary Guest Name" required/><br/>
            <input ref={inputRef3} placeholder="Phone Number" required/>
        </div>
        <div style={{ marginLeft: '20px' }}>
            <button type="submit">Add Entry</button>
        </div>
    </form>
</div>


    );
}

export default CMTForm;
