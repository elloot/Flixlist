function listenForClicks() {}

document.querySelector(".button").addEventListener("click", () => {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, {
            command: "flixThisList"
        });
    });
});

document.querySelector(".scroll-button").addEventListener("mousedown", e => {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, {
            command: "scrollDown"
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
    .executeScript({ file: "../../content_scripts/Content_script.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
