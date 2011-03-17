
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
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
/*
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
(function(b){b.fn.collapse_module=function(j){var h=b(j);j=b(this);var e=j.get(0),f=b(".trigger:first",e),i=b(".module-section",e),l=j.slice(1),n=h.css("margin-left");f.click(function(){if(f.hasClass("collapsed"))h.animate({marginLeft:n},function(){i.slideDown(function(){f.removeClass("collapsed")});l.fadeIn()});else{l.fadeOut();i.slideUp(function(){h.animate({marginLeft:0});f.addClass("collapsed")})}return false})}})(jQuery);
(function(b){b.fn.collapse_module=function(j){var h=b(j);j=b(this);var e=j.get(0),f=b(".trigger:first",e),i=b(".module-section",e),l=j.slice(1),n=h.css("margin-left");f.click(function(){if(f.hasClass("collapsed"))h.animate({marginLeft:n},function(){i.slideDown(function(){f.removeClass("collapsed")});l.fadeIn()});else{l.fadeOut();i.slideUp(function(){h.animate({marginLeft:0});f.addClass("collapsed")})}return false})}})(jQuery);
(function(b,j){function h(e){return!b(e).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(e,f){return typeof e==="number"?this.each(function(){var i=this;setTimeout(function(){b(i).focus();f&&f.call(i)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;e=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?b(document):e},zIndex:function(e){if(e!==j)return this.css("zIndex",e);if(this.length){e=b(this[0]);for(var f;e.length&&e[0]!==document;){f=e.css("position");
if(f==="absolute"||f==="relative"||f==="fixed"){f=parseInt(e.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}e=e.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(e,f){function i(p,s,d,a){b.each(l,function(){s-=parseFloat(b.curCSS(p,"padding"+this,true))||0;if(d)s-=parseFloat(b.curCSS(p,
"border"+this+"Width",true))||0;if(a)s-=parseFloat(b.curCSS(p,"margin"+this,true))||0});return s}var l=f==="Width"?["Left","Right"]:["Top","Bottom"],n=f.toLowerCase(),o={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+f]=function(p){if(p===j)return o["inner"+f].call(this);return this.each(function(){b(this).css(n,i(this,p)+"px")})};b.fn["outer"+f]=function(p,s){if(typeof p!=="number")return o["outer"+f].call(this,p);return this.each(function(){b(this).css(n,
i(this,p,true,s)+"px")})}});b.extend(b.expr[":"],{data:function(e,f,i){return!!b.data(e,i[3])},focusable:function(e){var f=e.nodeName.toLowerCase(),i=b.attr(e,"tabindex");if("area"===f){f=e.parentNode;i=f.name;if(!e.href||!i||f.nodeName.toLowerCase()!=="map")return false;e=b("img[usemap=#"+i+"]")[0];return!!e&&h(e)}return(/input|select|textarea|button|object/.test(f)?!e.disabled:"a"==f?e.href||!isNaN(i):!isNaN(i))&&h(e)},tabbable:function(e){var f=b.attr(e,"tabindex");return(isNaN(f)||f>=0)&&b(e).is(":focusable")}});
b(function(){var e=document.body,f=e.appendChild(f=document.createElement("div"));b.extend(f.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=f.offsetHeight===100;b.support.selectstart="onselectstart"in f;e.removeChild(f).style.display="none"});b.extend(b.ui,{plugin:{add:function(e,f,i){e=b.ui[e].prototype;for(var l in i){e.plugins[l]=e.plugins[l]||[];e.plugins[l].push([f,i[l]])}},call:function(e,f,i){if((f=e.plugins[f])&&e.element[0].parentNode)for(var l=0;l<f.length;l++)e.options[f[l][0]]&&
f[l][1].apply(e.element,i)}},contains:function(e,f){return document.compareDocumentPosition?e.compareDocumentPosition(f)&16:e!==f&&e.contains(f)},hasScroll:function(e,f){if(b(e).css("overflow")==="hidden")return false;var i=f&&f==="left"?"scrollLeft":"scrollTop",l=false;if(e[i]>0)return true;e[i]=1;l=e[i]>0;e[i]=0;return l},isOverAxis:function(e,f,i){return e>f&&e<f+i},isOver:function(e,f,i,l,n,o){return b.ui.isOverAxis(e,i,n)&&b.ui.isOverAxis(f,l,o)}})}})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var j=this,h=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");h.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(h.range){if(h.range===true){this.range=b("<div></div>");if(!h.values)h.values=[this._valueMin(),this._valueMin()];if(h.values.length&&h.values.length!==2)h.values=[h.values[0],h.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(h.range==="min"||h.range==="max")this.range.addClass("ui-slider-range-"+h.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(h.values&&h.values.length)for(;b(".ui-slider-handle",this.element).length<h.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).hover(function(){h.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(h.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(e){b(this).data("index.ui-slider-handle",e)});this.handles.keydown(function(e){var f=true,i=b(this).data("index.ui-slider-handle"),l,n,o;if(!j.options.disabled){switch(e.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:f=
false;if(!j._keySliding){j._keySliding=true;b(this).addClass("ui-state-active");l=j._start(e,i);if(l===false)return}break}o=j.options.step;l=j.options.values&&j.options.values.length?(n=j.values(i)):(n=j.value());switch(e.keyCode){case b.ui.keyCode.HOME:n=j._valueMin();break;case b.ui.keyCode.END:n=j._valueMax();break;case b.ui.keyCode.PAGE_UP:n=j._trimAlignValue(l+(j._valueMax()-j._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:n=j._trimAlignValue(l-(j._valueMax()-j._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(l===
j._valueMax())return;n=j._trimAlignValue(l+o);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(l===j._valueMin())return;n=j._trimAlignValue(l-o);break}j._slide(e,i,n);return f}}).keyup(function(e){var f=b(this).data("index.ui-slider-handle");if(j._keySliding){j._keySliding=false;j._stop(e,f);j._change(e,f);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(j){var h=this.options,e,f,i,l,n;if(h.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();e=this._normValueFromMouse({x:j.pageX,y:j.pageY});f=this._valueMax()-this._valueMin()+1;l=this;this.handles.each(function(o){var p=Math.abs(e-l.values(o));if(f>p){f=p;i=b(this);n=o}});if(h.range===true&&this.values(1)===h.min){n+=1;i=b(this.handles[n])}if(this._start(j,
n)===false)return false;this._mouseSliding=true;l._handleIndex=n;i.addClass("ui-state-active").focus();h=i.offset();this._clickOffset=!b(j.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:j.pageX-h.left-i.width()/2,top:j.pageY-h.top-i.height()/2-(parseInt(i.css("borderTopWidth"),10)||0)-(parseInt(i.css("borderBottomWidth"),10)||0)+(parseInt(i.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(j,n,e);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(j){var h=this._normValueFromMouse({x:j.pageX,y:j.pageY});this._slide(j,this._handleIndex,h);return false},_mouseStop:function(j){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(j,this._handleIndex);this._change(j,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(j){var h;
if(this.orientation==="horizontal"){h=this.elementSize.width;j=j.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{h=this.elementSize.height;j=j.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}h=j/h;if(h>1)h=1;if(h<0)h=0;if(this.orientation==="vertical")h=1-h;j=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+h*j)},_start:function(j,h){var e={handle:this.handles[h],value:this.value()};if(this.options.values&&this.options.values.length){e.value=
this.values(h);e.values=this.values()}return this._trigger("start",j,e)},_slide:function(j,h,e){var f;if(this.options.values&&this.options.values.length){f=this.values(h?0:1);if(this.options.values.length===2&&this.options.range===true&&(h===0&&e>f||h===1&&e<f))e=f;if(e!==this.values(h)){f=this.values();f[h]=e;j=this._trigger("slide",j,{handle:this.handles[h],value:e,values:f});this.values(h?0:1);j!==false&&this.values(h,e,true)}}else if(e!==this.value()){j=this._trigger("slide",j,{handle:this.handles[h],
value:e});j!==false&&this.value(e)}},_stop:function(j,h){var e={handle:this.handles[h],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(h);e.values=this.values()}this._trigger("stop",j,e)},_change:function(j,h){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[h],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(h);e.values=this.values()}this._trigger("change",j,e)}},value:function(j){if(arguments.length){this.options.value=
this._trimAlignValue(j);this._refreshValue();this._change(null,0)}return this._value()},values:function(j,h){var e,f,i;if(arguments.length>1){this.options.values[j]=this._trimAlignValue(h);this._refreshValue();this._change(null,j)}if(arguments.length)if(b.isArray(arguments[0])){e=this.options.values;f=arguments[0];for(i=0;i<e.length;i+=1){e[i]=this._trimAlignValue(f[i]);this._change(null,i)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(j):this.value();
else return this._values()},_setOption:function(j,h){var e,f=0;if(b.isArray(this.options.values))f=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(j){case "disabled":if(h){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(e=0;e<f;e+=1)this._change(null,e);this._animateOff=false;break}},_value:function(){var j=this.options.value;return j=this._trimAlignValue(j)},_values:function(j){var h,e;if(arguments.length){h=this.options.values[j];
return h=this._trimAlignValue(h)}else{h=this.options.values.slice();for(e=0;e<h.length;e+=1)h[e]=this._trimAlignValue(h[e]);return h}},_trimAlignValue:function(j){if(j<=this._valueMin())return this._valueMin();if(j>=this._valueMax())return this._valueMax();var h=this.options.step>0?this.options.step:1,e=(j-this._valueMin())%h;alignValue=j-e;if(Math.abs(e)*2>=h)alignValue+=e>0?h:-h;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var j=this.options.range,h=this.options,e=this,f=!this._animateOff?h.animate:false,i,l={},n,o,p,s;if(this.options.values&&this.options.values.length)this.handles.each(function(d){i=(e.values(d)-e._valueMin())/(e._valueMax()-e._valueMin())*100;l[e.orientation==="horizontal"?"left":"bottom"]=i+"%";b(this).stop(1,1)[f?"animate":"css"](l,h.animate);if(e.options.range===true)if(e.orientation==="horizontal"){if(d===0)e.range.stop(1,1)[f?"animate":"css"]({left:i+"%"},h.animate);
if(d===1)e.range[f?"animate":"css"]({width:i-n+"%"},{queue:false,duration:h.animate})}else{if(d===0)e.range.stop(1,1)[f?"animate":"css"]({bottom:i+"%"},h.animate);if(d===1)e.range[f?"animate":"css"]({height:i-n+"%"},{queue:false,duration:h.animate})}n=i});else{o=this.value();p=this._valueMin();s=this._valueMax();i=s!==p?(o-p)/(s-p)*100:0;l[e.orientation==="horizontal"?"left":"bottom"]=i+"%";this.handle.stop(1,1)[f?"animate":"css"](l,h.animate);if(j==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[f?"animate":"css"]({width:i+"%"},h.animate);if(j==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-i+"%"},{queue:false,duration:h.animate});if(j==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:i+"%"},h.animate);if(j==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-i+"%"},{queue:false,duration:h.animate})}}});b.extend(b.ui.slider,{version:"1.8.10"})})(jQuery);
(function(b,j){j.filters={init_domain_type_property_filter:function(h){b(":text[name=domain], :text[name=type], :text[name=property]",h).suggest({service_url:j.h.legacy_fb_url(),type:["/type/domain","/type/type","/type/property"],type_strict:"any"}).bind("fb-select",function(e,f){var i=b(this);i.val(f.id);var l=f["n:type"].id;if(l==="/type/domain")i.attr("name","domain");else if(l==="/type/type")i.attr("name","type");else l==="/type/property"&&i.attr("name","property");this.form.submit()})},init_limit_slider_filter:function(h,
e,f,i,l){var n=b(".limit-slider",h),o=b(".current-limit",h),p=b("input[name=limit]",h),s=parseInt(p.val()||e,10);n.slider({value:s,min:f||1,max:i||100,step:l||10,slide:function(d,a){o.css({color:"#f71"});o.text(a.value)},stop:function(d,a){o.css({color:"#333"});p.val(a.value);a.value!=s&&p[0].form.submit()}})}};b(function(){b(".filter-form-trigger").click(function(){var h=b(this).siblings(".filter-form");h.is(":hidden")?h.slideDown(function(){b(":text:first",h).focus()}):h.slideUp()})})})(jQuery,
window.freebase);
(function(b){function j(f,i,l){var n=l.relative?f.position().top:f.offset().top,o=l.relative?f.position().left:f.offset().left,p=l.position[0];n-=i.outerHeight()-l.offset[0];o+=f.outerWidth()+l.offset[1];var s=i.outerHeight()+f.outerHeight();if(p=="center")n+=s/2;if(p=="bottom")n+=s;p=l.position[1];f=i.outerWidth()+f.outerWidth();if(p=="center")o-=f/2;if(p=="left")o-=f;return{top:n,left:o}}function h(f,i){var l=this,n=f.add(l),o,p=0,s=0,d=f.attr("title"),a=e[i.effect],c,g=f.is(":input"),k=g&&f.is(":checkbox, :radio, select, :button, :submit"),
m=f.attr("type"),q=i.events[m]||i.events[g?k?"widget":"input":"def"];if(!a)throw'Nonexistent effect "'+i.effect+'"';q=q.split(/,\s*/);if(q.length!=2)throw"Tooltip: bad events configuration for "+m;f.bind(q[0],function(r){clearTimeout(p);if(i.predelay)s=setTimeout(function(){l.show(r)},i.predelay);else l.show(r)}).bind(q[1],function(r){clearTimeout(s);if(i.delay)p=setTimeout(function(){l.hide(r)},i.delay);else l.hide(r)});if(d&&i.cancelDefault){f.removeAttr("title");f.data("title",d)}b.extend(l,{show:function(r){if(!o){if(d)o=
b(i.layout).addClass(i.tipClass).appendTo(document.body).hide().append(d);else if(i.tip)o=b(i.tip).eq(0);else{o=f.next();o.length||(o=f.parent().next())}if(!o.length)throw"Cannot find tooltip for "+f;}if(l.isShown())return l;o.stop(true,true);var t=j(f,o,i);r=r||b.Event();r.type="onBeforeShow";n.trigger(r,[t]);if(r.isDefaultPrevented())return l;t=j(f,o,i);o.css({position:"absolute",top:t.top,left:t.left});c=true;a[0].call(l,function(){r.type="onShow";c="full";n.trigger(r)});t=i.events.tooltip.split(/,\s*/);
o.bind(t[0],function(){clearTimeout(p);clearTimeout(s)});t[1]&&!f.is("input:not(:checkbox, :radio), textarea")&&o.bind(t[1],function(v){v.relatedTarget!=f[0]&&f.trigger(q[1].split(" ")[0])});return l},hide:function(r){if(!o||!l.isShown())return l;r=r||b.Event();r.type="onBeforeHide";n.trigger(r);if(!r.isDefaultPrevented()){c=false;e[i.effect][1].call(l,function(){r.type="onHide";c=false;n.trigger(r)});return l}},isShown:function(r){return r?c=="full":c},getConf:function(){return i},getTip:function(){return o},
getTrigger:function(){return f}});b.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(r,t){b.isFunction(i[t])&&b(l).bind(t,i[t]);l[t]=function(v){b(l).bind(t,v);return l}})}b.tools=b.tools||{version:"@VERSION"};b.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(f,i,l){e[f]=[i,l]}};var e={toggle:[function(f){var i=this.getConf(),l=this.getTip();i=i.opacity;i<1&&l.css({opacity:i});l.show();f.call()},function(f){this.getTip().hide();f.call()}],fade:[function(f){var i=this.getConf();this.getTip().fadeTo(i.fadeInSpeed,i.opacity,f)},function(f){this.getTip().fadeOut(this.getConf().fadeOutSpeed,f)}]};b.fn.tooltip=function(f){var i=this.data("tooltip");if(i)return i;f=b.extend(true,{},b.tools.tooltip.conf,f);
if(typeof f.position=="string")f.position=f.position.split(/,?\s/);this.each(function(){i=new h(b(this),f);b(this).data("tooltip",i)});return f.api?i:this}})(jQuery);
jQuery.effects||function(b,j){function h(d){var a;if(d&&d.constructor==Array&&d.length==3)return d;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(d))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(d))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(d))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(d))return o.transparent;return o[b.trim(d).toLowerCase()]}function e(){var d=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={},c,g;if(d&&d.length&&d[0]&&d[d[0]])for(var k=d.length;k--;){c=d[k];if(typeof d[c]=="string"){g=c.replace(/\-(\w)/g,function(m,q){return q.toUpperCase()});
a[g]=d[c]}}else for(c in d)if(typeof d[c]==="string")a[c]=d[c];return a}function f(d){var a,c;for(a in d){c=d[a];if(c==null||b.isFunction(c)||a in s||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(c)))delete d[a]}return d}function i(d,a){var c={_:0},g;for(g in a)if(d[g]!=a[g])c[g]=a[g];return c}function l(d,a,c,g){if(typeof d=="object"){g=a;c=null;a=d;d=a.effect}if(b.isFunction(a)){g=a;c=null;a={}}if(typeof a=="number"||b.fx.speeds[a]){g=c;c=a;a={}}if(b.isFunction(c)){g=c;c=null}a=a||{};
c=c||a.duration;c=b.fx.off?0:typeof c=="number"?c:c in b.fx.speeds?b.fx.speeds[c]:b.fx.speeds._default;g=g||a.complete;return[d,a,c,g]}function n(d){if(!d||typeof d==="number"||b.fx.speeds[d])return true;if(typeof d==="string"&&!b.effects[d])return true;return false}b.effects={};b.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(d,a){b.fx.step[a]=function(c){if(!c.colorInit){var g;g=c.elem;var k=a,m;do{m=
b.curCSS(g,k);if(m!=""&&m!="transparent"||b.nodeName(g,"body"))break;k="backgroundColor"}while(g=g.parentNode);g=h(m);c.start=g;c.end=h(c.end);c.colorInit=true}c.elem.style[a]="rgb("+Math.max(Math.min(parseInt(c.pos*(c.end[0]-c.start[0])+c.start[0],10),255),0)+","+Math.max(Math.min(parseInt(c.pos*(c.end[1]-c.start[1])+c.start[1],10),255),0)+","+Math.max(Math.min(parseInt(c.pos*(c.end[2]-c.start[2])+c.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},p=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.effects.animateClass=function(d,a,c,
g){if(b.isFunction(c)){g=c;c=null}return this.queue("fx",function(){var k=b(this),m=k.attr("style")||" ",q=f(e.call(this)),r,t=k.attr("className");b.each(p,function(v,u){d[u]&&k[u+"Class"](d[u])});r=f(e.call(this));k.attr("className",t);k.animate(i(q,r),a,c,function(){b.each(p,function(v,u){d[u]&&k[u+"Class"](d[u])});if(typeof k.attr("style")=="object"){k.attr("style").cssText="";k.attr("style").cssText=m}else k.attr("style",m);g&&g.apply(this,arguments)});q=b.queue(this);r=q.splice(q.length-1,1)[0];
q.splice(1,0,r);b.dequeue(this)})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(d,a,c,g){return a?b.effects.animateClass.apply(this,[{add:d},a,c,g]):this._addClass(d)},_removeClass:b.fn.removeClass,removeClass:function(d,a,c,g){return a?b.effects.animateClass.apply(this,[{remove:d},a,c,g]):this._removeClass(d)},_toggleClass:b.fn.toggleClass,toggleClass:function(d,a,c,g,k){return typeof a=="boolean"||a===j?c?b.effects.animateClass.apply(this,[a?{add:d}:{remove:d},c,g,k]):this._toggleClass(d,
a):b.effects.animateClass.apply(this,[{toggle:d},a,c,g])},switchClass:function(d,a,c,g,k){return b.effects.animateClass.apply(this,[{add:a,remove:d},c,g,k])}});b.extend(b.effects,{version:"1.8.10",save:function(d,a){for(var c=0;c<a.length;c++)a[c]!==null&&d.data("ec.storage."+a[c],d[0].style[a[c]])},restore:function(d,a){for(var c=0;c<a.length;c++)a[c]!==null&&d.css(a[c],d.data("ec.storage."+a[c]))},setMode:function(d,a){if(a=="toggle")a=d.is(":hidden")?"show":"hide";return a},getBaseline:function(d,
a){var c,g;switch(d[0]){case "top":c=0;break;case "middle":c=0.5;break;case "bottom":c=1;break;default:c=d[0]/a.height}switch(d[1]){case "left":g=0;break;case "center":g=0.5;break;case "right":g=1;break;default:g=d[1]/a.width}return{x:g,y:c}},createWrapper:function(d){if(d.parent().is(".ui-effects-wrapper"))return d.parent();var a={width:d.outerWidth(true),height:d.outerHeight(true),"float":d.css("float")},c=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});d.wrap(c);c=d.parent();if(d.css("position")=="static"){c.css({position:"relative"});d.css({position:"relative"})}else{b.extend(a,{position:d.css("position"),zIndex:d.css("z-index")});b.each(["top","left","bottom","right"],function(g,k){a[k]=d.css(k);if(isNaN(parseInt(a[k],10)))a[k]="auto"});d.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return c.css(a).show()},removeWrapper:function(d){if(d.parent().is(".ui-effects-wrapper"))return d.parent().replaceWith(d);
return d},setTransition:function(d,a,c,g){g=g||{};b.each(a,function(k,m){unit=d.cssUnit(m);if(unit[0]>0)g[m]=unit[0]*c+unit[1]});return g}});b.fn.extend({effect:function(d){var a=l.apply(this,arguments),c={options:a[1],duration:a[2],callback:a[3]};a=c.options.mode;var g=b.effects[d];if(b.fx.off||!g)return a?this[a](c.duration,c.callback):this.each(function(){c.callback&&c.callback.call(this)});return g.call(this,c)},_show:b.fn.show,show:function(d){if(n(d))return this._show.apply(this,arguments);
else{var a=l.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:b.fn.hide,hide:function(d){if(n(d))return this._hide.apply(this,arguments);else{var a=l.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:b.fn.toggle,toggle:function(d){if(n(d)||typeof d==="boolean"||b.isFunction(d))return this.__toggle.apply(this,arguments);else{var a=l.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(d){var a=this.css(d),
c=[];b.each(["em","px","%","pt"],function(g,k){if(a.indexOf(k)>0)c=[parseFloat(a),k]});return c}});b.easing.jswing=b.easing.swing;b.extend(b.easing,{def:"easeOutQuad",swing:function(d,a,c,g,k){return b.easing[b.easing.def](d,a,c,g,k)},easeInQuad:function(d,a,c,g,k){return g*(a/=k)*a+c},easeOutQuad:function(d,a,c,g,k){return-g*(a/=k)*(a-2)+c},easeInOutQuad:function(d,a,c,g,k){if((a/=k/2)<1)return g/2*a*a+c;return-g/2*(--a*(a-2)-1)+c},easeInCubic:function(d,a,c,g,k){return g*(a/=k)*a*a+c},easeOutCubic:function(d,
a,c,g,k){return g*((a=a/k-1)*a*a+1)+c},easeInOutCubic:function(d,a,c,g,k){if((a/=k/2)<1)return g/2*a*a*a+c;return g/2*((a-=2)*a*a+2)+c},easeInQuart:function(d,a,c,g,k){return g*(a/=k)*a*a*a+c},easeOutQuart:function(d,a,c,g,k){return-g*((a=a/k-1)*a*a*a-1)+c},easeInOutQuart:function(d,a,c,g,k){if((a/=k/2)<1)return g/2*a*a*a*a+c;return-g/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(d,a,c,g,k){return g*(a/=k)*a*a*a*a+c},easeOutQuint:function(d,a,c,g,k){return g*((a=a/k-1)*a*a*a*a+1)+c},easeInOutQuint:function(d,
a,c,g,k){if((a/=k/2)<1)return g/2*a*a*a*a*a+c;return g/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(d,a,c,g,k){return-g*Math.cos(a/k*(Math.PI/2))+g+c},easeOutSine:function(d,a,c,g,k){return g*Math.sin(a/k*(Math.PI/2))+c},easeInOutSine:function(d,a,c,g,k){return-g/2*(Math.cos(Math.PI*a/k)-1)+c},easeInExpo:function(d,a,c,g,k){return a==0?c:g*Math.pow(2,10*(a/k-1))+c},easeOutExpo:function(d,a,c,g,k){return a==k?c+g:g*(-Math.pow(2,-10*a/k)+1)+c},easeInOutExpo:function(d,a,c,g,k){if(a==0)return c;if(a==
k)return c+g;if((a/=k/2)<1)return g/2*Math.pow(2,10*(a-1))+c;return g/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(d,a,c,g,k){return-g*(Math.sqrt(1-(a/=k)*a)-1)+c},easeOutCirc:function(d,a,c,g,k){return g*Math.sqrt(1-(a=a/k-1)*a)+c},easeInOutCirc:function(d,a,c,g,k){if((a/=k/2)<1)return-g/2*(Math.sqrt(1-a*a)-1)+c;return g/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(d,a,c,g,k){d=1.70158;var m=0,q=g;if(a==0)return c;if((a/=k)==1)return c+g;m||(m=k*0.3);if(q<Math.abs(g)){q=g;d=m/4}else d=
m/(2*Math.PI)*Math.asin(g/q);return-(q*Math.pow(2,10*(a-=1))*Math.sin((a*k-d)*2*Math.PI/m))+c},easeOutElastic:function(d,a,c,g,k){d=1.70158;var m=0,q=g;if(a==0)return c;if((a/=k)==1)return c+g;m||(m=k*0.3);if(q<Math.abs(g)){q=g;d=m/4}else d=m/(2*Math.PI)*Math.asin(g/q);return q*Math.pow(2,-10*a)*Math.sin((a*k-d)*2*Math.PI/m)+g+c},easeInOutElastic:function(d,a,c,g,k){d=1.70158;var m=0,q=g;if(a==0)return c;if((a/=k/2)==2)return c+g;m||(m=k*0.3*1.5);if(q<Math.abs(g)){q=g;d=m/4}else d=m/(2*Math.PI)*Math.asin(g/
q);if(a<1)return-0.5*q*Math.pow(2,10*(a-=1))*Math.sin((a*k-d)*2*Math.PI/m)+c;return q*Math.pow(2,-10*(a-=1))*Math.sin((a*k-d)*2*Math.PI/m)*0.5+g+c},easeInBack:function(d,a,c,g,k,m){if(m==j)m=1.70158;return g*(a/=k)*a*((m+1)*a-m)+c},easeOutBack:function(d,a,c,g,k,m){if(m==j)m=1.70158;return g*((a=a/k-1)*a*((m+1)*a+m)+1)+c},easeInOutBack:function(d,a,c,g,k,m){if(m==j)m=1.70158;if((a/=k/2)<1)return g/2*a*a*(((m*=1.525)+1)*a-m)+c;return g/2*((a-=2)*a*(((m*=1.525)+1)*a+m)+2)+c},easeInBounce:function(d,
a,c,g,k){return g-b.easing.easeOutBounce(d,k-a,0,g,k)+c},easeOutBounce:function(d,a,c,g,k){return(a/=k)<1/2.75?g*7.5625*a*a+c:a<2/2.75?g*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?g*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:g*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(d,a,c,g,k){if(a<k/2)return b.easing.easeInBounce(d,a*2,0,g,k)*0.5+c;return b.easing.easeOutBounce(d,a*2-k,0,g,k)*0.5+g*0.5+c}})}(jQuery);
(function(b){b.effects.highlight=function(j){return this.queue(function(){var h=b(this),e=["backgroundImage","backgroundColor","opacity"],f=b.effects.setMode(h,j.options.mode||"show"),i={backgroundColor:h.css("backgroundColor")};if(f=="hide")i.opacity=0;b.effects.save(h,e);h.show().css({backgroundImage:"none",backgroundColor:j.options.color||"#ffff99"}).animate(i,{queue:false,duration:j.duration,easing:j.options.easing,complete:function(){f=="hide"&&h.hide();b.effects.restore(h,e);f=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");j.callback&&j.callback.apply(this,arguments);h.dequeue()}})})}})(jQuery);
(function(b,j){var h=j.triples={tip:null,build_query:null,build_query_url:null,init_row_menu:function(e){h.tip=b("#triple-tip");h.build_query=b("#build-query");h.build_query_url=h.build_query.attr("href");b(".row-menu-trigger",e).each(function(){var f=b(this);f.tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-10,-10],effect:"fade",delay:300,tip:"#triple-tip",onBeforeShow:function(){var i=this.getTrigger().parents("tr:first").metadata();h.build_query.attr("href",h.build_query_url+
"?q="+i.mql)}});f.parents("tr:first").hover(h.row_menu_hoverover,h.row_menu_hoverout)})},row_menu_hoverover:function(){var e=b(this);e.addClass("row-hover");b(".row-menu-trigger",e).css("visibility","visible")},row_menu_hoverout:function(){var e=b(this);b(".row-menu-trigger",e).css("visibility","hidden");e.removeClass("row-hover")},init:function(){b(".column.nav > .module").collapse_module(".section");j.filters.init_domain_type_property_filter(".column.nav");j.filters.init_limit_slider_filter("#limit-slider",
100,1,1E3,10);b(":text[name=creator]").suggest({service_url:j.h.legacy_fb_url(),type:"/type/user"}).bind("fb-select",function(e,f){b(this).val(f.id).parents("form:first").submit()});h.init_row_menu();b.tablesorter.defaults.cssAsc="column-header-asc";b.tablesorter.defaults.cssDesc="column-header-desc";b.tablesorter.defaults.cssHeader="column-header";b(".table-sortable").tablesorter()}};b(h.init)})(jQuery,window.freebase);
