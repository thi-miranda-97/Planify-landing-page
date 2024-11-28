import Hero from "@/app/_sections/Hero";
import Header from "@/app/_sections/Header";
import Features from "@/app/_sections/Features";
import Testimonials from "@/app/_sections/Testimonials";
import Pricing from "@/app/_sections/Pricing";
import FAQ from "@/app/_sections/FAQ";
import Download from "@/app/_sections/Download";
import Footer from "@/app/_sections/Footer";

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials testimonials={testimonialsData} />
      <Pricing plans={plans} />
      <FAQ faq={faq} />
      <Download />
      <Footer />
    </>
  );
}
const testimonialsData = [
  {
    text: "Planify keeps me on track every day. Couldn't be more productive!",
    author: "Emma S.",
  },
  {
    text: "Simple to use and saves me hours of organizing my tasks.",
    author: "Daniel W.",
  },
  {
    text: "Planify makes team collaboration effortless. Love it!",
    author: "Sarah K.",
  },
  {
    text: "I've never been this organized. Highly recommend Planify.",
    author: "Rachel L.",
  },
  {
    text: "The best task management tool I’ve tried. Keeps me focused.",
    author: "Mark T.",
  },
  {
    text: "Planify's integrations make it easy to sync everything I need.",
    author: "Jess M.",
  },
  {
    text: "It's like having a personal assistant for my tasks. So helpful!",
    author: "Chris B.",
  },
  {
    text: "Perfect for both personal and team task management. Love it!",
    author: "James F.",
  },
  {
    text: "Planify revolutionized how my team works. We're more efficient than ever!",
    author: "Amy R.",
  },
  {
    text: "The design is sleek and easy to use. Makes managing tasks a breeze.",
    author: "Karen P.",
  },
  {
    text: "Great app! I can't imagine managing my tasks without it now.",
    author: "Olivia D.",
  },
  {
    text: "Planify has everything I need to stay organized and hit deadlines.",
    author: "Mike H.",
  },
  {
    text: "Planify keeps me on track every day. Couldn't be more productive!",
    author: "Emma S.",
  },
  {
    text: "Planify makes team collaboration effortless. Love it!",
    author: "Sarah K.",
  },
  {
    text: "I've never been this organized. Highly recommend Planify.",
    author: "Rachel L.",
  },
  {
    text: "The best task management tool I’ve tried. Keeps me focused.",
    author: "Mark T.",
  },
  {
    text: "Planify's integrations make it easy to sync everything I need.",
    author: "Jess M.",
  },
  {
    text: "It's like having a personal assistant for my tasks. So helpful!",
    author: "Chris B.",
  },
  {
    text: "Perfect for both personal and team task management. Love it!",
    author: "James F.",
  },
  {
    text: "Planify revolutionized how my team works. We're more efficient than ever!",
    author: "Amy R.",
  },
  {
    text: "The design is sleek and easy to use. Makes managing tasks a breeze.",
    author: "Karen P.",
  },
  {
    text: "Great app! I can't imagine managing my tasks without it now.",
    author: "Olivia D.",
  },
  {
    text: "Planify has everything I need to stay organized and hit deadlines.",
    author: "Mike H.",
  },
  {
    text: "Planify keeps me on track every day. Couldn't be more productive!",
    author: "Emma S.",
  },
];

const plans = [
  {
    title: "Free Plan",
    description: "Ideal for individuals",
    price: "$0",
    buttonText: "Try for free",
    features: [
      "Basic task management",
      "2 integrations",
      "20 GB storage",
      "Email Support",
    ],
    isHighlighted: false,
  },
  {
    title: "Starter Plan",
    description: "Perfect for small-scale projects.",
    price: "$8",
    buttonText: "Get Started",
    features: [
      "All Free Plan features",
      "Unlimited tasks and projects",
      "5 integrations",
      "5 GB storage",
    ],
    isHighlighted: true,
  },
  {
    title: "Pro Plan",
    description: "Great for small teams",
    price: "$12",
    buttonText: "Try for free",
    features: [
      "All Starter Plan features",
      "Advanced collaboration tools",
      "10 integrations",
      "20 GB storage",
      "Priority support",
    ],
    isHighlighted: false,
  },
  {
    title: "Enterprise Plan",
    description: "Tailored for large organizations",
    price: null,
    buttonText: "Contact Us",
    features: [
      "All Pro Plan features",
      "Custom integrations",
      "Unlimited storage",
      "Dedicated account manager",
      "24/7 support",
    ],
    isHighlighted: false,
  },
];

const faq = [
  {
    question: "What is Planify?",
    answer:
      "Planify is a task management platform designed to help individuals and teams organize their work, collaborate efficiently, and stay on top of deadlines.",
  },
  {
    question: "Is there a free version of Planify?",
    answer:
      "Yes! Our Free Plan includes basic task management features, up to 2 integrations, and 1 GB of storage, perfect for personal use.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription anytime from your account settings. There are no hidden fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, MasterCard, and American Express, as well as PayPal for added convenience.",
  },
  {
    question: "Do you offer support for large organizations?",
    answer:
      "Yes, our Enterprise Plan includes dedicated support and custom integrations tailored to your organization’s needs. Contact us for more details.",
  },
  {
    question: "How secure is my data on Planify?",
    answer:
      "Your data is secure with Planify. We use industry-leading encryption and adhere to strict security protocols to ensure your information is protected.",
  },
  {
    question: "Can I access Planify on mobile devices?",
    answer:
      "Yes! Planify is available on both iOS and Android devices. You can manage your tasks and collaborate with your team from anywhere.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team by emailing support@planify.com or by using the live chat feature in the app.",
  },
];
