import { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
// import { useSelector } from "react-redux";

const LoginPage = () => {
  const { googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.loading?.pathname || "/";
  const states = location?.state?.loading?.state?.from;
  // console.log(location.state.loading.state.from)
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        axios.post(`${import.meta.env.VITE_LIVE_URL}users`, {
          name: user?.displayName,
          email: user?.email,
          imgUrl: user?.photoURL,
          role: "customer",
        });
        navigate(from, { state: { from: states } });
      })
      .catch((err) => console.log(err));
  };
  const handleFacbooklogin = () => {
    facebookLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative  bg-gray lg:bg-[url('/delivery-man2.jpg')] lg:bg-cover lg:h-screen">
      <div className="relative    text-gray-500 md:px-12 xl:px-20">
        <div className="lg:ms-[59vw] px-5 lg:px-0 md:w-8/12 lg:w-4/12 xl:w-[450px] pt-24 pb-10 lg:pb-0 min-h-[calc(70vh)] ">
          <div className="rounded-xl bg-white/70 border border-lightGray shadow-lg">
            <div className="p-7 md:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-pink font-bold">
                  Sign up or log in
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  onClick={handleFacbooklogin}
                  className="h-12 px-6 bg-blue-600/90 text-white rounded-lg transition duration-300">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaFacebook
                      className="absolute left-0 text-white"
                      size={22}></FaFacebook>
                    <span className="block w-max font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
                <button
                  onClick={handleGoogleLogin}
                  className="h-12 px-6 border border-gray-300 rounded-lg transition duration-300 
 hover:border-blue-400 focus:bg-blue-50">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img loading="lazy"
                      src="/google.svg"
                      className="absolute left-0 w-[23px]"
                      alt="google logo"
                    />
                    <span className="block w-max font-medium tracking-wide text-black/80 text-sm transition duration-300 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="h-12 px-6 bg-black/90 text-white border border-gray-300 rounded-lg transition duration-300 hover:border-blue-400">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaGithub
                      className="absolute left-0 text-white"
                      size={22}></FaGithub>
                    <span className="block w-max font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                      Continue with Github
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex flex-col mt-3 space-y-3 justify-center items-center">
                <span className="text-black/50">or</span>
                <button className="h-12 w-full bg-pink text-white border border-gray-300 rounded-lg transition duration-300">
                  <Link
                    to="/login"
                    className="block font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                    Log in
                  </Link>
                </button>

                <button className="h-12 w-full bg-white border-pink text-pink border border-gray-300 rounded-lg transition duration-300">
                  <Link
                    to="/signup"
                    className="block font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                    Sign up
                  </Link>
                </button>
              </div>

              <div className="py-5 mt-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-sm">
                  By signing up, you agree to our{" "}
                  <Link to={"/terms-conditions"}>
                    <span className="text-pink font-medium">
                      Terms and Conditions
                    </span>
                  </Link>
                  and{" "}
                  <Link to="/privacy-policy">
                    <span className="text-pink font-medium">
                      Privacy Policy.
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
