import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen h-[7vh] bg-my_color_1   flex items-center justify-center text-my_color_9">
      <Container>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1/2 h-full flex items-center justify-start">
            <p className="text-xs text-left">® 2025 Gehry</p>
            <Link href="/admin">Admin?</Link>
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
