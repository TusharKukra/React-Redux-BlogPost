import React, {useEffect, useState} from 'react'
import { useSelector} from 'react-redux';
import './css/style.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import {useParams} from 'react-router-dom';



const EditBlog = () => {

    const {id} = useParams();

    /** Gets all blog data here */
    const blogs = useSelector(state => state)
    const currentBlog = blogs.find(blog => blog.id === id);

    const [title, setTitle] = useState("");
    const [catagory, setCatagory] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        if(currentBlog){
            setTitle(currentBlog.title);
            setCatagory(currentBlog.catagory);
            setDescription(currentBlog.description);
        }
        
    
    },[currentBlog])

    /** For clicking Like Button */
    const[buttonName, setButtonName] = useState('Like');

    /** Click Button Handler Function */
    function clickButton(){
        
        if(buttonName === 'Like'){
            setButtonName('Liked 👍 (1)')
            document.getElementById('btnn').style.backgroundColor="#ff0000";
            document.getElementById('btnn').style.color="#ffffff";
        } else {
            setButtonName('Like');
            document.getElementById('btnn').style.backgroundColor="#f8f8ff";
            document.getElementById('btnn').style.color="#007bff";
        }
    }


    return (

        <div className="App">
            <Navbar name="Blog Post Application" title="Back" link="/"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 myBox">
                        <div className="text-right">
                        <button onClick={clickButton} className="btn btn-small btn-outline-primary mt-4 mr-2 mb-3" id="btnn">{buttonName}</button>
                        <Link to={`/edit/${id}`} className="btn btn-small btn-outline-danger mr-2 mt-4 mb-3">Edit</Link>
                        </div>
                        <h1 className="display-4 mark text-center m-3 color-head">{title}</h1>
                        <h4><span class="badge badge-secondary m-3">{catagory}</span></h4>
                        <p className="description m-3">{description}</p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default EditBlog
