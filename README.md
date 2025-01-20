# NoFeeds

Social media sites like Facebook, LinkedIn, and Twitter are designed to funnel you to the feed, where infinite scrolling often leads to mindless browsing. Blocking these sites isn't an option, as I still need them for business use.

**NoFeeds** is a simple, side-loadable browser extension that redirects you away from the default feed page of social media sites to your profile, allowing you to still fully use the site while effectively disabling the feed.

## Why Sideloading?

- This extension requires the highly sensitive `tabs` and `<all_urls>` permissions. Sideloading the extension eliminates risks associated with marketplace-installed extensions, such as anonymous publishers, malicious takeovers, and forced auto-updates.
- Users can customize the `redirectRules` object directly in the source code and reload the extension to apply the changes as needed.
- The extension is ultra-lightweight, consisting of just two files and fewer than 100 lines of code. It's transparent, easy to review, and simple to modify. 

## Installation Guide

### Step 1: Enable Developer Mode

#### For Chromium Browsers:
1. Open the **Extensions Management Page**:
   - **Chrome**: Navigate to `chrome://extensions`.
   - **Microsoft Edge**: Navigate to `edge://extensions`.
   - **Brave**: Navigate to `brave://extensions`.
   - **Opera**: Navigate to `opera://extensions`.
2. In the top-right corner, toggle the **"Developer mode"** switch to enable it.

#### For Firefox:
1. Open the **Add-ons Manager** by navigating to `about:debugging#/runtime/this-firefox`.
2. Click **"Load Temporary Add-on"**.

---

### Step 2: Load the Extension

#### For Chromium Browsers:
1. Download or clone the repository to your local machine.
2. Locate the `dist/` directory containing the extension's source code.
3. On the Extensions Management page, click **"Load unpacked"** (or **"Load extension"** in some browsers) and select the `dist/` directory.

#### For Firefox:
1. Download or clone the repository to your local machine.
2. Locate the `manifest.json` file inside the `dist/` directory.
3. On the Firefox Add-ons Manager page, click **"Load Temporary Add-on"** and select the `manifest.json` file.

---

## Adding Additional Social Media Sites

To extend the functionality of NoFeeds to redirect additional social media sites:

1. Open the extension's source code located in the `dist/` directory.
2. Locate the `background.js` file where the list of social media sites is defined.
3. Add an entry for the new social media site with the following structure:
   ```javascript
    const redirectRules = [
        ...
        {
            // The full feed URL
            feedUrl: "https://www.newsite.com/feed/",
            // The URL to redirect to
            profileUrl: "https://newsite.com/profile/",
        },
    ]
   ```
   - Replace `www.newsite.com` with the domain of the social media site.
   - For best results, ensure the profile URL is the generic profile redirect URL for the site. For example, `facebook.com/me` redirects to the current authenticated profile page.
4. Save your changes.
5. Reload the extension:

   **For Chromium Browsers:**
   - Go to `chrome://extensions`.
   - Click the **"Reload"** button for the NoFeeds extension.

   **For Firefox:**
   - Navigate to `about:debugging#/runtime/this-firefox`.
   - Locate the NoFeeds extension in the list of temporary add-ons.
   - Click the **"Reload"** button next to the extension.

The extension will now include redirection rules for the newly added site.

---

## License

This project is licensed under the [MIT License](LICENSE).
