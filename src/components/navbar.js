import { Link,Outlet } from "react-router-dom";
function Navbar() {


    return (
        <div id='navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Kao.<span style={{fontSize:'20px',color:'#3498db'}}>web</span></Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        {/* <ul id='navgruop' className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a href='#Home' className="nav-link" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='#Project' className="nav-link" >Project</a>
                            </li>
                           
                        </ul> */}
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Navbar;