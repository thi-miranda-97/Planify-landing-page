export default function Testimonials({ testimonials }) {
  return (
    <section
      id="testimonial"
      className="text-white my-20 lg:my-32 bg-cover bg-center w-screen h-[400px] bg-[url('/images/bg-img.jpg')] px-6 py-10"
    >
      <h2 className="h2 mb-8 font-medium bg-gradient-to-r from-yellow to-purple inline-block text-transparent bg-clip-text">
        Our Customers love Planify!
      </h2>

      <div className="relative flex">
        {/* Marquee moving left */}
        <div className="flex animate-marquee">
          {testimonials.map((testimonial, index) => (
            <span
              key={index}
              className="body-3 mx-4 border rounded-2xl px-4 py-2 w-[300px] max-h-fit"
            >
              {testimonial.text} &#45; {testimonial.author}
            </span>
          ))}
        </div>

        {/* Marquee moving right */}
        <div className="absolute top-20 flex animate-marquee-reverse my-8">
          {testimonials.map((testimonial, index) => (
            <span
              key={`second-${index}`}
              className="body-3 mx-4 border rounded-2xl px-4 py-2 w-[300px] max-h-fit"
            >
              {testimonial.text} &#45; {testimonial.author}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
