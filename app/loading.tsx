import Image from "next/image";
import imgUrl from "../public/infinity.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={imgUrl} width="120" height="120" alt="Loading" />
    </div>
  );
};

export default Loading;
