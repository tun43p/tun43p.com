import Title from "../components/title";
import Text from "../components/text";

import profileImage from "../assets/profile.jpg";
import ParallaxImage from "../components/parallax-image";
import { NullableTranslator } from "@solid-primitives/i18n";
import { Dictionary } from "../i18n";

type Props = {
  t: NullableTranslator<Dictionary, string>;
};

export default function About({ t }: Props) {
  return (
    <section id="about" class="w-full max-w-5xl min-h-screen pl-4 pr-4 pt-18">
      <div class="relative z-10">
        <Title type="h1" text="About Me" />
        {t("about") &&
          t("about")!.map((text) => <Text class="text-xl pb-4">{text}</Text>)}
      </div>
      <ParallaxImage
        src={profileImage}
        alt="Profile picture"
        class="absolute right-32 top-24 w-lg opacity-70 z-0 lg:block hidden"
      />
    </section>
  );
}
