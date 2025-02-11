import { createSignal, onCleanup, onMount } from "solid-js";

type Props = {
  src: string;
  alt: string;
  class: string;
};

export default function ParallaxImage({ src, alt, class: className }: Props) {
  const [position, setPosition] = createSignal({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setPosition({ x, y });
  };

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    onCleanup(() => window.removeEventListener("mousemove", handleMouseMove));
  });

  return (
    <img
      src={src}
      alt={alt}
      style={{
        transform: `translate(${position().x}px, ${position().y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      class={className}
    />
  );
}
