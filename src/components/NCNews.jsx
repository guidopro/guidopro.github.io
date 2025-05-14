export default function NCNews() {
  return (
    <div className="bg-white size-auto my-10 mb-110 border-2 rounded-2xl mx-4 p-4">
      <div className="bg-[url(/src/assets/nc-news.png)] size-full h-100 bg-cover bg-no-repeat rounded-t-2xl "></div>
      <p className="text-sm text-black m-3 mt-7">
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
      <p className="text-black text-sm text-center m-3">Tech Stack:</p>
      <ul className="flex justify-center m-3 gap-3">
        <li className="group relative inline-block">
          <img
            className="size-10"
            src="src/assets/JavaScript-B2gqmNKf.png"
            alt="javascript-logo"
          />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            JavaScript
          </div>
        </li>
        <li className="group relative inline-block">
          <img
            src="src/assets/react.svg"
            alt="react-logo"
            className="size-10"
          />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            React
          </div>
        </li>
        <li className="group relative inline-block">
          <img className="size-10" src="src/assets/ReactRouter.svg" alt="" />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            React Router
          </div>
        </li>
        <li className="group relative inline-block">
          <img
            className="size-10"
            src="src/assets/Tailwind.svg"
            alt="tailwind-logo"
          />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            TailwindCSS
          </div>
        </li>
        <li className="group relative inline-block">
          <img src="src/assets/icons8-express-js.svg" alt="" />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            Express
          </div>
        </li>
        <li className="group relative inline-block">
          <img className="size-10" src="src/assets/Netlify.svg" alt="" />
          <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
            Netlify
          </div>
        </li>
      </ul>
      <p className="text-black text-sm text-center">
        <br />
        Key Features:
      </p>
      <div className="flex justify-center my-3">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>Browse and read curated articles</li>
          <li>Vote on articles to show support</li>
          <li>Post and view comments on articles</li>
          <li>
            Responsive design for desktop and mobile Smooth routing and
            navigation
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2.5">
        <button className="m-3 p-1.5 border-2 text-white bg-amber-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-amber-400">
          Github
        </button>
        <button className="m-3 p-1.5 border-2 text-white bg-blue-700 rounded-sm hover:cursor-pointer hover:bg-white hover:text-blue-700">
          <a
            href="https://nc-news-guidopro.netlify.app/articles"
            target="_blank"
          >
            Live Demo
          </a>
        </button>
      </div>
    </div>
  );
}
