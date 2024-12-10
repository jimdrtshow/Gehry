import Image from "next/image";
import { CiCircleChevDown } from "react-icons/ci";

export default function HeroServices() {
  return (
    <section className="w-screen h-screen relative flex items-center justify-center ">
      <Image
        src={"/images/services_app.jpg"}
        alt={"#Blabla"}
        fill
        className="object-cover -z-10 opacity-60 "
      />
      <div className="w-full h-full bg-my_color_9 -z-20 absolute "></div>
      <div className="w-11/12 h-5/6 flex flex-col items-center justify-center">
        <div className="w-full h-2/3 flex items-center flex-nowrap  ">
          <h1 className="text-[4.236rem] md:text-[6.854rem]   font-medium tracking-tight text-my_color_1">
            Elevate your space.
          </h1>
        </div>

        <div className="w-full h-1/3 flex items-center justify-between ">
          <div className="w-1/2 h-full flex  items-end justify-start ">
            <ul className="md:flex">
              <li className="p-2   flex items-center justify-start">
                <p className="p-2 rounded-3xl  border border-my_color_4 text-my_color_1 text-[1rem]">
                  Building design
                </p>
              </li>
              <li className="p-2   flex items-center justify-start">
                <p className="p-2 rounded-3xl  border border-my_color_4 text-my_color_1 text-[1rem]">
                  Interior design
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/2 h-full flex items-end justify-end ">
            <CiCircleChevDown className="text-my_color_1 text-[4.236rem] opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}
