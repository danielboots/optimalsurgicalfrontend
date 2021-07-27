import { useEmblaCarousel } from "embla-carousel/react";
import React, { useEffect } from "react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <div
      className="embla overflow-hidden h-96   bg-gray-900 filter grayscale"
      ref={emblaRef}
    >
      <div className="embla__container flex ">
        <div className="embla__slide relative flex-grow-0 flex-shrink-0 w-100 ">
          <img
            className="object-none  w-full ..."
            src="/images/surgery1.webp"
            alt=""
          />
        </div>
        <div className="embla__slide relative  flex-grow-0 flex-shrink-0 w-100 ">
          <img
            className="object-none  w-full ..."
            src="/images/surgery2.webp"
            alt=""
          />
        </div>
        <div className="embla__slide relative  flex-grow-0 flex-shrink-0 w-100">
          <img
            className="object-none  w-full ..."
            src="/images/surgery3.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
