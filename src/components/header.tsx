type Props = {
  title: string;
  links: Link[];
};

export default function Header({ title, links }: Props) {
  return (
    <header class="w-full border-b border-black flex justify-between items-center">
      <p class="text-xl pl-4">{title}</p>
      <nav class="w-fit-content border-l border-black h-full p-4">
        <ul class="flex space-x-4 text-xl">
          {links.map((link) => (
            <li>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
