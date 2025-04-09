import safespace from "../assets/splash-icon.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
        <h1 className="flex justify-center m-3 text-2xl underline text-white">
          Hello world!
        </h1>
      </div>
      <div className="bg-[url(/src/assets/about_me_pic2.jpg)] bg-cover bg-center bg-fixed ">
        <div className="flex flex-col">
          <div className="flex justify-center m-3 p-7 ">
            <p className="text-white text-5xl text-left text-shadow m-3">
              Hello, my name is Guy and I am a Junior Software Developer.{" "}
              <br></br> Below are the latest projects I have worked on...
            </p>
          </div>
          <div className="flex flex-col justify-center m-3 p-7 ">
            <h2 className="flex justify-center m-3 p-7 text-lg underline text-white  from-black/100 to-cyan-950/30 bg-linear-to-b rounded-2xl">
              Projects
            </h2>
            <div className="flex flex-col justify-center m-3 p-7 from-black/100 to-cyan-950/50 bg-linear-to-br rounded-2xl">
              <a href="https://nc-news-guidopro.netlify.app/" target="_blank">
                <h2 className="p-4 text-lg text-center text-white text-shadow-2xs hover:text-blue-500 hover:scale-110">
                  NC-News
                </h2>
              </a>
              <span className="flex justify-between gap-3">
                <a href="https://nc-news-guidopro.netlify.app/" target="_blank">
                  <div className="bg-[url(https://nc-news-guidopro.netlify.app/world_travel_icon_134840.webp)] h-32 w-32 bg-contain bg-no-repeat bg-bg-center"></div>
                </a>
                <p className="text-sm w-4/5 text-white">
                  NC News is a dynamic front-end web application modeled after a
                  social media-style news platform. Users can explore a variety
                  of articles, upvote their favourites, and engage in
                  discussions through comments. Designed with user interaction
                  and clean UI in mind, the platform offers a smooth browsing
                  experience with seamless navigation between views. The project
                  is built using React for the UI, React Router for client-side
                  routing, and styled with Tailwind CSS for a modern and
                  responsive layout. The back-end API is powered by Node.js,
                  providing robust data handling for articles, comments, and
                  user interactions.
                  <br /> <br />
                  Key Features:
                  <br />
                  <br />
                  <ul className="list-disc">
                    <li>Browse and read curated articles</li>
                    <li>Vote on articles to show support</li>
                    <li>Post and view comments on articles</li>
                    <li>
                      Responsive design for desktop and mobile Smooth routing
                      and navigation
                    </li>
                  </ul>
                </p>
              </span>
            </div>
            <div className="flex flex-col justify-center m-3 p-7  from-black/100 to-cyan-950/30 bg-linear-to-bl  rounded-2xl">
              <a
                href="https://northcoders.com/project-phase/safespace-parking"
                target="_blank"
              >
                <h2 className="p-4 text-lg text-center text-white  hover:text-blue-500 hover:scale-110">
                  Safe Space Parking
                </h2>
              </a>

              <span className="flex justify-between gap-3">
                <a
                  href="https://northcoders.com/project-phase/safespace-parking"
                  target="_blank"
                >
                  <div className="bg-[url(/src/assets/banner.png)] h-32 w-32 bg-contain bg-no-repeat bg-bg-center bg-white"></div>
                </a>
                <p className="text-sm w-4/5 text-white">
                  Safe Space Parking is a mobile application built with React
                  Native, TypeScript, and styled using Tamagui to deliver a
                  fast, modern, and accessible user experience. The app helps
                  users locate safe, secure, and inclusive parking spaces in
                  urban environments—prioritising safety, visibility, and
                  community standards. Powered by Firebase for backend services,
                  the app uses Firebase Authentication to provide secure,
                  seamless sign-in options, and Firebase Hosting to support
                  scalable infrastructure and fast performance.
                  <br /> <br />
                  Key Features:
                  <br />
                  <br />
                  <ul className="list-disc">
                    <li>
                      Secure login with Firebase Authentication (email, social
                      log-ins, etc.)
                    </li>
                    <li>
                      Real-time parking availability with filters for safety,
                      lighting, accessibility, and more
                    </li>
                    <li>
                      Interactive map view to explore and navigate to safe
                      parking spots
                    </li>
                    <li>
                      Community reviews & ratings to keep listings trustworthy
                      and up to date
                    </li>
                    <li>
                      Save favourite locations and view past parking history
                    </li>
                  </ul>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
