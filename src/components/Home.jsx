import safespace from "../assets/splash-icon.png";
import { Link } from "react-router";

export default function Home() {
  const NCNews = (
    <Link to="nc-news">
      <div className="flex justify-center">
        <div className="size-auto bg-white rounded-2xl transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer">
          <div className="bg-[url(/src/assets/nc-news.png)] size-90 bg-cover bg-no-repeat rounded-t-2xl"></div>
          <h2 className="text-black text-lg text-center font-bold mt-7">
            NC-News
          </h2>
          <p className="text-center text-sm font-light mb-7">
            A full-stack CRUD application
          </p>
        </div>
      </div>
    </Link>
  );

  const SSP = (
    <Link>
      <div className="flex justify-center">
        <div className="size-auto bg-white rounded-2xl transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer ">
          <div className="bg-[url(/src/assets/SSP.png)] size-90 bg-cover bg-center bg-no-repeat rounded-t-2xl"></div>
          <h2 className="text-black text-lg text-center font-bold mt-7">
            Safe Space Parking
          </h2>
          <p className="text-center text-sm font-light mb-7">
            Mobile application
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className="flex flex-col bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
        <h1 className="flex justify-center m-3 text-2xl underline text-white">
          Hello world!
        </h1>
      </div>
      <div className="bg-[url(/src/assets/about_me_pic2.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center p-7 ">
          <p className="text-white text-3xl text-left text-shadow m-3 bg-black/50 rounded-2xl p-1.5 mt-100">
            Hello, my name is Guy and I am a Junior Software Developer.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" m-7">
          <h2 className="flex justify-center text-2xl underline text-white mb-3 ">
            Projects
          </h2>
          <p className="text-gray-300 text-center text-sm">
            Check out some of the projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-7">
          <div>{NCNews}</div>
          <div>{SSP}</div>
        </div>
        <div className="mb-10"></div>
      </div>
    </>
  );
}

const previousCards = (
  <>
    <div className="flex flex-col justify-center from-black/50 to-black/10 bg-linear-to-br p-2 rounded-2xl">
      <span className="flex justify-around items-center h-20">
        <a href="https://nc-news-guidopro.netlify.app/" target="_blank">
          <h2 className="p-4 text-lg text-center text-white text-shadow-2xs hover:text-blue-500 hover:scale-110">
            NC-News
          </h2>
        </a>

        <a
          className=" "
          href="https://nc-news-guidopro.netlify.app/"
          target="_blank"
        >
          <div className="bg-[url(https://nc-news-guidopro.netlify.app/world_travel_icon_134840.webp)] h-14 w-14 bg-contain bg-no-repeat bg-bg-center hover:scale-110"></div>
        </a>
      </span>

      <p className="text-sm text-white mx-3">
        NC News is a dynamic front-end web application modeled after a social
        media-style news platform. Users can explore a variety of articles,
        upvote their favourites, and engage in discussions through comments.
        Designed with user interaction and clean UI in mind, the platform offers
        a smooth browsing experience with seamless navigation between views. The
        project is built using React for the UI, React Router for client-side
        routing, and styled with Tailwind CSS for a modern and responsive
        layout. The back-end API is powered by Node.js, providing robust data
        handling for articles, comments, and user interactions.
      </p>
      <p className="text-white text-sm text-center">
        <br />
        Key Features:
      </p>
      <div className="flex justify-center my-3">
        <ul className="list-disc list-inside text-white text-sm px-4">
          <li>Browse and read curated articles</li>
          <li>Vote on articles to show support</li>
          <li>Post and view comments on articles</li>
          <li>
            Responsive design for desktop and mobile Smooth routing and
            navigation
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col justify-center from-black/50 to-cyan-950/30 bg-linear-to-bl p-2 rounded-2xl ">
      <span className="flex justify-around items-center h-20">
        <a
          href="https://northcoders.com/project-phase/safespace-parking"
          target="_blank"
        >
          <h2 className="p-4 text-lg text-center text-white  hover:text-blue-500 hover:scale-110">
            Safe Space Parking
          </h2>
        </a>

        <a
          href="https://northcoders.com/project-phase/safespace-parking"
          target="_blank"
          className="flex justify-center"
        >
          <div className="bg-[url(/src/assets/banner.png)] h-24 w-24 bg-contain bg-no-repeat bg-center hover:scale-110"></div>
        </a>
      </span>
      <p className="text-sm  text-white mx-3">
        Safe Space Parking is a mobile application built with React Native,
        TypeScript, and styled using Tamagui to deliver a fast, modern, and
        accessible user experience. The app helps users locate safe, secure, and
        inclusive parking spaces in urban environments—prioritising safety,
        visibility, and community standards. Powered by Firebase for backend
        services, the app uses Firebase Authentication to provide secure,
        seamless sign-in options, and Firebase Hosting to support scalable
        infrastructure and fast performance.
      </p>
      <p className="text-white text-sm flex justify-center">
        <br />
        Key Features:
      </p>
      <div className="flex justify-center my-3">
        <div>
          <ul className="list-disc list-inside text-white text-sm px-4">
            <li>Secure login with Firebase Authentication</li>
            <li>
              Real-time parking availability with filters for safety, lighting,
              accessibility, and more
            </li>
            <li>
              Interactive map view to explore and navigate to safe parking spots
            </li>
            <li>
              Community reviews & ratings to keep listings trustworthy and up to
              date
            </li>
            <li>Save favourite locations and view past parking history</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);
