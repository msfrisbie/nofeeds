// Define redirection rules for specific services
const redirectRules = [
  {
    feedUrl: "https://www.linkedin.com/feed/",
    profileUrl: "https://linkedin.com/in/",
  },
  {
    feedUrl: "https://www.facebook.com",
    profileUrl: "https://facebook.com/me",
  },
  { feedUrl: "https://x.com/home", profileUrl: "https://x.com/i/profile" },
  // Add more services here as needed
].map((rule) => ({
  ...rule,
  feedUrl: new URL(rule.feedUrl), // Convert feed URLs to URL objects for easier comparison
}));

// Listen for tab updates in the Chrome browser
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Exit early if the tab's URL is not available
  if (!tab.url) return;

  const currentUrl = new URL(tab.url); // Parse the current tab's URL

  // Check if the current URL matches any redirection rule
  for (const { feedUrl, profileUrl } of redirectRules) {
    if (
      currentUrl.hostname === feedUrl.hostname && // Compare hostnames
      currentUrl.pathname === feedUrl.pathname // Compare pathnames
    ) {
      // Redirect the tab to the profile URL
      chrome.tabs.update(tabId, { url: profileUrl });
      break;
    }
  }
});
