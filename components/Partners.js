const Partners = () => {
  return (
    <div className="bg-white filter grayscale opacity-80 ">
      <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div>
          <p className="font-body my-4 text-center text-2xl font-bold text-coolgray-800 sm:text-2xl">
            We have worked for or with:
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
            <div className=" col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12 -mt-1 "
                src="/images/becton.png"
                alt="Becton Dickinson (BD)"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="/images/jnj.png" alt="J&J" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-6 mt-2 ml-6 "
                src="/images/ethicon.png"
                alt="J&J"
              />
            </div>

            <div className=" col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12 -mt-1 mr-10 "
                src="/images/vuhzept.png"
                alt="Vuhze "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
