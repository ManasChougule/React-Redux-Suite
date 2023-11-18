
import "./Home.css";
function Home(){

    return(
        <div className="home-container">
            <a href="todo" className="btn btn-warning link">
                To Do App
            </a>
            <a href="notes" className="btn btn-warning link">
                Note Keeper
            </a>
            <a href="timer" className="btn btn-warning link">
                Timer App
            </a>
            <a href="counter" className="btn btn-warning link">
                Counter App
            </a>
        </div>
    )
}

export default Home;