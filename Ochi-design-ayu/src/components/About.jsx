import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed='-.2' className="w-full py-20 bg-[#cdea68] rounded-t-3xl text-zinc-900">
      <div className="px-[5.922vw]">
        <p className="text-[3.65vw] leading-none w-[90%]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </p>
      </div>
      {/* ******************************************************************************************* */}
      <div className="w-full border-y border-zinc-500/60 mt-12 px-[5.922vw]">
        <div className="flex flex-col md:flex-row gap-10 pt-4 pb-28">
          <div className="md:basis-[25vw] lg:basis-[50vw]">
            What you can expect:
          </div>
          <div className="flex flex-col basis-[25vw] w-[50vw] gap-7">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </span>

            <span>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </span>
          </div>
          <div className="flex flex-col basis-[25vw]  justify-end md:pl-24">
            <span className="mb-3">S:</span>
            <span>Instagram</span>
            <span>Behance</span>
            <span>Facebook</span>
            <span>Linkedin</span>
          </div>
        </div>
      </div>
      {/* ******************************************************************************************* */}
      <div className="flex flex-col lg:flex-row gap-10 px-[3.922vw] mt-4 justify-between">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-[4vw]">Our approach:</h3>
          <button className="text-white px-6 py-4 bg-zinc-800 rounded-full text-[1.184vw] flex gap-7 items-center justify-between">
            <span>READ MORE</span>{" "}
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden flex items-center justify-center w-[400px] md:w-[600px]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className=" object-contain w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
