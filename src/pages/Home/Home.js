
import "./Home.css";
import { Link } from "react-router-dom";
function Home(){

    return(
        <div className="home-container">
            <Link to="todo" className="btn btn-warning link">
                To Do App
            </Link>
            <Link to="notes" className="btn btn-warning link">
                Note Keeper
            </Link>
            <Link to="timer" className="btn btn-warning link">
                Timer App
            </Link>
            <Link to="counter" className="btn btn-warning link">
                Counter App
            </Link>
            <Link to="cmt" className="btn btn-warning link">
                Customer Management Tool
            </Link>
            <Link to="blogs" className="btn btn-warning link">
                React Blogs
            </Link>
        </div>
    )
}

export default Home;