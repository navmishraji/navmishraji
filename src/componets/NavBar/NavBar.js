
function NavBar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><span className="fa fa-home"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tutoriallist">Tutorial List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tutorialadd">Tutorial Add</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar;