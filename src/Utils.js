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

 export const ChangeStorageItemBoolState = (storageItemKey) => {
    if (localStorage.getItem(storageItemKey) == "true") {
        localStorage.setItem(storageItemKey, false);
    } else {
        localStorage.setItem(storageItemKey, true);
    }
};
