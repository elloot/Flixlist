let nListObject = document.querySelectorAll("a.slider-refocus");
let nListItems = "";

for (item of nListObject) {
    nListItems = nListItems + item.getAttribute("aria-label") + "\n\n";
}

Clipboard.write(nListItems);
