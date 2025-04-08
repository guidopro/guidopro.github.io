import { Link } from "react-router";
import me from "../assets/cover_bg_2.jpg";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center border-t-amber-950 ">
        <div className="flex justify-center bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
          <h2 className="text-2xl text-white underline m-3">About me</h2>
        </div>
        <div className="flex justify-center m-3">
          <img src={me} alt="me" className="w-50 m-3 rounded-md" />
        </div>
        <div className="flex justify-center m-3 p-3">
          <p className="text-center m-3 p-3 w-[80%] md:w-[50%]">
            Hi, I'm Guy Middleton, a junior software developer based in
            Manchester, UK.
            <br /> <br />
            I recently completed a 13-week full-time intensive bootcamp in
            JavaScript software development at Northcoders, where I gained
            hands-on experience in full-stack development. <br />
            <br /> I enjoy the process of learning and tackling complex
            problems, always seeking opportunities to improve my skills. I'm
            eager to take on new challenges and continue growing as a developer.
            <br /> <br />
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
        <div className="flex justify-center m-3">
          <Link to="/contact">
            <button className="m-3 p-1.5 border-2 text-white bg-amber-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-amber-400 ">
              Contact me
            </button>
          </Link>

          <button className="m-3 p-1.5 border-2 text-white bg-blue-700 rounded-sm hover:cursor-pointer hover:bg-white hover:text-blue-700 ">
            View my CV
          </button>
        </div>
      </div>
    </>
  );
}
