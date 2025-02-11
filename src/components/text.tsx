type Props = {
  children: string;
  class?: string;
};

export default function Text({ children, class: className }: Props) {
  const wordsToColor = [
    {
      words: ["full-stack", "UX/UI", "open source", "Rust", "SoundCloud"],
      color: "bg-amber-300",
    },
    {
      words: [
        "Flutter",
        "Dart",
        "TypeScript",
        "Deno",
        "Docker",
        "React",
        "LinkedIn",
      ],
      color: "bg-blue-300",
    },
    {
      words: ["Twitter", "Go", "Harmony"],
      color: "bg-cyan-300",
    },
    {
      words: ["Python", "JavaScript", "blockchain"],
      color: "bg-yellow-300",
    },
    {
      words: ["SolidJS", "Solidity", "Discord", "GitHub", "OSX", "Mac"],
      color: "bg-gray-300",
    },
    {
      words: [
        "freelance",
        "trading",
        "developed",
        "command-line",
        "projects",
        "technologies",
        "Lua",
      ],
      color: "bg-purple-300",
    },
    {
      words: ["musician", "clients", "skills", "contact", "C\\+\\+"],
      color: "bg-pink-300",
    },
    {
      words: ["Chrome", "Firefox", "Svelte", "Shell", "prototyping"],
      color: "bg-red-300",
    },
    {
      words: ["Vue.js", "creativity", "design", "Design", "hello@tun43p.com"],
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
