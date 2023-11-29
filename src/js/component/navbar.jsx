import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
        <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <a className="btn btn-black dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar
