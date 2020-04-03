(function() {
    browser.runtime.onMessage.addListener(message => {
        //console.log(message.command);
        switch (message.command) {
            case "getList":
                getList();
                break;
            case "scrollDown":
                scrollDown();
                break;
        }
    });

    function getList() {
        let nListObject = document.querySelectorAll("a.slider-refocus");
        let nListItems = "";

        for (item of nListObject) {
            nListItems = nListItems + item.getAttribute("aria-label") + "\n\n";
        }

        navigator.clipboard.writeText(nListItems);
    }

    async function scrollDown() {
        for (i = 0; i < 5; i++) {
            window.scrollTo(0, document.body.scrollHeight);
            await sleep(500);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
})();
