const FeatureTitle = () => {
  return (
    <div className="   container mx-auto text-lg text-gray-500 text-justify grid  grid-cols-1 p-4 m-10 sm:grid-cols-2">
      <div className="p-4  flex items-center ">
        <img
          src="/images/3.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700 text-s">
            About...
          </div>
          Optimal Surgical is a medical device consultancy company passionate
          about the medical device sector.
        </div>
      </div>
      <div className="px-4 flex">
        <div className=" pt-4 ">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700">
            20+ years Experience - Your in good hands
          </div>
          With our teams 20+ years of experience across the medical device and
          digital technology space, we have seen a need for more innovation in
          both services and products in this sector.
        </div>
      </div>
      <div className="px-4 flex items-center ">
        <img
          src="/images/1.webp"
          className="justify-center hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureTitle;
