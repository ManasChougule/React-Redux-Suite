import NoteForm from "../components/NoteForm/NoteForm";
import NoteList from "../components/NoteList/NoteList";

export const Notes = ()=>{
    return (
        <div className="page">
            <h1>Notes</h1>
            <NoteForm  />
            <NoteList />
        </div>
    );
};