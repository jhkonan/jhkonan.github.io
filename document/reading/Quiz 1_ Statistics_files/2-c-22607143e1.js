(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[2],{"+Man":function(t,e,n){"use strict"
var r=n("17x9")
var a=n.n(r)
e["a"]=a.a.oneOf(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out"])},"9Okx":function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.default=i
var a=r(n("KB5V"))
var o=r(n("TNGd"))
var u=r(n("8HMx"))
function i(t){var e={}
if(u.default){var n=t&&(0,a.default)(t)
e=n?(0,o.default)(t).getComputedStyle(n):{}}return e}},GrBK:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.default=o
var a=r(n("KB5V"))
function o(t){var e=t&&(0,a.default)(t)
return e&&e.ownerDocument||document}},IzEL:function(t,e,n){"use strict"
n.r(e)
var r={}
n.r(r)
n.d(r,"oneOf",function(){return i})
n.d(r,"oneOfEach",function(){return c})
n.d(r,"enforceOrder",function(){return f})
var a=n("q1tI")
var o=n.n(a)
function u(t){return function(e,n,r){var a=e[n]
if(null===a||"undefined"===typeof a)return new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(a,"`"))
for(var o=arguments.length,u=new Array(o>3?o-3:0),i=3;i<o;i++)u[i-3]=arguments[i]
return t.apply(void 0,[e,n,r].concat(u))}}function i(t){function e(e,n,r){var a=o.a.Children.toArray(e[n])
var u=t.map(function(t){return t?l(t):t})
for(var i=0;i<a.length;i++){var c=a[i]
if(c&&c.type){var f=l(c.type)
if(u.indexOf(f)<0)return new Error("Expected one of ".concat(u.join(", ")," in ").concat(r," but found '").concat(f,"'"))}else if(c)return new Error("Expected one of ".concat(u.join(", ")," in ").concat(r," but found an element with unknown type: ").concat(c))}}e.isRequired=u(e)
return e}function c(t){return function(e,n,r){var a=o.a.Children.toArray(e[n])
var u={}
var i=t.map(function(t){var e=l(t)
u[e]=0
return e})
for(var c=0;c<a.length;c++){var f=a[c]
if(f&&f.type){var d=l(f.type)
if(i.indexOf(d)<0)return new Error("Expected one of ".concat(i.join(", ")," in ").concat(r," but found '").concat(d,"'"))
u[d]=(u[d]||0)+1}else if(f)return new Error("Expected one of ".concat(i.join(", ")," in ").concat(r," but found an element of unknown type: ").concat(f))}var s=[]
Object.keys(u).forEach(function(t){u[t]>1&&s.push("".concat(u[t]," children of type ").concat(t))
0===u[t]&&s.push("0 children of type ".concat(t))})
if(s.length>0)return new Error("Expected exactly one of each ".concat(i.join(", ")," in ").concat(r," but found:\n").concat(s.join("\n")))}}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
function r(t,e){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return false
return true}function a(t,e){return e.map(function(e){return i(t,e)}).join("\n\n")}function i(t,e){var n=e.map(function(t){return t?l(t):"??"}).map(function(t){return"  <".concat(t," />")}).join("\n")
return"<".concat(t,">\n").concat(n,"\n</").concat(t,">")}function c(t,n,u){var c=o.a.Children.toArray(t[n]).map(function(t){if(t&&t.type)return l(t.type)
if(t)return null})
for(var f=0;f<e.length;f++){var d=e[f].map(function(t){return t?l(t):"??"})
if(r(c,d))return}return new Error("Expected children of ".concat(u," in one of the following formats:\n").concat(a(u,e),"\n\n\nInstead of:\n").concat(i(u,c)))}c.isRequired=u(c)
return c}var l=function(t){return"string"===typeof t?t:t.displayName||t.name}
var d=n("eaZL")
var s=n("rGJU")
var v=n("+Man")
var p=n("SAdv")
function h(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
return function(e,r,a){if(null!=e[r]){var o=n.map(function(t){return e[t]}).filter(function(t){return null!=t})
if(o.length>0)return new Error("Invalid prop `".concat(r,"` supplied to `").concat(a,"`: expected only one of ")+"".concat([r].concat(n).map(function(t){return"`".concat(t,"`")}).join(", ")," to be set."))}return t.apply(null,arguments)}}n.d(e,"Children",function(){return r})
n.d(e,"childrenOrValue",function(){return d["a"]})
n.d(e,"controllable",function(){return s["a"]})
n.d(e,"cursor",function(){return v["a"]})
n.d(e,"element",function(){return p["a"]})
n.d(e,"makeRequirable",function(){return u})
n.d(e,"xor",function(){return h})
e["default"]={Children:r,childrenOrValue:d["a"],controllable:s["a"],cursor:v["a"],element:p["a"],makeRequirable:u,xor:h}},LqRq:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
Object.defineProperty(e,"DIRECTION",{enumerable:true,get:function(){return s.DIRECTION}})
e.default=void 0
var a=r(n("MVZn"))
var o=r(n("lwsE"))
var u=r(n("W8MJ"))
var i=r(n("a1gu"))
var c=r(n("Nsbk"))
var f=r(n("7W2i"))
var l=r(n("17x9"))
var d=r(n("jcII"))
var s=n("smBl")
var v=r(n("Txdh"))
var p=(0,d.default)(function(t){var e,n
return n=e=function(t){(0,f.default)(e,t)
function e(){var t
var n;(0,o.default)(this,e)
for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u]
n=(0,i.default)(this,(t=(0,c.default)(e)).call.apply(t,[this].concat(a)))
n._defaultDirection=(0,v.default)()
return n}(0,u.default)(e,[{key:"dir",get:function(){var t=(0,s.getTextDirectionContext)(this.context)||{}
return t.dir||this.props.dir||this._defaultDirection}},{key:"rtl",get:function(){return this.dir===s.DIRECTION.rtl}},{key:"ltr",get:function(){return this.dir===s.DIRECTION.ltr}}])
return e}(t),e.propTypes=(0,a.default)({},t.propTypes,{dir:l.default.oneOf(Object.values(s.DIRECTION))}),e.contextTypes=(0,a.default)({},t.contextTypes,s.TextDirectionContextTypes),n})
e.default=p},SAdv:function(t,e,n){"use strict"
var r=n("17x9")
var a=n.n(r)
var o=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
e["a"]=o?a.a.oneOfType([a.a.element,a.a.instanceOf(Element)]):a.a.element},TNGd:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.default=u
var a=r(n("KB5V"))
var o=r(n("GrBK"))
function u(t){var e=t&&(0,a.default)(t)
var n=(0,o.default)(e)
return n&&(n.defaultView||n.parentWindow)}},Txdh:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.default=void 0
var a=r(n("8HMx"))
var o=r(n("9Okx"))
var u
var i=a.default?function(){var t=document.documentElement
var e=t.getAttribute("dir")||(0,o.default)(t).direction
if(!u){u=new MutationObserver(function(){e=t.getAttribute("dir")})
u.observe(t,{attributes:true})}return function(n){if("undefined"===typeof n||n===t)return e
return(0,o.default)(n).direction}}():function(){}
e.default=i},ZJ40:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.warnDeprecatedComponent=d
e.changedPackageWarning=s
e.deprecatePropValues=e.default=void 0
var a=r(n("lwsE"))
var o=r(n("a1gu"))
var u=r(n("Nsbk"))
var i=r(n("7W2i"))
n("Eo2T")
var c=r(n("jcII"))
var f=(0,c.default)(function(t,e,n,r){var c=function(t){(0,i.default)(e,t)
function e(){(0,a.default)(this,e)
return(0,o.default)(this,(0,u.default)(e).apply(this,arguments))}return e}(t)
false
return c})
e.default=f
var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var n=arguments.length>2?arguments[2]:void 0
return function(r,a,o){var u=e.includes(r[a])
"[".concat(o,"] The '").concat(r[a],"' value for the `").concat(a,"` prop is deprecated. ").concat(n||"")
for(var i=arguments.length,c=new Array(i>3?i-3:0),f=3;f<i;f++)c[f-3]=arguments[f]
return u?null:t.apply(void 0,[r,a,o].concat(c))}}
e.deprecatePropValues=l
function d(t,e,n){"[".concat(e,"] was deprecated in version ").concat(t,". ").concat(n||"")}function s(t,e){return"It has been moved from @instructure/".concat(t," to @instructure/").concat(e,".")}},Zuoh:function(t,e,n){"use strict"
n.r(e)
var r=n("1OyB")
var a=n("vuIU")
var o=n("md7G")
var u=n("foSv")
var i=n("ReuC")
var c=n("Ji7U")
var f=n("i8i4")
var l=n("jcII")
e["default"]=Object(l["default"])(function(t){var e=t.displayName||t.name
var n={attribute:"data-cid",value:e}
var l="[".concat(n.attribute,'~="').concat(n.value,'"]')
var d=function(t){Object(c["a"])(e,t)
function e(){Object(r["a"])(this,e)
return Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}Object(a["a"])(e,[{key:"componentDidMount",value:function(){if(Object(i["a"])(Object(u["a"])(e.prototype),"componentDidMount",this)){var t
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=Object(i["a"])(Object(u["a"])(e.prototype),"componentDidMount",this)).call.apply(t,[this].concat(r))}this.appendLocatorAttribute()}},{key:"componentDidUpdate",value:function(){if(Object(i["a"])(Object(u["a"])(e.prototype),"componentDidUpdate",this)){var t
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=Object(i["a"])(Object(u["a"])(e.prototype),"componentDidUpdate",this)).call.apply(t,[this].concat(r))}this.appendLocatorAttribute()}},{key:"componentWillUnmount",value:function(){this._testableUnmounted=true
if(Object(i["a"])(Object(u["a"])(e.prototype),"componentWillUnmount",this)){var t
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=Object(i["a"])(Object(u["a"])(e.prototype),"componentWillUnmount",this)).call.apply(t,[this].concat(r))}clearTimeout(this.locatorTimeout)}},{key:"appendLocatorAttribute",value:function(){var t=this
this.locatorTimeout=setTimeout(function(){var e
if(t._testableUnmounted)return
try{e=Object(f["findDOMNode"])(t)||t.DOMNode}catch(t){}if(e&&e.getAttribute){var r=e.getAttribute(n.attribute)
var a="string"===typeof r?r.split(/\s+/):[]
a.includes(n.value)||a.push(n.value)
e.setAttribute(n.attribute,a.join(" "))}})}}])
return e}(t)
d.selector=l
return d})},eaZL:function(t,e,n){"use strict"
n.d(e,"a",function(){return r})
function r(t,e,n){if("input"===t.as){if("children"===e&&t.children||void 0==t.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else if("value"===e&&void 0!=t.value||!t.children)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
return}},kibL:function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:true})
e.default=r
n("Eo2T")
function r(t,e,n){if(e.as&&e.as!==t.defaultProps.as)return e.as
if("function"===typeof n)return n()
if(e.href)return"a"
if(e.to){e.as,"[".concat(t.displayName,"] `as` prop should be provided when using `to`")
return"a"}if("function"===typeof e.onClick)return"button"
return t.defaultProps.as||"span"}},rGJU:function(t,e,n){"use strict"
n.d(e,"a",function(){return r})
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,a,o){var u=t.apply(null,arguments)
if(u)return u
if(r[a]&&"function"!==typeof r[e])return new Error(["You provided a '".concat(a,"' prop without an '").concat(e,"' handler on '").concat(o,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(e,"'.")].join(""))}}},smBl:function(t,e,n){"use strict"
var r=n("TqRt")
Object.defineProperty(e,"__esModule",{value:true})
e.makeTextDirectionContext=f
e.getTextDirectionContext=l
e.TextDirectionContextTypes=e.DIRECTION=void 0
var a=r(n("lSNA"))
var o=r(n("17x9"))
var u="@@bidirectional"
var i={ltr:"ltr",rtl:"rtl"}
e.DIRECTION=i
var c=(0,a.default)({},u,o.default.shape({dir:o.default.oneOf(Object.values(i))}))
e.TextDirectionContextTypes=c
function f(t){return(0,a.default)({},u,{dir:t})}function l(t){if(t)return t[u]}}}])

//# sourceMappingURL=2-c-22607143e1.js.map