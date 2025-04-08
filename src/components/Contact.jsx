export default function Contact() {
  return (
    <>
      <div className="flex flex-col border-t-amber-950">
        <div className=" flex justify-center bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
          <h2 className="text-2xl underline m-3 text-white">Contact</h2>
        </div>
        <div>
          <form className="flex flex-col m-5 p-6 gap-2" action="">
            <label className="flex justify-center" htmlFor="fname">
              Name:
            </label>
            <input
              className="border bg-cyan-50 rounded-sm"
              type="text"
              id="fname"
            />
            <label className="flex justify-center" htmlFor="email">
              E-mail:
            </label>
            <input
              className="border bg-cyan-50 rounded-sm"
              type="email"
              id="email"
            />
            <label className="flex justify-center" htmlFor="message">
              Message:
            </label>
            <input
              className="border bg-cyan-50 rounded-sm"
              type="text"
              id="message"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
