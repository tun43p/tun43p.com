import Title from "../components/title";
import Text from "../components/text";
import { Dictionary } from "../i18n";

import profileImage from "../assets/profile.jpg";
import ParallaxImage from "../components/parallax-image";

type Props = {
  dict: Dictionary;
};

export default function About({ dict }: Props) {
  const title = dict["about.title"];
  const content = dict["about.content"];

  return (
    <section id="about" class="w-full max-w-5xl min-h-screen pl-4 pr-4 pt-18">
      <div class="relative z-10">
        <Title type="h1" text={title} />
        {content.map((text) => (
          <Text class="text-xl pb-4">{text}</Text>
        ))}
      </div>
      <ParallaxImage
        src={profileImage}
        alt="Profile"
        class="absolute right-32 top-24 w-lg opacity-70 z-0 lg:block hidden"
      />
    </section>
  );
}
