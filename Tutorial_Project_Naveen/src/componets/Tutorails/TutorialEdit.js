import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TutorialList from "./TutorailList";

function TutorialEdit(props){

    const url = "http://localhost:3030/tutorial";
    const [title,setTitle] = useState(""); // set title
    const [description,setDescription] = useState(""); // set description
    const [status,setStatus] = useState(""); // set status
    const [getDetails,setGetDetails] = useState([]); // set
    const [statusCheck,setStatusCheck] = useState(false);
    const history = useHistory();
    // fetch unqiue id record in update function
    const getTutorialDetails =()=>{
        let tId = props.match.params.id;
        axios.get(url+"/"+tId).then(response =>{
            let tutorial = response.data
            setGetDetails(tutorial)
            setTitle(tutorial.title)
            setDescription(tutorial.description)
            setStatus(tutorial.status)
        });
    }
    useEffect(() =>{
        getTutorialDetails();
    },[]);

    // set published status
    const getSatusPublished =()=>{
        setStatus("Published")
        setStatusCheck(true);
    }
    // set UnPublished status
    const getSatusUnPublished =()=>{
        setStatus("UnPublished")
        setStatusCheck(false);
    }
    // update record and set updated value
    const updateRecord=()=>{
        let tid = props.match.params.id;
        axios.put(url +"/"+tid,{
            "title":title,
            "description":description,
            "status":status
        }).then(response =>{
            alert("record is updated sccessfully");
            history.push("/tutoriallist")
        });
    }

    // delete single record
    const deleteRecord=()=>{
        let did = props.match.params.id;
        if(window.confirm("Are you sure you want to delete this record ?")){
            axios.delete(url +"/"+did).then(response =>{
                history.push("/tutoriallist")
            });
        }else{
            getTutorialDetails();
        }
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="header">
                        <h3>Tutorial Details Edit</h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form className="sudent-form">
                                        <div className="row">
                                            <div className="col-md-2"></div>
                                            <div className="col-md-2">
                                               <label>Title</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input className="form-control" id="title" value={title} type="text" onChange ={(event) => setTitle(event.target.value)}  placeholder="Enter Title"/>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                        <div className="col-md-2"></div>
                                            <div className="col-md-2">
                                               <label>Discription</label>
                                            </div>
                                            <div className="col-md-6">
                                                <textarea className="form-control" id="description" value={description} type="text" onChange ={(event) => setDescription(event.target.value)}  placeholder="Enter Discripation"></textarea>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div><br/>
                                        <div className="row">
                                            <div className="col-md-2"></div>
                                            <div className="col-md-2">
                                                <label>Status</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input className="form-control" value={status} type="text" onChange ={(event) => setStatus(event.target.value)}/>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div><br/>
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-2">
                                                <button className="form-control btn btn-primary btn-sm" type="button"  onClick = {
                                                () =>{ statusCheck ? getSatusUnPublished() : getSatusPublished()
                                                }} >{ statusCheck ? "UnPublished" : "Published" }</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button className="form-control btn btn-info btn-sm" type="button" onClick={updateRecord}>Update</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button className="form-control btn btn-danger btn-sm" type="button" onClick={deleteRecord}>Delete</button>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TutorialEdit;