var METADATA = {
  "mounts": {
    "lib": "//9a.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": 1, 
  "app_tag": "1a", 
  "app_key": "sample"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);