import prisma from "@/lib/db";
import Link from "next/link";
import Hero_section from "@/components/Hero_section";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default async function ItemsService() {
  const getServices = await fetch(`${process.env.URL}api/services`);
  const services = await getServices.json();

  return (
    <section className="w-screen h-auto flex justify-center items-center bg-my_color_1 ">
      <div className="w-11/12 h-5/6 ">
        <Hero_section
          children1={"studio."}
          children2={
            "Where innovation meets vision to design spaces that inspire and endure."
          }
          children3={
            "We craft unique architectural solutions that leave a lasting impression."
          }
          children4={
            "At Gehry firm, we transform spaces into timeless expressions of creativity and functionality. Based in Milan, our agency is driven by a passion for innovative design and a commitment to sustainable practices. Our team of architects and designers works closely with clients to bring their visions to life, crafting unique environments that balance aesthetic elegance with practical solutions. From residential projects to large-scale commercial developments, we deliver tailored designs that reflect the individuality of each project."
          }
        />
        <div className="w-full h-auto pt-10 flex flex-wrap justify-around gap-10">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[50vh] md:h-[30vh] lg:h-[50vh] relative"
            >
              <div className="absolute w-2/12 h-1/6 bg-my_color_1 right-0 top-0 z-20 flex items-center justify-center text-my_color_9">
                <Link href={`/services/service/${service.title}`}>
                  <MdArrowOutward className="text-xl" />
                </Link>
              </div>

              <div className="absolute w-full h-1/6 bg-my_color_1 bottom-0 z-20 flex items-center justify-end text-my_color_9">
                <p className="text-[1rem] tracking-widest border-b border-my_color_8">
                  {service.title}
                </p>
              </div>
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
