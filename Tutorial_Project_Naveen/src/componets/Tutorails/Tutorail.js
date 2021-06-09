import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './tutorial.css';
const Tutorial =() =>{

    const url = "http://localhost:3030/tutorial";
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("");
    const [status,setStatus] = useState("Unpublished");
    const history = useHistory();
    // reccord insert into database
    function AddTutorialRecord(){
        axios.post(url,{
            "title":title,
            "description":description,
            "status":status
        }).then(response =>{
            history.push("/tutoriallist")
        });
    }
    // reset from input
    function ResetTutorialRecord(){
        setTitle("");
        setDescription("");
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="header">
                        <h3>Tutorial Details Add</h3>
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
                                                <input className="form-control" id="title" value={title} type="text" onChange={(event) => setTitle(event.target.value)}  placeholder="Enter Title"/>
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
                                                <textarea className="form-control" id="description" value={description} type="text" onChange={(event) => setDescription(event.target.value)}  placeholder="Enter Discripation"></textarea>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div><br/>
                                        <div className="row">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-1">
                                                <button className="form-control btn btn-success btn-sm" type="button" onClick={AddTutorialRecord}>Save</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button className="form-control btn btn-info btn-sm" type="button" onClick={ResetTutorialRecord}>Reset</button>
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
export default Tutorial;