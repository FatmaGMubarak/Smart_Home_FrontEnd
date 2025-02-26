import { useState } from "react";
import man from "../../assets/reviewPic.jpg";
import firstFemale from "../../assets/reviewBlonde.jpg";
import secondFemale from "../../assets/reviewBrunette.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Miller",
    image: man,
    review:
      "I’ve tried a few different energy management systems, but this one is on another level. The AI predictions have helped me reduce my energy bills by nearly 20%! The app is easy to use, and I love being able to control my home appliances remotely.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: firstFemale,
    review:
      "This service has truly transformed how I manage my energy usage. The detailed insights and real-time controls are phenomenal. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    image: secondFemale,
    review:
      "Fantastic app! Easy to use and incredibly helpful in optimizing my energy consumption. I’ve already recommended it to my friends.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, image, review } = testimonials[currentIndex];

  return (
    <div className="py-16 px-6 flex flex-col justify-center items-center min-h-[600px] sm:min-h-fit w-full" id="testimonialSection">
      <div className="bg-customBlue1 w-28 h-2 rounded-lg mb-1"></div>
      <h2 className="text-3xl font-bold text-white text-center mb-2">Testimonials</h2>
      <p className="text-center text-[#B1C1C9] mb-5">What Our Customers Say About Us</p>

      <div className="relative flex flex-col sm:flex-row justify-evenly items-center px-4 sm:h-[175px] h-[550px]">
        <button
          className="bg-[#4A616D] hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-110"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="text-white p-6 rounded-xl flex justify-evenly items-center space-x-6 max-w-full sm:max-w-4xl transition-transform duration-500 hover:scale-105 flex-col sm:flex-row min-h-[450px] sm:min-h-fit">
          <div className="relative mb-4 sm:mb-0 left-2">
            <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
              <img src={image} alt={name} className="rounded-full w-28 h-28" />
            </div>
          </div>

          <div>
            <p className="text-lg mb-4 leading-relaxed">{review}</p>
            <p className="font-bold text-lg">{name}</p>
          </div>
        </div>

        <button
          className="bg-[#4A616D] hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-110"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
