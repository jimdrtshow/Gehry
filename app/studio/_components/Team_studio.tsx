import Container from "@/components/Container";
import Paragraph from "@/components/fonts/Paragraph";
import Title_container from "@/components/Title_container";
import Image from "next/image";
import Sub_title from "@/components/fonts/Sub_title";
export default function Team_studio() {
  return (
    <section className="w-screen h-auto flex items-center justify-center pt-32 pb-20   ">
      <Container>
        <div className="w-auto h-auto absolute pt-5 pb-5">
          <Paragraph>Our Team</Paragraph>
        </div>
        <Title_container>
          Crafting timeless spaces with passion, precision, and creative
          collaboration.
        </Title_container>

        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-start pt-20  ">
            <Sub_title>
              Meet the passionate minds behind our innovative designs, dedicated
              to shaping spaces that inspire and endure.
            </Sub_title>
          </div>
          <div className="w-full h-auto flex items-center justify-start pt-5  ">
            <Paragraph>
              At Gehry Firm, we bring vision and expertise together to create
              spaces that inspire and resonate. Located in Milan, our practice
              is rooted in a dedication to cutting-edge design and sustainable
              solutions. Our team of architects and designers collaborates
              closely with clients, transforming their ideas into distinctive,
              functional environments. Whether designing bespoke homes or
              ambitious commercial projects, we focus on harmonizing innovation
              with practicality, delivering spaces that celebrate individuality
              and enduring quality.
            </Paragraph>
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center  pt-10">
          <div className="w-5/12 md:w-3/12 lg:w-2/12 h-[35vh]  m-2 relative flex items-center">
            <Image
              src="/images/team_example.jpg"
              alt="team_gehry"
              layout="fill"
              objectFit="cover"
              className="z-0 rounded-md"
            />
            <div className="w-full h-5/6 z-50 flex items-end justify-center">
              <div className="w-10/12 h-1/3 bg-white rounded-md ">
                <div className="w-full h-1/2 flex items-center justify-start  ">
                  <p className="text-sm pl-2 ">Orlando Diggs</p>
                </div>
                <div className="w-full h-1/2 flex items-center justify-start  ">
                  <p className="text-sm text-stone-700 pl-2 ">Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
