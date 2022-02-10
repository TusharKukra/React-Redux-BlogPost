import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import './css/style.css';

import {useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router'


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

    /** Implementing Validations */
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !description){
            return toast.warning("Please fill all the fields!!");
        }

        // Checking for Same title & different-id:

        const checkTitle = blogs.find(
            (blog) => blog.title === title && blog.id !== id
        );
        
        if(checkTitle){
            return toast.error("This title is already Exists, Please enter new Title");
        }

        const data = {
            id:id,
            title,
            catagory,
            description,
        }

        console.log(data);
        
        dispatch(
            {
                type:"UPDATE_BLOG", 
                payload:data
            }
        );
        toast.success("Blog updated Successfully !!")

        // After saving go back to the Home page (thats why use : useHistory)
        history.push("/")
    };

    return (

        <div className="App">
            <Navbar name="Blog Post Application" title="Back" link="/"/>
            <div className="container">
                {currentBlog ? (

            <>    
            <div className="row">
                

                <div className="col-md-12 shadow mx-auto pb-1 px-5 py-4 mt-5 mb-5 color">
                <h1 className="display-4 mark text-center pb-3 color-head">Edit Blog {id}</h1>
                    <form onSubmit={handleSubmit}>

                        {/** Title, Catagory, Description and Add Blog Button*/}
                        <div className="form-group my-3">
                            <input type="text" placeholder="Title" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Catagory" className="form-control" value={catagory} onChange={(e)=> setCatagory(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <textarea type="text" rows="5" placeholder="Description" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                        </div>
 
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-success"/>
                            <input type="reset" value="Clear" className="btn ml-2 btn-danger"/>
                        </div>

                    </form>
                </div>
            </div>
     
        </>
        ) : (
        <h1 className="display-3 my-5 text-center">Blog does not Exist</h1>)}
        </div>
        </div>
        
    )
}

export default EditBlog
