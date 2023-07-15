export const IsAdminLayout = () => {
    return window.location.pathname.startsWith("/admin");
};

export const GetCurrentLanguageId = () => {
    var langId = localStorage.getItem("languageId");

    if (langId == null) {
        langId = 0;
    }

    return langId;
 };
 