(function () {
  browser.runtime.onMessage.addListener((message) => {
    switch (message.command) {
      case 'getList':
        getList();
        break;
    }
  });

  async function getList() {
    scrollDown().then(() => {
      let nListObject = document.querySelectorAll('a.slider-refocus');
      let nListItems = '';

      for (item of nListObject) {
        nListItems = nListItems + item.getAttribute('aria-label') + '\n\n';
      }

      navigator.clipboard.writeText(nListItems);
    });
  }

  async function scrollDown() {
    const footer = document.querySelector('.member-footer');
    do {
      footer.scrollIntoView();
      await sleep(1000);
    } while (!isInViewport(footer));
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
})();
