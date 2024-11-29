import Image from "next/image";
import features from "@/public/images/features.png";

export default function Features() {
  return (
    <section id="features" className="container overflow-x-hidden">
      <div className="flex items-center justify-center my-4">
        <span className="tags uppercase text-purple bg-light py-2 px-6 ">
          OUR FEATURES
        </span>
      </div>
      <h2 className="h2 text-center mb-20">
        Smart Features Built to Boost Productivity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[90%] mx-auto overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="relative before-hover transition cursor-pointer">
            <div className="pl-6">
              <h4 className="h4 hover:text-purple">Smart Task Organization</h4>
              <p className="body-2">
                Effortlessly prioritize and manage tasks with customizable views
                like kanban boards, lists, and calendars, ensuring you stay
                focused and organized.
              </p>
            </div>
          </div>

          <div className="relative before-hover transition cursor-pointer">
            <div className="pl-6">
              <h4 className="h4 hover:text-purple">Real-Time Collaboration</h4>
              <p className="body-2">
                Work seamlessly with your team by sharing tasks, setting
                permissions, and chatting in real-time, ensuring everyone stays
                aligned and deadlines are met.
              </p>
            </div>
          </div>

          <div className="relative before-hover transition cursor-pointer">
            <div className="pl-6">
              <h4 className="h4 hover:text-purple">Powerful Integrations</h4>
              <p className="body-2">
                Sync with your favorite tools such as Google Calendar, Slack,
                and Trello to streamline workflows and keep all your tasks and
                communications in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={features} alt="" quality={80} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
