import Container from "@/components/Container";
import Title_container from "@/components/Title_container";
import Paragraph from "@/components/fonts/Paragraph";
import Image from "next/image";
import Title from "@/components/fonts/Title";
import Link from "next/link";
import work_app_items from "@/data/work_app_items";
import Button from "@/components/Button";

export default function Work_app() {
  return (
    <section className="w-screen h-auto flex items-center justify-center pt-12 pb-20   ">
      <Container>
        <div className="w-auto h-auto absolute pt-5 pb-5">
          <Paragraph>Last works.</Paragraph>
        </div>
        <Title_container>
          Shaping bold concepts into spaces that balance vision and purpose.
        </Title_container>
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
                  layout="fill"
                  objectFit="cover"
                  className="-z-10 "
                />

                <Link href={item.link}>
                  <div className="w-full h-full flex items-center justify-center text-white ">
                    <Title>{item.text}</Title>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="w-full h-auto flex items-center justify-end pt-20">
          <Button>more</Button>
        </div>
      </Container>
    </section>
  );
}
