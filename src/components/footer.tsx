import { Dictionary } from "../i18n";

type Props = {
  dict: Dictionary;
};

export default function Footer({ dict }: Props) {
  return (
    <footer class="absolute bottom-0 w-full h-12 flex justify-center items-center">
      {dict["footer.tag"]}
    </footer>
  );
}
