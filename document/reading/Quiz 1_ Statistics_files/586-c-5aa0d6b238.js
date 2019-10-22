(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[586],{MOpQ:function(e,n,t){"use strict"
t.r(n)
var a=t("u7Gu")
var o=t("ouhR")
var i=t.n(o)
var c=t("JD5e")
t("jYyc")
let u=window.ENV.page_view_update_url
u&&i()(()=>{let e=0
a["a"].interaction_contexts={}
if(u){let n=0
const t=300
i()(document).bind("page_view_update_url_received",function(e,n){u=n})
let o
i()(document).bind("page_view_update",function(a,c){const r={}
if(c||e>10&&n<t){r.interaction_seconds=e
i.a.ajaxJSON(u,"PUT",r,null,function(e,n){422===n.status&&clearInterval(o)})
e=0}})
o=setInterval(function(){i()(document).triggerHandler("page_view_update")},1e3*t)
window.addEventListener("unload",()=>{if(e>30){const n=new FormData
n.append("interaction_seconds",e)
n.append("_method","put")
n.append("authenticity_token",Object(c["a"])())
n.append("utf8","&#x2713")
navigator.sendBeacon(u,n)}},false)
let r=false
i()(document).bind("mousemove keypress mousedown focus",function(){r=true})
setInterval(function(){if(r){e++
a["a"]&&a["a"].interaction_context&&a["a"].interaction_contexts&&(a["a"].interaction_contexts[a["a"].interaction_context]=(a["a"].interaction_contexts[a["a"].interaction_context]||0)+1)
r=false
if(n>=t){n=0
i()(document).triggerHandler("page_view_update")}n=0}else n++},1e3)}})}}])

//# sourceMappingURL=586-c-5aa0d6b238.js.map