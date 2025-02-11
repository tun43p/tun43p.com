import Title from "../components/title";
import Text from "../components/text";
import Footer from "../components/footer";

import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import { NullableTranslator } from "@solid-primitives/i18n";
import { Dictionary } from "../i18n";

type Props = {
  t: NullableTranslator<Dictionary, string>;
};

export default function Contact({ t }: Props) {
  return (
    <section id="contact" class="w-full min-h-screen pt-18 relative">
      {t("contact.title") && (
        <Title type="h1" text={t("contact.title")!} class="pl-4" />
      )}
      <div class="w-3/4 mx-auto flex justify-center items-center flex-col min-h-[calc(100vh-12rem)]">
        {t("contact.phrase") && (
          <Text class="text-5xl text-center pb-8">{t("contact.phrase")!}</Text>
        )}
        <div class="text-center">
          {t("contact.email") && (
            <Text class="text-2xl pb-4">{t("contact.email")!}</Text>
          )}
          <a href="mailto:hello@tun43p.com">
            <Text class="lg:text-6xl text-4xl transition-all hover:text-amber-50">
              hello@tun43p.com
            </Text>
          </a>
        </div>
        <div class="text-center pt-8">
          {t("contact.socials") && (
            <Text class="text-2xl pb-4">{t("contact.socials")!}</Text>
          )}
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
      <Footer />
    </section>
  );
}
