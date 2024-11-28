export default function Pricing({ plans }) {
  return (
    <section className="container my-32">
      <div className="flex items-center justify-start my-4">
        <span className="tags uppercase text-purple bg-light py-2 px-6 ">
          Pricing List
        </span>
      </div>
      <h2 className="h2 mb-12">Plans That Grow with You</h2>
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-4 gap-2 items-start justify-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`max-w-full h-full shadow-2xl rounded-xl py-10 px-10 text-dark overflow-hidden hover:translate-y-[-12px] ${
              plan.isHighlighted
                ? "bg-gradient-to-b from-purple to-dark text-white"
                : "bg-white text-dark"
            }`}
          >
            <h3 className="h3">{plan.title}</h3>
            <p className="body-2 mb-4">{plan.description}</p>
            <p
              className={`text-[14px] mb-6 ${
                plan.isHighlighted ? "text-white" : "text-dark"
              }`}
            >
              {plan.price === null ? (
                "Contact Us for Pricing"
              ) : (
                <span className="h-num font-medium">{plan.price}</span>
              )}
              {plan.price ? "/month" : ""}
            </p>
            <button
              className={`mb-4 rounded-xl px-4 py-2 hover:bg-yellow hover:text-dark ${
                plan.isHighlighted
                  ? "text-yellow border border-yellow"
                  : "border border-gray-500"
              }`}
            >
              {plan.buttonText}
            </button>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
