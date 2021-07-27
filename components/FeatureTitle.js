import Link from "next/link";

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
          about the medical device sector. Leverage our marketing / sales and
          infrastructure expertise to increase revenue for your business. From
          Product Launch initiatives, digital marketing and social strategy
          development to sales coaching and professional education, our team is
          onhand to ensure your business thrives in the digial age.
        </div>
      </div>
      <div className="px-4 flex">
        <div className=" pt-4 ">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700">
            20+ years Experience - Your in good hands
          </div>
          Our teams 20+ years of experience across the medical device and
          digital technology space, we have seen a real need for more innovation
          in both services and products in this sector. We are emerging as
          leaders in utilising digital technologies to ensure your business is
          future proofed and ahead of the competition.
        </div>
      </div>
      <div className="px-4 flex items-center ">
        <img
          src="/images/1.webp"
          className="justify-center hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <Link href="/about">
        <button
          type="button"
          className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white  bg-coolgray-700 hover:bg-coolgray-800 justify-end"
        >
          Learn More ...
        </button>
      </Link>
    </div>
  );
};

export default FeatureTitle;
