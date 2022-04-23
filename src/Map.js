import { Link } from "react-router-dom";
import Map from "mapmyindia-react";
import { useState } from "react";

const MapT = () => {

    const [Location,setLocation] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      const locationData = {Location, lat, lng};
      console.log(locationData);
    }  
  const [lat, setLat] = useState(18.51957);
  const [lng, setLng] = useState(73.85535);
  const [status, setStatus] = useState(null);
  
  function getLocation () {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  
  window.onload = getLocation;

    return ( 
        <div className="dashboard">
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
<Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="../"><h1 className="logo">Trave<span id="logospan">log</span>ue</h1></Link>
<button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
</header>

<div className="container-fluid">
<div className="row">
 <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
   <div className="position-sticky pt-3">
     <ul className="nav flex-column">
       <li className="nav-item">
         <Link className="nav-link" aria-current="page" to="/dashboard">
           <span data-feather="home"></span>
           <i className="bi bi-house"></i> Dashboard
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/trips">
           <span data-feather="file"></span>
           <i className="bi bi-handbag"></i> Trips
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link active" to="/map">
           <span data-feather="shopping-cart"></span>
           <i className="bi bi-map"></i> Map
         </Link>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">
           <span data-feather="layers"></span>
           <i className="bi bi-box-arrow-left"></i> Sign Out
         </a>
       </li>
     </ul>
     <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
       <span>History </span>
       <a className="link-secondary" href="#" aria-label="Add a new report">
         <span data-feather="plus-circle"></span>
       </a>
     </h6>
     <ul className="nav flex-column mb-2">
       <li className="nav-item">
         <a className="nav-link" href="#">
           <span data-feather="file-text"></span>
           Past Trips
         </a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">
           <span data-feather="file-text"></span>
          Past Expenditure
         </a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">
           <span data-feather="file-text"></span>
           Past Trip Media
         </a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">
           <span data-feather="file-text"></span>
           Year-end sale
         </a>
       </li>
       </ul>
   </div>
 </nav>

 <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
     <h1 className="h2">Map</h1>
     <div className="btn-toolbar mb-2 mb-md-0">
       <div className="btn-group me-2">
         <button type="button" className="btn btn-sm btn-outline-secondary">Trips: 05</button>
         <button type="button" className="btn btn-sm btn-outline-secondary">Expenses: ₹ 74,630</button>
       </div>
       <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
         <span data-feather="calendar"></span>
         This year
       </button>
     </div>
   </div>
   
   {/* <!-- LIST --> */}
     <div className="row">
         <div className="col-md-12">
         <Map
        markers={[
          {
            position: [lat, lng],
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
      />
         </div>
     </div>

 </main>
</div>
</div>
     </div>
     );
}
 
export default MapT;