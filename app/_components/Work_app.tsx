import Hero_section from "@/components/Hero_section";
import Image from "next/image";
import Link from "next/link";
import work_app_items from "@/data/work_app_items";

export default function Work_app() {
  return (
    <section className="w-screen h-auto flex items-center justify-center">
      <div className="w-11/12 h-5/6 ">
        <Hero_section
          children1={"Last works."}
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

        {work_app_items.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[40vh] md:h-[50vh] lg:h-[90vh]  mt-12 flex items-center justify-center"
            >
              <div className="w-11/12 h-5/6 relative display-flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="-z-10 object-cover "
                />

                <Link href={item.link}>
                  <div className="w-full h-full flex items-center justify-center text-white ">
                    <h1>{item.text}</h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="w-full h-auto flex items-center justify-end pt-20">
          <button>button</button>
        </div>
      </div>
    </section>
  );
}
