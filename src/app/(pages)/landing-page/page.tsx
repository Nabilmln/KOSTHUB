"use client";
import LandingPageIcon from "../../../../public/asset/LandingPageIcon.png";
import NavbarLanding from "@/app/component/navbar/NavbarLanding";
import OurServices from "@/app/component/card/OurServices";
import {
  ourServicesData,
  bestProperyData,
  bestReviewData,
} from "@/app/data/card";
import Image from "next/image";
import FooterLanding from "@/app/component/footer/FooterLanding";
import BestProperty from "@/app/component/card/BestProperty";
import BestRewiew from "@/app/component/card/BestReview";

const LandingPage = () => {
  return (
    <>
      <NavbarLanding />
      <div
        data-aos="fade-up"
        className="h-screen w-full flex justify-center items-center"
      >
        <div className="grid grid-cols-2 grid-rows-1 gap-6">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-[2rem]">Let's Find a Home</h1>
            <h1 className="font-bold text-[2rem]">That's Perfect for you</h1>
            <p className="font-light text-[1rem]">
              Discover the Perfect Place to Call Home Easy, Fast, and
              Hassle-Free!
            </p>

            <div className="grid grid-cols-3 grid-rows-1 gap-4 h-[10vh]">
              <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                <h1 className="text-sky-500 font-bold">7K+</h1>
                <p className="font-light">Pengguna</p>
              </div>
              <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                <h1 className="text-sky-500 font-bold">9K+</h1>
                <p className="font-light">Properti</p>
              </div>
              <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                <h1 className="text-sky-500 font-bold">5K+</h1>
                <p className="font-light">Ulasan</p>
              </div>
            </div>
          </div>

          <div className="">
            <Image src={LandingPageIcon} alt="icon" height={700} width={700} />
          </div>
        </div>
      </div>

      <div title="Services" className="h-screen w-screen">
        <div data-aos="fade-left" className="flex items-center flex-col ">
          <h1 className="font-bold text-[3rem]">Our Services</h1>
          <p className="font-light text-[1rem]">
            Discover the services we offer to make your stay comfortable and
            hassle-free.
          </p>
          <p className="font-light text-[1rem]">
            From easy booking to reliable facilities, we've got you covered!
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="grid grid-cols-4 grid-rows-1 gap-4 pl-[2rem] pt-[6rem]"
        >
          {ourServicesData.map((item, index) => (
            <OurServices key={index} data={item} />
          ))}
        </div>

        <div
          data-aos="fade-right"
          className="flex justify-center pt-[2rem] flex-col text-center"
        >
          <h1 className="font-bold text-[3rem]">Best Propersties</h1>
          <p className="font-light">
            Temukan pilihan properti terbaik dengan fasilitas unggulan dan
            lokasi strategis sesuai dengan kebutuhan dan gaya hidup anda.
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          className="grid grid-cols-4 grid-rows-1 gap-4 pl-[2rem] pt-[6rem] pb-[3rem]"
        >
          {bestProperyData.map((item, index) => (
            <BestProperty key={index} data={item} />
          ))}
        </div>

        <div className="flex justify-center flex-col text-center">
          <div data-aos="fade-left">
            <h1 className="font-bold text-[4rem]">Best Reviews</h1>
            <p className="font-light">Properti dengan review terbaik!</p>
          </div>
          <div
            className="grid grid-cols-4 grid-rows-1 gap-4 pl-[2rem] pt-[2rem] pb-[3rem]"
            data-aos="zoom-out-up"
          >
            {bestReviewData.map((item, index) => (
              <BestRewiew key={index} data={item} />
            ))}
          </div>
        </div>
        <FooterLanding />
      </div>
    </>
  );
};

export default LandingPage;
