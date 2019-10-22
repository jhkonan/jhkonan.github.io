(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[103],{0:function(e,t){},"3rwf":function(e,t,n){var r
r=function(e){function t(e){return e.default?e.default:e}var r=t(n("b0yZ"))
var o=Math.floor
var a=function(e){return("00"+e).slice(-2)}
var i=function(e){var t,n,r
if(e>3600){t=o(e/3600)
n=o((e-3600*t)/60)
r=e%60
return[t,n,r].map(a).join(":")}return[e/60,e%60].map(o).map(a).join(":")}
i.toReadableString=function(e){var t,n,a,i,s
if(e<60)return r.t("duration_in_seconds",{one:"1 second",other:"%{count} seconds"},{count:o(e)})
if(e<3600){n=o(e/60)
e=o(e%60)
i=r.t("duration_in_minutes",{one:"1 minute",other:"%{count} minutes"},{count:n})
s=r.t("duration_in_seconds",{one:"1 second",other:"%{count} seconds"},{count:e})
return r.t("duration_in_minutes_and_seconds","%{minutes} and %{seconds}",{minutes:i,seconds:s})}t=o(e/3600)
n=o((e-3600*t)/60)
i=r.t("duration_in_minutes",{one:"1 minute",other:"%{count} minutes"},{count:n})
a=r.t("duration_in_hours",{one:"1 hour",other:"%{count} hours"},{count:t})
return r.t("duration_in_hours_and_minutes","%{hours} and %{minutes}",{minutes:i,hours:a})}
return i}.call(t,n,t,e),void 0!==r&&(e.exports=r)},"6Nz/":function(e,t,n){var r
o=function(){return function e(t,n,o){function a(s,u){if(!n[s]){if(!t[s]){var c="function"==typeof r&&r
if(!u&&c)return r(s,!0)
if(i)return i(s,!0)
throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}}
t[s][0].call(l.exports,function(e){var n=t[s][1][e]
return a(n||e)},l,l.exports,e,t,n,o)}return n[s].exports}var i="function"==typeof r&&r
for(var s=0;s<o.length;s++)a(o[s])
return a}({1:[function(e,t,n){"use strict"
var r=e("./focusNode")
var o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}}
t.exports=o},{"./focusNode":120}],2:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPropagators")
var a=e("./ExecutionEnvironment")
var i=e("./SyntheticInputEvent")
var s=e("./keyOf")
var u=a.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||c())
function c(){var e=window.opera
return"object"===typeof e&&"function"===typeof e.version&&parseInt(e.version(),10)<=12}var l=32
var d=String.fromCharCode(l)
var p=r.topLevelTypes
var f={beforeInput:{phasedRegistrationNames:{bubbled:s({onBeforeInput:null}),captured:s({onBeforeInputCapture:null})},dependencies:[p.topCompositionEnd,p.topKeyPress,p.topTextInput,p.topPaste]}}
var v=null
function h(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var m={eventTypes:f,extractEvents:function(e,t,n,r){var a
if(u)switch(e){case p.topKeyPress:var s=r.which
if(s!==l)return
a=String.fromCharCode(s)
break
case p.topTextInput:a=r.data
if(a===d)return
break
default:return}else{switch(e){case p.topPaste:v=null
break
case p.topKeyPress:r.which&&!h(r)&&(v=String.fromCharCode(r.which))
break
case p.topCompositionEnd:v=r.data}if(null===v)return
a=v}if(!a)return
var c=i.getPooled(f.beforeInput,n,r)
c.data=a
v=null
o.accumulateTwoPhaseDispatches(c)
return c}}
t.exports=m},{"./EventConstants":16,"./EventPropagators":21,"./ExecutionEnvironment":22,"./SyntheticInputEvent":98,"./keyOf":141}],3:[function(e,t,n){var r=e("./invariant")
var o={addClass:function(e,t){r(!/\s/.test(t),'CSSCore.addClass takes only a single class name. "%s" contains multiple classes.',t)
t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t))
return e},removeClass:function(e,t){r(!/\s/.test(t),'CSSCore.removeClass takes only a single class name. "%s" contains multiple classes.',t)
t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")))
return e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){r(!/\s/.test(t),"CSS.hasClass takes only a single class name.")
if(e.classList)return!!t&&e.classList.contains(t)
return(" "+e.className+" ").indexOf(" "+t+" ")>-1}}
t.exports=o},{"./invariant":134}],4:[function(e,t,n){"use strict"
var r={columnCount:true,fillOpacity:true,flex:true,flexGrow:true,flexShrink:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true}
function o(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var a=["Webkit","ms","Moz","O"]
Object.keys(r).forEach(function(e){a.forEach(function(t){r[o(t,e)]=r[e]})})
var i={background:{backgroundImage:true,backgroundPosition:true,backgroundRepeat:true,backgroundColor:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true}}
var s={isUnitlessNumber:r,shorthandPropertyExpansions:i}
t.exports=s},{}],5:[function(e,t,n){"use strict"
var r=e("./CSSProperty")
var o=e("./dangerousStyleValue")
var a=e("./hyphenateStyleName")
var i=e("./memoizeStringOnly")
var s=i(function(e){return a(e)})
var u={createMarkupForStyles:function(e){var t=""
for(var n in e){if(!e.hasOwnProperty(n))continue
var r=e[n]
if(null!=r){t+=s(n)+":"
t+=o(n,r)+";"}}return t||null},setValueForStyles:function(e,t){var n=e.style
for(var a in t){if(!t.hasOwnProperty(a))continue
var i=o(a,t[a])
if(i)n[a]=i
else{var s=r.shorthandPropertyExpansions[a]
if(s)for(var u in s)n[u]=""
else n[a]=""}}}}
t.exports=u},{"./CSSProperty":4,"./dangerousStyleValue":115,"./hyphenateStyleName":132,"./memoizeStringOnly":143}],6:[function(e,t,n){"use strict"
var r=e("./PooledClass")
var o=e("./invariant")
var a=e("./mixInto")
function i(){this._callbacks=null
this._contexts=null}a(i,{enqueue:function(e,t){this._callbacks=this._callbacks||[]
this._contexts=this._contexts||[]
this._callbacks.push(e)
this._contexts.push(t)},notifyAll:function(){var e=this._callbacks
var t=this._contexts
if(e){o(e.length===t.length,"Mismatched list of contexts in callback queue")
this._callbacks=null
this._contexts=null
for(var n=0,r=e.length;n<r;n++)e[n].call(t[n])
e.length=0
t.length=0}},reset:function(){this._callbacks=null
this._contexts=null},destructor:function(){this.reset()}})
r.addPoolingTo(i)
t.exports=i},{"./PooledClass":28,"./invariant":134,"./mixInto":147}],7:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPluginHub")
var a=e("./EventPropagators")
var i=e("./ExecutionEnvironment")
var s=e("./ReactUpdates")
var u=e("./SyntheticEvent")
var c=e("./isEventSupported")
var l=e("./isTextInputElement")
var d=e("./keyOf")
var p=r.topLevelTypes
var f={change:{phasedRegistrationNames:{bubbled:d({onChange:null}),captured:d({onChangeCapture:null})},dependencies:[p.topBlur,p.topChange,p.topClick,p.topFocus,p.topInput,p.topKeyDown,p.topKeyUp,p.topSelectionChange]}}
var v=null
var h=null
var m=null
var g=null
function _(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}var y=false
i.canUseDOM&&(y=c("change")&&(!("documentMode"in document)||document.documentMode>8))
function w(e){var t=u.getPooled(f.change,h,e)
a.accumulateTwoPhaseDispatches(t)
s.batchedUpdates(b,t)}function b(e){o.enqueueEvents(e)
o.processEventQueue()}function C(e,t){v=e
h=t
v.attachEvent("onchange",w)}function k(){if(!v)return
v.detachEvent("onchange",w)
v=null
h=null}function E(e,t,n){if(e===p.topChange)return n}function R(e,t,n){if(e===p.topFocus){k()
C(t,n)}else e===p.topBlur&&k()}var M=false
i.canUseDOM&&(M=c("input")&&(!("documentMode"in document)||document.documentMode>9))
var x={get:function(){return g.get.call(this)},set:function(e){m=""+e
g.set.call(this,e)}}
function D(e,t){v=e
h=t
m=e.value
g=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value")
Object.defineProperty(v,"value",x)
v.attachEvent("onpropertychange",S)}function T(){if(!v)return
delete v.value
v.detachEvent("onpropertychange",S)
v=null
h=null
m=null
g=null}function S(e){if("value"!==e.propertyName)return
var t=e.srcElement.value
if(t===m)return
m=t
w(e)}function P(e,t,n){if(e===p.topInput)return n}function O(e,t,n){if(e===p.topFocus){T()
D(t,n)}else e===p.topBlur&&T()}function I(e,t,n){if((e===p.topSelectionChange||e===p.topKeyUp||e===p.topKeyDown)&&v&&v.value!==m){m=v.value
return h}}function N(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function A(e,t,n){if(e===p.topClick)return n}var q={eventTypes:f,extractEvents:function(e,t,n,r){var o,i
if(_(t))y?o=E:i=R
else if(l(t))if(M)o=P
else{o=I
i=O}else N(t)&&(o=A)
if(o){var s=o(e,t,n)
if(s){var c=u.getPooled(f.change,s,r)
a.accumulateTwoPhaseDispatches(c)
return c}}i&&i(e,t,n)}}
t.exports=q},{"./EventConstants":16,"./EventPluginHub":18,"./EventPropagators":21,"./ExecutionEnvironment":22,"./ReactUpdates":87,"./SyntheticEvent":96,"./isEventSupported":135,"./isTextInputElement":137,"./keyOf":141}],8:[function(e,t,n){"use strict"
var r=0
var o={createReactRootIndex:function(){return r++}}
t.exports=o},{}],9:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPropagators")
var a=e("./ExecutionEnvironment")
var i=e("./ReactInputSelection")
var s=e("./SyntheticCompositionEvent")
var u=e("./getTextContentAccessor")
var c=e("./keyOf")
var l=[9,13,27,32]
var d=229
var p=a.canUseDOM&&"CompositionEvent"in window
var f=!p||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11
var v=r.topLevelTypes
var h=null
var m={compositionEnd:{phasedRegistrationNames:{bubbled:c({onCompositionEnd:null}),captured:c({onCompositionEndCapture:null})},dependencies:[v.topBlur,v.topCompositionEnd,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:c({onCompositionStart:null}),captured:c({onCompositionStartCapture:null})},dependencies:[v.topBlur,v.topCompositionStart,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:c({onCompositionUpdate:null}),captured:c({onCompositionUpdateCapture:null})},dependencies:[v.topBlur,v.topCompositionUpdate,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]}}
function g(e){switch(e){case v.topCompositionStart:return m.compositionStart
case v.topCompositionEnd:return m.compositionEnd
case v.topCompositionUpdate:return m.compositionUpdate}}function _(e,t){return e===v.topKeyDown&&t.keyCode===d}function y(e,t){switch(e){case v.topKeyUp:return-1!==l.indexOf(t.keyCode)
case v.topKeyDown:return t.keyCode!==d
case v.topKeyPress:case v.topMouseDown:case v.topBlur:return true
default:return false}}function w(e){this.root=e
this.startSelection=i.getSelection(e)
this.startValue=this.getText()}w.prototype.getText=function(){return this.root.value||this.root[u()]}
w.prototype.getData=function(){var e=this.getText()
var t=this.startSelection.start
var n=this.startValue.length-this.startSelection.end
return e.substr(t,e.length-n-t)}
var b={eventTypes:m,extractEvents:function(e,t,n,r){var a
var i
p?a=g(e):h?y(e,r)&&(a=m.compositionEnd):_(e,r)&&(a=m.compositionStart)
if(f)if(h||a!==m.compositionStart){if(a===m.compositionEnd&&h){i=h.getData()
h=null}}else h=new w(t)
if(a){var u=s.getPooled(a,n,r)
i&&(u.data=i)
o.accumulateTwoPhaseDispatches(u)
return u}}}
t.exports=b},{"./EventConstants":16,"./EventPropagators":21,"./ExecutionEnvironment":22,"./ReactInputSelection":63,"./SyntheticCompositionEvent":94,"./getTextContentAccessor":129,"./keyOf":141}],10:[function(e,t,n){"use strict"
var r=e("./Danger")
var o=e("./ReactMultiChildUpdateTypes")
var a=e("./getTextContentAccessor")
var i=e("./invariant")
var s=a()
function u(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var c
c="textContent"===s?function(e,t){e.textContent=t}:function(e,t){while(e.firstChild)e.removeChild(e.firstChild)
if(t){var n=e.ownerDocument||document
e.appendChild(n.createTextNode(t))}}
var l={dangerouslyReplaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,updateTextContent:c,processUpdates:function(e,t){var n
var a=null
var s=null
for(var l=0;n=e[l];l++)if(n.type===o.MOVE_EXISTING||n.type===o.REMOVE_NODE){var d=n.fromIndex
var p=n.parentNode.childNodes[d]
var f=n.parentID
i(p,"processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting <p> or <a> tags, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",d,f)
a=a||{}
a[f]=a[f]||[]
a[f][d]=p
s=s||[]
s.push(p)}var v=r.dangerouslyRenderMarkup(t)
if(s)for(var h=0;h<s.length;h++)s[h].parentNode.removeChild(s[h])
for(var m=0;n=e[m];m++)switch(n.type){case o.INSERT_MARKUP:u(n.parentNode,v[n.markupIndex],n.toIndex)
break
case o.MOVE_EXISTING:u(n.parentNode,a[n.parentID][n.fromIndex],n.toIndex)
break
case o.TEXT_CONTENT:c(n.parentNode,n.textContent)
break
case o.REMOVE_NODE:}}}
t.exports=l},{"./Danger":13,"./ReactMultiChildUpdateTypes":69,"./getTextContentAccessor":129,"./invariant":134}],11:[function(e,t,n){"use strict"
var r=e("./invariant")
var o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{}
var n=e.DOMAttributeNames||{}
var a=e.DOMPropertyNames||{}
var s=e.DOMMutationMethods||{}
e.isCustomAttribute&&i._isCustomAttributeFunctions.push(e.isCustomAttribute)
for(var u in t){r(!i.isStandardName.hasOwnProperty(u),"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",u)
i.isStandardName[u]=true
var c=u.toLowerCase()
i.getPossibleStandardName[c]=u
if(n.hasOwnProperty(u)){var l=n[u]
i.getPossibleStandardName[l]=u
i.getAttributeName[u]=l}else i.getAttributeName[u]=c
i.getPropertyName[u]=a.hasOwnProperty(u)?a[u]:u
s.hasOwnProperty(u)?i.getMutationMethod[u]=s[u]:i.getMutationMethod[u]=null
var d=t[u]
i.mustUseAttribute[u]=d&o.MUST_USE_ATTRIBUTE
i.mustUseProperty[u]=d&o.MUST_USE_PROPERTY
i.hasSideEffects[u]=d&o.HAS_SIDE_EFFECTS
i.hasBooleanValue[u]=d&o.HAS_BOOLEAN_VALUE
i.hasNumericValue[u]=d&o.HAS_NUMERIC_VALUE
i.hasPositiveNumericValue[u]=d&o.HAS_POSITIVE_NUMERIC_VALUE
i.hasOverloadedBooleanValue[u]=d&o.HAS_OVERLOADED_BOOLEAN_VALUE
r(!i.mustUseAttribute[u]||!i.mustUseProperty[u],"DOMProperty: Cannot require using both attribute and property: %s",u)
r(i.mustUseProperty[u]||!i.hasSideEffects[u],"DOMProperty: Properties that have side effects must use property: %s",u)
r(!!i.hasBooleanValue[u]+!!i.hasNumericValue[u]+!!i.hasOverloadedBooleanValue[u]<=1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",u)}}}
var a={}
var i={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<i._isCustomAttributeFunctions.length;t++){var n=i._isCustomAttributeFunctions[t]
if(n(e))return true}return false},getDefaultValueForProperty:function(e,t){var n=a[e]
var r
n||(a[e]=n={})
if(!(t in n)){r=document.createElement(e)
n[t]=r[t]}return n[t]},injection:o}
t.exports=i},{"./invariant":134}],12:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=e("./escapeTextForBrowser")
var a=e("./memoizeStringOnly")
var i=e("./warning")
function s(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&t<1||r.hasOverloadedBooleanValue[e]&&false===t}var u=a(function(e){return o(e)+'="'})
var c={children:true,dangerouslySetInnerHTML:true,key:true,ref:true}
var l={}
var d=function(e){if(c.hasOwnProperty(e)&&c[e]||l.hasOwnProperty(e)&&l[e])return
l[e]=true
var t=e.toLowerCase()
var n=r.isCustomAttribute(t)?t:r.getPossibleStandardName.hasOwnProperty(t)?r.getPossibleStandardName[t]:null
i(null==n,"Unknown DOM property "+e+". Did you mean "+n+"?")}
var p={createMarkupForID:function(e){return u(r.ID_ATTRIBUTE_NAME)+o(e)+'"'},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(s(e,t))return""
var n=r.getAttributeName[e]
if(r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&true===t)return o(n)
return u(n)+o(t)+'"'}if(r.isCustomAttribute(e)){if(null==t)return""
return u(e)+o(t)+'"'}d(e)
return null},setValueForProperty:function(e,t,n){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var o=r.getMutationMethod[t]
if(o)o(e,n)
else if(s(t,n))this.deleteValueForProperty(e,t)
else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+n)
else{var a=r.getPropertyName[t]
r.hasSideEffects[t]&&e[a]===n||(e[a]=n)}}else if(r.isCustomAttribute(t))null==n?e.removeAttribute(t):e.setAttribute(t,""+n)
else{d(t)}},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t]
if(n)n(e,void 0)
else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t])
else{var o=r.getPropertyName[t]
var a=r.getDefaultValueForProperty(e.nodeName,o)
r.hasSideEffects[t]&&e[o]===a||(e[o]=a)}}else if(r.isCustomAttribute(t))e.removeAttribute(t)
else{d(t)}}}
t.exports=p},{"./DOMProperty":11,"./escapeTextForBrowser":118,"./memoizeStringOnly":143,"./warning":158}],13:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o=e("./createNodesFromMarkup")
var a=e("./emptyFunction")
var i=e("./getMarkupWrap")
var s=e("./invariant")
var u=/^(<[^ \/>]+)/
var c="data-danger-index"
function l(e){return e.substring(1,e.indexOf(" "))}var d={dangerouslyRenderMarkup:function(e){s(r.canUseDOM,"dangerouslyRenderMarkup(...): Cannot render markup in a Worker thread. This is likely a bug in the framework. Please report immediately.")
var t
var n={}
for(var d=0;d<e.length;d++){s(e[d],"dangerouslyRenderMarkup(...): Missing markup.")
t=l(e[d])
t=i(t)?t:"*"
n[t]=n[t]||[]
n[t][d]=e[d]}var p=[]
var f=0
for(t in n){if(!n.hasOwnProperty(t))continue
var v=n[t]
for(var h in v)if(v.hasOwnProperty(h)){var m=v[h]
v[h]=m.replace(u,"$1 "+c+'="'+h+'" ')}var g=o(v.join(""),a)
for(d=0;d<g.length;++d){var _=g[d]
if(_.hasAttribute&&_.hasAttribute(c)){h=+_.getAttribute(c)
_.removeAttribute(c)
s(!p.hasOwnProperty(h),"Danger: Assigning to an already-occupied result index.")
p[h]=_
f+=1}else{console.error("Danger: Discarding unexpected node:",_)}}}s(f===p.length,"Danger: Did not assign to every index of resultList.")
s(p.length===e.length,"Danger: Expected markup to render %s nodes, but rendered %s.",e.length,p.length)
return p},dangerouslyReplaceNodeWithMarkup:function(e,t){s(r.canUseDOM,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. This is likely a bug in the framework. Please report immediately.")
s(t,"dangerouslyReplaceNodeWithMarkup(...): Missing markup.")
s("html"!==e.tagName.toLowerCase(),"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See renderComponentToString().")
var n=o(t,a)[0]
e.parentNode.replaceChild(n,e)}}
t.exports=d},{"./ExecutionEnvironment":22,"./createNodesFromMarkup":113,"./emptyFunction":116,"./getMarkupWrap":126,"./invariant":134}],14:[function(e,t,n){"use strict"
var r=e("./keyOf")
var o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({CompositionEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})]
t.exports=o},{"./keyOf":141}],15:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPropagators")
var a=e("./SyntheticMouseEvent")
var i=e("./ReactMount")
var s=e("./keyOf")
var u=r.topLevelTypes
var c=i.getFirstReactDOM
var l={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}}
var d=[null,null]
var p={eventTypes:l,extractEvents:function(e,t,n,r){if(e===u.topMouseOver&&(r.relatedTarget||r.fromElement))return null
if(e!==u.topMouseOut&&e!==u.topMouseOver)return null
var s
if(t.window===t)s=t
else{var p=t.ownerDocument
s=p?p.defaultView||p.parentWindow:window}var f,v
if(e===u.topMouseOut){f=t
v=c(r.relatedTarget||r.toElement)||s}else{f=s
v=t}if(f===v)return null
var h=f?i.getID(f):""
var m=v?i.getID(v):""
var g=a.getPooled(l.mouseLeave,h,r)
g.type="mouseleave"
g.target=f
g.relatedTarget=v
var _=a.getPooled(l.mouseEnter,m,r)
_.type="mouseenter"
_.target=v
_.relatedTarget=f
o.accumulateEnterLeaveDispatches(g,_,h,m)
d[0]=g
d[1]=_
return d}}
t.exports=p},{"./EventConstants":16,"./EventPropagators":21,"./ReactMount":67,"./SyntheticMouseEvent":100,"./keyOf":141}],16:[function(e,t,n){"use strict"
var r=e("./keyMirror")
var o=r({bubbled:null,captured:null})
var a=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null})
var i={topLevelTypes:a,PropagationPhases:o}
t.exports=i},{"./keyMirror":140}],17:[function(e,t,n){var r=e("./emptyFunction")
var o={listen:function(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)
return{remove:function(){e.removeEventListener(t,n,false)}}}if(e.attachEvent){e.attachEvent("on"+t,n)
return{remove:function(){e.detachEvent("on"+t,n)}}}},capture:function(e,t,n){if(e.addEventListener){e.addEventListener(t,n,true)
return{remove:function(){e.removeEventListener(t,n,true)}}}console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events.")
return{remove:r}},registerDefault:function(){}}
t.exports=o},{"./emptyFunction":116}],18:[function(e,t,n){"use strict"
var r=e("./EventPluginRegistry")
var o=e("./EventPluginUtils")
var a=e("./accumulate")
var i=e("./forEachAccumulated")
var s=e("./invariant")
var u=e("./isEventSupported")
var c=e("./monitorCodeUse")
var l={}
var d=null
var p=function(e){if(e){var t=o.executeDispatch
var n=r.getPluginModuleForEvent(e)
n&&n.executeDispatch&&(t=n.executeDispatch)
o.executeDispatchesInOrder(e,t)
e.isPersistent()||e.constructor.release(e)}}
var f=null
function v(){var e=!f||!f.traverseTwoPhase||!f.traverseEnterLeave
if(e)throw new Error("InstanceHandle not injected before use!")}var h={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){f=e
v()},getInstanceHandle:function(){v()
return f},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){s(!n||"function"===typeof n,"Expected %s listener to be a function, instead got type %s",t,typeof n)
if("onScroll"===t&&!u("scroll",true)){c("react_no_scroll_event")
console.warn("This browser doesn't support the `onScroll` event")}var r=l[t]||(l[t]={})
r[e]=n},getListener:function(e,t){var n=l[t]
return n&&n[e]},deleteListener:function(e,t){var n=l[t]
n&&delete n[e]},deleteAllListeners:function(e){for(var t in l)delete l[t][e]},extractEvents:function(e,t,n,o){var i
var s=r.plugins
for(var u=0,c=s.length;u<c;u++){var l=s[u]
if(l){var d=l.extractEvents(e,t,n,o)
d&&(i=a(i,d))}}return i},enqueueEvents:function(e){e&&(d=a(d,e))},processEventQueue:function(){var e=d
d=null
i(e,p)
s(!d,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")},__purge:function(){l={}},__getListenerBank:function(){return l}}
t.exports=h},{"./EventPluginRegistry":19,"./EventPluginUtils":20,"./accumulate":106,"./forEachAccumulated":121,"./invariant":134,"./isEventSupported":135,"./monitorCodeUse":148}],19:[function(e,t,n){"use strict"
var r=e("./invariant")
var o=null
var a={}
function i(){if(!o)return
for(var e in a){var t=a[e]
var n=o.indexOf(e)
r(n>-1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e)
if(c.plugins[n])continue
r(t.extractEvents,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e)
c.plugins[n]=t
var i=t.eventTypes
for(var u in i)r(s(i[u],t,u),"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",u,e)}}function s(e,t,n){r(!c.eventNameDispatchConfigs.hasOwnProperty(n),"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n)
c.eventNameDispatchConfigs[n]=e
var o=e.phasedRegistrationNames
if(o){for(var a in o)if(o.hasOwnProperty(a)){var i=o[a]
u(i,t,n)}return true}if(e.registrationName){u(e.registrationName,t,n)
return true}return false}function u(e,t,n){r(!c.registrationNameModules[e],"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e)
c.registrationNameModules[e]=t
c.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var c={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){r(!o,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.")
o=Array.prototype.slice.call(e)
i()},injectEventPluginsByName:function(e){var t=false
for(var n in e){if(!e.hasOwnProperty(n))continue
var o=e[n]
if(!a.hasOwnProperty(n)||a[n]!==o){r(!a[n],"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",n)
a[n]=o
t=true}}t&&i()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig
if(t.registrationName)return c.registrationNameModules[t.registrationName]||null
for(var n in t.phasedRegistrationNames){if(!t.phasedRegistrationNames.hasOwnProperty(n))continue
var r=c.registrationNameModules[t.phasedRegistrationNames[n]]
if(r)return r}return null},_resetEventPlugins:function(){o=null
for(var e in a)a.hasOwnProperty(e)&&delete a[e]
c.plugins.length=0
var t=c.eventNameDispatchConfigs
for(var n in t)t.hasOwnProperty(n)&&delete t[n]
var r=c.registrationNameModules
for(var i in r)r.hasOwnProperty(i)&&delete r[i]}}
t.exports=c},{"./invariant":134}],20:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./invariant")
var a={Mount:null,injectMount:function(e){a.Mount=e
o(e&&e.getNode,"EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode.")}}
var i=r.topLevelTypes
function s(e){return e===i.topMouseUp||e===i.topTouchEnd||e===i.topTouchCancel}function u(e){return e===i.topMouseMove||e===i.topTouchMove}function c(e){return e===i.topMouseDown||e===i.topTouchStart}var l
l=function(e){var t=e._dispatchListeners
var n=e._dispatchIDs
var r=Array.isArray(t)
var a=Array.isArray(n)
var i=a?n.length:n?1:0
var s=r?t.length:t?1:0
o(a===r&&i===s,"EventPluginUtils: Invalid `event`.")}
function d(e,t){var n=e._dispatchListeners
var r=e._dispatchIDs
l(e)
if(Array.isArray(n))for(var o=0;o<n.length;o++){if(e.isPropagationStopped())break
t(e,n[o],r[o])}else n&&t(e,n,r)}function p(e,t,n){e.currentTarget=a.Mount.getNode(n)
var r=t(e,n)
e.currentTarget=null
return r}function f(e,t){d(e,t)
e._dispatchListeners=null
e._dispatchIDs=null}function v(e){var t=e._dispatchListeners
var n=e._dispatchIDs
l(e)
if(Array.isArray(t))for(var r=0;r<t.length;r++){if(e.isPropagationStopped())break
if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n
return null}function h(e){var t=v(e)
e._dispatchIDs=null
e._dispatchListeners=null
return t}function m(e){l(e)
var t=e._dispatchListeners
var n=e._dispatchIDs
o(!Array.isArray(t),"executeDirectDispatch(...): Invalid `event`.")
var r=t?t(e,n):null
e._dispatchListeners=null
e._dispatchIDs=null
return r}function g(e){return!!e._dispatchListeners}var _={isEndish:s,isMoveish:u,isStartish:c,executeDirectDispatch:m,executeDispatch:p,executeDispatchesInOrder:f,executeDispatchesInOrderStopAtTrue:h,hasDispatches:g,injection:a,useTouchEvents:false}
t.exports=_},{"./EventConstants":16,"./invariant":134}],21:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPluginHub")
var a=e("./accumulate")
var i=e("./forEachAccumulated")
var s=r.PropagationPhases
var u=o.getListener
function c(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n]
return u(e,r)}function l(e,t,n){if(!e)throw new Error("Dispatching id must not be null")
var r=t?s.bubbled:s.captured
var o=c(e,n,r)
if(o){n._dispatchListeners=a(n._dispatchListeners,o)
n._dispatchIDs=a(n._dispatchIDs,e)}}function d(e){e&&e.dispatchConfig.phasedRegistrationNames&&o.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,l,e)}function p(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName
var o=u(e,r)
if(o){n._dispatchListeners=a(n._dispatchListeners,o)
n._dispatchIDs=a(n._dispatchIDs,e)}}}function f(e){e&&e.dispatchConfig.registrationName&&p(e.dispatchMarker,null,e)}function v(e){i(e,d)}function h(e,t,n,r){o.injection.getInstanceHandle().traverseEnterLeave(n,r,p,e,t)}function m(e){i(e,f)}var g={accumulateTwoPhaseDispatches:v,accumulateDirectDispatches:m,accumulateEnterLeaveDispatches:h}
t.exports=g},{"./EventConstants":16,"./EventPluginHub":18,"./accumulate":106,"./forEachAccumulated":121}],22:[function(e,t,n){"use strict"
var r=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var o={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r}
t.exports=o},{}],23:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=e("./ExecutionEnvironment")
var a=r.injection.MUST_USE_ATTRIBUTE
var i=r.injection.MUST_USE_PROPERTY
var s=r.injection.HAS_BOOLEAN_VALUE
var u=r.injection.HAS_SIDE_EFFECTS
var c=r.injection.HAS_NUMERIC_VALUE
var l=r.injection.HAS_POSITIVE_NUMERIC_VALUE
var d=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE
var p
if(o.canUseDOM){var f=document.implementation
p=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var v={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:i|s,className:p?a:i,cols:a|l,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:i|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:d,draggable:null,encType:null,form:a,formNoValidate:s,frameBorder:a,height:a,hidden:a|s,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:i,label:null,lang:null,list:null,loop:i|s,max:null,maxLength:a,mediaGroup:null,method:null,min:null,multiple:i|s,muted:i|s,name:null,noValidate:s,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:i|s,rel:null,required:s,role:a,rows:a|l,rowSpan:null,sandbox:null,scope:null,scrollLeft:i,scrolling:null,scrollTop:i,seamless:a|s,selected:i|s,shape:null,size:a|l,span:l,spellCheck:null,src:null,srcDoc:i,srcSet:null,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:i|u,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,property:null},DOMAttributeNames:{className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}}
t.exports=v},{"./DOMProperty":11,"./ExecutionEnvironment":22}],24:[function(e,t,n){"use strict"
var r=e("./ReactLink")
var o=e("./ReactStateSetters")
var a={linkState:function(e){return new r(this.state[e],o.createStateKeySetter(this,e))}}
t.exports=a},{"./ReactLink":65,"./ReactStateSetters":81}],25:[function(e,t,n){"use strict"
var r=e("./ReactPropTypes")
var o=e("./invariant")
var a={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true}
function i(e){o(null==e.props.checkedLink||null==e.props.valueLink,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.")}function s(e){i(e)
o(null==e.props.value&&null==e.props.onChange,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.")}function u(e){i(e)
o(null==e.props.checked&&null==e.props.onChange,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink")}function c(e){this.props.valueLink.requestChange(e.target.value)}function l(e){this.props.checkedLink.requestChange(e.target.checked)}var d={Mixin:{propTypes:{value:function(e,t,n){if(!e[t]||a[e.type]||e.onChange||e.readOnly||e.disabled)return
return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){if(!e[t]||e.onChange||e.readOnly||e.disabled)return
return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:r.func}},getValue:function(e){if(e.props.valueLink){s(e)
return e.props.valueLink.value}return e.props.value},getChecked:function(e){if(e.props.checkedLink){u(e)
return e.props.checkedLink.value}return e.props.checked},getOnChange:function(e){if(e.props.valueLink){s(e)
return c}if(e.props.checkedLink){u(e)
return l}return e.props.onChange}}
t.exports=d},{"./ReactPropTypes":75,"./invariant":134}],26:[function(e,t,n){"use strict"
var r=e("./ReactBrowserEventEmitter")
var o=e("./accumulate")
var a=e("./forEachAccumulated")
var i=e("./invariant")
function s(e){e.remove()}var u={trapBubbledEvent:function(e,t){i(this.isMounted(),"Must be mounted to trap events")
var n=r.trapBubbledEvent(e,t,this.getDOMNode())
this._localEventListeners=o(this._localEventListeners,n)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,s)}}
t.exports=u},{"./ReactBrowserEventEmitter":31,"./accumulate":106,"./forEachAccumulated":121,"./invariant":134}],27:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./emptyFunction")
var a=r.topLevelTypes
var i={eventTypes:null,extractEvents:function(e,t,n,r){if(e===a.topTouchStart){var i=r.target
i&&!i.onclick&&(i.onclick=o)}}}
t.exports=i},{"./EventConstants":16,"./emptyFunction":116}],28:[function(e,t,n){"use strict"
var r=e("./invariant")
var o=function(e){var t=this
if(t.instancePool.length){var n=t.instancePool.pop()
t.call(n,e)
return n}return new t(e)}
var a=function(e,t){var n=this
if(n.instancePool.length){var r=n.instancePool.pop()
n.call(r,e,t)
return r}return new n(e,t)}
var i=function(e,t,n){var r=this
if(r.instancePool.length){var o=r.instancePool.pop()
r.call(o,e,t,n)
return o}return new r(e,t,n)}
var s=function(e,t,n,r,o){var a=this
if(a.instancePool.length){var i=a.instancePool.pop()
a.call(i,e,t,n,r,o)
return i}return new a(e,t,n,r,o)}
var u=function(e){var t=this
r(e instanceof t,"Trying to release an instance into a pool of a different type.")
e.destructor&&e.destructor()
t.instancePool.length<t.poolSize&&t.instancePool.push(e)}
var c=10
var l=o
var d=function(e,t){var n=e
n.instancePool=[]
n.getPooled=t||l
n.poolSize||(n.poolSize=c)
n.release=u
return n}
var p={addPoolingTo:d,oneArgumentPooler:o,twoArgumentPooler:a,threeArgumentPooler:i,fiveArgumentPooler:s}
t.exports=p},{"./invariant":134}],29:[function(e,t,n){"use strict"
var r=e("./DOMPropertyOperations")
var o=e("./EventPluginUtils")
var a=e("./ReactChildren")
var i=e("./ReactComponent")
var s=e("./ReactCompositeComponent")
var u=e("./ReactContext")
var c=e("./ReactCurrentOwner")
var l=e("./ReactDescriptor")
var d=e("./ReactDOM")
var p=e("./ReactDOMComponent")
var f=e("./ReactDefaultInjection")
var v=e("./ReactInstanceHandles")
var h=e("./ReactMount")
var m=e("./ReactMultiChild")
var g=e("./ReactPerf")
var _=e("./ReactPropTypes")
var y=e("./ReactServerRendering")
var w=e("./ReactTextComponent")
var b=e("./onlyChild")
var C=e("./invariant")
var k=e("./mixInto")
var E=e("./merge")
var R=e("./warning")
var M=e("./copyProperties")
var x=e("./instantiateReactComponent")
var D=e("./cloneWithProps")
var T=e("./ReactMarkupChecksum")
var S=e("./ReactServerRenderingTransaction")
var P=e("./cx")
var O=e("./ExecutionEnvironment")
f.inject()
var I={Children:{map:a.map,forEach:a.forEach,count:a.count,only:b},DOM:d,PropTypes:_,initializeTouchEvents:function(e){o.useTouchEvents=e},createClass:s.createClass,createDescriptor:function(e,t,n){var r=Array.prototype.slice.call(arguments,1)
return e.apply(null,r)},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,renderComponent:g.measure("React","renderComponent",h.renderComponent),renderComponentToString:y.renderComponentToString,renderComponentToStaticMarkup:y.renderComponentToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidClass:l.isValidFactory,isValidComponent:l.isValidDescriptor,withContext:u.withContext,__internals:{Component:i,CurrentOwner:c,DOMComponent:p,DOMPropertyOperations:r,InstanceHandles:v,Mount:h,MultiChild:m,TextComponent:w,invariant:C,mixInto:k,merge:E,warning:R,copyProperties:M,instantiateReactComponent:x,cloneWithProps:D,ReactDescriptor:l,ReactMarkupChecksum:T,ReactServerRenderingTransaction:S,cx:P,ExecutionEnvironment:O}}
O=e("./ExecutionEnvironment")
if(O.canUseDOM&&window.top===window.self&&navigator.userAgent.indexOf("Chrome")>-1){console.debug("Download the React DevTools for a better development experience: http://fb.me/react-devtools")
var N=[Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim,Object.create,Object.freeze]
for(var A in N)if(!N[A]){console.error("One or more ES5 shim/shams expected by React are not available: http://fb.me/react-warning-polyfills")
break}}I.version="0.11.0"
t.exports=I},{"./DOMPropertyOperations":12,"./EventPluginUtils":20,"./ExecutionEnvironment":22,"./ReactChildren":34,"./ReactComponent":35,"./ReactCompositeComponent":38,"./ReactContext":39,"./ReactCurrentOwner":40,"./ReactDOM":41,"./ReactDOMComponent":43,"./ReactDefaultInjection":53,"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactMount":67,"./ReactMultiChild":68,"./ReactPerf":71,"./ReactPropTypes":75,"./ReactServerRendering":79,"./ReactTextComponent":83,"./onlyChild":149,"./invariant":134,"./mixInto":147,"./merge":144,"./warning":158,"./copyProperties":110,"./instantiateReactComponent":133,"./cloneWithProps":108,"./ReactMarkupChecksum":66,"./ReactServerRenderingTransaction":80,"./cx":114}],30:[function(e,t,n){"use strict"
var r=e("./ReactEmptyComponent")
var o=e("./ReactMount")
var a=e("./invariant")
var i={getDOMNode:function(){a(this.isMounted(),"getDOMNode(): A component must be mounted to have a DOM node.")
if(r.isNullComponentID(this._rootNodeID))return null
return o.getNode(this._rootNodeID)}}
t.exports=i},{"./ReactEmptyComponent":58,"./ReactMount":67,"./invariant":134}],31:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPluginHub")
var a=e("./EventPluginRegistry")
var i=e("./ReactEventEmitterMixin")
var s=e("./ViewportMetrics")
var u=e("./isEventSupported")
var c=e("./merge")
var l={}
var d=false
var p=0
var f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"}
var v="_reactListenersID"+String(Math.random()).slice(2)
function h(e){if(!Object.prototype.hasOwnProperty.call(e,v)){e[v]=p++
l[e[v]]={}}return l[e[v]]}var m=c(i,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel)
m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!!(m.ReactEventListener&&m.ReactEventListener.isEnabled())},listenTo:function(e,t){var n=t
var o=h(n)
var i=a.registrationNameDependencies[e]
var s=r.topLevelTypes
for(var c=0,l=i.length;c<l;c++){var d=i[c]
if(!(o.hasOwnProperty(d)&&o[d])){if(d===s.topWheel)u("wheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):u("mousewheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):m.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n)
else if(d===s.topScroll)u("scroll",true)?m.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):m.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE)
else if(d===s.topFocus||d===s.topBlur){if(u("focus",true)){m.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n)
m.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)}else if(u("focusin")){m.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n)
m.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)}o[s.topBlur]=true
o[s.topFocus]=true}else f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],n)
o[d]=true}}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues
m.ReactEventListener.monitorScrollValue(e)
d=true}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners})
t.exports=m},{"./EventConstants":16,"./EventPluginHub":18,"./EventPluginRegistry":19,"./ReactEventEmitterMixin":60,"./ViewportMetrics":105,"./isEventSupported":135,"./merge":144}],32:[function(e,t,n){"use strict"
var r=e("./React")
var o=e("./ReactTransitionGroup")
var a=e("./ReactCSSTransitionGroupChild")
var i=r.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:r.PropTypes.string.isRequired,transitionEnter:r.PropTypes.bool,transitionLeave:r.PropTypes.bool},getDefaultProps:function(){return{transitionEnter:true,transitionLeave:true}},_wrapChild:function(e){return a({name:this.props.transitionName,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return this.transferPropsTo(o({childFactory:this._wrapChild},this.props.children))}})
t.exports=i},{"./React":29,"./ReactCSSTransitionGroupChild":33,"./ReactTransitionGroup":86}],33:[function(e,t,n){"use strict"
var r=e("./React")
var o=e("./CSSCore")
var a=e("./ReactTransitionEvents")
var i=e("./onlyChild")
var s=17
var u=5e3
var c=null
c=function(){console.warn("transition(): tried to perform an animation without an animationend or transitionend event after timeout ("+u+"ms). You should either disable this transition in JS or add a CSS animation/transition.")}
var l=r.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode()
var r=this.props.name+"-"+e
var i=r+"-active"
var s=null
var l=function(){clearTimeout(s)
o.removeClass(n,r)
o.removeClass(n,i)
a.removeEndEventListener(n,l)
t&&t()}
a.addEndEventListener(n,l)
o.addClass(n,r)
this.queueClass(i)
s=setTimeout(c,u)},queueClass:function(e){this.classNameQueue.push(e)
this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(o.addClass.bind(o,this.getDOMNode()))
this.classNameQueue.length=0
this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return i(this.props.children)}})
t.exports=l},{"./CSSCore":3,"./React":29,"./ReactTransitionEvents":85,"./onlyChild":149}],34:[function(e,t,n){"use strict"
var r=e("./PooledClass")
var o=e("./traverseAllChildren")
var a=e("./warning")
var i=r.twoArgumentPooler
var s=r.threeArgumentPooler
function u(e,t){this.forEachFunction=e
this.forEachContext=t}r.addPoolingTo(u,i)
function c(e,t,n,r){var o=e
o.forEachFunction.call(o.forEachContext,t,r)}function l(e,t,n){if(null==e)return e
var r=u.getPooled(t,n)
o(e,c,r)
u.release(r)}function d(e,t,n){this.mapResult=e
this.mapFunction=t
this.mapContext=n}r.addPoolingTo(d,s)
function p(e,t,n,r){var o=e
var i=o.mapResult
var s=!i.hasOwnProperty(n)
a(s,"ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n)
if(s){var u=o.mapFunction.call(o.mapContext,t,r)
i[n]=u}}function f(e,t,n){if(null==e)return e
var r={}
var a=d.getPooled(r,t,n)
o(e,p,a)
d.release(a)
return r}function v(e,t,n,r){return null}function h(e,t){return o(e,v,null)}var m={forEach:l,map:f,count:h}
t.exports=m},{"./PooledClass":28,"./traverseAllChildren":156,"./warning":158}],35:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./ReactOwner")
var a=e("./ReactUpdates")
var i=e("./invariant")
var s=e("./keyMirror")
var u=e("./merge")
var c=s({MOUNTED:null,UNMOUNTED:null})
var l=false
var d=null
var p=null
var f={injection:{injectEnvironment:function(e){i(!l,"ReactComponent: injectEnvironment() can only be called once.")
p=e.mountImageIntoNode
d=e.unmountIDFromEnvironment
f.BackendIDOperations=e.BackendIDOperations
l=true}},LifeCycle:c,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===c.MOUNTED},setProps:function(e,t){var n=this._pendingDescriptor||this._descriptor
this.replaceProps(u(n.props,e),t)},replaceProps:function(e,t){i(this.isMounted(),"replaceProps(...): Can only update a mounted component.")
i(0===this._mountDepth,"replaceProps(...): You called `setProps` or `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created.")
this._pendingDescriptor=r.cloneAndReplaceProps(this._pendingDescriptor||this._descriptor,e)
a.enqueueUpdate(this,t)},_setPropsInternal:function(e,t){var n=this._pendingDescriptor||this._descriptor
this._pendingDescriptor=r.cloneAndReplaceProps(n,u(n.props,e))
a.enqueueUpdate(this,t)},construct:function(e){this.props=e.props
this._owner=e._owner
this._lifeCycleState=c.UNMOUNTED
this._pendingCallbacks=null
this._descriptor=e
this._pendingDescriptor=null},mountComponent:function(e,t,n){i(!this.isMounted(),"mountComponent(%s, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing a single component instance in multiple places.",e)
var r=this._descriptor.props
if(null!=r.ref){var a=this._descriptor._owner
o.addComponentAsRefTo(this,r.ref,a)}this._rootNodeID=e
this._lifeCycleState=c.MOUNTED
this._mountDepth=n},unmountComponent:function(){i(this.isMounted(),"unmountComponent(): Can only unmount a mounted component.")
var e=this.props
null!=e.ref&&o.removeComponentAsRefFrom(this,e.ref,this._owner)
d(this._rootNodeID)
this._rootNodeID=null
this._lifeCycleState=c.UNMOUNTED},receiveComponent:function(e,t){i(this.isMounted(),"receiveComponent(...): Can only update a mounted component.")
this._pendingDescriptor=e
this.performUpdateIfNecessary(t)},performUpdateIfNecessary:function(e){if(null==this._pendingDescriptor)return
var t=this._descriptor
var n=this._pendingDescriptor
this._descriptor=n
this.props=n.props
this._owner=n._owner
this._pendingDescriptor=null
this.updateComponent(e,t)},updateComponent:function(e,t){var n=this._descriptor
if(n._owner!==t._owner||n.props.ref!==t.props.ref){null!=t.props.ref&&o.removeComponentAsRefFrom(this,t.props.ref,t._owner)
null!=n.props.ref&&o.addComponentAsRefTo(this,n.props.ref,n._owner)}},mountComponentIntoNode:function(e,t,n){var r=a.ReactReconcileTransaction.getPooled()
r.perform(this._mountComponentIntoNode,this,e,t,r,n)
a.ReactReconcileTransaction.release(r)},_mountComponentIntoNode:function(e,t,n,r){var o=this.mountComponent(e,n,0)
p(o,t,r)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var t=this._owner
if(!t||!t.refs)return null
return t.refs[e]}}}
t.exports=f},{"./ReactDescriptor":56,"./ReactOwner":70,"./ReactUpdates":87,"./invariant":134,"./keyMirror":140,"./merge":144}],36:[function(e,t,n){"use strict"
var r=e("./ReactDOMIDOperations")
var o=e("./ReactMarkupChecksum")
var a=e("./ReactMount")
var i=e("./ReactPerf")
var s=e("./ReactReconcileTransaction")
var u=e("./getReactRootElementInContainer")
var c=e("./invariant")
var l=e("./setInnerHTML")
var d=1
var p=9
var f={ReactReconcileTransaction:s,BackendIDOperations:r,unmountIDFromEnvironment:function(e){a.purgeID(e)},mountImageIntoNode:i.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,t,n){c(t&&(t.nodeType===d||t.nodeType===p),"mountComponentIntoNode(...): Target container is not valid.")
if(n){if(o.canReuseMarkup(e,u(t)))return
c(t.nodeType!==p,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side.")
console.warn("React attempted to use reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server.")}c(t.nodeType!==p,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See renderComponentToString() for server rendering.")
l(t,e)})}
t.exports=f},{"./ReactDOMIDOperations":45,"./ReactMarkupChecksum":66,"./ReactMount":67,"./ReactPerf":71,"./ReactReconcileTransaction":77,"./getReactRootElementInContainer":128,"./invariant":134,"./setInnerHTML":152}],37:[function(e,t,n){"use strict"
var r=e("./shallowEqual")
var o={shouldComponentUpdate:function(e,t){return!r(this.props,e)||!r(this.state,t)}}
t.exports=o},{"./shallowEqual":153}],38:[function(e,t,n){"use strict"
var r=e("./ReactComponent")
var o=e("./ReactContext")
var a=e("./ReactCurrentOwner")
var i=e("./ReactDescriptor")
var s=e("./ReactDescriptorValidator")
var u=e("./ReactEmptyComponent")
var c=e("./ReactErrorUtils")
var l=e("./ReactOwner")
var d=e("./ReactPerf")
var p=e("./ReactPropTransferer")
var f=e("./ReactPropTypeLocations")
var v=e("./ReactPropTypeLocationNames")
var h=e("./ReactUpdates")
var m=e("./instantiateReactComponent")
var g=e("./invariant")
var _=e("./keyMirror")
var y=e("./merge")
var w=e("./mixInto")
var b=e("./monitorCodeUse")
var C=e("./mapObject")
var k=e("./shouldUpdateReactComponent")
var E=e("./warning")
var R=_({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null})
var M=[]
var x={mixins:R.DEFINE_MANY,statics:R.DEFINE_MANY,propTypes:R.DEFINE_MANY,contextTypes:R.DEFINE_MANY,childContextTypes:R.DEFINE_MANY,getDefaultProps:R.DEFINE_MANY_MERGED,getInitialState:R.DEFINE_MANY_MERGED,getChildContext:R.DEFINE_MANY_MERGED,render:R.DEFINE_ONCE,componentWillMount:R.DEFINE_MANY,componentDidMount:R.DEFINE_MANY,componentWillReceiveProps:R.DEFINE_MANY,shouldComponentUpdate:R.DEFINE_ONCE,componentWillUpdate:R.DEFINE_MANY,componentDidUpdate:R.DEFINE_MANY,componentWillUnmount:R.DEFINE_MANY,updateComponent:R.OVERRIDE_BASE}
var D={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)I(e,t[n])},childContextTypes:function(e,t){S(e,t,f.childContext)
e.childContextTypes=y(e.childContextTypes,t)},contextTypes:function(e,t){S(e,t,f.context)
e.contextTypes=y(e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=q(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){S(e,t,f.prop)
e.propTypes=y(e.propTypes,t)},statics:function(e,t){N(e,t)}}
function T(e){var t=e._owner||null
if(t&&t.constructor&&t.constructor.displayName)return" Check the render method of `"+t.constructor.displayName+"`."
return""}function S(e,t,n){for(var r in t)t.hasOwnProperty(r)&&g("function"==typeof t[r],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactCompositeComponent",v[n],r)}function P(e,t){var n=x.hasOwnProperty(t)?x[t]:null
j.hasOwnProperty(t)&&g(n===R.OVERRIDE_BASE,"ReactCompositeComponentInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t)
e.hasOwnProperty(t)&&g(n===R.DEFINE_MANY||n===R.DEFINE_MANY_MERGED,"ReactCompositeComponentInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function O(e){var t=e._compositeLifeCycleState
g(e.isMounted()||t===U.MOUNTING,"replaceState(...): Can only update a mounted or mounting component.")
g(t!==U.RECEIVING_STATE,"replaceState(...): Cannot update during an existing state transition (such as within `render`). This could potentially cause an infinite loop so it is forbidden.")
g(t!==U.UNMOUNTING,"replaceState(...): Cannot update while unmounting component. This usually means you called setState() on an unmounted component.")}function I(e,t){g(!i.isValidFactory(t),"ReactCompositeComponent: You're attempting to use a component class as a mixin. Instead, just use a regular object.")
g(!i.isValidDescriptor(t),"ReactCompositeComponent: You're attempting to use a component as a mixin. Instead, just use a regular object.")
var n=e.prototype
for(var r in t){var o=t[r]
if(!t.hasOwnProperty(r))continue
P(n,r)
if(D.hasOwnProperty(r))D[r](e,o)
else{var a=x.hasOwnProperty(r)
var s=n.hasOwnProperty(r)
var u=o&&o.__reactDontBind
var c="function"===typeof o
var l=c&&!a&&!s&&!u
if(l){n.__reactAutoBindMap||(n.__reactAutoBindMap={})
n.__reactAutoBindMap[r]=o
n[r]=o}else if(s){var d=x[r]
g(a&&(d===R.DEFINE_MANY_MERGED||d===R.DEFINE_MANY),"ReactCompositeComponent: Unexpected spec policy %s for key %s when mixing in component specs.",d,r)
d===R.DEFINE_MANY_MERGED?n[r]=q(n[r],o):d===R.DEFINE_MANY&&(n[r]=L(n[r],o))}else{n[r]=o
"function"===typeof o&&t.displayName&&(n[r].displayName=t.displayName+"_"+r)}}}}function N(e,t){if(!t)return
for(var n in t){var r=t[n]
if(!t.hasOwnProperty(n))continue
var o=n in e
var a=r
if(o){var i=e[n]
var s=typeof i
var u=typeof r
g("function"===s&&"function"===u,"ReactCompositeComponent: You are attempting to define `%s` on your component more than once, but that is only supported for functions, which are chained together. This conflict may be due to a mixin.",n)
a=L(i,r)}e[n]=a}}function A(e,t){g(e&&t&&"object"===typeof e&&"object"===typeof t,"mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects")
C(t,function(t,n){g(void 0===e[n],"mergeObjectsWithNoDuplicateKeys(): Tried to merge two objects with the same key: %s",n)
e[n]=t})
return e}function q(e,t){return function(){var n=e.apply(this,arguments)
var r=t.apply(this,arguments)
if(null==n)return r
if(null==r)return n
return A(n,r)}}function L(e,t){return function(){e.apply(this,arguments)
t.apply(this,arguments)}}var U=_({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null,RECEIVING_STATE:null})
var j={construct:function(e){r.Mixin.construct.apply(this,arguments)
l.Mixin.construct.apply(this,arguments)
this.state=null
this._pendingState=null
this.context=null
this._compositeLifeCycleState=null},isMounted:function(){return r.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==U.MOUNTING},mountComponent:d.measure("ReactCompositeComponent","mountComponent",function(e,t,n){r.Mixin.mountComponent.call(this,e,t,n)
this._compositeLifeCycleState=U.MOUNTING
this.__reactAutoBindMap&&this._bindAutoBindMethods()
this.context=this._processContext(this._descriptor._context)
this.props=this._processProps(this.props)
this.state=this.getInitialState?this.getInitialState():null
g("object"===typeof this.state&&!Array.isArray(this.state),"%s.getInitialState(): must return an object or null",this.constructor.displayName||"ReactCompositeComponent")
this._pendingState=null
this._pendingForceUpdate=false
if(this.componentWillMount){this.componentWillMount()
if(this._pendingState){this.state=this._pendingState
this._pendingState=null}}this._renderedComponent=m(this._renderValidatedComponent())
this._compositeLifeCycleState=null
var o=this._renderedComponent.mountComponent(e,t,n+1)
this.componentDidMount&&t.getReactMountReady().enqueue(this.componentDidMount,this)
return o}),unmountComponent:function(){this._compositeLifeCycleState=U.UNMOUNTING
this.componentWillUnmount&&this.componentWillUnmount()
this._compositeLifeCycleState=null
this._renderedComponent.unmountComponent()
this._renderedComponent=null
r.Mixin.unmountComponent.call(this)},setState:function(e,t){g("object"===typeof e||null==e,"setState(...): takes an object of state variables to update.")
E(null!=e,"setState(...): You passed an undefined or null state object; instead, use forceUpdate().")
this.replaceState(y(this._pendingState||this.state,e),t)},replaceState:function(e,t){O(this)
this._pendingState=e
h.enqueueUpdate(this,t)},_processContext:function(e){var t=null
var n=this.constructor.contextTypes
if(n){t={}
for(var r in n)t[r]=e[r]
this._checkPropTypes(n,t,f.context)}return t},_processChildContext:function(e){var t=this.getChildContext&&this.getChildContext()
var n=this.constructor.displayName||"ReactCompositeComponent"
if(t){g("object"===typeof this.constructor.childContextTypes,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",n)
this._checkPropTypes(this.constructor.childContextTypes,t,f.childContext)
for(var r in t)g(r in this.constructor.childContextTypes,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',n,r)
return y(e,t)}return e},_processProps:function(e){var t=this.constructor.defaultProps
var n
if(t){n=y(e)
for(var r in t)"undefined"===typeof n[r]&&(n[r]=t[r])}else n=e
var o=this.constructor.propTypes
o&&this._checkPropTypes(o,n,f.prop)
return n},_checkPropTypes:function(e,t,n){var r=this.constructor.displayName
for(var o in e)if(e.hasOwnProperty(o)){var a=e[o](t,o,r,n)
if(a instanceof Error){var i=T(this)
E(false,a.message+i)}}},performUpdateIfNecessary:function(e){var t=this._compositeLifeCycleState
if(t===U.MOUNTING||t===U.RECEIVING_PROPS)return
if(null==this._pendingDescriptor&&null==this._pendingState&&!this._pendingForceUpdate)return
var n=this.context
var r=this.props
var o=this._descriptor
if(null!=this._pendingDescriptor){o=this._pendingDescriptor
n=this._processContext(o._context)
r=this._processProps(o.props)
this._pendingDescriptor=null
this._compositeLifeCycleState=U.RECEIVING_PROPS
this.componentWillReceiveProps&&this.componentWillReceiveProps(r,n)}this._compositeLifeCycleState=U.RECEIVING_STATE
var a=this._pendingState||this.state
this._pendingState=null
try{var i=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(r,a,n)
"undefined"===typeof i&&console.warn((this.constructor.displayName||"ReactCompositeComponent")+".shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.")
if(i){this._pendingForceUpdate=false
this._performComponentUpdate(o,r,a,n,e)}else{this._descriptor=o
this.props=r
this.state=a
this.context=n
this._owner=o._owner}}finally{this._compositeLifeCycleState=null}},_performComponentUpdate:function(e,t,n,r,o){var a=this._descriptor
var i=this.props
var s=this.state
var u=this.context
this.componentWillUpdate&&this.componentWillUpdate(t,n,r)
this._descriptor=e
this.props=t
this.state=n
this.context=r
this._owner=e._owner
this.updateComponent(o,a)
this.componentDidUpdate&&o.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,i,s,u),this)},receiveComponent:function(e,t){if(e===this._descriptor&&null!=e._owner)return
r.Mixin.receiveComponent.call(this,e,t)},updateComponent:d.measure("ReactCompositeComponent","updateComponent",function(e,t){r.Mixin.updateComponent.call(this,e,t)
var n=this._renderedComponent
var o=n._descriptor
var a=this._renderValidatedComponent()
if(k(o,a))n.receiveComponent(a,e)
else{var i=this._rootNodeID
var s=n._rootNodeID
n.unmountComponent()
this._renderedComponent=m(a)
var u=this._renderedComponent.mountComponent(i,e,this._mountDepth+1)
r.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(s,u)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState
g(this.isMounted()||t===U.MOUNTING,"forceUpdate(...): Can only force an update on mounted or mounting components.")
g(t!==U.RECEIVING_STATE&&t!==U.UNMOUNTING,"forceUpdate(...): Cannot force an update while unmounting component or during an existing state transition (such as within `render`).")
this._pendingForceUpdate=true
h.enqueueUpdate(this,e)},_renderValidatedComponent:d.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e
var t=o.current
o.current=this._processChildContext(this._descriptor._context)
a.current=this
try{e=this.render()
if(null===e||false===e){e=u.getEmptyComponent()
u.registerNullComponentID(this._rootNodeID)}else u.deregisterNullComponentID(this._rootNodeID)}finally{o.current=t
a.current=null}g(i.isValidDescriptor(e),"%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",this.constructor.displayName||"ReactCompositeComponent")
return e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap){if(!this.__reactAutoBindMap.hasOwnProperty(e))continue
var t=this.__reactAutoBindMap[e]
this[e]=this._bindAutoBindMethod(c.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this
var n=function(){return e.apply(t,arguments)}
n.__reactBoundContext=t
n.__reactBoundMethod=e
n.__reactBoundArguments=null
var r=t.constructor.displayName
var o=n.bind
n.bind=function(a){var i=Array.prototype.slice.call(arguments,1)
if(a!==t&&null!==a){b("react_bind_warning",{component:r})
console.warn("bind(): React component methods may only be bound to the component instance. See "+r)}else if(!i.length){b("react_bind_warning",{component:r})
console.warn("bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See "+r)
return n}var s=o.apply(n,arguments)
s.__reactBoundContext=t
s.__reactBoundMethod=e
s.__reactBoundArguments=i
return s}
return n}}
var z=function(){}
w(z,r.Mixin)
w(z,l.Mixin)
w(z,p.Mixin)
w(z,j)
var B={LifeCycle:U,Base:z,createClass:function(e){var t=function(e,t){this.construct(e,t)}
t.prototype=new z
t.prototype.constructor=t
M.forEach(I.bind(null,t))
I(t,e)
t.getDefaultProps&&(t.defaultProps=t.getDefaultProps())
g(t.prototype.render,"createClass(...): Class specification must implement a `render` method.")
if(t.prototype.componentShouldUpdate){b("react_component_should_update_warning",{component:e.displayName})
console.warn((e.displayName||"A component")+" has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.")}for(var n in x)t.prototype[n]||(t.prototype[n]=null)
var r=i.createFactory(t)
return s.createFactory(r,t.propTypes,t.contextTypes)},injection:{injectMixin:function(e){M.push(e)}}}
t.exports=B},{"./ReactComponent":35,"./ReactContext":39,"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactDescriptorValidator":57,"./ReactEmptyComponent":58,"./ReactErrorUtils":59,"./ReactOwner":70,"./ReactPerf":71,"./ReactPropTransferer":72,"./ReactPropTypeLocationNames":73,"./ReactPropTypeLocations":74,"./ReactUpdates":87,"./instantiateReactComponent":133,"./invariant":134,"./keyMirror":140,"./mapObject":142,"./merge":144,"./mixInto":147,"./monitorCodeUse":148,"./shouldUpdateReactComponent":154,"./warning":158}],39:[function(e,t,n){"use strict"
var r=e("./merge")
var o={current:{},withContext:function(e,t){var n
var a=o.current
o.current=r(a,e)
try{n=t()}finally{o.current=a}return n}}
t.exports=o},{"./merge":144}],40:[function(e,t,n){"use strict"
var r={current:null}
t.exports=r},{}],41:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./ReactDescriptorValidator")
var a=e("./ReactDOMComponent")
var i=e("./mergeInto")
var s=e("./mapObject")
function u(e,t){var n=function(e){this.construct(e)}
n.prototype=new a(t,e)
n.prototype.constructor=n
n.displayName=t
var i=r.createFactory(n)
return o.createFactory(i)}var c=s({a:false,abbr:false,address:false,area:true,article:false,aside:false,audio:false,b:false,base:true,bdi:false,bdo:false,big:false,blockquote:false,body:false,br:true,button:false,canvas:false,caption:false,cite:false,code:false,col:true,colgroup:false,data:false,datalist:false,dd:false,del:false,details:false,dfn:false,div:false,dl:false,dt:false,em:false,embed:true,fieldset:false,figcaption:false,figure:false,footer:false,form:false,h1:false,h2:false,h3:false,h4:false,h5:false,h6:false,head:false,header:false,hr:true,html:false,i:false,iframe:false,img:true,input:true,ins:false,kbd:false,keygen:true,label:false,legend:false,li:false,link:true,main:false,map:false,mark:false,menu:false,menuitem:false,meta:true,meter:false,nav:false,noscript:false,object:false,ol:false,optgroup:false,option:false,output:false,p:false,param:true,pre:false,progress:false,q:false,rp:false,rt:false,ruby:false,s:false,samp:false,script:false,section:false,select:false,small:false,source:true,span:false,strong:false,style:false,sub:false,summary:false,sup:false,table:false,tbody:false,td:false,textarea:false,tfoot:false,th:false,thead:false,time:false,title:false,tr:false,track:true,u:false,ul:false,var:false,video:false,wbr:true,circle:false,defs:false,ellipse:false,g:false,line:false,linearGradient:false,mask:false,path:false,pattern:false,polygon:false,polyline:false,radialGradient:false,rect:false,stop:false,svg:false,text:false,tspan:false},u)
var l={injectComponentClasses:function(e){i(c,e)}}
c.injection=l
t.exports=c},{"./ReactDOMComponent":43,"./ReactDescriptor":56,"./ReactDescriptorValidator":57,"./mapObject":142,"./mergeInto":146}],42:[function(e,t,n){"use strict"
var r=e("./AutoFocusMixin")
var o=e("./ReactBrowserComponentMixin")
var a=e("./ReactCompositeComponent")
var i=e("./ReactDOM")
var s=e("./keyMirror")
var u=i.button
var c=s({onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true})
var l=a.createClass({displayName:"ReactDOMButton",mixins:[r,o],render:function(){var e={}
for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&c[t]||(e[t]=this.props[t])
return u(e,this.props.children)}})
t.exports=l},{"./AutoFocusMixin":1,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./keyMirror":140}],43:[function(e,t,n){"use strict"
var r=e("./CSSPropertyOperations")
var o=e("./DOMProperty")
var a=e("./DOMPropertyOperations")
var i=e("./ReactBrowserComponentMixin")
var s=e("./ReactComponent")
var u=e("./ReactBrowserEventEmitter")
var c=e("./ReactMount")
var l=e("./ReactMultiChild")
var d=e("./ReactPerf")
var p=e("./escapeTextForBrowser")
var f=e("./invariant")
var v=e("./keyOf")
var h=e("./merge")
var m=e("./mixInto")
var g=u.deleteListener
var _=u.listenTo
var y=u.registrationNameModules
var w={string:true,number:true}
var b=v({style:null})
var C=1
function k(e){if(!e)return
f(null==e.children||null==e.dangerouslySetInnerHTML,"Can only set one of `children` or `props.dangerouslySetInnerHTML`.")
f(null==e.style||"object"===typeof e.style,"The `style` prop expects a mapping from style properties to values, not a string.")}function E(e,t,n,r){var o=c.findReactContainerForID(e)
if(o){var a=o.nodeType===C?o.ownerDocument:o
_(t,a)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function R(e,t){this._tagOpen="<"+e
this._tagClose=t?"":"</"+e+">"
this.tagName=e.toUpperCase()}R.Mixin={mountComponent:d.measure("ReactDOMComponent","mountComponent",function(e,t,n){s.Mixin.mountComponent.call(this,e,t,n)
k(this.props)
return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+this._tagClose}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props
var n=this._tagOpen
for(var o in t){if(!t.hasOwnProperty(o))continue
var i=t[o]
if(null==i)continue
if(y.hasOwnProperty(o))E(this._rootNodeID,o,i,e)
else{if(o===b){i&&(i=t.style=h(t.style))
i=r.createMarkupForStyles(i)}var s=a.createMarkupForProperty(o,i)
s&&(n+=" "+s)}}if(e.renderToStaticMarkup)return n+">"
var u=a.createMarkupForID(this._rootNodeID)
return n+" "+u+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML
if(null!=t){if(null!=t.__html)return t.__html}else{var n=w[typeof this.props.children]?this.props.children:null
var r=null!=n?null:this.props.children
if(null!=n)return p(n)
if(null!=r){var o=this.mountChildren(r,e)
return o.join("")}}return""},receiveComponent:function(e,t){if(e===this._descriptor&&null!=e._owner)return
s.Mixin.receiveComponent.call(this,e,t)},updateComponent:d.measure("ReactDOMComponent","updateComponent",function(e,t){k(this._descriptor.props)
s.Mixin.updateComponent.call(this,e,t)
this._updateDOMProperties(t.props,e)
this._updateDOMChildren(t.props,e)}),_updateDOMProperties:function(e,t){var n=this.props
var r
var a
var i
for(r in e){if(n.hasOwnProperty(r)||!e.hasOwnProperty(r))continue
if(r===b){var u=e[r]
for(a in u)if(u.hasOwnProperty(a)){i=i||{}
i[a]=""}}else y.hasOwnProperty(r)?g(this._rootNodeID,r):(o.isStandardName[r]||o.isCustomAttribute(r))&&s.BackendIDOperations.deletePropertyByID(this._rootNodeID,r)}for(r in n){var c=n[r]
var l=e[r]
if(!n.hasOwnProperty(r)||c===l)continue
if(r===b){c&&(c=n.style=h(c))
if(l){for(a in l)if(l.hasOwnProperty(a)&&(!c||!c.hasOwnProperty(a))){i=i||{}
i[a]=""}for(a in c)if(c.hasOwnProperty(a)&&l[a]!==c[a]){i=i||{}
i[a]=c[a]}}else i=c}else y.hasOwnProperty(r)?E(this._rootNodeID,r,c,t):(o.isStandardName[r]||o.isCustomAttribute(r))&&s.BackendIDOperations.updatePropertyByID(this._rootNodeID,r,c)}i&&s.BackendIDOperations.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t){var n=this.props
var r=w[typeof e.children]?e.children:null
var o=w[typeof n.children]?n.children:null
var a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html
var i=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html
var u=null!=r?null:e.children
var c=null!=o?null:n.children
var l=null!=r||null!=a
var d=null!=o||null!=i
null!=u&&null==c?this.updateChildren(null,t):l&&!d&&this.updateTextContent("")
null!=o?r!==o&&this.updateTextContent(""+o):null!=i?a!==i&&s.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,i):null!=c&&this.updateChildren(c,t)},unmountComponent:function(){this.unmountChildren()
u.deleteAllListeners(this._rootNodeID)
s.Mixin.unmountComponent.call(this)}}
m(R,s.Mixin)
m(R,R.Mixin)
m(R,l.Mixin)
m(R,i)
t.exports=R},{"./CSSPropertyOperations":5,"./DOMProperty":11,"./DOMPropertyOperations":12,"./ReactBrowserComponentMixin":30,"./ReactBrowserEventEmitter":31,"./ReactComponent":35,"./ReactMount":67,"./ReactMultiChild":68,"./ReactPerf":71,"./escapeTextForBrowser":118,"./invariant":134,"./keyOf":141,"./merge":144,"./mixInto":147}],44:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./LocalEventTrapMixin")
var a=e("./ReactBrowserComponentMixin")
var i=e("./ReactCompositeComponent")
var s=e("./ReactDOM")
var u=s.form
var c=i.createClass({displayName:"ReactDOMForm",mixins:[a,o],render:function(){return this.transferPropsTo(u(null,this.props.children))},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset")
this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}})
t.exports=c},{"./EventConstants":16,"./LocalEventTrapMixin":26,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41}],45:[function(e,t,n){"use strict"
var r=e("./CSSPropertyOperations")
var o=e("./DOMChildrenOperations")
var a=e("./DOMPropertyOperations")
var i=e("./ReactMount")
var s=e("./ReactPerf")
var u=e("./invariant")
var c=e("./setInnerHTML")
var l={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."}
var d={updatePropertyByID:s.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,n){var r=i.getNode(e)
u(!l.hasOwnProperty(t),"updatePropertyByID(...): %s",l[t])
null!=n?a.setValueForProperty(r,t,n):a.deleteValueForProperty(r,t)}),deletePropertyByID:s.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,n){var r=i.getNode(e)
u(!l.hasOwnProperty(t),"updatePropertyByID(...): %s",l[t])
a.deleteValueForProperty(r,t,n)}),updateStylesByID:s.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var n=i.getNode(e)
r.setValueForStyles(n,t)}),updateInnerHTMLByID:s.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var n=i.getNode(e)
c(n,t)}),updateTextContentByID:s.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var n=i.getNode(e)
o.updateTextContent(n,t)}),dangerouslyReplaceNodeWithMarkupByID:s.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var n=i.getNode(e)
o.dangerouslyReplaceNodeWithMarkup(n,t)}),dangerouslyProcessChildrenUpdates:s.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID)
o.processUpdates(e,t)})}
t.exports=d},{"./CSSPropertyOperations":5,"./DOMChildrenOperations":10,"./DOMPropertyOperations":12,"./ReactMount":67,"./ReactPerf":71,"./invariant":134,"./setInnerHTML":152}],46:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./LocalEventTrapMixin")
var a=e("./ReactBrowserComponentMixin")
var i=e("./ReactCompositeComponent")
var s=e("./ReactDOM")
var u=s.img
var c=i.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[a,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")
this.trapBubbledEvent(r.topLevelTypes.topError,"error")}})
t.exports=c},{"./EventConstants":16,"./LocalEventTrapMixin":26,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41}],47:[function(e,t,n){"use strict"
var r=e("./AutoFocusMixin")
var o=e("./DOMPropertyOperations")
var a=e("./LinkedValueUtils")
var i=e("./ReactBrowserComponentMixin")
var s=e("./ReactCompositeComponent")
var u=e("./ReactDOM")
var c=e("./ReactMount")
var l=e("./invariant")
var d=e("./merge")
var p=u.input
var f={}
var v=s.createClass({displayName:"ReactDOMInput",mixins:[r,a.Mixin,i],getInitialState:function(){var e=this.props.defaultValue
return{checked:this.props.defaultChecked||false,value:null!=e?e:null}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=d(this.props)
e.defaultChecked=null
e.defaultValue=null
var t=a.getValue(this)
e.value=null!=t?t:this.state.value
var n=a.getChecked(this)
e.checked=null!=n?n:this.state.checked
e.onChange=this._handleChange
return p(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode())
f[e]=this},componentWillUnmount:function(){var e=this.getDOMNode()
var t=c.getID(e)
delete f[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode()
null!=this.props.checked&&o.setValueForProperty(r,"checked",this.props.checked||false)
var i=a.getValue(this)
null!=i&&o.setValueForProperty(r,"value",""+i)},_handleChange:function(e){var t
var n=a.getOnChange(this)
if(n){this._isChanging=true
t=n.call(this,e)
this._isChanging=false}this.setState({checked:e.target.checked,value:e.target.value})
var r=this.props.name
if("radio"===this.props.type&&null!=r){var o=this.getDOMNode()
var i=o
while(i.parentNode)i=i.parentNode
var s=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]')
for(var u=0,d=s.length;u<d;u++){var p=s[u]
if(p===o||p.form!==o.form)continue
var v=c.getID(p)
l(v,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.")
var h=f[v]
l(h,"ReactDOMInput: Unknown radio button ID %s.",v)
h.setState({checked:false})}}return t}})
t.exports=v},{"./AutoFocusMixin":1,"./DOMPropertyOperations":12,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./ReactMount":67,"./invariant":134,"./merge":144}],48:[function(e,t,n){"use strict"
var r=e("./ReactBrowserComponentMixin")
var o=e("./ReactCompositeComponent")
var a=e("./ReactDOM")
var i=e("./warning")
var s=a.option
var u=o.createClass({displayName:"ReactDOMOption",mixins:[r],componentWillMount:function(){i(null==this.props.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.")},render:function(){return s(this.props,this.props.children)}})
t.exports=u},{"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./warning":158}],49:[function(e,t,n){"use strict"
var r=e("./AutoFocusMixin")
var o=e("./LinkedValueUtils")
var a=e("./ReactBrowserComponentMixin")
var i=e("./ReactCompositeComponent")
var s=e("./ReactDOM")
var u=e("./merge")
var c=s.select
function l(e,t,n){if(null==e[t])return
if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function d(e,t){var n=e.props.multiple
var r=null!=t?t:e.state.value
var o=e.getDOMNode().options
var a,i,s
if(n){a={}
for(i=0,s=r.length;i<s;++i)a[""+r[i]]=true}else a=""+r
for(i=0,s=o.length;i<s;i++){var u=n?a.hasOwnProperty(o[i].value):o[i].value===a
u!==o[i].selected&&(o[i].selected=u)}}var p=i.createClass({displayName:"ReactDOMSelect",mixins:[r,o.Mixin,a],propTypes:{defaultValue:l,value:l},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=u(this.props)
e.onChange=this._handleChange
e.value=null
return c(e,this.props.children)},componentDidMount:function(){d(this,o.getValue(this))},componentDidUpdate:function(e){var t=o.getValue(this)
var n=!!e.multiple
var r=!!this.props.multiple
null==t&&n===r||d(this,t)},_handleChange:function(e){var t
var n=o.getOnChange(this)
if(n){this._isChanging=true
t=n.call(this,e)
this._isChanging=false}var r
if(this.props.multiple){r=[]
var a=e.target.options
for(var i=0,s=a.length;i<s;i++)a[i].selected&&r.push(a[i].value)}else r=e.target.value
this.setState({value:r})
return t}})
t.exports=p},{"./AutoFocusMixin":1,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./merge":144}],50:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o=e("./getNodeForCharacterOffset")
var a=e("./getTextContentAccessor")
function i(e,t,n,r){return e===n&&t===r}function s(e){var t=document.selection
var n=t.createRange()
var r=n.text.length
var o=n.duplicate()
o.moveToElementText(e)
o.setEndPoint("EndToStart",n)
var a=o.text.length
var i=a+r
return{start:a,end:i}}function u(e){var t=window.getSelection()
if(0===t.rangeCount)return null
var n=t.anchorNode
var r=t.anchorOffset
var o=t.focusNode
var a=t.focusOffset
var s=t.getRangeAt(0)
var u=i(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset)
var c=u?0:s.toString().length
var l=s.cloneRange()
l.selectNodeContents(e)
l.setEnd(s.startContainer,s.startOffset)
var d=i(l.startContainer,l.startOffset,l.endContainer,l.endOffset)
var p=d?0:l.toString().length
var f=p+c
var v=document.createRange()
v.setStart(n,r)
v.setEnd(o,a)
var h=v.collapsed
v.detach()
return{start:h?f:p,end:h?p:f}}function c(e,t){var n=document.selection.createRange().duplicate()
var r,o
if("undefined"===typeof t.end){r=t.start
o=r}else if(t.start>t.end){r=t.end
o=t.start}else{r=t.start
o=t.end}n.moveToElementText(e)
n.moveStart("character",r)
n.setEndPoint("EndToStart",n)
n.moveEnd("character",o-r)
n.select()}function l(e,t){var n=window.getSelection()
var r=e[a()].length
var i=Math.min(t.start,r)
var s="undefined"===typeof t.end?i:Math.min(t.end,r)
if(!n.extend&&i>s){var u=s
s=i
i=u}var c=o(e,i)
var l=o(e,s)
if(c&&l){var d=document.createRange()
d.setStart(c.node,c.offset)
n.removeAllRanges()
if(i>s){n.addRange(d)
n.extend(l.node,l.offset)}else{d.setEnd(l.node,l.offset)
n.addRange(d)}d.detach()}}var d=r.canUseDOM&&document.selection
var p={getOffsets:d?s:u,setOffsets:d?c:l}
t.exports=p},{"./ExecutionEnvironment":22,"./getNodeForCharacterOffset":127,"./getTextContentAccessor":129}],51:[function(e,t,n){"use strict"
var r=e("./AutoFocusMixin")
var o=e("./DOMPropertyOperations")
var a=e("./LinkedValueUtils")
var i=e("./ReactBrowserComponentMixin")
var s=e("./ReactCompositeComponent")
var u=e("./ReactDOM")
var c=e("./invariant")
var l=e("./merge")
var d=e("./warning")
var p=u.textarea
var f=s.createClass({displayName:"ReactDOMTextarea",mixins:[r,a.Mixin,i],getInitialState:function(){var e=this.props.defaultValue
var t=this.props.children
if(null!=t){d(false,"Use the `defaultValue` or `value` props instead of setting children on <textarea>.")
c(null==e,"If you supply `defaultValue` on a <textarea>, do not pass children.")
if(Array.isArray(t)){c(t.length<=1,"<textarea> can only have at most one child.")
t=t[0]}e=""+t}null==e&&(e="")
var n=a.getValue(this)
return{initialValue:""+(null!=n?n:e)}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=l(this.props)
c(null==e.dangerouslySetInnerHTML,"`dangerouslySetInnerHTML` does not make sense on <textarea>.")
e.defaultValue=null
e.value=null
e.onChange=this._handleChange
return p(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this)
if(null!=r){var i=this.getDOMNode()
o.setValueForProperty(i,"value",""+r)}},_handleChange:function(e){var t
var n=a.getOnChange(this)
if(n){this._isChanging=true
t=n.call(this,e)
this._isChanging=false}this.setState({value:e.target.value})
return t}})
t.exports=f},{"./AutoFocusMixin":1,"./DOMPropertyOperations":12,"./LinkedValueUtils":25,"./ReactBrowserComponentMixin":30,"./ReactCompositeComponent":38,"./ReactDOM":41,"./invariant":134,"./merge":144,"./warning":158}],52:[function(e,t,n){"use strict"
var r=e("./ReactUpdates")
var o=e("./Transaction")
var a=e("./emptyFunction")
var i=e("./mixInto")
var s={initialize:a,close:function(){p.isBatchingUpdates=false}}
var u={initialize:a,close:r.flushBatchedUpdates.bind(r)}
var c=[u,s]
function l(){this.reinitializeTransaction()}i(l,o.Mixin)
i(l,{getTransactionWrappers:function(){return c}})
var d=new l
var p={isBatchingUpdates:false,batchedUpdates:function(e,t,n){var r=p.isBatchingUpdates
p.isBatchingUpdates=true
r?e(t,n):d.perform(e,null,t,n)}}
t.exports=p},{"./ReactUpdates":87,"./Transaction":104,"./emptyFunction":116,"./mixInto":147}],53:[function(e,t,n){"use strict"
var r=e("./BeforeInputEventPlugin")
var o=e("./ChangeEventPlugin")
var a=e("./ClientReactRootIndex")
var i=e("./CompositionEventPlugin")
var s=e("./DefaultEventPluginOrder")
var u=e("./EnterLeaveEventPlugin")
var c=e("./ExecutionEnvironment")
var l=e("./HTMLDOMPropertyConfig")
var d=e("./MobileSafariClickEventPlugin")
var p=e("./ReactBrowserComponentMixin")
var f=e("./ReactComponentBrowserEnvironment")
var v=e("./ReactDefaultBatchingStrategy")
var h=e("./ReactDOM")
var m=e("./ReactDOMButton")
var g=e("./ReactDOMForm")
var _=e("./ReactDOMImg")
var y=e("./ReactDOMInput")
var w=e("./ReactDOMOption")
var b=e("./ReactDOMSelect")
var C=e("./ReactDOMTextarea")
var k=e("./ReactEventListener")
var E=e("./ReactInjection")
var R=e("./ReactInstanceHandles")
var M=e("./ReactMount")
var x=e("./SelectEventPlugin")
var D=e("./ServerReactRootIndex")
var T=e("./SimpleEventPlugin")
var S=e("./SVGDOMPropertyConfig")
var P=e("./createFullPageComponent")
function O(){E.EventEmitter.injectReactEventListener(k)
E.EventPluginHub.injectEventPluginOrder(s)
E.EventPluginHub.injectInstanceHandle(R)
E.EventPluginHub.injectMount(M)
E.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:T,EnterLeaveEventPlugin:u,ChangeEventPlugin:o,CompositionEventPlugin:i,MobileSafariClickEventPlugin:d,SelectEventPlugin:x,BeforeInputEventPlugin:r})
E.DOM.injectComponentClasses({button:m,form:g,img:_,input:y,option:w,select:b,textarea:C,html:P(h.html),head:P(h.head),body:P(h.body)})
E.CompositeComponent.injectMixin(p)
E.DOMProperty.injectDOMPropertyConfig(l)
E.DOMProperty.injectDOMPropertyConfig(S)
E.EmptyComponent.injectEmptyComponent(h.noscript)
E.Updates.injectReconcileTransaction(f.ReactReconcileTransaction)
E.Updates.injectBatchingStrategy(v)
E.RootIndex.injectCreateReactRootIndex(c.canUseDOM?a.createReactRootIndex:D.createReactRootIndex)
E.Component.injectEnvironment(f)
var t=c.canUseDOM&&window.location.href||""
if(/[?&]react_perf\b/.test(t)){var n=e("./ReactDefaultPerf")
n.start()}}t.exports={inject:O}},{"./BeforeInputEventPlugin":2,"./ChangeEventPlugin":7,"./ClientReactRootIndex":8,"./CompositionEventPlugin":9,"./DefaultEventPluginOrder":14,"./EnterLeaveEventPlugin":15,"./ExecutionEnvironment":22,"./HTMLDOMPropertyConfig":23,"./MobileSafariClickEventPlugin":27,"./ReactBrowserComponentMixin":30,"./ReactComponentBrowserEnvironment":36,"./ReactDOM":41,"./ReactDOMButton":42,"./ReactDOMForm":44,"./ReactDOMImg":46,"./ReactDOMInput":47,"./ReactDOMOption":48,"./ReactDOMSelect":49,"./ReactDOMTextarea":51,"./ReactDefaultBatchingStrategy":52,"./ReactDefaultPerf":54,"./ReactEventListener":61,"./ReactInjection":62,"./ReactInstanceHandles":64,"./ReactMount":67,"./SVGDOMPropertyConfig":89,"./SelectEventPlugin":90,"./ServerReactRootIndex":91,"./SimpleEventPlugin":92,"./createFullPageComponent":112}],54:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=e("./ReactDefaultPerfAnalysis")
var a=e("./ReactMount")
var i=e("./ReactPerf")
var s=e("./performanceNow")
function u(e){return Math.floor(100*e)/100}function c(e,t,n){e[t]=(e[t]||0)+n}var l={_allMeasurements:[],_mountStack:[0],_injected:false,start:function(){l._injected||i.injection.injectMeasure(l.measure)
l._allMeasurements.length=0
i.enableMeasure=true},stop:function(){i.enableMeasure=false},getLastMeasurements:function(){return l._allMeasurements},printExclusive:function(e){e=e||l._allMeasurements
var t=o.getExclusiveSummary(e)
console.table(t.map(function(e){return{"Component class name":e.componentName,"Total inclusive time (ms)":u(e.inclusive),"Exclusive mount time (ms)":u(e.exclusive),"Exclusive render time (ms)":u(e.render),"Mount time per instance (ms)":u(e.exclusive/e.count),"Render time per instance (ms)":u(e.render/e.count),Instances:e.count}}))},printInclusive:function(e){e=e||l._allMeasurements
var t=o.getInclusiveSummary(e)
console.table(t.map(function(e){return{"Owner > component":e.componentName,"Inclusive time (ms)":u(e.time),Instances:e.count}}))
console.log("Total time:",o.getTotalTime(e).toFixed(2)+" ms")},printWasted:function(e){e=e||l._allMeasurements
var t=o.getInclusiveSummary(e,true)
console.table(t.map(function(e){return{"Owner > component":e.componentName,"Wasted time (ms)":e.time,Instances:e.count}}))
console.log("Total time:",o.getTotalTime(e).toFixed(2)+" ms")},printDOM:function(e){e=e||l._allMeasurements
var t=o.getDOMSummary(e)
console.table(t.map(function(e){var t={}
t[r.ID_ATTRIBUTE_NAME]=e.id
t["type"]=e.type
t["args"]=JSON.stringify(e.args)
return t}))
console.log("Total time:",o.getTotalTime(e).toFixed(2)+" ms")},_recordWrite:function(e,t,n,r){var o=l._allMeasurements[l._allMeasurements.length-1].writes
o[e]=o[e]||[]
o[e].push({type:t,time:n,args:r})},measure:function(e,t,n){return function(){var r=Array.prototype.slice.call(arguments,0)
var o
var i
var u
if("_renderNewRootComponent"===t||"flushBatchedUpdates"===t){l._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0})
u=s()
i=n.apply(this,r)
l._allMeasurements[l._allMeasurements.length-1].totalTime=s()-u
return i}if("ReactDOMIDOperations"===e||"ReactComponentBrowserEnvironment"===e){u=s()
i=n.apply(this,r)
o=s()-u
if("mountImageIntoNode"===t){var d=a.getID(r[1])
l._recordWrite(d,t,o,r[0])}else"dangerouslyProcessChildrenUpdates"===t?r[0].forEach(function(e){var t={}
null!==e.fromIndex&&(t.fromIndex=e.fromIndex)
null!==e.toIndex&&(t.toIndex=e.toIndex)
null!==e.textContent&&(t.textContent=e.textContent)
null!==e.markupIndex&&(t.markup=r[1][e.markupIndex])
l._recordWrite(e.parentID,e.type,o,t)}):l._recordWrite(r[0],t,o,Array.prototype.slice.call(r,1))
return i}if("ReactCompositeComponent"!==e||"mountComponent"!==t&&"updateComponent"!==t&&"_renderValidatedComponent"!==t)return n.apply(this,r)
var p="mountComponent"===t?r[0]:this._rootNodeID
var f="_renderValidatedComponent"===t
var v="mountComponent"===t
var h=l._mountStack
var m=l._allMeasurements[l._allMeasurements.length-1]
f?c(m.counts,p,1):v&&h.push(0)
u=s()
i=n.apply(this,r)
o=s()-u
if(f)c(m.render,p,o)
else if(v){var g=h.pop()
h[h.length-1]+=o
c(m.exclusive,p,o-g)
c(m.inclusive,p,o)}else c(m.inclusive,p,o)
m.displayNames[p]={current:this.constructor.displayName,owner:this._owner?this._owner.constructor.displayName:"<root>"}
return i}}}
t.exports=l},{"./DOMProperty":11,"./ReactDefaultPerfAnalysis":55,"./ReactMount":67,"./ReactPerf":71,"./performanceNow":151}],55:[function(e,t,n){var r=e("./merge")
var o=1.2
var a={mountImageIntoNode:"set innerHTML",INSERT_MARKUP:"set innerHTML",MOVE_EXISTING:"move",REMOVE_NODE:"remove",TEXT_CONTENT:"set textContent",updatePropertyByID:"update attribute",deletePropertyByID:"delete attribute",updateStylesByID:"update styles",updateInnerHTMLByID:"set innerHTML",dangerouslyReplaceNodeWithMarkupByID:"replace"}
function i(e){var t=0
for(var n=0;n<e.length;n++){var r=e[n]
t+=r.totalTime}return t}function s(e){var t=[]
for(var n=0;n<e.length;n++){var r=e[n]
var o
for(o in r.writes)r.writes[o].forEach(function(e){t.push({id:o,type:a[e.type]||e.type,args:e.args})})}return t}function u(e){var t={}
var n
for(var a=0;a<e.length;a++){var i=e[a]
var s=r(i.exclusive,i.inclusive)
for(var u in s){n=i.displayNames[u].current
t[n]=t[n]||{componentName:n,inclusive:0,exclusive:0,render:0,count:0}
i.render[u]&&(t[n].render+=i.render[u])
i.exclusive[u]&&(t[n].exclusive+=i.exclusive[u])
i.inclusive[u]&&(t[n].inclusive+=i.inclusive[u])
i.counts[u]&&(t[n].count+=i.counts[u])}}var c=[]
for(n in t)t[n].exclusive>=o&&c.push(t[n])
c.sort(function(e,t){return t.exclusive-e.exclusive})
return c}function c(e,t){var n={}
var a
for(var i=0;i<e.length;i++){var s=e[i]
var u=r(s.exclusive,s.inclusive)
var c
t&&(c=l(s))
for(var d in u){if(t&&!c[d])continue
var p=s.displayNames[d]
a=p.owner+" > "+p.current
n[a]=n[a]||{componentName:a,time:0,count:0}
s.inclusive[d]&&(n[a].time+=s.inclusive[d])
s.counts[d]&&(n[a].count+=s.counts[d])}}var f=[]
for(a in n)n[a].time>=o&&f.push(n[a])
f.sort(function(e,t){return t.time-e.time})
return f}function l(e){var t={}
var n=Object.keys(e.writes)
var o=r(e.exclusive,e.inclusive)
for(var a in o){var i=false
for(var s=0;s<n.length;s++)if(0===n[s].indexOf(a)){i=true
break}!i&&e.counts[a]>0&&(t[a]=true)}return t}var d={getExclusiveSummary:u,getInclusiveSummary:c,getDOMSummary:s,getTotalTime:i}
t.exports=d},{"./merge":144}],56:[function(e,t,n){"use strict"
var r=e("./ReactContext")
var o=e("./ReactCurrentOwner")
var a=e("./merge")
var i=e("./warning")
function s(e,t){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:function(){if(!this._store)return null
return this._store[t]},set:function(e){i(false,"Don't set the "+t+" property of the component. Mutate the existing props object instead.")
this._store[t]=e}})}var u=false
function c(e){try{var t={props:true}
for(var n in t)s(e,n)
u=true}catch(e){}}function l(e,t){if("function"!==typeof t)return
for(var n in t)if(t.hasOwnProperty(n)){var r=t[n]
if("function"===typeof r){var o=r.bind(t)
for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a])
e[n]=o}else e[n]=r}}var d=function(){}
c(d.prototype)
d.createFactory=function(e){var t=Object.create(d.prototype)
var n=function(e,n){null==e?e={}:"object"===typeof e&&(e=a(e))
var i=arguments.length-1
if(1===i)e.children=n
else if(i>1){var s=Array(i)
for(var c=0;c<i;c++)s[c]=arguments[c+1]
e.children=s}var l=Object.create(t)
l._owner=o.current
l._context=r.current
l._store={validated:false,props:e}
if(u){Object.freeze(l)
return l}l.props=e
return l}
n.prototype=t
n.type=e
t.type=e
l(n,e)
t.constructor=n
return n}
d.cloneAndReplaceProps=function(e,t){var n=Object.create(e.constructor.prototype)
n._owner=e._owner
n._context=e._context
n._store={validated:e._store.validated,props:t}
if(u){Object.freeze(n)
return n}n.props=t
return n}
d.isValidFactory=function(e){return"function"===typeof e&&e.prototype instanceof d}
d.isValidDescriptor=function(e){return e instanceof d}
t.exports=d},{"./ReactContext":39,"./ReactCurrentOwner":40,"./merge":144,"./warning":158}],57:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./ReactPropTypeLocations")
var a=e("./ReactCurrentOwner")
var i=e("./monitorCodeUse")
var s={react_key_warning:{},react_numeric_key_warning:{}}
var u={}
var c={}
var l=/^\d+$/
function d(){var e=a.current
return e&&e.constructor.displayName||void 0}function p(e,t){if(e._store.validated||null!=e.props.key)return
e._store.validated=true
v("react_key_warning",'Each child in an array should have a unique "key" prop.',e,t)}function f(e,t,n){if(!l.test(e))return
v("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",t,n)}function v(e,t,n,r){var o=d()
var u=r.displayName
var c=o||u
var l=s[e]
if(l.hasOwnProperty(c))return
l[c]=true
t+=o?" Check the render method of "+o+".":" Check the renderComponent call using <"+u+">."
var p=null
if(n._owner&&n._owner!==a.current){p=n._owner.constructor.displayName
t+=" It was passed a child from "+p+"."}t+=" See http://fb.me/react-warning-keys for more information."
i(e,{component:c,componentOwner:p})
console.warn(t)}function h(){var e=d()||""
if(u.hasOwnProperty(e))return
u[e]=true
i("react_object_map_children")}function m(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n]
r.isValidDescriptor(o)&&p(o,t)}else if(r.isValidDescriptor(e))e._store.validated=true
else if(e&&"object"===typeof e){h()
for(var a in e)f(a,e[a],t)}}function g(e,t,n,r){for(var o in t)if(t.hasOwnProperty(o)){var a
try{a=t[o](n,o,e,r)}catch(e){a=e}if(a instanceof Error&&!(a.message in c)){c[a.message]=true
i("react_failed_descriptor_type_check",{message:a.message})}}}var _={createFactory:function(e,t,n){var r=function(r,a){var i=e.apply(this,arguments)
for(var s=1;s<arguments.length;s++)m(arguments[s],i.type)
var u=i.type.displayName
t&&g(u,t,i.props,o.prop)
n&&g(u,n,i._context,o.context)
return i}
r.prototype=e.prototype
r.type=e.type
for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a])
return r}}
t.exports=_},{"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactPropTypeLocations":74,"./monitorCodeUse":148}],58:[function(e,t,n){"use strict"
var r=e("./invariant")
var o
var a={}
var i={injectEmptyComponent:function(e){o=e}}
function s(){r(o,"Trying to return null from a render, but no null placeholder component was injected.")
return o()}function u(e){a[e]=true}function c(e){delete a[e]}function l(e){return a[e]}var d={deregisterNullComponentID:c,getEmptyComponent:s,injection:i,isNullComponentID:l,registerNullComponentID:u}
t.exports=d},{"./invariant":134}],59:[function(e,t,n){"use strict"
var r={guard:function(e,t){return e}}
t.exports=r},{}],60:[function(e,t,n){"use strict"
var r=e("./EventPluginHub")
function o(e){r.enqueueEvents(e)
r.processEventQueue()}var a={handleTopLevel:function(e,t,n,a){var i=r.extractEvents(e,t,n,a)
o(i)}}
t.exports=a},{"./EventPluginHub":18}],61:[function(e,t,n){"use strict"
var r=e("./EventListener")
var o=e("./ExecutionEnvironment")
var a=e("./PooledClass")
var i=e("./ReactInstanceHandles")
var s=e("./ReactMount")
var u=e("./ReactUpdates")
var c=e("./getEventTarget")
var l=e("./getUnboundedScrollPosition")
var d=e("./mixInto")
function p(e){var t=s.getID(e)
var n=i.getReactRootIDFromNodeID(t)
var r=s.findReactContainerForID(n)
var o=s.getFirstReactDOM(r)
return o}function f(e,t){this.topLevelType=e
this.nativeEvent=t
this.ancestors=[]}d(f,{destructor:function(){this.topLevelType=null
this.nativeEvent=null
this.ancestors.length=0}})
a.addPoolingTo(f,a.twoArgumentPooler)
function v(e){var t=s.getFirstReactDOM(c(e.nativeEvent))||window
var n=t
while(n){e.ancestors.push(n)
n=p(n)}for(var r=0,o=e.ancestors.length;r<o;r++){t=e.ancestors[r]
var a=s.getID(t)||""
m._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function h(e){var t=l(window)
e(t)}var m={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:o.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var o=n
if(!o)return
return r.listen(o,t,m.dispatchEvent.bind(null,e))},trapCapturedEvent:function(e,t,n){var o=n
if(!o)return
return r.capture(o,t,m.dispatchEvent.bind(null,e))},monitorScrollValue:function(e){var t=h.bind(null,e)
r.listen(window,"scroll",t)
r.listen(window,"resize",t)},dispatchEvent:function(e,t){if(!m._enabled)return
var n=f.getPooled(e,t)
try{u.batchedUpdates(v,n)}finally{f.release(n)}}}
t.exports=m},{"./EventListener":17,"./ExecutionEnvironment":22,"./PooledClass":28,"./ReactInstanceHandles":64,"./ReactMount":67,"./ReactUpdates":87,"./getEventTarget":125,"./getUnboundedScrollPosition":130,"./mixInto":147}],62:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=e("./EventPluginHub")
var a=e("./ReactComponent")
var i=e("./ReactCompositeComponent")
var s=e("./ReactDOM")
var u=e("./ReactEmptyComponent")
var c=e("./ReactBrowserEventEmitter")
var l=e("./ReactPerf")
var d=e("./ReactRootIndex")
var p=e("./ReactUpdates")
var f={Component:a.injection,CompositeComponent:i.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,DOM:s.injection,EventEmitter:c.injection,Perf:l.injection,RootIndex:d.injection,Updates:p.injection}
t.exports=f},{"./DOMProperty":11,"./EventPluginHub":18,"./ReactBrowserEventEmitter":31,"./ReactComponent":35,"./ReactCompositeComponent":38,"./ReactDOM":41,"./ReactEmptyComponent":58,"./ReactPerf":71,"./ReactRootIndex":78,"./ReactUpdates":87}],63:[function(e,t,n){"use strict"
var r=e("./ReactDOMSelection")
var o=e("./containsNode")
var a=e("./focusNode")
var i=e("./getActiveElement")
function s(e){return o(document.documentElement,e)}var u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=i()
return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=i()
var n=e.focusedElem
var r=e.selectionRange
if(t!==n&&s(n)){u.hasSelectionCapabilities(n)&&u.setSelection(n,r)
a(n)}},getSelection:function(e){var t
if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd}
else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange()
n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e)
return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start
var o=t.end
"undefined"===typeof o&&(o=n)
if("selectionStart"in e){e.selectionStart=n
e.selectionEnd=Math.min(o,e.value.length)}else if(document.selection&&"INPUT"===e.nodeName){var a=e.createTextRange()
a.collapse(true)
a.moveStart("character",n)
a.moveEnd("character",o-n)
a.select()}else r.setOffsets(e,t)}}
t.exports=u},{"./ReactDOMSelection":50,"./containsNode":109,"./focusNode":120,"./getActiveElement":122}],64:[function(e,t,n){"use strict"
var r=e("./ReactRootIndex")
var o=e("./invariant")
var a="."
var i=a.length
var s=100
function u(e){return a+e.toString(36)}function c(e,t){return e.charAt(t)===a||t===e.length}function l(e){return""===e||e.charAt(0)===a&&e.charAt(e.length-1)!==a}function d(e,t){return 0===t.indexOf(e)&&c(t,e.length)}function p(e){return e?e.substr(0,e.lastIndexOf(a)):""}function f(e,t){o(l(e)&&l(t),"getNextDescendantID(%s, %s): Received an invalid React DOM ID.",e,t)
o(d(e,t),"getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",e,t)
if(e===t)return e
var n=e.length+i
for(var r=n;r<t.length;r++)if(c(t,r))break
return t.substr(0,r)}function v(e,t){var n=Math.min(e.length,t.length)
if(0===n)return""
var r=0
for(var a=0;a<=n;a++)if(c(e,a)&&c(t,a))r=a
else if(e.charAt(a)!==t.charAt(a))break
var i=e.substr(0,r)
o(l(i),"getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",e,t,i)
return i}function h(e,t,n,r,a,i){e=e||""
t=t||""
o(e!==t,"traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",e)
var u=d(t,e)
o(u||d(e,t),"traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",e,t)
var c=0
var l=u?p:f
for(var v=e;;v=l(v,t)){var h
a&&v===e||i&&v===t||(h=n(v,u,r))
if(false===h||v===t)break
o(c++<s,"traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",e,t)}}var m={createReactRootID:function(){return u(r.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===a&&e.length>1){var t=e.indexOf(a,1)
return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var a=v(e,t)
a!==e&&h(e,a,n,r,false,true)
a!==t&&h(a,t,n,o,true,false)},traverseTwoPhase:function(e,t,n){if(e){h("",e,t,n,true,false)
h(e,"",t,n,false,true)}},traverseAncestors:function(e,t,n){h("",e,t,n,true,false)},_getFirstCommonAncestorID:v,_getNextDescendantID:f,isAncestorIDOf:d,SEPARATOR:a}
t.exports=m},{"./ReactRootIndex":78,"./invariant":134}],65:[function(e,t,n){"use strict"
var r=e("./React")
function o(e,t){this.value=e
this.requestChange=t}function a(e){var t={value:"undefined"===typeof e?r.PropTypes.any.isRequired:e.isRequired,requestChange:r.PropTypes.func.isRequired}
return r.PropTypes.shape(t)}o.PropTypes={link:a}
t.exports=o},{"./React":29}],66:[function(e,t,n){"use strict"
var r=e("./adler32")
var o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e)
return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME)
n=n&&parseInt(n,10)
var a=r(e)
return a===n}}
t.exports=o},{"./adler32":107}],67:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=e("./ReactBrowserEventEmitter")
var a=e("./ReactCurrentOwner")
var i=e("./ReactDescriptor")
var s=e("./ReactInstanceHandles")
var u=e("./ReactPerf")
var c=e("./containsNode")
var l=e("./getReactRootElementInContainer")
var d=e("./instantiateReactComponent")
var p=e("./invariant")
var f=e("./shouldUpdateReactComponent")
var v=e("./warning")
var h=s.SEPARATOR
var m=r.ID_ATTRIBUTE_NAME
var g={}
var _=1
var y=9
var w={}
var b={}
var C={}
var k=[]
function E(e){var t=l(e)
return t&&N.getID(t)}function R(e){var t=M(e)
if(t)if(g.hasOwnProperty(t)){var n=g[t]
if(n!==e){p(!T(n,t),"ReactMount: Two valid but unequal nodes with the same `%s`: %s",m,t)
g[t]=e}}else g[t]=e
return t}function M(e){return e&&e.getAttribute&&e.getAttribute(m)||""}function x(e,t){var n=M(e)
n!==t&&delete g[n]
e.setAttribute(m,t)
g[t]=e}function D(e){g.hasOwnProperty(e)&&T(g[e],e)||(g[e]=N.findReactNodeByID(e))
return g[e]}function T(e,t){if(e){p(M(e)===t,"ReactMount: Unexpected modification of `%s`",m)
var n=N.findReactContainerForID(t)
if(n&&c(n,e))return true}return false}function S(e){delete g[e]}var P=null
function O(e){var t=g[e]
if(!t||!T(t,e))return false
P=t}function I(e){P=null
s.traverseAncestors(e,O)
var t=P
P=null
return t}var N={_instancesByReactRootID:w,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){var o=t.props
N.scrollMonitor(n,function(){e.replaceProps(o,r)})
C[E(n)]=l(n)
return e},_registerComponent:function(e,t){p(t&&(t.nodeType===_||t.nodeType===y),"_registerComponent(...): Target container is not a DOM element.")
o.ensureScrollValueMonitoring()
var n=N.registerContainer(t)
w[n]=e
return n},_renderNewRootComponent:u.measure("ReactMount","_renderNewRootComponent",function(e,t,n){v(null==a.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.")
var r=d(e)
var o=N._registerComponent(r,t)
r.mountComponentIntoNode(o,t,n)
C[o]=l(t)
return r}),renderComponent:function(e,t,n){p(i.isValidDescriptor(e),"renderComponent(): Invalid component descriptor.%s",i.isValidFactory(e)?" Instead of passing a component class, make sure to instantiate it first by calling it with props.":"undefined"!==typeof e.props?" This may be caused by unintentionally loading two independent copies of React.":"")
var r=w[E(t)]
if(r){var o=r._descriptor
if(f(o,e))return N._updateRootComponent(r,e,t,n)
N.unmountComponentAtNode(t)}var a=l(t)
var s=a&&N.isRenderedByReact(a)
var u=s&&!r
var c=N._renderNewRootComponent(e,t,u)
n&&n.call(c)
return c},constructAndRenderComponent:function(e,t,n){return N.renderComponent(e(t),n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n)
p(r,'Tried to get element with id of "%s" but it is not present on the page.',n)
return N.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=E(e)
t&&(t=s.getReactRootIDFromNodeID(t))
t||(t=s.createReactRootID())
b[t]=e
return t},unmountComponentAtNode:function(e){v(null==a.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.")
var t=E(e)
var n=w[t]
if(!n)return false
N.unmountComponentFromNode(n,e)
delete w[t]
delete b[t]
delete C[t]
return true},unmountComponentFromNode:function(e,t){e.unmountComponent()
t.nodeType===y&&(t=t.documentElement)
while(t.lastChild)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=s.getReactRootIDFromNodeID(e)
var n=b[t]
var r=C[t]
if(r&&r.parentNode!==n){p(M(r)===t,"ReactMount: Root element ID differed from reactRootID.")
var o=n.firstChild
o&&t===M(o)?C[t]=o:console.warn("ReactMount: Root element has been removed from its original container. New container:",r.parentNode)}return n},findReactNodeByID:function(e){var t=N.findReactContainerForID(e)
return N.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return false
var t=N.getID(e)
return!!t&&t.charAt(0)===h},getFirstReactDOM:function(e){var t=e
while(t&&t.parentNode!==t){if(N.isRenderedByReact(t))return t
t=t.parentNode}return null},findComponentRoot:function(e,t){var n=k
var r=0
var o=I(t)||e
n[0]=o.firstChild
n.length=1
while(r<n.length){var a=n[r++]
var i
while(a){var u=N.getID(a)
if(u){if(t===u)i=a
else if(s.isAncestorIDOf(u,t)){n.length=r=0
n.push(a.firstChild)}}else n.push(a.firstChild)
a=a.nextSibling}if(i){n.length=0
return i}}n.length=0
p(false,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting <p> or <a> tags, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",t,N.getID(e))},getReactRootID:E,getID:R,setID:x,getNode:D,purgeID:S}
t.exports=N},{"./DOMProperty":11,"./ReactBrowserEventEmitter":31,"./ReactCurrentOwner":40,"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactPerf":71,"./containsNode":109,"./getReactRootElementInContainer":128,"./instantiateReactComponent":133,"./invariant":134,"./shouldUpdateReactComponent":154,"./warning":158}],68:[function(e,t,n){"use strict"
var r=e("./ReactComponent")
var o=e("./ReactMultiChildUpdateTypes")
var a=e("./flattenChildren")
var i=e("./instantiateReactComponent")
var s=e("./shouldUpdateReactComponent")
var u=0
var c=[]
var l=[]
function d(e,t,n){c.push({parentID:e,parentNode:null,type:o.INSERT_MARKUP,markupIndex:l.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function p(e,t,n){c.push({parentID:e,parentNode:null,type:o.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function f(e,t){c.push({parentID:e,parentNode:null,type:o.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function v(e,t){c.push({parentID:e,parentNode:null,type:o.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function h(){if(c.length){r.BackendIDOperations.dangerouslyProcessChildrenUpdates(c,l)
m()}}function m(){c.length=0
l.length=0}var g={Mixin:{mountChildren:function(e,t){var n=a(e)
var r=[]
var o=0
this._renderedChildren=n
for(var s in n){var u=n[s]
if(n.hasOwnProperty(s)){var c=i(u)
n[s]=c
var l=this._rootNodeID+s
var d=c.mountComponent(l,t,this._mountDepth+1)
c._mountIndex=o
r.push(d)
o++}}return r},updateTextContent:function(e){u++
var t=true
try{var n=this._renderedChildren
for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r)
this.setTextContent(e)
t=false}finally{u--
u||(t?m():h())}},updateChildren:function(e,t){u++
var n=true
try{this._updateChildren(e,t)
n=false}finally{u--
u||(n?m():h())}},_updateChildren:function(e,t){var n=a(e)
var r=this._renderedChildren
if(!n&&!r)return
var o
var u=0
var c=0
for(o in n){if(!n.hasOwnProperty(o))continue
var l=r&&r[o]
var d=l&&l._descriptor
var p=n[o]
if(s(d,p)){this.moveChild(l,c,u)
u=Math.max(l._mountIndex,u)
l.receiveComponent(p,t)
l._mountIndex=c}else{if(l){u=Math.max(l._mountIndex,u)
this._unmountChildByName(l,o)}var f=i(p)
this._mountChildByNameAtIndex(f,o,c,t)}c++}for(o in r)!r.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(r[o],o)},unmountChildren:function(){var e=this._renderedChildren
for(var t in e){var n=e[t]
n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&p(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){d(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){f(this._rootNodeID,e._mountIndex)},setTextContent:function(e){v(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r){var o=this._rootNodeID+t
var a=e.mountComponent(o,r,this._mountDepth+1)
e._mountIndex=n
this.createChild(e,a)
this._renderedChildren=this._renderedChildren||{}
this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e)
e._mountIndex=null
e.unmountComponent()
delete this._renderedChildren[t]}}}
t.exports=g},{"./ReactComponent":35,"./ReactMultiChildUpdateTypes":69,"./flattenChildren":119,"./instantiateReactComponent":133,"./shouldUpdateReactComponent":154}],69:[function(e,t,n){"use strict"
var r=e("./keyMirror")
var o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null})
t.exports=o},{"./keyMirror":140}],70:[function(e,t,n){"use strict"
var r=e("./emptyObject")
var o=e("./invariant")
var a={isValidOwner:function(e){return!!(e&&"function"===typeof e.attachRef&&"function"===typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o(a.isValidOwner(n),"addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.")
n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o(a.isValidOwner(n),"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.")
n.refs[t]===e&&n.detachRef(t)},Mixin:{construct:function(){this.refs=r},attachRef:function(e,t){o(t.isOwnedBy(this),"attachRef(%s, ...): Only a component's owner can store a ref to it.",e)
var n=this.refs===r?this.refs={}:this.refs
n[e]=t},detachRef:function(e){delete this.refs[e]}}}
t.exports=a},{"./emptyObject":117,"./invariant":134}],71:[function(e,t,n){"use strict"
var r={enableMeasure:false,storedMeasure:o,measure:function(e,t,n){var o=null
return function(){if(r.enableMeasure){o||(o=r.storedMeasure(e,t,n))
return o.apply(this,arguments)}return n.apply(this,arguments)}},injection:{injectMeasure:function(e){r.storedMeasure=e}}}
function o(e,t,n){return n}t.exports=r},{}],72:[function(e,t,n){"use strict"
var r=e("./emptyFunction")
var o=e("./invariant")
var a=e("./joinClasses")
var i=e("./merge")
function s(e){return function(t,n,r){t.hasOwnProperty(n)?t[n]=e(t[n],r):t[n]=r}}var u=s(function(e,t){return i(t,e)})
var c={children:r,className:s(a),key:r,ref:r,style:u}
function l(e,t){for(var n in t){if(!t.hasOwnProperty(n))continue
var r=c[n]
r&&c.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var d={TransferStrategies:c,mergeProps:function(e,t){return l(i(e),t)},Mixin:{transferPropsTo:function(e){o(e._owner===this,"%s: You can't call transferPropsTo() on a component that you don't own, %s. This usually means you are calling transferPropsTo() on a component passed in as props or children.",this.constructor.displayName,e.type.displayName)
l(e.props,this.props)
return e}}}
t.exports=d},{"./emptyFunction":116,"./invariant":134,"./joinClasses":139,"./merge":144}],73:[function(e,t,n){"use strict"
var r={}
r={prop:"prop",context:"context",childContext:"child context"}
t.exports=r},{}],74:[function(e,t,n){"use strict"
var r=e("./keyMirror")
var o=r({prop:null,context:null,childContext:null})
t.exports=o},{"./keyMirror":140}],75:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./ReactPropTypeLocationNames")
var a=e("./emptyFunction")
var i="<<anonymous>>"
var s={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),any:l(),arrayOf:d,component:p(),instanceOf:f,objectOf:h,oneOf:v,oneOfType:m,renderable:g(),shape:_}
function u(e){function t(t,n,r,a,s){a=a||i
if(null!=n[r])return e(n,r,a,s)
var u=o[s]
if(t)return new Error("Required "+u+" `"+r+"` was not specified in `"+a+"`.")}var n=t.bind(null,false)
n.isRequired=t.bind(null,true)
return n}function c(e){function t(t,n,r,a){var i=t[n]
var s=w(i)
if(s!==e){var u=o[a]
var c=b(i)
return new Error("Invalid "+u+" `"+n+"` of type `"+c+"` supplied to `"+r+"`, expected `"+e+"`.")}}return u(t)}function l(){return u(a.thatReturns())}function d(e){function t(t,n,r,a){var i=t[n]
if(!Array.isArray(i)){var s=o[a]
var u=w(i)
return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<i.length;c++){var l=e(i,c,r,a)
if(l instanceof Error)return l}}return u(t)}function p(){function e(e,t,n,a){if(!r.isValidDescriptor(e[t])){var i=o[a]
return new Error("Invalid "+i+" `"+t+"` supplied to `"+n+"`, expected a React component.")}}return u(e)}function f(e){function t(t,n,r,a){if(!(t[n]instanceof e)){var s=o[a]
var u=e.name||i
return new Error("Invalid "+s+" `"+n+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}}return u(t)}function v(e){function t(t,n,r,a){var i=t[n]
for(var s=0;s<e.length;s++)if(i===e[s])return
var u=o[a]
var c=JSON.stringify(e)
return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+c+".")}return u(t)}function h(e){function t(t,n,r,a){var i=t[n]
var s=w(i)
if("object"!==s){var u=o[a]
return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` supplied to `"+r+"`, expected an object.")}for(var c in i)if(i.hasOwnProperty(c)){var l=e(i,c,r,a)
if(l instanceof Error)return l}}return u(t)}function m(e){function t(t,n,r,a){for(var i=0;i<e.length;i++){var s=e[i]
if(null==s(t,n,r,a))return}var u=o[a]
return new Error("Invalid "+u+" `"+n+"` supplied to `"+r+"`.")}return u(t)}function g(){function e(e,t,n,r){if(!y(e[t])){var a=o[r]
return new Error("Invalid "+a+" `"+t+"` supplied to `"+n+"`, expected a renderable prop.")}}return u(e)}function _(e){function t(t,n,r,a){var i=t[n]
var s=w(i)
if("object"!==s){var u=o[a]
return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.")}for(var c in e){var l=e[c]
if(!l)continue
var d=l(i,c,r,a)
if(d)return d}}return u(t,"expected `object`")}function y(e){switch(typeof e){case"number":case"string":return true
case"boolean":return!e
case"object":if(Array.isArray(e))return e.every(y)
if(r.isValidDescriptor(e))return true
for(var t in e)if(!y(e[t]))return false
return true
default:return false}}function w(e){var t=typeof e
if(Array.isArray(e))return"array"
if(e instanceof RegExp)return"object"
return t}function b(e){var t=w(e)
if("object"===t){if(e instanceof Date)return"date"
if(e instanceof RegExp)return"regexp"}return t}t.exports=s},{"./ReactDescriptor":56,"./ReactPropTypeLocationNames":73,"./emptyFunction":116}],76:[function(e,t,n){"use strict"
var r=e("./PooledClass")
var o=e("./ReactBrowserEventEmitter")
var a=e("./mixInto")
function i(){this.listenersToPut=[]}a(i,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e]
o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}})
r.addPoolingTo(i)
t.exports=i},{"./PooledClass":28,"./ReactBrowserEventEmitter":31,"./mixInto":147}],77:[function(e,t,n){"use strict"
var r=e("./CallbackQueue")
var o=e("./PooledClass")
var a=e("./ReactBrowserEventEmitter")
var i=e("./ReactInputSelection")
var s=e("./ReactPutListenerQueue")
var u=e("./Transaction")
var c=e("./mixInto")
var l={initialize:i.getSelectionInformation,close:i.restoreSelection}
var d={initialize:function(){var e=a.isEnabled()
a.setEnabled(false)
return e},close:function(e){a.setEnabled(e)}}
var p={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}}
var f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}}
var v=[f,l,d,p]
function h(){this.reinitializeTransaction()
this.renderToStaticMarkup=false
this.reactMountReady=r.getPooled(null)
this.putListenerQueue=s.getPooled()}var m={getTransactionWrappers:function(){return v},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady)
this.reactMountReady=null
s.release(this.putListenerQueue)
this.putListenerQueue=null}}
c(h,u.Mixin)
c(h,m)
o.addPoolingTo(h)
t.exports=h},{"./CallbackQueue":6,"./PooledClass":28,"./ReactBrowserEventEmitter":31,"./ReactInputSelection":63,"./ReactPutListenerQueue":76,"./Transaction":104,"./mixInto":147}],78:[function(e,t,n){"use strict"
var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}}
var o={createReactRootIndex:null,injection:r}
t.exports=o},{}],79:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./ReactInstanceHandles")
var a=e("./ReactMarkupChecksum")
var i=e("./ReactServerRenderingTransaction")
var s=e("./instantiateReactComponent")
var u=e("./invariant")
function c(e){u(r.isValidDescriptor(e),"renderComponentToString(): You must pass a valid ReactComponent.")
u(!(2===arguments.length&&"function"===typeof arguments[1]),"renderComponentToString(): This function became synchronous and now returns the generated markup. Please remove the second parameter.")
var t
try{var n=o.createReactRootID()
t=i.getPooled(false)
return t.perform(function(){var r=s(e)
var o=r.mountComponent(n,t,0)
return a.addChecksumToMarkup(o)},null)}finally{i.release(t)}}function l(e){u(r.isValidDescriptor(e),"renderComponentToStaticMarkup(): You must pass a valid ReactComponent.")
var t
try{var n=o.createReactRootID()
t=i.getPooled(true)
return t.perform(function(){var r=s(e)
return r.mountComponent(n,t,0)},null)}finally{i.release(t)}}t.exports={renderComponentToString:c,renderComponentToStaticMarkup:l}},{"./ReactDescriptor":56,"./ReactInstanceHandles":64,"./ReactMarkupChecksum":66,"./ReactServerRenderingTransaction":80,"./instantiateReactComponent":133,"./invariant":134}],80:[function(e,t,n){"use strict"
var r=e("./PooledClass")
var o=e("./CallbackQueue")
var a=e("./ReactPutListenerQueue")
var i=e("./Transaction")
var s=e("./emptyFunction")
var u=e("./mixInto")
var c={initialize:function(){this.reactMountReady.reset()},close:s}
var l={initialize:function(){this.putListenerQueue.reset()},close:s}
var d=[l,c]
function p(e){this.reinitializeTransaction()
this.renderToStaticMarkup=e
this.reactMountReady=o.getPooled(null)
this.putListenerQueue=a.getPooled()}var f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady)
this.reactMountReady=null
a.release(this.putListenerQueue)
this.putListenerQueue=null}}
u(p,i.Mixin)
u(p,f)
r.addPoolingTo(p)
t.exports=p},{"./CallbackQueue":6,"./PooledClass":28,"./ReactPutListenerQueue":76,"./Transaction":104,"./emptyFunction":116,"./mixInto":147}],81:[function(e,t,n){"use strict"
var r={createStateSetter:function(e,t){return function(n,r,o,a,i,s){var u=t.call(e,n,r,o,a,i,s)
u&&e.setState(u)}},createStateKeySetter:function(e,t){var n=e.__keySetters||(e.__keySetters={})
return n[t]||(n[t]=o(e,t))}}
function o(e,t){var n={}
return function(r){n[t]=r
e.setState(n)}}r.Mixin={createStateSetter:function(e){return r.createStateSetter(this,e)},createStateKeySetter:function(e){return r.createStateKeySetter(this,e)}}
t.exports=r},{}],82:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPluginHub")
var a=e("./EventPropagators")
var i=e("./React")
var s=e("./ReactDescriptor")
var u=e("./ReactDOM")
var c=e("./ReactBrowserEventEmitter")
var l=e("./ReactMount")
var d=e("./ReactTextComponent")
var p=e("./ReactUpdates")
var f=e("./SyntheticEvent")
var v=e("./mergeInto")
var h=e("./copyProperties")
var m=r.topLevelTypes
function g(e){}var _={renderIntoDocument:function(e){var t=document.createElement("div")
return i.renderComponent(e,t)},isDescriptor:function(e){return s.isValidDescriptor(e)},isDescriptorOfType:function(e,t){return s.isValidDescriptor(e)&&e.type===t.type},isDOMComponent:function(e){return!!(e&&e.mountComponent&&e.tagName)},isDOMComponentDescriptor:function(e){return!!(e&&s.isValidDescriptor(e)&&!!e.tagName)},isCompositeComponent:function(e){return"function"===typeof e.render&&"function"===typeof e.setState},isCompositeComponentWithType:function(e,t){return!!(_.isCompositeComponent(e)&&e.constructor===t.type)},isCompositeComponentDescriptor:function(e){if(!s.isValidDescriptor(e))return false
var t=e.type.prototype
return"function"===typeof t.render&&"function"===typeof t.setState},isCompositeComponentDescriptorWithType:function(e,t){return!!(_.isCompositeComponentDescriptor(e)&&e.constructor===t)},isTextComponent:function(e){return e instanceof d.type},findAllInRenderedTree:function(e,t){if(!e)return[]
var n=t(e)?[e]:[]
if(_.isDOMComponent(e)){var r=e._renderedChildren
var o
for(o in r){if(!r.hasOwnProperty(o))continue
n=n.concat(_.findAllInRenderedTree(r[o],t))}}else _.isCompositeComponent(e)&&(n=n.concat(_.findAllInRenderedTree(e._renderedComponent,t)))
return n},scryRenderedDOMComponentsWithClass:function(e,t){return _.findAllInRenderedTree(e,function(e){var n=e.props.className
return _.isDOMComponent(e)&&n&&-1!==(" "+n+" ").indexOf(" "+t+" ")})},findRenderedDOMComponentWithClass:function(e,t){var n=_.scryRenderedDOMComponentsWithClass(e,t)
if(1!==n.length)throw new Error("Did not find exactly one match for class:"+t)
return n[0]},scryRenderedDOMComponentsWithTag:function(e,t){return _.findAllInRenderedTree(e,function(e){return _.isDOMComponent(e)&&e.tagName===t.toUpperCase()})},findRenderedDOMComponentWithTag:function(e,t){var n=_.scryRenderedDOMComponentsWithTag(e,t)
if(1!==n.length)throw new Error("Did not find exactly one match for tag:"+t)
return n[0]},scryRenderedComponentsWithType:function(e,t){return _.findAllInRenderedTree(e,function(e){return _.isCompositeComponentWithType(e,t)})},findRenderedComponentWithType:function(e,t){var n=_.scryRenderedComponentsWithType(e,t)
if(1!==n.length)throw new Error("Did not find exactly one match for componentType:"+t)
return n[0]},mockComponent:function(e,t){var n=i.createClass({render:function(){var t=t||e.mockTagName||"div"
return u[t](null,this.props.children)}})
h(e,n)
e.mockImplementation(n)
return this},simulateNativeEventOnNode:function(e,t,n){n.target=t
c.ReactEventListener.dispatchEvent(e,n)},simulateNativeEventOnDOMComponent:function(e,t,n){_.simulateNativeEventOnNode(e,t.getDOMNode(),n)},nativeTouchData:function(e,t){return{touches:[{pageX:e,pageY:t}]}},Simulate:null,SimulateNative:{}}
function y(e){return function(t,n){var r
_.isDOMComponent(t)?r=t.getDOMNode():t.tagName&&(r=t)
var i=new g
i.target=r
var s=new f(c.eventNameDispatchConfigs[e],l.getID(r),i)
v(s,n)
a.accumulateTwoPhaseDispatches(s)
p.batchedUpdates(function(){o.enqueueEvents(s)
o.processEventQueue()})}}function w(){_.Simulate={}
var e
for(e in c.eventNameDispatchConfigs)_.Simulate[e]=y(e)}var b=o.injection.injectEventPluginOrder
o.injection.injectEventPluginOrder=function(){b.apply(this,arguments)
w()}
var C=o.injection.injectEventPluginsByName
o.injection.injectEventPluginsByName=function(){C.apply(this,arguments)
w()}
w()
function k(e){return function(t,n){var r=new g(e)
v(r,n)
_.isDOMComponent(t)?_.simulateNativeEventOnDOMComponent(e,t,r):!t.tagName||_.simulateNativeEventOnNode(e,t,r)}}var E
for(E in m){var R=0===E.indexOf("top")?E.charAt(3).toLowerCase()+E.substr(4):E
_.SimulateNative[R]=k(E)}t.exports=_},{"./EventConstants":16,"./EventPluginHub":18,"./EventPropagators":21,"./React":29,"./ReactBrowserEventEmitter":31,"./ReactDOM":41,"./ReactDescriptor":56,"./ReactMount":67,"./ReactTextComponent":83,"./ReactUpdates":87,"./SyntheticEvent":96,"./copyProperties":110,"./mergeInto":146}],83:[function(e,t,n){"use strict"
var r=e("./DOMPropertyOperations")
var o=e("./ReactBrowserComponentMixin")
var a=e("./ReactComponent")
var i=e("./ReactDescriptor")
var s=e("./escapeTextForBrowser")
var u=e("./mixInto")
var c=function(e){this.construct(e)}
u(c,a.Mixin)
u(c,o)
u(c,{mountComponent:function(e,t,n){a.Mixin.mountComponent.call(this,e,t,n)
var o=s(this.props)
if(t.renderToStaticMarkup)return o
return"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){var n=e.props
if(n!==this.props){this.props=n
a.BackendIDOperations.updateTextContentByID(this._rootNodeID,n)}}})
t.exports=i.createFactory(c)},{"./DOMPropertyOperations":12,"./ReactBrowserComponentMixin":30,"./ReactComponent":35,"./ReactDescriptor":56,"./escapeTextForBrowser":118,"./mixInto":147}],84:[function(e,t,n){"use strict"
var r=e("./ReactChildren")
var o={getChildMapping:function(e){return r.map(e,function(e){return e})},mergeChildMappings:function(e,t){e=e||{}
t=t||{}
function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}var r={}
var o=[]
for(var a in e)if(t.hasOwnProperty(a)){if(o.length){r[a]=o
o=[]}}else o.push(a)
var i
var s={}
for(var u in t){if(r.hasOwnProperty(u))for(i=0;i<r[u].length;i++){var c=r[u][i]
s[r[u][i]]=n(c)}s[u]=n(u)}for(i=0;i<o.length;i++)s[o[i]]=n(o[i])
return s}}
t.exports=o},{"./ReactChildren":34}],85:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}}
var a=[]
function i(){var e=document.createElement("div")
var t=e.style
"AnimationEvent"in window||delete o.animationend.animation
"TransitionEvent"in window||delete o.transitionend.transition
for(var n in o){var r=o[n]
for(var i in r)if(i in t){a.push(r[i])
break}}}r.canUseDOM&&i()
function s(e,t,n){e.addEventListener(t,n,false)}function u(e,t,n){e.removeEventListener(t,n,false)}var c={addEndEventListener:function(e,t){if(0===a.length){window.setTimeout(t,0)
return}a.forEach(function(n){s(e,n,t)})},removeEndEventListener:function(e,t){if(0===a.length)return
a.forEach(function(n){u(e,n,t)})}}
t.exports=c},{"./ExecutionEnvironment":22}],86:[function(e,t,n){"use strict"
var r=e("./React")
var o=e("./ReactTransitionChildMapping")
var a=e("./cloneWithProps")
var i=e("./emptyFunction")
var s=e("./merge")
var u=r.createClass({displayName:"ReactTransitionGroup",propTypes:{component:r.PropTypes.func,childFactory:r.PropTypes.func},getDefaultProps:function(){return{component:r.DOM.span,childFactory:i.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillReceiveProps:function(e){var t=o.getChildMapping(e.children)
var n=this.state.children
this.setState({children:o.mergeChildMappings(n,t)})
var r
for(r in t){var a=n&&n.hasOwnProperty(r)
!t[r]||a||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var i=t&&t.hasOwnProperty(r)
!n[r]||i||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentWillMount:function(){this.currentlyTransitioningKeys={}
this.keysToEnter=[]
this.keysToLeave=[]},componentDidUpdate:function(){var e=this.keysToEnter
this.keysToEnter=[]
e.forEach(this.performEnter)
var t=this.keysToLeave
this.keysToLeave=[]
t.forEach(this.performLeave)},performEnter:function(e){this.currentlyTransitioningKeys[e]=true
var t=this.refs[e]
t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e]
t.componentDidEnter&&t.componentDidEnter()
delete this.currentlyTransitioningKeys[e]
var n=o.getChildMapping(this.props.children)
n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=true
var t=this.refs[e]
t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e]
t.componentDidLeave&&t.componentDidLeave()
delete this.currentlyTransitioningKeys[e]
var n=o.getChildMapping(this.props.children)
if(n&&n.hasOwnProperty(e))this.performEnter(e)
else{var r=s(this.state.children)
delete r[e]
this.setState({children:r})}},render:function(){var e={}
for(var t in this.state.children){var n=this.state.children[t]
n&&(e[t]=a(this.props.childFactory(n),{ref:t}))}return this.transferPropsTo(this.props.component(null,e))}})
t.exports=u},{"./React":29,"./ReactTransitionChildMapping":84,"./cloneWithProps":108,"./emptyFunction":116,"./merge":144}],87:[function(e,t,n){"use strict"
var r=e("./CallbackQueue")
var o=e("./PooledClass")
var a=e("./ReactCurrentOwner")
var i=e("./ReactPerf")
var s=e("./Transaction")
var u=e("./invariant")
var c=e("./mixInto")
var l=e("./warning")
var d=[]
var p=null
function f(){u(E.ReactReconcileTransaction&&p,"ReactUpdates: must inject a reconcile transaction class and batching strategy")}var v={initialize:function(){this.dirtyComponentsLength=d.length},close:function(){if(this.dirtyComponentsLength!==d.length){d.splice(0,this.dirtyComponentsLength)
b()}else d.length=0}}
var h={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}}
var m=[v,h]
function g(){this.reinitializeTransaction()
this.dirtyComponentsLength=null
this.callbackQueue=r.getPooled(null)
this.reconcileTransaction=E.ReactReconcileTransaction.getPooled()}c(g,s.Mixin)
c(g,{getTransactionWrappers:function(){return m},destructor:function(){this.dirtyComponentsLength=null
r.release(this.callbackQueue)
this.callbackQueue=null
E.ReactReconcileTransaction.release(this.reconcileTransaction)
this.reconcileTransaction=null},perform:function(e,t,n){return s.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}})
o.addPoolingTo(g)
function _(e,t,n){f()
p.batchedUpdates(e,t,n)}function y(e,t){return e._mountDepth-t._mountDepth}function w(e){var t=e.dirtyComponentsLength
u(t===d.length,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",t,d.length)
d.sort(y)
for(var n=0;n<t;n++){var r=d[n]
if(r.isMounted()){var o=r._pendingCallbacks
r._pendingCallbacks=null
r.performUpdateIfNecessary(e.reconcileTransaction)
if(o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r)}}}var b=i.measure("ReactUpdates","flushBatchedUpdates",function(){while(d.length){var e=g.getPooled()
e.perform(w,null,e)
g.release(e)}})
function C(e,t){u(!t||"function"===typeof t,"enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable.")
f()
l(null==a.current,"enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.")
if(!p.isBatchingUpdates){p.batchedUpdates(C,e,t)
return}d.push(e)
t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t])}var k={injectReconcileTransaction:function(e){u(e,"ReactUpdates: must provide a reconcile transaction class")
E.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){u(e,"ReactUpdates: must provide a batching strategy")
u("function"===typeof e.batchedUpdates,"ReactUpdates: must provide a batchedUpdates() function")
u("boolean"===typeof e.isBatchingUpdates,"ReactUpdates: must provide an isBatchingUpdates boolean attribute")
p=e}}
var E={ReactReconcileTransaction:null,batchedUpdates:_,enqueueUpdate:C,flushBatchedUpdates:b,injection:k}
t.exports=E},{"./CallbackQueue":6,"./PooledClass":28,"./ReactCurrentOwner":40,"./ReactPerf":71,"./Transaction":104,"./invariant":134,"./mixInto":147,"./warning":158}],88:[function(e,t,n){"use strict"
var r=e("./LinkedStateMixin")
var o=e("./React")
var a=e("./ReactComponentWithPureRenderMixin")
var i=e("./ReactCSSTransitionGroup")
var s=e("./ReactTransitionGroup")
var u=e("./cx")
var c=e("./cloneWithProps")
var l=e("./update")
o.addons={CSSTransitionGroup:i,LinkedStateMixin:r,PureRenderMixin:a,TransitionGroup:s,classSet:u,cloneWithProps:c,update:l}
o.addons.Perf=e("./ReactDefaultPerf")
o.addons.TestUtils=e("./ReactTestUtils")
t.exports=o},{"./LinkedStateMixin":24,"./React":29,"./ReactCSSTransitionGroup":32,"./ReactComponentWithPureRenderMixin":37,"./ReactDefaultPerf":54,"./ReactTestUtils":82,"./ReactTransitionGroup":86,"./cloneWithProps":108,"./cx":114,"./update":157}],89:[function(e,t,n){"use strict"
var r=e("./DOMProperty")
var o=r.injection.MUST_USE_ATTRIBUTE
var a={Properties:{cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}}
t.exports=a},{"./DOMProperty":11}],90:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPropagators")
var a=e("./ReactInputSelection")
var i=e("./SyntheticEvent")
var s=e("./getActiveElement")
var u=e("./isTextInputElement")
var c=e("./keyOf")
var l=e("./shallowEqual")
var d=r.topLevelTypes
var p={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}}
var f=null
var v=null
var h=null
var m=false
function g(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd}
if(document.selection){var t=document.selection.createRange()
return{parentElement:t.parentElement(),text:t.text,top:t.boundingTop,left:t.boundingLeft}}var n=window.getSelection()
return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function _(e){if(m||null==f||f!=s())return
var t=g(f)
if(!h||!l(h,t)){h=t
var n=i.getPooled(p.select,v,e)
n.type="select"
n.target=f
o.accumulateTwoPhaseDispatches(n)
return n}}var y={eventTypes:p,extractEvents:function(e,t,n,r){switch(e){case d.topFocus:if(u(t)||"true"===t.contentEditable){f=t
v=n
h=null}break
case d.topBlur:f=null
v=null
h=null
break
case d.topMouseDown:m=true
break
case d.topContextMenu:case d.topMouseUp:m=false
return _(r)
case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return _(r)}}}
t.exports=y},{"./EventConstants":16,"./EventPropagators":21,"./ReactInputSelection":63,"./SyntheticEvent":96,"./getActiveElement":122,"./isTextInputElement":137,"./keyOf":141,"./shallowEqual":153}],91:[function(e,t,n){"use strict"
var r=Math.pow(2,53)
var o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}}
t.exports=o},{}],92:[function(e,t,n){"use strict"
var r=e("./EventConstants")
var o=e("./EventPluginUtils")
var a=e("./EventPropagators")
var i=e("./SyntheticClipboardEvent")
var s=e("./SyntheticEvent")
var u=e("./SyntheticFocusEvent")
var c=e("./SyntheticKeyboardEvent")
var l=e("./SyntheticMouseEvent")
var d=e("./SyntheticDragEvent")
var p=e("./SyntheticTouchEvent")
var f=e("./SyntheticUIEvent")
var v=e("./SyntheticWheelEvent")
var h=e("./invariant")
var m=e("./keyOf")
var g=r.topLevelTypes
var _={blur:{phasedRegistrationNames:{bubbled:m({onBlur:true}),captured:m({onBlurCapture:true})}},click:{phasedRegistrationNames:{bubbled:m({onClick:true}),captured:m({onClickCapture:true})}},contextMenu:{phasedRegistrationNames:{bubbled:m({onContextMenu:true}),captured:m({onContextMenuCapture:true})}},copy:{phasedRegistrationNames:{bubbled:m({onCopy:true}),captured:m({onCopyCapture:true})}},cut:{phasedRegistrationNames:{bubbled:m({onCut:true}),captured:m({onCutCapture:true})}},doubleClick:{phasedRegistrationNames:{bubbled:m({onDoubleClick:true}),captured:m({onDoubleClickCapture:true})}},drag:{phasedRegistrationNames:{bubbled:m({onDrag:true}),captured:m({onDragCapture:true})}},dragEnd:{phasedRegistrationNames:{bubbled:m({onDragEnd:true}),captured:m({onDragEndCapture:true})}},dragEnter:{phasedRegistrationNames:{bubbled:m({onDragEnter:true}),captured:m({onDragEnterCapture:true})}},dragExit:{phasedRegistrationNames:{bubbled:m({onDragExit:true}),captured:m({onDragExitCapture:true})}},dragLeave:{phasedRegistrationNames:{bubbled:m({onDragLeave:true}),captured:m({onDragLeaveCapture:true})}},dragOver:{phasedRegistrationNames:{bubbled:m({onDragOver:true}),captured:m({onDragOverCapture:true})}},dragStart:{phasedRegistrationNames:{bubbled:m({onDragStart:true}),captured:m({onDragStartCapture:true})}},drop:{phasedRegistrationNames:{bubbled:m({onDrop:true}),captured:m({onDropCapture:true})}},focus:{phasedRegistrationNames:{bubbled:m({onFocus:true}),captured:m({onFocusCapture:true})}},input:{phasedRegistrationNames:{bubbled:m({onInput:true}),captured:m({onInputCapture:true})}},keyDown:{phasedRegistrationNames:{bubbled:m({onKeyDown:true}),captured:m({onKeyDownCapture:true})}},keyPress:{phasedRegistrationNames:{bubbled:m({onKeyPress:true}),captured:m({onKeyPressCapture:true})}},keyUp:{phasedRegistrationNames:{bubbled:m({onKeyUp:true}),captured:m({onKeyUpCapture:true})}},load:{phasedRegistrationNames:{bubbled:m({onLoad:true}),captured:m({onLoadCapture:true})}},error:{phasedRegistrationNames:{bubbled:m({onError:true}),captured:m({onErrorCapture:true})}},mouseDown:{phasedRegistrationNames:{bubbled:m({onMouseDown:true}),captured:m({onMouseDownCapture:true})}},mouseMove:{phasedRegistrationNames:{bubbled:m({onMouseMove:true}),captured:m({onMouseMoveCapture:true})}},mouseOut:{phasedRegistrationNames:{bubbled:m({onMouseOut:true}),captured:m({onMouseOutCapture:true})}},mouseOver:{phasedRegistrationNames:{bubbled:m({onMouseOver:true}),captured:m({onMouseOverCapture:true})}},mouseUp:{phasedRegistrationNames:{bubbled:m({onMouseUp:true}),captured:m({onMouseUpCapture:true})}},paste:{phasedRegistrationNames:{bubbled:m({onPaste:true}),captured:m({onPasteCapture:true})}},reset:{phasedRegistrationNames:{bubbled:m({onReset:true}),captured:m({onResetCapture:true})}},scroll:{phasedRegistrationNames:{bubbled:m({onScroll:true}),captured:m({onScrollCapture:true})}},submit:{phasedRegistrationNames:{bubbled:m({onSubmit:true}),captured:m({onSubmitCapture:true})}},touchCancel:{phasedRegistrationNames:{bubbled:m({onTouchCancel:true}),captured:m({onTouchCancelCapture:true})}},touchEnd:{phasedRegistrationNames:{bubbled:m({onTouchEnd:true}),captured:m({onTouchEndCapture:true})}},touchMove:{phasedRegistrationNames:{bubbled:m({onTouchMove:true}),captured:m({onTouchMoveCapture:true})}},touchStart:{phasedRegistrationNames:{bubbled:m({onTouchStart:true}),captured:m({onTouchStartCapture:true})}},wheel:{phasedRegistrationNames:{bubbled:m({onWheel:true}),captured:m({onWheelCapture:true})}}}
var y={topBlur:_.blur,topClick:_.click,topContextMenu:_.contextMenu,topCopy:_.copy,topCut:_.cut,topDoubleClick:_.doubleClick,topDrag:_.drag,topDragEnd:_.dragEnd,topDragEnter:_.dragEnter,topDragExit:_.dragExit,topDragLeave:_.dragLeave,topDragOver:_.dragOver,topDragStart:_.dragStart,topDrop:_.drop,topError:_.error,topFocus:_.focus,topInput:_.input,topKeyDown:_.keyDown,topKeyPress:_.keyPress,topKeyUp:_.keyUp,topLoad:_.load,topMouseDown:_.mouseDown,topMouseMove:_.mouseMove,topMouseOut:_.mouseOut,topMouseOver:_.mouseOver,topMouseUp:_.mouseUp,topPaste:_.paste,topReset:_.reset,topScroll:_.scroll,topSubmit:_.submit,topTouchCancel:_.touchCancel,topTouchEnd:_.touchEnd,topTouchMove:_.touchMove,topTouchStart:_.touchStart,topWheel:_.wheel}
for(var w in y)y[w].dependencies=[w]
var b={eventTypes:_,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n)
if(false===r){e.stopPropagation()
e.preventDefault()}},extractEvents:function(e,t,n,r){var o=y[e]
if(!o)return null
var m
switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:m=s
break
case g.topKeyPress:if(0===r.charCode)return null
case g.topKeyDown:case g.topKeyUp:m=c
break
case g.topBlur:case g.topFocus:m=u
break
case g.topClick:if(2===r.button)return null
case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:m=l
break
case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:m=d
break
case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:m=p
break
case g.topScroll:m=f
break
case g.topWheel:m=v
break
case g.topCopy:case g.topCut:case g.topPaste:m=i}h(m,"SimpleEventPlugin: Unhandled event type, `%s`.",e)
var _=m.getPooled(o,n,r)
a.accumulateTwoPhaseDispatches(_)
return _}}
t.exports=b},{"./EventConstants":16,"./EventPluginUtils":20,"./EventPropagators":21,"./SyntheticClipboardEvent":93,"./SyntheticDragEvent":95,"./SyntheticEvent":96,"./SyntheticFocusEvent":97,"./SyntheticKeyboardEvent":99,"./SyntheticMouseEvent":100,"./SyntheticTouchEvent":101,"./SyntheticUIEvent":102,"./SyntheticWheelEvent":103,"./invariant":134,"./keyOf":141}],93:[function(e,t,n){"use strict"
var r=e("./SyntheticEvent")
var o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticEvent":96}],94:[function(e,t,n){"use strict"
var r=e("./SyntheticEvent")
var o={data:null}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticEvent":96}],95:[function(e,t,n){"use strict"
var r=e("./SyntheticMouseEvent")
var o={dataTransfer:null}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticMouseEvent":100}],96:[function(e,t,n){"use strict"
var r=e("./PooledClass")
var o=e("./emptyFunction")
var a=e("./getEventTarget")
var i=e("./merge")
var s=e("./mergeInto")
var u={type:null,target:a,currentTarget:o.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null}
function c(e,t,n){this.dispatchConfig=e
this.dispatchMarker=t
this.nativeEvent=n
var r=this.constructor.Interface
for(var a in r){if(!r.hasOwnProperty(a))continue
var i=r[a]
this[a]=i?i(n):n[a]}var s=null!=n.defaultPrevented?n.defaultPrevented:false===n.returnValue
this.isDefaultPrevented=s?o.thatReturnsTrue:o.thatReturnsFalse
this.isPropagationStopped=o.thatReturnsFalse}s(c.prototype,{preventDefault:function(){this.defaultPrevented=true
var e=this.nativeEvent
e.preventDefault?e.preventDefault():e.returnValue=false
this.isDefaultPrevented=o.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent
e.stopPropagation?e.stopPropagation():e.cancelBubble=true
this.isPropagationStopped=o.thatReturnsTrue},persist:function(){this.isPersistent=o.thatReturnsTrue},isPersistent:o.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface
for(var t in e)this[t]=null
this.dispatchConfig=null
this.dispatchMarker=null
this.nativeEvent=null}})
c.Interface=u
c.augmentClass=function(e,t){var n=this
var o=Object.create(n.prototype)
s(o,e.prototype)
e.prototype=o
e.prototype.constructor=e
e.Interface=i(n.Interface,t)
e.augmentClass=n.augmentClass
r.addPoolingTo(e,r.threeArgumentPooler)}
r.addPoolingTo(c,r.threeArgumentPooler)
t.exports=c},{"./PooledClass":28,"./emptyFunction":116,"./getEventTarget":125,"./merge":144,"./mergeInto":146}],97:[function(e,t,n){"use strict"
var r=e("./SyntheticUIEvent")
var o={relatedTarget:null}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticUIEvent":102}],98:[function(e,t,n){"use strict"
var r=e("./SyntheticEvent")
var o={data:null}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticEvent":96}],99:[function(e,t,n){"use strict"
var r=e("./SyntheticUIEvent")
var o=e("./getEventKey")
var a=e("./getEventModifierState")
var i={key:o,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:a,charCode:function(e){if("keypress"===e.type)return"charCode"in e?e.charCode:e.keyCode
return 0},keyCode:function(e){if("keydown"===e.type||"keyup"===e.type)return e.keyCode
return 0},which:function(e){return e.keyCode||e.charCode}}
function s(e,t,n){r.call(this,e,t,n)}r.augmentClass(s,i)
t.exports=s},{"./SyntheticUIEvent":102,"./getEventKey":123,"./getEventModifierState":124}],100:[function(e,t,n){"use strict"
var r=e("./SyntheticUIEvent")
var o=e("./ViewportMetrics")
var a=e("./getEventModifierState")
var i={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getEventModifierState:a,button:function(e){var t=e.button
if("which"in e)return t
return 2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}}
function s(e,t,n){r.call(this,e,t,n)}r.augmentClass(s,i)
t.exports=s},{"./SyntheticUIEvent":102,"./ViewportMetrics":105,"./getEventModifierState":124}],101:[function(e,t,n){"use strict"
var r=e("./SyntheticUIEvent")
var o=e("./getEventModifierState")
var a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o}
function i(e,t,n){r.call(this,e,t,n)}r.augmentClass(i,a)
t.exports=i},{"./SyntheticUIEvent":102,"./getEventModifierState":124}],102:[function(e,t,n){"use strict"
var r=e("./SyntheticEvent")
var o=e("./getEventTarget")
var a={view:function(e){if(e.view)return e.view
var t=o(e)
if(null!=t&&t.window===t)return t
var n=t.ownerDocument
return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}}
function i(e,t,n){r.call(this,e,t,n)}r.augmentClass(i,a)
t.exports=i},{"./SyntheticEvent":96,"./getEventTarget":125}],103:[function(e,t,n){"use strict"
var r=e("./SyntheticMouseEvent")
var o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}
function a(e,t,n){r.call(this,e,t,n)}r.augmentClass(a,o)
t.exports=a},{"./SyntheticMouseEvent":100}],104:[function(e,t,n){"use strict"
var r=e("./invariant")
var o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers()
this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[]
this._isInTransaction=false},_isInTransaction:false,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,a,i,s,u){r(!this.isInTransaction(),"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.")
var c
var l
try{this._isInTransaction=true
c=true
this.initializeAll(0)
l=e.call(t,n,o,a,i,s,u)
c=false}finally{try{if(c)try{this.closeAll(0)}catch(e){}else this.closeAll(0)}finally{this._isInTransaction=false}}return l},initializeAll:function(e){var t=this.transactionWrappers
for(var n=e;n<t.length;n++){var r=t[n]
try{this.wrapperInitData[n]=a.OBSERVED_ERROR
this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===a.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(e){}}}},closeAll:function(e){r(this.isInTransaction(),"Transaction.closeAll(): Cannot close transaction when none are open.")
var t=this.transactionWrappers
for(var n=e;n<t.length;n++){var o=t[n]
var i=this.wrapperInitData[n]
var s
try{s=true
i!==a.OBSERVED_ERROR&&o.close&&o.close.call(this,i)
s=false}finally{if(s)try{this.closeAll(n+1)}catch(e){}}}this.wrapperInitData.length=0}}
var a={Mixin:o,OBSERVED_ERROR:{}}
t.exports=a},{"./invariant":134}],105:[function(e,t,n){"use strict"
var r=e("./getUnboundedScrollPosition")
var o={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var e=r(window)
o.currentScrollLeft=e.x
o.currentScrollTop=e.y}}
t.exports=o},{"./getUnboundedScrollPosition":130}],106:[function(e,t,n){"use strict"
var r=e("./invariant")
function o(e,t){r(null!=t,"accumulate(...): Accumulated items must be not be null or undefined.")
if(null==e)return t
var n=Array.isArray(e)
var o=Array.isArray(t)
return n?e.concat(t):o?[e].concat(t):[e,t]}t.exports=o},{"./invariant":134}],107:[function(e,t,n){"use strict"
var r=65521
function o(e){var t=1
var n=0
for(var o=0;o<e.length;o++){t=(t+e.charCodeAt(o))%r
n=(n+t)%r}return t|n<<16}t.exports=o},{}],108:[function(e,t,n){"use strict"
var r=e("./ReactPropTransferer")
var o=e("./keyOf")
var a=e("./warning")
var i=o({children:null})
function s(e,t){a(!e.props.ref,"You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent.")
var n=r.mergeProps(t,e.props)
!n.hasOwnProperty(i)&&e.props.hasOwnProperty(i)&&(n.children=e.props.children)
return e.constructor(n)}t.exports=s},{"./ReactPropTransferer":72,"./keyOf":141,"./warning":158}],109:[function(e,t,n){var r=e("./isTextNode")
function o(e,t){return!(!e||!t)&&(e===t||!r(e)&&(r(t)?o(e,t.parentNode):e.contains?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}t.exports=o},{"./isTextNode":138}],110:[function(e,t,n){function r(e,t,n,r,o,a,i){e=e||{}
if(i)throw new Error("Too many arguments passed to copyProperties")
var s=[t,n,r,o,a]
var u,c=0
while(s[c]){u=s[c++]
for(var l in u)e[l]=u[l]
u.hasOwnProperty&&u.hasOwnProperty("toString")&&"undefined"!=typeof u.toString&&e.toString!==u.toString&&(e.toString=u.toString)}return e}t.exports=r},{}],111:[function(e,t,n){var r=e("./toArray")
function o(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function a(e){return o(e)?Array.isArray(e)?e.slice():r(e):[e]}t.exports=a},{"./toArray":155}],112:[function(e,t,n){"use strict"
var r=e("./ReactCompositeComponent")
var o=e("./invariant")
function a(e){var t=r.createClass({displayName:"ReactFullPageComponent"+(e.type.displayName||""),componentWillUnmount:function(){o(false,"%s tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this.constructor.displayName)},render:function(){return this.transferPropsTo(e(null,this.props.children))}})
return t}t.exports=a},{"./ReactCompositeComponent":38,"./invariant":134}],113:[function(e,t,n){var r=e("./ExecutionEnvironment")
var o=e("./createArrayFrom")
var a=e("./getMarkupWrap")
var i=e("./invariant")
var s=r.canUseDOM?document.createElement("div"):null
var u=/^\s*<(\w+)/
function c(e){var t=e.match(u)
return t&&t[1].toLowerCase()}function l(e,t){var n=s
i(!!s,"createNodesFromMarkup dummy not initialized")
var r=c(e)
var u=r&&a(r)
if(u){n.innerHTML=u[1]+e+u[2]
var l=u[0]
while(l--)n=n.lastChild}else n.innerHTML=e
var d=n.getElementsByTagName("script")
if(d.length){i(t,"createNodesFromMarkup(...): Unexpected <script> element rendered.")
o(d).forEach(t)}var p=o(n.childNodes)
while(n.lastChild)n.removeChild(n.lastChild)
return p}t.exports=l},{"./ExecutionEnvironment":22,"./createArrayFrom":111,"./getMarkupWrap":126,"./invariant":134}],114:[function(e,t,n){function r(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}t.exports=r},{}],115:[function(e,t,n){"use strict"
var r=e("./CSSProperty")
var o=r.isUnitlessNumber
function a(e,t){var n=null==t||"boolean"===typeof t||""===t
if(n)return""
var r=isNaN(t)
if(r||0===t||o.hasOwnProperty(e)&&o[e])return""+t
"string"===typeof t&&(t=t.trim())
return t+"px"}t.exports=a},{"./CSSProperty":4}],116:[function(e,t,n){var r=e("./copyProperties")
function o(e){return function(){return e}}function a(){}r(a,{thatReturns:o,thatReturnsFalse:o(false),thatReturnsTrue:o(true),thatReturnsNull:o(null),thatReturnsThis:function(){return this},thatReturnsArgument:function(e){return e}})
t.exports=a},{"./copyProperties":110}],117:[function(e,t,n){"use strict"
var r={}
Object.freeze(r)
t.exports=r},{}],118:[function(e,t,n){"use strict"
var r={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"}
var o=/[&><"']/g
function a(e){return r[e]}function i(e){return(""+e).replace(o,a)}t.exports=i},{}],119:[function(e,t,n){"use strict"
var r=e("./traverseAllChildren")
var o=e("./warning")
function a(e,t,n){var r=e
var a=!r.hasOwnProperty(n)
o(a,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n)
a&&null!=t&&(r[n]=t)}function i(e){if(null==e)return e
var t={}
r(e,a,t)
return t}t.exports=i},{"./traverseAllChildren":156,"./warning":158}],120:[function(e,t,n){"use strict"
function r(e){e.disabled||e.focus()}t.exports=r},{}],121:[function(e,t,n){"use strict"
var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}
t.exports=r},{}],122:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],123:[function(e,t,n){"use strict"
var r=e("./invariant")
var o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"}
var a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"}
function i(e){if(e.key){var t=o[e.key]||e.key
if("Unidentified"!==t)return t}if("keypress"===e.type){var n="charCode"in e?e.charCode:e.keyCode
return 13===n?"Enter":String.fromCharCode(n)}if("keydown"===e.type||"keyup"===e.type)return a[e.keyCode]||"Unidentified"
r(false,"Unexpected keyboard event type: %s",e.type)}t.exports=i},{"./invariant":134}],124:[function(e,t,n){"use strict"
var r={alt:"altKey",control:"ctrlKey",meta:"metaKey",shift:"shiftKey"}
function o(e){var t=this
var n=t.nativeEvent
if(n.getModifierState)return n.getModifierState(e)
var o=r[e.toLowerCase()]
return o&&n[o]}function a(e){return o}t.exports=a},{}],125:[function(e,t,n){"use strict"
function r(e){var t=e.target||e.srcElement||window
return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],126:[function(e,t,n){var r=e("./ExecutionEnvironment")
var o=e("./invariant")
var a=r.canUseDOM?document.createElement("div"):null
var i={circle:true,defs:true,ellipse:true,g:true,line:true,linearGradient:true,path:true,polygon:true,polyline:true,radialGradient:true,rect:true,stop:true,text:true}
var s=[1,'<select multiple="true">',"</select>"]
var u=[1,"<table>","</table>"]
var c=[3,"<table><tbody><tr>","</tr></tbody></table>"]
var l=[1,"<svg>","</svg>"]
var d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:c,th:c,circle:l,defs:l,ellipse:l,g:l,line:l,linearGradient:l,path:l,polygon:l,polyline:l,radialGradient:l,rect:l,stop:l,text:l}
function p(e){o(!!a,"Markup wrapping node not initialized")
d.hasOwnProperty(e)||(e="*")
if(!i.hasOwnProperty(e)){a.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">"
i[e]=!a.firstChild}return i[e]?d[e]:null}t.exports=p},{"./ExecutionEnvironment":22,"./invariant":134}],127:[function(e,t,n){"use strict"
function r(e){while(e&&e.firstChild)e=e.firstChild
return e}function o(e){while(e){if(e.nextSibling)return e.nextSibling
e=e.parentNode}}function a(e,t){var n=r(e)
var a=0
var i=0
while(n){if(3==n.nodeType){i=a+n.textContent.length
if(a<=t&&i>=t)return{node:n,offset:t-a}
a=i}n=r(o(n))}}t.exports=a},{}],128:[function(e,t,n){"use strict"
var r=9
function o(e){if(!e)return null
return e.nodeType===r?e.documentElement:e.firstChild}t.exports=o},{}],129:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o=null
function a(){!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText")
return o}t.exports=a},{"./ExecutionEnvironment":22}],130:[function(e,t,n){"use strict"
function r(e){if(e===window)return{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}
return{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],131:[function(e,t,n){var r=/([A-Z])/g
function o(e){return e.replace(r,"-$1").toLowerCase()}t.exports=o},{}],132:[function(e,t,n){"use strict"
var r=e("./hyphenate")
var o=/^ms-/
function a(e){return r(e).replace(o,"-ms-")}t.exports=a},{"./hyphenate":131}],133:[function(e,t,n){"use strict"
var r=e("./invariant")
function o(e){return e&&"function"===typeof e.type&&"function"===typeof e.type.prototype.mountComponent&&"function"===typeof e.type.prototype.receiveComponent}function a(e){r(o(e),"Only React Components are valid for mounting.")
return new e.type(e)}t.exports=a},{"./invariant":134}],134:[function(e,t,n){"use strict"
var r=function(e,t,n,r,o,a,i,s){if(void 0===t)throw new Error("invariant requires an error message argument")
if(!e){var u
if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[n,r,o,a,i,s]
var l=0
u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return c[l++]}))}u.framesToPop=1
throw u}}
t.exports=r},{}],135:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o
r.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&true!==document.implementation.hasFeature("",""))
function a(e,t){if(!r.canUseDOM||t&&!("addEventListener"in document))return false
var n="on"+e
var a=n in document
if(!a){var i=document.createElement("div")
i.setAttribute(n,"return;")
a="function"===typeof i[n]}!a&&o&&"wheel"===e&&(a=document.implementation.hasFeature("Events.wheel","3.0"))
return a}t.exports=a},{"./ExecutionEnvironment":22}],136:[function(e,t,n){function r(e){return!!(e&&("function"===typeof Node?e instanceof Node:"object"===typeof e&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName))}t.exports=r},{}],137:[function(e,t,n){"use strict"
var r={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true}
function o(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}t.exports=o},{}],138:[function(e,t,n){var r=e("./isNode")
function o(e){return r(e)&&3==e.nodeType}t.exports=o},{"./isNode":136}],139:[function(e,t,n){"use strict"
function r(e){e||(e="")
var t
var n=arguments.length
if(n>1)for(var r=1;r<n;r++){t=arguments[r]
t&&(e+=" "+t)}return e}t.exports=r},{}],140:[function(e,t,n){"use strict"
var r=e("./invariant")
var o=function(e){var t={}
var n
r(e instanceof Object&&!Array.isArray(e),"keyMirror(...): Argument must be an object.")
for(n in e){if(!e.hasOwnProperty(n))continue
t[n]=n}return t}
t.exports=o},{"./invariant":134}],141:[function(e,t,n){var r=function(e){var t
for(t in e){if(!e.hasOwnProperty(t))continue
return t}return null}
t.exports=r},{}],142:[function(e,t,n){"use strict"
function r(e,t,n){if(!e)return null
var r=0
var o={}
for(var a in e)e.hasOwnProperty(a)&&(o[a]=t.call(n,e[a],a,r++))
return o}t.exports=r},{}],143:[function(e,t,n){"use strict"
function r(e){var t={}
return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e.call(this,n)}}t.exports=r},{}],144:[function(e,t,n){"use strict"
var r=e("./mergeInto")
var o=function(e,t){var n={}
r(n,e)
r(n,t)
return n}
t.exports=o},{"./mergeInto":146}],145:[function(e,t,n){"use strict"
var r=e("./invariant")
var o=e("./keyMirror")
var a=36
var i=function(e){return"object"!==typeof e||null===e}
var s={MAX_MERGE_DEPTH:a,isTerminal:i,normalizeMergeArg:function(e){return void 0===e||null===e?{}:e},checkMergeArrayArgs:function(e,t){r(Array.isArray(e)&&Array.isArray(t),"Tried to merge arrays, instead got %s and %s.",e,t)},checkMergeObjectArgs:function(e,t){s.checkMergeObjectArg(e)
s.checkMergeObjectArg(t)},checkMergeObjectArg:function(e){r(!i(e)&&!Array.isArray(e),"Tried to merge an object, instead got %s.",e)},checkMergeIntoObjectArg:function(e){r((!i(e)||"function"===typeof e)&&!Array.isArray(e),"Tried to merge into an object, instead got %s.",e)},checkMergeLevel:function(e){r(e<a,"Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")},checkArrayStrategy:function(e){r(void 0===e||e in s.ArrayStrategies,"You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")},ArrayStrategies:o({Clobber:true,IndexByIndex:true})}
t.exports=s},{"./invariant":134,"./keyMirror":140}],146:[function(e,t,n){"use strict"
var r=e("./mergeHelpers")
var o=r.checkMergeObjectArg
var a=r.checkMergeIntoObjectArg
function i(e,t){a(e)
if(null!=t){o(t)
for(var n in t){if(!t.hasOwnProperty(n))continue
e[n]=t[n]}}}t.exports=i},{"./mergeHelpers":145}],147:[function(e,t,n){"use strict"
var r=function(e,t){var n
for(n in t){if(!t.hasOwnProperty(n))continue
e.prototype[n]=t[n]}}
t.exports=r},{}],148:[function(e,t,n){"use strict"
var r=e("./invariant")
function o(e,t){r(e&&!/[^a-z0-9_]/.test(e),"You must provide an eventName using only the characters [a-z0-9_]")}t.exports=o},{"./invariant":134}],149:[function(e,t,n){"use strict"
var r=e("./ReactDescriptor")
var o=e("./invariant")
function a(e){o(r.isValidDescriptor(e),"onlyChild must be passed a children with exactly one child.")
return e}t.exports=a},{"./ReactDescriptor":56,"./invariant":134}],150:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o
r.canUseDOM&&(o=window.performance||window.msPerformance||window.webkitPerformance)
t.exports=o||{}},{"./ExecutionEnvironment":22}],151:[function(e,t,n){var r=e("./performance")
r&&r.now||(r=Date)
var o=r.now.bind(r)
t.exports=o},{"./performance":150}],152:[function(e,t,n){"use strict"
var r=e("./ExecutionEnvironment")
var o=function(e,t){e.innerHTML=t}
if(r.canUseDOM){var a=document.createElement("div")
a.innerHTML=" "
""===a.innerHTML&&(o=function(e,t){e.parentNode&&e.parentNode.replaceChild(e,e)
if(t.match(/^[ \r\n\t\f]/)||"<"===t[0]&&(-1!==t.indexOf("<noscript")||-1!==t.indexOf("<script")||-1!==t.indexOf("<style")||-1!==t.indexOf("<meta")||-1!==t.indexOf("<link"))){e.innerHTML="\ufeff"+t
e.firstChild.deleteData(0,1)}else e.innerHTML=t})}t.exports=o},{"./ExecutionEnvironment":22}],153:[function(e,t,n){"use strict"
function r(e,t){if(e===t)return true
var n
for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return false
for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return false
return true}t.exports=r},{}],154:[function(e,t,n){"use strict"
function r(e,t){if(e&&t&&e.type===t.type&&(e.props&&e.props.key)===(t.props&&t.props.key)&&e._owner===t._owner)return true
return false}t.exports=r},{}],155:[function(e,t,n){var r=e("./invariant")
function o(e){var t=e.length
r(!Array.isArray(e)&&("object"===typeof e||"function"===typeof e),"toArray: Array-like object expected")
r("number"===typeof t,"toArray: Object needs a length property")
r(0===t||t-1 in e,"toArray: Object should have keys for indices")
if(e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(e){}var n=Array(t)
for(var o=0;o<t;o++)n[o]=e[o]
return n}t.exports=o},{"./invariant":134}],156:[function(e,t,n){"use strict"
var r=e("./ReactInstanceHandles")
var o=e("./ReactTextComponent")
var a=e("./invariant")
var i=r.SEPARATOR
var s=":"
var u={"=":"=0",".":"=1",":":"=2"}
var c=/[=.:]/g
function l(e){return u[e]}function d(e,t){if(e&&e.props&&null!=e.props.key)return f(e.props.key)
return t.toString(36)}function p(e){return(""+e).replace(c,l)}function f(e){return"$"+p(e)}var v=function(e,t,n,r,u){var c=0
if(Array.isArray(e))for(var l=0;l<e.length;l++){var p=e[l]
var h=t+(t?s:i)+d(p,l)
var m=n+c
c+=v(p,h,m,r,u)}else{var g=typeof e
var _=""===t
var y=_?i+d(e,0):t
if(null==e||"boolean"===g){r(u,null,y,n)
c=1}else if(e.type&&e.type.prototype&&e.type.prototype.mountComponentIntoNode){r(u,e,y,n)
c=1}else if("object"===g){a(!e||1!==e.nodeType,"traverseAllChildren(...): Encountered an invalid child; DOM elements are not valid children of React components.")
for(var w in e)e.hasOwnProperty(w)&&(c+=v(e[w],t+(t?s:i)+f(w)+s+d(e[w],0),n+c,r,u))}else if("string"===g){var b=o(e)
r(u,b,y,n)
c+=1}else if("number"===g){var C=o(""+e)
r(u,C,y,n)
c+=1}}return c}
function h(e,t,n){if(null==e)return 0
return v(e,"",0,t,n)}t.exports=h},{"./ReactInstanceHandles":64,"./ReactTextComponent":83,"./invariant":134}],157:[function(e,t,n){"use strict"
var r=e("./copyProperties")
var o=e("./keyOf")
var a=e("./invariant")
function i(e){return Array.isArray(e)?e.concat():e&&"object"===typeof e?r(new e.constructor,e):e}var s=o({$push:null})
var u=o({$unshift:null})
var c=o({$splice:null})
var l=o({$set:null})
var d=o({$merge:null})
var p=o({$apply:null})
var f=[s,u,c,l,d,p]
var v={}
f.forEach(function(e){v[e]=true})
function h(e,t,n){a(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e)
var r=t[n]
a(Array.isArray(r),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",n,r)}function m(e,t){a("object"===typeof t,"update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?",f.join(", "),l)
if(t.hasOwnProperty(l)){a(1===Object.keys(t).length,"Cannot have more than one key in an object with %s",l)
return t[l]}var n=i(e)
if(t.hasOwnProperty(d)){var o=t[d]
a(o&&"object"===typeof o,"update(): %s expects a spec of type 'object'; got %s",d,o)
a(n&&"object"===typeof n,"update(): %s expects a target of type 'object'; got %s",d,n)
r(n,t[d])}if(t.hasOwnProperty(s)){h(e,t,s)
t[s].forEach(function(e){n.push(e)})}if(t.hasOwnProperty(u)){h(e,t,u)
t[u].forEach(function(e){n.unshift(e)})}if(t.hasOwnProperty(c)){a(Array.isArray(e),"Expected %s target to be an array; got %s",c,e)
a(Array.isArray(t[c]),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",c,t[c])
t[c].forEach(function(e){a(Array.isArray(e),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",c,t[c])
n.splice.apply(n,e)})}if(t.hasOwnProperty(p)){a("function"===typeof t[p],"update(): expected spec of %s to be a function; got %s.",p,t[p])
n=t[p](n)}for(var g in t)v.hasOwnProperty(g)&&v[g]||(n[g]=m(e[g],t[g]))
return n}t.exports=m},{"./copyProperties":110,"./invariant":134,"./keyOf":141}],158:[function(e,t,n){"use strict"
var r=e("./emptyFunction")
var o=r
o=function(e,t){var n=Array.prototype.slice.call(arguments,2)
if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument")
if(!e){var r=0
console.warn("Warning: "+t.replace(/%s/g,function(){return n[r++]}))}}
t.exports=o},{"./emptyFunction":116}]},{},[88])(88)},e.exports=o()
var o},BcB5:function(e,t,n){var r
r=function(e){var t=n("vaeQ")
var r=n("GLiE")
var o=r.pick
var a=t.camelize
return function(e,t){return a(o(e||{},t))}}.call(t,n,t,e),void 0!==r&&(e.exports=r)},C1us:function(e,t,n){var r
r=function(){return function(e,t,n){var r={}
e&&(r=e[t]?e[t]:e)
return n&&Array.isArray(r)?r[0]:r}}.call(t,n,t,e),void 0!==r&&(e.exports=r)},DrtY:function(e,t,n){var r
r=function(e){var t=n("jDx0")
var r={}
var o=0
var a=function(e){this.config=e}
a.prototype.dispatch=function(e,n){var a=t.defer()
var i=++o
var s=r[e]
if(s)s(n,a.resolve,a.reject)
else{console.assert(false,"No action handler registered to:",e)
this.config.onError("No action handler registered to:",e)
a.reject('Unknown action "'+e+'"')}return{promise:a.promise,index:i}}
a.prototype.register=function(e,t){if(r[e])throw new Error("A handler is already registered to '"+e+"'")
r[e]=t}
return a}.call(t,n,t,e),void 0!==r&&(e.exports=r)},EUYw:function(e,t,n){var r
r=function(e){var t=n("eyvc")
var r=n("jDx0")
var o=function(e){this.config=e}
o.prototype.request=function(e){var n=this.config.ajax||t
e.headers=e.headers||{}
e.headers["Content-Type"]="application/json"
e.headers.Accept="application/vnd.api+json"
this.config.apiToken&&(e.headers.Authorization="Bearer "+this.config.apiToken)
"GET"!==e.type&&e.data&&(e.data=JSON.stringify(e.data))
if(this.config.fakeXHRDelay){var o=r.defer()
setTimeout(function(){r.Promise.cast(n(e)).then(o.resolve,o.reject)},this.config.fakeXHRDelay)
return o.promise}return r.Promise.cast(n(e))}
return o}.call(t,n,t,e),void 0!==r&&(e.exports=r)},URgk:function(e,t,n){(function(e){var r="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window
var o=Function.prototype.apply
t.setTimeout=function(){return new a(o.call(setTimeout,r,arguments),clearTimeout)}
t.setInterval=function(){return new a(o.call(setInterval,r,arguments),clearInterval)}
t.clearTimeout=t.clearInterval=function(e){e&&e.close()}
function a(e,t){this._id=e
this._clearFn=t}a.prototype.unref=a.prototype.ref=function(){}
a.prototype.close=function(){this._clearFn.call(r,this._id)}
t.enroll=function(e,t){clearTimeout(e._idleTimeoutId)
e._idleTimeout=t}
t.unenroll=function(e){clearTimeout(e._idleTimeoutId)
e._idleTimeout=-1}
t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))}
n("YBdB")
t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate
t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},W11D:function(e,t,n){var r
r=function(e){var t=n("6Nz/")
var r=t.createClass({displayName:"SightedUserContent",getDefaultProps:function(){return{tagName:"span"}},render:function(){var e=t.DOM[this.props.tagName]
return this.transferPropsTo(e({hidden:true,"aria-hidden":true,role:"presentation","aria-role":"presentation",className:"sighted-user-content"},this.props.children))}})
return r}.call(t,n,t,e),void 0!==r&&(e.exports=r)},XSW2:function(e,t,n){var r
r=function(){return{camelize:function(e,t){return(e||"").replace(/(?:^|[-_])(\w)/g,function(e,n,r){return 0===r&&t?n?n.toLowerCase():"":n?n.toUpperCase():""})},underscore:function(e){return e.replace(/([A-Z])/g,function(e){return"_"+e.toLowerCase()})}}}.call(t,n,t,e),void 0!==r&&(e.exports=r)},YBdB:function(e,t,n){(function(e,t){(function(e,n){"use strict"
if(e.setImmediate)return
var r=1
var o={}
var a=false
var i=e.document
var s
function u(e){"function"!==typeof e&&(e=new Function(""+e))
var t=new Array(arguments.length-1)
for(var n=0;n<t.length;n++)t[n]=arguments[n+1]
var a={callback:e,args:t}
o[r]=a
s(r)
return r++}function c(e){delete o[e]}function l(e){var t=e.callback
var r=e.args
switch(r.length){case 0:t()
break
case 1:t(r[0])
break
case 2:t(r[0],r[1])
break
case 3:t(r[0],r[1],r[2])
break
default:t.apply(n,r)}}function d(e){if(a)setTimeout(d,0,e)
else{var t=o[e]
if(t){a=true
try{l(t)}finally{c(e)
a=false}}}}function p(){s=function(e){t.nextTick(function(){d(e)})}}function f(){if(e.postMessage&&!e.importScripts){var t=true
var n=e.onmessage
e.onmessage=function(){t=false}
e.postMessage("","*")
e.onmessage=n
return t}}function v(){var t="setImmediate$"+Math.random()+"$"
var n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&d(+n.data.slice(t.length))}
e.addEventListener?e.addEventListener("message",n,false):e.attachEvent("onmessage",n)
s=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel
e.port1.onmessage=function(e){var t=e.data
d(t)}
s=function(t){e.port2.postMessage(t)}}function m(){var e=i.documentElement
s=function(t){var n=i.createElement("script")
n.onreadystatechange=function(){d(t)
n.onreadystatechange=null
e.removeChild(n)
n=null}
e.appendChild(n)}}function g(){s=function(e){setTimeout(d,0,e)}}var _=Object.getPrototypeOf&&Object.getPrototypeOf(e)
_=_&&_.setTimeout?_:e
"[object process]"==={}.toString.call(e.process)?p():f()?v():e.MessageChannel?h():i&&"onreadystatechange"in i.createElement("script")?m():g()
_.setImmediate=u
_.clearImmediate=c})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},b0yZ:function(e,t,n){"use strict"
n.r(t)
var r=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"quiz_statistics":{"attempts":"محاولات: %{count} من %{total}","discrimination_index_help":"* يوفر هذا المقياس وسيلة لمعرفة الفرق (للتمييز) بين الطلاب الذين أدوا بشكل جيد في أحد الاختبارات والطلاب الذين لم يحالفهم التوفيق، وذلك عبر سؤال واحد. * ** يقسم المقياس الطلاب إلى ثلاث مجموعات على أساس درجاتهم على مدار الاختبار بالكامل ويعرض المجموعات حسب الطلاب الذين أجابوا عن السؤال إجابة صحيحة. ** *** ****يتوفر المزيد من المعلومات هنا.**** ***","download_submissions":"تنزيل كل الملفات","duration_in_hours":{"one":"ساعة واحدة","other":"%{count} من الساعات"},"duration_in_hours_and_minutes":"%{hours} و%{minutes}","duration_in_minutes":{"one":"دقيقة واحدة ","other":"%{count} دقيقة"},"duration_in_minutes_and_seconds":"%{minutes} و%{seconds}","duration_in_seconds":{"one":"ثانية واحدة","other":"%{count} من الثواني"},"empty_question_breakdown":"لا تتوفر أي إحصائيات أسئلة.","loading_questions":"جارٍ تحميل إحصائيات الأسئلة. يرجى الانتظار.","no_answer":"لا توجد إجابة","question_breakdown":"تصنيف السؤال","question_header":"السؤال %{position}","quiz-stats-noshow-warning":"للروعة حدود. لا يمكننا تحويل إحصائيات هذا الاختبار، ولكن يمكنك تنزيل التقارير.","sad-panda-alttext":"أخبار سيئة في أرض الباندا.","speedgrader":"عرض في SpeedGrader","title":"إحصائيات الاختبار","unknown_answer":"شيء آخر","user_names":"اسماء المستخدم"},"ratio_answered_correctly_b0c1e7d":"تمت الإجابة على %{ratio}% بشكل صحيح","ratio_responded_correctly_6d890107":"تمت الإجابة على %{ratio}% بشكل صحيح","section_filter_cde54d0a":"تصفية القسم","user_count_respondents_e30a8593":"%{user_count} مجيبين"},"cy":{"quiz_statistics":{"attempts":"Ymgais: %{count} allan o %{total}","discrimination_index_help":"* Mae’r metrig hwn yn mesur pa mor dda mae un cwestiwn yn gallu dweud y gwahaniaeth (neu wahaniaethu) rhwng myfyrwyr sy’n gwneud yn dda mewn arholiad a’r rheini sydd ddim. * ** Mae’n rhannu myfyrwyr yn dri grŵp ar sail eu sgoriau yn y cwis cyfan ac yn dangos y grwpiau hynny yn ôl pwy atebodd y cwestiynau’n gywir. ** *** ****Mae rhagor o wybodaeth ar gael yma.**** ***","download_submissions":"Llwytho Pob Ffeil i Lawr","duration_in_hours":{"one":"1 awr","other":"%{count} awr"},"duration_in_hours_and_minutes":"%{hours} a %{minutes}","duration_in_minutes":{"one":"1 munud","other":"%{count} munud"},"duration_in_minutes_and_seconds":"%{minutes} a %{seconds}","duration_in_seconds":{"one":"1 eiliad","other":"%{count} eiliad"},"empty_question_breakdown":"Does dim ystadegau cwestiynau ar gael.","loading_questions":"Mae ystadegau cwestiynau wrthi’n cael eu llwytho. Arhoswch funud.","no_answer":"Dim Ateb","question_breakdown":"Dadansoddiad Cwestiwn","question_header":"Cwestiwn %{position}","quiz-stats-noshow-warning":"Mae pen draw ar wychder hyd yn oed. Fedrwn ni ddim cyflwyno ystadegau ar gyfer y cwis hwn, ond gallwch chi lwytho’r adroddiadau i lawr.","sad-panda-alttext":"Pethau trist yng ngwlad y pandas.","speedgrader":"Gweld yn SpeedGrader","title":"Ystadegau Cwis","unknown_answer":"Rhywbeth arall","user_names":"Enwau Defnyddwyr"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% wedi ateb yn gywir","ratio_responded_correctly_6d890107":"%{ratio}% wedi ymateb yn gywir","section_filter_cde54d0a":"Hidlydd Adran","user_count_respondents_e30a8593":"%{user_count} ymatebwr"},"da":{"quiz_statistics":{"attempts":"Forsøg: %{count} ud af %{total}","discrimination_index_help":"* Denne metrik giver mulighed for at måle, hvor godt et enkelt spørgsmål kan illustrere forskellen (eller diskriminere) mellem studerende, som klarer sig godt til en eksamen og dem, som ikke gør. * ** Den inddeler de studerende i tre grupper ud fra deres resultat i den samlede test og viser disse grupper i henhold til, hvem der svarede korrekt på spørgsmålet. ** *** ****Yderligere oplysninger findes her.**** ***","download_submissions":"Download alle filer","duration_in_hours":{"one":"1 time","other":"%{count} timer"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 minut","other":"%{count} minutter"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"empty_question_breakdown":"Der findes ingen tilgængelige spørgsmålsstatistik.","loading_questions":"Spørgsmålsstatistik indlæses. Vent et lille øjeblik.","no_answer":"Intet svar","question_breakdown":"Nedbrydning af spørgsmål","question_header":"Spørgsmål %{position}","quiz-stats-noshow-warning":"Selv perfektionen har mangler. Vi kan ikke gengive statistik for denne test, men du kan downloade rapporterne.","sad-panda-alttext":"Triste ting i pandaland.","speedgrader":"Vis i SpeedGrader","title":"Teststatistik","unknown_answer":"Noget andet","user_names":"Brugernavne"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% besvaret korrekt","ratio_responded_correctly_6d890107":"%{ratio}% svarede korrekt","section_filter_cde54d0a":"Sektionsfilter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"da-x-k12":{"quiz_statistics":{"attempts":"Forsøg: %{count} ud af %{total}","discrimination_index_help":"* Denne metrik giver mulighed for at måle, hvor godt et enkelt spørgsmål kan illustrere forskellen (eller diskriminere) mellem elever, som klarer sig godt til en eksamen og dem, som ikke gør. * ** Den inddeler eleverne i tre grupper ud fra deres resultat i den samlede quiz og viser disse grupper i henhold til, hvem der svarede korrekt på spørgsmålet. ** *** ****Yderligere oplysninger findes her.**** ***","download_submissions":"Download alle filer","duration_in_hours":{"one":"1 time","other":"%{count} timer"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 minut","other":"%{count} minutter"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"empty_question_breakdown":"Der findes ingen tilgængelige spørgsmålsstatistik.","loading_questions":"Spørgsmålsstatistik indlæses. Vent et lille øjeblik.","no_answer":"Intet svar","question_breakdown":"Nedbrydning af spørgsmål","question_header":"Spørgsmål %{position}","quiz-stats-noshow-warning":"Selv perfektionen har mangler. Vi kan ikke gengive statistik for denne quiz, men du kan downloade rapporterne.","sad-panda-alttext":"Triste ting i pandaland.","speedgrader":"Vis i SpeedGrader","title":"Quizstatistik","unknown_answer":"Noget andet","user_names":"Brugernavne"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% besvaret korrekt","ratio_responded_correctly_6d890107":"%{ratio}% svarede korrekt","section_filter_cde54d0a":"Sektionsfilter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"de":{"quiz_statistics":{"attempts":"Versuche: %{count} von %{total}","discrimination_index_help":"* Diese Kennzahl stellt ein Maß dafür dar, wie gut eine einzelne Frage den Unterschied zwischen Studenten aufzeigen kann, die bei einer Prüfung gut abschneiden, und denen, die schlecht abschneiden. * ** Sie teilt Studenten basierend auf ihrer Punktzahl im gesamten Quiz in drei Gruppen ein und zeigt diese Gruppen danach an, wer die Frage richtig beantwortet hat. ** *** ****Hier erhalten Sie weitere Informationen.**** ***","download_submissions":"Alle Dateien herunterladen","duration_in_hours":{"one":"1 Std.","other":"%{count} Stunden"},"duration_in_hours_and_minutes":"%{hours} und %{minutes}","duration_in_minutes":{"one":"1 Minute","other":"%{count} Minuten"},"duration_in_minutes_and_seconds":"%{minutes} und %{seconds}","duration_in_seconds":{"one":"1 Sekunde","other":"%{count} Sekunden"},"empty_question_breakdown":"Es sind keine Fragestatistiken verfügbar.","loading_questions":"Fragestatistiken werden geladen. Bitte warten Sie einen Moment.","no_answer":"Keine Antwort","question_breakdown":"Fragenaufgliederung","question_header":"Frage %{position}","quiz-stats-noshow-warning":"Selbst Einzigartigkeit hat ihre Grenzen. Wir können keine Statistiken für dieses Quiz darstellen. Sie können jedoch die Berichte herunterladen.","sad-panda-alttext":"Zu schade.","speedgrader":"In SpeedGrader anzeigen","title":"Quiz-Statistik","unknown_answer":"Etwas anderes","user_names":"Benutzernamen"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% haben richtig geantwortet","ratio_responded_correctly_6d890107":"%{ratio}% haben richtig geantwortet","section_filter_cde54d0a":"Abschnittsfilter","user_count_respondents_e30a8593":"%{user_count} Befragte"},"el":{"quiz_statistics":{"attempts":"\\u003cmrk mid=\\"4084\\" mtype=\\"seg\\"\\u003eΠροσπάθειες:\\u003c/mrk\\u003e \\u003cmrk mid=\\"4085\\" mtype=\\"seg\\"\\u003e%{count} από %{total}\\u003c/mrk\\u003e","discrimination_index_help":"\\u003cmrk mid=\\"7053\\" mtype=\\"seg\\"\\u003e* Αυτός ο δείκτης απεικονίζει μια μέτρηση για το πόσο καλά μία μόνο ερώτηση μπορεί να ξεχωρίσει (ή να διακρίνει) μεταξύ των σπουδαστών ποιοι τα πήγαν καλά σε κάποια εξέταση και ποιοι όχι.\\u003c/mrk\\u003e \\u003cmrk mid=\\"7054\\" mtype=\\"seg\\"\\u003e* ** Χωρίζει τους σπουδαστές σε τρεις ομάδες βάσει της βαθμολογίας τους σε όλο το κουίζ και εμφανίζει αυτές τις ομάδες με βάση το ποια απάντησε σωστά στην ερώτηση.\\u003c/mrk\\u003e \\u003cmrk mid=\\"7055\\" mtype=\\"seg\\"\\u003e** *** ****Περισσότερες πληροφορίες διαθέσιμες εδώ.****\\u003c/mrk\\u003e \\u003cmrk mid=\\"7056\\" mtype=\\"seg\\"\\u003e***\\u003c/mrk\\u003e","download_submissions":"Λήψη Όλων των Αρχείων","duration_in_hours":{"one":"1 ώρα","other":"%{count} ώρες"},"duration_in_hours_and_minutes":"%{hours} και %{minutes}","duration_in_minutes":{"one":"1 λεπτό","other":"%{count} λεπτά"},"duration_in_minutes_and_seconds":"%{minutes} και %{seconds}","duration_in_seconds":{"one":"1 δευτερόλεπτο","other":"%{count} δευτερόλεπτα"},"empty_question_breakdown":"Δεν υπάρχουν στατιστικά διαθέσιμα για την ερώτηση.","loading_questions":"\\u003cmrk mid=\\"7060\\" mtype=\\"seg\\"\\u003eΓίνεται φόρτωση των στατιστικών της ερώτησης.\\u003c/mrk\\u003e \\u003cmrk mid=\\"7061\\" mtype=\\"seg\\"\\u003eΠαρακαλώ περιμένετε λίγο.\\u003c/mrk\\u003e","no_answer":"Δεν έχει υπάρξει απάντηση","question_breakdown":"Ανάλυση Ερώτησης","question_header":"%{position} ερώτησης","quiz-stats-noshow-warning":"\\u003cmrk mid=\\"2898\\" mtype=\\"seg\\"\\u003eΑκόμη και η τελειότητα έχει όρια.\\u003c/mrk\\u003e \\u003cmrk mid=\\"2899\\" mtype=\\"seg\\"\\u003eΔεν μπορούμε να παράξουμε στατιστικά για αυτό το κουίζ, αλλά μπορείτε να κάνετε λήψη των αναφορών.\\u003c/mrk\\u003e","sad-panda-alttext":"Σας έχουμε δυσάρεστα νέα.","speedgrader":"Προβολή στο SpeedGrader","title":"Στατιστικά Κουίζ","unknown_answer":"Κάτι άλλο","user_names":"Ονόματα Χρηστών"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% απάντησαν σωστά","ratio_responded_correctly_6d890107":"%{ratio}% απάντησαν σωστά","section_filter_cde54d0a":"Φίλτρο Τομέα","user_count_respondents_e30a8593":"%{user_count} απαντώντες"},"en-AU":{"quiz_statistics":{"attempts":"Attempts: %{count} out of %{total}","discrimination_index_help":"* This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. * ** It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. ** *** ****More information is available here.**** ***","download_submissions":"Download All Files","duration_in_hours":{"one":"1 hour","other":"%{count} hours"},"duration_in_hours_and_minutes":"%{hours} and %{minutes}","duration_in_minutes":{"one":"1 minute","other":"%{count} minutes"},"duration_in_minutes_and_seconds":"%{minutes} and %{seconds}","duration_in_seconds":{"one":"1 second","other":"%{count} seconds"},"empty_question_breakdown":"There are no question statistics available.","loading_questions":"Question statistics are being loaded. Please wait a while.","no_answer":"No Answer","question_breakdown":"Question Breakdown","question_header":"Question %{position}","quiz-stats-noshow-warning":"Even awesomeness has limits. We can\'t render statistics for this quiz, but you can download the reports.","sad-panda-alttext":"Sad things in panda land.","speedgrader":"View in SpeedGrader","title":"Quiz Statistics","unknown_answer":"Something Else","user_names":"User Names"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% answered correctly","ratio_responded_correctly_6d890107":"%{ratio}% responded correctly","section_filter_cde54d0a":"Section Filter","user_count_respondents_e30a8593":"%{user_count} respondents"},"en-AU-x-unimelb":{"section_filter_cde54d0a":"Section Filter"},"en-CA":{"quiz_statistics":{"attempts":"Attempts: %{count} out of %{total}","discrimination_index_help":"* This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. * ** It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. ** *** ****More information is available here.**** ***","download_submissions":"Download All Files","duration_in_hours":{"one":"1 hour","other":"%{count} hours"},"duration_in_hours_and_minutes":"%{hours} and %{minutes}","duration_in_minutes":{"one":"1 minute","other":"%{count} minutes"},"duration_in_minutes_and_seconds":"%{minutes} and %{seconds}","duration_in_seconds":{"one":"1 second","other":"%{count} seconds"},"empty_question_breakdown":"There are no question statistics available.","loading_questions":"Question statistics are being loaded. Please wait a while.","no_answer":"No Answer","question_breakdown":"Question Breakdown","question_header":"Question %{position}","quiz-stats-noshow-warning":"Even awesomeness has limits. We can\'t render statistics for this quiz, but you can download the reports.","sad-panda-alttext":"Sad things in panda land.","speedgrader":"View in SpeedGrader","title":"Quiz Statistics","unknown_answer":"Something Else","user_names":"User Names"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% answered correctly","ratio_responded_correctly_6d890107":"%{ratio}% responded correctly","section_filter_cde54d0a":"Section Filter","user_count_respondents_e30a8593":"%{user_count} respondents"},"en-GB":{"quiz_statistics":{"attempts":"Attempts: %{count} out of %{total}","discrimination_index_help":"* This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. * ** It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. ** *** ****More information is available here.**** ***","download_submissions":"Download all files","duration_in_hours":{"one":"1 hour","other":"%{count} hours"},"duration_in_hours_and_minutes":"%{hours} and %{minutes}","duration_in_minutes":{"one":"1 minute","other":"%{count} minutes"},"duration_in_minutes_and_seconds":"%{minutes} and %{seconds}","duration_in_seconds":{"one":"1 second","other":"%{count} seconds"},"empty_question_breakdown":"There are no question statistics available.","loading_questions":"Question statistics are being loaded. Please wait a while.","no_answer":"No answer","question_breakdown":"Question breakdown","question_header":"Question %{position}","quiz-stats-noshow-warning":"Even awesomeness has limits. We can\'t render statistics for this quiz, but you can download the reports.","sad-panda-alttext":"Sad things in panda land.","speedgrader":"View in SpeedGrader","title":"Quiz Statistics","unknown_answer":"Something else","user_names":"User Names"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% answered correctly","ratio_responded_correctly_6d890107":"%{ratio}% responded correctly","section_filter_cde54d0a":"Section Filter","user_count_respondents_e30a8593":"%{user_count} respondents"},"en-GB-x-lbs":{"section_filter_cde54d0a":"Section Filter"},"en-GB-x-ukhe":{"section_filter_cde54d0a":"Section Filter"},"es":{"quiz_statistics":{"attempts":"Intentos: %{count} de %{total}","discrimination_index_help":"* Esta métrica ofrece una medida sobre lo bien que una sola pregunta puede marcar la diferencia (o discriminar) entre alumnos que hacen un buen trabajo en un examen y aquellos que no. * ** Divide a los alumnos en tres grupos según su puntaje en la evaluación entera y muestra esos grupos por orden, en función de quién respondió a la pregunta correctamente. ** *** ****Más información disponible aquí.**** ***","download_submissions":"Descargar todos los archivos","duration_in_hours":{"one":"1 hora","other":"%{count} horas"},"duration_in_hours_and_minutes":"%{hours} y %{minutes}","duration_in_minutes":{"one":"1 minuto","other":"%{count} minutos"},"duration_in_minutes_and_seconds":"%{minutes} y %{seconds}","duration_in_seconds":{"one":"1 segundo","other":"%{count} segundos"},"empty_question_breakdown":"No hay estadísticas de preguntas disponibles.","loading_questions":"Se están cargando las estadísticas de la pregunta. Espere un momento.","no_answer":"Sin respuesta","question_breakdown":"Desglose de la pregunta","question_header":"Pregunta %{position}","quiz-stats-noshow-warning":"Incluso la genialidad tiene algunos límites. No podemos ofrecerle las estadísticas para este curso, pero puede descargar los informes.","sad-panda-alttext":"Tristeza en el país del panda.","speedgrader":"Ver en SpeedGrader","title":"Estadísticas de la evaluación","unknown_answer":"Otro","user_names":"Nombres del usuario"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% contestadas correctamente","ratio_responded_correctly_6d890107":"%{ratio}% respondidas correctamente","section_filter_cde54d0a":"Filtro de sección","user_count_respondents_e30a8593":"%{user_count} respuestas"},"fa":{"quiz_statistics":{"attempts":"تلاش ها: %{count} از %{total}","discrimination_index_help":"* این معیار متری اندازه گیری می کند که یک پرسش تا چه حد می تواند تفاوت (یا تمایز) بین دانشجویانی که خوب امتحان داده اند و آنهایی که خوب امتحان نداده اند را نشان دهد. * ** این معیار، دانشجویان را بر اساس نمره آنها در کل آزمون به سه گروه تقسیم می کند و این گروه ها را بر اساس اینکه چه کسانی به پرسش پاسخ درست داده اند، نمایش می دهد. ** *** ****اطلاعات بیشتر از اینجا قابل دسترسی است.**** ***","download_submissions":"بارگیری همه فایل ها","duration_in_hours":{"one":"%{count} ساعت","other":"%{count} ساعت"},"duration_in_hours_and_minutes":"%{hours} و %{minutes}","duration_in_minutes":{"one":"%{count} دقیقه","other":"%{count} دقیقه"},"duration_in_minutes_and_seconds":"%{minutes} و %{seconds}","duration_in_seconds":{"one":"%{count} ثانیه","other":"%{count} ثانیه"},"empty_question_breakdown":"آمار مربوط به پرسش موجود نیست.","loading_questions":"آمار پرسش در حال بارگذاری است. لطفا چند لحظه منتظر بمانید.","no_answer":"پاسخ موجود نیست","question_breakdown":"خرابی پرسش","question_header":"پرسش %{position}","quiz-stats-noshow-warning":"حتی ابهت هم محدودیت هایی دارد. نمی توانیم آمار این آزمون را ارائه دهیم، اما می توانیم گزارش ها را بارگیری نماییم.","sad-panda-alttext":"چیزهای غم انگیز در سرزمین پاندا.","speedgrader":"مشاهده در برنامه نمره گذاری سریع","title":"آمار آزمون","unknown_answer":"چیز دیگر","user_names":"نام های کاربری"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% درست پاسخ داد","ratio_responded_correctly_6d890107":"%{ratio}% درست پاسخ داد","section_filter_cde54d0a":"فیلتر بخش","user_count_respondents_e30a8593":"%{user_count} پاسخ دهنده"},"fi":{"section_filter_cde54d0a":"Osaston suodatin"},"fr":{"quiz_statistics":{"attempts":"Tentatives : %{count} sur %{total}","discrimination_index_help":"* Cet indicateur permet de quantifier la différence (ou discrimination) que révèle une question entre les étudiants qui ont de bons résultats à un examen et ceux qui ont moins bien réussi. * ** Il les répartit en trois groupes selon les résultats qu’ils ont obtenus pour l’ensemble du questionnaire et affiche ces groupes selon ceux qui ont donné la bonne réponse à la question. ** *** ****Plus d’infos ici.**** ***","download_submissions":"Télécharger tous les fichiers","duration_in_hours":{"one":"1 heure","other":"%{count} heures"},"duration_in_hours_and_minutes":"%{hours} et %{minutes}","duration_in_minutes":{"one":"1 minute","other":"%{count} minutes"},"duration_in_minutes_and_seconds":"%{minutes} et %{seconds}","duration_in_seconds":{"one":"1 seconde","other":"%{count} secondes"},"empty_question_breakdown":"Il n’y a pas de statistiques disponibles pour la question.","loading_questions":"Les statistiques de la question vont s’afficher. Veuillez patienter.","no_answer":"Aucune réponse","question_breakdown":"Détails de la question","question_header":"Question %{position}","quiz-stats-noshow-warning":"Même le génie a ses limites. Nous ne pouvons pas fournir de statistiques pour ce questionnaire, mais vous pouvez télécharger les rapports.","sad-panda-alttext":"Tout n\'est pas rose dans le monde des pandas.","speedgrader":"Voir dans SpeedGrader","title":"Statistiques du questionnaire","unknown_answer":"Autre chose","user_names":"Noms d\'utilisateurs"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% ont répondu correctement","ratio_responded_correctly_6d890107":"%{ratio}% ont répondu correctement","section_filter_cde54d0a":"Filtre de section","user_count_respondents_e30a8593":"%{user_count} ont répondu"},"fr-CA":{"quiz_statistics":{"attempts":"Tentatives : %{count} sur %{total}","discrimination_index_help":"* Cet indicateur permet de quantifier la différence (ou discrimination) que révèle une question entre les étudiants qui ont de bons résultats à un examen et ceux qui ont moins bien réussi. * ** Il les répartit en trois groupes selon les résultats qu’ils ont obtenus pour l’ensemble du questionnaire et affiche ces groupes selon ceux qui ont donné la bonne réponse à la question. ** *** ****Plus d’infos ici.**** ***","download_submissions":"Télécharger tous les fichiers","duration_in_hours":{"one":"1 heure","other":"%{count} heures"},"duration_in_hours_and_minutes":"%{hours} et %{minutes}","duration_in_minutes":{"one":"1 minute","other":"%{count} minutes"},"duration_in_minutes_and_seconds":"%{minutes} et %{seconds}","duration_in_seconds":{"one":"1 seconde","other":"%{count} secondes"},"empty_question_breakdown":"Il n’y a pas de statistiques disponibles pour la question.","loading_questions":"Les statistiques de la question vont s’afficher. Veuillez patienter.","no_answer":"Aucune réponse","question_breakdown":"Détails de la question","question_header":"Question %{position}","quiz-stats-noshow-warning":"Même le génie a ses limites. Nous ne pouvons pas fournir de statistiques pour ce questionnaire, mais vous pouvez télécharger les rapports.","sad-panda-alttext":"Tout n\'est pas rose dans le monde des pandas.","speedgrader":"Voir dans SpeedGrader","title":"Statistiques du questionnaire","unknown_answer":"Autre chose","user_names":"Noms d\'utilisateurs"},"ratio_answered_correctly_b0c1e7d":"%{ratio} % ont répondu correctement","ratio_responded_correctly_6d890107":"%{ratio} % ont répondu correctement","section_filter_cde54d0a":"Filtre de section","user_count_respondents_e30a8593":"%{user_count} ont répondu"},"he":{"quiz_statistics":{"attempts":"נסיונות: %{count} מתוך %{total}","discrimination_index_help":"* המדד הזה מספק מדידה של ההבדל (או מפלה) בין תלמידים אשר הצטיינו במבחן לבין אלו שלא, על בסיס של שאלה אחת מתוך המבחן. * ** הוא מחלק תלמידים לשלש קבוצות על בסיס הציון של כלל הבוחן ומציג קבוצות אלו לפי המענה הנכון לשאלה. ** *** ***מידע נוסף זמין כאן.*** ***","download_submissions":"הורדת כל הקבצים","duration_in_hours":{"one":"שעה אחת","other":"%{count} שעות"},"duration_in_hours_and_minutes":"%{hours} ו %{minutes}","duration_in_minutes":{"one":"%{count} דקות","other":"%{count} דקות"},"duration_in_minutes_and_seconds":"%{minutes}  ו %{seconds}","duration_in_seconds":{"one":"שניה אחת","other":"%{count} שניות"},"empty_question_breakdown":"אין סטטיסטיקות זמינות לשאלה.","loading_questions":"סטטיסטיקות שאלה נטענות. נא להמתין","no_answer":"אין תשובה","question_breakdown":"התפלגות שאלה","question_header":"שאלה %{position} ","quiz-stats-noshow-warning":"אפילו לנהדרות יש גבולות. איננו יכולים להפיק סטטיסטיקות לבוחן זה, אך ניתן להוריד את הדוחות","sad-panda-alttext":"דברים עצובים קורים בארץ הפנדה.","speedgrader":"הצגה ב SpeedGrader","title":"סטטיסטיקות בוחן","unknown_answer":"משהו אחר","user_names":"שמות משתמשים"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% ענו נכונה","ratio_responded_correctly_6d890107":"%{ratio}% הגיבו נכונה","section_filter_cde54d0a":"מסנן הקבצות","user_count_respondents_e30a8593":"%{user_count} משיבים"},"ht":{"quiz_statistics":{"attempts":"Tantativ: %{count} sou %{total}","discrimination_index_help":"* Endikatè sa a bay mezi sou kijan yon sèl kesyon ka fè diferans (oswa diskriminasyon) ant elèv ki byen reyisi yon egzamen ak lòt ki pa pase. * ** Li divizè elèv yo an twa gwoup an fonksyon de nòt yo fè nan tout quiz yo e afiche gwoup sa yo pa ki gwoup ki reponn kesyon an pi byen. ** *** ****Plis enfòmasyon dispanib la a.**** ***","download_submissions":"Telechaje Tout Fichye","duration_in_hours":{"one":"1 èdtan","other":"%{count} èdtan"},"duration_in_hours_and_minutes":"%{hours} e %{minutes}","duration_in_minutes":{"one":"1 minit","other":"%{count} minit"},"duration_in_minutes_and_seconds":"%{minutes} e %{seconds}","duration_in_seconds":{"one":"1 segond","other":"%{count} segond"},"empty_question_breakdown":"Pa gen estatistik kesyon ki disponib.","loading_questions":"Estatistik kes yo chaje. Tanpri tann yon ti moman.","no_answer":"Pa gen Repons","question_breakdown":"Repatisyon Kesyon","question_header":"Kesyon %{position}","quiz-stats-noshow-warning":"Menm jeneyalite gen limit. Nou paka rann estatistik pou quiz sa a, men ou ka telechaje rapò a.","sad-panda-alttext":"Bagay tris nan tè panda.","speedgrader":"Afiche nan SpeedGrader","title":"Estatistik Quiz","unknown_answer":"Yon lòt Bagay","user_names":"Non Itilizatè"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% reponn kòrèkteman","ratio_responded_correctly_6d890107":"%{ratio}% reponn kòrèkteman","section_filter_cde54d0a":"Filtè Seksyon","user_count_respondents_e30a8593":"%{user_count} repondan"},"hu":{"quiz_statistics":{"attempts":"Próbálkozások: %{count} az összesből %{total}","discrimination_index_help":"* Ez a mérőszám azt mutatja meg, hogy az egyes kérdések mennyire tudnak különbséget tenni (diszkriminálni) azon hallgatók között, akik jól vizsgáznak és azok között, akik nem. * ** A hallgatókat a kvízben elért eredményeik alapján három csoportba sorolja, és az alapján jeleníti meg a csoportokat, hogy kik válaszolták meg a kérdést helyesen. ** *** ****További információk elérhetőek itt.**** ***","download_submissions":"Összes állomány letöltése","duration_in_hours":{"one":"1 óra","other":"%{count} óra"},"duration_in_hours_and_minutes":"%{hours} és %{minutes}","duration_in_minutes":{"one":"1 perc","other":"%{count} perc"},"duration_in_minutes_and_seconds":"%{minutes} és %{seconds}","duration_in_seconds":{"one":"1 másodperc","other":"%{count} másodperc"},"empty_question_breakdown":"Nem találhatóak kérdésstatisztikák","loading_questions":"A kérdésstatisztikák töltődnek. Kérjük, várjon.","no_answer":"Nincs válasz","question_breakdown":"Kérdésenkénti lebontás","question_header":"%{position} kérdés","quiz-stats-noshow-warning":"Nem tudjuk elkészíteni ennek a kvíznek a statisztikáit, de letöltheti a jelentéseket.","sad-panda-alttext":"A panda programnyelvben bábeli zűrzavar keletkezett. ","speedgrader":"Megtekintés a Gyorsértékelőben","title":"Kvízstatisztika","unknown_answer":"Valami más","user_names":"Felhasználónevek"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% felelt helyesen","ratio_responded_correctly_6d890107":"%{ratio}% válaszolt helyesen","section_filter_cde54d0a":"Szekciószűrő","user_count_respondents_e30a8593":"%{user_count} válaszadó"},"hy":{"quiz_statistics":{"attempts":"Փորձեր՝ %{total}-ից %{count} ","discrimination_index_help":"*Այս ցուցանիշը ներկայացնում է, թե ինչպես եզակի հարցը կարող է ցույց տալ այն ունկնդիրների միջև տարբերությունը (տարանջատումը), ովքեր լավ են իրենց դրսևորում քննության ժամանակ և ովքեր՝վատ: * ** Այն ունկնդիրներին բաժանում է երեք խմբի, հիմվելով ամբողջ թեստի համար նրանց ստացած գնահատականի վրա և արտացոլում է այդ խմբերը, որոնք տվել են ճիշտ պատասխան: ** *** **** Լրացուցիչ տեղեկությունները հասանելի են այստեղ: **** ***","download_submissions":"Ներբեռնել բոլոր ֆայլերը","duration_in_hours":{"one":"1 ժամ","other":"%{count} ժամ"},"duration_in_hours_and_minutes":"%{hours} և %{minutes}","duration_in_minutes":{"one":"1 րոպե","other":"%{count} րոպե"},"duration_in_minutes_and_seconds":"%{minutes} և %{seconds}","duration_in_seconds":{"one":"1 վայրկյան","other":"%{count} վայրկյան"},"empty_question_breakdown":"Հարցերի վիճակագրություն չկա: ","loading_questions":"Հարցի վիճակագրությունը բեռնվում է: Խնդրում ենք մի փոքր սպասել:","no_answer":"Պատասխան չկա","question_breakdown":"Հարցի բացվածք","question_header":" %{position} հարց ","quiz-stats-noshow-warning":"Նույնիսկ աներևակայելին ունի իր սահմանները: Մենք չենք կարող վիճակագրություն ստեղծել այս թեստի համար, բայց դուք կարող եք բեռնել հաշվետվությունները: ","sad-panda-alttext":"Տխուր լուրեր պանդաների երկրից:","speedgrader":"Դիտել «Արագ գնահատման համակարգ»-ում","title":"Թեստի վիճակագրություն","unknown_answer":"Այլ Բան","user_names":"Օգտատերերի անուններ"},"section_filter_cde54d0a":"Բաժնի ֆիլտր"},"is":{"quiz_statistics":{"attempts":"Tilraunir: %{count} af %{total}","discrimination_index_help":"* Þetta fall mælir hversu vel ein spurning getur sýnt muninn (eða aðgreint) milli nemenda sem gengur vel á prófi og hinum sem gengur ekki vel. * ** Það skiptir nemendum í þrjá hópa á grundvelli einkunna þeirra á öllu prófinu og sýnir þessa hópa eftir þeim sem svöruðu spurningunni rétt. ** *** ****Nánari upplýsingar hérna.**** ***","download_submissions":"Hlaða niður öllum skrám","duration_in_hours":{"one":"1 klukkustund","other":"%{count} klukkustundir"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 mínúta","other":"%{count} mínútur"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekúnda","other":"%{count} sekúndur"},"empty_question_breakdown":"Engar spurningatölfræði er tiltæk.","loading_questions":"Verið er að sækja spurningatöllfræði, augnablik.","no_answer":"Ekkert svar","question_breakdown":"Sundurliðun spurningar","question_header":"Spurning %{position}","quiz-stats-noshow-warning":"Jafnvel snilld hefur sín takmörk. Við getum ekki sýnt tölfræði fyrir prófið en þú getur sótt skýrslurnar.","sad-panda-alttext":"Ekkert í sóma í Oklahóma.","speedgrader":"Skoða í SpeedGrader","title":"Próftölur","unknown_answer":"Eitthvað annað","user_names":"Notandanöfn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% svaraði rétt","ratio_responded_correctly_6d890107":"%{ratio}% svaraði rétt","section_filter_cde54d0a":"Hlutasía","user_count_respondents_e30a8593":"%{user_count} svarendur"},"it":{"quiz_statistics":{"attempts":"Tentativi: %{count} su %{total}","discrimination_index_help":"* Questa metrica fornisce una misura di come una singola domanda possa fare la differenza (o discriminare) tra gli studenti che superano con profitto gli esami e quelli che non vanno bene. * ** Divide gli studenti in tre gruppi sulla base del punteggio ottenuto nell\'intero quiz e visualizza questi gruppi in base a chi ha risposto correttamente alla domanda. ** *** ****Altre informazioni sono disponibili qui.**** ***","download_submissions":"Scarica tutti i file","duration_in_hours":{"one":"1 ora","other":"%{count} ore"},"duration_in_hours_and_minutes":"%{hours} e %{minutes}","duration_in_minutes":{"one":"1 minuto","other":"%{count} minuti"},"duration_in_minutes_and_seconds":"%{minutes} e %{seconds}","duration_in_seconds":{"one":"1 secondo","other":"%{count} secondi"},"empty_question_breakdown":"Non sono disponibili statistiche delle domande.","loading_questions":"Le statistiche delle domande sono in fase di caricamento. Attendi un attimo.","no_answer":"Nessuna risposta","question_breakdown":"Ripartizione domande","question_header":"Domanda %{position}","quiz-stats-noshow-warning":"Anche lo straordinario ha dei limiti. Non possiamo eseguire il rendering delle statistiche per questo quiz, ma puoi scaricare i report.","sad-panda-alttext":"Eventi tristi nella terra dei panda.","speedgrader":"Visualizza in SpeedGrader","title":"Statistiche quiz","unknown_answer":"Qualcos\'altro","user_names":"Nomi utente"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% di risposte corrette","ratio_responded_correctly_6d890107":"%{ratio}% di risposte corrette","section_filter_cde54d0a":"Filtro sezione","user_count_respondents_e30a8593":"%{user_count} rispondenti"},"ja":{"quiz_statistics":{"attempts":"試行: %{count} / %{total}","discrimination_index_help":"* この指標は、特定の質問が、試験で成績の良い受講者と成績の良くない受講者を判別 (識別) するための基準としてどの程度役立つかを示すものです。* ** この指標では、受講生をクイズ全体のスコアに基づいて 3 つのグループに分け、質問に正しく回答した受講生ごとのグループを表示します。**  *** ****詳細についてはこちらをご覧ください。**** ***","download_submissions":"すべてのファイルのダウンロード","duration_in_hours":{"one":"%{count} 時間","other":"%{count} 時間"},"duration_in_hours_and_minutes":"%{hours} 時間 %{minutes} 分","duration_in_minutes":{"one":"%{count} 分","other":"%{count} 分"},"duration_in_minutes_and_seconds":"%{minutes} 分 %{seconds} 秒","duration_in_seconds":{"one":"%{count} 秒","other":"%{count} 秒"},"empty_question_breakdown":"利用できる質問の統計がありません。","loading_questions":"質問の統計を読み込んでいます。しばらくお待ちください。","no_answer":"解答なし","question_breakdown":"質問の分類","question_header":"質問  %{position}","quiz-stats-noshow-warning":"このクイズの統計を表示することはできませんが、レポートをダウンロードできます。","sad-panda-alttext":"パンダ ランドの悲しい出来事。","speedgrader":"SpeedGrader で表示","title":"クイズの統計情報","unknown_answer":"その他","user_names":"ユーザ名"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% aが正しく回答されています ","ratio_responded_correctly_6d890107":"%{ratio}% が正しく回答されています","section_filter_cde54d0a":"セクションフィルター","user_count_respondents_e30a8593":"%{user_count} の回答者"},"ko":{"quiz_statistics":{"download_submissions":"모든 파일 다운로드","duration_in_minutes":{"one":"%{count}분","other":"%{count}분"},"no_answer":"답 없음","title":"퀴즈 통계"}},"mi":{"quiz_statistics":{"attempts":"Nganatanga: %{count} i roto i te %{total}","discrimination_index_help":"* Tēnei ngahuru whakarato te mehua o te pai te pātai kotahi e taea te kōrero i te rerekētanga (rānei tātari) i waenganui i ngā ākonga e mahi pai i runga i te whakamātautau me te hunga e kore e mahi nei i. * ** Tuwhaina ngā ākonga ki ngā rōpū e toru e hāngai ana i runga i tō rātou Kaute i runga i te katoa o te quiz, me te Whakātu te hunga rōpū i whakahoki te pātai tika. ** *** **** Ētahi atu mōhiohio e wātea ana i konei. **** ***","download_submissions":"Tikiake Kōnae Katoa","duration_in_hours":{"one":"1 haora","other":"%{count} haora"},"duration_in_hours_and_minutes":"%{hours} me te %{minutes}","duration_in_minutes":{"one":"1 meneti","other":"%{count} meneti"},"duration_in_minutes_and_seconds":"%{minutes} me te %{seconds}","duration_in_seconds":{"one":"1 hēkona","other":"%{count} hēkona"},"empty_question_breakdown":"Karekau he tatauranga pātai e wātea ana.","loading_questions":"Kei te utaina tatauranga Pātai. Tēnā koa Tatari mo te wā poto","no_answer":"Kaore he Whakautu","question_breakdown":"rärangi i pātai","question_header":"Pātai %{position}","quiz-stats-noshow-warning":"He rohe Ahakoa tumeke. E kore e taea te hoatu e mātou tatauranga mō tēnei quiz, ēngari ka taea e koe te tiki i te pūrongo.","sad-panda-alttext":"Mea Pouri i te whenua Panda.","speedgrader":"Tirohia i roto i te SpeedGrader","title":"Quiz Tatauranga","unknown_answer":"Te tahi mea Penei","user_names":"Ingoa kaiwhakamahi"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% whakautu tika","ratio_responded_correctly_6d890107":"%{ratio}% urupare tika","section_filter_cde54d0a":"Wāhanga Tātari","user_count_respondents_e30a8593":"%{user_count} kaiurupare"},"nb":{"quiz_statistics":{"attempts":"Forsøk: %{count} av %{total}","discrimination_index_help":"* Dette måltallet gir et mål på hvor godt et enkelt spørsmål kan fortelle forskjellen (eller diskriminere) mellom studenter som gjør det bra på en eksamen og de som ikke gjør det. * ** Den deler student inn i tre grupper basert på deres resultat på hele testen og viser de grupper som svarte på spørsmålet riktig. ** *** ****Mer informasjon er tilgjengelig her.**** ***","download_submissions":"Last ned alle filer","duration_in_hours":{"one":"1 time","other":"%{count} timer"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 minutt","other":"%{count} minutter"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder "},"empty_question_breakdown":"Det er ingen spørsmålstatistikk tilgjengelig.","loading_questions":"Spørsmålsstatistikk blir lastet. Vennligst vent en stund.","no_answer":"Intet svar","question_breakdown":"Sammendrag av spørsmål","question_header":"Spørsmål %{position}","quiz-stats-noshow-warning":"Enda magi har grenser. Vi kan ikke gjengi statistikk for denne testen, men du kan laste ned rapportene.","sad-panda-alttext":"Triste tinge i pandaland.","speedgrader":"Vis i SpeedGrader","title":"Teststatistikk","unknown_answer":"Noe annet","user_names":"brukernavn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% svart riktig","ratio_responded_correctly_6d890107":"%{ratio}% responderte riktig","section_filter_cde54d0a":"seksjon filter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"nb-x-k12":{"quiz_statistics":{"attempts":"Forsøk: %{count} av %{total}","discrimination_index_help":"* Dette måltallet gir et mål på hvor godt et enkelt spørsmål kan fortelle forskjellen (eller diskriminere) mellom elever som gjør det bra på en eksamen og de som ikke gjør det. * ** Den deler elev inn i tre grupper basert på deres resultat på hele testen og viser de grupper som svarte på spørsmålet riktig. ** *** ****Mer informasjon er tilgjengelig her.**** ***","download_submissions":"Last ned alle filer","duration_in_hours":{"one":"1 time","other":"%{count} timer"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 minutt","other":"%{count} minutter"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"empty_question_breakdown":"Det er ingen spørsmålstatistikk tilgjengelig.","loading_questions":"Spørsmålsstatistikk blir lastet. Vennligst vent en stund.","no_answer":"Intet svar","question_breakdown":"Sammendrag av spørsmål","question_header":"Spørsmål %{position}","quiz-stats-noshow-warning":"Enda magi har grenser. Vi kan ikke gjengi statistikk for denne testen, men du kan laste ned rapportene.","sad-panda-alttext":"Triste tinge i pandaland.","speedgrader":"Vis i SpeedGrader","title":"Teststatistikk","unknown_answer":"Noe annet","user_names":"brukernavn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% svart riktig","ratio_responded_correctly_6d890107":"%{ratio}% responderte riktig","section_filter_cde54d0a":"seksjon filter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"nl":{"quiz_statistics":{"attempts":"Pogingen: %{count} uit %{total}","discrimination_index_help":"* Deze statistiek biedt een maat voor hoe goed een enkele vraag het verschil kan aangeven (of onderscheiden) tussen cursisten die het goed doen op een examen en degenen waarbij dat niet het geval is. * ** Het verdeelt cursisten in drie groepen op basis van hun cijfer voor de hele toets en geeft die groepen aan die de vraag goed beantwoord hebben. ** *** ****Meer informatie hier beschikbaar.**** ***","download_submissions":"Alle bestanden downloaden","duration_in_hours":{"one":"1 uur","other":"%{count} uren"},"duration_in_hours_and_minutes":"%{hours} en %{minutes}","duration_in_minutes":{"one":"1 minuut","other":"%{count} minuten"},"duration_in_minutes_and_seconds":"%{minutes} en %{seconds}","duration_in_seconds":{"one":"1 seconde","other":"%{count} seconden"},"empty_question_breakdown":"Er zijn geen statistieken over de vraag beschikbaar.","loading_questions":"Statistieken over de vraag worden geladen. Even geduld.","no_answer":"Geen antwoord","question_breakdown":"Uitsplitsing van de vraag","question_header":"Vraag %{position}","quiz-stats-noshow-warning":"Zelfs verrukking kent grenzen. We kunnen geen statistieken voor deze quiz leveren, maar je kunt de rapporten downloaden.","sad-panda-alttext":"Droevige dingen in pandaland.","speedgrader":"In SpeedGrader weergeven","title":"Toetsstatistieken","unknown_answer":"Iets anders","user_names":"Gebruikersnamen"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% hebben juist beantwoord","ratio_responded_correctly_6d890107":"%{ratio}% hebben juist beantwoord","section_filter_cde54d0a":"Sectiefilter","user_count_respondents_e30a8593":"%{user_count} respondents"},"nn":{"quiz_statistics":{"attempts":"Forsøk: %{count} av %{total}","discrimination_index_help":"* Diagrammet viser i kva grad eit enkelt spørsmål kan seie noko om forskjellen mellom (eller plukke ut) studentar som gjer det bra på eksamen og dei som ikkje gjer det. * ** Studentane er delte inn i tre grupper basert på resultatet for heile quizen, og sorterer gruppene etter kven som har svart rett på spørsmålet. ** *** ****Lær meir om quizstatistikk.**** ***","download_submissions":"Last ned alle filer","duration_in_hours":{"one":"1 time","other":"%{count} timar"},"duration_in_hours_and_minutes":"%{hours} og %{minutes}","duration_in_minutes":{"one":"1 minutt","other":"%{count} minutt"},"duration_in_minutes_and_seconds":"%{minutes} og %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekund"},"empty_question_breakdown":"Det finst ikkje tilgjengeleg statistikk for spørsmål.","loading_questions":"Spørsmålstatistikk blir lasta. Vent litt.","no_answer":"Ikkje svar","question_breakdown":"Nedbryting av spørsmål","question_header":"Spørsmål %{position}","quiz-stats-noshow-warning":"Til og med det fantastiske har sine grenser. Vi kan ikkje vise statistikk for denne quizen, men du kan laste ned rapportane.","sad-panda-alttext":"Triste hendingar i panda-land.","speedgrader":"Vis i SpeedGrader","title":"Quiz-statistikk","unknown_answer":"Noko anna","user_names":"Brukarnamn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% korrekte svar","ratio_responded_correctly_6d890107":"%{ratio}% korrekt respons","section_filter_cde54d0a":"Seksjonsfilter","user_count_respondents_e30a8593":"%{user_count} respondentar"},"pl":{"quiz_statistics":{"attempts":"Liczba prób: %{count} z %{total}","discrimination_index_help":"* Ten pomiar podpowiada, jak pojedyncze pytanie może wpłynąć na różnicę (lub ją wywołać) między uczestnikami, którzy dobrze i źle radzą sobie na egzaminie.* ** Przyporządkowuje uczestników do trzech grup na podstawie wyniku z całego testu i wyświetla grupy według poprawnych odpowiedzi.** *** ****Więcej informacji można zasięgnąć tutaj.**** *** ","download_submissions":"Pobierz wszystkie pliki","duration_in_hours":{"one":"1 godzina","other":"%{count} godzin"},"duration_in_hours_and_minutes":"Liczba godzin %{hours} i minut %{minutes}","duration_in_minutes":{"one":"1 minuta","other":"%{count} minuty"},"duration_in_minutes_and_seconds":"Liczba minut %{minutes} i sekund %{seconds}","duration_in_seconds":{"one":"1 sekunda","other":"%{count} sekund"},"empty_question_breakdown":"Brak dostępnej statystyki pytania.","loading_questions":"Trwa ładowanie statystyki pytania. Poczekaj chwilę.","no_answer":"Brak odpowiedzi","question_breakdown":"Podział pytania","question_header":"Pytanie %{position}","quiz-stats-noshow-warning":"Nawet bycie wspaniałym ma granice. Nie możemy odtworzyć statystyk do tego testu, ale możesz pobrać raporty.","sad-panda-alttext":"Smutne rzeczy w kraju pand.","speedgrader":"Zobacz w programie SpeedGrader","title":"Statystyki testu","unknown_answer":"Coś innego","user_names":"Nazwy użytkowników"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% odpowiedziało poprawnie","ratio_responded_correctly_6d890107":"%{ratio}% odpowiedziało poprawnie","section_filter_cde54d0a":"Filtry sekcji","user_count_respondents_e30a8593":"%{user_count} respondentów"},"pt":{"quiz_statistics":{"attempts":"Tentativas: %{count} em %{total}","discrimination_index_help":"* Esta estatística permite medir a capacidade de uma única pergunta de fazer a distinção (ou discriminar) entre alunos que têm um bom resultado num exame e os que não têm um bom resultado. * ** Divide os alunos em três grupos com base na pontuação que têm em todo o teste e apresenta esses grupos segundo os que responderam à pergunta corretamente. ** *** ****Estão disponíveis mais informações aqui.**** ***","download_submissions":"Descarregar todos os ficheiros","duration_in_hours":{"one":"1 hora","other":"%{count} horas"},"duration_in_hours_and_minutes":"%{hours} e %{minutes}","duration_in_minutes":{"one":"1 minuto","other":"%{count} minutos"},"duration_in_minutes_and_seconds":"%{minutes} e %{seconds}","duration_in_seconds":{"one":"1 segundo","other":"%{count} segundos"},"empty_question_breakdown":"Não existem estatísticas de perguntas disponíveis.","loading_questions":"A carregar estatísticas de perguntas. Aguarde um pouco.","no_answer":"Sem resposta","question_breakdown":"Divisão de perguntas","question_header":"Pergunta %{position}","quiz-stats-noshow-warning":"Mesmo o fantástico tem limites. Não conseguimos reproduzir estatísticas relativas a este teste, mas pode descarregar os relatórios.","sad-panda-alttext":"Coisas tristes na terra do panda.","speedgrader":"Ver no SpeedGrader","title":"Estatísticas do teste","unknown_answer":"Outra coisa","user_names":"Nome de Usuários"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% de respostas corretas","ratio_responded_correctly_6d890107":"%{ratio} responderam corretamente","section_filter_cde54d0a":"Seção de filtro","user_count_respondents_e30a8593":"%{user_count} respostas"},"pt-BR":{"quiz_statistics":{"attempts":"Tentativas: %{count} de %{total}","discrimination_index_help":"* Esta métrica prevê uma medida de quão bem uma única pergunta pode dizer a diferença (ou discriminar) entre os alunos que se saem bem em um exame e aqueles que não se saem tão bem. * ** Ela divide os alunos em três grupos com base na sua pontuação em todo o questionário e exibe esses grupos por quem respondeu a pergunta corretamente. ** *** **** Mais informações estão disponíveis aqui. **** ***","download_submissions":"Baixar todos os arquivos","duration_in_hours":{"one":"1 hora","other":"%{count} horas"},"duration_in_hours_and_minutes":"%{hours} e %{minutes}","duration_in_minutes":{"one":"1 minuto","other":"%{count} minutos"},"duration_in_minutes_and_seconds":"%{minutes} e %{seconds}","duration_in_seconds":{"one":"1 segundo","other":"%{count} segundos"},"empty_question_breakdown":"Não existem estatísticas de pergunta disponíveis.","loading_questions":"Estatísticas de pergunta estão sendo carregadas. Aguarde um momento.","no_answer":"Sem resposta","question_breakdown":"Discriminação da pergunta","question_header":"Pergunta %{position}","quiz-stats-noshow-warning":"Mesmo coisas incríveis têm limites. Não podemos renderizar as estatísticas para este quiz, mas você pode fazer o download dos relatórios.","sad-panda-alttext":"Coisas tristes em terra de panda.","speedgrader":"Visualizar no SpeedGrader","title":"Estatísticas do teste","unknown_answer":"Outro","user_names":"Nomes de Usuário"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% responderam corretamente","ratio_responded_correctly_6d890107":"%{ratio}% responderam corretamente","section_filter_cde54d0a":"Filtro de Seção","user_count_respondents_e30a8593":"%{user_count} respondentes"},"ru":{"quiz_statistics":{"attempts":"Попытки: %{count} из %{total}","discrimination_index_help":"* Данный показатель представляет собой меру того, насколько хорошо один вопрос может показать разницу (или разделение) между студентами, которые хорошо справляются с экзаменом, и студентами, которые с ним не справляются. * ** Он делит студентов на три группы, основываясь на их оценке за всю контрольную работу, и отображает эти группы, опираясь на то, кто дал правильный ответ. ** *** ****Дополнительную информацию можно найти здесь.**** ***","download_submissions":"Скачать все файлы","duration_in_hours":{"one":"1 час","other":"%{count} часов"},"duration_in_hours_and_minutes":"%{hours} и %{minutes}","duration_in_minutes":{"one":"1 минута","other":"%{count} минут"},"duration_in_minutes_and_seconds":"%{minutes} и %{seconds}","duration_in_seconds":{"one":"1 секунда","other":"%{count} секунд"},"empty_question_breakdown":"Доступная статистика по вопросу отсутствует.","loading_questions":"Статистика по вопросу загружается. Пожалуйста, подождите немного.","no_answer":"Отсутствует ответ","question_breakdown":"Разбивка вопроса","question_header":"Вопрос %{position}","quiz-stats-noshow-warning":"Даже у невероятного есть свои пределы. Мы не можем создать статистику по данной контрольной работе, однако вы можете загрузить отчеты.","sad-panda-alttext":"Грустные вести из пандарии.","speedgrader":"Смотреть в SpeedGrader","title":"Статистика контрольной работы","unknown_answer":"Что-то еще","user_names":"Имена пользователей"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% aответили верно.","ratio_responded_correctly_6d890107":"%{ratio}% ответили верно.","section_filter_cde54d0a":"Фильтр разделов","user_count_respondents_e30a8593":"%{user_count} респондентов"},"sl":{"section_filter_cde54d0a":"Filter sekcije"},"sv":{"quiz_statistics":{"attempts":"Försök: %{count} av %{total}","discrimination_index_help":"* Denna statistik erbjuder en mätning av hur väl en enda fråga kan skilja (eller diskriminera) mellan studenter som gör bra ifrån sig på ett prov och de som inte gör bra ifrån sig. * **Det delar in studenterna i tre grupper baserade på deras poäng från Quiz och visar grupperna efter vem som gett korrekt svar på frågorna. ** *** ****Mer information finns tillgänglig här.**** ***","download_submissions":"Ladda ner alla filer","duration_in_hours":{"one":"1 timme","other":"%{count} timmar"},"duration_in_hours_and_minutes":"%{hours} och %{minutes}","duration_in_minutes":{"one":"1 minut","other":"%{count} minuter"},"duration_in_minutes_and_seconds":"%{minutes} och %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"empty_question_breakdown":"Ingen frågestatistik är tillgänglig.","loading_questions":"Frågestatistik laddas. Vänligen vänta ett ögonblick.","no_answer":"Inget svar","question_breakdown":"Uppdelning av fråga","question_header":"Fråga %{position}","quiz-stats-noshow-warning":"Även förträffligheten har sina gränser. Vi kan inte visa statistik för detta Quiz, men du kan ladda ner rapporten.","sad-panda-alttext":"Tråkiga saker i panda land.","speedgrader":"Visa i SpeedGrader","title":"Quizstatistik","unknown_answer":"Något annat","user_names":"Användarnamn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% svarade korrekt","ratio_responded_correctly_6d890107":"%{ratio}% svarade korrekt","section_filter_cde54d0a":"Sektionsfilter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"sv-x-k12":{"quiz_statistics":{"attempts":"Försök: %{count} av %{total}","discrimination_index_help":"* Denna statistik erbjuder en mätning av hur väl en enda fråga kan skilja (eller diskriminera) mellan elever som gör bra ifrån sig på ett prov och de som inte gör bra ifrån sig. * **Det delar in eleverna i tre grupper baserade på deras poäng från Quiz och visar grupperna efter vem som gett korrekt svar på frågorna. ** *** ****Mer information finns tillgänglig här.**** ***","download_submissions":"Ladda ner alla filer","duration_in_hours":{"one":"1 timme","other":"%{count} timmar"},"duration_in_hours_and_minutes":"%{hours} och %{minutes}","duration_in_minutes":{"one":"1 minut","other":"%{count} minuter"},"duration_in_minutes_and_seconds":"%{minutes} och %{seconds}","duration_in_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"empty_question_breakdown":"Ingen frågestatistik är tillgänglig.","loading_questions":"Frågestatistik laddas. Vänligen vänta ett ögonblick.","no_answer":"Inget svar","question_breakdown":"Uppdelning av fråga","question_header":"Fråga %{position}","quiz-stats-noshow-warning":"Även förträffligheten har sina gränser. Vi kan inte visa statistik för detta Quiz, men du kan ladda ner rapporten.","sad-panda-alttext":"Tråkiga saker i panda land.","speedgrader":"Visa i SpeedGrader","title":"Quizstatistik","unknown_answer":"Något annat","user_names":"Användarnamn"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% svarade korrekt","ratio_responded_correctly_6d890107":"%{ratio}% svarade korrekt","section_filter_cde54d0a":"Sektionsfilter","user_count_respondents_e30a8593":"%{user_count} respondenter"},"tr":{"quiz_statistics":{"attempts":"Deneme: %{count} / %{total}","discrimination_index_help":"* Bu ölçüde  sınavda doğru yapan öğrenciler ile yapamayanlar arasındaki farkı (ya da ayrışmayı) tek bir sorunun nasıl başarılı bir şekilde ortaya koyduğu verilmektedir. * **Kısa sınavın tamamında öğrencileri puanlarına göre üç gruba ayırıyor ve bu grupları kimin doğru vevapladığına göre gösteriyor. ** *** **** Daha fazla bilgiye buradan ulaşabilirsiniz.**** ***","download_submissions":"Tüm Dosyaları İndir","duration_in_hours":{"one":"1 saat","other":"%{count} saat"},"duration_in_hours_and_minutes":"%{hours} ve %{minutes}","duration_in_minutes":{"one":"%{count} dakika","other":"%{count} dakika"},"duration_in_minutes_and_seconds":"%{minutes} ve %{seconds}","duration_in_seconds":{"one":"1 saniye","other":"%{count} saniye"},"empty_question_breakdown":"Soru istatistiği bulunamadı","loading_questions":"Soru istatistikleri yükleniyor. Lütfen bekleyiniz.","no_answer":"Cevap Yok","question_breakdown":"Soru Kırılma Noktası","question_header":"Soru %{position}","quiz-stats-noshow-warning":"Mükemmelliğin bile sınırları vardır. Bu kısa sınav için istatistikleri raporlaştıramıyoruz fakat raporları indirebilrisiniz.","sad-panda-alttext":"Panda diyarında üzücü durum","speedgrader":"SpeedGrader da Gör","title":"Kısa Sınav İstatistikleri","unknown_answer":"Başka Birşey","user_names":"Kullanıcı Adları"}},"uk":{"quiz_statistics":{"attempts":"Спроби: %{count} з %{total}","discrimination_index_help":"* Ця метрика показує, наскільки добре одне питання може визначити різницю (або дискримінацію) між студентами, які добре займаються іспитом, і тими, хто цього не робить. * ** Вона розподіляє студентів на три групи на підставі їх балів за все опитуваня та відображає ті групи, що правильно відповідали на питання. ** *** **** Додаткова інформація доступна тут **** ***","download_submissions":"Завантажити усі файли","duration_in_hours":{"one":"1 година","other":"%{count} годин"},"duration_in_hours_and_minutes":"%{hours} та %{minutes}","duration_in_minutes":{"one":"1 хвилина","other":"%{count} хвилин"},"duration_in_minutes_and_seconds":"%{minutes} та %{seconds}","duration_in_seconds":{"one":"1 секунда","other":"%{count} секунд"},"empty_question_breakdown":"Відсутня будь-яка статистика питання.","loading_questions":"Статистика питання завантажується. Будь ласка, зачекайте деякий час.","no_answer":"Немає відповідді","question_breakdown":"Розподіл запитань","question_header":"Питання %{position}","quiz-stats-noshow-warning":"Навіть дивовижність має межі. Ми не можемо надати статистику для цього тестування, але ви можете завантажувати звіти.","sad-panda-alttext":"Сумні речі на землі панди.","speedgrader":"Переглянути в SpeedGrader","title":"Статистика контрольної роботи","unknown_answer":"Щось ще","user_names":"Імена користувачів"},"ratio_answered_correctly_b0c1e7d":"%{ratio}відповіли правильно","ratio_responded_correctly_6d890107":"%{ratio}відповіли правильно","section_filter_cde54d0a":"Фільтр розділу","user_count_respondents_e30a8593":"%{user_count}респонденти "},"zh-Hans":{"quiz_statistics":{"attempts":"尝试次数：%{count}，共 %{total} 次","discrimination_index_help":"* 此指标提供一种衡量方式，用以衡量一个问题能在何种程度上区别（或鉴定）考试中做得好和做得不好的学生。* ** 它根据整个测验的分数将学生分为三组，并通过谁正确回答了问题来显示这些组。** *** ****详细信息请参见此处。**** ***","download_submissions":"下载所有文件","duration_in_hours":{"one":"%{count} 小时","other":"%{count} 小时"},"duration_in_hours_and_minutes":"%{hours} 和 %{minutes}","duration_in_minutes":{"one":"%{count} 分钟","other":"%{count} 分钟"},"duration_in_minutes_and_seconds":"%{minutes} 和 %{seconds}","duration_in_seconds":{"one":"%{count} 秒","other":"%{count} 秒"},"empty_question_breakdown":"没有可用的问题统计。","loading_questions":"正在加载问题统计，请稍等。","no_answer":"无答案","question_breakdown":"问题细分","question_header":"问题 %{position}","quiz-stats-noshow-warning":"即使强大的功能也有局限。我们无法呈现此测验的统计信息，但是您可以下载报告。","sad-panda-alttext":"乐中有悲。","speedgrader":"在SpeedGrader中查看","title":"测验统计","unknown_answer":"其他事情","user_names":"用户名"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% a 正确地回答","ratio_responded_correctly_6d890107":"%{ratio}% 正确地回应","section_filter_cde54d0a":"部分过滤器","user_count_respondents_e30a8593":"%{user_count} 回应者"},"zh-Hant":{"quiz_statistics":{"attempts":"嘗試：已嘗試 %{count} 次，總計 %{total} 次","discrimination_index_help":"* 該度量標準提供了具體的方法，以區分（或辨別）在考試中獲得好成績和差成績的學生。* ** 根據整個測驗分數，將學生分為三組，并顯示各組中哪些學生回答正確。** *** ****按一下此處，瞭解更多資訊。**** ***","download_submissions":"下載所有文檔","duration_in_hours":{"one":"%{count} 小時","other":"%{count} 小時"},"duration_in_hours_and_minutes":"%{hours} 和 %{minutes}","duration_in_minutes":{"one":"%{count} 分鐘","other":"%{count} 分鐘"},"duration_in_minutes_and_seconds":"%{minutes} 和 %{seconds}","duration_in_seconds":{"one":"%{count} 秒","other":"%{count} 秒"},"empty_question_breakdown":"無問題統計資料。","loading_questions":"正在加載問題統計資料。請等候。","no_answer":"沒有回答","question_breakdown":"問題分解","question_header":"問題 %{position}","quiz-stats-noshow-warning":"即使再強大的功能也有局限。我們無法呈現此測驗的統計資訊，但是您可以下載報告。","sad-panda-alttext":"樂中有悲。","speedgrader":"在 SpeedGrader 檢視","title":"測驗統計資料","unknown_answer":"其他","user_names":"使用者名稱"},"ratio_answered_correctly_b0c1e7d":"%{ratio}% 回答正確","ratio_responded_correctly_6d890107":"%{ratio}% 回答正確","section_filter_cde54d0a":"班別過濾器","user_count_respondents_e30a8593":"%{user_count} 個回應"}}'))
n("jQeR")
n("0sPK")
t["default"]=r["default"].scoped("quiz_statistics")},eyvc:function(e,t,n){var r
r=function(e){var t=n("jDx0")
var r=[200,204]
var o=function(e){var t
if(e.responseJSON)return e.responseJSON
if((e.responseText||"").length){t=(e.responseText||"").replace("while(1);","")
try{t=JSON.parse(t)}catch(n){t=e.responseText}}else t=void 0
return t}
return function(e){var n=e.url
var a=e.type||"GET"
var i=void 0===e.async||!!e.async
var s=e.data
return new t.Promise(function(t,u){var c=new XMLHttpRequest
c.onreadystatechange=function(){4===c.readyState&&(r.indexOf(c.status)>-1?t(o(c),c.status,c):u(o(c),c.status,c))}
c.open(a,n,i)
e.headers&&Object.keys(e.headers).forEach(function(t){c.setRequestHeader(t,e.headers[t])})
c.send(JSON.stringify(s))})}}.call(t,n,t,e),void 0!==r&&(e.exports=r)},jDx0:function(e,t,n){"use strict"
n.r(t);(function(e,r,o){n.d(t,"asap",function(){return Le})
n.d(t,"cast",function(){return et})
n.d(t,"Promise",function(){return Z})
n.d(t,"EventTarget",function(){return s})
n.d(t,"all",function(){return pe})
n.d(t,"allSettled",function(){return me})
n.d(t,"race",function(){return ge})
n.d(t,"hash",function(){return Ce})
n.d(t,"hashSettled",function(){return Me})
n.d(t,"rethrow",function(){return xe})
n.d(t,"defer",function(){return De})
n.d(t,"denodeify",function(){return ue})
n.d(t,"configure",function(){return c})
n.d(t,"on",function(){return nt})
n.d(t,"off",function(){return rt})
n.d(t,"resolve",function(){return Se})
n.d(t,"reject",function(){return Pe})
n.d(t,"map",function(){return Te})
n.d(t,"async",function(){return tt})
n.d(t,"filter",function(){return Ne})
function a(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}function i(e){var t=e._promiseCallbacks
t||(t=e._promiseCallbacks={})
return t}var s={mixin:function(e){e["on"]=this["on"]
e["off"]=this["off"]
e["trigger"]=this["trigger"]
e._promiseCallbacks=void 0
return e},on:function(e,t){if("function"!==typeof t)throw new TypeError("Callback must be a function")
var n=i(this),r=void 0
r=n[e]
r||(r=n[e]=[]);-1===a(r,t)&&r.push(t)},off:function(e,t){var n=i(this),r=void 0,o=void 0
if(!t){n[e]=[]
return}r=n[e]
o=a(r,t);-1!==o&&r.splice(o,1)},trigger:function(e,t,n){var r=i(this),o=void 0,a=void 0
if(o=r[e])for(var s=0;s<o.length;s++){a=o[s]
a(t,n)}}}
var u={instrument:false}
s["mixin"](u)
function c(e,t){if(2!==arguments.length)return u[e]
u[e]=t}function l(e){var t=typeof e
return null!==e&&("object"===t||"function"===t)}function d(e){return"function"===typeof e}function p(e){return null!==e&&"object"===typeof e}function f(e){return null!==e&&"object"===typeof e}var v=void 0
v=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)}
var h=v
var m=Date.now||function(){return(new Date).getTime()}
var g=[]
function _(){setTimeout(function(){for(var e=0;e<g.length;e++){var t=g[e]
var n=t.payload
n.guid=n.key+n.id
n.childGuid=n.key+n.childId
n.error&&(n.stack=n.error.stack)
u["trigger"](t.name,t.payload)}g.length=0},50)}function y(e,t,n){1===g.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:m(),error:u["instrument-with-stack"]?new Error(t._label):null}})&&_()}function w(e,t){var n=this
if(e&&"object"===typeof e&&e.constructor===n)return e
var r=new n(C,t)
O(r,e)
return r}function b(){return new TypeError("A promises callback cannot return that same promise.")}function C(){}var k=void 0
var E=1
var R=2
var M=new U
function x(e){try{return e.then}catch(e){M.error=e
return M}}function D(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function T(e,t,n){u.async(function(e){var r=false
var o=D(n,t,function(n){if(r)return
r=true
t!==n?O(e,n,void 0):N(e,n)},function(t){if(r)return
r=true
A(e,t)},"Settle: "+(e._label||" unknown promise"))
if(!r&&o){r=true
A(e,o)}},e)}function S(e,t){if(t._state===E)N(e,t._result)
else if(t._state===R){t._onError=null
A(e,t._result)}else q(t,void 0,function(n){t!==n?O(e,n,void 0):N(e,n)},function(t){return A(e,t)})}function P(e,t,n){var r=t.constructor===e.constructor&&n===V&&e.constructor.resolve===w
if(r)S(e,t)
else if(n===M){A(e,M.error)
M.error=null}else d(n)?T(e,t,n):N(e,t)}function O(e,t){e===t?N(e,t):l(t)?P(e,t,x(t)):N(e,t)}function I(e){e._onError&&e._onError(e._result)
L(e)}function N(e,t){if(e._state!==k)return
e._result=t
e._state=E
0===e._subscribers.length?u.instrument&&y("fulfilled",e):u.async(L,e)}function A(e,t){if(e._state!==k)return
e._state=R
e._result=t
u.async(I,e)}function q(e,t,n,r){var o=e._subscribers
var a=o.length
e._onError=null
o[a]=t
o[a+E]=n
o[a+R]=r
0===a&&e._state&&u.async(L,e)}function L(e){var t=e._subscribers
var n=e._state
u.instrument&&y(n===E?"fulfilled":"rejected",e)
if(0===t.length)return
var r=void 0,o=void 0,a=e._result
for(var i=0;i<t.length;i+=3){r=t[i]
o=t[i+n]
r?B(n,r,o,a):o(a)}e._subscribers.length=0}function U(){this.error=null}var j=new U
function z(e,t){try{return e(t)}catch(e){j.error=e
return j}}function B(e,t,n,r){var o=d(n)
var a=void 0,i=void 0
if(o){a=z(n,r)
if(a===j){i=a.error
a.error=null}else if(a===t){A(t,b())
return}}else a=r
t._state!==k||(o&&void 0===i?O(t,a):void 0!==i?A(t,i):e===E?N(t,a):e===R&&A(t,a))}function F(e,t){var n=false
try{t(function(t){if(n)return
n=true
O(e,t)},function(t){if(n)return
n=true
A(e,t)})}catch(t){A(e,t)}}function V(e,t,n){var r=this
var o=r._state
if(o===E&&!e||o===R&&!t){u.instrument&&y("chained",r,r)
return r}r._onError=null
var a=new r.constructor(C,n)
var i=r._result
u.instrument&&y("chained",r,a)
if(o===k)q(r,a,e,t)
else{var s=o===E?e:t
u.async(function(){return B(o,a,s,i)})}return a}var W=function(){function e(e,t,n,r){this._instanceConstructor=e
this.promise=new e(C,r)
this._abortOnReject=n
this._init.apply(this,arguments)}e.prototype._init=function(e,t){var n=t.length||0
this.length=n
this._remaining=n
this._result=new Array(n)
this._enumerate(t)
0===this._remaining&&N(this.promise,this._result)}
e.prototype._enumerate=function(e){var t=this.length
var n=this.promise
for(var r=0;n._state===k&&r<t;r++)this._eachEntry(e[r],r)}
e.prototype._settleMaybeThenable=function(e,t){var n=this._instanceConstructor
var r=n.resolve
if(r===w){var o=x(e)
if(o===V&&e._state!==k){e._onError=null
this._settledAt(e._state,t,e._result)}else if("function"!==typeof o){this._remaining--
this._result[t]=this._makeResult(E,t,e)}else if(n===Z){var a=new n(C)
P(a,e,o)
this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)}
e.prototype._eachEntry=function(e,t){if(f(e))this._settleMaybeThenable(e,t)
else{this._remaining--
this._result[t]=this._makeResult(E,t,e)}}
e.prototype._settledAt=function(e,t,n){var r=this.promise
if(r._state===k)if(this._abortOnReject&&e===R)A(r,n)
else{this._remaining--
this._result[t]=this._makeResult(e,t,n)
0===this._remaining&&N(r,this._result)}}
e.prototype._makeResult=function(e,t,n){return n}
e.prototype._willSettleAt=function(e,t){var n=this
q(e,void 0,function(e){return n._settledAt(E,t,e)},function(e){return n._settledAt(R,t,e)})}
return e}()
function H(e,t,n){return e===E?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}function K(e,t){if(!h(e))return this.reject(new TypeError("Promise.all must be called with an array"),t)
return new W(this,e,true,t).promise}function G(e,t){var n=this
var r=new n(C,t)
if(!h(e)){A(r,new TypeError("Promise.race must be called with an array"))
return r}for(var o=0;r._state===k&&o<e.length;o++)q(n.resolve(e[o]),void 0,function(e){return O(r,e)},function(e){return A(r,e)})
return r}function Y(e,t){var n=this
var r=new n(C,t)
A(r,e)
return r}var Q="rsvp_"+m()+"-"
var X=0
function $(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function J(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var Z=function(){function e(t,n){this._id=X++
this._label=n
this._state=void 0
this._result=void 0
this._subscribers=[]
u.instrument&&y("created",this)
if(C!==t){"function"!==typeof t&&$()
this instanceof e?F(this,t):J()}}e.prototype._onError=function(e){var t=this
u.after(function(){t._onError&&u.trigger("error",e,t._label)})}
e.prototype.catch=function(e,t){return this.then(void 0,e,t)}
e.prototype.finally=function(e,t){var n=this
var r=n.constructor
return n.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})},t)}
return e}()
Z.cast=w
Z.all=K
Z.race=G
Z.resolve=w
Z.reject=Y
Z.prototype._guidKey=Q
Z.prototype.then=V
function ee(){this.value=void 0}var te=new ee
var ne=new ee
function re(e){try{return e.then}catch(e){te.value=e
return te}}function oe(e,t,n){try{e.apply(t,n)}catch(e){te.value=e
return te}}function ae(e,t){var n={}
var r=e.length
var o=new Array(r)
for(var a=0;a<r;a++)o[a]=e[a]
for(var i=0;i<t.length;i++){var s=t[i]
n[s]=o[i+1]}return n}function ie(e){var t=e.length
var n=new Array(t-1)
for(var r=1;r<t;r++)n[r-1]=e[r]
return n}function se(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function ue(e,t){var n=function(){var n=this
var r=arguments.length
var o=new Array(r+1)
var a=false
for(var i=0;i<r;++i){var s=arguments[i]
if(!a){a=de(s)
if(a===ne){var u=new Z(C)
A(u,ne.value)
return u}a&&true!==a&&(s=se(a,s))}o[i]=s}var c=new Z(C)
o[r]=function(e,n){e?A(c,e):void 0===t?O(c,n):true===t?O(c,ie(arguments)):h(t)?O(c,ae(arguments,t)):O(c,n)}
return a?le(c,o,e,n):ce(c,o,e,n)}
n.__proto__=e
return n}function ce(e,t,n,r){var o=oe(n,r,t)
o===te&&A(e,o.value)
return e}function le(e,t,n,r){return Z.all(t).then(function(t){var o=oe(n,r,t)
o===te&&A(e,o.value)
return e})}function de(e){return!(!e||"object"!==typeof e)&&(e.constructor===Z||re(e))}function pe(e,t){return Z.all(e,t)}function fe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function ve(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var he=function(e){ve(t,e)
function t(t,n,r){return fe(this,e.call(this,t,n,false,r))}return t}(W)
he.prototype._makeResult=H
function me(e,t){if(!h(e))return Z.reject(new TypeError("Promise.allSettled must be called with an array"),t)
return new he(Z,e,t).promise}function ge(e,t){return Z.race(e,t)}function _e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function ye(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var we=Object.prototype.hasOwnProperty
var be=function(e){ye(t,e)
function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
var o=arguments[3]
return _e(this,e.call(this,t,n,r,o))}t.prototype._init=function(e,t){this._result={}
this._enumerate(t)
0===this._remaining&&N(this.promise,this._result)}
t.prototype._enumerate=function(e){var t=this.promise
var n=[]
for(var r in e)we.call(e,r)&&n.push({position:r,entry:e[r]})
var o=n.length
this._remaining=o
var a=void 0
for(var i=0;t._state===k&&i<o;i++){a=n[i]
this._eachEntry(a.entry,a.position)}}
return t}(W)
function Ce(e,t){if(!p(e))return Z.reject(new TypeError("Promise.hash must be called with an object"),t)
return new be(Z,e,t).promise}function ke(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function Ee(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Re=function(e){Ee(t,e)
function t(t,n,r){return ke(this,e.call(this,t,n,false,r))}return t}(be)
Re.prototype._makeResult=H
function Me(e,t){if(!p(e))return Z.reject(new TypeError("RSVP.hashSettled must be called with an object"),t)
return new Re(Z,e,false,t).promise}function xe(e){setTimeout(function(){throw e})
throw e}function De(e){var t={resolve:void 0,reject:void 0}
t.promise=new Z(function(e,n){t.resolve=e
t.reject=n},e)
return t}function Te(e,t,n){if(!h(e))return Z.reject(new TypeError("RSVP.map must be called with an array"),n)
if(!d(t))return Z.reject(new TypeError("RSVP.map expects a function as a second argument"),n)
return Z.all(e,n).then(function(e){var r=e.length
var o=new Array(r)
for(var a=0;a<r;a++)o[a]=t(e[a])
return Z.all(o,n)})}function Se(e,t){return Z.resolve(e,t)}function Pe(e,t){return Z.reject(e,t)}function Oe(e,t){return Z.all(e,t)}function Ie(e,t){return Z.resolve(e,t).then(function(e){return Oe(e,t)})}function Ne(e,t,n){if(!h(e)&&!(p(e)&&void 0!==e.then))return Z.reject(new TypeError("RSVP.filter must be called with an array or promise"),n)
if(!d(t))return Z.reject(new TypeError("RSVP.filter expects function as a second argument"),n)
var r=h(e)?Oe(e,n):Ie(e,n)
return r.then(function(e){var r=e.length
var o=new Array(r)
for(var a=0;a<r;a++)o[a]=t(e[a])
return Oe(o,n).then(function(t){var n=new Array(r)
var o=0
for(var a=0;a<r;a++)if(t[a]){n[o]=e[a]
o++}n.length=o
return n})})}var Ae=0
var qe=void 0
function Le(e,t){Ye[Ae]=e
Ye[Ae+1]=t
Ae+=2
2===Ae&&$e()}var Ue="undefined"!==typeof window?window:void 0
var je=Ue||{}
var ze=je.MutationObserver||je.WebKitMutationObserver
var Be="undefined"===typeof self&&"undefined"!==typeof e&&"[object process]"==={}.toString.call(e)
var Fe="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel
function Ve(){var t=e.nextTick
var n=e.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/)
Array.isArray(n)&&"0"===n[1]&&"10"===n[2]&&(t=r)
return function(){return t(Qe)}}function We(){if("undefined"!==typeof qe)return function(){qe(Qe)}
return Ge()}function He(){var e=0
var t=new ze(Qe)
var n=document.createTextNode("")
t.observe(n,{characterData:true})
return function(){return n.data=e=++e%2}}function Ke(){var e=new MessageChannel
e.port1.onmessage=Qe
return function(){return e.port2.postMessage(0)}}function Ge(){return function(){return setTimeout(Qe,1)}}var Ye=new Array(1e3)
function Qe(){for(var e=0;e<Ae;e+=2){var t=Ye[e]
var n=Ye[e+1]
t(n)
Ye[e]=void 0
Ye[e+1]=void 0}Ae=0}function Xe(){try{var e=n(0)
qe=e.runOnLoop||e.runOnContext
return We()}catch(e){return Ge()}}var $e=void 0
$e=Be?Ve():ze?He():Fe?Ke():void 0===Ue&&true?Xe():Ge()
if("object"===typeof self)self
else{if("object"!==typeof o)throw new Error("no global: `self` or `global` found")
o}var Je
function Ze(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n
return e}u.async=Le
u.after=function(e){return setTimeout(e,0)}
var et=Se
var tt=function(e,t){return u.async(e,t)}
function nt(){u["on"].apply(u,arguments)}function rt(){u["off"].apply(u,arguments)}if("undefined"!==typeof window&&"object"===typeof window["__PROMISE_INSTRUMENTATION__"]){var ot=window["__PROMISE_INSTRUMENTATION__"]
c("instrument",true)
for(var at in ot)ot.hasOwnProperty(at)&&nt(at,ot[at])}var it=(Je={asap:Le,cast:et,Promise:Z,EventTarget:s,all:pe,allSettled:me,race:ge,hash:Ce,hashSettled:Me,rethrow:xe,defer:De,denodeify:ue,configure:c,on:nt,off:rt,resolve:Se,reject:Pe,map:Te},Ze(Je,"async",tt),Ze(Je,"filter",Ne),Je)
t["default"]=it}).call(this,n("8oxB"),n("URgk").setImmediate,n("yLpj"))},mfk2:function(e,t,n){var r
r=function(e){var t=n("GLiE")
var r=t.extend
var o=function(e,t,n){var o=this.emitChange.bind(this)
r(this,t||{})
this._key=e
this.__reset__()
Object.keys(this.actions).forEach(function(t){var r=this.actions[t].bind(this)
var a=[e,t].join(":")
n.register(a,function(e,t,n){try{r(e,function(e){t(e)
o()},n)}catch(e){n(e)}})}.bind(this))
return this}
r(o.prototype,{actions:{},addChangeListener:function(e){this._callbacks.push(e)},removeChangeListener:function(e){var t=this._callbacks.indexOf(e)
t>-1&&this._callbacks.splice(t,1)},emitChange:function(){this._callbacks.forEach(function(e){e()})},__reset__:function(){this._callbacks=[]
this.state=this.getInitialState()},getInitialState:function(){return{}},setState:function(e){r(this.state,e)
this.emitChange()}})
return o}.call(t,n,t,e),void 0!==r&&(e.exports=r)},pWEL:function(e,t,n){var r
r=function(e){var t=n("6Nz/")
var r=t.createClass({displayName:"ScreenReaderContent",propTypes:{forceSentenceDelimiter:t.PropTypes.bool},getDefaultProps:function(){return{tagName:"span",forceSentenceDelimiter:false}},render:function(){var e=t.DOM[this.props.tagName]
var n={}
var r=[]
n.className="screenreader-only"
this.props.forceSentenceDelimiter&&r.push(this.generateSentenceDelimiter())
r.length?this.props.dangerouslySetInnerHTML?console.error("You are attempting to set the dangerouslySetInnerHTML prop","on a ScreenReaderContent component, which prevents it from enabling","further accessibility enhancements.","Try setting that property on a passed child instead."):n.children=[this.props.children,r]:n.children=this.props.children
return this.transferPropsTo(e(n,n.children))},generateSentenceDelimiter:function(){return t.DOM.em({role:"presentation","aria-role":"presentation","aria-hidden":true,children:". "})}})
return r}.call(t,n,t,e),void 0!==r&&(e.exports=r)},txyM:function(e,t,n){var r
r=function(e){var t=n("6Nz/")
var r=function(e){return Object.keys(e).reduce(function(t,n){!e[n]||t.push(n)
return t},[]).join(" ")}
return(t.addons||{}).classSet||r}.call(t,n,t,e),void 0!==r&&(e.exports=r)},vaeQ:function(e,t,n){var r
r=function(e){var t=n("XSW2")
var r=t.camelize
var o=t.underscore
return{camelize:function(e){var t
var n={}
for(t in e)e.hasOwnProperty(t)&&(n[r(t,true)]=e[t])
return n},underscore:function(e){var t
var n={}
for(t in e)e.hasOwnProperty(t)&&(n[o(t)]=e[t])
return n}}}.call(t,n,t,e),void 0!==r&&(e.exports=r)}}])

//# sourceMappingURL=103-c-869edf259f.js.map