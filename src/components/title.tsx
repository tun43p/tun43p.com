type Props = {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  class?: string;
};

export default function Title({ text, type, class: className }: Props) {
  switch (type) {
    case "h1":
      return <h1 class={`text-6xl font-bold pb-4 ${className}`}>{text}</h1>;
    case "h2":
      return <h2 class={`text-4xl font-bold pb-4 ${className}`}>{text}</h2>;
    case "h3":
      return <h3 class={`text-3xl font-bold pb-4 ${className}`}>{text}</h3>;
    case "h4":
      return <h4 class={`text-2xl font-bold pb-4 ${className}`}>{text}</h4>;
    case "h5":
      return <h5 class={`text-1xl font-bold pb-4 ${className}`}>{text}</h5>;
    case "h6":
      return <h6 class={`text-large font-bold pb-4 ${className}`}>{text}</h6>;
  }
}
