(() => {
  const containerId = "GTM-MG693D6";
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const firstScript = document.getElementsByTagName("script")[0];
  const tagManagerScript = document.createElement("script");
  tagManagerScript.async = true;
  tagManagerScript.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  firstScript.parentNode.insertBefore(tagManagerScript, firstScript);
})();
