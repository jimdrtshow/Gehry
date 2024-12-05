import Button from "@/components/Button";
import Image from "next/image";
import Container from "@/components/Container";
import Title from "@/components/fonts/Title";
import Super_title from "@/components/fonts/Super_title";

export default function Hero_app() {
  return (
    <header className="w-screen h-screen relative -z-10 flex items-center justify-center bg-black text-white ">
      {/* Background Image  */}
      <Image
        src="/images/hero.jpg"
        alt="House Wallpaper 4k"
        fill
        className="opacity-50 object-cover"
      />
      {/* Container Component for Margin */}
      <Container>
        {/* Flex container   */}
        <div className="w-full h-full lg:flex flex-row z-10 relative">
          {/* Block 1  */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-end justify-start ">
            <div>
              <div className="w-full h-auto">
                <Title>An ambitious architectural firm from Milan.</Title>
              </div>
              <div className="w-full h-[20vh] hidden lg:flex items-end justify-start">
                <Button>See our works</Button>
              </div>
            </div>
          </div>
          {/* Block 2  */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-end justify-start lg:justify-end ">
            <Super_title>Gehry.</Super_title>
          </div>
        </div>
      </Container>
    </header>
  );
}
