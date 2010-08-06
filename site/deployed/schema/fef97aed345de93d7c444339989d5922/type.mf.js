/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
jQuery.cookie=function(a,d,e){if(typeof d!="undefined"){e=e||{};if(d===null){d="";e=$.extend({},e);e.expires=-1}var f="";if(e.expires&&(typeof e.expires=="number"||e.expires.toUTCString)){if(typeof e.expires=="number"){f=new Date;f.setTime(f.getTime()+e.expires*24*60*60*1E3)}else f=e.expires;f="; expires="+f.toUTCString()}var b=e.path?"; path="+e.path:"",c=e.domain?"; domain="+e.domain:"";e=e.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(d),f,b,c,e].join("")}else{d=null;if(document.cookie&&
document.cookie!=""){e=document.cookie.split(";");for(f=0;f<e.length;f++){b=jQuery.trim(e[f]);if(b.substring(0,a.length+1)==a+"="){d=decodeURIComponent(b.substring(a.length+1));break}}}return d}};
jQuery.fn.textPlaceholder=function(a){a=a||"#AAA";return this.each(function(){var d=this;if(!(d.placeholder&&"placeholder"in document.createElement(d.tagName))){var e=d.style.color,f=d.getAttribute("placeholder"),b=$(d);if(d.value===""||d.value==f){d.value=f;d.style.color=a;b.data("placeholder-visible",true)}b.focus(function(){this.style.color=e;if(b.data("placeholder-visible")){b.data("placeholder-visible",false);this.value=""}});b.blur(function(){if(this.value===""){b.data("placeholder-visible",
true);this.value=f;this.style.color=a}else{this.style.color=e;b.data("placeholder-visible",false)}});d.form&&$(d.form).submit(function(){if(b.data("placeholder-visible"))d.value=""})}})};
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(d,e){this.defaults.type=d;this.defaults.name=e},get:function(d,e){var f=a.extend({},this.defaults,e);if(!f.single.length)f.single="metadata";var b=a.data(d,f.single);if(b)return b;b="{}";var c=function(i){if(typeof i!="string")return i;return i=eval("("+i+")")};if(f.type=="html5"){var g={};a(d.attributes).each(function(){var i=this.nodeName;if(i.match(/^data-/))i=i.replace(/^data-/,
"");else return true;g[i]=c(this.nodeValue)})}else{if(f.type=="class"){var h=f.cre.exec(d.className);if(h)b=h[1]}else if(f.type=="elem"){if(!d.getElementsByTagName)return;h=d.getElementsByTagName(f.name);if(h.length)b=a.trim(h[0].innerHTML)}else if(d.getAttribute!=undefined)if(h=d.getAttribute(f.name))b=h;g=c(b.indexOf("{")<0?"{"+b+"}":b)}a.data(d,f.single,g);return g}}});a.fn.metadata=function(d){return a.metadata.get(this[0],d)}})(jQuery);
(function(a){a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.2",plugin:{add:function(d,e,f){d=a.ui[d].prototype;for(var b in f){d.plugins[b]=d.plugins[b]||[];d.plugins[b].push([e,f[b]])}},call:function(d,e,f){if((e=d.plugins[e])&&d.element[0].parentNode)for(var b=0;b<e.length;b++)d.options[e[b][0]]&&e[b][1].apply(d.element,f)}},contains:function(d,e){return document.compareDocumentPosition?d.compareDocumentPosition(e)&16:d!==e&&d.contains(e)},hasScroll:function(d,e){if(a(d).css("overflow")==
"hidden")return false;var f=e&&e=="left"?"scrollLeft":"scrollTop",b=false;if(d[f]>0)return true;d[f]=1;b=d[f]>0;d[f]=0;return b},isOverAxis:function(d,e,f){return d>e&&d<e+f},isOver:function(d,e,f,b,c,g){return a.ui.isOverAxis(d,f,c)&&a.ui.isOverAxis(e,b,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(d,e){return typeof d==="number"?this.each(function(){var f=this;setTimeout(function(){a(f).focus();e&&e.call(f)},d)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect",
"none")},scrollParent:function(){var d;d=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",
1))}).eq(0);return/fixed/.test(this.css("position"))||!d.length?a(document):d},zIndex:function(d){if(d!==undefined)return this.css("zIndex",d);if(this.length){d=a(this[0]);for(var e;d.length&&d[0]!==document;){e=d.css("position");if(e=="absolute"||e=="relative"||e=="fixed"){e=parseInt(d.css("zIndex"));if(!isNaN(e)&&e!=0)return e}d=d.parent()}}return 0}});a.extend(a.expr[":"],{data:function(d,e,f){return!!a.data(d,f[3])},focusable:function(d){var e=d.nodeName.toLowerCase(),f=a.attr(d,"tabindex");return(/input|select|textarea|button|object/.test(e)?
!d.disabled:"a"==e||"area"==e?d.href||!isNaN(f):!isNaN(f))&&!a(d)["area"==e?"parents":"closest"](":hidden").length},tabbable:function(d){var e=a.attr(d,"tabindex");return(isNaN(e)||e>=0)&&a(d).is(":focusable")}})}})(jQuery);
(function(a){var d=a.fn.remove;a.fn.remove=function(e,f){return this.each(function(){if(!f)if(!e||a.filter(e,[this]).length)a("*",this).add(this).each(function(){a(this).triggerHandler("remove")});return d.call(a(this),e,f)})};a.widget=function(e,f,b){var c=e.split(".")[0],g;e=e.split(".")[1];g=c+"-"+e;if(!b){b=f;f=a.Widget}a.expr[":"][g]=function(h){return!!a.data(h,e)};a[c]=a[c]||{};a[c][e]=function(h,i){arguments.length&&this._createWidget(h,i)};f=new f;f.options=a.extend({},f.options);a[c][e].prototype=
a.extend(true,f,{namespace:c,widgetName:e,widgetEventPrefix:a[c][e].prototype.widgetEventPrefix||e,widgetBaseClass:g},b);a.widget.bridge(e,a[c][e])};a.widget.bridge=function(e,f){a.fn[e]=function(b){var c=typeof b==="string",g=Array.prototype.slice.call(arguments,1),h=this;b=!c&&g.length?a.extend.apply(null,[true,b].concat(g)):b;if(c&&b.substring(0,1)==="_")return h;c?this.each(function(){var i=a.data(this,e),j=i&&a.isFunction(i[b])?i[b].apply(i,g):i;if(j!==i&&j!==undefined){h=j;return false}}):this.each(function(){var i=
a.data(this,e);if(i){b&&i.option(b);i._init()}else a.data(this,e,new f(b,this))});return h}};a.Widget=function(e,f){arguments.length&&this._createWidget(e,f)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(e,f){this.element=a(f).data(this.widgetName,this);this.options=a.extend(true,{},this.options,a.metadata&&a.metadata.get(f)[this.widgetName],e);var b=this;this.element.bind("remove."+this.widgetName,function(){b.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(e,f){var b=e,c=this;if(arguments.length===0)return a.extend({},c.options);if(typeof e==="string"){if(f===undefined)return this.options[e];b={};b[e]=f}a.each(b,function(g,
h){c._setOption(g,h)});return c},_setOption:function(e,f){this.options[e]=f;if(e==="disabled")this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(e,f,b){var c=this.options[e];f=a.Event(f);f.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();b=b||{};if(f.originalEvent){e=
a.event.props.length;for(var g;e;){g=a.event.props[--e];f[g]=f.originalEvent[g]}}this.element.trigger(f,b);return!(a.isFunction(c)&&c.call(this.element[0],f,b)===false||f.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(d._preventClickEvent){d._preventClickEvent=false;e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(!d.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(d);this._mouseDownEvent=d;var e=this,f=d.which==1,b=typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!f||b||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=this._mouseStart(d)!==false;if(!this._mouseStarted){d.preventDefault();
return true}}this._mouseMoveDelegate=function(c){return e._mouseMove(c)};this._mouseUpDelegate=function(c){return e._mouseUp(c)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.browser.safari||d.preventDefault();return d.originalEvent.mouseHandled=true}},_mouseMove:function(d){if(a.browser.msie&&!d.button)return this._mouseUp(d);if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&
this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted},_mouseUp:function(d){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=d.target==this._mouseDownEvent.target;this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-
d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,e=/top|center|bottom/,f=a.fn.position,b=a.fn.offset;a.fn.position=function(c){if(!c||!c.of)return f.apply(this,arguments);c=a.extend({},c);var g=a(c.of),h=(c.collision||"flip").split(" "),i=c.offset?c.offset.split(" "):[0,0],j,m,n;if(c.of.nodeType===9){j=g.width();m=g.height();n={top:0,left:0}}else if(c.of.scrollTo&&c.of.document){j=g.width();m=g.height();n={top:g.scrollTop(),left:g.scrollLeft()}}else if(c.of.preventDefault){c.at="left top";j=m=
0;n={top:c.of.pageY,left:c.of.pageX}}else{j=g.outerWidth();m=g.outerHeight();n=g.offset()}a.each(["my","at"],function(){var k=(c[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):e.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=e.test(k[1])?k[1]:"center";c[this]=k});if(h.length===1)h[1]=h[0];i[0]=parseInt(i[0],10)||0;if(i.length===1)i[1]=i[0];i[1]=parseInt(i[1],10)||0;if(c.at[0]==="right")n.left+=j;else if(c.at[0]==="center")n.left+=
j/2;if(c.at[1]==="bottom")n.top+=m;else if(c.at[1]==="center")n.top+=m/2;n.left+=i[0];n.top+=i[1];return this.each(function(){var k=a(this),l=k.outerWidth(),q=k.outerHeight(),p=a.extend({},n);if(c.my[0]==="right")p.left-=l;else if(c.my[0]==="center")p.left-=l/2;if(c.my[1]==="bottom")p.top-=q;else if(c.my[1]==="center")p.top-=q/2;p.left=parseInt(p.left);p.top=parseInt(p.top);a.each(["left","top"],function(t,s){a.ui.position[h[t]]&&a.ui.position[h[t]][s](p,{targetWidth:j,targetHeight:m,elemWidth:l,
elemHeight:q,offset:i,my:c.my,at:c.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(p,{using:c.using}))})};a.ui.position={fit:{left:function(c,g){var h=a(window);h=c.left+g.elemWidth-h.width()-h.scrollLeft();c.left=h>0?c.left-h:Math.max(0,c.left)},top:function(c,g){var h=a(window);h=c.top+g.elemHeight-h.height()-h.scrollTop();c.top=h>0?c.top-h:Math.max(0,c.top)}},flip:{left:function(c,g){if(g.at[0]!=="center"){var h=a(window);h=c.left+g.elemWidth-h.width()-h.scrollLeft();var i=g.my[0]==="left"?
-g.elemWidth:g.my[0]==="right"?g.elemWidth:0,j=-2*g.offset[0];c.left+=c.left<0?i+g.targetWidth+j:h>0?i-g.targetWidth+j:0}},top:function(c,g){if(g.at[1]!=="center"){var h=a(window);h=c.top+g.elemHeight-h.height()-h.scrollTop();var i=g.my[1]==="top"?-g.elemHeight:g.my[1]==="bottom"?g.elemHeight:0,j=g.at[1]==="top"?g.targetHeight:-g.targetHeight,m=-2*g.offset[1];c.top+=c.top<0?i+g.targetHeight+m:h>0?i+j+m:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(c,g){if(/static/.test(a.curCSS(c,"position")))c.style.position=
"relative";var h=a(c),i=h.offset(),j=parseInt(a.curCSS(c,"top",true),10)||0,m=parseInt(a.curCSS(c,"left",true),10)||0;i={top:g.top-i.top+j,left:g.left-i.left+m};"using"in g?g.using.call(c,i):h.css(i)};a.fn.offset=function(c){var g=this[0];if(!g||!g.ownerDocument)return null;if(c)return this.each(function(){a.offset.setOffset(this,c)});return b.call(this)}}})(jQuery);window.freebase=window.fb={};
(function(a,d){d.dispatch=function(e,f,b,c){if(typeof f!=="function")return false;e=a.event.fix(e||window.event);b||(b=[]);c||(c=this);return f.apply(c,[e].concat(b))}})(jQuery,window.freebase);
(function(a,d){function e(g,h){var i=g.indexOf("|"+h+"_");if(i!=-1){i=i+2+h.length;var j=g.indexOf("|",i);if(j!=-1)return decodeURIComponent(g.substr(i,j-i))}return null}var f=a.cookie("metaweb-user-info");if(f){var b=e(f,"g"),c=e(f,"u");(f=e(f,"p"))||(f="/user/"+this.name);d.user={guid:b,name:c,id:f}}if(d.user){b=a("#nav-username a:first");if(b.length){b[0].href+=d.user.id;b.text(d.user.name)}a("#signedin").show()}else a("#signedout").show()})(jQuery,window.freebase);
(function(a){a(function(){var d=a("#SearchBox .SearchBox-input,#global-search-input"),e=acre.freebase.site_host;d.suggest({service_url:e,soft:true,category:"object",parent:"#site-search-box",align:"right",status:null});var f=a("#site-search-label"),b=a("#site-search-box .fbs-pane");d.bind("fb-select",function(c,g){window.location=e+"/view"+g.id;return false}).bind("fb-pane-show",function(){f.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",function(){a.trim(d.val())===
""?f.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):f.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){f.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){f.is(":visible")||a("#site-search-label").slideDown("fast")}).blur(function(){!b.is(":visible")&&f.is(":visible")&&a("#site-search-label").slideUp("fast")});a(".SearchBox-form").submit(function(){return a.trim(a("#global-search-input").val()).length==
0?false:true});a("input, textarea").textPlaceholder()})})(jQuery,window.freebase);
(function(a,d){if(d.user)if(!(typeof acre==="undefined"||typeof acre.c==="undefined")){var e=acre.c;if(e&&e.id){var f=d.permission={jsonp:function(b){f.has_permission=b.result===true;console.log("has_permission",f.has_permission);window.trigger("fb.permission.has_permission",f.has_permission)}};a.ajax({url:acre.request.app_url+"/permission/service/has_permission",data:{id:e.id,user_id:d.user.id},dataType:"jsonp",jsonpCallback:"window.freebase.permission.jsonp"})}}})(jQuery,window.freebase);
(function(a){function d(b,c,g){var h=this,i=b.add(this),j=b.find(g.tabs),m=c.jquery?c:b.children(c),n;j.length||(j=b.children());m.length||(m=b.parent().find(c));m.length||(m=a(c));a.extend(this,{click:function(k,l){var q=j.eq(k);if(typeof k=="string"&&k.replace("#","")){q=j.filter("[href*="+k.replace("#","")+"]");k=Math.max(j.index(q),0)}if(g.rotate){var p=j.length-1;if(k<0)return h.click(p,l);if(k>p)return h.click(0,l)}if(!q.length){if(n>=0)return h;k=g.initialIndex;q=j.eq(k)}if(k===n)return h;
l=l||a.Event();l.type="onBeforeClick";i.trigger(l,[k]);if(!l.isDefaultPrevented()){e[g.effect].call(h,k,function(){l.type="onClick";i.trigger(l,[k])});n=k;j.removeClass(g.current);q.addClass(g.current);return h}},getConf:function(){return g},getTabs:function(){return j},getPanes:function(){return m},getCurrentPane:function(){return m.eq(n)},getCurrentTab:function(){return j.eq(n)},getIndex:function(){return n},next:function(){return h.click(n+1)},prev:function(){return h.click(n-1)},destroy:function(){j.unbind(g.event).removeClass(g.current);
m.find("a[href^=#]").unbind("click.T");return h}});a.each("onBeforeClick,onClick".split(","),function(k,l){a.isFunction(g[l])&&a(h).bind(l,g[l]);h[l]=function(q){a(h).bind(l,q);return h}});if(g.history&&a.fn.history){a.tools.history.init(j);g.event="history"}j.each(function(k){a(this).bind(g.event,function(l){h.click(k,l);return l.preventDefault()})});m.find("a[href^=#]").bind("click.T",function(k){h.click(a(this).attr("href"),k)});if(location.hash)h.click(location.hash);else if(g.initialIndex===
0||g.initialIndex>0)h.click(g.initialIndex)}a.tools=a.tools||{version:"@VERSION"};a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(b,c){e[b]=c}};var e={"default":function(b,c){this.getPanes().hide().eq(b).show();c.call()},fade:function(b,c){var g=this.getConf(),h=g.fadeOutSpeed,i=this.getPanes();h?i.fadeOut(h):i.hide();i.eq(b).fadeIn(g.fadeInSpeed,c)},slide:function(b,c){this.getPanes().slideUp(200);
this.getPanes().eq(b).slideDown(400,c)},ajax:function(b,c){this.getPanes().eq(0).load(this.getTabs().eq(b).attr("href"),c)}},f;a.tools.tabs.addEffect("horizontal",function(b,c){f||(f=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){a(this).hide()});this.getPanes().eq(b).animate({width:f},function(){a(this).show();c.call()})});a.fn.tabs=function(b,c){var g=this.data("tabs");if(g){g.destroy();this.removeData("tabs")}if(a.isFunction(c))c={onBeforeClick:c};c=a.extend({},
a.tools.tabs.conf,c);this.each(function(){g=new d(a(this),b,c);a(this).data("tabs",g)});return c.api?g:this}})(jQuery);
(function(a){function d(b,c,g){var h=g.relative?b.position().top:b.offset().top,i=g.relative?b.position().left:b.offset().left,j=g.position[0];h-=c.outerHeight()-g.offset[0];i+=b.outerWidth()+g.offset[1];var m=c.outerHeight()+b.outerHeight();if(j=="center")h+=m/2;if(j=="bottom")h+=m;j=g.position[1];b=c.outerWidth()+b.outerWidth();if(j=="center")i-=b/2;if(j=="left")i-=b;return{top:h,left:i}}function e(b,c){var g=this,h=b.add(g),i,j=0,m=0,n=b.attr("title"),k=f[c.effect],l,q=b.is(":input"),p=q&&b.is(":checkbox, :radio, select, :button, :submit"),
t=b.attr("type"),s=c.events[t]||c.events[q?p?"widget":"input":"def"];if(!k)throw'Nonexistent effect "'+c.effect+'"';s=s.split(/,\s*/);if(s.length!=2)throw"Tooltip: bad events configuration for "+t;b.bind(s[0],function(o){clearTimeout(j);if(c.predelay)m=setTimeout(function(){g.show(o)},c.predelay);else g.show(o)}).bind(s[1],function(o){clearTimeout(m);if(c.delay)j=setTimeout(function(){g.hide(o)},c.delay);else g.hide(o)});if(n&&c.cancelDefault){b.removeAttr("title");b.data("title",n)}a.extend(g,{show:function(o){if(!i){if(n)i=
a(c.layout).addClass(c.tipClass).appendTo(document.body).hide().append(n);else if(c.tip)i=a(c.tip).eq(0);else{i=b.next();i.length||(i=b.parent().next())}if(!i.length)throw"Cannot find tooltip for "+b;}if(g.isShown())return g;i.stop(true,true);var r=d(b,i,c);o=o||a.Event();o.type="onBeforeShow";h.trigger(o,[r]);if(o.isDefaultPrevented())return g;r=d(b,i,c);i.css({position:"absolute",top:r.top,left:r.left});l=true;k[0].call(g,function(){o.type="onShow";l="full";h.trigger(o)});r=c.events.tooltip.split(/,\s*/);
i.bind(r[0],function(){clearTimeout(j);clearTimeout(m)});r[1]&&!b.is("input:not(:checkbox, :radio), textarea")&&i.bind(r[1],function(u){u.relatedTarget!=b[0]&&b.trigger(s[1].split(" ")[0])});return g},hide:function(o){if(!i||!g.isShown())return g;o=o||a.Event();o.type="onBeforeHide";h.trigger(o);if(!o.isDefaultPrevented()){l=false;f[c.effect][1].call(g,function(){o.type="onHide";l=false;h.trigger(o)});return g}},isShown:function(o){return o?l=="full":l},getConf:function(){return c},getTip:function(){return i},
getTrigger:function(){return b}});a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(o,r){a.isFunction(c[r])&&a(g).bind(r,c[r]);g[r]=function(u){a(g).bind(r,u);return g}})}a.tools=a.tools||{version:"@VERSION"};a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(b,c,g){f[b]=[c,g]}};var f={toggle:[function(b){var c=this.getConf(),g=this.getTip();c=c.opacity;c<1&&g.css({opacity:c});g.show();b.call()},function(b){this.getTip().hide();b.call()}],fade:[function(b){var c=this.getConf();this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b)},function(b){this.getTip().fadeOut(this.getConf().fadeOutSpeed,b)}]};a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(true,{},a.tools.tooltip.conf,b);
if(typeof b.position=="string")b.position=b.position.split(/,?\s/);this.each(function(){c=new e(a(this),b);a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
(function(a,d){var e=d.schema={init_row_menu:function(f){a(".row-menu-trigger",f).each(function(){a(this).tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-10,-10],effect:"fade",delay:300});a(this).closest(".row-menu").children().last().hide()}).css({visibility:"hidden"});a(".hoverable",f).hover(function(){var b=a(this);b.addClass("row-hover");a(".row-menu-trigger",b).css("visibility","visible").hide().fadeIn("fast")},function(){var b=a(this);a(".row-menu-trigger",b).css("visibility",
"hidden");b.removeClass("row-hover")})}};a(function(){a.tablesorter.addParser({id:"schemaName",is:function(){return false},format:function(b){return a(b).text().toLowerCase()},type:"text"});a.tablesorter.addParser({id:"commaDigit",is:function(){return false},format:function(b){return parseInt(b.replace(/\,/g,""))},type:"numeric"});a.tablesorter.defaults.cssAsc="column-header-asc";a.tablesorter.defaults.cssDesc="column-header-desc";a.tablesorter.defaults.cssHeader="column-header";e.init_row_menu();
a(".blurb-trigger").click(function(){var b=a(this),c=b.siblings(".blurb"),g=b.siblings(".blob");if(g.is(":hidden")){g.show();c.hide();b.text("Less")}else{g.hide();c.show();b.text("More")}});var f=a(".breadcrumb-sibling-trigger").outerWidth();a(".breadcrumb-sibling-trigger").tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-5,-f],effect:"fade",delay:300,onBeforeShow:function(){this.getTrigger().addClass("active")},onHide:function(){this.getTrigger().removeClass("active")}})})})(jQuery,
window.freebase);
(function(a,d){var e=d.schema.type={init:function(){a("#included-types-table .tbody-header, #incoming-properties-table .tbody-header").each(function(){var f=a(this);f.hasClass("expanded")||f.data("ajax",true);f.click(e.toggle)});e.init_tooltips()},init_tooltips:function(f){a(".return-link-trigger",f).tooltip({events:{def:"click,mouseout"},position:"top center",effect:"fade",delay:300,offset:[-8,0]})},toggle:function(){var f=a(this);if(f.data("ajax")){if(!f.is(".loading")){f.addClass("loading");a.ajax({url:f.attr("data-url"),
dataType:"json",success:function(b){b=a(b.result.html).hide();f.parents("thead:first").after(b);d.schema.init_row_menu(b);e.init_tooltips(b);e._toggle(f)},complete:function(){f.removeClass("loading");f.removeData("ajax")}})}}else e._toggle(f)},_toggle:function(f){var b=f.parents("thead:first").next("tbody:first");if(f.is(".expanded")){b.hide();f.removeClass("expanded");a(".tbody-header-title",f).removeClass("expanded")}else{b.css("display","table-row-group");f.addClass("expanded");a(".tbody-header-title",
f).addClass("expanded")}}};a(e.init)})(jQuery,window.freebase);
