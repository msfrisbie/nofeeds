const redirectRules = [
  { feedUrl: "linkedin.com/feed", profileUrl: "linkedin.com/in/" },
  { feedUrl: "facebook.com", profileUrl: "facebook.com/me" },
  { feedUrl: "x.com/home", profileUrl: "x.com/i/profile" },
  // Add more services here as needed
];

const normalizeUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, ""); // Remove 'www.' prefix
    const pathname = parsedUrl.pathname.replace(/\/+$/, ""); // Remove trailing slashes
    return `${hostname}${pathname}`;
  } catch {
    return ""; // Return an empty string for invalid URLs
  }
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url) {
    return;
  }

  const currentUrl = normalizeUrl(tab.url);

  for (const rule of redirectRules) {
    const normalizedFeedUrl = normalizeUrl(`https://${rule.feedUrl}`);
    if (currentUrl === normalizedFeedUrl) {
      const newUrl = `https://${rule.profileUrl}`;
      chrome.tabs.update(tabId, { url: newUrl });
      break;
    }
  }
});
