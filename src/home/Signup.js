import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [checkbox, setCheckBox] = useState(false);

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mobilenumber: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const formValidate = () => {
    // console.log("Something");
    const loadingtoastid = toast.loading("Loading...");
    var reEmail =
      /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (formValue.firstname === "") {
      toast.error("First name can't be empty!");
      toast.dismiss(loadingtoastid);
    } else if (formValue.lastname === "") {
      toast.error("Last name can't be empty!");
      toast.dismiss(loadingtoastid);
    } else if (formValue.username === "") {
      toast.error("Username can't be empty!");
      toast.dismiss(loadingtoastid);
    } else if (
      formValue.mobilenumber.length !== 10 ||
      formValue.mobilenumber[0] < "6"
    ) {
      toast.error("Mobile number is not valid!");
      toast.dismiss(loadingtoastid);
    } else if (!formValue.email.match(reEmail)) {
      toast.error("Email is not valid!");
      toast.dismiss(loadingtoastid);
    } else if (formValue.password.length < 6) {
      toast.error("Password should have minimum 6 characters!");
      toast.dismiss(loadingtoastid);
    } else if (formValue.confirmpassword !== formValue.password) {
      toast.error("Confirm password is not matching to password!");
      toast.dismiss(loadingtoastid);
    } else if (!checkbox) {
      toast.error("Checkbox is not checked!");
      toast.dismiss(loadingtoastid);
    }
  };

  return (
    <>
      {/* <!-- sign up --> */}
      <div
        className="modal fade"
        id="signup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body row">
              <div className="form-floating col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="John"
                  name="firstname"
                  value={formValue.firstname}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">First name</label>
              </div>
              <div className="form-floating col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Doe"
                  name="lastname"
                  value={formValue.lastname}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Last name</label>
              </div>
              <div className="form-floating col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="john"
                  value={formValue.username}
                  name="username"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">User name</label>
              </div>
              <br />
              <div className="form-floating col-md-5">
                <input
                  type="number"
                  className="form-control"
                  id="mobilenumber"
                  placeholder="9876543210"
                  name="mobilenumber"
                  value={formValue.mobilenumber}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Mobile number</label>
              </div>
              <br />
              <div className="form-floating col-md-11">
                <input
                  type="email"
                  className="form-control"
                  id="signupemail"
                  placeholder="name@example.com"
                  name="email"
                  value={formValue.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating col-md-11">
                <input
                  type="password"
                  className="form-control"
                  id="signuppassword"
                  placeholder="Password"
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating col-md-11">
                <input
                  type="password"
                  className="form-control"
                  id="signupconfirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  value={formValue.confirmpassword}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Confirm password</label>
              </div>
              <div className="form-floating col-md-11 d-flex">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkbox}
                  onChange={() => setCheckBox(!checkbox)}
                  id="invalidCheck"
                />
                <span className="form-check-label mx-1" for="invalidCheck">
                  Agree to terms and conditions
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={formValidate}
                id="signupbtn"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
