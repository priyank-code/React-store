import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="p-5 mb-5">
        <div className="p-15 justify-center items-center max-w-2xl m-auto border-2 border-green-600 border-b-8 mt-5 rounded-xl ">
          <div>
            <h1 className="text-center md:text-4xl text-3xl font-bold mb-10 text-green-600">
              Contact Us
            </h1>
          </div>
          <form
            action="#"
            onSubmit={() => {
              window.alert("Data Submitted Successfully...");
            }}
          >
            <div className="text-gray-900 flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[1.05rem] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="name"
                  placeholder="Enter Your Full Name"
                  className="outline-none border-2 border-green-600 rounded-sm p-1"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[1.05rem] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="p-1 outline-none border-2 border-green-600 rounded-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[1.05rem] font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  id="subject"
                  className="p-1 outline-none border-2 border-green-600 rounded-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="msg" className="text-[1.05rem] font-medium">
                  Message
                </label>
                <textarea
                  name="msg"
                  id="msg"
                  placeholder="Enter Your Message"
                  className="p-1 outline-none border-2 border-green-600 rounded-sm"
                  required
                ></textarea>
              </div>
              <button className="p-3 border-2 border-green-600 rounded-sm bg-green-600 text-white hover:bg-green-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
