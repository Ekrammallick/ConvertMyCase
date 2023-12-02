
// import PropTypes from 'prop-types';
export default function Navbar(props){
    return(
<>
<nav className={`navbar navbar-expand-lg  bg-${props.mode} `}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'} `}  href="/">CMC.Net</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} href="/">About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} href="/">Contact</a>
        </li>
        
        
      </ul>
    </div>
    <div className="form-check form-switch">
       <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
       <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}htmlFor="flexSwitchCheckDefault"> Dark mode</label>
   </div>
  </div>
  
</nav>
</>
    );
}
// Navbar.defaultProps={
//     title:'logo',
//     about:'About US',
//     cotact:'contact US'
// }
// Navbar.propTypes={
//     title:PropTypes.string,
//     about:PropTypes.string,
//     cotact:PropTypes.string
// }

