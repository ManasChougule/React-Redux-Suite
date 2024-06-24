import PublishBlogs from "../components/Blogs/PublishBlogs";
import DisplayBlogs from "../components/Blogs/DisplayBlogs";
import { useState ,useRef , useEffect} from "react";

import { useDispatch , useSelector } from "react-redux";
import { blogsSelector } from "../redux/reducers/blogsAppReducer";
import { db } from "../firebaseInit";
import { collection , onSnapshot } from "firebase/firestore"; 
import { actions } from "../redux/reducers/blogsAppReducer";

export const Blogs = ()=>{
    let [updateIndex, setUpdateIndex] = useState(-1); 
    const titleRef = useRef(null);
    const {blogs} = useSelector(blogsSelector); 
    const dispatch = useDispatch();
    

    useEffect(()=>{  
        titleRef.current.focus(); 
    },[]);

    useEffect(()=>{
        if(blogs.length){
            blogs[0].title ? document.title = blogs[0].title : document.title = "No Title!"
        }else{
            document.title = "No Blogs!!";
        }
    },[blogs])

    

    useEffect(()=>{
        const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
            let blogs = snapShot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    createdOn: data.createdOn ? {
                        seconds: data.createdOn.seconds,
                        nanoseconds: data.createdOn.nanoseconds
                    } : null
                };
            });
            blogs.sort((a, b) => b.createdOn.seconds - a.createdOn.seconds);
            dispatch(actions.reloadBlogs(blogs));
        });
        
    },[]);

    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "4rem" }}>
                <h1 style={{marginTop:'1%'}}>Post Your Blogs Here !</h1>
            </div>
            <PublishBlogs updateIndex={updateIndex} titleRef={titleRef}/>
            <DisplayBlogs updateIndex={updateIndex} setUpdateIndex={setUpdateIndex} titleRef={titleRef}/>
        </div>
    );
};