(function() {
    browser.runtime.onMessage.addListener(message => {
        console.log(message.command);
        switch (message.command) {
            case "flixThisList":
                flixThisList();
                break;
            case "scroll":
                scrollLoad();
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

    async function scrollLoad() {
        for (i = 0; i < 5; i++) {
            window.scrollTo(0, document.body.scrollHeight);
            await sleep(500);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function scrollDown(running) {
        console.log(running);
        while (running) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
})();
