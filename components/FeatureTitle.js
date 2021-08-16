import Link from "next/link";

const FeatureTitle = () => {
  return (
    <div className="   container mx-auto text-lg text-gray-500 text-justify grid  grid-cols-1 p-4 m-10 sm:grid-cols-2">
      <div className="p-4  flex items-center ">
        <img
          src="/images/3.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt="web surgery image"
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700 text-s">
            About...
          </div>
          Optimal Surgical is a healthcare consultancy and distribution company
          passionate about the medical device sector. Our strength lies in our
          ability to leverage our sales, marketing and industry expertise to
          increase the value your business brings to your customers. <br />
          From new product introduction to sales coaching, professional
          education to digital marketing, our team is on hand to ensure you
          thrive in this dynamically changing medical device market.
        </div>
      </div>
      <div className="px-4 flex">
        <div className=" pt-4 ">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700 text-left">
            20+ years Experience - You are in good hands
          </div>
          During our teams 20+ years of time in the medical device market in
          Australia and the UK, we have seen a real need for more innovation in
          both products and services in this sector.
          <br /> We are emerging as leaders in utilising digital technologies to
          ensure your business is future proofed and ahead of the competition.
        </div>
      </div>
      <div className="px-4 flex items-center ">
        <img
          src="/images/surgery3.webp"
          className="justify-center hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt="web surgery image"
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
