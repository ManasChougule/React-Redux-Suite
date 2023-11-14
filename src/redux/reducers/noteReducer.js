// import actions
// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";


// add initial state
const initialState = {
    notes:[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'
    , createdOn: new Date()},
    {text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.'
    , createdOn: new Date()}]
}


//  note slice & reducer using redux toolkit
const noteSlice = createSlice({
    name:"notes",
    initialState : initialState,
    reducers : {
        add : (state , action) => {
            state.notes.push({
                text : action.payload , 
                createdOn : new Date()
            })
        },

        delete : (state , action) =>{
            state.notes.splice(action.payload)
        }

    }
})


export const noteReducer=noteSlice.reducer;

export const actions = noteSlice.actions;





// //add note reducers
// export function noteReducer(state = initialState , action){
//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn : new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             return {
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }

