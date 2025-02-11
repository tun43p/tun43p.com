type Props = {
  children: string;
  class?: string;
};

export default function Text({ children, class: className }: Props) {
  const wordsToColor = [
    {
      words: ["full-stack", "UX/UI", "open source"],
      color: "bg-amber-300",
    },
    {
      words: [
        "Flutter",
        "Dart",
        "JavaScript",
        "TypeScript",
        "Deno",
        "Docker",
        "Python",
        "Solidity",
      ],
      color: "bg-blue-300",
    },
    {
      words: [
        "freelance",
        "trading",
        "developed",
        "command-line",
        "projects",
        "technologies",
        "design",
      ],
      color: "bg-purple-300",
    },
    {
      words: ["creativity", "musician", "clients", "skills", "contact"],
      color: "bg-pink-300",
    },
    {
      words: ["GitHub", "Chrome", "Discord", "Firefox"],
      color: "bg-red-300",
    },
    {
      words: ["Harmony", "OSX"],
      color: "bg-green-300",
    },
  ];

  const colorWords = (text: string) => {
    let newText = text;

    wordsToColor.forEach((wordToColor) => {
      wordToColor.words.forEach((word) => {
        newText = newText.replace(
          new RegExp(word, "g"),
          `<span class="rounded-md px-1 ${wordToColor.color}">${word}</span>`,
        );
      });
    });

    return newText;
  };

  return <p class={className} innerHTML={colorWords(children)}></p>;
}
