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

acre.require("test/mock").playback(this, "schema/test/playback_test_proploader_load_paths_multi.json");

var h = acre.require("helper/helpers.sjs");
var proploader = acre.require("schema/proploader.sjs");

var assert_prop_path_schema = acre.require("schema/test/helpers.sjs").assert_prop_path_schema;
var scope = this;

test("load_paths multi", function() {
  var result;
  var paths = [
    "/film/film/directed_by./people/person/date_of_birth",
    "/people/person/parents./people/person/place_of_birth",
    "/people/person/parents./people/person/date_of_birth",
    "/film/film/starring"
  ];
  proploader.load_paths.apply(null, paths)
    .then(function(props) {
      result = props;
    });
  acre.async.wait_on_results();
  ok(result, "Got load result");
  assert_prop_path_schema(scope, result, "/film/film/directed_by", ["/people/person/date_of_birth"]);
  assert_prop_path_schema(scope, result, "/people/person/parents", ["/people/person/place_of_birth", "/people/person/date_of_birth"]);
  assert_prop_path_schema(scope, result, "/film/film/starring", ["/film/performance/film", "/film/performance/actor", "/film/performance/character", "/film/performance/special_performance_type", "/film/performance/character_note"]);
});

acre.test.report();
