(function () {
  browser.runtime.onMessage.addListener((message) => {
    switch (message.command) {
      case 'getList':
        getList();
        break;
      case 'scrollDown':
        scrollDown();
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
    console.log(document.querySelector('.gallerySpinLoader'));
    do {
      window.scrollTo(0, document.body.scrollHeight);
      await sleep(1000);
    } while (document.querySelector('.gallerySpinLoader') != null);
    return true;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
})();
