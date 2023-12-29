import { useState } from "react";
import toast from "react-hot-toast";

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const formValidate = () => {
    // console.log("Something");
    const loadingtoastid = toast.loading("Loading...");

    if (formValue.username === "") {
      toast.error("Username can't be empty!");
      toast.dismiss(loadingtoastid);
    } else if (formValue.password === "") {
      toast.error("Password can't be empty!");
      toast.dismiss(loadingtoastid);
    }
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  return (
    <>
      {/* <!-- sign in --> */}
      <div
        className="modal fade"
        id="signin"
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
                Sign In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="username"
                  name="username"
                  value={formValue.username}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="signinpassword"
                  placeholder="password"
                  value={formValue.password}
                  name="password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
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
                id="signinbtn"
                className="btn btn-primary"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
