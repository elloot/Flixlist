(function() {
    browser.runtime.onMessage.addListener(message => {
        console.log(message.command);
        switch (message.command) {
            case "flixThisList":
                flixThisList();
                break;
            case "scrollDown":
                scrollDown(true);
                break;
            case "stopScroll":
                scrollDown(false);
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

    function scrollDown(running) {
        console.log(running);
        while (running) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
})();
