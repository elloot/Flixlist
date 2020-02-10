(function() {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    /*if (window.hasRun) {
        return;
    }
    window.hasRun = true;*/

    let nListObject = document.querySelectorAll("a.slider-refocus");
    let nListItems = "";

    for (item of nListObject) {
        nListItems = nListItems + item.getAttribute("aria-label") + "\n\n";
    }

    Clipboard.write(nListItems);
})();
