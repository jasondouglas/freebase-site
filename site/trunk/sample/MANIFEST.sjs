var mf = {
  "apps" : {
    "core": "//core.site.freebase.dev",
  },
  "stylesheet": {
    "sample_page.mf.css": [
      ["template", "freebase.mf.css"],
      "sample_page.css",
      "sample_page.less"
    ]
  },
  "javascript": {
    "sample_page.mf.js": [
      ["template", "freebase.mf.js"],
      ["jqueryui", "jquery.ui.tabs.js"],
      "sample_page.js"
    ]
  }
};

acre.require(mf.apps.core + "/MANIFEST").init(mf, this);
