
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";


export const Todo = ()=>{
    return (
        <div className="page">
            <h1>To Dos</h1>
            <ToDoForm  />
            <ToDoList />
        </div>
    );
};