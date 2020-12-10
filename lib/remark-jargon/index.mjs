/**
 * remark-jargon | v2.10.7
 * A Remark plugin for jargon terms
 * (c) 2020 Joost De Cock <joost@decock.org> (https://github.com/joostdecock)
 * @license MIT
 */
var n=e;function e(n){if(null==n)return t;if("string"==typeof n)return function(n){return e;function e(e){return Boolean(e&&e.type===n)}}(n);if("object"==typeof n)return"length"in n?function(n){var t=[],r=-1;for(;++r<n.length;)t[r]=e(n[r]);return o;function o(){for(var n=-1;++n<t.length;)if(t[n].apply(this,arguments))return!0;return!1}}(n):function(n){return e;function e(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function t(){return!0}var r=function(n){return"[33m"+n+"[39m"};var o=i;function i(e,t,o,i){var u,f;"function"==typeof t&&"function"!=typeof o&&(i=o,o=t,t=null),f=n(t),u=i?-1:1,function n(e,l,a){var c,s="object"==typeof e&&null!==e?e:{};"string"==typeof s.type&&(c="string"==typeof s.tagName?s.tagName:"string"==typeof s.name?s.name:void 0,p.displayName="node ("+r(s.type+(c?"<"+c+">":""))+")");return p;function p(){var r,c,s=a.concat(e),p=[];if((!t||f(e,l,a[a.length-1]||null))&&false===(p=function(n){if(null!==n&&"object"==typeof n&&"length"in n)return n;if("number"==typeof n)return[true,n];return[n]}(o(e,a)))[0])return p;if(e.children&&"skip"!==p[0])for(c=(i?e.children.length:-1)+u;c>-1&&c<e.children.length;){if(false===(r=n(e.children[c],c,s)())[0])return r;c="number"==typeof r[1]?r[1]:c+u}return p}}(e,null,[])()}i.CONTINUE=true,i.SKIP="skip",i.EXIT=false;var u=c,f=o.CONTINUE,l=o.SKIP,a=o.EXIT;function c(n,e,t,r){"function"==typeof e&&"function"!=typeof t&&(r=t,t=e,e=null),o(n,e,(function(n,e){var r=e[e.length-1],o=r?r.children.indexOf(n):null;return t(n,o,r)}),r)}c.CONTINUE=f,c.SKIP=l,c.EXIT=a;export default n=>{if(!n||!n.jargon)throw Error('Required "jargon" option is missing in remark-jargon configuration');const e=e=>{if((e=>1===e.children.length&&"text"===e.children[0].type&&-1!==Object.keys(n.jargon).indexOf(e.children[0].value.toLowerCase()))(e)){let t=e.position.start.offset,r=e.children[0].value,o=n.jargon[r.toLowerCase()],i=`<span><input id="${t}" type="checkbox" class="jargon-toggler"/><label for="${t}" class="jargon-term" data-term="${r}">${r}</label><span class="jargon-info">${o}</span></span>`,u=e.children[0].position;u.end.column=u.end.column+i.length-r.length,u.end.offset=u.end.column-1,e.children=[{type:"html",value:i,position:u,indent:e.children[0].indent}]}};return n=>{u(n,"emphasis",e)}};
//# sourceMappingURL=index.mjs.map
