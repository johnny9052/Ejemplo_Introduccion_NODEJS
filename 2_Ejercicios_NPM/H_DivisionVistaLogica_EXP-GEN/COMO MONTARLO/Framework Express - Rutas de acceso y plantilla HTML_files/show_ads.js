(function(){var p=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return q.apply(null,arguments)};var r=(new Date).getTime();var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=t("0.0"),ga=ca("101",-1),ha=ca("0",0),ia=t("0.1"),ja=t("0.001"),ka=t("0.001"),la=t("0.0"),ma=t("0.01"),na=t("");var z=function(){return"r20160526"},A=/^true$/.test("false")?!0:!1,oa=/^true$/.test("false")?!0:!1,pa=/^true$/.test("false")?!0:!1,qa=pa||!oa;var B=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,C={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},D={"'":"\\'"},ya=function(a,b){return a<b?-1:a>b?1:0};var za=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};var E;a:{var Aa=p.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){E=Ba;break a}}E=""}var F=function(a){return-1!=E.indexOf(a)};var Ca=F("Opera"),G=F("Trident")||F("MSIE"),Da=F("Edge"),H=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Ea=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),Fa=function(){var a=p.document;return a?a.documentMode:void 0},Ga;
a:{var Ha="",Ia=function(){var a=E;if(H)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Da)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ea)return/WebKit\/(\S+)/.exec(a);if(Ca)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ia&&(Ha=Ia?Ia[1]:"");if(G){var Ja=Fa();if(null!=Ja&&Ja>parseFloat(Ha)){Ga=String(Ja);break a}}Ga=Ha}
var Ka=Ga,La={},Ma=function(a){if(!La[a]){for(var b=0,c=B(String(Ka)).split("."),d=B(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",h=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=h.exec(g)||["","",""],m=l.exec(k)||["","",""];if(0==n[0].length&&0==m[0].length)break;b=ya(0==n[1].length?0:parseInt(n[1],10),0==m[1].length?0:parseInt(m[1],10))||ya(0==n[2].length,0==m[2].length)||ya(n[2],m[2])}while(0==b)}La[a]=0<=b}},Na=p.document,Oa=
Na&&G?Fa()||("CSS1Compat"==Na.compatMode?parseInt(Ka,10):5):void 0;var I=function(a){I[" "](a);return a};I[" "]=function(){};var Pa;if(!(Pa=!H&&!G)){var Qa;if(Qa=G)Qa=9<=Number(Oa);Pa=Qa}Pa||H&&Ma("1.9.1");G&&Ma("9");var Ra=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{I(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Ta=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Sa(window),a[Math.floor(c*a.length)]}return null},Sa=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Va=function(a){var b=
a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Wa=/https?:\/\/[^\/]+/;var Xa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var Ya=function(a,b,c,d,e){this.K=c||2048;this.D=a||"&";this.X=b||",$";this.B=void 0!==d?d:"trn";this.oa=e||null;this.u={};this.da=0;this.s=[]},Za=function(a,b){var c={};c[a]=b;return[c]},J=function(a,b,c,d){a.s.push(b);a.u[b]=Za(c,d)},bb=function(a,b,c,d){b=b+"//"+c+d;var e=$a(a)-d.length-0;if(0>e)return"";a.s.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.s.length;f++)for(var g=a.s[f],k=a.u[g],h=0;h<k.length;h++){var l=ab(k[h],a.D,a.X);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=
a.D;break}null==d&&(d=g)}}e="";a.B&&null!=d&&(e=c+a.B+"="+(a.oa||d));return b+e+""},$a=function(a){if(!a.B)return a.K;var b=1,c;for(c in a.u)b=c.length>b?c.length:b;return a.K-a.B.length-b-a.D.length-1},ab=function(a,b,c,d,e){var f=[];Ua(a,function(a,k){var h=cb(a,b,c,d,e);h&&f.push(k+"="+h)});return f.join(b)},cb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(cb(a[g],
b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ab(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var eb=function(a,b,c,d,e,f){try{var g;c instanceof Ya?g=c:(g=new Ya,Ua(c,function(a,b){var c=g,d=c.da++,e=Za(b,a);c.s.push(d);c.u[d]=e}));if((d?a.ja:Math.random())<(e||a.Y)){var k=bb(g,a.ga,a.Z,a.ea+b+"&");"undefined"===typeof f?db(k):db(k,f)}}catch(h){}},db=function(a,b){p.google_image_requests||(p.google_image_requests=[]);var c=p.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;
c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};Xa(c,"load",d);Xa(c,"error",d)}c.src=a;p.google_image_requests.push(c)};var fb=document,K=window,gb=null,L=fb.getElementsByTagName("script");L&&L.length&&(gb=L[L.length-1]);var hb=gb;var ib=Object.prototype.hasOwnProperty,jb=function(a,b){for(var c in a)ib.call(a,c)&&b.call(void 0,a[c],c,a)},M=function(a){return!(!a||!a.call)&&"function"===typeof a},kb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},N=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},lb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Xa(a,"load",function(){a.google_onload_fired=!0}))},mb=function(a){a=
a.google_unique_id;return"number"===typeof a?a:0},nb=!!window.google_async_iframe_id;var ob=function(a){return(a=a.google_ad_modifications)?a.eids||[]:[]},pb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},qb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var rb=function(a,b){this.na=a;this.R=b},sb=function(a,b){this.url=a;this.T=b;this.J=!1;this.depth=null};var tb=function(a,b,c){this.L=a;this.aa=b;this.F=c;this.C=null;this.$=this.v;this.S=!1},ub=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},wb=function(a,b,c,d){var e;try{e=c()}catch(k){var f=a.F;try{var g=vb(k),f=(d||a.$).call(a,b,g,void 0,void 0)}catch(h){a.v("pAR",h)}if(!f)throw k;}finally{}return e},xb=function(a,b){var c=O;return function(){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];return wb(c,a,function(){return b.apply(void 0,d)})}};
tb.prototype.v=function(a,b,c,d,e){try{var f=e||this.aa,g=new Ya;J(g,1,"context",a);b instanceof ub||(b=vb(b));J(g,2,"msg",b.message.substring(0,512));b.fileName&&J(g,3,"file",b.fileName);0<b.lineNumber&&J(g,4,"line",b.lineNumber.toString());b={};if(this.C)try{this.C(b)}catch(P){}if(d)try{d(b)}catch(P){}d=[b];g.s.push(5);g.u[5]=d;var k;e=p;d=[];var h,l=null;do{b=e;Ra(b)?(h=b.location.href,l=b.document.referrer||null):(h=l,l=null);d.push(new sb(h,b));try{e=b.parent}catch(P){e=null}}while(e&&b!=e);
h=0;for(var n=d.length-1;h<=n;++h)d[h].depth=n-h;b=p;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(h=1;h<d.length;++h){var m=d[h];m.url||(m.url=b.location.ancestorOrigins[h-1],m.J=!0)}for(var u=d.length-1,n=null,m=u;0<=m;--m){var v=d[m];if(v.url&&!v.J){n=v;break}}var v=null,x=d.length&&d[u].url;n&&0==n.depth||!x||(v=d[u]);k=new rb(n,v);k.R&&J(g,6,"top",k.R.url||"");var w=k.na.url||"",y,ra=Wa.exec(w);y=ra&&ra[0]||"";k=[{url:w}];512<w.length&&k.push({url:w.substr(0,
512),urlt:1});k.push({url:y,urlt:1});g.s.push(7);g.u[7]=k;eb(this.L,f,g,this.S,c)}catch(P){try{eb(this.L,f,{context:"ecmserr",rctx:a,msg:yb(P),url:w},this.S,c)}catch(zc){}}return this.F};
var vb=function(a){return new ub(yb(a),a.fileName,a.lineNumber)},yb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var zb,O;zb=new function(){this.ga="http:"===K.location.protocol?"http:":"https:";this.Z="pagead2.googlesyndication.com";this.ea="/pagead/gen_204?id=";this.Y=.01;this.ja=Math.random()};O=new tb(zb,"jserror",!0);var Bb=function(a,b){wb(O,a,b,Ab)},Ab=O.v,Cb=function(a,b){return xb(a,b)};var Db={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",pse:"google_pstate_expt"};O.F=!A;var Q=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};Q.prototype.clone=function(){return new Q(this.start,this.end)};var Eb=function(a,b){this.M=b>=a?new Q(a,b):null},Gb=function(a,b,c,d,e){var f=new Q(d,d+e-1);(e=0>=e||e%c.length)||(a=a.M,e=!(a.start<=f.start&&a.end>=f.end));if(e)return null;b=Fb(b);return null!==b&&f.start<=b&&f.end>=b?c[(b-d)%c.length]:null},Fb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Sa(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Hb=null,Ib=function(){if(!Hb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Ra(a))b=a;else break;Hb=b}return Hb};var Jb={l:"10573511",j:"10573512"},Kb={l:"10573695",j:"10573696"},R={va:{},La:{l:"453848100",j:"453848101"},Da:{l:"24819308",j:"24819309",sa:"24819320",xa:"24819321"},Ca:{l:"24819330",j:"24819331"},za:{l:"86724438",j:"86724439"},Ha:{l:"10573505",j:"10573506"},V:{l:"10573595",j:"10573596"},W:{l:"10573581",j:"10573582"},Ga:{l:"10573605",j:"10573606"},wa:{l:"26835105",j:"26835106"},ya:{l:"35923720",j:"35923721"},G:{l:"35923760",j:"35923761"},U:{l:"20040000",j:"20040001"},ta:{l:"20040016",j:"20040017"},
Ea:{l:"19188000",j:"19188001"},ua:{ra:"314159230",Ba:"314159231"},Aa:{Ia:"27285692",Ka:"27285712",Ja:"27285713"},Fa:{l:"27415010",j:"27415011"}};var Lb=new Eb(100,199),Mb=new Eb(400,499);var S=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:Ta([c,d],b)};var Nb=function(a,b,c){Bb("files::getSrc",function(){if("https:"==K.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Ob=function(a,b,c){c||(c=qa?"https":"http");return Nb(a,b,c)};var Pb=function(){},Rb=function(a,b,c){switch(typeof b){case "string":Qb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Rb(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&
(c.push(d),Qb(e,c),c.push(":"),Rb(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Sb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Tb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Qb=function(a,b){b.push('"');b.push(a.replace(Tb,function(a){if(a in Sb)return Sb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Sb[a]=
e+b.toString(16)}));b.push('"')};var Ub=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Silk")||F("Android"))&&!(F("iPhone")&&!F("iPod")&&!F("iPad")||F("iPad")||F("iPod"));var T=null,Vb=H||Ea&&!Ub||Ca||"function"==typeof p.btoa,Wb=function(a){var b;if(Vb)b=p.btoa(a);else{b=[];for(var c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}if(!T)for(T={},a=0;65>a;a++)T[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);a=T;c=[];for(d=0;d<b.length;d+=3){var f=b[d],g=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,h=k?b[d+2]:0,l=f>>2,f=(f&3)<<4|g>>4,g=(g&15)<<2|h>>6,h=h&63;k||(h=64,e||(g=64));c.push(a[l],a[f],a[g],a[h])}b=
c.join("")}return b};var U="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Xb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Yb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Zb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},bc=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",e;if(!(e=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var f;if(f=/i(phone|pad|pod)/i.test(d)){var g;if(g=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var k;try{k=!(!K.navigator.ia&&!(A&&K.google_top_window||K.top).navigator.ia)}catch(u){k=!1}g=
!k}f=g}e=f}for(var d=e?Yb:Zb,h=c.length-1;0<=h;h--){var l=c[h];if(!l.google_parsed_script){l.google_parsed_script=!0;var n=d(l);if(n){b=n;break a}}}b=null}}catch(u){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,h={},m;m=c.exec(b);)h[m[1]]=$b(m[2]);ac(h,a)}catch(u){return!1}return!!a.google_ad_client},cc=function(a){try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var b,c,d=function(){return this};null!=Object.prototype.toJSON&&(b=Object.prototype.toJSON,
Object.prototype.toJSON=d);null!=Array.prototype.toJSON&&(c=Array.prototype.toJSON,Array.prototype.toJSON=d);var e=Wb(encodeURIComponent(window.JSON.stringify(a)));b&&(Object.prototype.toJSON=b);c&&(Array.prototype.toJSON=c);return e}eb(zb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(f){O.v("sblob",f,void 0,void 0)}return""},dc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];jb(a,function(a,d){if(null!=a){var e;try{var f=
[];Rb(new Pb,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),kb(b,d,"=",e,";"))}});return b.join("")},ec=function(a){for(var b=0,c=U.length;b<c;b++){var d=U[b];Xb[d]||(a[d]=null)}},$b=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},ac=function(a,b){for(var c=0;c<
U.length;c++){var d=U[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var V=function(a){this.o=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.qa,this)});this.la=a.google_iframe_oncopy},fc;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(sa,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(ta,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(ua,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(va,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(wa,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(xa,"&#0;")));fc=W;V.prototype.set=function(a,b){this.la.handlers[a]=b;this.o.addEventListener&&this.o.addEventListener("load",q(this.ba,this,a),!1)};
V.prototype.ba=function(a){a=this.o.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};V.prototype.qa=function(a,b){var c=gc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var gc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};H||Ea||G&&Ma(11);var hc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,ic=/Android/,jc=!1;var kc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var X=null;var lc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.A=[];this.o=a||window;this.m=0;this.w=null;this.P=0},mc=function(a,b){this.ca=a;this.T=b};Z.prototype.enqueue=function(a,b){0!=this.m||0!=this.A.length||b&&b!=window?this.I(a,b):(this.m=2,this.O(new mc(a,window)))};Z.prototype.I=function(a,b){this.A.push(new mc(a,b||this.o));nc(this)};Z.prototype.fa=function(a){this.m=1;if(a){var b=Cb("sjr::timeout",q(this.N,this,!0));this.w=this.o.setTimeout(b,a)}};
Z.prototype.N=function(a){a&&++this.P;1==this.m&&(null!=this.w&&(this.o.clearTimeout(this.w),this.w=null),this.m=0);nc(this)};Z.prototype.ka=function(){return!(!window||!Array)};Z.prototype.ma=function(){return this.P};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.I;Z.prototype.al=Z.prototype.fa;Z.prototype.rl=Z.prototype.N;Z.prototype.sz=Z.prototype.ka;Z.prototype.tc=Z.prototype.ma;var nc=function(a){var b=Cb("sjr::tryrun",q(a.pa,a));a.o.setTimeout(b,0)};
Z.prototype.pa=function(){if(0==this.m&&this.A.length){var a=this.A.shift();this.m=2;var b=Cb("sjr::run",q(this.O,this,a));a.T.setTimeout(b,0);nc(this)}};Z.prototype.O=function(a){this.m=0;a.ca()};
var oc=function(a){try{return a.sz()}catch(b){return!1}},pc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&oc(a)&&M(a.nq)&&M(a.nqa)&&M(a.al)&&M(a.rl)},qc=function(){if(Y&&oc(Y))return Y;var a=Ib(),b=a.google_jobrunner;return pc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},rc=function(a,b){qc().nq(a,b)},sc=function(a,b){qc().nqa(a,b)};var tc=nb?1==mb(K):!mb(K),uc=function(){var a=pa?"https":"http",b=I("script"),c;a:{if(A)try{var d=K.google_cafe_host||K.top.google_cafe_host;if(d){c=d;break a}}catch(e){}c=ea("","pagead2.googlesyndication.com")}return["<",b,' src="',Ob(c,["/pagead/js/",z(),"/r20160527/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},vc=function(a,b,c,
d){return function(){var e=!1;d&&qc().al(3E4);try{var f=a.document.getElementById(b).contentWindow;if(Ra(f)){var g=a.document.getElementById(b).contentWindow,k=g.document;k.body&&k.body.firstChild||(/Firefox/.test(navigator.userAgent)?k.open("text/html","replace"):k.open(),g.google_async_iframe_close=!0,k.write(c))}else{for(var h=a.document.getElementById(b).contentWindow,f=c,f=String(f),g=['"'],k=0;k<f.length;k++){var l=f.charAt(k),n=l.charCodeAt(0),m=k+1,u;if(!(u=C[l])){var v;if(31<n&&127>n)v=l;
else{var x=l;if(x in D)v=D[x];else if(x in C)v=D[x]=C[x];else{var w=void 0,y=x.charCodeAt(0);if(31<y&&127>y)w=x;else{if(256>y){if(w="\\x",16>y||256<y)w+="0"}else w="\\u",4096>y&&(w+="0");w+=y.toString(16).toUpperCase()}v=D[x]=w}}u=v}g[m]=u}g.push('"');h.location.replace("javascript:"+g.join(""))}e=!0}catch(ra){h=Ib().google_jobrunner,pc(h)&&h.rl()}e&&(e=gc("google_async_rrc",c),(new V(a)).set(b,vc(a,b,e,!1)))}},wc=function(a){var b=["<iframe"];jb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});
b.push("></iframe>");return b.join("")},xc=function(a){if(!X)a:{for(var b=[p.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(h){}}for(b=0;b<c.length;b++)try{var k=c[b].frames.google_esf;if(k){X=k;break a}}catch(h){}X=null}if(!X){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=kc(a);c.id="google_esf";c.name="google_esf";a=Ob(ea("","googleads.g.doubleclick.net"),
["/pagead/html/",z(),"/r20160527/zrt_lookup.html"].join(""));c.src=a;return wc(c)}return""},yc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!lc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;for(var d=[b.google_ad_slot,b.google_ad_format,
b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],e=0,f=hb.parentElement;f&&25>e;f=f.parentNode,++e)c.push(9!==f.nodeType&&f.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Va(d.join(":")).toString();d=a.google_adk2_experiment=a.google_adk2_experiment||Ta(["C","E"],ka)||"N";if("E"==d){d=hb;c=[];for(e=0;d&&25>e;++e){var f=(f=9!==d.nodeType&&d.id)?"/"+f:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var k=d.parentElement.childNodes,h=0,l=0;l<k.length;++l){var n=
k[l];if(n.nodeName&&n.nodeName.toString().toLowerCase()===g){if(d===n){g="."+h;break a}++h}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+f+g);d=d.parentElement}d=c.join()+":";c=a;e=[];if(c)try{for(var m=c.parent,f=0;m&&m!==c&&25>f;++f){var u=m.frames;for(g=0;g<u.length;++g)if(c===u[g]){e.push(g);break}c=m;m=c.parent}}catch(v){}b.google_ad_dom_fingerprint=Va(d+e.join()).toString()}else"C"==d&&(b.google_ad_dom_fingerprint="ctrl")};(function(a){O.C=function(b){za(a,function(a){a(b)})}})([function(a){a.shv=z()},function(a){Ua(Db,function(b,c){try{null!=p[b]&&(a[c]=p[b])}catch(d){}})}]);
Bb("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,e;d=R.V;e=d.j;(d=a.location&&a.location.hash=="#google_plle_"+e?e:Gb(Lb,a,[d.l,e],ga,ha))&&b.push(d);d=Kb;(d=S(a,ia,d.l,d.j))&&c.push(d);d=R.W;(e=S(a,ja,d.l,d.j))&&b.push(e);(d=e==d.l?Jb.l:e==d.j?Jb.j:"")&&c.push(d);d=R.G;(c=S(a,ma,d.l,d.j))&&b.push(c);fb.body||(d=R.U,(c=S(a,na,d.l,d.j))&&b.push(c))}d=a.google_ad_slot;b=a.google_ad_modifications;
!b||qb(b.ad_whitelist,d,void 0)?b=null:(c=b.space_collapsing||"none",b=(d=qb(b.ad_blacklist,d))?{H:!0,ha:d.space_collapsing||c}:b.remove_ads_by_default?{H:!0,ha:c}:null);if(b&&b.H)ec(a);else if(lb(a),(b=!1===window.google_enable_async)||(b=navigator.userAgent,hc.test(b)?b=!1:(void 0!==window.google_async_for_oa_experiment||!ic.test(navigator.userAgent)||hc.test(navigator.userAgent)||(window.google_async_for_oa_experiment=Gb(Mb,window,["C","E"],Mb.M.start,Math.round(1E3*fa))),b=ic.test(b)?"E"!==window.google_async_for_oa_experiment:
!0),b=!b||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output),b)a.google_loader_used="sb",a.google_start_time=r,yc(a,a),document.write(xc(a.google_ad_client)+uc());else{tc&&(c=a.google_ad_client,b=navigator,a&&c&&b&&(b=a.document,c=kc(c),/[^a-z0-9-]/.test(c)||((d=B("r20160212"))&&(d+="/"),d=Ob("pagead2.googlesyndication.com","/pub-config/"+d+c+".js"),c=b.createElement("script"),c.src=d,(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(c,
b))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&bc(a)&&(c.google_loader_features_used=2048);ac(a,c);c.google_loader_used="sa";ec(a);b=I("script");d={};e=c.google_ad_height;d.width='"'+c.google_ad_width+'"';d.height='"'+e+'"';d.frameborder='"0"';d.marginwidth='"0"';d.marginheight='"0"';d.vspace='"0"';d.hspace='"0"';d.allowtransparency='"true"';d.scrolling='"no"';d.allowfullscreen='"true"';d.onload='"'+fc+'"';var f;e=a.document;for(var g=d.id,k=0;!g||
e.getElementById(g);)g="aswift_"+k++;d.id=g;d.name=g;var g=c.google_ad_width,k=c.google_ad_height,h=R.G,l=h.l,n=h.j,m=c.google_active_plles=c.google_active_plles||[];N(pb(a),l)||N(ob(a),l)?m.push(l):(N(pb(a),n)||N(ob(a),n))&&m.push(n);jc=N(pb(a),h.j);h=["<iframe"];for(f in d)d.hasOwnProperty(f)&&kb(h,f+"="+d[f]);f="left:0;position:absolute;top:0;";jc&&(f=f+"width:"+g+"px;height:"+k+"px;");h.push('style="'+f+'"');h.push("></iframe>");f=d.id;g="border:none;height:"+k+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+
g+"px;background-color:transparent";e.write(['<ins id="',f+"_expand",'" style="display:inline-table;',g,'"><ins id="',f+"_anchor",'" style="display:block;',g,'">',h.join(" "),"</ins></ins>"].join(""));f=d.id;yc(a,c);d=dc(c);e=null;g=Ta(["C","E"],la);"E"==g?(e=cc(c))||(e="{X}"):"C"==g&&(e="{C}");c=xc(c.google_ad_client);k=(new Date).getTime();if(h=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;b=["<!doctype html><html><body>",c,"<",b,">",d,"google_show_ads_impl=true;google_unique_id=",
mb(a),';google_async_iframe_id="',f,'";google_start_time=',r,";",g?'google_pub_vars = "'+e+'";':"",h?'google_async_for_oa_experiment="'+h+'";':"","google_bpp=",k>r?k-r:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",b,">",uc(),"</body></html>"].join("");(a.document.getElementById(f)?rc:sc)(vc(a,f,b,!0))}});}).call(this);
