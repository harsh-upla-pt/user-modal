import { Button } from "../../components/ui/button";
import PixelBlast from "../../components/PixelBlast";
// import { REGEXP_ONLY_DIGITS } from "../../components/ui/input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";

function ForgotPassword() {
  return (
    <div className="w-full h-full flex justify-center items-center">
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

      <div className="absolute top-40 backdrop-blur-lg rounded-3xl flex">
        <div className="">
          <img
            width={700}
            src="/Forgot-password-amico.svg"
            alt="Forgot pass illustration"
          />
        </div>

        <form
          className="p-5 flex flex-col justify-start gap-3 w-[60%]"
          action=""
        >
          <div className="flex flex-col gap-3 ">
            <h1 className="text-3xl font-bold underline">Enter Email</h1>
            <div className="">We will send the OTP to your email </div>
            <div className="">
              <input
                className="border border-[#888] w-full "
                type="email"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className="flex items-center gap-5 mt-30">
              <h1 className="text-2xl font-bold">Enter OTP : </h1>
              <InputOTP
                className={``}
                maxLength={4}
                pattern={/^[0-9]*$/}
              >
                <InputOTPGroup className={`border border-[#888] `}>
                  <InputOTPSlot
                    className={`font-bold text-xl p-7 bg-white rounded-none `}
                    index={0}
                  />
                  <InputOTPSlot
                    className={`font-bold text-xl p-7 bg-white rounded-none `}
                    index={1}
                  />
                  <InputOTPSlot
                    className={`font-bold text-xl p-7 bg-white rounded-none `}
                    index={2}
                  />
                  <InputOTPSlot
                    className={`font-bold text-xl p-7 bg-white rounded-none `}
                    index={3}
                  />
                </InputOTPGroup>
              </InputOTP>
              <div className="flex items-center gap-1">
                <button>Resend </button>
                 OTP in 60s
              </div>
            </div>
            <div className="">
              <Button className={`text-2xl w-full py-5 cursor-pointer `}>
                Send OTP
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
