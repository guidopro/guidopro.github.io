import { Link } from "react-router";
import meAgain from "../assets/cover_bg_2 copy.jpg";

export default function About() {
  return (
    <>
      <div className="flex flex-col grow min-h-screen border-t-amber-950">
        <div className="flex justify-center bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
          <h2 className="text-2xl text-white m-3">About me</h2>
        </div>
        <div className="flex justify-center m-3">
          <img src={meAgain} alt="me" className="w-100 m-3 rounded-md" />
        </div>
        <div className="flex justify-center m-3">
          <Link
            to="/contact"
            className="m-3 p-1.5 text-white bg-amber-400 w-auto rounded-md hover:cursor-pointer hover:bg-amber-400/90 hover:scale-105 transition"
          >
            Contact me
          </Link>
          <Link
            to="/cv"
            className="m-3 p-1.5 text-white bg-blue-700 rounded-md hover:cursor-pointer hover:bg-blue-700/90 hover:scale-105 transition"
          >
            View my CV
          </Link>
        </div>
        <div className="flex justify-center m-1 p-3 mb-2">
          <p className="text-center m-3 p-3 w-[80%] md:w-[50%] text-white">
            Hi, I'm Guy Middleton, a software developer based in Manchester, UK.
            <br /> <br />
            I recently completed a 13-week full-time intensive bootcamp in
            JavaScript software development at Northcoders, where I gained
            hands-on experience in full-stack development. <br />
            <br /> I enjoy the process of learning and tackling complex
            problems, always seeking opportunities to improve my skills. I'm
            eager to take on new challenges and continue growing as a developer.
            <br />
            <br />
            GitHub:{" "}
            <a
              className="underline"
              href="https://github.com/guidopro"
              target="_blank"
            >
              github.com/guidopro
            </a>
            <br />
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://linkedin.com/in/guy-middleton-dev"
              target="_blank"
            >
              linkedin.com/in/guy-middleton-dev
            </a>
            <br /> <br />I also have a background in music production and
            composition. Check out my music over at{" "}
            <a
              className="underline"
              href="https://stateofjoy.co.uk"
              target="_blank"
            >
              stateofjoy.co.uk
            </a>
            <br /> <br />
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
      </div>
    </>
  );
}
