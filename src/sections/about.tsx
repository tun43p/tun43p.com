import Title from "../components/title";
import Text from "../components/text";

import profileImage from "../assets/profile.jpg";
import ParallaxImage from "../components/parallax-image";

// TODO: Add to transations
const aboutTexts = [
  "Salut à tous, moi c'est Alex ! Je suis un développeur Full-Stack passionné par la création d'applications innovantes et intuitives. J'ai une expertise en Flutter et Dart, ainsi qu'un niveau avancé en JavaScript/TypeScript, ce qui me permet de concevoir des solutions personnalisées pour les clients en utilisant les dernières technologies et les meilleures pratiques.",
  "En plus de mes compétences en développement, j'ai également de fortes apétences en design et fais de l'UX/UI pour la plupart de mes projets freelance. Cette expertise me permet de créer des applications non seulement fonctionnelles, mais aussi belles et intuitives. Je suis convaincu que l'expérience utilisateur est l'élément clé pour une application réussie.",
  "Développeur Full-Stack, je suis capable de travailler sur tous les aspects de l'application, de la conception à la mise en production. Je suis constamment à la recherche de nouvelles idées et de méthodes innovantes pour améliorer mes compétences et ma créativité. Mais ce n'est pas tout ! Je suis aussi un grand fan de l'open source. J'aime collaborer avec d'autres développeurs et contribuer à la communauté. Même si je n'ai pas encore eu la chance de participer à des projets open source, je suis toujours à la recherche d'opportunités pour le faire.",
  "En dehors du développement, j'aime le sport et la nature. Je crois que ces activités sont essentielles pour maintenir une concentration optimale et un équilibre de vie sain. Je suis également un musicien depuis plus de 10 ans, ce qui me permet de canaliser ma créativité dans d'autres domaines.",
  "Il est important de noter que je n'ai suivi aucune formation universitaire en informatique, mais acquis toutes mes compétences de manière autodidacte après mon BEP en arts graphiques.",
  "Si vous cherchez un développeur Full-Stack avec une expertise technique solide, une passion pour l'open source et une personnalité unique, ne cherchez plus ! Contactez-moi et ensemble, créons quelque chose d'exceptionnel.",
];

export default function About() {
  return (
    <section id="about" class="w-full max-w-5xl min-h-screen pl-4 pr-4 pt-18">
      <div class="relative z-10">
        <Title type="h1" text="About Me" />
        {aboutTexts.map((aboutText) => (
          <Text class="text-xl pb-2">{aboutText}</Text>
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
