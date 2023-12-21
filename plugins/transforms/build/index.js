!function(){"use strict";var e,o={752:function(){var e=window.wp.blocks,o=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),t=JSON.parse('{"u2":"block-developers-cookbook/transforms"}'),n={to:[{type:"block",blocks:["core/paragraph"],transform:({message:o})=>(0,e.createBlock)("core/paragraph",{content:o})},{type:"block",blocks:["core/heading"],transform:({message:o})=>(0,e.createBlock)("core/heading",{content:o})}],from:[{type:"block",blocks:["core/paragraph"],transform:({content:o})=>(0,e.createBlock)("block-developers-cookbook/transforms",{message:o})},{type:"block",blocks:["core/heading"],transform:({content:o})=>(0,e.createBlock)("block-developers-cookbook/transforms",{message:o})},{type:"enter",regExp:/^rollout!$/,transform:()=>(0,e.createBlock)("block-developers-cookbook/transforms")},{type:"prefix",prefix:"?",transform:()=>(0,e.createBlock)("block-developers-cookbook/transforms")}]};(0,e.registerBlockType)(t.u2,{edit:function({attributes:{message:e},setAttributes:t}){return(0,o.createElement)(r.RichText,{tagName:"p",value:e,...(0,r.useBlockProps)(),onChange:e=>t({message:e})})},transforms:n,icon:function(){return(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"816",height:"11in",fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"-32.346 -3.059 12.599 15.737"},(0,o.createElement)("path",{fill:"#010101",d:"M-28.05-1.665h4.065c-.14.121-2.041 1.451-2.061 1.451-.005 0-1.955-1.377-2.005-1.45zm-1.871-.592c.054.232.123.492.194.722.126.408.053.304.39.527.372.246.72.493 1.092.74.218.146 2.153 1.486 2.199 1.486.041 0 3.258-2.184 3.588-2.406 0-.27.191-.751.191-1.05 0-.13-1.293-.507-1.512-.55-.305-.058-.552-.11-.866-.164-.154-.026-.31-.043-.451-.064-.043-.007-.49-.043-.492-.043h-.478c-.708 0-1.466.143-2.062.267-.492.102-1.42.338-1.793.535zm8.666 2.56v.304l-2.86 1.876-.003-.291 2.863-1.89zm.334-1.39l.01.3-2.862 1.874-.003-.29zM-22-2.277l-.208 1.244-2.347 1.507-.421 2.794 2.703-.569 1.748-1.35.778-3.816-.077-.006zM-30.838.34l2.861 1.874.026.168-.004.134c-.076-.02-1.283-.842-1.45-.955-.157-.104-1.433-.891-1.433-.973zm-.324-1.394l2.856 1.882.007.294-2.863-1.89zm4.066 4.353l-.42-2.788c-.244-.128-.57-.361-.813-.523-.259-.172-.55-.368-.816-.52-.134-.077-.275-.175-.406-.262-.136-.091-.305-.135-.34-.328-.038-.204-.06-.361-.092-.577-.026-.17-.096-.387-.11-.556l-2.253-.193c.025.3.19.816.244 1.131.057.34.135.83.226 1.149.088.305.187.822.237 1.138.037.239.03.37.194.493.135.1.253.194.39.297.262.198.518.396.774.6.387.307.339.345.915.46.376.075.748.164 1.132.242.33.067.837.212 1.138.237zm-1.545.861l-.006 1.105.028 3.221.855.712c.065-.279.649-1.559.649-1.66v-.096h2.137c0 .13.565 1.56.65 1.737l.012.015.842-.722.024-3.818V4.16l-1.528-.65v2.959h-2.137l-.004-2.969-1.522.661zm1.787-.94l-.013 2.962h1.66l-.005-3.094.33-2.347c-.156.036-1.126.744-1.164.744-.146 0-.938-.694-1.136-.743l.328 2.479zm6.028-1.276l-.017-.012-1.452 1.03.009.49-.913.596-.027 4.253.005.057 2.04-1.68zm-9.243 5.397c.194.176.415.33.601.506.141.133.442.389.597.492l-.024-3.074.004-1.26-.908-.584-.008-.466c0-.068-1.3-.97-1.45-1.05 0 .211.017.341.036.517.017.15.003.388.028.526.056.306.033.713.07 1.037.037.312.03.716.08 1.028.035.226.089.762.092.996.001.125.004.412.021.532.023.152.152.204.26.295.196.166.414.335.6.505zm2.508 1.892l3.06.003a6.481 6.481 0 00-.28-.79c-.05-.105-.235-.756-.311-.756l-1.847.002z"}))}})}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,t),c.exports}t.m=o,e=[],t.O=function(o,r,n,c){if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],n=e[p][1],c=e[p][2];for(var s=!0,a=0;a<r.length;a++)(!1&c||l>=c)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(s=!1,c<l&&(l=c));if(s){e.splice(p--,1);var i=n();void 0!==i&&(o=i)}}return o}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[r,n,c]},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={826:0,431:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,c,l=r[0],s=r[1],a=r[2],i=0;if(l.some((function(o){return 0!==e[o]}))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(a)var p=a(t)}for(o&&o(r);i<l.length;i++)c=l[i],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(p)},r=self.webpackChunktransforms=self.webpackChunktransforms||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var n=t.O(void 0,[431],(function(){return t(752)}));n=t.O(n)}();