import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="w-full mr-auto py-6 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col gap-4 text-xs">
        <h1 id="contact" className="text-left text-5xl font-medium my-8">Contact Info</h1>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p>Harrybsteele@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <p>404-457-4570</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={20}
            height={20}
            alt="linkedin"
            src="/Images/linkedin.png"
          />
          <p>https://www.linkedin.com/in/harry-b-steele</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={20}
            height={20}
            alt="linkedin"
            src="/Images/github.png"
          />
          <p>https://github.com/hsteele-creator</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-left text-5xl font-medium my-8">Contact Me</h1>

        <form
          action="https://formsubmit.co/harrybsteele@gmail.com"
          className="flex flex-col justify-center"
          method="POST"
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="First Name"
              className="border-b-4 border-[#1F75FE] px-1 py-2 my-2  w-1/2 mr-6"
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              className="border-b-4 border-[#1F75FE] px-1 py-2  my-2  w-1/2"
            ></input>
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="border-b-4 border-[#1F75FE] px-1 py-2 my-2  w-full"
          ></input>
          <textarea
            rows={2}
            placeholder="Your Message"
            className="border-b-4 border-[#1F75FE] py-2 px-1"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#1F75FE] text-white py-3 my-4 shadow-lg rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
