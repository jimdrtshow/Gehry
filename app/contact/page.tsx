import Form from "./_components/Form";
import Hero_section from "@/components/Hero_section";

export default function Contact() {
  return (
    <section className="w-screen h-auto flex items-center justify-center relative bottom-5 ">
      <div className="w-11/12 h-5/6">
        <Hero_section
          children1={"contact us."}
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
        {/* FORM */}
        <div className="w-full h-auto ">
          <Form />
        </div>
      </div>
    </section>
  );
}
