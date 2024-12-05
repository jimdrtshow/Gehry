import Container from "@/components/Container";

// Faire le lien entre ce futur formulaire , email template et route.ts avant la mise en production RESEND
export default function Form_contact() {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <Container>
        <div className="w-full h-full  ">
          {/* NAME & LASTNAME  */}
          <div className="w-full h-[10vh] bg-purple-500"></div>
          <div className="w-full h-[10vh] bg-blue-500"></div>
          <div className="w-full h-[10vh] bg-red-500"></div>
          <div className="w-full h-[40vh] bg-orange-500"></div>
          <div className="w-full h-[10vh] bg-green-500"></div>
        </div>
      </Container>
    </section>
  );
}
