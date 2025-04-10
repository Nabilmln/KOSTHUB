const Biodata = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="grid grid-cols-1 grid-rows-2 gap-4" title="background">
          <div className="bg-white" title="white"></div>
          <div
            className="bg-sky-500 w-[100vw] h-[50vh] rounded-t-[6rem]"
            title="blue"
          ></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
export default Biodata;
