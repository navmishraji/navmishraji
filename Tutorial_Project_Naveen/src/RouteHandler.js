import { Redirect, Route, Switch } from "react-router";
import Tutorial from "./componets/Tutorails/Tutorail";
import TutorialList from "./componets/Tutorails/TutorailList";
import Home from "./componets/Home/Home";
import NoMatchUrl from "./componets/NoMatchUrl/NoMatchUrl";
import NavBar from "./componets/NavBar/NavBar";
import TutorialEdit from "./componets/Tutorails/TutorialEdit";

function RouteHandle(){
    return(
        <>
        <div>
           <NavBar/>
        </div>
        <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" exact render={() => <Redirect to ="/home"/>}/>
        <Route path="/tutoriallist" component={TutorialList}/>
        <Route path="/tutorialadd" component={Tutorial}/>
        <Route path="/tutorialedit/:id" component={TutorialEdit}/>
        <Route  component={NoMatchUrl}/>
        </Switch>


        </>
    )
}
export default RouteHandle;