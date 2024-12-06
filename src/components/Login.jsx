import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {


    const {signInUser} =useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
   
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">
              Join us today and experience all the amazing features we have to
              offer.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login Now</button>
              </div>
              {/* <div className="mt-4 text-sm">
                Already have an account?{" "}
                <a href="/login" className="link link-hover text-primary">
                  Login here
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;