import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TutorialList = () =>{

    const url = "http://localhost:3030/tutorial";

    const [result,setResult] = useState([]);
    const [tutorailDetails, setTutorailDetails] = useState([]);
    const [title, setTitle] = useState("");

    // get all record and set result
    const getRecords =() => {
        axios.get(url+"/list").then(response =>{
            setResult(response.data)
        });
    }

    // get unquie id details
    const getTutorialDetails =(id)=>{
        axios.get(url+"/"+id).then(response =>{
            setTutorailDetails(response.data)
        });
    }
    useEffect(() =>{
        getRecords();
    },[]);
    // search particular title
    const Searchresult = ()=>{
        axios.get(url+"?title="+title).then(response =>{
            setResult(response.data)
        });
    }


    // remove all records
    const removeAllRecord =()=>{
        if(window.confirm("Are you sure you want to delete All records ?")){
            axios.delete(url).then(response =>{
                getRecords();
            });
        }else{
            getRecords();
        }
    }
    return (
        <div className="card">
    <div className="card-body">
        <div className="header">
            <h3>Search By Title</h3>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form className="title-form">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-5">
                                    <input className="form-control" id="title" value={title}  type="text"   onChange ={(event) => setTitle(event.target.value)}  placeholder="Enter Title"/>
                                </div>
                                <div className="col-md-1">
                                    <button className="form-control btn btn-success btn-sm" type="button" onClick={Searchresult}>Search</button>
                                </div>
                                <div className="col-md-3"></div>
                            </div><br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="header">
                                        <h1>Tutorial List</h1>
                                    </div>
                                    <table className="table table border">
                                        <tbody>
                                        {
                                            result.map(tutorial =>
                                                <tr key={tutorial.id}>
                                                    <td onClick={() => getTutorialDetails(tutorial._id)}>{tutorial.title}</td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                    </table>
                                    <div className="row">
                                        <div className="col-md-10"></div>
                                        <div className="col-md-2">
                                        <button className="form-control btn btn-dark btn-sm" onClick={removeAllRecord}> RemoveAll</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="header">
                                                <h1>Tutorial Details</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                     <h4 className="heading">Title </h4>  {tutorailDetails ? tutorailDetails.title : "No"}<br/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                     <h4 className="heading">Description </h4>{tutorailDetails ? tutorailDetails.description : "No"}<br/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                     <h4 className="heading">Status</h4>  {tutorailDetails ? tutorailDetails.status : "No"}<br/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10"></div>
                                                 <div className="col-md-2">
                                                    <button className="form-control btn btn-dark btn-sm"> <Link to ={`/tutorialedit/${tutorailDetails._id}`}>Edit</Link></button>
                                                 </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
    )
}

export default TutorialList;