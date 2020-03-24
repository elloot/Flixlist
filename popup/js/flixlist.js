function listenForClicks() {
    document.addEventListener("click", e => {
        console.log(e);
    });
}

function reportExecuteScriptError(error) {
    document.querySelector(".popup-content").classList.add("hidden");
    document.querySelector(".error-content").classList.remove("hidden");
    console.error(`Failed to execute Flixalist content script: ${error.message}`);
}

browser.tabs
    .executeScript({ file: "/content_scripts/heheitdontwork.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
