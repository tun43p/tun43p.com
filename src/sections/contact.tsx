import Title from "../components/title";
import Text from "../components/text";
import Footer from "../components/footer";
import { Dictionary } from "../i18n";

import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import twitterIcon from "../assets/icons/twitter.svg";

type Props = {
  dict: Dictionary;
};

export default function Contact({ dict }: Props) {
  const title = dict["contact.title"];
  const phrase = dict["contact.phrase"];
  const email = dict["contact.email"];
  const socials = dict["contact.socials"];

  return (
    <section id="contact" class="w-full min-h-screen pt-18 relative">
      <Title type="h1" text={title} class="pl-4" />
      <div class="w-3/4 mx-auto flex justify-center items-center flex-col min-h-[calc(100vh-12rem)]">
        <Text class="text-5xl text-center pb-8">{phrase}</Text>
        <div class="text-center">
          <Text class="text-2xl pb-4">{email}</Text>
          <a href="mailto:hello@tun43p.com">
            <Text class="lg:text-6xl text-4xl transition-all hover:text-amber-50">
              hello@tun43p.com
            </Text>
          </a>
        </div>
        <div class="text-center pt-8">
          <Text class="text-2xl pb-4">{socials}</Text>
          <div class="flex justify-center items-center space-x-4">
            <a
              class="flex space-x-2"
              href="https://linkedin.com/in/tun43p"
              target="_blank"
            >
              <img src={linkedinIcon} alt="LinkedIn Icon" />
              <p>LinkedIn</p>
            </a>
            <a
              class="flex space-x-2"
              href="https://github.com/tun43p"
              target="_blank"
            >
              <img src={githubIcon} alt="GitHub Icon" />
              <p>GitHub</p>
            </a>
            <a
              class="flex space-x-2"
              href="https://twitter.com/tun43p"
              target="_blank"
            >
              <img src={twitterIcon} alt="Twitter Icon" />
              <p>Twitter</p>
            </a>
          </div>
        </div>
      </div>
      <Footer dict={dict} />
    </section>
  );
}
