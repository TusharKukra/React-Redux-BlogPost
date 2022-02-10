import React, {useState} from 'react'
import Navbar from './Navbar'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const AddBlog = () => {

    
    /** Validations */
    const [title, setTitle] = useState("");
    const [catagory, setCatagory] = useState("");
    const [description, setDescription] = useState("");

    /** For adding data into system we have to use useSelector method */
    /** here we return the state in the method bcoz our state contains our Array of Data */
    const blogs = useSelector((state) => state);

    const dispatch = useDispatch();

    const history = useHistory();
    

    /** Implementing Validations */
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !description){
            return toast.warning("Please fill all the fields!!");
        }

        // Checking for Same title :
        const checkTitle = blogs.find(
            (blog) => blog.title === title
        );
        
        if(checkTitle){
            return toast.error("This title is already Exists, Please enter new Title");
        }

        const data = {
            id: blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 0,
            title,
            catagory,
            description,
        }

        console.log(data);
        
        /**Action (Add Blog) */
        dispatch(
            {
                type:"ADD_BLOG", 
                payload:data
            }
        );
        toast.success("Blog added Successfully !!")

        // After saving go back to the Home page (thats why use : useHistory)
        history.push("/")
    };

    return (

        <div className="App">
            <Navbar name="Blog Post Application" title="Back" link="/"/>
            <div className="container">
            <div className="row">
                

                <div className="col-md-12 shadow mx-auto pb-1 px-5 py-4 mt-5 mb-5 color">
                <h1 className="display-4 mark text-center pb-3 color-head">Add Blog</h1>
                    <form onSubmit={handleSubmit}>

                        {/** Title, Catagory, Description and Add Blog Button*/}
                        <div className="form-group my-3">
                            <input type="text" placeholder="Title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Catagory" className="form-control" value={catagory} onChange={(e) => setCatagory(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <textarea type="text" rows="5" placeholder="Description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
 
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-block btn-success"/>
                        </div>

                        <div className="form-group">
                            <Link to="/">
                            <button type="reset" value="Cancel" className="btn btn-block btn-warning">Cancel</button>
                            </Link>
                        </div>


                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default AddBlog
