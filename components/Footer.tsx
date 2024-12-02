import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-screen h-[7vh] bg-white fixed bottom-0 flex items-center justify-center">
      <Container>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1/2 h-full flex items-center justify-start">
            <p className="text-xs text-left">® 2025 Gehry</p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end">
            <ul className="inline-flex text-sm">
              <li className="pr-5">
                <FaLinkedinIn />
              </li>
              <li className="pr-5">
                <FaXTwitter />
              </li>
              <li className="pr-5">
                <FaGithub />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
