/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

acre.require('/test/lib').enable(this);

var mf = acre.require("MANIFEST").mf;
var sh = mf.require("helpers");
var h = mf.require("test", "helpers");
var update_type = mf.require("update_type").update_type;

// this test requires user to be logged in
var user = acre.freebase.get_user_info();

test("login required", function() {
  ok(user, "login required");
});

if (!user) {
  acre.test.report();
  acre.exit();
}

var user_domain = user.id + "/default_domain";

test("update_type name", function() {
  var type = h.create_type(user_domain);
  try {
    var updated;
    update_type({
      domain: user_domain,
      id: type.id,
      name: type.name + "updated"
    })
    .then(function(id) {
      updated = id;
    });
    acre.async.wait_on_results();
    ok(updated, updated);

    var result = acre.freebase.mqlread({id:updated, name:null}).result;
    equal(result.name, type.name + "updated");
  }
  finally {
    if (type) {
      h.delete_type(type);
    }
  }
});


test("update_type key", function() {
  var type = h.create_type(user_domain);
  try {
    var updated;
    update_type({
      domain: user_domain,
      id: type.id,
      key: sh.generate_type_key(type.name+"updated")
    })
    .then(function(id) {
      updated = id;
    });
    acre.async.wait_on_results();
    ok(updated, updated);

    var result = acre.freebase.mqlread({id:updated, key:{namespace:user_domain, value:null}}).result;
    equal(result.key.value, sh.generate_type_key(type.name+"updated"));
  }
  finally {
    if (type) {
      h.delete_type(type);
    }
  }
});


test("update_type enumeration", function() {
  var type = h.create_type(user_domain);
  try {
    var updated;
    update_type({
      domain: user_domain,
      id: type.id,
      enumeration: true
    })
    .then(function(id) {
      updated = id;
    });
    acre.async.wait_on_results();
    ok(updated, updated);

    var result = acre.freebase.mqlread({
      id:updated,
      "/freebase/type_hints/enumeration": null,
      "/freebase/type_hints/included_types": []
    }).result;
    ok(result["/freebase/type_hints/enumeration"], "updated as enumeration");
    var common_topic = [t for each (t in result["/freebase/type_hints/included_types"]) if (t === "/common/topic")];
    ok(common_topic.length);
  }
  finally {
    if (type) {
      h.delete_type(type);
    }
  }
});

test("update_type description", function() {
  var type = h.create_type(user_domain);
  try {
    var updated, description;
    update_type({
      domain: user_domain,
      id: type.id,
      description: type.name + "updated"
    })
    .then(function(id) {
      updated = id;
    });
    acre.async.wait_on_results();
    ok(updated, updated);

    var result = acre.freebase.mqlread({id: updated, "/common/topic/article": {id: null}}).result;
    var blurb = acre.freebase.get_blob(result["/common/topic/article"].id, "blurb").body;
    equal(blurb, type.name + "updated");
  }
  finally {
    if (type) {
      h.delete_type(type);
    }
  }
});



acre.test.report();
