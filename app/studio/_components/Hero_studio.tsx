import Container from "@/components/Container";
import Title_container from "@/components/Title_container";
import Sub_title from "@/components/fonts/Sub_title";
import Paragraph from "@/components/fonts/Paragraph";

import Title from "@/components/fonts/Title";

export default function Hero_studio() {
  return (
    <section className="w-screen h-auto flex items-center justify-center pt-32 pb-20   ">
      <Container>
        <div className="w-auto h-auto absolute pt-5 pb-5">
          <Paragraph>Studio.</Paragraph>
        </div>
        <Title_container>
          Where innovation meets vision to design spaces that inspire and
          endure.
        </Title_container>

        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-start pt-20  ">
            <Sub_title>
              We craft unique architectural solutions that leave a lasting
              impression.
            </Sub_title>
          </div>
          <div className="w-full h-auto flex items-center justify-start pt-5  ">
            <Paragraph>
              At Gehry firm, we transform spaces into timeless expressions of
              creativity and functionality. Based in Milan, our agency is driven
              by a passion for innovative design and a commitment to sustainable
              practices. Our team of architects and designers works closely with
              clients to bring their visions to life, crafting unique
              environments that balance aesthetic elegance with practical
              solutions. From residential projects to large-scale commercial
              developments, we deliver tailored designs that reflect the
              individuality of each project.
            </Paragraph>
          </div>
          <div className="w-full h-[60vh] lg:h-[40vh]  mt-12 flex flex-wrap">
            {/* ITEM 1 */}
            <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full flex flex-col">
              <div className="w-full h-2/3  flex items-end justify-center">
                <Title>36</Title>
              </div>
              <div className="w-full h-1/3  flex items-center justify-center">
                <Paragraph>Pojects</Paragraph>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full flex flex-col">
              <div className="w-full h-2/3  flex items-end justify-center">
                <Title>17</Title>
              </div>
              <div className="w-full h-1/3  flex items-center justify-center">
                <Paragraph>Colabs</Paragraph>
              </div>{" "}
            </div>
            {/* ITEM 3 */}
            <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full flex flex-col">
              <div className="w-full h-2/3  flex items-end justify-center">
                <Title>12</Title>
              </div>
              <div className="w-full h-1/3  flex items-center justify-center">
                <Paragraph>Prices</Paragraph>
              </div>
            </div>
            {/* ITEM 4 */}
            <div className="w-1/2 lg:w-1/4 h-1/2 lg:h-full flex flex-col">
              <div className="w-full h-2/3  flex items-end justify-center">
                <Title>17</Title>
              </div>
              <div className="w-full h-1/3  flex items-center justify-center">
                <Paragraph>years</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
