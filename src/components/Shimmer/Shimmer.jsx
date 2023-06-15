const Shimmer = () => {
  return (
    <div className="mt-8 flex w-full flex-wrap md:justify-between  lg:ml-[0px] lg:gap-2 ">
      {Array(18)
        .fill(" ")
        .map((item, index) => (
          <div key={index} className="w-full md:w-[300px] lg:w-[340px]">
            <div className="mb-2 h-[280px] bg-[#686868] md:h-[200px] md:rounded-md"></div>
            <div className="mt-4 flex h-[180px] justify-between gap-4 px-4 md:h-[137px]">
              <div className="h-[50px] w-[50px] rounded-3xl bg-[#686868] md:h-[40px] md:w-[40px]"></div>
              <div className="w-[350px] md:w-[290px]">
                <div className="mb-1 h-5 w-full rounded-sm bg-[#686868]"></div>
                <div className=" mt-4 h-5 w-[220px] rounded-sm bg-[#686868] md:w-[180px]"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
