var mf = {
  "apps": {
    "core": "//core.site.freebase.dev"
  },
  "stylesheet": {
    "policies.mf.css": [
      ["template", "freebase.mf.css"],
      "css-policies.css"
    ]
  },
  "javascript": {
    "policies.mf.js": [
      ["template", "freebase.mf.js"]
    ]
  },
};

acre.require(mf.apps.core + "/MANIFEST").init(mf, this);
