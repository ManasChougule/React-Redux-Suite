import { useDispatch , useSelector } from "react-redux";
import { actions } from "../../redux/reducers/blogsAppReducer";
import { blogsSelector } from "../../redux/reducers/blogsAppReducer";

import { useState,createRef} from "react";
import { db } from "../../firebaseInit";
import { doc , setDoc  , deleteDoc} from "firebase/firestore"; 
import styles from './blogs.module.css';

function DisplayBlogs ({updateIndex, setUpdateIndex, titleRef}){

    const [updatedTitle , setUpdatedTitle] = useState("")
    const [updatedContent, setUpdatedContent] = useState("");
    let {blogs} = useSelector(blogsSelector); 
    const dispatch = useDispatch();

    async function removeBlog(id){
        titleRef.current.focus();
        await deleteDoc(doc(db, "blogs", id));    
    }
    
    function updateBlog(i) {
        setUpdateIndex(i);
        setUpdatedTitle(blogs[i].title);
        setUpdatedContent(blogs[i].content); 
    }
    
    function handleContentChange(e) {
        if(e.target.className===`${styles.input} ${styles.title}` ){
            setUpdatedTitle(e.target.value);
        }else{
            setUpdatedContent(e.target.value); 
        }
    }
    
    async function saveChanges(i,id){
    
        if(updatedContent.trim()){
            await setDoc(doc(db, "blogs", id), { 
                    title: updatedTitle,
                    content: updatedContent,
                    createdOn: new Date(),
            });
            setUpdateIndex(-1);
        }else{
            alert('Content is required.');
            return;
        }
    }
    
    function cancleChanges(i){
        let index = i
        let new_content = blogs[i].content;
        let new_title = blogs[i].title;
        dispatch(actions.updateBlog({index , new_content , new_title}))
        titleRef.current.focus();
        setUpdateIndex(-1);
    }
    

    return (<>
    
        <h2> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className={styles.blog} key={i}>

                <div className={styles.blog_btn}>
                    {updateIndex === i ? null: 
                    <button onClick={()=>updateBlog(i)} className= {`${styles.btn} ${styles.update}`} >
                        Update
                    </button>}
                </div>

                <input style={{marginTop:'10px'}}
                    type="text"
                    className={`${styles.input} ${styles.title}`}
                    placeholder="Enter title for blog..."
                    value={updateIndex===i ? updatedTitle : blog.title}
                    onChange={(e) => e.target.value.length<30 ? handleContentChange(e) : alert('Size of title need to be less than 30')}
                    disabled={updateIndex !== i ? true : false} 
                />
                <hr/>

                <textarea
                    className={`${styles.input} ${styles.content}`}
                    placeholder="Content of the Blog goes here.."
                    value={updateIndex === i ? updatedContent : blog.content}
                    onChange={(e) => handleContentChange(e)}
                    disabled={updateIndex !== i ? true : false}
                    required
                />

                <div className={styles.blog_btn}>
                    {updateIndex === i ? 
                    <div className={styles.btn_container}>
                        <div style={{ width: '60px', marginRight:'20px'}}>
                            <button onClick={()=>saveChanges(i,blog.id)} className={`${styles.btn} ${styles.save}`}>
                                Save
                            </button>
                        </div>
                        <div style={{ width: '60px'}}>
                            <button onClick={()=>cancleChanges(i)} className={`${styles.btn} ${styles.save}`} >
                                Cancle
                            </button>
                        </div>
                    </div>
                    : 
                    <button onClick={()=>removeBlog(blog.id)} className={`${styles.btn} ${styles.remove}`}>
                        Delete
                    </button>}
                </div>

            </div>
        ))}

    </>)

}

export default DisplayBlogs;