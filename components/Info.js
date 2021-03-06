const Info = () => {
  return (
    <div className="relative bg-coolgray-800 font-body ">
      <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/images/servicenew.jpg"
          alt="Service for medical industry"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-thin uppercase tracking-wider text-gray-600">
            About Optimal Surgical
          </h2>
          <p className="mt-2 text-white text-3xl font-bold  sm:text-4xl">
            Professional Medical Device Services
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Optimal Surgicals dedicated team of professionals curated by us to
            ensure we maintain the highest quality of results and work. We can
            handle your project from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
