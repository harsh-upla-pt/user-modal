import { Button } from "../../components/ui/button";
import PixelBlast from "../../components/PixelBlast";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  const [error, setError] = useState("");

  return (
    <div className="w-full h-full flex justify-center">
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

      <div className=" absolute top-40 flex mx-auto justify-center bg-white/10 backdrop-blur-xl rounded-3xl ">
        
        <div className="">
          <img width={800} src="/Login-amico.svg" alt="Login Illustration" />
        </div>

        <form
          className=" text-black p-10 flex flex-col items-start justify-center gap-5 w-[70%]"
          action=""
        >

          <h1 className="text-4xl font-bold text-center underline py-7 w-full">
            Log-in Here
          </h1>

          <label
            className="text-xl flex items-center justify-between gap-2 w-full"
            htmlFor="email "
          >
            <div className="w-fit">
            E-mail :
            </div>
            <input
              className="focus:outline-none text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none border rounded-full border-[#888] px-2 py-1 w-[80%]"
              id="email"
              type="email"
              placeholder="Enter E-mail"
            />
          </label>

          <label
            className="text-xl flex items-center justify-between gap-2 w-full"
            htmlFor="email "
          >
            <div className="">
            Password :
            </div>
            <input
              className="focus:outline-none text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none border rounded-full border-[#888] px-2 py-1 w-[80%]"
              id="passrod"
              type="password"
              placeholder="Enter Password"
            />
          </label>

          <div className="">{error && error}</div>

          <div className="flex flex-col w-full">
            <Link to="/forgot-password" className="text-center text-blue-600 w-fit mx-auto">
              Forgot password ?
            </Link>
            <Button className={`text-2xl w-full py-5 cursor-pointer`}>
              Log-in
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;

