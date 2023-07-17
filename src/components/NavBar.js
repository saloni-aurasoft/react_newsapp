// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// export class NavBar extends Component {
// render() {  //converting class based to function based

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand active" href="/">NewsMonkey</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ ">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/General">General</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sci& Tech">Sci&Tech</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
// }

export default NavBar