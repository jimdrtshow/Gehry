import studio_app_items from "@/data/studio_app_items";
import Hero_section from "@/components/Hero_section";

export default function Studio_app() {
  return (
    <section className="w-screen h-auto flex items-center justify-center">
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
        <div className="w-full h-[60vh] lg:h-[40vh]   flex flex-wrap">
          {studio_app_items.map((item, index) => (
            <div
              key={index}
              className="w-1/2 lg:w-1/4 h-1/2 lg:h-full flex flex-col"
            >
              <div className="w-full h-2/3  flex items-end justify-center">
                <p className="text-[2.618rem]">{item.num}</p>
              </div>
              <div className="w-full h-1/3  flex items-center justify-center">
                <p className="text-[1rem] text-my_color_6">{item.of}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-auto flex items-center justify-end pt-20">
          <button>button</button>
        </div>
      </div>
    </section>
  );
}
