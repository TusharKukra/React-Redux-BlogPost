import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Home = () => {

    /** To read / view the data use useSelector */
    const blogs = useSelector(state => state);

    const dispatch = useDispatch();

    /** Deleting Blog Function  */
    const deleteBlog = (id) => {
        dispatch({type:"DELETE_BLOG", payload: id});
        toast.warning("Blog deleted Successfully")
    }

    return (
        <div className="App">
            <Navbar name="Blog Post Application" title="Add Blog" link="/add"/>
            <div className="container">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h1 className="display-4 mark text-center pb-3 mb-3 color-head">Blogs</h1>
                    <table className="table table-hover">
                        <thead className="bg-light text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {
                                blogs.map((blog,id)=>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td>{blog.title}</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                            <button to={`/edit/${blog.id}`} type="button" onClick={()=> deleteBlog(blog.id)}  className="btn btn-small btn-danger mr-2">Delete</button>
                                            <Link to={`/view/${blog.id}`} className="btn btn-small btn-secondary mr-2">View</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Home
