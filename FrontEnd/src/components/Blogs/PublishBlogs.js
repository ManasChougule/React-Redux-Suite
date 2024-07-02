import { useSelector } from "react-redux";
import { actions } from "../../redux/reducers/blogsAppReducer";
import { blogsSelector } from "../../redux/reducers/blogsAppReducer";
import { useState , useRef } from "react";
import styles from './blogs.module.css';
import { db } from "../../firebaseInit";
import { collection , addDoc} from "firebase/firestore"; 
import { createRef } from "react";

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
            <label>{label}<br/></label>
            {props.children}
            <hr />
        </>
    )
}

function PublishBlogs({updateIndex,titleRef}) {

    const [formData,setFormData]=useState({ title:"", content:"" }); 
    const {blogs} = useSelector(blogsSelector); 
    

    async function handleSubmit(e){
        e.preventDefault();
        if(updateIndex!==-1){
            alert('first update the blog you are trying to update then only you can add new blog')
            return; 
        }

        if(!formData.content.trim()){  
            alert('Content is required.');
            return;
        }

        await addDoc(collection(db, "blogs"), {
            title: formData.title,
            content: formData.content,
            createdOn: new Date(),
        }); 
        
        setFormData({title: "" , content: ""})

        titleRef.current.focus();
    }   

    return (<>
        <div className={styles.section}>
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input  className={`${styles.input} ${styles.title}`}
                                placeholder="Enter the title of the blog here.."
                                value={formData.title}
                                ref = {titleRef}
                                onChange = {(e) =>  e.target.value.length<30 ? setFormData({title : e.target.value , content: formData.content}) : alert('Size of title need to be less than 30 charachters')}
                        />
                </Row >

                <Row label="Content">
                        <textarea className={`${styles.input} ${styles.content}`}
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange = {(e) => setFormData({title : formData.title , content : e.target.value})}
                                required 
                        />
                </Row >
         
                <button className = {styles.btn}>ADD</button>
            </form>  
        </div>
    </>);
}

export default PublishBlogs;
