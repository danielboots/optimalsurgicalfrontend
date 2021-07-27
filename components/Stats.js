/* This Stats requires Tailwind CSS v2.0+ */
const metrics = [
  {
    id: 1,
    stat: "29",
    emphasis: "Major Medical Companies",
    rest: "We work with 29 major medical companies worldwide from J&J to Ethicon and Becton Dickinson",
  },
  {
    id: 2,
    stat: "21",
    emphasis: "Countries around the globe",
    rest: " Our Company operates globally.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: " We work with repeat customers as we bring results",
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
          <h2 className="text-sm font-semibold text-coolgray-600 tracking-widest uppercase">
            OPTIMAL DATA
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-wide text-white">
            Get actionable data that will help grow your Medical practice
          </p>
          <p className="mt-5 text-lg text-coolgray-300">
            Our results speak for themselves, from working with major companies
            to achieving global recognition and success, your business is in
            safe hands.
          </p>
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
