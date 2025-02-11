import Title from "../components/title";
import Text from "../components/text";

import profileImage from "../assets/profile.jpg";
import ParallaxImage from "../components/parallax-image";

const aboutTexts = [
  "Hi everyone, I'm Alex! I'm a full-stack developer with a passion for creating innovative and intuitive applications. I have expertise in Go, Python, Flutter and Dart, as well as an advanced level in JavaScript / TypeScript, which allows me to design custom solutions for clients using the latest technologies and best practices.",
  "In addition to my development skills, I also have strong design skills and do UX/UI for most of my freelance projects. This expertise enables me to create applications that are not only functional, but also beautiful and intuitive. I'm convinced that the user experience is the key to a successful application.",
  "As a full-stack developer, I'm able to work on all aspects of the application, from design to production. I'm constantly looking for new ideas and innovative methods to improve my skills and creativity. But that's not all! I'm also a big fan of open source. I love collaborating with other developers and contributing to the community. Even though I haven't yet had the chance to participate in open source projects, I'm always looking for opportunities to do so.",
  "Apart from development, I love sport and nature. I believe these activities are essential for maintaining optimum concentration and a healthy life balance. I've also been a musician for over 10 years, which allows me to channel my creativity into other areas",
  "It's important to note that I didn't follow any university training in IT, but acquired all my skills self-taught after my BEP in graphic arts.",
  "If you're looking for a full-stack developer with solid technical expertise, a passion for open source and a unique personality, look no further! Contact me and let's create something exceptional together",
];

export default function About() {
  return (
    <section id="about" class="w-full max-w-5xl min-h-screen pl-4 pr-4 pt-18">
      <div class="relative z-10">
        <Title type="h1" text="About Me" />
        {aboutTexts.map((aboutText) => (
          <Text class="text-xl pb-4">{aboutText}</Text>
        ))}
      </div>
      <ParallaxImage
        src={profileImage}
        alt="Profile picture"
        class="absolute right-32 top-24 w-lg opacity-70 z-0 lg:block hidden"
      />
    </section>
  );
}
