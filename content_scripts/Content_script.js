(function() {
    browser.runtime.onMessage.addListener(message => {
        switch (message.command) {
            case "flixThisList":
                flixThisList();
                break;
            case "scrollDown":
                //run function that scrolls down
                break;
        }
    });

    function flixThisList() {
        let nListObject = document.querySelectorAll("a.slider-refocus");
        let nListItems = "";

        for (item of nListObject) {
            nListItems = nListItems + item.getAttribute("aria-label") + "\n\n";
        }

        navigator.clipboard.writeText(nListItems);
    }
})();
