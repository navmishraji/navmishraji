import axios from "axios";
import { useEffect, useState } from "react";

function Try (){

    const url = "http://localhost:3030/";
    const [result, setResult] = useState([]);
    const getData = () =>{
        axios.get(url).then(res =>{
            console.log(res.data);
            let getItem = res.data;
            setResult(getItem);
            console.log(getItem[0].Name);
        })
    }

    useEffect(() =>{
        getData();
    },[])

return (
    <>
     {
         result.map(item =>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{item.Name}</h1>
                            </div>
                    </div>
                </div>
            </div>
         )
     }


    </>
)
}
export default Try;