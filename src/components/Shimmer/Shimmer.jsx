
const Shimmer = () => {
  return (
    <div className="mt-8 flex w-full flex-wrap ">
        {Array(18)
          .fill(" ")
          .map((item, index) => (
            <div key={index} className=" mr-6 h-[342px] w-[360px]">
              <div className="mb-2 h-[202px] w-[360px] rounded-md bg-[#686868]"></div>
              <div className="mt-4 flex h-[137px] justify-center gap-4">
                <div className="h-[40px] w-[40px] rounded-3xl bg-[#686868]"></div>
                <div className="w-[290px]">
                  <div className="mb-1 h-5 w-full rounded-sm bg-[#686868]"></div>
                  <div className=" mt-4 h-5 w-[180px] rounded-sm bg-[#686868]"></div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Shimmer;
