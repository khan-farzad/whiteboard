import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Image
        className="animate-bounce "
        src={"/logo.svg"}
        alt="loding state"
        height={120}
        width={120}
      />
    </div>
  );
};

export default Loading;