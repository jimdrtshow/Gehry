import Form from "./_components/Form";
import Container from "@/components/Container";
import Title_container from "@/components/Title_container";

export default function Contact() {
  return (
    <main>
      <section className="w-screen h-[120vh] flex items-center justify-center pt-5 ">
        <Container>
          {/* FORM */}
          <Title_container>
            Send us a message and we'll get back to you as soon as possible.{" "}
          </Title_container>

          <div className="w-full h-auto ">
            <Form />
          </div>
        </Container>
      </section>
    </main>
  );
}
