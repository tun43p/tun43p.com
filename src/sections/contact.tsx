import Title from "../components/title";
import Text from "../components/text";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <section id="contact" class="w-full min-h-screen pt-18 relative">
      <Title type="h1" text="Contact" class="pl-4" />
      {/* Calc min-h-screen */}
      <div class="flex justify-center items-center flex-col min-h-[calc(100vh-12rem)]">
        <div class="text-center">
          <Text class="text-2xl pb-4">You can send me an email at</Text>
          <a href="mailto:hello@tun43p.com">
            <Text class="lg:text-6xl text-4xl transition-all hover:text-blue-500">
              hello@tun43p.com
            </Text>
          </a>
        </div>
        <div class="text-center pt-8">
          <Text class="text-2xl pb-4">Or find me on</Text>
          <div class="flex justify-center items-center space-x-2">
            <a href="https://linkedin.com/in/tun43p" target="_blank">
              <Text>LinkedIn</Text>
            </a>
            <a href="https://github.com/tun43p" target="_blank">
              <Text>GitHub</Text>
            </a>
            <a href="https://twitter.com/tun43p" target="_blank">
              <Text>Twitter</Text>
            </a>
            <a href="https://soundcloud.com/adaeron" target="_blank">
              <Text>SoundCloud</Text>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
