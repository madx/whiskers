import { useCallback, useEffect, useState } from "preact/hooks";
import * as locales from "~/locales";
import { LocaleKey } from "~/locales";

type LocaleName = keyof typeof locales;

function useLocale() {
  const navigatorLocale = navigator.language
    .toLowerCase()
    .split("-")
    .at(0) as LocaleName;

  const [preferredLocale, setPreferredLocale] = useState<LocaleName>(
    localStorage.getItem("locale") as LocaleName,
  );

  const onStoredLocaleChange = useCallback(
    (ev: StorageEvent) => {
      console.log(ev);
      if (ev.key === "locale" && ev.newValue) {
        setPreferredLocale(ev.newValue as LocaleName);
      }
    },
    [setPreferredLocale],
  );

  useEffect(() => {
    window.addEventListener("storage", onStoredLocaleChange);

    return () => {
      window.removeEventListener("storage", onStoredLocaleChange);
    };
  }, [onStoredLocaleChange]);

  const locale =
    locales[preferredLocale] || locales[navigatorLocale] || locales.en;

  const _ = useCallback(
    (key: LocaleKey, ...args: string[]) =>
      (typeof locale[key] === "function"
        ? locale[key](...args)
        : locale[key]) || key,
    [locale],
  );

  return { _, setPreferredLocale };
}

export { useLocale };
