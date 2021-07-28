/* This Stats requires Tailwind CSS v2.0+ */
const metrics = [
  {
    id: 1,
    stat: "163.8%",
    emphasis: "Growth of sales volume and 9% MS increase in 1 project",
    rest: "",
  },
  {
    id: 2,
    stat: "71",
    emphasis: "Courses run across 6 different countries.",
    rest: "",
  },
  {
    id: 3,
    stat: "98%",
    emphasis:
      "Courses and symposiums designed and implemented across 5 specialties",
    rest: " ",
  },
  {
    id: 4,
    stat: "$2.1 million",
    emphasis: "Education budget successfully managed",
    rest: " ",
  },
  {
    id: 5,
    stat: "93%",
    emphasis: "of surgeons had their learning objective met during the course",
    rest: " ",
  },
  {
    id: 6,
    stat: "71%",
    emphasis: "of surgeons would change their practice as result of course",
    rest: " ",
  },
  {
    id: 7,
    stat: "23",
    emphasis: "Product Specialists trained",
    rest: " ",
  },
];

export default function Stats() {
  return (
    <div className="relative bg-coolgray-800 font-body">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="images/heroII.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coolgray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-coolgray-600 tracking-widest uppercase pb-2">
            OPTIMAL Surgical DATA
          </h2>
          <hr />
          <p className="mt-3 text-3xl font-bold tracking-wide text-white">
            Why work with Optimal Surgical? <br></br> The numbers data speak for
            themselves.
          </p>
          <p className="mt-5 text-lg text-coolgray-300"></p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-coolgray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
