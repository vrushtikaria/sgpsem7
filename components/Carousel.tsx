const carouselImage = [
  "./images/carousel/fast.jpg",
  "./images/carousel/covid_essential.jpg",
  "./images/carousel/healthcare.jpg",
  "./images/carousel/sale2.jpg",
  "./images/carousel/salr.jpg",
];

const Carousel = () => {
  return (
    <>
      <div
        className="w-full  sm:bg-blue-500 bg-red-400 overflow-x-hidden space-x-0"
        id="slideset2"
      >
        {carouselImage.map((image) => {
          return (
            <img key={image} className="m-0 p-0 h-28" src={image} alt="" />
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
