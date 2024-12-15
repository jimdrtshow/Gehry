import Image from "next/image";
import Hero_section from "@/components/Hero_section";

export default function Our_job_app() {
  return (
    <section className="w-screen h-auto flex items-center justify-center pt-32 pb-20   ">
      <div className="w-11/12 h-5/6 ">
        <Hero_section
          children1={"Our job."}
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
        <div className="w-full h-auto  flex  items-center justify-center pt-32">
          <div className="w-full h-[70vh] lg:h-[50vh] lg:flex justify-between ">
            {/* Image 1 */}
            <div className="w-full lg:w-1/3 h-1/2 lg:h-full  flex  items-center justify-start  ">
              <div className="w-full lg:w-11/12 h-5/6 lg:h-full  relative bg-blue-500">
                <Image
                  src="/images/studio_1.jpg"
                  alt="Architectural firm Gehry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Image 2 */}
            <div className="w-full lg:w-2/3 h-1/2 lg:h-full  flex  items-center justify-end ">
              <div className="w-full lg:w-11/12 h-5/6 lg:h-full  relative bg-blue-500">
                <Image
                  src="/images/studio_2.jpg"
                  alt="Architectural firm Gehry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-end pt-20">
          <button>button</button>
        </div>
      </div>
    </section>
  );
}
