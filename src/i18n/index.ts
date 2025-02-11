import * as i18n from "@solid-primitives/i18n";

import { dict } from "./en";

export type Locale = "en" | "fr";
export type RawDictionary = typeof dict;
export type Dictionary = i18n.Flatten<RawDictionary>;
