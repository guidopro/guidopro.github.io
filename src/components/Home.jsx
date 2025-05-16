import { Link } from "react-router";

export default function Home() {
  const NCNews = (
    <Link to="nc-news">
      <div className="flex justify-center">
        <div className="size-auto rounded-2xl overflow-clip transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer">
          <div className="bg-[url(/src/assets/nc-news.png)] size-90 bg-cover bg-no-repeat"></div>
          <div className="bg-white p-7">
            <h2 className="text-black text-lg text-center font-bold">
              NC-News
            </h2>
            <p className="text-center text-sm font-light">
              A full-stack CRUD application
            </p>
          </div>
        </div>
      </div>
    </Link>
  );

  const SSP = (
    <a
      href="https://www.northcoders.com/blog/student-projects-safespace-parking/"
      target="_blank"
    >
      <div className="flex justify-center">
        <div className="size-auto rounded-2xl overflow-clip transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer ">
          <div className="bg-[url(/src/assets/SSP.png)] size-90 bg-cover bg-center bg-no-repeat"></div>
          <div className="bg-white p-7">
            <h2 className="text-black text-lg text-center font-bold">
              Safe Space Parking
            </h2>
            <p className="text-center text-sm font-light">Mobile application</p>
          </div>
        </div>
      </div>
    </a>
  );

  const hangman = (
    <a href="/hangman/" target="_blank" rel="noopener">
      <div className="flex justify-center">
        <div className="size-auto rounded-2xl overflow-clip transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer ">
          <div className="bg-[url(/src/assets/hangman.png)] bg-white size-90 bg-contain bg-center bg-no-repeat"></div>
          <div className="bg-white border-t-1 border-black p-7">
            <h2 className="text-black text-lg text-center font-bold">
              Hangman
            </h2>
            <p className="text-center text-sm font-light">Game</p>
          </div>
        </div>
      </div>
    </a>
  );

  const portfolio = (
    <a href="https://stateofjoy.co.uk" target="_blank">
      <div className="flex justify-center">
        <div className="size-auto rounded-2xl overflow-clip transition ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:cursor-pointer ">
          <div className="bg-[url(/src/assets/music-portfolio.png)] bg-white size-90 bg-cover bg-top bg-no-repeat"></div>
          <div className="bg-white p-7">
            <h2 className="text-black text-lg text-center font-bold">
              Music Showcase
            </h2>
            <p className="text-center text-sm font-light">
              Personal Portfolio Website
            </p>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <>
      <div className="flex flex-col bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
        <h1 className="flex justify-center m-3 text-2xl text-white">
          Guy Middleton
        </h1>
      </div>
      <div className="bg-[url(/src/assets/about_me_pic2.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center p-7 ">
          <p className="text-white text-3xl text-left text-shadow m-3 bg-black/50 rounded-2xl p-1.5 mt-100">
            Hello, my name is Guy and I am a Software Developer.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="m-10">
          <h2 className="flex justify-center text-2xl underline text-white mb-3 ">
            Projects
          </h2>
          <p className="text-gray-300 text-center text-sm">
            Check out some of the projects I've worked on.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-10 mb-10">
          <div>{NCNews}</div>
          <div>{SSP}</div>
          <div>{hangman}</div>
          <div>{portfolio}</div>
        </div>
      </div>
    </>
  );
}
