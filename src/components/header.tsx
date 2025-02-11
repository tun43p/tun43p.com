import { NullableTranslator } from "@solid-primitives/i18n";
import { Dictionary, Locale } from "../i18n";

type Props = {
  title: string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: NullableTranslator<Dictionary, string>;
};

export default function Header({ title, locale, setLocale, t }: Props) {
  return (
    <header class="w-full bg-amber-50 border-b border-black flex justify-between items-center fixed z-1000">
      <p class="text-xl pl-4">{title}</p>
      <div class="flex items-center border-l border-black pl-4">
        <div class="flex space-x-4 pr-4">
          {locale === "en" ? (
            <a class="opacity-50">EN</a>
          ) : (
            <a onClick={() => setLocale("en")}>EN</a>
          )}
          {locale === "fr" ? (
            <a class="opacity-50">FR</a>
          ) : (
            <a onClick={() => setLocale("fr")}>FR</a>
          )}
        </div>
        <nav class="w-fit-content border-l border-black h-full p-4">
          <ul class="flex space-x-4 text-xl">
            {t("header.links") &&
              t("header.links")!.map((link) => (
                <li>
                  <a href={"#" + link.toLowerCase()}>{link}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
