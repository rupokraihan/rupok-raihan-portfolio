import Lottie from "lottie-react";
import loader from "../../public/loader-animation.json";

const Loader = () => {
  return (
    <div className="flex justify-center mt-8 items-center min-h-screen">
      <Lottie className="w-[500px]" animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
