var data = {
  pages: [
    {
      name: "about:permissions",
      description: "",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://browser/content/preferences/aboutPermissions.css",
        "chrome://global/skin/inContentUI.css",
        "chrome://global/skin/aboutPermissions.css",
      ],
    },
    {
      name: "about:",
      description: "an about page",
      stylesheets: [
        "chrome://global/skin/about.css",
      ],
    },
    {
      name: "about:about",
      description: "List of all about pages",
      stylesheets: [
        "chrome://global/skin/about.css",
      ],
    },
    {
      name: "about:accounts",
      description: "Firefox accounts",
      stylesheets: [
        "chrome://browser/content/aboutaccounts/fonts.css",
        "chrome://browser/content/aboutaccounts/normalize.css",
        "chrome://browser/content/aboutaccounts/main.css",
        "chrome://browser/content/aboutaccounts/aboutaccounts.css",
      ],
    },
    {
      name: "about:addons",
      description: "Addons and extensions manager",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://global/skin/inContentUI.css",
        "chrome://mozapps/content/extensions/extensions.css",
        "chrome://mozapps/skin/extensions/extensions.css",
      ],
    },
    {
      name: "about:app-manager",
      description: "Firefox OS App Manager",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://browser/skin/devtools/app-manager/index.css",
        "chrome://browser/skin/devtools/app-manager/projects.css",
        "chrome://browser/skin/devtools/app-manager/device.css",
      ],
    },
    {
      name: "about:config",
      description: "Firefox hidden preferences",
      stylesheets: [
        "chrome://global/skin/config.css",
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
      ],
    },
    {
      name: "about:cache",
      description: "Cache information",
      stylesheets: [
        "chrome://global/skin/about.css",
        "chrome://global/skin/aboutCache.css",
      ],
    },
    {
      name: "about:crashes",
      description: "Crash directory listing",
      stylesheets: [
        "chrome://global/skin/dirListing.css",
        "inline",
      ],
    },
    {
      name: "about:credits",
      description: "Firefox Credits",
      stylesheets: [
        "chrome://global/skin/about.css",
        "inline",
      ],
    },
    {
      name: "about:downloads",
      description: "Downloads list in library",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://browser/content/downloads/contentAreaDownloadsView.css",
        "chrome://browser/content/downloads/allDownloadsViewOverlay.css",
        "chrome://browser/skin/downloads/allDownloadsViewOverlay.css",
      ],
    },
    {
      name: "about:healthreport",
      description: "Firefox health report (metrics)",
      stylesheets: [
        "chrome://browser/content/abouthealthreport/abouthealth.css",
        "external",
      ],
    },
    {
      name: "about:home",
      description: "Home page",
      stylesheets: [
        "chrome://browser/content/abouthome/aboutHome.css",
      ],
    },
    {
      name: "about:license",
      description: "Licensing Information",
      stylesheets: [
        "chrome://global/skin/about.css",
        "inline",
      ],
    },
    {
      name: "about:memory",
      description: "Memory usage information",
      stylesheets: [
        "chrome://global/skin/aboutMemory.css",
        "chrome://global/content/aboutMemory.css",
      ],
    },
    {
      name: "about:mozilla",
      description: "",
      stylesheets: [
        "inline",
      ],
    },
    {
      name: "about:networking",
      description: "",
      stylesheets: [
        "chrome://global/skin/about.css",
        "chrome://mozapps/skin/aboutNetworking.css",
      ],
    },
    {
      name: "about:newtab",
      description: "New tab page",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://browser/content/newtab/newTab.css",
        "chrome://browser/skin/newtab/newTab.css",
      ],
    },
    {
      name: "about:plugins",
      description: "",
      stylesheets: [
        "chrome://global/content/plugins.css",
        "chrome://global/skin/plugins.css",
      ],
    },
    {
      name: "about:preferences",
      description: "",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://global/skin/plugins.css",
        "chrome://browser/skin/preferences/preferences.css",
        "chrome://browser/skin/preferences/in-content/preferences.css",
        "chrome://browser/skin/preferences/applications.css",
        "chrome://browser/content/preferences/handlers.css",
      ],
    },
    {
      name: "about:privatebrowsing",
      description: "",
      stylesheets: [
        "chrome://global/skin/netError.css",
        "chrome://browser/skin/aboutPrivateBrowsing.css",
        "inline",
      ],
    },
    {
      name: "about:rights",
      description: "",
      stylesheets: [
        "chrome://global/skin/about.css",
      ],
    },
    {
      name: "about:robots",
      description: "",
      stylesheets: [
        "chrome://global/skin/netError.css",
        "inline",
      ],
    },
    {
      name: "about:sessionrestore",
      description: "",
      stylesheets: [
        "chrome://global/skin/netError.css",
        "chrome://browser/skin/aboutSessionRestore.css",
      ],
    },
    {
      name: "about:support",
      description: "",
      stylesheets: [
        "chrome://global/skin/aboutSupport.css",
      ],
    },
    {
      name: "about:sync-log",
      description: "",
      stylesheets: [
        "chrome://global/skin/dirListing.css",
        "inline",
      ],
    },
    {
      name: "about:sync-process",
      description: "",
      stylesheets: [
        "chrome://browser/skin/syncProcess.css",
        "chrome://global/skin/inContentUI.css",
      ],
    },
    {
      name: "about:sync-tabs",
      description: "",
      stylesheets: [
        "chrome://browser/skin/browser.css",
        "chrome://browser/skin/aboutSyncTabs.css",
        "chrome://browser/content/sync/aboutSyncTabs.css",
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
      ],
    },
    {
      name: "about:telemetry",
      description: "",
      stylesheets: [
        "chrome://global/content/aboutTelemetry.css",
      ],
    },
    {
      name: "about:welcomeback",
      description: "",
      stylesheets: [
        "chrome://global/skin/netError.css",
        "chrome://browser/skin/aboutSessionRestore.css",
        "chrome://browser/skin/aboutWelcomeBack.css",
      ],
    },
    {
      name: "about:blocked",
      description: "",
      stylesheets: [
        "chrome://global/skin/netError.css",
        "inline",
      ],
    },
    {
      name: "about:certerror",
      description: "",
      stylesheets: [
        "chrome://browser/skin/aboutCertError.css",
        "chrome://browser/content/certerror/aboutCertError.css",
      ],
    },
    {
      name: "about:socialerror",
      description: "",
      stylesheets: [
        "chrome://browser/skin/aboutSocialError.css",
      ],
    },
    {
      name: "about:tabcrashed",
      description: "",
      stylesheets: [
        "chrome://browser/skin/aboutTabCrashed.css",
      ],
    },
    {
      name: "about:feeds",
      description: "",
      stylesheets: [
        "chrome://global/skin/global.css",
        "chrome://global/locale/intl.css",
        "chrome://browser/skin/feeds/subscribe.css",
        "chrome://browser/content/feeds/subscribe.css",
      ],
    },
  ],
  stylesheets: {
    "chrome://global/skin/inContentUI.css": {
      description: "Provides in-content UI with styles",
      osDependant: true,
    },
    "chrome://global/skin/global.css": {
      description: "Global styles",
      osDependant: true,
    },
    "chrome://global/locale/intl.css": {
      description: "Locale specific styles. Imported by global.css.",
      osDependant: false,
    },
    "chrome://browser/skin/preferences/preferences.css": {
      description: "Styles for modal pop-out preferences",
      osDependant: true,
    },
    "chrome://browser/skin/preferences/in-content/preferences.css": {
      description: "In-content preferences UI stylesheet",
      osDependant: true,
    },
    "chrome://browser/skin/preferences/applications.css": {
      description: "Styling for applications panel in preferences. Included as a stylehseet instead of CSS import.",
      osDependant: true,
    },
  }
};

document.addEventListener('DOMContentLoaded', function() {
    var stylesheets = generateStylesheets();
    renderStylesheets(stylesheets);

    renderPages(data.pages);

    $('details').details();
});

function generateStylesheets() {
    var stylesheets = {};
    data.pages.forEach(function(page) {
        page.stylesheets.forEach(function(stylesheet) {
            if(typeof stylesheets[stylesheet] === 'undefined') {
                stylesheets[stylesheet] = [page.name];
            }
            else {
                stylesheets[stylesheet].push(page.name);
            }
        });
    });
    return stylesheets;
}

function renderStylesheets(stylesheets) {
    var stylesheetsEle = document.getElementById("stylesheets");
    var stylesheetsCount = document.getElementById("stylesheet-count");

    var names = Object.getOwnPropertyNames(stylesheets).sort();
    names.forEach(function(name) {
        var heading = document.createElement("h3");
        heading.textContent = name;
        heading.id = 'style-' + name;

        var description = document.createElement("p");
        var osDependant = document.createElement("p");

        if(data.stylesheets[name]) {
          description.textContent = data.stylesheets[name].description;

          var strong = document.createElement("strong");
          strong.textContent = "OS Variant: ";
          osDependant.appendChild(strong);
          var text = document.createTextNode(data.stylesheets[name].osDependant);
          osDependant.appendChild(strong);
          osDependant.appendChild(text);
        }

        var ul = document.createElement("ul");
        stylesheets[name].forEach(function(page) {
            var li = document.createElement("li");

            var a = document.createElement("a");
            a.href = "#page-" + page;
            a.textContent = page;
            li.appendChild(a);

            ul.appendChild(li);
        });

        stylesheetsEle.appendChild(heading);
        stylesheetsEle.appendChild(description);
        stylesheetsEle.appendChild(osDependant);
        stylesheetsEle.appendChild(ul);
    });

    stylesheetsCount.textContent = names.length;
}

function renderPages(pages) {
    var pagesEle = document.getElementById("pages");
    var pageCount = document.getElementById("page-count");

    pages.forEach(function(page) {
        // var anchor = document.createElement("a");
        // anchor.name = 'page-' + page.name;

        var heading = document.createElement("h3");
        heading.textContent = page.name;
        heading.id = 'page-' + page.name;

        var description = document.createElement("p");
        description.textContent = page.description;

        var ul = document.createElement("ul");
        page.stylesheets.forEach(function(stylesheet) {
            var li = document.createElement("li");

            var a = document.createElement("a");
            a.href = "#style-" + stylesheet;
            a.textContent = stylesheet;
            li.appendChild(a);

            ul.appendChild(li);
        });

        // pagesEle.appendChild(anchor);
        pagesEle.appendChild(heading);
        pagesEle.appendChild(description);
        pagesEle.appendChild(ul);
    });

    pageCount.textContent = pages.length;
}
