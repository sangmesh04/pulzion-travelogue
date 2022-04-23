import { Link } from "react-router-dom";


const Media = () => {
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
       <li className="nav-item active">
         <Link className="nav-link active" to="/trips">
           <span data-feather="file"></span>
           <i className="bi bi-handbag"></i> Trips
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/map">
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

 <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
     <h1 className="h2">Media</h1>
     <div className="btn-toolbar mb-2 mb-md-0">
     <button type="button" className="btn mx-2 btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#uploadImage">
     <span data-feather="calendar"></span>
     <i class="bi bi-cloud-upload"></i> Upload Images
     </button>
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
<div className="mediaPart">

</div>


 </main>

 <div className="modal fade" id="uploadImage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
  <form action="#">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Create gallery to share images</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  Something went wrong!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="alert alert-success alert-dismissible fade show" role="alert">
<strong>Gallery</strong> created successfully!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <div className="form-floating">
      <input type="text" className="form-control" required id="tripname" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Name the gallery</label>
      </div>
      <br />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" id='signupbtn' className="btn btn-primary">Create</button>
      </div>
    </div>
    </form>
  </div>
</div>
</div>
</div>
     </div>
     );
}
 
export default Media;