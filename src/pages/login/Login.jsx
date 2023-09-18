import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

import useAuth from "../../api/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    // console.log(data.password)
    signIn(data.email, data.password)
      .then(() => {
        setLoading(false);
        toast.success("Login Succes!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          toast.error("Wrong Password!");
        } else if (err.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("User not found!");
        }
      });
  };

  return (
    <div className="relative py-20 bg-slate-100 lg:bg-[url('/delivery-man2.jpg')] lg:bg-cover">
      <div className="relative container m-auto px-6 py-20 text-gray-500 md:px-12 xl:px-20">
        <div className="lg:ms-[55vw] px-2 lg:mt-16 lg:px-0 md:w-8/12 lg:w-5/12 xl:w-[480px] min-h-[calc(70vh)]">
          <div className="rounded-xl bg-white border border-lightGray shadow-lg">
            <div className="p-4 md:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-pink font-bold">
                  Log in with your email
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="pb-2 pt-4">
                  <input
                    required
                    type="email"
                    {...register("email")}
                    id="email"
                    placeholder="Email"
                    className="input-login"
                  />
                </div>
                <div className="pb-2 pt-4 relative">
                  <input
                    required
                    className=" input-login"
                    type={show ? "text" : "password"}
                    {...register("password")}
                    id="password"
                    placeholder="Password"
                  />
                  <FaEye
                    onClick={handleShow}
                    className="absolute text-pink hover:text-rosered duration-200 cursor-pointer right-3 top-8"
                  ></FaEye>
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  {/* <button onClick={handleResetPassword}>Forgot password?</button> */}
                </div>
                <div className="pb-2 pt-4">
                  <button
                    type="submit"
                    className="cursor-pointer block w-full h-12 text-base tracking-wide text-white font-medium duration-200 rounded-full bg-pink hover:bg-darkPink focus:outline-none"
                  >
                    {isLoading ? (
                      <FiLoader className="animate-spin m-auto" size={24} />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>

                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </form>
              <p className="px-6 mt-3 text-sm text-center text-gray-400">
                Do not have an account yet?{" "}
                <Link
                  to="/signup"
                  className="hover:underline hover:text-darkPink font-medium text-pink"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
