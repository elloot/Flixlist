function listenForClicks() {}

document.addEventListener("click", () => {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, {
            command: "flixthislist"
        });
    });
});

function reportExecuteScriptError(error) {
    document.querySelector(".popup-content").classList.add("hidden");
    document.querySelector(".error-content").classList.remove("hidden");
    document.querySelector(".error-content").firstChild.classList;
    document.querySelector(".error-content").innerHTML = error.message;
}

browser.tabs
    .executeScript({ file: "../../content_scripts/heheitkindawork.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
