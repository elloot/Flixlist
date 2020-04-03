document.querySelectorAll(".button").forEach(element => {
    element.addEventListener("click", e => {
        sendMessage("command", e.target.dataset.buttonType);
    });
});

function sendMessage(type, message) {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, {
            [type]: message
        });
    });
}

function reportExecuteScriptError(error) {
    document.querySelector(".popup-content").classList.add("hidden");
    document.querySelector(".error-content").classList.remove("hidden");
    document.querySelector(".error-content").firstChild.classList;
    document.querySelector(".error-content").innerHTML = error.message;
}

browser.tabs.executeScript({ file: "../../content_scripts/Content_script.js" }).catch(reportExecuteScriptError);
