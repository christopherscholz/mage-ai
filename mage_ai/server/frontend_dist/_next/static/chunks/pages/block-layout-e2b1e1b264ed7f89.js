(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{17717:function(n){!function(){"use strict";var e={114:function(n){function e(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function t(n,e){for(var t,r="",i=0,o=-1,c=0,a=0;a<=n.length;++a){if(a<n.length)t=n.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===c);else if(o!==a-1&&2===c){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",i=0):i=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),o=a,c=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,c=0;continue}e&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+n.slice(o+1,a):r=n.slice(o+1,a),i=a-o-1;o=a,c=0}else 46===t&&-1!==c?++c:c=-1}return r}var r={resolve:function(){for(var n,r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var c;o>=0?c=arguments[o]:(void 0===n&&(n=""),c=n),e(c),0!==c.length&&(r=c+"/"+r,i=47===c.charCodeAt(0))}return r=t(r,!i),i?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(n){if(e(n),0===n.length)return".";var r=47===n.charCodeAt(0),i=47===n.charCodeAt(n.length-1);return 0!==(n=t(n,!r)).length||r||(n="."),n.length>0&&i&&(n+="/"),r?"/"+n:n},isAbsolute:function(n){return e(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,t=0;t<arguments.length;++t){var i=arguments[t];e(i),i.length>0&&(void 0===n?n=i:n+="/"+i)}return void 0===n?".":r.normalize(n)},relative:function(n,t){if(e(n),e(t),n===t)return"";if((n=r.resolve(n))===(t=r.resolve(t)))return"";for(var i=1;i<n.length&&47===n.charCodeAt(i);++i);for(var o=n.length,c=o-i,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var l=t.length-a,u=c<l?c:l,f=-1,s=0;s<=u;++s){if(s===u){if(l>u){if(47===t.charCodeAt(a+s))return t.slice(a+s+1);if(0===s)return t.slice(a+s)}else c>u&&(47===n.charCodeAt(i+s)?f=s:0===s&&(f=0));break}var d=n.charCodeAt(i+s);if(d!==t.charCodeAt(a+s))break;47===d&&(f=s)}var h="";for(s=i+f+1;s<=o;++s)s!==o&&47!==n.charCodeAt(s)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(a+f):(a+=f,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(n){return n},dirname:function(n){if(e(n),0===n.length)return".";for(var t=n.charCodeAt(0),r=47===t,i=-1,o=!0,c=n.length-1;c>=1;--c)if(47===(t=n.charCodeAt(c))){if(!o){i=c;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":n.slice(0,i)},basename:function(n,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');e(n);var r,i=0,o=-1,c=!0;if(void 0!==t&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var a=t.length-1,l=-1;for(r=n.length-1;r>=0;--r){var u=n.charCodeAt(r);if(47===u){if(!c){i=r+1;break}}else-1===l&&(c=!1,l=r+1),a>=0&&(u===t.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=l))}return i===o?o=l:-1===o&&(o=n.length),n.slice(i,o)}for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!c){i=r+1;break}}else-1===o&&(c=!1,o=r+1);return-1===o?"":n.slice(i,o)},extname:function(n){e(n);for(var t=-1,r=0,i=-1,o=!0,c=0,a=n.length-1;a>=0;--a){var l=n.charCodeAt(a);if(47!==l)-1===i&&(o=!1,i=a+1),46===l?-1===t?t=a:1!==c&&(c=1):-1!==t&&(c=-1);else if(!o){r=a+1;break}}return-1===t||-1===i||0===c||1===c&&t===i-1&&t===r+1?"":n.slice(t,i)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}("/",n)},parse:function(n){e(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return t;var r,i=n.charCodeAt(0),o=47===i;o?(t.root="/",r=1):r=0;for(var c=-1,a=0,l=-1,u=!0,f=n.length-1,s=0;f>=r;--f)if(47!==(i=n.charCodeAt(f)))-1===l&&(u=!1,l=f+1),46===i?-1===c?c=f:1!==s&&(s=1):-1!==c&&(s=-1);else if(!u){a=f+1;break}return-1===c||-1===l||0===s||1===s&&c===l-1&&c===a+1?-1!==l&&(t.base=t.name=0===a&&o?n.slice(1,l):n.slice(a,l)):(0===a&&o?(t.name=n.slice(1,c),t.base=n.slice(1,l)):(t.name=n.slice(a,c),t.base=n.slice(a,l)),t.ext=n.slice(c,l)),a>0?t.dir=n.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,n.exports=r}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}},c=!0;try{e[n](o,o.exports,r),c=!1}finally{c&&delete t[n]}return o.exports}r.ab="//";var i=r(114);n.exports=i}()},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return m},DA:function(){return p},HX:function(){return v},J8:function(){return T},L8:function(){return a},LE:function(){return d},Lk:function(){return C},Lq:function(){return h},M5:function(){return A},Q3:function(){return O},Qj:function(){return y},Ut:function(){return D},V4:function(){return w},VZ:function(){return R},dO:function(){return s},f2:function(){return N},iZ:function(){return E},t6:function(){return l},tf:function(){return f}});var r,i,o,c,a,l,u=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(l||(l={}));var f,s=(r={},(0,u.Z)(r,l.MARKDOWN,"MD"),(0,u.Z)(r,l.PYTHON,"PY"),(0,u.Z)(r,l.R,"R"),(0,u.Z)(r,l.SQL,"SQL"),(0,u.Z)(r,l.YAML,"YAML"),r),d=(i={},(0,u.Z)(i,l.MARKDOWN,"Markdown"),(0,u.Z)(i,l.PYTHON,"Python"),(0,u.Z)(i,l.R,"R"),(0,u.Z)(i,l.SQL,"SQL"),(0,u.Z)(i,l.YAML,"YAML"),i);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(f||(f={}));var h,A=[f.CALLBACK,f.CONDITIONAL,f.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(h||(h={}));var p,g,m=[f.CHART,f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN,f.TRANSFORMER],O=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN,f.TRANSFORMER],R=[f.DATA_EXPORTER,f.DATA_LOADER],T=[f.DATA_EXPORTER,f.DATA_LOADER,f.TRANSFORMER],v=[f.DATA_EXPORTER,f.DATA_LOADER,f.DBT,f.TRANSFORMER],y=[f.CHART,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN],E=[f.CALLBACK,f.CHART,f.EXTENSION,f.SCRATCHPAD,f.MARKDOWN],C=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SENSOR,f.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(p||(p={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(g||(g={}));var N=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.TRANSFORMER],w=(o={},(0,u.Z)(o,f.CALLBACK,"Callback"),(0,u.Z)(o,f.CHART,"Chart"),(0,u.Z)(o,f.CONDITIONAL,"Conditional"),(0,u.Z)(o,f.CUSTOM,"Custom"),(0,u.Z)(o,f.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,f.DATA_LOADER,"Data loader"),(0,u.Z)(o,f.DBT,"DBT"),(0,u.Z)(o,f.EXTENSION,"Extension"),(0,u.Z)(o,f.GLOBAL_DATA_PRODUCT,"Global data product"),(0,u.Z)(o,f.MARKDOWN,"Markdown"),(0,u.Z)(o,f.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,f.SENSOR,"Sensor"),(0,u.Z)(o,f.TRANSFORMER,"Transformer"),o),D=[f.DATA_LOADER,f.TRANSFORMER,f.DATA_EXPORTER,f.SENSOR];c={},(0,u.Z)(c,f.DATA_EXPORTER,"DE"),(0,u.Z)(c,f.DATA_LOADER,"DL"),(0,u.Z)(c,f.SCRATCHPAD,"SP"),(0,u.Z)(c,f.SENSOR,"SR"),(0,u.Z)(c,f.MARKDOWN,"MD"),(0,u.Z)(c,f.TRANSFORMER,"TF")},85854:function(n,e,t){"use strict";var r,i,o,c,a,l,u,f,s=t(82394),d=t(26304),h=t(26653),A=t(38626),p=t(33591),g=t(44897),m=t(95363),O=t(61896),R=t(30160),T=t(70515),v=t(38276),y=t(28598),E=["children","condensed","inline","level","marketing","spacingBelow"];function C(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?C(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var w=(0,A.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],R.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(m.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(m.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(m.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),D=A.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||g.Z.content).active,";\n  ")})),b=A.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],w,p.media.md(r||(r=(0,h.Z)(["\n    ","\n  "])),O.aQ),p.media.lg(i||(i=(0,h.Z)(["\n    ","\n  "])),O.aQ),p.media.xl(o||(o=(0,h.Z)(["\n    ","\n  "])),O.aQ)),S=A.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],w,O.MJ),_=A.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],w,p.media.xs(c||(c=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),p.media.sm(a||(a=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),p.media.md(l||(l=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),p.media.lg(u||(u=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),p.media.xl(f||(f=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI)),L=A.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],w,O.BL),x=A.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],w),Z=A.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],w),M=A.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],w),P=A.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],w,(function(n){return 1===n.level&&"\n    ".concat(O.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(O.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),k=function(n){var e,t=n.children,r=n.condensed,i=n.inline,o=n.level,c=n.marketing,a=n.spacingBelow,l=(0,d.Z)(n,E);i?e=P:0===Number(o)?e=b:1===Number(o)?e=c?_:S:2===Number(o)?e=L:3===Number(o)?e=x:4===Number(o)?e=Z:5===Number(o)&&(e=M);var u=(0,y.jsxs)(e,N(N({},l),{},{level:o,children:[a&&(0,y.jsx)(v.Z,{mb:r?2:3,children:t}),!a&&t]}));return i?u:(0,y.jsx)(D,{children:u})};k.defaultProps={level:3,weightStyle:6},e.Z=k},6943:function(n,e,t){"use strict";t.r(e);var r=t(77837),i=t(38860),o=t.n(i),c=t(39440),a=t(93808),l=t(28598);function u(){return(0,l.jsx)(c.Z,{uuid:"dashboard"})}u.getInitialProps=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,a.Z)(u)},81728:function(n,e,t){"use strict";t.d(e,{RA:function(){return d},kC:function(){return h},vg:function(){return T},kE:function(){return w},Mp:function(){return A},Pb:function(){return f},HW:function(){return y},wX:function(){return p},x6:function(){return g},_6:function(){return m},zf:function(){return v},Y6:function(){return C},Lo:function(){return N},wE:function(){return D},J3:function(){return O},We:function(){return s},QV:function(){return E},C5:function(){return R}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],a=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),l=["0","1","2","3","4","5","6","7","8","9"],u=t(86735);function f(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function d(n){return n.split(" ").join("_")}function h(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function A(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}function g(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],c=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(c,".").concat(o):c}function m(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var c=n.length,a=n[c-1];t="y"===a&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===a?"es":"s")}if(o){var l=r?g(i):i;return"".concat(l," ").concat(t)}return t}function O(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function R(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function T(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h(O(n.toLowerCase()))}function v(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var c=(0,r.Z)(i,2),a=c[0],l=c[1],u=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*u&&(e=m(a,Math.round(n/u)))}})),e}function y(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function E(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function C(){return"".concat((0,u.mp)(o)," ").concat((0,u.mp)(a))}function N(){return"".concat((0,u.mp)(c)).concat((0,u.mp)(l))}function w(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function D(n){var e,t=n.split(i.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(i.sep)}},91162:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return t(6943)}])}},function(n){n.O(0,[3662,9902,8789,4259,5896,341,2714,2631,4783,6358,8264,5810,3859,2407,976,9440,9774,2888,179],(function(){return e=91162,n(n.s=e);var e}));var e=n.O();_N_E=e}]);