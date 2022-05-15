import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";

let userLanguage = window.navigator.language;
let locale = "es-Es";
let messages = localeEsMessages;

if (userLanguage !== "es-ES" && userLanguage !== "es") {
  locale = "en";
  messages = localeEnMessages;
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList language={locale} />
  </IntlProvider>,
  document.getElementById("root")
);
