export default function Contact() {
  return (
    <>
      <div className=" flex justify-center bg-linear-to-l from-cyan-800 to-blue-950 shadow-2xl">
        <h2 className="text-2xl m-3 text-white">Contact</h2>
      </div>

      <div className="flex flex-col min-h-screen pt-15">
        <p className="flex flex-wrap justify-center text-center p-4 whitespace-pre text-white">
          Contact me using the form below or directly at{" "}
          <a href="mailto:guyvmiddletob@gmail.com" className="underline">
            guyvmiddleton@gmail.com
          </a>
        </p>

        <div className="flex justify-center w-full">
          <form
            method="post"
            name="contact_form"
            className="flex flex-col m-5 p-6 gap-5 rounded-2xl shadow-2xl w-full max-w-xl bg-white"
            action="https://formsubmit.co/496ed51b4b21668146f84e005c99661c"
          >
            <div className="flex flex-col gap-1.5 p-2 m-1">
              <label htmlFor="fname">Your Name:</label>
              <input
                className="border bg-cyan-50 rounded-md p-2"
                type="text"
                id="fname"
                name="fname"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5 p-2 m-1">
              <label htmlFor="email">Email Address:</label>
              <input
                className="border bg-cyan-50 rounded-md p-2"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 p-2 m-1">
              <label htmlFor="message">Message:</label>

              <textarea
                className="border bg-cyan-50 rounded-md h-37 p-2"
                type="text"
                id="message"
                name="message"
                required
              />
            </div>

            <div className="flex justify-center">
              <input
                type="submit"
                value="Send"
                className="bg-blue-500 text-white w-20 border rounded-md hover:cursor-pointer hover:scale-105 hover:bg-indigo-500 m-3 p-1.5 transition"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
