
(function(d,c,a,g){var e={};function b(i,h){this.$qlwapp=d(i);this.init(this)}b.prototype={timeDateToString:function(i){var h=""+i.getMinutes();if(h.length===1){h="0"+h}return i.getHours()+":"+h},timeStringToInt:function(i,h){return parseInt(i+h)},init:function(i){var h=this.$qlwapp;h.on("qlwapp.init",function(j){i.mobiledevice=(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))});h.on("qlwapp.time",function(p){var j=d(p.target),r=j.data("timefrom")||false,s=j.data("timeto")||false,o=parseInt(j.data("timezone"))||0;if(!s||!r||(r===s)){return true}var v=new Date(),l=v.getTimezoneOffset(),q=-l-o;var u=new Date(),k=new Date();var t,m;t=i.timeStringToInt(r[0],r[1]);m=i.timeStringToInt(r[3],r[4]);k.setHours(t);k.setMinutes(m+q);t=i.timeStringToInt(s[0],s[1]);m=i.timeStringToInt(s[3],s[4]);u.setHours(t);u.setMinutes(m+q);if(!(v.getTime()>=k.getTime()&&v.getTime()<=u.getTime())){j.addClass("qlwapp-readonly")}if(!o){return true}j.find(".from").text(i.timeDateToString(k));j.find(".to").text(i.timeDateToString(u))});h.on("qlwapp.pro",function(j){h.find(".qlwapp-toggle").trigger("qlwapp.time");h.find(".qlwapp-account").each(function(l,k){d(k).trigger("qlwapp.time")})});h.on("qlwapp.resize",function(j){if(d(this).hasClass("qlwapp-show")){d(this).trigger("qlwapp.toggle")}});h.on("qlwapp.init",function(j){if(!i.mobiledevice){h.addClass("desktop").removeClass("mobile")}else{h.addClass("mobile").removeClass("desktop")}h.addClass("qlwapp-js-ready")});h.on("qlwapp.init",function(j){if(h.hasClass("qlwapp-premium")){h.trigger("qlwapp.pro")}});h.addClass("qlwapp-js-ready").trigger("qlwapp.init");h.on("qlwapp.height",function(o){var p=d(o.delegateTarget),n=p.find(".qlwapp-body"),m=n.find(".qlwapp-carousel");var l=p.find(".qlwapp-header"),k=p.find(".qlwapp-footer"),j=(d(c).innerHeight()-l.outerHeight()-k.outerHeight());if(!i.mobiledevice){j=(d(c).innerHeight()*0.7-l.outerHeight()-k.outerHeight())}m.css({"max-height":j+"px"})});h.on("qlwapp.toggle",function(k){var l=d(k.delegateTarget),j=l.find(".qlwapp-box");l.addClass("qlwapp-transition");j.removeClass("response texting");setTimeout(function(){l.toggleClass("qlwapp-show").trigger("qlwapp.height")},10);setTimeout(function(){l.toggleClass("qlwapp-transition")},300)});h.on("click","[data-action=box], [data-action=close]",function(j){j.preventDefault();d(j.delegateTarget).trigger("qlwapp.toggle")});h.on("click","[data-action=open]",function(n){var k="https://api.whatsapp.com/send";if(!i.mobiledevice){k="https://web.whatsapp.com/send"}var m=d(this),l=m.data("message")||"",j=m.data("phone")||"";d(this).attr("href",k+"?phone="+j+"&text="+l)});h.on("click","[data-action=previous]",function(k){k.preventDefault();var l=d(k.delegateTarget),j=l.find(".qlwapp-box");j.addClass("closing");setTimeout(function(){j.removeClass("response").removeClass("closing");j.removeClass("texting")},300)});h.on("click","[data-action=chat]",function(w){w.preventDefault();var n=d(this),t=d(w.delegateTarget),u=t.find(".qlwapp-box"),v=n.find(".qlwapp-avatar img").attr("src"),A=n.find(".qlwapp-name").text(),q=n.find(".qlwapp-label").text(),p=n.find(".qlwapp-time").text(),r=n.data("message"),o=n.data("phone");u.addClass("response").addClass("opening");t.trigger("qlwapp.height");setTimeout(function(){u.removeClass("opening")},300);var k=u.find(".qlwapp-reply"),x=u.find(".qlwapp-header"),j=x.find(".qlwapp-avatar img"),m=x.find(".qlwapp-number"),l=x.find(".qlwapp-name"),z=x.find(".qlwapp-label"),y=u.find(".qlwapp-message");var s=p?p+" - "+q:q;k.data("phone",o);j.attr("src",v);j.attr("alt",A);m.html(o);l.html(A);z.html(s);y.html(r)});h.on("click","textarea",function(j){h.off("qlwapp.resize")});h.on("keypress","textarea",function(j){if(j.keyCode==13){h.find(".qlwapp-reply").trigger("click");setTimeout(function(){c.location=h.find(".qlwapp-reply").attr("href")},100)}});h.on("keyup","[data-action=response]",function(m){m.preventDefault();var p=d(this).find("textarea"),o=d(this).find("pre"),j=d(this).find(".qlwapp-reply"),n=d(m.delegateTarget),l=n.find(".qlwapp-box"),k=l.find(".qlwapp-buttons");o.html(p.val());setTimeout(function(){l.addClass("texting").css({"padding-bottom":o.outerHeight()});k.addClass("active");var q=p.val();j.data("message",q);if(q==""){l.removeClass("texting");k.removeClass("active")}},300)})}};d.fn.qlwapp=function(i){var h=arguments;if(i===g||typeof i==="object"){return this.each(function(){if(!d.data(this,"plugin_qlwapp")){d.data(this,"plugin_qlwapp",new b(this,i))}})}else{if(typeof i==="string"&&i[0]!=="_"&&i!=="init"){var j;this.each(function(){var k=d.data(this,"plugin_qlwapp");if(k instanceof b&&typeof k[i]==="function"){j=k[i].apply(k,Array.prototype.slice.call(h,1))}if(i==="destroy"){d.data(this,"plugin_qlwapp",null)}});return j!==g?j:this}}};function f(){d("div#qlwapp").qlwapp()}f();d(c).on("load",function(){f()});d(c).on("click",function(h){if(!d(h.target).closest("#qlwapp.qlwapp-show").length){d("div#qlwapp.qlwapp-show").trigger("qlwapp.toggle")}});d(c).on("resize",function(h){d("div#qlwapp").trigger("qlwapp.resize");d("div#qlwapp").trigger("qlwapp.init")})})(jQuery,window,document);