import Image from "next/image";
import Container from "@/components/Container";
import Title_container from "@/components/Title_container";
import Title from "@/components/fonts/Title";
import Sub_title from "@/components/fonts/Sub_title";
import Paragraph from "@/components/fonts/Paragraph";
import Button from "@/components/Button";

export default function Our_job_app() {
  return (
    <section className="w-screen h-auto flex items-center justify-center pt-32 pb-20   ">
      <Container>
        <div className="w-auto h-auto absolute pt-5 pb-5">
          <Paragraph>Our Job.</Paragraph>
        </div>
        <Title_container>
          Transforming ideas into extraordinary spaces.
        </Title_container>

        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-start pt-20  ">
            <Sub_title>
              We specialize in crafting innovative, bespoke designs that merge
              functionality with elegance.
            </Sub_title>
          </div>
          <div className="w-full h-auto flex items-center justify-start pt-5  ">
            <Paragraph>
              From conceptualization to execution, we guide our clients through
              every step of the creative process, ensuring their vision becomes
              a reality. Our expertise spans residential, commercial, and public
              projects, with a commitment to sustainability and precision. Every
              design we create is a reflection of our passion for excellence and
              our dedication to shaping environments that inspire.
            </Paragraph>
          </div>

          <div className="w-full h-auto  flex  items-center justify-center pt-32">
            <div className="w-full h-[70vh] lg:h-[50vh] lg:flex justify-between ">
              {/* Image 1 */}
              <div className="w-full lg:w-1/3 h-1/2 lg:h-full  flex  items-center justify-start  ">
                <div className="w-full lg:w-11/12 h-5/6 lg:h-full  relative bg-blue-500">
                  <Image
                    src="/images/studio_1.jpg"
                    alt="Architectural firm Gehry"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              {/* Image 2 */}
              <div className="w-full lg:w-2/3 h-1/2 lg:h-full  flex  items-center justify-end ">
                <div className="w-full lg:w-11/12 h-5/6 lg:h-full  relative bg-blue-500">
                  <Image
                    src="/images/studio_2.jpg"
                    alt="Architectural firm Gehry"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex items-center justify-end pt-20">
            <Button>more</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
