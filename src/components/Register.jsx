import { useState } from "react";
import PixelBlast from "../../components/PixelBlast";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");

  return (
    <div className="w-full h-full">
      <PixelBlast
        variant="square"
        pixelSize={3}
        // color="#000000"
        color="#B497CF"
        patternScale={2}
        patternDensity={1}
        softness={0.6}
        glow={0.4}
        twinkle={0.25}
        drift={0.2}
        hoverEffect="reveal"
        enableRipples
        edgeFade={0.25}
        accentColor="#B497CF"
        pixelSizeJitter={0}
        smoothing={1}
        speed={0.5}
        driftAngle={30}
        hoverRadius={140}
        rippleSpeed={0.3}
        rippleThickness={0.1}
        rippleIntensityScale={1}
        autoRipple={0}
        tiltX={0}
        tiltY={0}
        intro
        lightMode={false}
      />
      <div className="absolute top-25 flex gap-20 items-center justify-center w-full h-fit my-auto bg-white-100/10 backdrop-blur-lg ">
        <form className=" grid grid-cols-1 p-7 rounded-3xlgap-3" action="">
          <h1 className="text-4xl font-bold text-center underline pb-7">
            Register Here{" "}
          </h1>
          <div className="flex">
            <label className="p-1 flex flex-col gap-1" htmlFor="firstName">
              First Name :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
            <label className="p-1 flex flex-col gap-1" htmlFor="lastName">
              Last Name :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
          </div>

          <div className="flex">
            <label className="p-1 flex flex-col gap-1" htmlFor="mail">
              E-mail :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="mail"
                type="email"
                placeholder="Enter E-mail"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
            <label className="p-1 flex flex-col gap-1" htmlFor="phone">
              Phone Number :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="phone"
                type="tel"
                placeholder="Enter Phone number"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
          </div>

          <div className="flex items-center ">
            <label className="p-1 flex flex-col gap-1" htmlFor="age">
              Age :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="age"
                type="number"
                placeholder="Enter your Age"
              />
              <div className="text-red-400">{error && error}</div>
            </label>
            <div
              className="p-1 flex flex-col gap-1 items-center justify-start mt-7"
              htmlFor="gender"
            >
              <div className="flex ">
                <label className="p-1 flex gap-1" htmlFor="genderMale">
                  Male :
                  <input
                    className="px-2 py-1 border border-[#888] rounded-full"
                    id="genderMale"
                    type="radio"
                    name="gender"
                    placeholder="Enter Passw
                    ord"
                    required
                  />
                  <div className="text-red-400">{error && error}</div>
                </label>
                <label className="p-1 flex gap-1" htmlFor="genderFemale">
                  Female :
                  <input
                    className="px-2 py-1 border border-[#888] rounded-full"
                    id="genderFemale"
                    type="radio"
                    name="gender"
                    required
                  />
                </label>
              </div>
              <div className="text-red-400">{error && error}</div>
            </div>
          </div>

          <div className="">
            <label className="p-1 flex flex-col gap-1" htmlFor="password">
              Password :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="password"
                type="password"
                placeholder="Enter Password"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
            <label
              className="p-1 flex flex-col gap-1"
              htmlFor="confirmPassword"
            >
              Confirm Password :
              <input
                className="focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none  px-2 py-1 border border-[#888] rounded-full"
                id="confirmPassword"
                type="password"
                placeholder="Re-Enter Password"
                required
              />
              <div className="text-red-400">{error && error}</div>
            </label>
          </div>

          <div className="flex flex-col py-5">
            <div className="">Password must have :-</div>
            <div className="pl-6 ">
              <li>Atleast one Uppercase letter</li>
              <li>
                Atleast one special character like [ @ ! # $ % ^ & * ( ) ]{" "}
              </li>
              <li>Atleast one number from 0-9</li>
              <li>Minimum length of 8 characters</li>
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <div className="text-center">
              Already have an Account ?{" "}
              <Link
                to="/login"
                className="text-violet-600 hover:text-violet-800"
              >
                Log in here
              </Link>
            </div>
            <Button
              className={`text-2xl px-10 py-5 mx-auto w-full cursor-pointer`}
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="">
          <img
            width={700}
            src="/Forms-amico.svg"
            alt="registration illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
