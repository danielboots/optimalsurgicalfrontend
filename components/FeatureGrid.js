const FeatureGrid = () => {
  return (
    <div className="   container mx-auto text-lg text-gray-500 text-justify grid  grid-cols-1 p-4 m-10 sm:grid-cols-2">
      <div className="p-4  flex items-center ">
        <img
          src="/images/kevinscales.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700 text-s">
            About...
          </div>
          Optimal Surgical is a medical device consultancy and distribution
          company passionate about the medical device sector. We can support you
          with any of your business needs no matter the size. Our expertise lies
          in areas such as sales and marketing, strategy, digital marketing and
          social media strategy, set up and ongoing infrastructure support.
          Increasing the effectiveness of your sales force, developing internal
          training programs or developing external professional education
          courses. We also support new product introduction in ANZ. Provide
          sales support to boost current portfolios or distribute your products
          if you do not have a presence in ANZ already, allowing you to utilise
          our extensive network of clients and medical facilities.
        </div>
      </div>
      <div className="px-4 flex">
        <div className=" pt-4 ">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700">
            20+ years Experience - You are in good hands
          </div>
          With our teams 20+ years of experience across the medical device and
          digital technology space, we have seen a need for more innovation in
          both services and products in this sector. Our team has broad
          experience across the medical device sector with expertise in the
          General Surgery field. Roles and experience across sales, marketing,
          sales force effectiveness, professional education and leadership
          within large multinational companies put us in an optimal position to
          support you with your business goals. We offer the agility and
          innovation of a start-up company with the experience and understanding
          of the processes and red tape of large multinational companies. This
          allows us to support your projects quickly, to a high standard and
          with reduced costs.
        </div>
      </div>
      <div className="px-4 flex items-center ">
        <img
          src="/images/surgery3.webp"
          className="justify-center hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className="p-4  flex items-center ">
        <img
          src="/images/volunteering.webp"
          className="overflow-hidden  hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700 text-s">
            Ethics
          </div>
          We are an ethical company that want to see the patient achieve optimal
          outcomes by increasing the availability of new and innovative
          products. Through the optimising of structure, processes, and
          services, we believe we can support companies to offer improved value
          to the healthcare system.
          <h4 className="font-bold mt-4 mb-1 text-xl text-right">Charity</h4>
          Supporting charities is also important to us. We actively fundraise
          and volunteer for Camp Quality and Oxfam. We also believe we need to
          not just talk about a sustainable future but act on it now, so we are
          aiming for carbon neutrality by 2023.
        </div>
      </div>
      <div className="px-4 flex">
        <div className=" pt-4 ">
          <div className="text-3xl font-bold pb-4 tracking-wide text-coolgray-700">
            Our Process
          </div>
          We do not believe that conference call after conference call is
          intuitive for innovation. We will sit down with you face to face and
          do a design thinking workshop to understand your company, your
          challenges and your needs. Armed with this information and new ideas
          worked out together we will work on a bespoke plan of action to
          support you and your team execute on the change required.
        </div>
      </div>
      <div className="px-4 flex items-center ">
        <img
          src="/images/surgicalmonitor.webp"
          className="justify-center hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureGrid;
