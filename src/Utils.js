export const GetCurrentLanguageId = () => {
    var langId = localStorage.getItem("languageId");

    if (langId == null) {
        langId = 0;
    }

    return langId;
 };
 