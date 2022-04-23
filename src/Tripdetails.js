import { Link } from "react-router-dom";

const Tripdetails = () => {

var t = 0;
function add_new(){  
if(t % 2 == 0){  
 document.querySelector('.cont_crear_new').className = "cont_crear_new cont_crear_new_active";

  document.querySelector('.cont_add_titulo_cont').className = "cont_add_titulo_cont cont_add_titulo_cont_active";
  t++;
}else {  document.querySelector('.cont_crear_new').className = "cont_crear_new";
document.querySelector('.cont_add_titulo_cont').className = "cont_add_titulo_cont";  
  t++;
  } 
}

var t1 = 0;
function add_new1(){  
if(t1 % 2 == 0){  
 document.querySelector('.cont_crear_new1').className = "cont_crear_new1 cont_crear_new_active1";

  document.querySelector('.cont_add_titulo_cont1').className = "cont_add_titulo_cont1 cont_add_titulo_cont_active1";
  t1++;
}else {  document.querySelector('.cont_crear_new1').className = "cont_crear_new1";
document.querySelector('.cont_add_titulo_cont1').className = "cont_add_titulo_cont1";  
  t1++;
  } 
}

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
        <h1 className="h2">Trip Details</h1>
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
         <div className="col-md-6">
         <div className="cont_principal">
<div className="cont_centrar">

  <div className="cont_todo_list_top">
  <div className="cont_titulo_cont">
    <h3>EXPENDITURE</h3>
    </div>
<div className="cont_add_titulo_cont"><a href="#e" onClick={add_new}><i className="material-icons">&#xE145;</i></a>
    </div>
 
{/* <!--   End cont_todo_list_top  -->  */}
 </div>
<div className="cont_crear_new">
  <table className="table">
<tr>
 <div className="row">
 <div className="col-md-4">
   <div className="form-floating">
      <input type="text" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Title</label>
      </div>
     </div>

     <div className="col-md-4">
   <div className="form-floating">
      <input type="number" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Amount</label>
      </div>
   </div>

     <div className="col-md-4">
     <div className="form-floating">
      <input type="datetime-local" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Date & Time</label>
      </div>
     </div>
 </div>

 <div className="row">
 <div className="col-md-6">
   <div className="form-floating">
      <input type="text" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Spender</label>
      </div>
   </div>

   <div className="col-md-6">
   <div className="form-floating">
      <input type="text" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Description</label>
    </div>
   </div>

 </div>
</tr>
    <tr>
    <td colSpan="3">
  <button id='signupbtn' className="btn btn-primary todobtn" >Add</button>
  </td>
    </tr>
  </table>
  {/* <!--   End cont_crear_new  -->  */}
  </div>
  
  
<div className="cont_princ_lists">
<ul>
  <li className="list_shopping li_num_0_1">
  <div className="col_md_1_list">
    <p className="mx-1">Siddarth Singh : ₹ 345.00</p>
    </div>
<div className="col_md_2_list">
<h4>Breakfast</h4>
<p>Richie Rich</p>
    </div>
    <div className="col_md_3_list">
<div className="cont_text_date">
<p>23th Apr 2022 02:21 PM</p>      
      </div>    
    </div>
  </li>
{/* <!-- <li className="list_work"></li>
  <li className="list_sport"></li>
  <li className="list_music"></li>
 -->   */}
 </ul>
{/* <!--   End cont_todo_list_top  -->   */}
 </div>
  
  
  {/* <!--   End cont_central  --> */}
  </div>
</div>
</div>
<div className="col-md-6">
<div className="cont_principal">
<div className="cont_centrar">

  <div className="cont_todo_list_top">
  <div className="cont_titulo_cont">
    <h3>FRIENDS</h3>
    </div>
<div className="cont_add_titulo_cont1"><a href="#e" onClick={add_new1}><i className="material-icons">&#xE145;</i></a>
    </div>
 
{/* <!--   End cont_todo_list_top  -->  */}
 </div>
<div className="cont_crear_new1">
  <table className="table">
<tr>
 <div className="row">
 <div className="col-md-12">
   <div className="form-floating">
      <input type="text" className="form-control" required id="destination" placeholder="Destination" />
      <label htmlFor="floatingdestination">Search with username</label>
      </div>
     </div>
 </div>
</tr>
    <tr>
    <td colSpan="3">
  <button id='signupbtn' className="btn btn-primary todobtn" >Search</button>
  </td>
    </tr>
  </table>
  {/* <!--   End cont_crear_new  -->  */}
  </div>
  
  
<div className="cont_princ_lists">
<ul>
  <li className="list_shopping li_num_0_1">
  <div className="col_md_1_list">
    <p className="mx-1">Balaji Vaste</p>
    </div>
<div className="col_md_2_list mx-2" style={{color:'#73bf73'}}>
<h4>Request accepted</h4>
    </div>
  </li>
  <li className="list_shopping li_num_0_1">
  <div className="col_md_1_list">
    <p className="mx-1">Prathmesh Mitkar</p>
    </div>
<div className="col_md_2_list mx-2" style={{color:'gray'}}>
<h4>Request sent</h4>
    </div>
  </li>
  <li className="list_shopping li_num_0_1">
  <div className="col_md_1_list">
    <p className="mx-1">Tejas Ambekar</p>
    </div>
<div className="col_md_2_list mx-2">
<button id='signinbtn' className="btn btn-primary todobtn" >Send Request</button>
    </div>
  </li>
 </ul>

 </div>
  
  
  {/* <!--   End cont_central  --> */}
  </div>
</div>
</div>
         
       </div>


    </main>
  </div>
</div>
        </div>
     );
}
 
export default Tripdetails;