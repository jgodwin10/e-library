import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/ApiSlice";
import { setCredentials } from "../redux/Util";
import { useDispatch } from "react-redux";

export default function Register() {
  const [formData, setFormData] = useState({
    matric: "",
    password: "",
    firstname: "",
    lastname: "",
    department: "",
    isAdmin: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register(formData).unwrap();

      dispatch(setCredentials(res));

      navigate("/");
      setFormData({
        matric: "",
        password: "",
        firstname: "",
        lastname: "",
        department: "",
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }

    // Add logic here to handle form submission (e.g., send data to server)
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create an Account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already a member? {/* Change 'a member?' to 'Not a member?' */}
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {" "}
                  {/* Add onSubmit event handler */}
                  <div>
                    <label htmlFor="">
                      <span className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                      </span>
                      <input
                        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      <span className="block text-sm font-medium leading-6 text-gray-900">
                        Last Name
                      </span>
                      <input
                        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      <span className="block text-sm font-medium leading-6 text-gray-900">
                        Matric Number
                      </span>
                      <input
                        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="matric"
                        value={formData.matric}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      <span className="block text-sm font-medium leading-6 text-gray-900">
                        Department
                      </span>
                      <input
                        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
