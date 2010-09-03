var mf = {
  "apps" : {
      "core": "//core.site.freebase.dev",
      "ae" : "//appeditor.apps.freebase.dev"
  },
  "stylesheet": {
    "appadmin.mf.css": [
      ["template", "freebase.mf.css"],
      "appadmin_core.css"
    ]
  },
  "javascript": {

      "appadmin.mf.js": [
	  ["template", "freebase.mf.js"],
	  "appadmin_core.js"
      ]
  }

};

acre.require(mf.apps.core + "/MANIFEST").init(mf, this);
