import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loadGapiInsideDOM } from "gapi-script";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
  const handleResponseGoogle = (response) => {
    console.log("res: ", response);
  };

  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  });

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(props) => (
                <button
                  type="button"
                  className="bg-white flex justify-center items-center p-2 rounded-sm cursor-pointer outline-none"
                  onClick={props.onClick}
                  disabled={props.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign In With Google
                </button>
              )}
              onSuccess={handleResponseGoogle}
              onFailure={handleResponseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
