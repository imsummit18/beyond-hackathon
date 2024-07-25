import React from "react";
import Title from "./components/title";
import Timeline from "./components/timeline";
import { noticeBoardAction } from "@/actions/noticeboard-action";
import { LocaleT } from "@/types";
import initTranslations from "@/lib/i18n";
import TranslationsProvider from "@/components/translations-provider";

const i18nNamespaces = ["remaining"];

const NoticeBoard = async ({
  params: { locale },
}: {
  params: {
    locale: LocaleT;
  };
}) => {
  const response = await noticeBoardAction();
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="notice py-14">
        <div className="container">
          <Title />
          <Timeline data={response} />
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default NoticeBoard;
