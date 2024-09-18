import { en as baseLocale } from "./en";

type LocaleKey = keyof typeof baseLocale;
type Template = (...replacements: string[]) => string;
type Locale = Record<LocaleKey, string | Template>;

const en: Locale = baseLocale;

export { en };
export { fr } from "./fr";
export type { Locale, LocaleKey };
