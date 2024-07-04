
const todos=[
    {
        "text":"Go to Gym at 9", "completed":false
    },
    {
        "text":"Go to Office at 10", "completed":false
    },
    {
        "text":"Meeting at 11", "completed":false
    }
]

module.exports.get=(req, res)=>{
    return res.end(JSON.stringify(todos));  
}

module.exports.addTodo = (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    console.log('&&&',todos)
    return res.end(JSON.stringify(todos));
};
