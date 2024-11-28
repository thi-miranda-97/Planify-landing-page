import Image from "next/image";
import appstore from "@/public/app-store.svg";
import googleplay from "@/public/google-play.svg";
import download from "@/public/images/download.png";

export default function Download() {
  return (
    <section className="mt-32 mb-20 bg-dark pt-10 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="h2 text-white">Take Planify Everywhere You Go</h2>
        <p className="body-2 mb-6">
          Available on all your devices. Stay productive on the move.
        </p>
        <div className="flex flex-col md:flex-row justify-start items-start mb-8 md:mb-12">
          <button className="flex flex-row items-center gap-2 text-base border border-light text-light rounded-xl px-4 py-2 hover:bg-yellow hover:text-dark mb-4 md:mb-0 md:mr-6">
            <Image src={appstore} alt="App Store logo" className="w-8 h-auto" />
            Download on the App Store
          </button>
          <button className="flex flex-row items-center gap-2 text-base border border-light text-light rounded-xl px-4 py-2 hover:bg-yellow hover:text-dark">
            <Image
              src={googleplay}
              alt="Google Play Logo"
              className="w-8 h-auto"
            />
            Get it on Google Play
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={download}
          alt="The App on the desktop screen"
          className="block max-w-[85%] h-auto"
          quality={90}
        />
      </div>
    </section>
  );
}
