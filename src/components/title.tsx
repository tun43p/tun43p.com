type Props = {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Title({ text, type }: Props) {
  switch (type) {
    case "h1":
      return <h1 class="text-6xl font-bold pb-4">{text}</h1>;
    case "h2":
      return <h2 class="text-4xl font-bold pb-4">{text}</h2>;
    case "h3":
      return <h3 class="text-3xl font-bold pb-4">{text}</h3>;
    case "h4":
      return <h4 class="text-2xl font-bold pb-4">{text}</h4>;
    case "h5":
      return <h5 class="text-1xl font-bold pb-4">{text}</h5>;
    case "h6":
      return <h6 class="text-large font-bold pb-4">{text}</h6>;
    default:
      return <h1 class="text-4xl font-bold pb-4">{text}</h1>;
  }
}
