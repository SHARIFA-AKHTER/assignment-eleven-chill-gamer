
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2"; // Assuming SweetAlert2 is installed
import "sweetalert2/dist/sweetalert2.min.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegisterUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      setError(
        "Password must include at least 6 characters, an uppercase letter, and a lowercase letter."
      );
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must include at least 6 characters, an uppercase letter, and a lowercase letter.",
      });
      return;
    }

    setError("");

    console.log("Form Register Data:", name, email, password, photoURL);

    // Call createUser function
    createUser(email, password)
      .then((result) => {
        console.log("User Created in Firebase:", result.user);

        const newUser = { name, email, photoURL };
        // Save new user info to the database
        fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User Created in Database:", data);
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: "Your account has been created successfully!",
            });
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Join us today and experience all the amazing features we have to
            offer.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photoURL"
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
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register Now</button>
            </div>
            <div className="mt-4 text-sm">
              Already have an account?{" "}
              <a href="/login" className="link link-hover text-primary">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;