import { useState } from "react";

export default function NCNews() {
  const [isFrontEnd, setIsFrontEnd] = useState(true);

  const BETechStack = (
    <ul className="flex justify-center m-3 gap-3">
      <li className="group relative inline-block">
        <img
          className="size-10"
          src="/JavaScript-B2gqmNKf.png"
          alt="javascript-logo"
        />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          JavaScript
        </div>
      </li>
      <li className="group relative inline-block">
        <img className="size-10" src="/node.js.svg" alt="node.js-logo" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          Node.js
        </div>
      </li>
      <li className="group relative inline-block">
        <img
          src="/icons8-express-js.svg"
          alt="express-logo"
          className="size-10"
        />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          Express
        </div>
      </li>
      <li className="group relative inline-block">
        <img src="/Postgresql.svg" alt="PostgreSQL-logo" className="size-10" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          PostgreSQL
        </div>
      </li>
      <li className="group relative inline-block">
        <img src="/jest.svg" alt="jest-logo" className="size-10" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          Jest
        </div>
      </li>
      <li className="group relative inline-block">
        <img
          src="/supabase-DrHzjiH8.png"
          alt="supabase-logo"
          className="size-10"
        />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          Supabase
        </div>
      </li>
    </ul>
  );

  const FETechStack = (
    <ul className="flex justify-center m-3 gap-3">
      <li className="group relative inline-block">
        <img
          className="size-10"
          src="/JavaScript-B2gqmNKf.png"
          alt="javascript-logo"
        />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          JavaScript
        </div>
      </li>
      <li className="group relative inline-block">
        <img src="/react.svg" alt="react-logo" className="size-10" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          React
        </div>
      </li>
      <li className="group relative inline-block">
        <img className="size-10" src="/ReactRouter.svg" alt="" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          React Router
        </div>
      </li>
      <li className="group relative inline-block">
        <img className="size-10" src="/Tailwind.svg" alt="tailwind-logo" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          TailwindCSS
        </div>
      </li>
      <li className="group relative inline-block">
        <img className="size-10" src="/Netlify.svg" alt="netlify-logo" />
        <div className="hidden group-hover:block absolute bg-gray-500 text-white p-2 rounded-lg">
          Netlify
        </div>
      </li>
    </ul>
  );

  const FEInfo = (
    <>
      <h2 className="text-black text-xl text-center m-6">
        Technical Implementation:
      </h2>
      <div className="flex justify-start">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>Framework: React Routing: React Router</li>
          <li>Styling: Tailwind CSS</li>
          <li>
            State Management: useState, useEffect, and prop-drilling for local
            state management
          </li>
          <li>
            {" "}
            Interaction: Axios or native fetch to consume REST API endpoints
          </li>
        </ul>
      </div>
      <h2 className="text-black text-xl text-center m-6">Key Features:</h2>
      <div className="flex justify-start">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>View single articles with full content</li>
          <li>Dynamic article listing by topics or categories </li>
          <li>Upvote/downvote system for articles </li>
          <li>Display and post comments per article</li>
          <li>
            Navigation between routes (article list, article view, error
            handling)
          </li>
          <li>Loading indicators and error boundaries </li>
          <li>Responsive layout for desktop and mobile</li>
        </ul>
      </div>
      <h2 className="text-black text-xl text-center m-6">
        Engineering Approach:
      </h2>
      <div className="flex justify-start my-3">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>
            Component-based design, separating concerns (ArticleCard,
            CommentList, etc.)
          </li>
          <li>
            Used conditional rendering to handle loading states and API errors
          </li>
          <li>Clean, semantic HTML structure with accessibility in mind</li>
          <li>
            Responsive UI via Tailwind breakpoints and utility-first design
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2.5 m-6">
        <button className="m-3 p-1.5 text-white bg-amber-400 w-auto rounded-md hover:cursor-pointer hover:bg-amber-400/90 hover:scale-105 transition">
          <a
            href="https://github.com/guidopro/fe-nc-news-website"
            target="_blank"
          >
            Github
          </a>
        </button>
        <button className="m-3 p-1.5 text-white bg-blue-700 rounded-md hover:cursor-pointer hover:bg-blue-700/90 hover:scale-105 transition">
          <a
            href="https://nc-news-guidopro.netlify.app/articles"
            target="_blank"
          >
            Live Demo
          </a>
        </button>
      </div>
    </>
  );

  const BEInfo = (
    <>
      <h2 className="text-black text-xl text-center m-6">
        Technical Implementation:
      </h2>
      <div className="flex justify-start">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>Runtime: Node.js</li>
          <li>Framework: Express.js</li>
          <li>Database: PostgreSQL</li>
          <li>Testing: Jest & SuperTest</li>
          <li>Hosting: Render for API, Supabase for DB</li>
        </ul>
      </div>
      <h2 className="text-black text-xl text-center m-6">Key Features:</h2>
      <div className="flex justify-start">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>
            RESTful API with full CRUD functionality for:{" "}
            <ul className="list-disc list-inside text-black text-sm px-4">
              <li>Articles</li>
              <li>Comments</li>
              <li>Topics</li>
              <li>Users</li>
            </ul>
          </li>
          <li>
            Pagination and query support (e.g., sort by date, filter by
            topic){" "}
          </li>
          <li>Comment posting and deletion </li>
          <li>Article vote count adjustments</li>
          <li>Proper error handling and status codes (400, 404, 500)</li>
          <li>Loading indicators and error boundaries </li>
          <li>Input validation and route sanitation</li>
        </ul>
      </div>
      <h2 className="text-black text-xl text-center m-6">
        Engineering Approach:
      </h2>
      <div className="flex justify-start">
        <ul className="list-disc list-inside text-black text-sm px-4">
          <li>
            Built a modular model-view-controller architecture for clean
            separation of concerns
          </li>
          <li>
            Used query parameters to enable flexible client-side filtering and
            sorting
          </li>
          <li>
            Comprehensive testing with Jest for endpoints, including happy and
            sad paths
          </li>
          <li>Documented endpoints with clear usage instructions</li>
        </ul>
      </div>
      <div className="flex justify-center gap-2.5 m-6">
        <button className="m-3 p-1.5 text-white bg-amber-400 w-auto rounded-md hover:cursor-pointer hover:bg-amber-400/90 hover:scale-105 transition">
          <a href="https://github.com/guidopro/nc-news-project" target="_blank">
            Github
          </a>
        </button>
        <button className="m-3 p-1.5 text-white bg-blue-700 rounded-md hover:cursor-pointer hover:bg-blue-700/90 hover:scale-105 transition">
          <a href="https://nc-news-guidopro.netlify.app/" target="_blank">
            Live Demo
          </a>
        </button>
      </div>
    </>
  );

  return (
    <div className="flex justify-center">
      <div className="bg-white my-10 mb-50 rounded-2xl mx-4 p-4 md:w-2xl w-auto">
        <div
          className={
            isFrontEnd
              ? "bg-[url(/src/assets/nc-news.png)] size-full h-100 bg-cover bg-no-repeat rounded-t-2xl"
              : "bg-[url(/src/assets/Back-End-screenshot.png)] size-full h-100 bg-cover bg-no-repeat rounded-t-2xl"
          }
        ></div>
        <div className="flex justify-center gap-3 m-9">
          <span>Front-End</span>
          <label className="toggle-switch">
            <input type="checkbox" onClick={() => setIsFrontEnd(!isFrontEnd)} />
            <span className="slider"></span>
          </label>
          <span>Back-End</span>
        </div>
        <p className="text-sm text-black m-3 text-center">
          A social-media-style news platform where users can browse, vote on,
          and comment on articles.
        </p>
        <h2 className="text-black text-xl text-center m-6">Tech Stack:</h2>
        {isFrontEnd ? FETechStack : BETechStack}
        {isFrontEnd ? FEInfo : BEInfo}
      </div>
    </div>
  );
}
