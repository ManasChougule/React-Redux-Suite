
let todos=[];

module.exports.get=(req, res)=>{
    todos=[
        {
            "text":"Go to Gym at 9", "completed":false
        },
        {
            "text":"Go to Office at 10", "completed":false
        },
        {
            "text":"Meeting at 11", "completed":false
    }]    
    return res.end(JSON.stringify(todos));  
}

module.exports.addTodo = (req, res) => {
    let newTodo = req.body;
    todos.push(newTodo);
    return res.end(JSON.stringify(todos));
};
