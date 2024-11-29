"use client";
import { useState } from "react";

export default function FAQ({ faq }) {
  const [clicked, setClicked] = useState(null);
  const toggleClick = (index) => {
    if (clicked === index) return setClicked(null);
    setClicked(index);
  };
  return (
    <section id="faqs" className="container mx-20 lg:mx-32">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2 lg:gap-12">
        <div>
          <div className="flex items-center justify-start my-4">
            <span className="tags uppercase text-purple bg-light py-2 px-6 ">
              FAQs
            </span>
          </div>
          <h2 className="h2">Frequently Asked Questions</h2>
        </div>
        <div className="mb-6">
          <p className="body-2 mb-4">
            Need help or have questions? Contact our team for personalized
            assistance!
          </p>
          <button className="lg:text-base text-sm mr-6 border border-gray-500 text-gray-500 rounded-xl px-4 py-2 hover:bg-yellow hover:text-dark">
            Watch Demo
          </button>
          <button className="lg:text-base text-sm text-white bg-dark mr-8 rounded-xl px-4 py-2 hover:bg-yellow hover:text-dark">
            Get Started
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-start gap-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 text-dark shadow-sm rounded-md w-full sm:w-full md:w-[350px] lg:w-[470px] xl:w-[500px] py-4 px-4"
          >
            <div
              onClick={() => toggleClick(index)}
              className="flex flex-row items-start justify-between cursor-pointer"
            >
              <p
                className={`text-[12px] lg:text-[16px] ${
                  clicked === index ? "text-purple font-semibold" : "text-dark"
                }`}
              >
                {item.question}
              </p>
              <span className="text-purple">
                {clicked === index ? "-" : "+"}
              </span>
            </div>

            <div
              className={`mt-2 text-gray-700 text-[10px] lg:text-[14px] overflow-hidden transition ${
                clicked === index
                  ? "h-auto max-h-[9999px] ease-in"
                  : "max-h-0 ease-in"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
