
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import button from "bootstrap/js/src/button";
import {logout} from "../../Redux/accountAction";
function HeaderComponent() {
    const account=useSelector(state => state.user.account);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/home");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className='img-card-header'>
                   <Link to='/home'> <span><img src="https://png.pngtree.com/png-vector/20190828/ourmid/pngtree-leaf-hotel-logo-png-image_1699641.jpg" width='60px' alt=""/></span></Link>
                    <span>Hotel</span>
                    <span>Booking</span>
                </div>
                <div className="container-fluid">
                    {/*<a className="navbar-brand" href="#" to='/home'>Navbar</a>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active'   to='/list'>List</Link>
                            </li>
                            <li className="nav-item">
                                {!account&&<Link className='nav-link active' to='/login'>Login</Link>}
                            </li>

                            <li className="nav-item">
                            {account&&account.username}
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            {account&& <button className={'btn btn-outline-secondary'} onClick={handleLogout}>Logout</button>}
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default HeaderComponent;