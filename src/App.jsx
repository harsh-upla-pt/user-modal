import PixelBlast from "../components/PixelBlast";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center">
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
      <div className="absolute top-100 flex flex-col gap-5 items-center justify-center">
        <h2 className="text-4xl font-bold">Please Login or register</h2>
        <div className="flex gap-3">
          <Link className="" to="/register">
            <Button className={`text-2xl py-7 px-5 cursor-pointer rounded-full`}>Register</Button>
          </Link>
          <Link to="/login">
            <Button className={`text-2xl px-7 py-7 cursor-pointer rounded-full`} variant="secondary">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
