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

Choose one of the following methods to install the extension:

#### Option 1: Load the Source Code

**For Chromium Browsers:**
1. Download or clone the repository to your local machine.
2. Locate the `dist/` directory containing the extension's source code.
3. On the Extensions Management page, click **"Load unpacked"** (or **"Load extension"** in some browsers) and select the `dist/` directory.

**For Firefox:**
1. Download or clone the repository to your local machine.
2. Locate the `manifest.json` file inside the `dist/` directory.
3. On the Firefox Add-ons Manager page, click **"Load Temporary Add-on"** and select the `manifest.json` file.

#### Option 2: Install via Packaged File (Chromium Browsers Only)
1. Locate the `nofeeds.crx` file in the downloaded repository.
2. Drag and drop the `nofeeds.crx` file into the Extensions Management page.

> **Note:** Firefox does not support installing extensions as `.crx` files. Use the source code method instead.

---

## Generating the CRX File (Chromium Browsers Only)

Follow these steps to create a CRX file for Chromium-based browsers:

1. Open a terminal and navigate to the root directory of the project.
2. Run the following command to package the extension:
   ```bash
   chrome --pack-extension=dist
   ```
3. The packaged CRX file will be created in the same directory as the source directory.

> **Note:** CRX files are specific to Chromium browsers.

---

## Validating the CRX File

To ensure the contents of the CRX file match the `dist/` directory:

1. Extract the contents of the CRX file:
   ```bash
   unzip nofeeds.crx -d extracted_crx
   ```
   - Replace `nofeeds.crx` with the path to your packaged CRX file.
2. Compare the extracted files with the original `dist/` directory:
   ```bash
   diff -r extracted_crx dist/
   ```
   - This command recursively compares both directories and lists any differences.

If no differences are found, the CRX file matches the source code.

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
5. Reload the extension in Chrome:
   - Go to `chrome://extensions`.
   - Click the **"Reload"** button for the NoFeeds extension.

The extension will now include redirection rules for the newly added site.

---

## License

This project is licensed under the [MIT License](LICENSE).

