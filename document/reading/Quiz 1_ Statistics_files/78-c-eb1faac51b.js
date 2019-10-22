(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[78],{bljh:function(n,t,e){var r,i
!function(){var u={version:"3.5.17"}
var o=[].slice,a=function(n){return o.call(n)}
var l=this.document
function c(n){return n&&(n.ownerDocument||n.document||n).documentElement}function f(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}if(l)try{a(l.documentElement.childNodes)[0].nodeType}catch(n){a=function(n){var t=n.length,e=new Array(t)
while(t--)e[t]=n[t]
return e}}Date.now||(Date.now=function(){return+new Date})
if(l)try{l.createElement("DIV").style.setProperty("opacity",0,"")}catch(n){var s=this.Element.prototype,h=s.setAttribute,p=s.setAttributeNS,g=this.CSSStyleDeclaration.prototype,v=g.setProperty
s.setAttribute=function(n,t){h.call(this,n,t+"")}
s.setAttributeNS=function(n,t,e){p.call(this,n,t,e+"")}
g.setProperty=function(n,t,e){v.call(this,n,t+"",e)}}u.ascending=d
function d(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}u.descending=function(n,t){return t<n?-1:t>n?1:t>=n?0:NaN}
u.min=function(n,t){var e,r,i=-1,u=n.length
if(1===arguments.length){while(++i<u)if(null!=(r=n[i])&&r>=r){e=r
break}while(++i<u)null!=(r=n[i])&&e>r&&(e=r)}else{while(++i<u)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
break}while(++i<u)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e}
u.max=function(n,t){var e,r,i=-1,u=n.length
if(1===arguments.length){while(++i<u)if(null!=(r=n[i])&&r>=r){e=r
break}while(++i<u)null!=(r=n[i])&&r>e&&(e=r)}else{while(++i<u)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
break}while(++i<u)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e}
u.extent=function(n,t){var e,r,i,u=-1,o=n.length
if(1===arguments.length){while(++u<o)if(null!=(r=n[u])&&r>=r){e=i=r
break}while(++u<o)if(null!=(r=n[u])){e>r&&(e=r)
i<r&&(i=r)}}else{while(++u<o)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r
break}while(++u<o)if(null!=(r=t.call(n,n[u],u))){e>r&&(e=r)
i<r&&(i=r)}}return[e,i]}
function y(n){return null===n?NaN:+n}function m(n){return!isNaN(n)}u.sum=function(n,t){var e,r=0,i=n.length,u=-1
if(1===arguments.length)while(++u<i)m(e=+n[u])&&(r+=e)
else while(++u<i)m(e=+t.call(n,n[u],u))&&(r+=e)
return r}
u.mean=function(n,t){var e,r=0,i=n.length,u=-1,o=i
if(1===arguments.length)while(++u<i)m(e=y(n[u]))?r+=e:--o
else while(++u<i)m(e=y(t.call(n,n[u],u)))?r+=e:--o
if(o)return r/o}
u.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r
return u?i+u*(n[r]-i):i}
u.median=function(n,t){var e,r=[],i=n.length,o=-1
if(1===arguments.length)while(++o<i)m(e=y(n[o]))&&r.push(e)
else while(++o<i)m(e=y(t.call(n,n[o],o)))&&r.push(e)
if(r.length)return u.quantile(r.sort(d),.5)}
u.variance=function(n,t){var e,r,i=n.length,u=0,o=0,a=-1,l=0
if(1===arguments.length){while(++a<i)if(m(e=y(n[a]))){r=e-u
u+=r/++l
o+=r*(e-u)}}else while(++a<i)if(m(e=y(t.call(n,n[a],a)))){r=e-u
u+=r/++l
o+=r*(e-u)}if(l>1)return o/(l-1)}
u.deviation=function(){var n=u.variance.apply(this,arguments)
return n?Math.sqrt(n):n}
function M(n){return{left:function(t,e,r,i){arguments.length<3&&(r=0)
arguments.length<4&&(i=t.length)
while(r<i){var u=r+i>>>1
n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){arguments.length<3&&(r=0)
arguments.length<4&&(i=t.length)
while(r<i){var u=r+i>>>1
n(t[u],e)>0?i=u:r=u+1}return r}}}var x=M(d)
u.bisectLeft=x.left
u.bisect=u.bisectRight=x.right
u.bisector=function(n){return M(1===n.length?function(t,e){return d(n(t),e)}:n)}
u.shuffle=function(n,t,e){if((u=arguments.length)<3){e=n.length
u<2&&(t=0)}var r,i,u=e-t
while(u){i=Math.random()*u--|0
r=n[u+t],n[u+t]=n[i+t],n[i+t]=r}return n}
u.permute=function(n,t){var e=t.length,r=new Array(e)
while(e--)r[e]=n[t[e]]
return r}
u.pairs=function(n){var t=0,e=n.length-1,r=n[0],i=new Array(e<0?0:e)
while(t<e)i[t]=[r,r=n[++t]]
return i}
u.transpose=function(n){if(!(i=n.length))return[]
for(var t=-1,e=u.min(n,w),r=new Array(e);++t<e;)for(var i,o=-1,a=r[t]=new Array(i);++o<i;)a[o]=n[o][t]
return r}
function w(n){return n.length}u.zip=function(){return u.transpose(arguments)}
u.keys=function(n){var t=[]
for(var e in n)t.push(e)
return t}
u.values=function(n){var t=[]
for(var e in n)t.push(n[e])
return t}
u.entries=function(n){var t=[]
for(var e in n)t.push({key:e,value:n[e]})
return t}
u.merge=function(n){var t,e,r,i=n.length,u=-1,o=0
while(++u<i)o+=n[u].length
e=new Array(o)
while(--i>=0){r=n[i]
t=r.length
while(--t>=0)e[--o]=r[t]}return e}
var b=Math.abs
u.range=function(n,t,e){if(arguments.length<3){e=1
if(arguments.length<2){t=n
n=0}}if((t-n)/e===Infinity)throw new Error("infinite range")
var r,i=[],u=_(b(e)),o=-1
n*=u,t*=u,e*=u
if(e<0)while((r=n+e*++o)>t)i.push(r/u)
else while((r=n+e*++o)<t)i.push(r/u)
return i}
function _(n){var t=1
while(n*t%1)t*=10
return t}function k(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:false})}u.map=function(n,t){var e=new S
if(n instanceof S)n.forEach(function(n,t){e.set(n,t)})
else if(Array.isArray(n)){var r,i=-1,u=n.length
if(1===arguments.length)while(++i<u)e.set(i,n[i])
else while(++i<u)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o])
return e}
function S(){this._=Object.create(null)}var N="__proto__",E="\0"
k(S,{has:z,get:function(n){return this._[A(n)]},set:function(n,t){return this._[A(n)]=t},remove:L,keys:q,values:function(){var n=[]
for(var t in this._)n.push(this._[t])
return n},entries:function(){var n=[]
for(var t in this._)n.push({key:C(t),value:this._[t]})
return n},size:T,empty:R,forEach:function(n){for(var t in this._)n.call(this,C(t),this._[t])}})
function A(n){return(n+="")===N||n[0]===E?E+n:n}function C(n){return(n+="")[0]===E?n.slice(1):n}function z(n){return A(n)in this._}function L(n){return(n=A(n))in this._&&delete this._[n]}function q(){var n=[]
for(var t in this._)n.push(C(t))
return n}function T(){var n=0
for(var t in this._)++n
return n}function R(){for(var n in this._)return false
return true}u.nest=function(){var n,t,e={},r=[],i=[]
function o(i,u,a){if(a>=r.length)return t?t.call(e,u):n?u.sort(n):u
var l,c,f,s,h=-1,p=u.length,g=r[a++],v=new S
while(++h<p)(s=v.get(l=g(c=u[h])))?s.push(c):v.set(l,[c])
if(i){c=i()
f=function(n,t){c.set(n,o(i,t,a))}}else{c={}
f=function(n,t){c[n]=o(i,t,a)}}v.forEach(f)
return c}function a(n,t){if(t>=r.length)return n
var e=[],u=i[t++]
n.forEach(function(n,r){e.push({key:n,values:a(r,t)})})
return u?e.sort(function(n,t){return u(n.key,t.key)}):e}e.map=function(n,t){return o(t,n,0)}
e.entries=function(n){return a(o(u.map,n,0),0)}
e.key=function(n){r.push(n)
return e}
e.sortKeys=function(n){i[r.length-1]=n
return e}
e.sortValues=function(t){n=t
return e}
e.rollup=function(n){t=n
return e}
return e}
u.set=function(n){var t=new D
if(n)for(var e=0,r=n.length;e<r;++e)t.add(n[e])
return t}
function D(){this._=Object.create(null)}k(D,{has:z,add:function(n){this._[A(n+="")]=true
return n},remove:L,values:q,size:T,empty:R,forEach:function(n){for(var t in this._)n.call(this,C(t))}})
u.behavior={}
function I(n){return n}u.rebind=function(n,t){var e,r=1,i=arguments.length
while(++r<i)n[e=arguments[r]]=P(n,t,t[e])
return n}
function P(n,t,e){return function(){var r=e.apply(t,arguments)
return r===t?n:r}}function U(n,t){if(t in n)return t
t=t.charAt(0).toUpperCase()+t.slice(1)
for(var e=0,r=j.length;e<r;++e){var i=j[e]+t
if(i in n)return i}}var j=["webkit","ms","moz","Moz","o","O"]
function F(){}u.dispatch=function(){var n=new H,t=-1,e=arguments.length
while(++t<e)n[arguments[t]]=O(n)
return n}
function H(){}H.prototype.on=function(n,t){var e=n.indexOf("."),r=""
if(e>=0){r=n.slice(e+1)
n=n.slice(0,e)}if(n)return arguments.length<2?this[n].on(r):this[n].on(r,t)
if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null)
return this}}
function O(n){var t=[],e=new S
function r(){var e,r=t,i=-1,u=r.length
while(++i<u)(e=r[i].on)&&e.apply(this,arguments)
return n}r.on=function(r,i){var u,o=e.get(r)
if(arguments.length<2)return o&&o.on
if(o){o.on=null
t=t.slice(0,u=t.indexOf(o)).concat(t.slice(u+1))
e.remove(r)}i&&t.push(e.set(r,{on:i}))
return n}
return r}u.event=null
function Y(){u.event.preventDefault()}function Z(){var n,t=u.event
while(n=t.sourceEvent)t=n
return t}function V(n){var t=new H,e=0,r=arguments.length
while(++e<r)t[arguments[e]]=O(t)
t.of=function(e,r){return function(i){try{var o=i.sourceEvent=u.event
i.target=n
u.event=i
t[i.type].apply(e,r)}finally{u.event=o}}}
return t}u.requote=function(n){return n.replace(X,"\\$&")}
var X=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
var $={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]}
function B(n){$(n,K)
return n}var W=function(n,t){return t.querySelector(n)},J=function(n,t){return t.querySelectorAll(n)},G=function(n,t){var e=n.matches||n[U(n,"matchesSelector")]
G=function(n,t){return e.call(n,t)}
return G(n,t)}
if("function"===typeof Sizzle){W=function(n,t){return Sizzle(n,t)[0]||null}
J=Sizzle
G=Sizzle.matchesSelector}u.selection=function(){return u.select(l.documentElement)}
var K=u.selection.prototype=[]
K.select=function(n){var t,e,r,i,u=[]
n=Q(n)
for(var o=-1,a=this.length;++o<a;){u.push(t=[])
t.parentNode=(r=this[o]).parentNode
for(var l=-1,c=r.length;++l<c;)if(i=r[l]){t.push(e=n.call(i,i.__data__,l,o))
e&&"__data__"in i&&(e.__data__=i.__data__)}else t.push(null)}return B(u)}
function Q(n){return"function"===typeof n?n:function(){return W(n,this)}}K.selectAll=function(n){var t,e,r=[]
n=nn(n)
for(var i=-1,u=this.length;++i<u;)for(var o=this[i],l=-1,c=o.length;++l<c;)if(e=o[l]){r.push(t=a(n.call(e,e.__data__,l,i)))
t.parentNode=e}return B(r)}
function nn(n){return"function"===typeof n?n:function(){return J(n,this)}}var tn="http://www.w3.org/1999/xhtml"
var en={svg:"http://www.w3.org/2000/svg",xhtml:tn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
u.ns={prefix:en,qualify:function(n){var t=n.indexOf(":"),e=n
t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1))
return en.hasOwnProperty(e)?{space:en[e],local:n}:n}}
K.attr=function(n,t){if(arguments.length<2){if("string"===typeof n){var e=this.node()
n=u.ns.qualify(n)
return n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(rn(t,n[t]))
return this}return this.each(rn(n,t))}
function rn(n,t){n=u.ns.qualify(n)
function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function o(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments)
null==e?this.removeAttribute(n):this.setAttribute(n,e)}function l(){var e=t.apply(this,arguments)
null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return null==t?n.local?r:e:"function"===typeof t?n.local?l:a:n.local?o:i}function un(n){return n.trim().replace(/\s+/g," ")}K.classed=function(n,t){if(arguments.length<2){if("string"===typeof n){var e=this.node(),r=(n=an(n)).length,i=-1
if(t=e.classList){while(++i<r)if(!t.contains(n[i]))return false}else{t=e.getAttribute("class")
while(++i<r)if(!on(n[i]).test(t))return false}return true}for(t in n)this.each(ln(t,n[t]))
return this}return this.each(ln(n,t))}
function on(n){return new RegExp("(?:^|\\s+)"+u.requote(n)+"(?:\\s+|$)","g")}function an(n){return(n+"").trim().split(/^|\s+/)}function ln(n,t){n=an(n).map(cn)
var e=n.length
function r(){var r=-1
while(++r<e)n[r](this,t)}function i(){var r=-1,i=t.apply(this,arguments)
while(++r<e)n[r](this,i)}return"function"===typeof t?i:r}function cn(n){var t=on(n)
return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n)
var i=e.getAttribute("class")||""
if(r){t.lastIndex=0
t.test(i)||e.setAttribute("class",un(i+" "+n))}else e.setAttribute("class",un(i.replace(t," ")))}}K.style=function(n,t,e){var r=arguments.length
if(r<3){if("string"!==typeof n){r<2&&(t="")
for(e in n)this.each(fn(e,n[e],t))
return this}if(r<2){var i=this.node()
return f(i).getComputedStyle(i,null).getPropertyValue(n)}e=""}return this.each(fn(n,t,e))}
function fn(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments)
null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"===typeof t?u:i}K.property=function(n,t){if(arguments.length<2){if("string"===typeof n)return this.node()[n]
for(t in n)this.each(sn(t,n[t]))
return this}return this.each(sn(n,t))}
function sn(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments)
null==e?delete this[n]:this[n]=e}return null==t?e:"function"===typeof t?i:r}K.text=function(n){return arguments.length?this.each("function"===typeof n?function(){var t=n.apply(this,arguments)
this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent}
K.html=function(n){return arguments.length?this.each("function"===typeof n?function(){var t=n.apply(this,arguments)
this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML}
K.append=function(n){n=hn(n)
return this.select(function(){return this.appendChild(n.apply(this,arguments))})}
function hn(n){function t(){var t=this.ownerDocument,e=this.namespaceURI
return e===tn&&t.documentElement.namespaceURI===tn?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"===typeof n?n:(n=u.ns.qualify(n)).local?e:t}K.insert=function(n,t){n=hn(n)
t=Q(t)
return this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})}
K.remove=function(){return this.each(pn)}
function pn(){var n=this.parentNode
n&&n.removeChild(this)}K.data=function(n,t){var e,r,i=-1,u=this.length
if(!arguments.length){n=new Array(u=(e=this[0]).length)
while(++i<u)(r=e[i])&&(n[i]=r.__data__)
return n}function o(n,e){var r,i,u,o=n.length,f=e.length,s=Math.min(o,f),h=new Array(f),p=new Array(f),g=new Array(o)
if(t){var v,d=new S,y=new Array(o)
for(r=-1;++r<o;)if(i=n[r]){d.has(v=t.call(i,i.__data__,r))?g[r]=i:d.set(v,i)
y[r]=v}for(r=-1;++r<f;){if(i=d.get(v=t.call(e,u=e[r],r))){if(true!==i){h[r]=i
i.__data__=u}}else p[r]=gn(u)
d.set(v,true)}for(r=-1;++r<o;)r in y&&true!==d.get(y[r])&&(g[r]=n[r])}else{for(r=-1;++r<s;){i=n[r]
u=e[r]
if(i){i.__data__=u
h[r]=i}else p[r]=gn(u)}for(;r<f;++r)p[r]=gn(e[r])
for(;r<o;++r)g[r]=n[r]}p.update=h
p.parentNode=h.parentNode=g.parentNode=n.parentNode
a.push(p)
l.push(h)
c.push(g)}var a=mn([]),l=B([]),c=B([])
if("function"===typeof n)while(++i<u)o(e=this[i],n.call(e,e.parentNode.__data__,i))
else while(++i<u)o(e=this[i],n)
l.enter=function(){return a}
l.exit=function(){return c}
return l}
function gn(n){return{__data__:n}}K.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")}
K.filter=function(n){var t,e,r,i=[]
"function"!==typeof n&&(n=vn(n))
for(var u=0,o=this.length;u<o;u++){i.push(t=[])
t.parentNode=(e=this[u]).parentNode
for(var a=0,l=e.length;a<l;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return B(i)}
function vn(n){return function(){return G(this,n)}}K.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)if(e=r[i]){u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u)
u=e}return this}
K.sort=function(n){n=dn.apply(this,arguments)
for(var t=-1,e=this.length;++t<e;)this[t].sort(n)
return this.order()}
function dn(n){arguments.length||(n=d)
return function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}K.each=function(n){return yn(this,function(t,e,r){n.call(t,t.__data__,e,r)})}
function yn(n,t){for(var e=0,r=n.length;e<r;e++)for(var i,u=n[e],o=0,a=u.length;o<a;o++)(i=u[o])&&t(i,o,e)
return n}K.call=function(n){var t=a(arguments)
n.apply(t[0]=this,t)
return this}
K.empty=function(){return!this.node()}
K.node=function(){for(var n=0,t=this.length;n<t;n++)for(var e=this[n],r=0,i=e.length;r<i;r++){var u=e[r]
if(u)return u}return null}
K.size=function(){var n=0
yn(this,function(){++n})
return n}
function mn(n){$(n,Mn)
return n}var Mn=[]
u.selection.enter=mn
u.selection.enter.prototype=Mn
Mn.append=K.append
Mn.empty=K.empty
Mn.node=K.node
Mn.call=K.call
Mn.size=K.size
Mn.select=function(n){var t,e,r,i,u,o=[]
for(var a=-1,l=this.length;++a<l;){r=(i=this[a]).update
o.push(t=[])
t.parentNode=i.parentNode
for(var c=-1,f=i.length;++c<f;)if(u=i[c]){t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a))
e.__data__=u.__data__}else t.push(null)}return B(o)}
Mn.insert=function(n,t){arguments.length<2&&(t=xn(this))
return K.insert.call(this,n,t)}
function xn(n){var t,e
return function(r,i,u){var o,a=n[u].update,l=a.length
u!=e&&(e=u,t=0)
i>=t&&(t=i+1)
while(!(o=a[t])&&++t<l);return o}}u.select=function(n){var t
if("string"===typeof n){t=[W(n,l)]
t.parentNode=l.documentElement}else{t=[n]
t.parentNode=c(n)}return B([t])}
u.selectAll=function(n){var t
if("string"===typeof n){t=a(J(n,l))
t.parentNode=l.documentElement}else{t=a(n)
t.parentNode=null}return B([t])}
K.on=function(n,t,e){var r=arguments.length
if(r<3){if("string"!==typeof n){r<2&&(t=false)
for(e in n)this.each(wn(e,n[e],t))
return this}if(r<2)return(r=this.node()["__on"+n])&&r._
e=false}return this.each(wn(n,t,e))}
function wn(n,t,e){var r="__on"+n,i=n.indexOf("."),o=_n
i>0&&(n=n.slice(0,i))
var l=bn.get(n)
l&&(n=l,o=kn)
function c(){var t=this[r]
if(t){this.removeEventListener(n,t,t.$)
delete this[r]}}function f(){var i=o(t,a(arguments))
c.call(this)
this.addEventListener(n,this[r]=i,i.$=e)
i._=t}function s(){var t,e=new RegExp("^__on([^.]+)"+u.requote(n)+"$")
for(var r in this)if(t=r.match(e)){var i=this[r]
this.removeEventListener(t[1],i,i.$)
delete this[r]}}return i?t?f:c:t?F:s}var bn=u.map({mouseenter:"mouseover",mouseleave:"mouseout"})
l&&bn.forEach(function(n){"on"+n in l&&bn.remove(n)})
function _n(n,t){return function(e){var r=u.event
u.event=e
t[0]=this.__data__
try{n.apply(this,t)}finally{u.event=r}}}function kn(n,t){var e=_n(n,t)
return function(n){var t=this,r=n.relatedTarget
r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}var Sn,Nn=0
function En(n){var t=".dragsuppress-"+ ++Nn,e="click"+t,r=u.select(f(n)).on("touchmove"+t,Y).on("dragstart"+t,Y).on("selectstart"+t,Y)
null==Sn&&(Sn=!("onselectstart"in n)&&U(n.style,"userSelect"))
if(Sn){var i=c(n).style,o=i[Sn]
i[Sn]="none"}return function(n){r.on(t,null)
Sn&&(i[Sn]=o)
if(n){var u=function(){r.on(e,null)}
r.on(e,function(){Y()
u()},true)
setTimeout(u,0)}}}u.mouse=function(n){return Cn(n,Z())}
var An=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0
function Cn(n,t){t.changedTouches&&(t=t.changedTouches[0])
var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
if(An<0){var i=f(n)
if(i.scrollX||i.scrollY){e=u.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important")
var o=e[0][0].getScreenCTM()
An=!(o.f||o.e)
e.remove()}}An?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY)
r=r.matrixTransform(n.getScreenCTM().inverse())
return[r.x,r.y]}var a=n.getBoundingClientRect()
return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}u.touch=function(n,t,e){arguments.length<3&&(e=t,t=Z().changedTouches)
if(t)for(var r,i=0,u=t.length;i<u;++i)if((r=t[i]).identifier===e)return Cn(n,r)}
u.behavior.drag=function(){var n=V(i,"drag","dragstart","dragend"),t=null,e=o(F,u.mouse,f,"mousemove","mouseup"),r=o(zn,u.touch,I,"touchmove","touchend")
function i(){this.on("mousedown.drag",e).on("touchstart.drag",r)}function o(e,r,i,o,a){return function(){var l,c=this,f=u.event.target.correspondingElement||u.event.target,s=c.parentNode,h=n.of(c,arguments),p=0,g=e(),v=".drag"+(null==g?"":"-"+g),d=u.select(i(f)).on(o+v,M).on(a+v,x),y=En(f),m=r(s,g)
if(t){l=t.apply(c,arguments)
l=[l.x-m[0],l.y-m[1]]}else l=[0,0]
h({type:"dragstart"})
function M(){var n,t,e=r(s,g)
if(!e)return
n=e[0]-m[0]
t=e[1]-m[1]
p|=n|t
m=e
h({type:"drag",x:e[0]+l[0],y:e[1]+l[1],dx:n,dy:t})}function x(){if(!r(s,g))return
d.on(o+v,null).on(a+v,null)
y(p)
h({type:"dragend"})}}}i.origin=function(n){if(!arguments.length)return t
t=n
return i}
return u.rebind(i,n,"on")}
function zn(){return u.event.changedTouches[0].identifier}u.touches=function(n,t){arguments.length<2&&(t=Z().touches)
return t?a(t).map(function(t){var e=Cn(n,t)
e.identifier=t.identifier
return e}):[]}
var Ln=1e-6,qn=Ln*Ln,Tn=Math.PI,Rn=2*Tn,Dn=Rn-Ln,In=Tn/2,Pn=Tn/180,Un=180/Tn
function jn(n){return n>0?1:n<0?-1:0}function Fn(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Hn(n){return n>1?0:n<-1?Tn:Math.acos(n)}function On(n){return n>1?In:n<-1?-In:Math.asin(n)}function Yn(n){return((n=Math.exp(n))-1/n)/2}function Zn(n){return((n=Math.exp(n))+1/n)/2}function Vn(n){return((n=Math.exp(2*n))-1)/(n+1)}function Xn(n){return(n=Math.sin(n/2))*n}var $n=Math.SQRT2,Bn=2,Wn=4
u.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s
if(h<qn){r=Math.log(c/o)/$n
e=function(n){return[i+n*f,u+n*s,o*Math.exp($n*n*r)]}}else{var p=Math.sqrt(h),g=(c*c-o*o+Wn*h)/(2*o*Bn*p),v=(c*c-o*o-Wn*h)/(2*c*Bn*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v)
r=(y-d)/$n
e=function(n){var t=n*r,e=Zn(d),a=o/(Bn*p)*(e*Vn($n*t+d)-Yn(d))
return[i+a*f,u+a*s,o*e/Zn($n*t+d)]}}e.duration=1e3*r
return e}
u.behavior.zoom=function(){var n,t,e,r,i,o,a,c,s,h={x:0,y:0,k:1},p=[960,500],g=Kn,v=250,d=0,y="mousedown.zoom",m="mousemove.zoom",M="mouseup.zoom",x="touchstart.zoom",w=V(b,"zoomstart","zoom","zoomend")
Gn||(Gn="onwheel"in l?(Jn=function(){return-u.event.deltaY*(u.event.deltaMode?120:1)},"wheel"):"onmousewheel"in l?(Jn=function(){return u.event.wheelDelta},"mousewheel"):(Jn=function(){return-u.event.detail},"MozMousePixelScroll"))
function b(n){n.on(y,q).on(Gn+".zoom",R).on("dblclick.zoom",D).on(x,T)}b.event=function(n){n.each(function(){var n=w.of(this,arguments),e=h
if(Tl)u.select(this).transition().each("start.zoom",function(){h=this.__chart__||{x:0,y:0,k:1}
C(n)}).tween("zoom:zoom",function(){var r=p[0],i=p[1],o=t?t[0]:r/2,a=t?t[1]:i/2,l=u.interpolateZoom([(o-h.x)/h.k,(a-h.y)/h.k,r/h.k],[(o-e.x)/e.k,(a-e.y)/e.k,r/e.k])
return function(t){var e=l(t),i=r/e[2]
this.__chart__=h={x:o-e[0]*i,y:a-e[1]*i,k:i}
z(n)}}).each("interrupt.zoom",function(){L(n)}).each("end.zoom",function(){L(n)})
else{this.__chart__=h
C(n)
z(n)
L(n)}})}
b.translate=function(n){if(!arguments.length)return[h.x,h.y]
h={x:+n[0],y:+n[1],k:h.k}
A()
return b}
b.scale=function(n){if(!arguments.length)return h.k
h={x:h.x,y:h.y,k:null}
S(+n)
A()
return b}
b.scaleExtent=function(n){if(!arguments.length)return g
g=null==n?Kn:[+n[0],+n[1]]
return b}
b.center=function(n){if(!arguments.length)return e
e=n&&[+n[0],+n[1]]
return b}
b.size=function(n){if(!arguments.length)return p
p=n&&[+n[0],+n[1]]
return b}
b.duration=function(n){if(!arguments.length)return v
v=+n
return b}
b.x=function(n){if(!arguments.length)return a
a=n
o=n.copy()
h={x:0,y:0,k:1}
return b}
b.y=function(n){if(!arguments.length)return s
s=n
c=n.copy()
h={x:0,y:0,k:1}
return b}
function _(n){return[(n[0]-h.x)/h.k,(n[1]-h.y)/h.k]}function k(n){return[n[0]*h.k+h.x,n[1]*h.k+h.y]}function S(n){h.k=Math.max(g[0],Math.min(g[1],n))}function N(n,t){t=k(t)
h.x+=n[0]-t[0]
h.y+=n[1]-t[1]}function E(n,e,r,i){n.__chart__={x:h.x,y:h.y,k:h.k}
S(Math.pow(2,i))
N(t=e,r)
n=u.select(n)
v>0&&(n=n.transition().duration(v))
n.call(b.event)}function A(){a&&a.domain(o.range().map(function(n){return(n-h.x)/h.k}).map(o.invert))
s&&s.domain(c.range().map(function(n){return(n-h.y)/h.k}).map(c.invert))}function C(n){d++||n({type:"zoomstart"})}function z(n){A()
n({type:"zoom",scale:h.k,translate:[h.x,h.y]})}function L(n){--d||(n({type:"zoomend"}),t=null)}function q(){var n=this,t=w.of(n,arguments),e=0,r=u.select(f(n)).on(m,a).on(M,l),i=_(u.mouse(n)),o=En(n)
zl.call(n)
C(t)
function a(){e=1
N(u.mouse(n),i)
z(t)}function l(){r.on(m,null).on(M,null)
o(e)
L(t)}}function T(){var n,t=this,e=w.of(t,arguments),r={},o=0,a=".zoom-"+u.event.changedTouches[0].identifier,l="touchmove"+a,c="touchend"+a,f=[],s=u.select(t),p=En(t)
v()
C(e)
s.on(y,null).on(x,v)
function g(){var e=u.touches(t)
n=h.k
e.forEach(function(n){n.identifier in r&&(r[n.identifier]=_(n))})
return e}function v(){var n=u.event.target
u.select(n).on(l,d).on(c,m)
f.push(n)
var e=u.event.changedTouches
for(var a=0,s=e.length;a<s;++a)r[e[a].identifier]=null
var p=g(),v=Date.now()
if(1===p.length){if(v-i<500){var y=p[0]
E(t,y,r[y.identifier],Math.floor(Math.log(h.k)/Math.LN2)+1)
Y()}i=v}else if(p.length>1){y=p[0]
var M=p[1],x=y[0]-M[0],w=y[1]-M[1]
o=x*x+w*w}}function d(){var a,l,c,f,s=u.touches(t)
zl.call(t)
for(var h=0,p=s.length;h<p;++h,f=null){c=s[h]
if(f=r[c.identifier]){if(l)break
a=c,l=f}}if(f){var g=(g=c[0]-a[0])*g+(g=c[1]-a[1])*g,v=o&&Math.sqrt(g/o)
a=[(a[0]+c[0])/2,(a[1]+c[1])/2]
l=[(l[0]+f[0])/2,(l[1]+f[1])/2]
S(v*n)}i=null
N(a,l)
z(e)}function m(){if(u.event.touches.length){var n=u.event.changedTouches
for(var t=0,i=n.length;t<i;++t)delete r[n[t].identifier]
for(var o in r)return void g()}u.selectAll(f).on(a,null)
s.on(y,q).on(x,T)
p()
L(e)}}function R(){var i=w.of(this,arguments)
r?clearTimeout(r):(zl.call(this),n=_(t=e||u.mouse(this)),C(i))
r=setTimeout(function(){r=null
L(i)},50)
Y()
S(Math.pow(2,.002*Jn())*h.k)
N(t,n)
z(i)}function D(){var n=u.mouse(this),t=Math.log(h.k)/Math.LN2
E(this,n,_(n),u.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}return u.rebind(b,w,"on")}
var Jn,Gn,Kn=[0,Infinity]
u.color=Qn
function Qn(){}Qn.prototype.toString=function(){return this.rgb()+""}
u.hsl=nt
function nt(n,t,e){return this instanceof nt?void(this.h=+n,this.s=+t,this.l=+e):arguments.length<2?n instanceof nt?new nt(n.h,n.s,n.l):bt(""+n,_t,nt):new nt(n,t,e)}var tt=nt.prototype=new Qn
tt.brighter=function(n){n=Math.pow(.7,arguments.length?n:1)
return new nt(this.h,this.s,this.l/n)}
tt.darker=function(n){n=Math.pow(.7,arguments.length?n:1)
return new nt(this.h,this.s,n*this.l)}
tt.rgb=function(){return et(this.h,this.s,this.l)}
function et(n,t,e){var r,i
n=isNaN(n)?0:(n%=360)<0?n+360:n
t=isNaN(t)?0:t<0?0:t>1?1:t
e=e<0?0:e>1?1:e
i=e<=.5?e*(1+t):e+t-e*t
r=2*e-i
function u(n){n>360?n-=360:n<0&&(n+=360)
if(n<60)return r+(i-r)*n/60
if(n<180)return i
if(n<240)return r+(i-r)*(240-n)/60
return r}function o(n){return Math.round(255*u(n))}return new yt(o(n+120),o(n),o(n-120))}u.hcl=rt
function rt(n,t,e){return this instanceof rt?void(this.h=+n,this.c=+t,this.l=+e):arguments.length<2?n instanceof rt?new rt(n.h,n.c,n.l):pt(n instanceof ot?n.l:(n=kt((n=u.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new rt(n,t,e)}var it=rt.prototype=new Qn
it.brighter=function(n){return new rt(this.h,this.c,Math.min(100,this.l+at*(arguments.length?n:1)))}
it.darker=function(n){return new rt(this.h,this.c,Math.max(0,this.l-at*(arguments.length?n:1)))}
it.rgb=function(){return ut(this.h,this.c,this.l).rgb()}
function ut(n,t,e){isNaN(n)&&(n=0)
isNaN(t)&&(t=0)
return new ot(e,Math.cos(n*=Pn)*t,Math.sin(n)*t)}u.lab=ot
function ot(n,t,e){return this instanceof ot?void(this.l=+n,this.a=+t,this.b=+e):arguments.length<2?n instanceof ot?new ot(n.l,n.a,n.b):n instanceof rt?ut(n.h,n.c,n.l):kt((n=yt(n)).r,n.g,n.b):new ot(n,t,e)}var at=18
var lt=.95047,ct=1,ft=1.08883
var st=ot.prototype=new Qn
st.brighter=function(n){return new ot(Math.min(100,this.l+at*(arguments.length?n:1)),this.a,this.b)}
st.darker=function(n){return new ot(Math.max(0,this.l-at*(arguments.length?n:1)),this.a,this.b)}
st.rgb=function(){return ht(this.l,this.a,this.b)}
function ht(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200
i=gt(i)*lt
r=gt(r)*ct
u=gt(u)*ft
return new yt(dt(3.2404542*i-1.5371385*r-.4985314*u),dt(-.969266*i+1.8760108*r+.041556*u),dt(.0556434*i-.2040259*r+1.0572252*u))}function pt(n,t,e){return n>0?new rt(Math.atan2(e,t)*Un,Math.sqrt(t*t+e*e),n):new rt(NaN,NaN,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(n<=.00304?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}u.rgb=yt
function yt(n,t,e){return this instanceof yt?void(this.r=~~n,this.g=~~t,this.b=~~e):arguments.length<2?n instanceof yt?new yt(n.r,n.g,n.b):bt(""+n,yt,et):new yt(n,t,e)}function mt(n){return new yt(n>>16,n>>8&255,255&n)}function Mt(n){return mt(n)+""}var xt=yt.prototype=new Qn
xt.brighter=function(n){n=Math.pow(.7,arguments.length?n:1)
var t=this.r,e=this.g,r=this.b,i=30
if(!t&&!e&&!r)return new yt(i,i,i)
t&&t<i&&(t=i)
e&&e<i&&(e=i)
r&&r<i&&(r=i)
return new yt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))}
xt.darker=function(n){n=Math.pow(.7,arguments.length?n:1)
return new yt(n*this.r,n*this.g,n*this.b)}
xt.hsl=function(){return _t(this.r,this.g,this.b)}
xt.toString=function(){return"#"+wt(this.r)+wt(this.g)+wt(this.b)}
function wt(n){return n<16?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,i,u,o=0,a=0,l=0
r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase())
if(r){i=r[2].split(",")
switch(r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100)
case"rgb":return t(Nt(i[0]),Nt(i[1]),Nt(i[2]))}}if(u=Et.get(n))return t(u.r,u.g,u.b)
if(null!=n&&"#"===n.charAt(0)&&!isNaN(u=parseInt(n.slice(1),16)))if(4===n.length){o=(3840&u)>>4
o|=o>>4
a=240&u
a|=a>>4
l=15&u
l|=l<<4}else if(7===n.length){o=(16711680&u)>>16
a=(65280&u)>>8
l=255&u}return t(o,a,l)}function _t(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2
if(a){i=l<.5?a/(o+u):a/(2-o-u)
r=n==o?(t-e)/a+(t<e?6:0):t==o?(e-n)/a+2:(n-t)/a+4
r*=60}else{r=NaN
i=l>0&&l<1?0:r}return new nt(r,i,l)}function kt(n,t,e){n=St(n)
t=St(t)
e=St(e)
var r=vt((.4124564*n+.3575761*t+.1804375*e)/lt),i=vt((.2126729*n+.7151522*t+.072175*e)/ct),u=vt((.0193339*n+.119192*t+.9503041*e)/ft)
return ot(116*i-16,500*(r-i),200*(i-u))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nt(n){var t=parseFloat(n)
return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}var Et=u.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074})
Et.forEach(function(n,t){Et.set(n,mt(t))})
function At(n){return"function"===typeof n?n:function(){return n}}u.functor=At
u.xhr=Ct(I)
function Ct(n){return function(t,e,r){2===arguments.length&&"function"===typeof e&&(r=e,e=null)
return zt(t,e,n,r)}}function zt(n,t,e,r){var i={},o=u.dispatch("beforesend","progress","load","error"),l={},c=new XMLHttpRequest,f=null
!this.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest)
"onload"in c?c.onload=c.onerror=s:c.onreadystatechange=function(){c.readyState>3&&s()}
function s(){var n,t=c.status
if(!t&&qt(c)||t>=200&&t<300||304===t){try{n=e.call(i,c)}catch(n){o.error.call(i,n)
return}o.load.call(i,n)}else o.error.call(i,c)}c.onprogress=function(n){var t=u.event
u.event=n
try{o.progress.call(i,c)}finally{u.event=t}}
i.header=function(n,t){n=(n+"").toLowerCase()
if(arguments.length<2)return l[n]
null==t?delete l[n]:l[n]=t+""
return i}
i.mimeType=function(n){if(!arguments.length)return t
t=null==n?null:n+""
return i}
i.responseType=function(n){if(!arguments.length)return f
f=n
return i}
i.response=function(n){e=n
return i};["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(a(arguments)))}})
i.send=function(e,r,u){2===arguments.length&&"function"===typeof r&&(u=r,r=null)
c.open(e,n,true)
null==t||"accept"in l||(l["accept"]=t+",*/*")
if(c.setRequestHeader)for(var a in l)c.setRequestHeader(a,l[a])
null!=t&&c.overrideMimeType&&c.overrideMimeType(t)
null!=f&&(c.responseType=f)
null!=u&&i.on("error",u).on("load",function(n){u(null,n)})
o.beforesend.call(i,c)
c.send(null==r?null:r)
return i}
i.abort=function(){c.abort()
return i}
u.rebind(i,o,"on")
return null==r?i:i.get(Lt(r))}function Lt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function qt(n){var t=n.responseType
return t&&"text"!==t?n.response:n.responseText}u.dsv=function(n,t){var e=new RegExp('["'+n+"\n]"),r=n.charCodeAt(0)
function i(n,e,r){arguments.length<3&&(r=e,e=null)
var i=zt(n,t,null==e?u:o(e),r)
i.row=function(n){return arguments.length?i.response(null==(e=n)?u:o(n)):e}
return i}function u(n){return i.parse(n.responseText)}function o(n){return function(t){return i.parse(t.responseText,n)}}i.parse=function(n,t){var e
return i.parseRows(n,function(n,r){if(e)return e(n,r-1)
var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}")
e=t?function(n,e){return t(i(n),e)}:i})}
i.parseRows=function(n,t){var e,i,u={},o={},a=[],l=n.length,c=0,f=0
function s(){if(c>=l)return o
if(i)return i=false,u
var t=c
if(34===n.charCodeAt(t)){var e=t
while(e++<l)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}c=e+2
var a=n.charCodeAt(e+1)
if(13===a){i=true
10===n.charCodeAt(e+2)&&++c}else 10===a&&(i=true)
return n.slice(t+1,e).replace(/""/g,'"')}while(c<l){a=n.charCodeAt(c++)
var f=1
if(10===a)i=true
else if(13===a){i=true
10===n.charCodeAt(c)&&(++c,++f)}else if(a!==r)continue
return n.slice(t,c-f)}return n.slice(t)}while((e=s())!==o){var h=[]
while(e!==u&&e!==o){h.push(e)
e=s()}if(t&&null==(h=t(h,f++)))continue
a.push(h)}return a}
i.format=function(t){if(Array.isArray(t[0]))return i.formatRows(t)
var e=new D,r=[]
t.forEach(function(n){for(var t in n)e.has(t)||r.push(e.add(t))})
return[r.map(l).join(n)].concat(t.map(function(t){return r.map(function(n){return l(t[n])}).join(n)})).join("\n")}
i.formatRows=function(n){return n.map(a).join("\n")}
function a(t){return t.map(l).join(n)}function l(n){return e.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}return i}
u.csv=u.dsv(",","text/csv")
u.tsv=u.dsv("\t","text/tab-separated-values")
var Tt,Rt,Dt,It,Pt=this[U(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)}
u.timer=function(){Ut.apply(this,arguments)}
function Ut(n,t,e){var r=arguments.length
r<2&&(t=0)
r<3&&(e=Date.now())
var i=e+t,u={c:n,t:i,n:null}
Rt?Rt.n=u:Tt=u
Rt=u
if(!Dt){It=clearTimeout(It)
Dt=1
Pt(jt)}return u}function jt(){var n=Ft(),t=Ht()-n
if(t>24){if(isFinite(t)){clearTimeout(It)
It=setTimeout(jt,t)}Dt=0}else{Dt=1
Pt(jt)}}u.timer.flush=function(){Ft()
Ht()}
function Ft(){var n=Date.now(),t=Tt
while(t){n>=t.t&&t.c(n-t.t)&&(t.c=null)
t=t.n}return n}function Ht(){var n,t=Tt,e=Infinity
while(t)if(t.c){t.t<e&&(e=t.t)
t=(n=t).n}else t=n?n.n=t.n:Tt=t.n
Rt=n
return e}function Ot(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}u.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)}
var Yt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(Zt)
u.formatPrefix=function(n,t){var e=0
if(n=+n){n<0&&(n*=-1)
t&&(n=u.round(n,Ot(n,t)))
e=1+Math.floor(1e-12+Math.log(n)/Math.LN10)
e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))}return Yt[8+e/3]}
function Zt(n,t){var e=Math.pow(10,3*b(8-t))
return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Vt(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,o=r&&e?function(n,t){var i=n.length,u=[],o=0,a=r[0],l=0
while(i>0&&a>0){l+a+1>t&&(a=Math.max(1,t-l))
u.push(n.substring(i-=a,i+a))
if((l+=a+1)>t)break
a=r[o=(o+1)%r.length]}return u.reverse().join(e)}:I
return function(n){var e=Xt.exec(n),r=e[1]||" ",a=e[2]||">",l=e[3]||"-",c=e[4]||"",f=e[5],s=+e[6],h=e[7],p=e[8],g=e[9],v=1,d="",y="",m=false,M=true
p&&(p=+p.substring(1))
if(f||"0"===r&&"="===a){f=r="0"
a="="}switch(g){case"n":h=true
g="g"
break
case"%":v=100
y="%"
g="f"
break
case"p":v=100
y="%"
g="r"
break
case"b":case"o":case"x":case"X":"#"===c&&(d="0"+g.toLowerCase())
case"c":M=false
case"d":m=true
p=0
break
case"s":v=-1
g="r"}"$"===c&&(d=i[0],y=i[1])
"r"!=g||p||(g="g")
null!=p&&("g"==g?p=Math.max(1,Math.min(21,p)):"e"!=g&&"f"!=g||(p=Math.max(0,Math.min(20,p))))
g=$t.get(g)||Bt
var x=f&&h
return function(n){var e=y
if(m&&n%1)return""
var i=n<0||0===n&&1/n<0?(n=-n,"-"):"-"===l?"":l
if(v<0){var c=u.formatPrefix(n,p)
n=c.scale(n)
e=c.symbol+y}else n*=v
n=g(n,p)
var w,b,_=n.lastIndexOf(".")
if(_<0){var k=M?n.lastIndexOf("e"):-1
k<0?(w=n,b=""):(w=n.substring(0,k),b=n.substring(k))}else{w=n.substring(0,_)
b=t+n.substring(_+1)}!f&&h&&(w=o(w,Infinity))
var S=d.length+w.length+b.length+(x?0:i.length),N=S<s?new Array(S=s-S+1).join(r):""
x&&(w=o(N+w,N.length?s-b.length:Infinity))
i+=d
n=w+b
return("<"===a?i+n+N:">"===a?N+i+n:"^"===a?N.substring(0,S>>=1)+i+n+N.substring(S):i+(x?n:N+n))+e}}}var Xt=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
var $t=u.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=u.round(n,Ot(n,t))).toFixed(Math.max(0,Math.min(20,Ot(n*(1+1e-15),t))))}})
function Bt(n){return n+""}var Wt=u.time={},Jt=Date
function Gt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}Gt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Kt.setUTCDate.apply(this._,arguments)},setDay:function(){Kt.setUTCDay.apply(this._,arguments)},setFullYear:function(){Kt.setUTCFullYear.apply(this._,arguments)},setHours:function(){Kt.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Kt.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Kt.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Kt.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Kt.setUTCSeconds.apply(this._,arguments)},setTime:function(){Kt.setTime.apply(this._,arguments)}}
var Kt=Date.prototype
function Qt(n,t,e){function r(t){var e=n(t),r=u(e,1)
return t-e<r-t?e:r}function i(e){t(e=n(new Jt(e-1)),1)
return e}function u(n,e){t(n=new Jt(+n),e)
return n}function o(n,r,u){var o=i(n),a=[]
if(u>1)while(o<r){e(o)%u||a.push(new Date(+o))
t(o,1)}else while(o<r)a.push(new Date(+o)),t(o,1)
return a}function a(n,t,e){try{Jt=Gt
var r=new Gt
r._=n
return o(r,t,e)}finally{Jt=Date}}n.floor=n
n.round=r
n.ceil=i
n.offset=u
n.range=o
var l=n.utc=ne(n)
l.floor=l
l.round=ne(r)
l.ceil=ne(i)
l.offset=ne(u)
l.range=a
return n}function ne(n){return function(t,e){try{Jt=Gt
var r=new Gt
r._=t
return n(r,e)._}finally{Jt=Date}}}Wt.year=Qt(function(n){n=Wt.day(n)
n.setMonth(0,1)
return n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()})
Wt.years=Wt.year.range
Wt.years.utc=Wt.year.utc.range
Wt.day=Qt(function(n){var t=new Jt(2e3,0)
t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate())
return t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1})
Wt.days=Wt.day.range
Wt.days.utc=Wt.day.utc.range
Wt.dayOfYear=function(n){var t=Wt.year(n)
return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)};["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t
var e=Wt[n]=Qt(function(n){(n=Wt.day(n)).setDate(n.getDate()-(n.getDay()+t)%7)
return n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Wt.year(n).getDay()
return Math.floor((Wt.dayOfYear(n)+(e+t)%7)/7)-(e!==t)})
Wt[n+"s"]=e.range
Wt[n+"s"].utc=e.utc.range
Wt[n+"OfYear"]=function(n){var e=Wt.year(n).getDay()
return Math.floor((Wt.dayOfYear(n)+(e+t)%7)/7)}})
Wt.week=Wt.sunday
Wt.weeks=Wt.sunday.range
Wt.weeks.utc=Wt.sunday.utc.range
Wt.weekOfYear=Wt.sundayOfYear
function te(n){var t=n.dateTime,e=n.date,r=n.time,i=n.periods,o=n.days,a=n.shortDays,l=n.months,c=n.shortMonths
function f(n){var t=n.length
function e(e){var r,i,u,o=[],a=-1,l=0
while(++a<t)if(37===n.charCodeAt(a)){o.push(n.slice(l,a))
null!=(i=ee[r=n.charAt(++a)])&&(r=n.charAt(++a));(u=w[r])&&(r=u(e,null==i?"e"===r?" ":"0":i))
o.push(r)
l=a+1}o.push(n.slice(l,a))
return o.join("")}e.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},r=s(e,n,t,0)
if(r!=t.length)return null
"p"in e&&(e.H=e.H%12+12*e.p)
var i=null!=e.Z&&Jt!==Gt,u=new(i?Gt:Jt)
if("j"in e)u.setFullYear(e.y,0,e.j)
else if("W"in e||"U"in e){"w"in e||(e.w="W"in e?1:0)
u.setFullYear(e.y,0,1)
u.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(u.getDay()+5)%7:e.w+7*e.U-(u.getDay()+6)%7)}else u.setFullYear(e.y,e.m,e.d)
u.setHours(e.H+(e.Z/100|0),e.M+e.Z%100,e.S,e.L)
return i?u._:u}
e.toString=function(){return n}
return e}function s(n,t,e,r){var i,u,o,a=0,l=t.length,c=e.length
while(a<l){if(r>=c)return-1
i=t.charCodeAt(a++)
if(37===i){o=t.charAt(a++)
u=b[o in ee?t.charAt(a++):o]
if(!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}f.utc=function(n){var t=f(n)
function e(n){try{Jt=Gt
var e=new Jt
e._=n
return t(e)}finally{Jt=Date}}e.parse=function(n){try{Jt=Gt
var e=t.parse(n)
return e&&e._}finally{Jt=Date}}
e.toString=t.toString
return e}
f.multi=f.utc.multi=ke
var h=u.map(),p=oe(o),g=ae(o),v=oe(a),d=ae(a),y=oe(l),m=ae(l),M=oe(c),x=ae(c)
i.forEach(function(n,t){h.set(n.toLowerCase(),t)})
var w={a:function(n){return a[n.getDay()]},A:function(n){return o[n.getDay()]},b:function(n){return c[n.getMonth()]},B:function(n){return l[n.getMonth()]},c:f(t),d:function(n,t){return ue(n.getDate(),t,2)},e:function(n,t){return ue(n.getDate(),t,2)},H:function(n,t){return ue(n.getHours(),t,2)},I:function(n,t){return ue(n.getHours()%12||12,t,2)},j:function(n,t){return ue(1+Wt.dayOfYear(n),t,3)},L:function(n,t){return ue(n.getMilliseconds(),t,3)},m:function(n,t){return ue(n.getMonth()+1,t,2)},M:function(n,t){return ue(n.getMinutes(),t,2)},p:function(n){return i[+(n.getHours()>=12)]},S:function(n,t){return ue(n.getSeconds(),t,2)},U:function(n,t){return ue(Wt.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return ue(Wt.mondayOfYear(n),t,2)},x:f(e),X:f(r),y:function(n,t){return ue(n.getFullYear()%100,t,2)},Y:function(n,t){return ue(n.getFullYear()%1e4,t,4)},Z:be,"%":function(){return"%"}}
var b={a:_,A:k,b:S,B:N,c:E,d:de,e:de,H:me,I:me,j:ye,L:we,m:ve,M:Me,p:z,S:xe,U:ce,w:le,W:fe,x:A,X:C,y:he,Y:se,Z:pe,"%":_e}
function _(n,t,e){v.lastIndex=0
var r=v.exec(t.slice(e))
return r?(n.w=d.get(r[0].toLowerCase()),e+r[0].length):-1}function k(n,t,e){p.lastIndex=0
var r=p.exec(t.slice(e))
return r?(n.w=g.get(r[0].toLowerCase()),e+r[0].length):-1}function S(n,t,e){M.lastIndex=0
var r=M.exec(t.slice(e))
return r?(n.m=x.get(r[0].toLowerCase()),e+r[0].length):-1}function N(n,t,e){y.lastIndex=0
var r=y.exec(t.slice(e))
return r?(n.m=m.get(r[0].toLowerCase()),e+r[0].length):-1}function E(n,t,e){return s(n,w.c.toString(),t,e)}function A(n,t,e){return s(n,w.x.toString(),t,e)}function C(n,t,e){return s(n,w.X.toString(),t,e)}function z(n,t,e){var r=h.get(t.slice(e,e+=2).toLowerCase())
return null==r?-1:(n.p=r,e)}return f}var ee={"-":"",_:" ",0:"0"},re=/^\s*\d+/,ie=/^%/
function ue(n,t,e){var r=n<0?"-":"",i=(r?-n:n)+"",u=i.length
return r+(u<e?new Array(e-u+1).join(t)+i:i)}function oe(n){return new RegExp("^(?:"+n.map(u.requote).join("|")+")","i")}function ae(n){var t=new S,e=-1,r=n.length
while(++e<r)t.set(n[e].toLowerCase(),e)
return t}function le(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+1))
return r?(n.w=+r[0],e+r[0].length):-1}function ce(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e))
return r?(n.U=+r[0],e+r[0].length):-1}function fe(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e))
return r?(n.W=+r[0],e+r[0].length):-1}function se(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+4))
return r?(n.y=+r[0],e+r[0].length):-1}function he(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.y=ge(+r[0]),e+r[0].length):-1}function pe(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function ge(n){return n+(n>68?1900:2e3)}function ve(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.m=r[0]-1,e+r[0].length):-1}function de(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.d=+r[0],e+r[0].length):-1}function ye(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+3))
return r?(n.j=+r[0],e+r[0].length):-1}function me(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.H=+r[0],e+r[0].length):-1}function Me(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.M=+r[0],e+r[0].length):-1}function xe(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+2))
return r?(n.S=+r[0],e+r[0].length):-1}function we(n,t,e){re.lastIndex=0
var r=re.exec(t.slice(e,e+3))
return r?(n.L=+r[0],e+r[0].length):-1}function be(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=b(t)/60|0,i=b(t)%60
return e+ue(r,"0",2)+ue(i,"0",2)}function _e(n,t,e){ie.lastIndex=0
var r=ie.exec(t.slice(e,e+1))
return r?e+r[0].length:-1}function ke(n){var t=n.length,e=-1
while(++e<t)n[e][0]=this(n[e][0])
return function(t){var e=0,r=n[e]
while(!r[1](t))r=n[++e]
return r[0](t)}}u.locale=function(n){return{numberFormat:Vt(n),timeFormat:te(n)}}
var Se=u.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
u.format=Se.numberFormat
u.geo={}
function Ne(){}Ne.prototype={s:0,t:0,add:function(n){Ae(n,this.t,Ee)
Ae(Ee.s,this.s,this)
this.s?this.t+=Ee.t:this.s=Ee.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}}
var Ee=new Ne
function Ae(n,t,e){var r=e.s=n+t,i=r-n,u=r-i
e.t=n-u+(t-i)}u.geo.stream=function(n,t){n&&ze.hasOwnProperty(n.type)?ze[n.type](n,t):Ce(n,t)}
function Ce(n,t){n&&Le.hasOwnProperty(n.type)&&Le[n.type](n,t)}var ze={Feature:function(n,t){Ce(n.geometry,t)},FeatureCollection:function(n,t){var e=n.features,r=-1,i=e.length
while(++r<i)Ce(e[r].geometry,t)}}
var Le={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates
t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){var e=n.coordinates,r=-1,i=e.length
while(++r<i)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){qe(n.coordinates,t,0)},MultiLineString:function(n,t){var e=n.coordinates,r=-1,i=e.length
while(++r<i)qe(e[r],t,0)},Polygon:function(n,t){Te(n.coordinates,t)},MultiPolygon:function(n,t){var e=n.coordinates,r=-1,i=e.length
while(++r<i)Te(e[r],t)},GeometryCollection:function(n,t){var e=n.geometries,r=-1,i=e.length
while(++r<i)Ce(e[r],t)}}
function qe(n,t,e){var r,i=-1,u=n.length-e
t.lineStart()
while(++i<u)r=n[i],t.point(r[0],r[1],r[2])
t.lineEnd()}function Te(n,t){var e=-1,r=n.length
t.polygonStart()
while(++e<r)qe(n[e],t,1)
t.polygonEnd()}u.geo.area=function(n){Re=0
u.geo.stream(n,Ie)
return Re}
var Re,De=new Ne
var Ie={sphere:function(){Re+=4*Tn},point:F,lineStart:F,lineEnd:F,polygonStart:function(){De.reset()
Ie.lineStart=Pe},polygonEnd:function(){var n=2*De
Re+=n<0?4*Tn+n:n
Ie.lineStart=Ie.lineEnd=Ie.point=F}}
function Pe(){var n,t,e,r,i
Ie.point=function(o,a){Ie.point=u
e=(n=o)*Pn,r=Math.cos(a=(t=a)*Pn/2+Tn/4),i=Math.sin(a)}
function u(n,t){n*=Pn
t=t*Pn/2+Tn/4
var u=n-e,o=u>=0?1:-1,a=o*u,l=Math.cos(t),c=Math.sin(t),f=i*c,s=r*l+f*Math.cos(a),h=f*o*Math.sin(a)
De.add(Math.atan2(h,s))
e=n,r=l,i=c}Ie.lineEnd=function(){u(n,t)}}function Ue(n){var t=n[0],e=n[1],r=Math.cos(e)
return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function je(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Fe(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function He(n,t){n[0]+=t[0]
n[1]+=t[1]
n[2]+=t[2]}function Oe(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Ye(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])
n[0]/=t
n[1]/=t
n[2]/=t}function Ze(n){return[Math.atan2(n[1],n[0]),On(n[2])]}function Ve(n,t){return b(n[0]-t[0])<Ln&&b(n[1]-t[1])<Ln}u.geo.bounds=function(){var n,t,e,r,i,o,a,l,c,f,s
var h={point:p,lineStart:v,lineEnd:d,polygonStart:function(){h.point=y
h.lineStart=m
h.lineEnd=M
c=0
Ie.polygonStart()},polygonEnd:function(){Ie.polygonEnd()
h.point=p
h.lineStart=v
h.lineEnd=d
De<0?(n=-(e=180),t=-(r=90)):c>Ln?r=90:c<-Ln&&(t=-90)
s[0]=n,s[1]=e}}
function p(i,u){f.push(s=[n=i,e=i])
u<t&&(t=u)
u>r&&(r=u)}function g(u,o){var a=Ue([u*Pn,o*Pn])
if(l){var c=Fe(l,a),f=[c[1],-c[0],0],s=Fe(f,c)
Ye(s)
s=Ze(s)
var h=u-i,g=h>0?1:-1,v=s[0]*Un*g,d=b(h)>180
if(d^(g*i<v&&v<g*u)){var y=s[1]*Un
y>r&&(r=y)}else if(v=(v+360)%360-180,d^(g*i<v&&v<g*u)){y=-s[1]*Un
y<t&&(t=y)}else{o<t&&(t=o)
o>r&&(r=o)}if(d)u<i?x(n,u)>x(n,e)&&(e=u):x(u,e)>x(n,e)&&(n=u)
else if(e>=n){u<n&&(n=u)
u>e&&(e=u)}else u>i?x(n,u)>x(n,e)&&(e=u):x(u,e)>x(n,e)&&(n=u)}else p(u,o)
l=a,i=u}function v(){h.point=g}function d(){s[0]=n,s[1]=e
h.point=p
l=null}function y(n,t){if(l){var e=n-i
c+=b(e)>180?e+(e>0?360:-360):e}else o=n,a=t
Ie.point(n,t)
g(n,t)}function m(){Ie.lineStart()}function M(){y(o,a)
Ie.lineEnd()
b(c)>Ln&&(n=-(e=180))
s[0]=n,s[1]=e
l=null}function x(n,t){return(t-=n)<0?t+360:t}function w(n,t){return n[0]-t[0]}function _(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}return function(i){r=e=-(n=t=Infinity)
f=[]
u.geo.stream(i,h)
var o=f.length
if(o){f.sort(w)
for(var a=1,l=f[0],c=[l];a<o;++a){v=f[a]
if(_(v[0],l)||_(v[1],l)){x(l[0],v[1])>x(l[0],l[1])&&(l[1]=v[1])
x(v[0],l[1])>x(l[0],l[1])&&(l[0]=v[0])}else c.push(l=v)}var p,g=-Infinity
var v
for(o=c.length-1,a=0,l=c[o];a<=o;l=v,++a){v=c[a];(p=x(l[1],v[0]))>g&&(g=p,n=v[0],e=l[1])}}f=s=null
return Infinity===n||Infinity===t?[[NaN,NaN],[NaN,NaN]]:[[n,t],[e,r]]}}()
u.geo.centroid=function(n){Xe=$e=Be=We=Je=Ge=Ke=Qe=nr=tr=er=0
u.geo.stream(n,rr)
var t=nr,e=tr,r=er,i=t*t+e*e+r*r
if(i<qn){t=Ge,e=Ke,r=Qe
$e<Ln&&(t=Be,e=We,r=Je)
i=t*t+e*e+r*r
if(i<qn)return[NaN,NaN]}return[Math.atan2(e,t)*Un,On(r/Math.sqrt(i))*Un]}
var Xe,$e,Be,We,Je,Ge,Ke,Qe,nr,tr,er
var rr={sphere:F,point:ir,lineStart:or,lineEnd:ar,polygonStart:function(){rr.lineStart=lr},polygonEnd:function(){rr.lineStart=or}}
function ir(n,t){n*=Pn
var e=Math.cos(t*=Pn)
ur(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function ur(n,t,e){++Xe
Be+=(n-Be)/Xe
We+=(t-We)/Xe
Je+=(e-Je)/Xe}function or(){var n,t,e
rr.point=function(i,u){i*=Pn
var o=Math.cos(u*=Pn)
n=o*Math.cos(i)
t=o*Math.sin(i)
e=Math.sin(u)
rr.point=r
ur(n,t,e)}
function r(r,i){r*=Pn
var u=Math.cos(i*=Pn),o=u*Math.cos(r),a=u*Math.sin(r),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=t*l-e*a)*c+(c=e*o-n*l)*c+(c=n*a-t*o)*c),n*o+t*a+e*l)
$e+=c
Ge+=c*(n+(n=o))
Ke+=c*(t+(t=a))
Qe+=c*(e+(e=l))
ur(n,t,e)}}function ar(){rr.point=ir}function lr(){var n,t,e,r,i
rr.point=function(o,a){n=o,t=a
rr.point=u
o*=Pn
var l=Math.cos(a*=Pn)
e=l*Math.cos(o)
r=l*Math.sin(o)
i=Math.sin(a)
ur(e,r,i)}
rr.lineEnd=function(){u(n,t)
rr.lineEnd=ar
rr.point=ir}
function u(n,t){n*=Pn
var u=Math.cos(t*=Pn),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(t),c=r*l-i*a,f=i*o-e*l,s=e*a-r*o,h=Math.sqrt(c*c+f*f+s*s),p=e*o+r*a+i*l,g=h&&-Hn(p)/h,v=Math.atan2(h,p)
nr+=g*c
tr+=g*f
er+=g*s
$e+=v
Ge+=v*(e+(e=o))
Ke+=v*(r+(r=a))
Qe+=v*(i+(i=l))
ur(e,r,i)}}function cr(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])})
return e}function fr(){return true}function sr(n,t,e,r,i){var u=[],o=[]
n.forEach(function(n){if((t=n.length-1)<=0)return
var t,e=n[0],r=n[t]
if(Ve(e,r)){i.lineStart()
for(var a=0;a<t;++a)i.point((e=n[a])[0],e[1])
i.lineEnd()
return}var l=new pr(e,n,null,true),c=new pr(e,null,l,false)
l.o=c
u.push(l)
o.push(c)
l=new pr(r,n,null,false)
c=new pr(r,null,l,true)
l.o=c
u.push(l)
o.push(c)})
o.sort(t)
hr(u)
hr(o)
if(!u.length)return
for(var a=0,l=e,c=o.length;a<c;++a)o[a].e=l=!l
var f,s,h=u[0]
while(1){var p=h,g=true
while(p.v)if((p=p.n)===h)return
f=p.z
i.lineStart()
do{p.v=p.o.v=true
if(p.e){if(g)for(a=0,c=f.length;a<c;++a)i.point((s=f[a])[0],s[1])
else r(p.x,p.n.x,1,i)
p=p.n}else{if(g){f=p.p.z
for(a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i)
p=p.p}p=p.o
f=p.z
g=!g}while(!p.v)
i.lineEnd()}}function hr(n){if(!(t=n.length))return
var t,e,r=0,i=n[0]
while(++r<t){i.n=e=n[r]
e.p=i
i=e}i.n=e=n[0]
e.p=i}function pr(n,t,e,r){this.x=n
this.z=t
this.o=e
this.e=r
this.v=false
this.n=this.p=null}function gr(n,t,e,r){return function(i,o){var a=t(o),l=i.invert(r[0],r[1])
var c={point:f,lineStart:h,lineEnd:p,polygonStart:function(){c.point=x
c.lineStart=w
c.lineEnd=b
g=[]
v=[]},polygonEnd:function(){c.point=f
c.lineStart=h
c.lineEnd=p
g=u.merge(g)
var n=br(l,v)
if(g.length){M||(o.polygonStart(),M=true)
sr(g,yr,n,e,o)}else if(n){M||(o.polygonStart(),M=true)
o.lineStart()
e(null,null,1,o)
o.lineEnd()}M&&(o.polygonEnd(),M=false)
g=v=null},sphere:function(){o.polygonStart()
o.lineStart()
e(null,null,1,o)
o.lineEnd()
o.polygonEnd()}}
function f(t,e){var r=i(t,e)
n(t=r[0],e=r[1])&&o.point(t,e)}function s(n,t){var e=i(n,t)
a.point(e[0],e[1])}function h(){c.point=s
a.lineStart()}function p(){c.point=f
a.lineEnd()}var g
var v,d,y=dr(),m=t(y),M=false
function x(n,t){d.push([n,t])
var e=i(n,t)
m.point(e[0],e[1])}function w(){m.lineStart()
d=[]}function b(){x(d[0][0],d[0][1])
m.lineEnd()
var n,t=m.clean(),e=y.buffer(),r=e.length
d.pop()
v.push(d)
d=null
if(!r)return
if(1&t){n=e[0]
r=n.length-1
var i,u=-1
if(r>0){M||(o.polygonStart(),M=true)
o.lineStart()
while(++u<r)o.point((i=n[u])[0],i[1])
o.lineEnd()}return}r>1&&2&t&&e.push(e.pop().concat(e.shift()))
g.push(e.filter(vr))}return c}}function vr(n){return n.length>1}function dr(){var n,t=[]
return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:F,buffer:function(){var e=t
t=[]
n=null
return e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function yr(n,t){return((n=n.x)[0]<0?n[1]-In-Ln:In-n[1])-((t=t.x)[0]<0?t[1]-In-Ln:In-t[1])}var mr=gr(fr,Mr,wr,[-Tn,-Tn/2])
function Mr(n){var t,e=NaN,r=NaN,i=NaN
return{lineStart:function(){n.lineStart()
t=1},point:function(u,o){var a=u>0?Tn:-Tn,l=b(u-e)
if(b(l-Tn)<Ln){n.point(e,r=(r+o)/2>0?In:-In)
n.point(i,r)
n.lineEnd()
n.lineStart()
n.point(a,r)
n.point(u,r)
t=0}else if(i!==a&&l>=Tn){b(e-i)<Ln&&(e-=i*Ln)
b(u-a)<Ln&&(u-=a*Ln)
r=xr(e,r,u,o)
n.point(i,r)
n.lineEnd()
n.lineStart()
n.point(a,r)
t=0}n.point(e=u,r=o)
i=a},lineEnd:function(){n.lineEnd()
e=r=NaN},clean:function(){return 2-t}}}function xr(n,t,e,r){var i,u,o=Math.sin(n-e)
return b(o)>Ln?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function wr(n,t,e,r){var i
if(null==n){i=e*In
r.point(-Tn,i)
r.point(0,i)
r.point(Tn,i)
r.point(Tn,0)
r.point(Tn,-i)
r.point(0,-i)
r.point(-Tn,-i)
r.point(-Tn,0)
r.point(-Tn,i)}else if(b(n[0]-t[0])>Ln){var u=n[0]<t[0]?Tn:-Tn
i=e*u/2
r.point(-u,i)
r.point(0,i)
r.point(u,i)}else r.point(t[0],t[1])}function br(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0
De.reset()
for(var a=0,l=t.length;a<l;++a){var c=t[a],f=c.length
if(!f)continue
var s=c[0],h=s[0],p=s[1]/2+Tn/4,g=Math.sin(p),v=Math.cos(p),d=1
while(true){d===f&&(d=0)
n=c[d]
var y=n[0],m=n[1]/2+Tn/4,M=Math.sin(m),x=Math.cos(m),w=y-h,b=w>=0?1:-1,_=b*w,k=_>Tn,S=g*M
De.add(Math.atan2(S*b*Math.sin(_),v*x+S*Math.cos(_)))
u+=k?w+b*Rn:w
if(k^h>=e^y>=e){var N=Fe(Ue(s),Ue(n))
Ye(N)
var E=Fe(i,N)
Ye(E)
var A=(k^w>=0?-1:1)*On(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=k^w>=0?1:-1)}if(!d++)break
h=y,g=M,v=x,s=n}}return(u<-Ln||u<Ln&&De<-Ln)^1&o}function _r(n){var t=Math.cos(n),e=t>0,r=b(t)>Ln,i=oi(n,6*Pn)
return gr(u,o,i,e?[0,-n]:[-Tn,n-Tn])
function u(n,e){return Math.cos(n)*Math.cos(e)>t}function o(n){var t,i,o,c,f
return{lineStart:function(){c=o=false
f=1},point:function(s,h){var p,g=[s,h],v=u(s,h),d=e?v?0:l(s,h):v?l(s+(s<0?Tn:-Tn),h):0
!t&&(c=o=v)&&n.lineStart()
if(v!==o){p=a(t,g)
if(Ve(t,p)||Ve(g,p)){g[0]+=Ln
g[1]+=Ln
v=u(g[0],g[1])}}if(v!==o){f=0
if(v){n.lineStart()
p=a(g,t)
n.point(p[0],p[1])}else{p=a(t,g)
n.point(p[0],p[1])
n.lineEnd()}t=p}else if(r&&t&&e^v){var y
if(!(d&i)&&(y=a(g,t,true))){f=0
if(e){n.lineStart()
n.point(y[0][0],y[0][1])
n.point(y[1][0],y[1][1])
n.lineEnd()}else{n.point(y[1][0],y[1][1])
n.lineEnd()
n.lineStart()
n.point(y[0][0],y[0][1])}}}!v||t&&Ve(t,g)||n.point(g[0],g[1])
t=g,o=v,i=d},lineEnd:function(){o&&n.lineEnd()
t=null},clean:function(){return f|(c&&o)<<1}}}function a(n,e,r){var i=Ue(n),u=Ue(e)
var o=[1,0,0],a=Fe(i,u),l=je(a,a),c=a[0],f=l-c*c
if(!f)return!r&&n
var s=t*l/f,h=-t*c/f,p=Fe(o,a),g=Oe(o,s),v=Oe(a,h)
He(g,v)
var d=p,y=je(g,d),m=je(d,d),M=y*y-m*(je(g,g)-1)
if(M<0)return
var x=Math.sqrt(M),w=Oe(d,(-y-x)/m)
He(w,g)
w=Ze(w)
if(!r)return w
var _,k=n[0],S=e[0],N=n[1],E=e[1]
S<k&&(_=k,k=S,S=_)
var A=S-k,C=b(A-Tn)<Ln,z=C||A<Ln
!C&&E<N&&(_=N,N=E,E=_)
if(z?C?N+E>0^w[1]<(b(w[0]-k)<Ln?N:E):N<=w[1]&&w[1]<=E:A>Tn^(k<=w[0]&&w[0]<=S)){var L=Oe(d,(-y+x)/m)
He(L,g)
return[w,Ze(L)]}}function l(t,r){var i=e?n:Tn-n,u=0
t<-i?u|=1:t>i&&(u|=2)
r<-i?u|=4:r>i&&(u|=8)
return u}}function kr(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c
u=n-l
if(!g&&u>0)return
u/=g
if(g<0){if(u<h)return
u<p&&(p=u)}else if(g>0){if(u>p)return
u>h&&(h=u)}u=e-l
if(!g&&u<0)return
u/=g
if(g<0){if(u>p)return
u>h&&(h=u)}else if(g>0){if(u<h)return
u<p&&(p=u)}u=t-c
if(!v&&u>0)return
u/=v
if(v<0){if(u<h)return
u<p&&(p=u)}else if(v>0){if(u>p)return
u>h&&(h=u)}u=r-c
if(!v&&u<0)return
u/=v
if(v<0){if(u>p)return
u>h&&(h=u)}else if(v>0){if(u<h)return
u<p&&(p=u)}h>0&&(i.a={x:l+h*g,y:c+h*v})
p<1&&(i.b={x:l+p*g,y:c+p*v})
return i}}var Sr=1e9
u.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){i&&(i.valid=false)
i=u(n)
i.valid=true
return i},extent:function(a){if(!arguments.length)return[[n,t],[e,r]]
u=Nr(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1])
i&&(i.valid=false,i=null)
return o}}
return o.extent([[0,0],[960,500]])}
function Nr(n,t,e,r){return function(l){var c,f,s,h=l,p=dr(),g=kr(n,t,e,r)
var v={point:M,lineStart:A,lineEnd:C,polygonStart:function(){l=p
c=[]
f=[]
E=true},polygonEnd:function(){l=h
c=u.merge(c)
var t=d([n,r]),e=E&&t,i=c.length
if(e||i){l.polygonStart()
if(e){l.lineStart()
y(null,null,1,l)
l.lineEnd()}i&&sr(c,o,t,y,l)
l.polygonEnd()}c=f=s=null}}
function d(n){var t=0,e=f.length,r=n[1]
for(var i=0;i<e;++i)for(var u,o=1,a=f[i],l=a.length,c=a[0];o<l;++o){u=a[o]
c[1]<=r?u[1]>r&&Fn(c,u,n)>0&&++t:u[1]<=r&&Fn(c,u,n)<0&&--t
c=u}return 0!==t}function y(u,o,l,c){var f=0,s=0
if(null==u||(f=i(u,l))!==(s=i(o,l))||a(u,o)<0^l>0)do{c.point(0===f||3===f?n:e,f>1?r:t)}while((f=(f+l+4)%4)!==s)
else c.point(o[0],o[1])}function m(i,u){return n<=i&&i<=e&&t<=u&&u<=r}function M(n,t){m(n,t)&&l.point(n,t)}var x,w,b,_,k,S,N,E
function A(){v.point=z
f&&f.push(s=[])
N=true
S=false
_=k=NaN}function C(){if(c){z(x,w)
b&&S&&p.rejoin()
c.push(p.buffer())}v.point=M
S&&l.lineEnd()}function z(n,t){n=Math.max(-Sr,Math.min(Sr,n))
t=Math.max(-Sr,Math.min(Sr,t))
var e=m(n,t)
f&&s.push([n,t])
if(N){x=n,w=t,b=e
N=false
if(e){l.lineStart()
l.point(n,t)}}else if(e&&S)l.point(n,t)
else{var r={a:{x:_,y:k},b:{x:n,y:t}}
if(g(r)){if(!S){l.lineStart()
l.point(r.a.x,r.a.y)}l.point(r.b.x,r.b.y)
e||l.lineEnd()
E=false}else if(e){l.lineStart()
l.point(n,t)
E=false}}_=n,k=t,S=e}return v}
function i(r,i){return b(r[0]-n)<Ln?i>0?0:3:b(r[0]-e)<Ln?i>0?2:1:b(r[1]-t)<Ln?i>0?1:0:i>0?3:2}function o(n,t){return a(n.x,t.x)}function a(n,t){var e=i(n,1),r=i(t,1)
return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}}function Er(n){var t=0,e=Tn/3,r=Kr(n),i=r(t,e)
i.parallels=function(n){if(!arguments.length)return[t/Tn*180,e/Tn*180]
return r(t=n[0]*Tn/180,e=n[1]*Tn/180)}
return i}function Ar(n,t){var e=Math.sin(n),r=(e+Math.sin(t))/2,i=1+e*(2*r-e),u=Math.sqrt(i)/r
function o(n,t){var e=Math.sqrt(i-2*r*Math.sin(t))/r
return[e*Math.sin(n*=r),u-e*Math.cos(n)]}o.invert=function(n,t){var e=u-t
return[Math.atan2(n,e)/r,On((i-(n*n+e*e)*r*r)/(2*r))]}
return o}(u.geo.conicEqualArea=function(){return Er(Ar)}).raw=Ar
u.geo.albers=function(){return u.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)}
u.geo.albersUsa=function(){var n=u.geo.albers()
var t=u.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65])
var e=u.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18])
var r,i,o,a,l={point:function(n,t){r=[n,t]}}
function c(n){var t=n[0],e=n[1]
r=null;(i(t,e),r)||(o(t,e),r)||a(t,e)
return r}c.invert=function(r){var i=n.scale(),u=n.translate(),o=(r[0]-u[0])/i,a=(r[1]-u[1])/i
return(a>=.12&&a<.234&&o>=-.425&&o<-.214?t:a>=.166&&a<.234&&o>=-.214&&o<-.115?e:n).invert(r)}
c.stream=function(r){var i=n.stream(r),u=t.stream(r),o=e.stream(r)
return{point:function(n,t){i.point(n,t)
u.point(n,t)
o.point(n,t)},sphere:function(){i.sphere()
u.sphere()
o.sphere()},lineStart:function(){i.lineStart()
u.lineStart()
o.lineStart()},lineEnd:function(){i.lineEnd()
u.lineEnd()
o.lineEnd()},polygonStart:function(){i.polygonStart()
u.polygonStart()
o.polygonStart()},polygonEnd:function(){i.polygonEnd()
u.polygonEnd()
o.polygonEnd()}}}
c.precision=function(r){if(!arguments.length)return n.precision()
n.precision(r)
t.precision(r)
e.precision(r)
return c}
c.scale=function(r){if(!arguments.length)return n.scale()
n.scale(r)
t.scale(.35*r)
e.scale(r)
return c.translate(n.translate())}
c.translate=function(r){if(!arguments.length)return n.translate()
var u=n.scale(),f=+r[0],s=+r[1]
i=n.translate(r).clipExtent([[f-.455*u,s-.238*u],[f+.455*u,s+.238*u]]).stream(l).point
o=t.translate([f-.307*u,s+.201*u]).clipExtent([[f-.425*u+Ln,s+.12*u+Ln],[f-.214*u-Ln,s+.234*u-Ln]]).stream(l).point
a=e.translate([f-.205*u,s+.212*u]).clipExtent([[f-.214*u+Ln,s+.166*u+Ln],[f-.115*u-Ln,s+.234*u-Ln]]).stream(l).point
return c}
return c.scale(1070)}
var Cr,zr,Lr={point:F,lineStart:F,lineEnd:F,polygonStart:function(){zr=0
Lr.lineStart=qr},polygonEnd:function(){Lr.lineStart=Lr.lineEnd=Lr.point=F
Cr+=b(zr/2)}}
function qr(){var n,t,e,r
Lr.point=function(u,o){Lr.point=i
n=e=u,t=r=o}
function i(n,t){zr+=r*n-e*t
e=n,r=t}Lr.lineEnd=function(){i(n,t)}}var Tr,Rr,Dr,Ir
var Pr={point:Ur,lineStart:F,lineEnd:F,polygonStart:F,polygonEnd:F}
function Ur(n,t){n<Tr&&(Tr=n)
n>Dr&&(Dr=n)
t<Rr&&(Rr=t)
t>Ir&&(Ir=t)}function jr(){var n=Fr(4.5),t=[]
var e={point:r,lineStart:function(){e.point=i},lineEnd:o,polygonStart:function(){e.lineEnd=a},polygonEnd:function(){e.lineEnd=o
e.point=r},pointRadius:function(t){n=Fr(t)
return e},result:function(){if(t.length){var n=t.join("")
t=[]
return n}}}
function r(e,r){t.push("M",e,",",r,n)}function i(n,r){t.push("M",n,",",r)
e.point=u}function u(n,e){t.push("L",n,",",e)}function o(){e.point=r}function a(){t.push("Z")}return e}function Fr(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}var Hr={point:Or,lineStart:Yr,lineEnd:Zr,polygonStart:function(){Hr.lineStart=Vr},polygonEnd:function(){Hr.point=Or
Hr.lineStart=Yr
Hr.lineEnd=Zr}}
function Or(n,t){Be+=n
We+=t;++Je}function Yr(){var n,t
Hr.point=function(r,i){Hr.point=e
Or(n=r,t=i)}
function e(e,r){var i=e-n,u=r-t,o=Math.sqrt(i*i+u*u)
Ge+=o*(n+e)/2
Ke+=o*(t+r)/2
Qe+=o
Or(n=e,t=r)}}function Zr(){Hr.point=Or}function Vr(){var n,t,e,r
Hr.point=function(u,o){Hr.point=i
Or(n=e=u,t=r=o)}
function i(n,t){var i=n-e,u=t-r,o=Math.sqrt(i*i+u*u)
Ge+=o*(e+n)/2
Ke+=o*(r+t)/2
Qe+=o
o=r*n-e*t
nr+=o*(e+n)
tr+=o*(r+t)
er+=3*o
Or(e=n,r=t)}Hr.lineEnd=function(){i(n,t)}}function Xr(n){var t=4.5
var e={point:r,lineStart:function(){e.point=i},lineEnd:o,polygonStart:function(){e.lineEnd=a},polygonEnd:function(){e.lineEnd=o
e.point=r},pointRadius:function(n){t=n
return e},result:F}
function r(e,r){n.moveTo(e+t,r)
n.arc(e,r,t,0,Rn)}function i(t,r){n.moveTo(t,r)
e.point=u}function u(t,e){n.lineTo(t,e)}function o(){e.point=r}function a(){n.closePath()}return e}function $r(n){var t=.5,e=Math.cos(30*Pn),r=16
function i(n){return(r?o:u)(n)}function u(t){return Jr(t,function(e,r){e=n(e,r)
t.point(e[0],e[1])})}function o(t){var e,i,u,o,l,c,f,s,h,p,g,v
var d={point:y,lineStart:m,lineEnd:x,polygonStart:function(){t.polygonStart()
d.lineStart=w},polygonEnd:function(){t.polygonEnd()
d.lineStart=m}}
function y(e,r){e=n(e,r)
t.point(e[0],e[1])}function m(){s=NaN
d.point=M
t.lineStart()}function M(e,i){var u=Ue([e,i]),o=n(e,i)
a(s,h,f,p,g,v,s=o[0],h=o[1],f=e,p=u[0],g=u[1],v=u[2],r,t)
t.point(s,h)}function x(){d.point=y
t.lineEnd()}function w(){m()
d.point=b
d.lineEnd=_}function b(n,t){M(e=n,t),i=s,u=h,o=p,l=g,c=v
d.point=M}function _(){a(s,h,f,p,g,v,i,u,e,o,l,c,r,t)
d.lineEnd=x
x()}return d}function a(r,i,u,o,l,c,f,s,h,p,g,v,d,y){var m=f-r,M=s-i,x=m*m+M*M
if(x>4*t&&d--){var w=o+p,_=l+g,k=c+v,S=Math.sqrt(w*w+_*_+k*k),N=Math.asin(k/=S),E=b(b(k)-1)<Ln||b(u-h)<Ln?(u+h)/2:Math.atan2(_,w),A=n(E,N),C=A[0],z=A[1],L=C-r,q=z-i,T=M*L-m*q
if(T*T/x>t||b((m*L+M*q)/x-.5)>.3||o*p+l*g+c*v<e){a(r,i,u,o,l,c,C,z,E,w/=S,_/=S,k,d,y)
y.point(C,z)
a(C,z,E,w,_,k,f,s,h,p,g,v,d,y)}}}i.precision=function(n){if(!arguments.length)return Math.sqrt(t)
r=(t=n*n)>0&&16
return i}
return i}u.geo.path=function(){var n,t,e,r,i,o=4.5
function a(n){if(n){"function"===typeof o&&r.pointRadius(+o.apply(this,arguments))
i&&i.valid||(i=e(r))
u.geo.stream(n,i)}return r.result()}a.area=function(n){Cr=0
u.geo.stream(n,e(Lr))
return Cr}
a.centroid=function(n){Be=We=Je=Ge=Ke=Qe=nr=tr=er=0
u.geo.stream(n,e(Hr))
return er?[nr/er,tr/er]:Qe?[Ge/Qe,Ke/Qe]:Je?[Be/Je,We/Je]:[NaN,NaN]}
a.bounds=function(n){Dr=Ir=-(Tr=Rr=Infinity)
u.geo.stream(n,e(Pr))
return[[Tr,Rr],[Dr,Ir]]}
a.projection=function(t){if(!arguments.length)return n
e=(n=t)?t.stream||Br(t):I
return l()}
a.context=function(n){if(!arguments.length)return t
r=null==(t=n)?new jr:new Xr(n)
"function"!==typeof o&&r.pointRadius(o)
return l()}
a.pointRadius=function(n){if(!arguments.length)return o
o="function"===typeof n?n:(r.pointRadius(+n),+n)
return a}
function l(){i=null
return a}return a.projection(u.geo.albersUsa()).context(null)}
function Br(n){var t=$r(function(t,e){return n([t*Un,e*Un])})
return function(n){return Qr(t(n))}}u.geo.transform=function(n){return{stream:function(t){var e=new Wr(t)
for(var r in n)e[r]=n[r]
return e}}}
function Wr(n){this.stream=n}Wr.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}
function Jr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}u.geo.projection=Gr
u.geo.projectionMutator=Kr
function Gr(n){return Kr(function(){return n})()}function Kr(n){var t,e,r,i,o,a,l=$r(function(n,e){n=t(n,e)
return[n[0]*c+i,o-n[1]*c]}),c=150,f=480,s=250,h=0,p=0,g=0,v=0,d=0,y=mr,m=I,M=null,x=null
function w(n){n=r(n[0]*Pn,n[1]*Pn)
return[n[0]*c+i,o-n[1]*c]}function b(n){n=r.invert((n[0]-i)/c,(o-n[1])/c)
return n&&[n[0]*Un,n[1]*Un]}w.stream=function(n){a&&(a.valid=false)
a=Qr(y(e,l(m(n))))
a.valid=true
return a}
w.clipAngle=function(n){if(!arguments.length)return M
y=null==n?(M=n,mr):_r((M=+n)*Pn)
return k()}
w.clipExtent=function(n){if(!arguments.length)return x
x=n
m=n?Nr(n[0][0],n[0][1],n[1][0],n[1][1]):I
return k()}
w.scale=function(n){if(!arguments.length)return c
c=+n
return _()}
w.translate=function(n){if(!arguments.length)return[f,s]
f=+n[0]
s=+n[1]
return _()}
w.center=function(n){if(!arguments.length)return[h*Un,p*Un]
h=n[0]%360*Pn
p=n[1]%360*Pn
return _()}
w.rotate=function(n){if(!arguments.length)return[g*Un,v*Un,d*Un]
g=n[0]%360*Pn
v=n[1]%360*Pn
d=n.length>2?n[2]%360*Pn:0
return _()}
u.rebind(w,l,"precision")
function _(){r=cr(e=ei(g,v,d),t)
var n=t(h,p)
i=f-n[0]*c
o=s+n[1]*c
return k()}function k(){a&&(a.valid=false,a=null)
return w}return function(){t=n.apply(this,arguments)
w.invert=t.invert&&b
return _()}}function Qr(n){return Jr(n,function(t,e){n.point(t*Pn,e*Pn)})}function ni(n,t){return[n,t]}(u.geo.equirectangular=function(){return Gr(ni)}).raw=ni.invert=ni
u.geo.rotation=function(n){n=ei(n[0]%360*Pn,n[1]*Pn,n.length>2?n[2]*Pn:0)
function t(t){t=n(t[0]*Pn,t[1]*Pn)
return t[0]*=Un,t[1]*=Un,t}t.invert=function(t){t=n.invert(t[0]*Pn,t[1]*Pn)
return t[0]*=Un,t[1]*=Un,t}
return t}
function ti(n,t){return[n>Tn?n-Rn:n<-Tn?n+Rn:n,t]}ti.invert=ni
function ei(n,t,e){return n?t||e?cr(ii(n),ui(t,e)):ii(n):t||e?ui(t,e):ti}function ri(n){return function(t,e){return t+=n,[t>Tn?t-Rn:t<-Tn?t+Rn:t,e]}}function ii(n){var t=ri(n)
t.invert=ri(-n)
return t}function ui(n,t){var e=Math.cos(n),r=Math.sin(n),i=Math.cos(t),u=Math.sin(t)
function o(n,t){var o=Math.cos(t),a=Math.cos(n)*o,l=Math.sin(n)*o,c=Math.sin(t),f=c*e+a*r
return[Math.atan2(l*i-f*u,a*e-c*r),On(f*i+l*u)]}o.invert=function(n,t){var o=Math.cos(t),a=Math.cos(n)*o,l=Math.sin(n)*o,c=Math.sin(t),f=c*i-l*u
return[Math.atan2(l*i+c*u,a*e+f*r),On(f*e-a*r)]}
return o}u.geo.circle=function(){var n,t,e=[0,0],r=6
function i(){var n="function"===typeof e?e.apply(this,arguments):e,r=ei(-n[0]*Pn,-n[1]*Pn,0).invert,i=[]
t(null,null,1,{point:function(n,t){i.push(n=r(n,t))
n[0]*=Un,n[1]*=Un}})
return{type:"Polygon",coordinates:[i]}}i.origin=function(n){if(!arguments.length)return e
e=n
return i}
i.angle=function(e){if(!arguments.length)return n
t=oi((n=+e)*Pn,r*Pn)
return i}
i.precision=function(e){if(!arguments.length)return r
t=oi(n*Pn,(r=+e)*Pn)
return i}
return i.angle(90)}
function oi(n,t){var e=Math.cos(n),r=Math.sin(n)
return function(i,u,o,a){var l=o*t
if(null!=i){i=ai(e,i)
u=ai(e,u);(o>0?i<u:i>u)&&(i+=o*Rn)}else{i=n+o*Rn
u=n-.5*l}for(var c,f=i;o>0?f>u:f<u;f-=l)a.point((c=Ze([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function ai(n,t){var e=Ue(t)
e[0]-=n
Ye(e)
var r=Hn(-e[1])
return((-e[2]<0?-r:r)+2*Math.PI-Ln)%(2*Math.PI)}u.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Pn,i=n[1]*Pn,u=t[1]*Pn,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u)
return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)}
u.geo.graticule=function(){var n,t,e,r,i,o,a,l,c,f,s,h,p=10,g=p,v=90,d=360,y=2.5
function m(){return{type:"MultiLineString",coordinates:M()}}function M(){return u.range(Math.ceil(r/v)*v,e,v).map(s).concat(u.range(Math.ceil(l/d)*d,a,d).map(h)).concat(u.range(Math.ceil(t/p)*p,n,p).filter(function(n){return b(n%v)>Ln}).map(c)).concat(u.range(Math.ceil(o/g)*g,i,g).filter(function(n){return b(n%d)>Ln}).map(f))}m.lines=function(){return M().map(function(n){return{type:"LineString",coordinates:n}})}
m.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(h(a).slice(1),s(e).reverse().slice(1),h(l).reverse().slice(1))]}}
m.extent=function(n){if(!arguments.length)return m.minorExtent()
return m.majorExtent(n).minorExtent(n)}
m.majorExtent=function(n){if(!arguments.length)return[[r,l],[e,a]]
r=+n[0][0],e=+n[1][0]
l=+n[0][1],a=+n[1][1]
r>e&&(n=r,r=e,e=n)
l>a&&(n=l,l=a,a=n)
return m.precision(y)}
m.minorExtent=function(e){if(!arguments.length)return[[t,o],[n,i]]
t=+e[0][0],n=+e[1][0]
o=+e[0][1],i=+e[1][1]
t>n&&(e=t,t=n,n=e)
o>i&&(e=o,o=i,i=e)
return m.precision(y)}
m.step=function(n){if(!arguments.length)return m.minorStep()
return m.majorStep(n).minorStep(n)}
m.majorStep=function(n){if(!arguments.length)return[v,d]
v=+n[0],d=+n[1]
return m}
m.minorStep=function(n){if(!arguments.length)return[p,g]
p=+n[0],g=+n[1]
return m}
m.precision=function(u){if(!arguments.length)return y
y=+u
c=li(o,i,90)
f=ci(t,n,y)
s=li(l,a,90)
h=ci(r,e,y)
return m}
return m.majorExtent([[-180,-90+Ln],[180,90-Ln]]).minorExtent([[-180,-80-Ln],[180,80+Ln]])}
function li(n,t,e){var r=u.range(n,t-Ln,e).concat(t)
return function(n){return r.map(function(t){return[n,t]})}}function ci(n,t,e){var r=u.range(n,t-Ln,e).concat(t)
return function(n){return r.map(function(t){return[t,n]})}}function fi(n){return n.source}function si(n){return n.target}u.geo.greatArc=function(){var n,t,e=fi,r=si
function i(){return{type:"LineString",coordinates:[n||e.apply(this,arguments),t||r.apply(this,arguments)]}}i.distance=function(){return u.geo.distance(n||e.apply(this,arguments),t||r.apply(this,arguments))}
i.source=function(t){if(!arguments.length)return e
e=t,n="function"===typeof t?null:t
return i}
i.target=function(n){if(!arguments.length)return r
r=n,t="function"===typeof n?null:n
return i}
i.precision=function(){return arguments.length?i:0}
return i}
u.geo.interpolate=function(n,t){return hi(n[0]*Pn,n[1]*Pn,t[0]*Pn,t[1]*Pn)}
function hi(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(Xn(r-t)+i*o*Xn(e-n))),p=1/Math.sin(h)
var g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a
return[Math.atan2(i,r)*Un,Math.atan2(o,Math.sqrt(r*r+i*i))*Un]}:function(){return[n*Un,t*Un]}
g.distance=h
return g}u.geo.length=function(n){pi=0
u.geo.stream(n,gi)
return pi}
var pi
var gi={sphere:F,point:F,lineStart:vi,lineEnd:F,polygonStart:F,polygonEnd:F}
function vi(){var n,t,e
gi.point=function(i,u){n=i*Pn,t=Math.sin(u*=Pn),e=Math.cos(u)
gi.point=r}
gi.lineEnd=function(){gi.point=gi.lineEnd=F}
function r(r,i){var u=Math.sin(i*=Pn),o=Math.cos(i),a=b((r*=Pn)-n),l=Math.cos(a)
pi+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=e*u-t*o*l)*a),t*u+e*o*l)
n=r,t=u,e=o}}function di(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i)
return[u*i*Math.sin(t),u*Math.sin(e)]}e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i)
return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]}
return e}var yi=di(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(u.geo.azimuthalEqualArea=function(){return Gr(yi)}).raw=yi
var mi=di(function(n){var t=Math.acos(n)
return t&&t/Math.sin(t)},I);(u.geo.azimuthalEquidistant=function(){return Gr(mi)}).raw=mi
function Mi(n,t){var e=Math.cos(n),r=function(n){return Math.tan(Tn/4+n/2)},i=n===t?Math.sin(n):Math.log(e/Math.cos(t))/Math.log(r(t)/r(n)),u=e*Math.pow(r(n),i)/i
if(!i)return bi
function o(n,t){u>0?t<-In+Ln&&(t=-In+Ln):t>In-Ln&&(t=In-Ln)
var e=u/Math.pow(r(t),i)
return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}o.invert=function(n,t){var e=u-t,r=jn(i)*Math.sqrt(n*n+e*e)
return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(u/r,1/i))-In]}
return o}(u.geo.conicConformal=function(){return Er(Mi)}).raw=Mi
function xi(n,t){var e=Math.cos(n),r=n===t?Math.sin(n):(e-Math.cos(t))/(t-n),i=e/r+n
if(b(r)<Ln)return ni
function u(n,t){var e=i-t
return[e*Math.sin(r*n),i-e*Math.cos(r*n)]}u.invert=function(n,t){var e=i-t
return[Math.atan2(n,e)/r,i-jn(r)*Math.sqrt(n*n+e*e)]}
return u}(u.geo.conicEquidistant=function(){return Er(xi)}).raw=xi
var wi=di(function(n){return 1/n},Math.atan);(u.geo.gnomonic=function(){return Gr(wi)}).raw=wi
function bi(n,t){return[n,Math.log(Math.tan(Tn/4+t/2))]}bi.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-In]}
function _i(n){var t,e=Gr(n),r=e.scale,i=e.translate,u=e.clipExtent
e.scale=function(){var n=r.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n}
e.translate=function(){var n=i.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n}
e.clipExtent=function(n){var o=u.apply(e,arguments)
if(o===e){if(t=null==n){var a=Tn*r(),l=i()
u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null)
return o}
return e.clipExtent(null)}(u.geo.mercator=function(){return _i(bi)}).raw=bi
var ki=di(function(){return 1},Math.asin);(u.geo.orthographic=function(){return Gr(ki)}).raw=ki
var Si=di(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(u.geo.stereographic=function(){return Gr(Si)}).raw=Si
function Ni(n,t){return[Math.log(Math.tan(Tn/4+t/2)),-n]}Ni.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-In]};(u.geo.transverseMercator=function(){var n=_i(Ni),t=n.center,e=n.rotate
n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])}
n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])}
return e([0,0,90])}).raw=Ni
u.geom={}
function Ei(n){return n[0]}function Ai(n){return n[1]}u.geom.hull=function(n){var t=Ei,e=Ai
if(arguments.length)return r(n)
function r(n){if(n.length<3)return[]
var r,i=At(t),u=At(e),o=n.length,a=[],l=[]
for(r=0;r<o;r++)a.push([+i.call(this,n[r],r),+u.call(this,n[r],r),r])
a.sort(zi)
for(r=0;r<o;r++)l.push([a[r][0],-a[r][1]])
var c=Ci(a),f=Ci(l)
var s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[]
for(r=c.length-1;r>=0;--r)p.push(n[a[c[r]][2]])
for(r=+s;r<f.length-h;++r)p.push(n[a[f[r]][2]])
return p}r.x=function(n){return arguments.length?(t=n,r):t}
r.y=function(n){return arguments.length?(e=n,r):e}
return r}
function Ci(n){var t=n.length,e=[0,1],r=2
for(var i=2;i<t;i++){while(r>1&&Fn(n[e[r-2]],n[e[r-1]],n[i])<=0)--r
e[r++]=i}return e.slice(0,r)}function zi(n,t){return n[0]-t[0]||n[1]-t[1]}u.geom.polygon=function(n){$(n,Li)
return n}
var Li=u.geom.polygon.prototype=[]
Li.area=function(){var n,t=-1,e=this.length,r=this[e-1],i=0
while(++t<e){n=r
r=this[t]
i+=n[1]*r[0]-n[0]*r[1]}return.5*i}
Li.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1]
arguments.length||(n=-1/(6*this.area()))
while(++r<i){t=a
a=this[r]
e=t[0]*a[1]-a[0]*t[1]
u+=(t[0]+a[0])*e
o+=(t[1]+a[1])*e}return[u*n,o*n]}
Li.clip=function(n){var t,e,r,i,u,o,a=Ri(n),l=-1,c=this.length-Ri(this),f=this[c-1]
while(++l<c){t=n.slice()
n.length=0
i=this[l]
u=t[(r=t.length-a)-1]
e=-1
while(++e<r){o=t[e]
if(qi(o,f,i)){qi(u,f,i)||n.push(Ti(u,o,f,i))
n.push(o)}else qi(u,f,i)&&n.push(Ti(u,o,f,i))
u=o}a&&n.push(n[0])
f=i}return n}
function qi(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Ti(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f)
return[i+h*o,l+h*f]}function Ri(n){var t=n[0],e=n[n.length-1]
return!(t[0]-e[0]||t[1]-e[1])}var Di,Ii,Pi,Ui,ji,Fi=[],Hi=[]
function Oi(){cu(this)
this.edge=this.site=this.circle=null}function Yi(n){var t=Fi.pop()||new Oi
t.site=n
return t}function Zi(n){nu(n)
Pi.remove(n)
Fi.push(n)
cu(n)}function Vi(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n]
Zi(n)
var l=u
while(l.circle&&b(e-l.circle.x)<Ln&&b(r-l.circle.cy)<Ln){u=l.P
a.unshift(l)
Zi(l)
l=u}a.unshift(l)
nu(l)
var c=o
while(c.circle&&b(e-c.circle.x)<Ln&&b(r-c.circle.cy)<Ln){o=c.N
a.push(c)
Zi(c)
c=o}a.push(c)
nu(c)
var f,s=a.length
for(f=1;f<s;++f){c=a[f]
l=a[f-1]
ou(c.edge,l.site,c.site,i)}l=a[0]
c=a[s-1]
c.edge=iu(l.site,c.site,null,i)
Qi(l)
Qi(c)}function Xi(n){var t,e,r,i,u=n.x,o=n.y,a=Pi._
while(a){r=$i(a,o)-u
if(r>Ln)a=a.L
else{i=u-Bi(a,o)
if(!(i>Ln)){if(r>-Ln){t=a.P
e=a}else if(i>-Ln){t=a
e=a.N}else t=e=a
break}if(!a.R){t=a
break}a=a.R}}var l=Yi(n)
Pi.insert(t,l)
if(!t&&!e)return
if(t===e){nu(t)
e=Yi(t.site)
Pi.insert(l,e)
l.edge=e.edge=iu(t.site,l.site)
Qi(t)
Qi(e)
return}if(!e){l.edge=iu(t.site,l.site)
return}nu(t)
nu(e)
var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s}
ou(e.edge,c,g,x)
l.edge=iu(c,n,null,x)
e.edge=iu(n,g,null,x)
Qi(t)
Qi(e)}function $i(n,t){var e=n.site,r=e.x,i=e.y,u=i-t
if(!u)return r
var o=n.P
if(!o)return-Infinity
e=o.site
var a=e.x,l=e.y,c=l-t
if(!c)return a
var f=a-r,s=1/u-1/c,h=f/c
if(s)return(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r
return(r+a)/2}function Bi(n,t){var e=n.N
if(e)return $i(e,t)
var r=n.site
return r.y===t?r.x:Infinity}function Wi(n){this.site=n
this.edges=[]}Wi.prototype.prepare=function(){var n,t=this.edges,e=t.length
while(e--){n=t[e].edge
n.b&&n.a||t.splice(e,1)}t.sort(Gi)
return t.length}
function Ji(n){var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=Ii,d=v.length
while(d--){u=v[d]
if(!u||!u.prepare())continue
a=u.edges
l=a.length
o=0
while(o<l){f=a[o].end(),r=f.x,i=f.y
c=a[++o%l].start(),t=c.x,e=c.y
if(b(r-t)>Ln||b(i-e)>Ln){a.splice(o,0,new au(uu(u.site,f,b(r-s)<Ln&&g-i>Ln?{x:s,y:b(t-s)<Ln?e:g}:b(i-g)<Ln&&h-r>Ln?{x:b(e-g)<Ln?t:h,y:g}:b(r-h)<Ln&&i-p>Ln?{x:h,y:b(t-h)<Ln?e:p}:b(i-p)<Ln&&r-s>Ln?{x:b(e-p)<Ln?t:s,y:p}:null),u.site,null));++l}}}}function Gi(n,t){return t.angle-n.angle}function Ki(){cu(this)
this.x=this.y=this.arc=this.site=this.cy=null}function Qi(n){var t=n.P,e=n.N
if(!t||!e)return
var r=t.site,i=n.site,u=e.site
if(r===u)return
var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a
var h=2*(l*s-c*f)
if(h>=-qn)return
var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h
s=d+a
var y=Hi.pop()||new Ki
y.arc=n
y.site=i
y.x=v+o
y.y=s+Math.sqrt(v*v+d*d)
y.cy=s
n.circle=y
var m=null,M=ji._
while(M)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P
break}M=M.L}else{if(!M.R){m=M
break}M=M.R}ji.insert(m,y)
m||(Ui=y)}function nu(n){var t=n.circle
if(t){t.P||(Ui=t.N)
ji.remove(t)
Hi.push(t)
cu(t)
n.circle=null}}function tu(n){var t,e=Di,r=kr(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length
while(i--){t=e[i]
if(!eu(t,n)||!r(t)||b(t.a.x-t.b.x)<Ln&&b(t.a.y-t.b.y)<Ln){t.a=t.b=null
e.splice(i,1)}}}function eu(n,t){var e=n.b
if(e)return true
var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2
if(v===p){if(d<o||d>=a)return
if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l}
e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c}
e={x:d,y:l}}}else{r=(h-g)/(v-p)
i=y-r*d
if(r<-1||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l}
e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c}
e={x:(l-i)/r,y:l}}else if(p<v){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i}
e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i}
e={x:o,y:r*o+i}}}n.a=u
n.b=e
return true}function ru(n,t){this.l=n
this.r=t
this.a=this.b=null}function iu(n,t,e,r){var i=new ru(n,t)
Di.push(i)
e&&ou(i,n,t,e)
r&&ou(i,t,n,r)
Ii[n.i].edges.push(new au(i,n,t))
Ii[t.i].edges.push(new au(i,t,n))
return i}function uu(n,t,e){var r=new ru(n,null)
r.a=t
r.b=e
Di.push(r)
return r}function ou(n,t,e,r){if(n.a||n.b)n.l===e?n.b=r:n.a=r
else{n.a=r
n.l=t
n.r=e}}function au(n,t,e){var r=n.a,i=n.b
this.edge=n
this.site=t
this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}au.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}}
function lu(){this._=null}function cu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}lu.prototype={insert:function(n,t){var e,r,i
if(n){t.P=n
t.N=n.N
n.N&&(n.N.P=t)
n.N=t
if(n.R){n=n.R
while(n.L)n=n.L
n.L=t}else n.R=t
e=n}else if(this._){n=hu(this._)
t.P=null
t.N=n
n.P=n.L=t
e=n}else{t.P=t.N=null
this._=t
e=null}t.L=t.R=null
t.U=e
t.C=true
n=t
while(e&&e.C){r=e.U
if(e===r.L){i=r.R
if(i&&i.C){e.C=i.C=false
r.C=true
n=r}else{if(n===e.R){fu(this,e)
n=e
e=n.U}e.C=false
r.C=true
su(this,r)}}else{i=r.L
if(i&&i.C){e.C=i.C=false
r.C=true
n=r}else{if(n===e.L){su(this,e)
n=e
e=n.U}e.C=false
r.C=true
fu(this,r)}}e=n.U}this._.C=false},remove:function(n){n.N&&(n.N.P=n.P)
n.P&&(n.P.N=n.N)
n.N=n.P=null
var t,e,r,i=n.U,u=n.L,o=n.R
e=u?o?hu(o):u:o
i?i.L===n?i.L=e:i.R=e:this._=e
if(u&&o){r=e.C
e.C=n.C
e.L=u
u.U=e
if(e!==o){i=e.U
e.U=n.U
n=e.R
i.L=n
e.R=o
o.U=e}else{e.U=i
i=e
n=e.R}}else{r=n.C
n=e}n&&(n.U=i)
if(r)return
if(n&&n.C){n.C=false
return}do{if(n===this._)break
if(n===i.L){t=i.R
if(t.C){t.C=false
i.C=true
fu(this,i)
t=i.R}if(t.L&&t.L.C||t.R&&t.R.C){if(!t.R||!t.R.C){t.L.C=false
t.C=true
su(this,t)
t=i.R}t.C=i.C
i.C=t.R.C=false
fu(this,i)
n=this._
break}}else{t=i.L
if(t.C){t.C=false
i.C=true
su(this,i)
t=i.L}if(t.L&&t.L.C||t.R&&t.R.C){if(!t.L||!t.L.C){t.R.C=false
t.C=true
fu(this,t)
t=i.L}t.C=i.C
i.C=t.L.C=false
su(this,i)
n=this._
break}}t.C=true
n=i
i=i.U}while(!n.C)
n&&(n.C=false)}}
function fu(n,t){var e=t,r=t.R,i=e.U
i?i.L===e?i.L=r:i.R=r:n._=r
r.U=i
e.U=r
e.R=r.L
e.R&&(e.R.U=e)
r.L=e}function su(n,t){var e=t,r=t.L,i=e.U
i?i.L===e?i.L=r:i.R=r:n._=r
r.U=i
e.U=r
e.L=r.R
e.L&&(e.L.U=e)
r.R=e}function hu(n){while(n.L)n=n.L
return n}function pu(n,t){var e,r,i,u=n.sort(gu).pop()
Di=[]
Ii=new Array(n.length)
Pi=new lu
ji=new lu
while(true){i=Ui
if(u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x)){if(u.x!==e||u.y!==r){Ii[u.i]=new Wi(u)
Xi(u)
e=u.x,r=u.y}u=n.pop()}else{if(!i)break
Vi(i.arc)}}t&&(tu(t),Ji(t))
var o={cells:Ii,edges:Di}
Pi=ji=Di=Ii=null
return o}function gu(n,t){return t.y-n.y||t.x-n.x}u.geom.voronoi=function(n){var t=Ei,e=Ai,r=t,i=e,u=vu
if(n)return o(n)
function o(n){var t=new Array(n.length),e=u[0][0],r=u[0][1],i=u[1][0],o=u[1][1]
pu(a(n),u).cells.forEach(function(u,a){var l=u.edges,c=u.site,f=t[a]=l.length?l.map(function(n){var t=n.start()
return[t.x,t.y]}):c.x>=e&&c.x<=i&&c.y>=r&&c.y<=o?[[e,o],[i,o],[i,r],[e,r]]:[]
f.point=n[a]})
return t}function a(n){return n.map(function(n,t){return{x:Math.round(r(n,t)/Ln)*Ln,y:Math.round(i(n,t)/Ln)*Ln,i:t}})}o.links=function(n){return pu(a(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})}
o.triangles=function(n){var t=[]
pu(a(n)).cells.forEach(function(e,r){var i,u=e.site,o=e.edges.sort(Gi),a=-1,l=o.length,c=o[l-1].edge,f=c.l===u?c.r:c.l
while(++a<l){c
i=f
c=o[a].edge
f=c.l===u?c.r:c.l
r<i.i&&r<f.i&&du(u,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}})
return t}
o.x=function(n){return arguments.length?(r=At(t=n),o):t}
o.y=function(n){return arguments.length?(i=At(e=n),o):e}
o.clipExtent=function(n){if(!arguments.length)return u===vu?null:u
u=null==n?vu:n
return o}
o.size=function(n){if(!arguments.length)return u===vu?null:u&&u[1]
return o.clipExtent(n&&[[0,0],n])}
return o}
var vu=[[-1e6,-1e6],[1e6,1e6]]
function du(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}u.geom.delaunay=function(n){return u.geom.voronoi().triangles(n)}
u.geom.quadtree=function(n,t,e,r,i){var u,o=Ei,a=Ai
if(u=arguments.length){o=yu
a=mu
if(3===u){i=e
r=t
e=t=0}return l(n)}function l(n){var l,c,f,s,h,p,g,v,d,y=At(o),m=At(a)
if(null!=t)p=t,g=e,v=r,d=i
else{v=d=-(p=g=Infinity)
c=[],f=[]
h=n.length
if(u)for(s=0;s<h;++s){l=n[s]
l.x<p&&(p=l.x)
l.y<g&&(g=l.y)
l.x>v&&(v=l.x)
l.y>d&&(d=l.y)
c.push(l.x)
f.push(l.y)}else for(s=0;s<h;++s){var M=+y(l=n[s],s),x=+m(l,s)
M<p&&(p=M)
x<g&&(g=x)
M>v&&(v=M)
x>d&&(d=x)
c.push(M)
f.push(x)}}var w=v-p,_=d-g
w>_?d=g+w:v=p+_
function k(n,t,e,r,i,u,o,a){if(isNaN(e)||isNaN(r))return
if(n.leaf){var l=n.x,c=n.y
if(null!=l)if(b(l-e)+b(c-r)<.01)S(n,t,e,r,i,u,o,a)
else{var f=n.point
n.x=n.y=n.point=null
S(n,f,l,c,i,u,o,a)
S(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else S(n,t,e,r,i,u,o,a)}function S(n,t,e,r,i,u,o,a){var l=.5*(i+o),c=.5*(u+a),f=e>=l,s=r>=c,h=s<<1|f
n.leaf=false
n=n.nodes[h]||(n.nodes[h]=Mu())
f?i=l:o=l
s?u=c:a=c
k(n,t,e,r,i,u,o,a)}var N=Mu()
N.add=function(n){k(N,n,+y(n,++s),+m(n,s),p,g,v,d)}
N.visit=function(n){xu(n,N,p,g,v,d)}
N.find=function(n){return wu(N,n[0],n[1],p,g,v,d)}
s=-1
if(null==t){while(++s<h)k(N,n[s],c[s],f[s],p,g,v,d);--s}else n.forEach(N.add)
c=f=n=l=null
return N}l.x=function(n){return arguments.length?(o=n,l):o}
l.y=function(n){return arguments.length?(a=n,l):a}
l.extent=function(n){if(!arguments.length)return null==t?null:[[t,e],[r,i]]
null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1])
return l}
l.size=function(n){if(!arguments.length)return null==t?null:[r-t,i-e]
null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1])
return l}
return l}
function yu(n){return n.x}function mu(n){return n.y}function Mu(){return{leaf:true,nodes:[],point:null,x:null,y:null}}function xu(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes
l[0]&&xu(n,l[0],e,r,o,a)
l[1]&&xu(n,l[1],o,r,i,a)
l[2]&&xu(n,l[2],e,a,o,u)
l[3]&&xu(n,l[3],o,a,i,u)}}function wu(n,t,e,r,i,u,o){var a,l=Infinity;(function n(c,f,s,h,p){if(f>u||s>o||h<r||p<i)return
if(g=c.point){var g,v=t-c.x,d=e-c.y,y=v*v+d*d
if(y<l){var m=Math.sqrt(l=y)
r=t-m,i=e-m
u=t+m,o=e+m
a=g}}var M=c.nodes,x=.5*(f+h),w=.5*(s+p),b=t>=x,_=e>=w
for(var k=_<<1|b,S=k+4;k<S;++k)if(c=M[3&k])switch(3&k){case 0:n(c,f,s,x,w)
break
case 1:n(c,x,s,h,w)
break
case 2:n(c,f,w,x,p)
break
case 3:n(c,x,w,h,p)}})(n,r,i,u,o)
return a}u.interpolateRgb=bu
function bu(n,t){n=u.rgb(n)
t=u.rgb(t)
var e=n.r,r=n.g,i=n.b,o=t.r-e,a=t.g-r,l=t.b-i
return function(n){return"#"+wt(Math.round(e+o*n))+wt(Math.round(r+a*n))+wt(Math.round(i+l*n))}}u.interpolateObject=_u
function _u(n,t){var e,r={},i={}
for(e in n)e in t?r[e]=Au(n[e],t[e]):i[e]=n[e]
for(e in t)e in n||(i[e]=t[e])
return function(n){for(e in r)i[e]=r[e](n)
return i}}u.interpolateNumber=ku
function ku(n,t){n=+n,t=+t
return function(e){return n*(1-e)+t*e}}u.interpolateString=Su
function Su(n,t){var e,r,i,u=Nu.lastIndex=Eu.lastIndex=0,o=-1,a=[],l=[]
n+="",t+=""
while((e=Nu.exec(n))&&(r=Eu.exec(t))){if((i=r.index)>u){i=t.slice(u,i)
a[o]?a[o]+=i:a[++o]=i}if((e=e[0])===(r=r[0]))a[o]?a[o]+=r:a[++o]=r
else{a[++o]=null
l.push({i:o,x:ku(e,r)})}u=Eu.lastIndex}if(u<t.length){i=t.slice(u)
a[o]?a[o]+=i:a[++o]=i}return a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;r<t;++r)a[(e=l[r]).i]=e.x(n)
return a.join("")})}var Nu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Eu=new RegExp(Nu.source,"g")
u.interpolate=Au
function Au(n,t){var e,r=u.interpolators.length
while(--r>=0&&!(e=u.interpolators[r](n,t)));return e}u.interpolators=[function(n,t){var e=typeof t
return("string"===e?Et.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?bu:Su:t instanceof Qn?bu:Array.isArray(t)?Cu:"object"===e&&isNaN(t)?_u:ku)(n,t)}]
u.interpolateArray=Cu
function Cu(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length)
for(e=0;e<a;++e)r.push(Au(n[e],t[e]))
for(;e<u;++e)i[e]=n[e]
for(;e<o;++e)i[e]=t[e]
return function(n){for(e=0;e<a;++e)i[e]=r[e](n)
return i}}var zu=function(){return I}
var Lu=u.map({linear:zu,poly:ju,quad:function(){return Iu},cubic:function(){return Pu},sin:function(){return Fu},exp:function(){return Hu},circle:function(){return Ou},elastic:Yu,back:Zu,bounce:function(){return Vu}})
var qu=u.map({in:I,out:Ru,"in-out":Du,"out-in":function(n){return Du(Ru(n))}})
u.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in"
e=Lu.get(e)||zu
r=qu.get(r)||I
return Tu(r(e.apply(null,o.call(arguments,1))))}
function Tu(n){return function(t){return t<=0?0:t>=1?1:n(t)}}function Ru(n){return function(t){return 1-n(1-t)}}function Du(n){return function(t){return.5*(t<.5?n(2*t):2-n(2-2*t))}}function Iu(n){return n*n}function Pu(n){return n*n*n}function Uu(n){if(n<=0)return 0
if(n>=1)return 1
var t=n*n,e=t*n
return 4*(n<.5?e:3*(n-t)+e-.75)}function ju(n){return function(t){return Math.pow(t,n)}}function Fu(n){return 1-Math.cos(n*In)}function Hu(n){return Math.pow(2,10*(n-1))}function Ou(n){return 1-Math.sqrt(1-n*n)}function Yu(n,t){var e
arguments.length<2&&(t=.45)
arguments.length?e=t/Rn*Math.asin(1/n):(n=1,e=t/4)
return function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Rn/t)}}function Zu(n){n||(n=1.70158)
return function(t){return t*t*((n+1)*t-n)}}function Vu(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}u.interpolateHcl=Xu
function Xu(n,t){n=u.hcl(n)
t=u.hcl(t)
var e=n.h,r=n.c,i=n.l,o=t.h-e,a=t.c-r,l=t.l-i
isNaN(a)&&(a=0,r=isNaN(r)?t.c:r)
isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:o<-180&&(o+=360)
return function(n){return ut(e+o*n,r+a*n,i+l*n)+""}}u.interpolateHsl=$u
function $u(n,t){n=u.hsl(n)
t=u.hsl(t)
var e=n.h,r=n.s,i=n.l,o=t.h-e,a=t.s-r,l=t.l-i
isNaN(a)&&(a=0,r=isNaN(r)?t.s:r)
isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:o<-180&&(o+=360)
return function(n){return et(e+o*n,r+a*n,i+l*n)+""}}u.interpolateLab=Bu
function Bu(n,t){n=u.lab(n)
t=u.lab(t)
var e=n.l,r=n.a,i=n.b,o=t.l-e,a=t.a-r,l=t.b-i
return function(n){return ht(e+o*n,r+a*n,i+l*n)+""}}u.interpolateRound=Wu
function Wu(n,t){t-=n
return function(e){return Math.round(n+t*e)}}u.transform=function(n){var t=l.createElementNS(u.ns.prefix.svg,"g")
return(u.transform=function(n){if(null!=n){t.setAttribute("transform",n)
var e=t.transform.baseVal.consolidate()}return new Ju(e?e.matrix:no)})(n)}
function Ju(n){var t=[n.a,n.b],e=[n.c,n.d],r=Ku(t),i=Gu(t,e),u=Ku(Qu(e,t,-i))||0
if(t[0]*e[1]<e[0]*t[1]){t[0]*=-1
t[1]*=-1
r*=-1
i*=-1}this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Un
this.translate=[n.e,n.f]
this.scale=[r,u]
this.skew=u?Math.atan2(i,u)*Un:0}Ju.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"}
function Gu(n,t){return n[0]*t[0]+n[1]*t[1]}function Ku(n){var t=Math.sqrt(Gu(n,n))
if(t){n[0]/=t
n[1]/=t}return t}function Qu(n,t,e){n[0]+=e*t[0]
n[1]+=e*t[1]
return n}var no={a:1,b:0,c:0,d:1,e:0,f:0}
u.interpolateTransform=oo
function to(n){return n.length?n.pop()+",":""}function eo(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")")
r.push({i:i-4,x:ku(n[0],t[0])},{i:i-2,x:ku(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function ro(n,t,e,r){if(n!==t){n-t>180?t+=360:t-n>180&&(n+=360)
r.push({i:e.push(to(e)+"rotate(",null,")")-2,x:ku(n,t)})}else t&&e.push(to(e)+"rotate("+t+")")}function io(n,t,e,r){n!==t?r.push({i:e.push(to(e)+"skewX(",null,")")-2,x:ku(n,t)}):t&&e.push(to(e)+"skewX("+t+")")}function uo(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(to(e)+"scale(",null,",",null,")")
r.push({i:i-4,x:ku(n[0],t[0])},{i:i-2,x:ku(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(to(e)+"scale("+t+")")}function oo(n,t){var e=[],r=[]
n=u.transform(n),t=u.transform(t)
eo(n.translate,t.translate,e,r)
ro(n.rotate,t.rotate,e,r)
io(n.skew,t.skew,e,r)
uo(n.scale,t.scale,e,r)
n=t=null
return function(n){var t,i=-1,u=r.length
while(++i<u)e[(t=r[i]).i]=t.x(n)
return e.join("")}}function ao(n,t){t=(t-=n=+n)||1/t
return function(e){return(e-n)/t}}function lo(n,t){t=(t-=n=+n)||1/t
return function(e){return Math.max(0,Math.min(1,(e-n)/t))}}u.layout={}
u.layout.bundle=function(){return function(n){var t=[],e=-1,r=n.length
while(++e<r)t.push(co(n[e]))
return t}}
function co(n){var t=n.source,e=n.target,r=so(t,e),i=[t]
while(t!==r){t=t.parent
i.push(t)}var u=i.length
while(e!==r){i.splice(u,0,e)
e=e.parent}return i}function fo(n){var t=[],e=n.parent
while(null!=e){t.push(n)
n=e
e=e.parent}t.push(n)
return t}function so(n,t){if(n===t)return n
var e=fo(n),r=fo(t),i=e.pop(),u=r.pop(),o=null
while(i===u){o=i
i=e.pop()
u=r.pop()}return o}u.layout.chord=function(){var n,t,e,r,i,o,a,l={},c=0
function f(){var l,f,h,p,g,v={},d=[],y=u.range(r),m=[]
n=[]
t=[]
l=0,p=-1
while(++p<r){f=0,g=-1
while(++g<r)f+=e[p][g]
d.push(f)
m.push(u.range(r))
l+=f}i&&y.sort(function(n,t){return i(d[n],d[t])})
o&&m.forEach(function(n,t){n.sort(function(n,r){return o(e[t][n],e[t][r])})})
l=(Rn-c*r)/l
f=0,p=-1
while(++p<r){h=f,g=-1
while(++g<r){var M=y[p],x=m[M][g],w=e[M][x],b=f,_=f+=w*l
v[M+"-"+x]={index:M,subindex:x,startAngle:b,endAngle:_,value:w}}t[M]={index:M,startAngle:h,endAngle:f,value:d[M]}
f+=c}p=-1
while(++p<r){g=p-1
while(++g<r){var k=v[p+"-"+g],S=v[g+"-"+p];(k.value||S.value)&&n.push(k.value<S.value?{source:S,target:k}:{source:k,target:S})}}a&&s()}function s(){n.sort(function(n,t){return a((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}l.matrix=function(i){if(!arguments.length)return e
r=(e=i)&&e.length
n=t=null
return l}
l.padding=function(e){if(!arguments.length)return c
c=e
n=t=null
return l}
l.sortGroups=function(e){if(!arguments.length)return i
i=e
n=t=null
return l}
l.sortSubgroups=function(t){if(!arguments.length)return o
o=t
n=null
return l}
l.sortChords=function(t){if(!arguments.length)return a
a=t
n&&s()
return l}
l.chords=function(){n||f()
return n}
l.groups=function(){t||f()
return t}
return l}
u.layout.force=function(){var n,t,e,r,i,o,a={},l=u.dispatch("start","tick","end"),c=[1,1],f=.9,s=mo,h=Mo,p=-30,g=xo,v=.1,d=.64,y=[],m=[]
function M(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o
if(a*a/d<l){if(l<g){var c=t.charge/l
n.px-=u*c
n.py-=o*c}return true}if(t.point&&l&&l<g){c=t.pointCharge/l
n.px-=u*c
n.py-=o*c}}return!t.charge}}a.tick=function(){if((e*=.99)<.005){n=null
l.end({type:"end",alpha:e=0})
return true}var t,a,s,h,g,d,x,w,b,_=y.length,k=m.length
for(a=0;a<k;++a){s=m[a]
h=s.source
g=s.target
w=g.x-h.x
b=g.y-h.y
if(d=w*w+b*b){d=e*i[a]*((d=Math.sqrt(d))-r[a])/d
w*=d
b*=d
g.x-=w*(x=h.weight+g.weight?h.weight/(h.weight+g.weight):.5)
g.y-=b*x
h.x+=w*(x=1-x)
h.y+=b*x}}if(x=e*v){w=c[0]/2
b=c[1]/2
a=-1
if(x)while(++a<_){s=y[a]
s.x+=(w-s.x)*x
s.y+=(b-s.y)*x}}if(p){yo(t=u.geom.quadtree(y),e,o)
a=-1
while(++a<_)(s=y[a]).fixed||t.visit(M(s))}a=-1
while(++a<_){s=y[a]
if(s.fixed){s.x=s.px
s.y=s.py}else{s.x-=(s.px-(s.px=s.x))*f
s.y-=(s.py-(s.py=s.y))*f}}l.tick({type:"tick",alpha:e})}
a.nodes=function(n){if(!arguments.length)return y
y=n
return a}
a.links=function(n){if(!arguments.length)return m
m=n
return a}
a.size=function(n){if(!arguments.length)return c
c=n
return a}
a.linkDistance=function(n){if(!arguments.length)return s
s="function"===typeof n?n:+n
return a}
a.distance=a.linkDistance
a.linkStrength=function(n){if(!arguments.length)return h
h="function"===typeof n?n:+n
return a}
a.friction=function(n){if(!arguments.length)return f
f=+n
return a}
a.charge=function(n){if(!arguments.length)return p
p="function"===typeof n?n:+n
return a}
a.chargeDistance=function(n){if(!arguments.length)return Math.sqrt(g)
g=n*n
return a}
a.gravity=function(n){if(!arguments.length)return v
v=+n
return a}
a.theta=function(n){if(!arguments.length)return Math.sqrt(d)
d=n*n
return a}
a.alpha=function(t){if(!arguments.length)return e
t=+t
if(e)if(t>0)e=t
else{n.c=null,n.t=NaN,n=null
l.end({type:"end",alpha:e=0})}else if(t>0){l.start({type:"start",alpha:e=t})
n=Ut(a.tick)}return a}
a.start=function(){var n,t,e,u=y.length,l=m.length,f=c[0],g=c[1]
for(n=0;n<u;++n){(e=y[n]).index=n
e.weight=0}for(n=0;n<l;++n){e=m[n]
"number"==typeof e.source&&(e.source=y[e.source])
"number"==typeof e.target&&(e.target=y[e.target]);++e.source.weight;++e.target.weight}for(n=0;n<u;++n){e=y[n]
isNaN(e.x)&&(e.x=v("x",f))
isNaN(e.y)&&(e.y=v("y",g))
isNaN(e.px)&&(e.px=e.x)
isNaN(e.py)&&(e.py=e.y)}r=[]
if("function"===typeof s)for(n=0;n<l;++n)r[n]=+s.call(this,m[n],n)
else for(n=0;n<l;++n)r[n]=s
i=[]
if("function"===typeof h)for(n=0;n<l;++n)i[n]=+h.call(this,m[n],n)
else for(n=0;n<l;++n)i[n]=h
o=[]
if("function"===typeof p)for(n=0;n<u;++n)o[n]=+p.call(this,y[n],n)
else for(n=0;n<u;++n)o[n]=p
function v(e,r){if(!t){t=new Array(u)
for(c=0;c<u;++c)t[c]=[]
for(c=0;c<l;++c){var i=m[c]
t[i.source.index].push(i.target)
t[i.target.index].push(i.source)}}var o,a=t[n],c=-1,f=a.length
while(++c<f)if(!isNaN(o=a[c][e]))return o
return Math.random()*r}return a.resume()}
a.resume=function(){return a.alpha(.1)}
a.stop=function(){return a.alpha(0)}
a.drag=function(){t||(t=u.behavior.drag().origin(I).on("dragstart.force",ho).on("drag.force",x).on("dragend.force",po))
if(!arguments.length)return t
this.on("mouseover.force",go).on("mouseout.force",vo).call(t)}
function x(n){n.px=u.event.x,n.py=u.event.y
a.resume()}return u.rebind(a,l,"on")}
function ho(n){n.fixed|=2}function po(n){n.fixed&=-7}function go(n){n.fixed|=4
n.px=n.x,n.py=n.y}function vo(n){n.fixed&=-5}function yo(n,t,e){var r=0,i=0
n.charge=0
if(!n.leaf){var u,o=n.nodes,a=o.length,l=-1
while(++l<a){u=o[l]
if(null==u)continue
yo(u,t,e)
n.charge+=u.charge
r+=u.charge*u.cx
i+=u.charge*u.cy}}if(n.point){if(!n.leaf){n.point.x+=Math.random()-.5
n.point.y+=Math.random()-.5}var c=t*e[n.point.index]
n.charge+=n.pointCharge=c
r+=c*n.point.x
i+=c*n.point.y}n.cx=r/n.charge
n.cy=i/n.charge}var mo=20,Mo=1,xo=Infinity
u.layout.hierarchy=function(){var n=No,t=ko,e=So
function r(i){var u,o=[i],a=[]
i.depth=0
while(null!=(u=o.pop())){a.push(u)
if((c=t.call(r,u,u.depth))&&(l=c.length)){var l,c,f
while(--l>=0){o.push(f=c[l])
f.parent=u
f.depth=u.depth+1}e&&(u.value=0)
u.children=c}else{e&&(u.value=+e.call(r,u,u.depth)||0)
delete u.children}}_o(i,function(t){var r,i
n&&(r=t.children)&&r.sort(n)
e&&(i=t.parent)&&(i.value+=t.value)})
return a}r.sort=function(t){if(!arguments.length)return n
n=t
return r}
r.children=function(n){if(!arguments.length)return t
t=n
return r}
r.value=function(n){if(!arguments.length)return e
e=n
return r}
r.revalue=function(n){if(e){bo(n,function(n){n.children&&(n.value=0)})
_o(n,function(n){var t
n.children||(n.value=+e.call(r,n,n.depth)||0);(t=n.parent)&&(t.value+=n.value)})}return n}
return r}
function wo(n,t){u.rebind(n,t,"sort","children","value")
n.nodes=n
n.links=Eo
return n}function bo(n,t){var e=[n]
while(null!=(n=e.pop())){t(n)
if((i=n.children)&&(r=i.length)){var r,i
while(--r>=0)e.push(i[r])}}}function _o(n,t){var e=[n],r=[]
while(null!=(n=e.pop())){r.push(n)
if((u=n.children)&&(i=u.length)){var i,u,o=-1
while(++o<i)e.push(u[o])}}while(null!=(n=r.pop()))t(n)}function ko(n){return n.children}function So(n){return n.value}function No(n,t){return t.value-n.value}function Eo(n){return u.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}u.layout.partition=function(){var n=u.layout.hierarchy(),t=[1,1]
function e(n,t,r,i){var u=n.children
n.x=t
n.y=n.depth*i
n.dx=r
n.dy=i
if(u&&(o=u.length)){var o,a,l,c=-1
r=n.value?r/n.value:0
while(++c<o){e(a=u[c],t,l=a.value*r,i)
t+=l}}}function r(n){var t=n.children,e=0
if(t&&(i=t.length)){var i,u=-1
while(++u<i)e=Math.max(e,r(t[u]))}return 1+e}function i(i,u){var o=n.call(this,i,u)
e(o[0],0,t[0],t[1]/r(o[0]))
return o}i.size=function(n){if(!arguments.length)return t
t=n
return i}
return wo(i,n)}
u.layout.pie=function(){var n=Number,t=Ao,e=0,r=Rn,i=0
function o(a){var l,c=a.length,f=a.map(function(t,e){return+n.call(o,t,e)}),s=+("function"===typeof e?e.apply(this,arguments):e),h=("function"===typeof r?r.apply(this,arguments):r)-s,p=Math.min(Math.abs(h)/c,+("function"===typeof i?i.apply(this,arguments):i)),g=p*(h<0?-1:1),v=u.sum(f),d=v?(h-c*g)/v:0,y=u.range(c),m=[]
null!=t&&y.sort(t===Ao?function(n,t){return f[t]-f[n]}:function(n,e){return t(a[n],a[e])})
y.forEach(function(n){m[n]={data:a[n],value:l=f[n],startAngle:s,endAngle:s+=l*d+g,padAngle:p}})
return m}o.value=function(t){if(!arguments.length)return n
n=t
return o}
o.sort=function(n){if(!arguments.length)return t
t=n
return o}
o.startAngle=function(n){if(!arguments.length)return e
e=n
return o}
o.endAngle=function(n){if(!arguments.length)return r
r=n
return o}
o.padAngle=function(n){if(!arguments.length)return i
i=n
return o}
return o}
var Ao={}
u.layout.stack=function(){var n=I,t=Ro,e=Do,r=Lo,i=Co,o=zo
function a(l,c){if(!(g=l.length))return l
var f=l.map(function(t,e){return n.call(a,t,e)})
var s=f.map(function(n){return n.map(function(n,t){return[i.call(a,n,t),o.call(a,n,t)]})})
var h=t.call(a,s,c)
f=u.permute(f,h)
s=u.permute(s,h)
var p=e.call(a,s,c)
var g,v,d,y,m=f[0].length
for(d=0;d<m;++d){r.call(a,f[0][d],y=p[d],s[0][d][1])
for(v=1;v<g;++v)r.call(a,f[v][d],y+=s[v-1][d][1],s[v][d][1])}return l}a.values=function(t){if(!arguments.length)return n
n=t
return a}
a.order=function(n){if(!arguments.length)return t
t="function"===typeof n?n:qo.get(n)||Ro
return a}
a.offset=function(n){if(!arguments.length)return e
e="function"===typeof n?n:To.get(n)||Do
return a}
a.x=function(n){if(!arguments.length)return i
i=n
return a}
a.y=function(n){if(!arguments.length)return o
o=n
return a}
a.out=function(n){if(!arguments.length)return r
r=n
return a}
return a}
function Co(n){return n.x}function zo(n){return n.y}function Lo(n,t,e){n.y0=t
n.y=e}var qo=u.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(Io),o=n.map(Po),a=u.range(r).sort(function(n,t){return i[n]-i[t]}),l=0,c=0,f=[],s=[]
for(t=0;t<r;++t){e=a[t]
if(l<c){l+=o[e]
f.push(e)}else{c+=o[e]
s.push(e)}}return s.reverse().concat(f)},reverse:function(n){return u.range(n.length).reverse()},default:Ro})
var To=u.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[]
for(e=0;e<u;++e){for(t=0,r=0;t<i;t++)r+=n[t][e][1]
r>a&&(a=r)
o.push(r)}for(e=0;e<u;++e)l[e]=(a-o[e])/2
return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[]
p[0]=l=c=0
for(e=1;e<h;++e){for(t=0,i=0;t<f;++t)i+=n[t][e][1]
for(t=0,u=0,a=s[e][0]-s[e-1][0];t<f;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);r<t;++r)o+=(n[r][e][1]-n[r][e-1][1])/a
u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0
l<c&&(c=l)}for(e=0;e<h;++e)p[e]-=c
return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[]
for(e=0;e<u;++e){for(t=0,r=0;t<i;t++)r+=n[t][e][1]
if(r)for(t=0;t<i;t++)n[t][e][1]/=r
else for(t=0;t<i;t++)n[t][e][1]=o}for(e=0;e<u;++e)a[e]=0
return a},zero:Do})
function Ro(n){return u.range(n.length)}function Do(n){var t=-1,e=n[0].length,r=[]
while(++t<e)r[t]=0
return r}function Io(n){var t,e=1,r=0,i=n[0][1],u=n.length
for(;e<u;++e)if((t=n[e][1])>i){r=e
i=t}return r}function Po(n){return n.reduce(Uo,0)}function Uo(n,t){return n+t[1]}u.layout.histogram=function(){var n=true,t=Number,e=Ho,r=jo
function i(i,o){var a,l,c=[],f=i.map(t,this),s=e.call(this,f,o),h=r.call(this,s,f,o),p=(o=-1,f.length),g=h.length-1,v=n?1:1/p
while(++o<g){a=c[o]=[]
a.dx=h[o+1]-(a.x=h[o])
a.y=0}if(g>0){o=-1
while(++o<p){l=f[o]
if(l>=s[0]&&l<=s[1]){a=c[u.bisect(h,l,1,g)-1]
a.y+=v
a.push(i[o])}}}return c}i.value=function(n){if(!arguments.length)return t
t=n
return i}
i.range=function(n){if(!arguments.length)return e
e=At(n)
return i}
i.bins=function(n){if(!arguments.length)return r
r="number"===typeof n?function(t){return Fo(t,n)}:At(n)
return i}
i.frequency=function(t){if(!arguments.length)return n
n=!!t
return i}
return i}
function jo(n,t){return Fo(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function Fo(n,t){var e=-1,r=+n[0],i=(n[1]-r)/t,u=[]
while(++e<=t)u[e]=i*e+r
return u}function Ho(n){return[u.min(n),u.max(n)]}u.layout.pack=function(){var n,t=u.layout.hierarchy().sort(Oo),e=0,r=[1,1]
function i(i,u){var o=t.call(this,i,u),a=o[0],l=r[0],c=r[1],f=null==n?Math.sqrt:"function"===typeof n?n:function(){return n}
a.x=a.y=0
_o(a,function(n){n.r=+f(n.value)})
_o(a,Xo)
if(e){var s=e*(n?1:Math.max(2*a.r/l,2*a.r/c))/2
_o(a,function(n){n.r+=s})
_o(a,Xo)
_o(a,function(n){n.r-=s})}Wo(a,l/2,c/2,n?1:1/Math.max(2*a.r/l,2*a.r/c))
return o}i.size=function(n){if(!arguments.length)return r
r=n
return i}
i.radius=function(t){if(!arguments.length)return n
n=null==t||"function"===typeof t?t:+t
return i}
i.padding=function(n){if(!arguments.length)return e
e=+n
return i}
return wo(i,t)}
function Oo(n,t){return n.value-t.value}function Yo(n,t){var e=n._pack_next
n._pack_next=t
t._pack_prev=n
t._pack_next=e
e._pack_prev=t}function Zo(n,t){n._pack_next=t
t._pack_prev=n}function Vo(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r
return.999*i*i>e*e+r*r}function Xo(n){if(!(t=n.children)||!(l=t.length))return
var t,e,r,i,u,o,a,l,c=Infinity,f=-Infinity,s=Infinity,h=-Infinity
function p(n){c=Math.min(n.x-n.r,c)
f=Math.max(n.x+n.r,f)
s=Math.min(n.y-n.r,s)
h=Math.max(n.y+n.r,h)}t.forEach($o)
e=t[0]
e.x=-e.r
e.y=0
p(e)
if(l>1){r=t[1]
r.x=r.r
r.y=0
p(r)
if(l>2){i=t[2]
Jo(e,r,i)
p(i)
Yo(e,i)
e._pack_prev=i
Yo(i,r)
r=e._pack_next
for(u=3;u<l;u++){Jo(e,r,i=t[u])
var g=0,v=1,d=1
for(o=r._pack_next;o!==r;o=o._pack_next,v++)if(Vo(o,i)){g=1
break}if(1==g)for(a=e._pack_prev;a!==o._pack_prev;a=a._pack_prev,d++)if(Vo(a,i))break
if(g){v<d||v==d&&r.r<e.r?Zo(e,r=o):Zo(e=a,r)
u--}else{Yo(e,i)
r=i
p(i)}}}}var y=(c+f)/2,m=(s+h)/2,M=0
for(u=0;u<l;u++){i=t[u]
i.x-=y
i.y-=m
M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y))}n.r=M
t.forEach(Bo)}function $o(n){n._pack_next=n._pack_prev=n}function Bo(n){delete n._pack_next
delete n._pack_prev}function Wo(n,t,e,r){var i=n.children
n.x=t+=r*n.x
n.y=e+=r*n.y
n.r*=r
if(i){var u=-1,o=i.length
while(++u<o)Wo(i[u],t,e,r)}}function Jo(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y
if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u
o*=o
r*=r
var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a)
e.x=n.x+l*i+c*u
e.y=n.y+l*u-c*i}else{e.x=n.x+r
e.y=n.y}}u.layout.tree=function(){var n=u.layout.hierarchy().sort(null).value(null),t=Go,e=[1,1],r=null
function i(i,u){var c=n.call(this,i,u),s=c[0],h=o(s)
_o(h,a),h.parent.m=-h.z
bo(h,l)
if(r)bo(s,f)
else{var p=s,g=s,v=s
bo(s,function(n){n.x<p.x&&(p=n)
n.x>g.x&&(g=n)
n.depth>v.depth&&(v=n)})
var d=t(p,g)/2-p.x,y=e[0]/(g.x+t(g,p)/2+d),m=e[1]/(v.depth||1)
bo(s,function(n){n.x=(n.x+d)*y
n.y=n.depth*m})}return c}function o(n){var t,e={A:null,children:[n]},r=[e]
while(null!=(t=r.pop()))for(var i,u=t.children,o=0,a=u.length;o<a;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i)
return e.children[0]}function a(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null
if(e.length){ta(n)
var u=(e[0].z+e[e.length-1].z)/2
if(i){n.z=i.z+t(n._,i._)
n.m=n.z-u}else n.z=u}else i&&(n.z=i.z+t(n._,i._))
n.parent.A=c(n,i,n.parent.A||r[0])}function l(n){n._.x=n.z+n.parent.m
n.m+=n.parent.m}function c(n,e,r){if(e){var i,u=n,o=n,a=e,l=u.parent.children[0],c=u.m,f=o.m,s=a.m,h=l.m
while(a=Qo(a),u=Ko(u),a&&u){l=Ko(l)
o=Qo(o)
o.a=n
i=a.z+s-u.z-c+t(a._,u._)
if(i>0){na(ea(a,n,r),n,i)
c+=i
f+=i}s+=a.m
c+=u.m
h+=l.m
f+=o.m}if(a&&!Qo(o)){o.t=a
o.m+=s-f}if(u&&!Ko(l)){l.t=u
l.m+=c-h
r=n}}return r}function f(n){n.x*=e[0]
n.y=n.depth*e[1]}i.separation=function(n){if(!arguments.length)return t
t=n
return i}
i.size=function(n){if(!arguments.length)return r?null:e
r=null==(e=n)?f:null
return i}
i.nodeSize=function(n){if(!arguments.length)return r?e:null
r=null==(e=n)?null:f
return i}
return wo(i,n)}
function Go(n,t){return n.parent==t.parent?1:2}function Ko(n){var t=n.children
return t.length?t[0]:n.t}function Qo(n){var t,e=n.children
return(t=e.length)?e[t-1]:n.t}function na(n,t,e){var r=e/(t.i-n.i)
t.c-=r
t.s+=e
n.c+=r
t.z+=e
t.m+=e}function ta(n){var t,e=0,r=0,i=n.children,u=i.length
while(--u>=0){t=i[u]
t.z+=e
t.m+=e
e+=t.s+(r+=t.c)}}function ea(n,t,e){return n.a.parent===t.parent?n.a:e}u.layout.cluster=function(){var n=u.layout.hierarchy().sort(null).value(null),t=Go,e=[1,1],r=false
function i(i,u){var o,a=n.call(this,i,u),l=a[0],c=0
_o(l,function(n){var e=n.children
if(e&&e.length){n.x=ia(e)
n.y=ra(e)}else{n.x=o?c+=t(n,o):0
n.y=0
o=n}})
var f=ua(l),s=oa(l),h=f.x-t(f,s)/2,p=s.x+t(s,f)/2
_o(l,r?function(n){n.x=(n.x-l.x)*e[0]
n.y=(l.y-n.y)*e[1]}:function(n){n.x=(n.x-h)/(p-h)*e[0]
n.y=(1-(l.y?n.y/l.y:1))*e[1]})
return a}i.separation=function(n){if(!arguments.length)return t
t=n
return i}
i.size=function(n){if(!arguments.length)return r?null:e
r=null==(e=n)
return i}
i.nodeSize=function(n){if(!arguments.length)return r?e:null
r=null!=(e=n)
return i}
return wo(i,n)}
function ra(n){return 1+u.max(n,function(n){return n.y})}function ia(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function ua(n){var t=n.children
return t&&t.length?ua(t[0]):n}function oa(n){var t,e=n.children
return e&&(t=e.length)?oa(e[t-1]):n}u.layout.treemap=function(){var n,t=u.layout.hierarchy(),e=Math.round,r=[1,1],i=null,o=aa,a=false,l="squarify",c=.5*(1+Math.sqrt(5))
function f(n,t){var e,r,i=-1,u=n.length
while(++i<u){r=(e=n[i]).value*(t<0?0:t)
e.area=isNaN(r)||r<=0?0:r}}function s(n){var t=n.children
if(t&&t.length){var e,r,i,u=o(n),a=[],c=t.slice(),h=Infinity,v="slice"===l?u.dx:"dice"===l?u.dy:"slice-dice"===l?1&n.depth?u.dy:u.dx:Math.min(u.dx,u.dy)
f(c,u.dx*u.dy/n.value)
a.area=0
while((i=c.length)>0){a.push(e=c[i-1])
a.area+=e.area
if("squarify"!==l||(r=p(a,v))<=h){c.pop()
h=r}else{a.area-=a.pop().area
g(a,v,u,false)
v=Math.min(u.dx,u.dy)
a.length=a.area=0
h=Infinity}}if(a.length){g(a,v,u,true)
a.length=a.area=0}t.forEach(s)}}function h(n){var t=n.children
if(t&&t.length){var e,r=o(n),i=t.slice(),u=[]
f(i,r.dx*r.dy/n.value)
u.area=0
while(e=i.pop()){u.push(e)
u.area+=e.area
if(null!=e.z){g(u,e.z?r.dx:r.dy,r,!i.length)
u.length=u.area=0}}t.forEach(h)}}function p(n,t){var e,r=n.area,i=0,u=Infinity,o=-1,a=n.length
while(++o<a){if(!(e=n[o].area))continue
e<u&&(u=e)
e>i&&(i=e)}r*=r
t*=t
return r?Math.max(t*i*c/r,r/(t*u*c)):Infinity}function g(n,t,r,i){var u,o=-1,a=n.length,l=r.x,c=r.y,f=t?e(n.area/t):0
if(t==r.dx){(i||f>r.dy)&&(f=r.dy)
while(++o<a){u=n[o]
u.x=l
u.y=c
u.dy=f
l+=u.dx=Math.min(r.x+r.dx-l,f?e(u.area/f):0)}u.z=true
u.dx+=r.x+r.dx-l
r.y+=f
r.dy-=f}else{(i||f>r.dx)&&(f=r.dx)
while(++o<a){u=n[o]
u.x=l
u.y=c
u.dx=f
c+=u.dy=Math.min(r.y+r.dy-c,f?e(u.area/f):0)}u.z=false
u.dy+=r.y+r.dy-c
r.x+=f
r.dx-=f}}function v(e){var i=n||t(e),u=i[0]
u.x=u.y=0
u.value?(u.dx=r[0],u.dy=r[1]):u.dx=u.dy=0
n&&t.revalue(u)
f([u],u.dx*u.dy/u.value);(n?h:s)(u)
a&&(n=i)
return i}v.size=function(n){if(!arguments.length)return r
r=n
return v}
v.padding=function(n){if(!arguments.length)return i
function t(t){var e=n.call(v,t,t.depth)
return null==e?aa(t):la(t,"number"===typeof e?[e,e,e,e]:e)}function e(t){return la(t,n)}var r
o=null==(i=n)?aa:"function"===(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e
return v}
v.round=function(n){if(!arguments.length)return e!=Number
e=n?Math.round:Number
return v}
v.sticky=function(t){if(!arguments.length)return a
a=t
n=null
return v}
v.ratio=function(n){if(!arguments.length)return c
c=n
return v}
v.mode=function(n){if(!arguments.length)return l
l=n+""
return v}
return wo(v,t)}
function aa(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function la(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2]
if(i<0){e+=i/2
i=0}if(u<0){r+=u/2
u=0}return{x:e,y:r,dx:i,dy:u}}u.random={normal:function(n,t){var e=arguments.length
e<2&&(t=1)
e<1&&(n=0)
return function(){var e,r,i
do{e=2*Math.random()-1
r=2*Math.random()-1
i=e*e+r*r}while(!i||i>1)
return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=u.random.normal.apply(u,arguments)
return function(){return Math.exp(n())}},bates:function(n){var t=u.random.irwinHall(n)
return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;e<n;e++)t+=Math.random()
return t}}}
u.scale={}
function ca(n){var t=n[0],e=n[n.length-1]
return t<e?[t,e]:[e,t]}function fa(n){return n.rangeExtent?n.rangeExtent():ca(n.range())}function sa(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1])
return function(n){return u(i(n))}}function ha(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i]
if(o<u){e=r,r=i,i=e
e=u,u=o,o=e}n[r]=t.floor(u)
n[i]=t.ceil(o)
return n}function pa(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ga}var ga={floor:I,ceil:I}
function va(n,t,e,r){var i=[],o=[],a=0,l=Math.min(n.length,t.length)-1
if(n[l]<n[0]){n=n.slice().reverse()
t=t.slice().reverse()}while(++a<=l){i.push(e(n[a-1],n[a]))
o.push(r(t[a-1],t[a]))}return function(t){var e=u.bisect(n,t,1,l)-1
return o[e](i[e](t))}}u.scale.linear=function(){return da([0,1],[0,1],Au,false)}
function da(n,t,e,r){var i,u
function o(){var o=Math.min(n.length,t.length)>2?va:sa,l=r?lo:ao
i=o(n,t,l,e)
u=o(t,n,l,Au)
return a}function a(n){return i(n)}a.invert=function(n){return u(n)}
a.domain=function(t){if(!arguments.length)return n
n=t.map(Number)
return o()}
a.range=function(n){if(!arguments.length)return t
t=n
return o()}
a.rangeRound=function(n){return a.range(n).interpolate(Wu)}
a.clamp=function(n){if(!arguments.length)return r
r=n
return o()}
a.interpolate=function(n){if(!arguments.length)return e
e=n
return o()}
a.ticks=function(t){return xa(n,t)}
a.tickFormat=function(t,e){return wa(n,t,e)}
a.nice=function(t){ma(n,t)
return o()}
a.copy=function(){return da(n,t,e,r)}
return o()}function ya(n,t){return u.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ma(n,t){ha(n,pa(Ma(n,t)[2]))
ha(n,pa(Ma(n,t)[2]))
return n}function Ma(n,t){null==t&&(t=10)
var e=ca(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i
u<=.15?i*=10:u<=.35?i*=5:u<=.75&&(i*=2)
e[0]=Math.ceil(e[0]/i)*i
e[1]=Math.floor(e[1]/i)*i+.5*i
e[2]=i
return e}function xa(n,t){return u.range.apply(u,Ma(n,t))}function wa(n,t,e){var r=Ma(n,t)
if(e){var i=Xt.exec(e)
i.shift()
if("s"===i[8]){var o=u.formatPrefix(Math.max(b(r[0]),b(r[1])))
i[7]||(i[7]="."+_a(o.scale(r[2])))
i[8]="f"
e=u.format(i.join(""))
return function(n){return e(o.scale(n))+o.symbol}}i[7]||(i[7]="."+ka(i[8],r))
e=i.join("")}else e=",."+_a(r[2])+"f"
return u.format(e)}var ba={s:1,g:1,p:1,r:1,e:1}
function _a(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ka(n,t){var e=_a(t[2])
return n in ba?Math.abs(e-_a(Math.max(b(t[0]),b(t[1]))))+ +("e"!==n):e-2*("%"===n)}u.scale.log=function(){return Sa(u.scale.linear().domain([0,1]),10,true,[1,10])}
function Sa(n,t,e,r){function i(n){return(e?Math.log(n<0?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function o(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(i(t))}a.invert=function(t){return o(n.invert(t))}
a.domain=function(t){if(!arguments.length)return r
e=t[0]>=0
n.domain((r=t.map(Number)).map(i))
return a}
a.base=function(e){if(!arguments.length)return t
t=+e
n.domain(r.map(i))
return a}
a.nice=function(){var t=ha(r.map(i),e?Math:Ea)
n.domain(t)
r=t.map(o)
return a}
a.ticks=function(){var n=ca(r),u=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t
if(isFinite(f-c)){if(e){for(;c<f;c++)for(var h=1;h<s;h++)u.push(o(c)*h)
u.push(o(c))}else{u.push(o(c))
for(;c++<f;)for(h=s-1;h>0;h--)u.push(o(c)*h)}for(c=0;u[c]<a;c++);for(f=u.length;u[f-1]>l;f--);u=u.slice(c,f)}return u}
a.tickFormat=function(n,e){if(!arguments.length)return Na
arguments.length<2?e=Na:"function"!==typeof e&&(e=u.format(e))
var r=Math.max(1,t*n/a.ticks().length)
return function(n){var u=n/o(Math.round(i(n)))
u*t<t-.5&&(u*=t)
return u<=r?e(n):""}}
a.copy=function(){return Sa(n.copy(),t,e,r)}
return ya(a,n)}var Na=u.format(".0e"),Ea={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}}
u.scale.pow=function(){return Aa(u.scale.linear(),1,[0,1])}
function Aa(n,t,e){var r=Ca(t),i=Ca(1/t)
function u(t){return n(r(t))}u.invert=function(t){return i(n.invert(t))}
u.domain=function(t){if(!arguments.length)return e
n.domain((e=t.map(Number)).map(r))
return u}
u.ticks=function(n){return xa(e,n)}
u.tickFormat=function(n,t){return wa(e,n,t)}
u.nice=function(n){return u.domain(ma(e,n))}
u.exponent=function(o){if(!arguments.length)return t
r=Ca(t=o)
i=Ca(1/t)
n.domain(e.map(r))
return u}
u.copy=function(){return Aa(n.copy(),t,e)}
return ya(u,n)}function Ca(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}u.scale.sqrt=function(){return u.scale.pow().exponent(.5)}
u.scale.ordinal=function(){return za([],{t:"range",a:[[]]})}
function za(n,t){var e,r,i
function o(i){return r[((e.get(i)||("range"===t.t?e.set(i,n.push(i)):NaN))-1)%r.length]}function a(t,e){return u.range(n.length).map(function(n){return t+e*n})}o.domain=function(r){if(!arguments.length)return n
n=[]
e=new S
var i,u=-1,a=r.length
while(++u<a)e.has(i=r[u])||e.set(i,n.push(i))
return o[t.t].apply(o,t.a)}
o.range=function(n){if(!arguments.length)return r
r=n
i=0
t={t:"range",a:arguments}
return o}
o.rangePoints=function(e,u){arguments.length<2&&(u=0)
var l=e[0],c=e[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+u)
r=a(l+f*u/2,f)
i=0
t={t:"rangePoints",a:arguments}
return o}
o.rangeRoundPoints=function(e,u){arguments.length<2&&(u=0)
var l=e[0],c=e[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+u)|0
r=a(l+Math.round(f*u/2+(c-l-(n.length-1+u)*f)/2),f)
i=0
t={t:"rangeRoundPoints",a:arguments}
return o}
o.rangeBands=function(e,u,l){arguments.length<2&&(u=0)
arguments.length<3&&(l=u)
var c=e[1]<e[0],f=e[c-0],s=e[1-c],h=(s-f)/(n.length-u+2*l)
r=a(f+h*l,h)
c&&r.reverse()
i=h*(1-u)
t={t:"rangeBands",a:arguments}
return o}
o.rangeRoundBands=function(e,u,l){arguments.length<2&&(u=0)
arguments.length<3&&(l=u)
var c=e[1]<e[0],f=e[c-0],s=e[1-c],h=Math.floor((s-f)/(n.length-u+2*l))
r=a(f+Math.round((s-f-(n.length-u)*h)/2),h)
c&&r.reverse()
i=Math.round(h*(1-u))
t={t:"rangeRoundBands",a:arguments}
return o}
o.rangeBand=function(){return i}
o.rangeExtent=function(){return ca(t.a[0])}
o.copy=function(){return za(n,t)}
return o.domain(n)}u.scale.category10=function(){return u.scale.ordinal().range(La)}
u.scale.category20=function(){return u.scale.ordinal().range(qa)}
u.scale.category20b=function(){return u.scale.ordinal().range(Ta)}
u.scale.category20c=function(){return u.scale.ordinal().range(Ra)}
var La=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt)
var qa=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt)
var Ta=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt)
var Ra=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt)
u.scale.quantile=function(){return Da([],[])}
function Da(n,t){var e
function r(){var r=0,o=t.length
e=[]
while(++r<o)e[r-1]=u.quantile(n,r/o)
return i}function i(n){if(!isNaN(n=+n))return t[u.bisect(e,n)]}i.domain=function(t){if(!arguments.length)return n
n=t.map(y).filter(m).sort(d)
return r()}
i.range=function(n){if(!arguments.length)return t
t=n
return r()}
i.quantiles=function(){return e}
i.invertExtent=function(r){r=t.indexOf(r)
return r<0?[NaN,NaN]:[r>0?e[r-1]:n[0],r<e.length?e[r]:n[n.length-1]]}
i.copy=function(){return Da(n,t)}
return r()}u.scale.quantize=function(){return Ia(0,1,[0,1])}
function Ia(n,t,e){var r,i
function u(t){return e[Math.max(0,Math.min(i,Math.floor(r*(t-n))))]}function o(){r=e.length/(t-n)
i=e.length-1
return u}u.domain=function(e){if(!arguments.length)return[n,t]
n=+e[0]
t=+e[e.length-1]
return o()}
u.range=function(n){if(!arguments.length)return e
e=n
return o()}
u.invertExtent=function(t){t=e.indexOf(t)
t=t<0?NaN:t/r+n
return[t,t+1/r]}
u.copy=function(){return Ia(n,t,e)}
return o()}u.scale.threshold=function(){return Pa([.5],[0,1])}
function Pa(n,t){function e(e){if(e<=e)return t[u.bisect(n,e)]}e.domain=function(t){if(!arguments.length)return n
n=t
return e}
e.range=function(n){if(!arguments.length)return t
t=n
return e}
e.invertExtent=function(e){e=t.indexOf(e)
return[n[e-1],n[e]]}
e.copy=function(){return Pa(n,t)}
return e}u.scale.identity=function(){return Ua([0,1])}
function Ua(n){function t(n){return+n}t.invert=t
t.domain=t.range=function(e){if(!arguments.length)return n
n=e.map(t)
return t}
t.ticks=function(t){return xa(n,t)}
t.tickFormat=function(t,e){return wa(n,t,e)}
t.copy=function(){return Ua(n)}
return t}u.svg={}
function ja(){return 0}u.svg.arc=function(){var n=Ha,t=Oa,e=ja,r=Fa,i=Ya,u=Za,o=Va
function a(){var a=Math.max(0,+n.apply(this,arguments)),c=Math.max(0,+t.apply(this,arguments)),f=i.apply(this,arguments)-In,s=u.apply(this,arguments)-In,h=Math.abs(s-f),p=f>s?0:1
c<a&&(g=c,c=a,a=g)
if(h>=Dn)return l(c,p)+(a?l(a,1-p):"")+"Z"
var g,v,d,y,m,M,x,w,b,_,k,S,N=0,E=0,A=[]
if(y=(+o.apply(this,arguments)||0)/2){d=r===Fa?Math.sqrt(a*a+c*c):+r.apply(this,arguments)
p||(E*=-1)
c&&(E=On(d/c*Math.sin(y)))
a&&(N=On(d/a*Math.sin(y)))}if(c){m=c*Math.cos(f+E)
M=c*Math.sin(f+E)
x=c*Math.cos(s-E)
w=c*Math.sin(s-E)
var C=Math.abs(s-f-2*E)<=Tn?0:1
if(E&&Xa(m,M,x,w)===p^C){var z=(f+s)/2
m=c*Math.cos(z)
M=c*Math.sin(z)
x=w=null}}else m=M=0
if(a){b=a*Math.cos(s-N)
_=a*Math.sin(s-N)
k=a*Math.cos(f+N)
S=a*Math.sin(f+N)
var L=Math.abs(f-s+2*N)<=Tn?0:1
if(N&&Xa(b,_,k,S)===1-p^L){var q=(f+s)/2
b=a*Math.cos(q)
_=a*Math.sin(q)
k=S=null}}else b=_=0
if(h>Ln&&(g=Math.min(Math.abs(c-a)/2,+e.apply(this,arguments)))>.001){v=a<c^p?0:1
var T=g,R=g
if(h<Tn){var D=null==k?[b,_]:null==x?[m,M]:Ti([m,M],[k,S],[x,w],[b,_]),I=m-D[0],P=M-D[1],U=x-D[0],j=w-D[1],F=1/Math.sin(Math.acos((I*U+P*j)/(Math.sqrt(I*I+P*P)*Math.sqrt(U*U+j*j)))/2),H=Math.sqrt(D[0]*D[0]+D[1]*D[1])
R=Math.min(g,(a-H)/(F-1))
T=Math.min(g,(c-H)/(F+1))}if(null!=x){var O=$a(null==k?[b,_]:[k,S],[m,M],c,T,p),Y=$a([x,w],[b,_],c,T,p)
g===T?A.push("M",O[0],"A",T,",",T," 0 0,",v," ",O[1],"A",c,",",c," 0 ",1-p^Xa(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",O[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M)
if(null!=k){var Z=$a([m,M],[k,S],a,-R,p),V=$a([b,_],null==x?[m,M]:[x,w],a,-R,p)
g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",a,",",a," 0 ",p^Xa(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",b,",",_)}else{A.push("M",m,",",M)
null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",w)
A.push("L",b,",",_)
null!=k&&A.push("A",a,",",a," 0 ",L,",",1-p," ",k,",",S)}A.push("Z")
return A.join("")}function l(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}a.innerRadius=function(t){if(!arguments.length)return n
n=At(t)
return a}
a.outerRadius=function(n){if(!arguments.length)return t
t=At(n)
return a}
a.cornerRadius=function(n){if(!arguments.length)return e
e=At(n)
return a}
a.padRadius=function(n){if(!arguments.length)return r
r=n==Fa?Fa:At(n)
return a}
a.startAngle=function(n){if(!arguments.length)return i
i=At(n)
return a}
a.endAngle=function(n){if(!arguments.length)return u
u=At(n)
return a}
a.padAngle=function(n){if(!arguments.length)return o
o=At(n)
return a}
a.centroid=function(){var e=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +u.apply(this,arguments))/2-In
return[Math.cos(r)*e,Math.sin(r)*e]}
return a}
var Fa="auto"
function Ha(n){return n.innerRadius}function Oa(n){return n.outerRadius}function Ya(n){return n.startAngle}function Za(n){return n.endAngle}function Va(n){return n&&n.padAngle}function Xa(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function $a(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,w=(y<0?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),b=(x*y-d*w)/m,_=(-x*d-y*w)/m,k=(x*y+d*w)/m,S=(-x*d+y*w)/m,N=b-g,E=_-v,A=k-g,C=S-v
N*N+E*E>A*A+C*C&&(b=k,_=S)
return[[b-l,_-c],[b*e/M,_*e/M]]}function Ba(n){var t=Ei,e=Ai,r=fr,i=Ja,u=i.key,o=.7
function a(u){var a,l=[],c=[],f=-1,s=u.length,h=At(t),p=At(e)
function g(){l.push("M",i(n(c),o))}while(++f<s)if(r.call(this,a=u[f],f))c.push([+h.call(this,a,f),+p.call(this,a,f)])
else if(c.length){g()
c=[]}c.length&&g()
return l.length?l.join(""):null}a.x=function(n){if(!arguments.length)return t
t=n
return a}
a.y=function(n){if(!arguments.length)return e
e=n
return a}
a.defined=function(n){if(!arguments.length)return r
r=n
return a}
a.interpolate=function(n){if(!arguments.length)return u
u="function"===typeof n?i=n:(i=Wa.get(n)||Ja).key
return a}
a.tension=function(n){if(!arguments.length)return o
o=n
return a}
return a}u.svg.line=function(){return Ba(I)}
var Wa=u.map({linear:Ja,"linear-closed":Ga,step:Ka,"step-before":Qa,"step-after":nl,basis:ol,"basis-open":al,"basis-closed":ll,bundle:cl,cardinal:rl,"cardinal-open":tl,"cardinal-closed":el,monotone:ml})
Wa.forEach(function(n,t){t.key=n
t.closed=/-closed$/.test(n)})
function Ja(n){return n.length>1?n.join("L"):n+"Z"}function Ga(n){return n.join("L")+"Z"}function Ka(n){var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
while(++t<e)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1])
e>1&&i.push("H",r[0])
return i.join("")}function Qa(n){var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
while(++t<e)i.push("V",(r=n[t])[1],"H",r[0])
return i.join("")}function nl(n){var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
while(++t<e)i.push("H",(r=n[t])[0],"V",r[1])
return i.join("")}function tl(n,t){return n.length<4?Ja(n):n[1]+il(n.slice(1,-1),ul(n,t))}function el(n,t){return n.length<3?Ga(n):n[0]+il((n.push(n[0]),n),ul([n[n.length-2]].concat(n,[n[1]]),t))}function rl(n,t){return n.length<3?Ja(n):n[0]+il(n,ul(n,t))}function il(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Ja(n)
var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1
if(e){r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1]
i=n[1]
l=2}if(t.length>1){a=t[1]
u=n[l]
l++
r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]
for(var c=2;c<t.length;c++,l++){u=n[l]
a=t[c]
r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}}if(e){var f=n[l]
r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function ul(n,t){var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length
while(++a<l){e=u
u=o
o=n[a]
r.push([i*(o[0]-e[0]),i*(o[1]-e[1])])}return r}function ol(n){if(n.length<3)return Ja(n)
var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",fl(pl,o),",",fl(pl,a)]
n.push(n[e-1])
while(++t<=e){r=n[t]
o.shift()
o.push(r[0])
a.shift()
a.push(r[1])
gl(l,o,a)}n.pop()
l.push("L",r)
return l.join("")}function al(n){if(n.length<4)return Ja(n)
var t,e=[],r=-1,i=n.length,u=[0],o=[0]
while(++r<3){t=n[r]
u.push(t[0])
o.push(t[1])}e.push(fl(pl,u)+","+fl(pl,o));--r
while(++r<i){t=n[r]
u.shift()
u.push(t[0])
o.shift()
o.push(t[1])
gl(e,u,o)}return e.join("")}function ll(n){var t,e,r=-1,i=n.length,u=i+4,o=[],a=[]
while(++r<4){e=n[r%i]
o.push(e[0])
a.push(e[1])}t=[fl(pl,o),",",fl(pl,a)];--r
while(++r<u){e=n[r%i]
o.shift()
o.push(e[0])
a.shift()
a.push(e[1])
gl(t,o,a)}return t.join("")}function cl(n,t){var e=n.length-1
if(e){var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1
while(++c<=e){r=n[c]
i=c/e
r[0]=t*r[0]+(1-t)*(u+i*a)
r[1]=t*r[1]+(1-t)*(o+i*l)}}return ol(n)}function fl(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}var sl=[0,2/3,1/3,0],hl=[0,1/3,2/3,0],pl=[0,1/6,2/3,1/6]
function gl(n,t,e){n.push("C",fl(sl,t),",",fl(sl,e),",",fl(hl,t),",",fl(hl,e),",",fl(pl,t),",",fl(pl,e))}function vl(n,t){return(t[1]-n[1])/(t[0]-n[0])}function dl(n){var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=vl(i,u)
while(++t<e)r[t]=(o+(o=vl(i=u,u=n[t+1])))/2
r[t]=o
return r}function yl(n){var t,e,r,i,u=[],o=dl(n),a=-1,l=n.length-1
while(++a<l){t=vl(n[a],n[a+1])
if(b(t)<Ln)o[a]=o[a+1]=0
else{e=o[a]/t
r=o[a+1]/t
i=e*e+r*r
if(i>9){i=3*t/Math.sqrt(i)
o[a]=i*e
o[a+1]=i*r}}}a=-1
while(++a<=l){i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a]))
u.push([i||0,o[a]*i||0])}return u}function ml(n){return n.length<3?Ja(n):n[0]+il(n,yl(n))}u.svg.line.radial=function(){var n=Ba(Ml)
n.radius=n.x,delete n.x
n.angle=n.y,delete n.y
return n}
function Ml(n){var t,e,r,i=-1,u=n.length
while(++i<u){t=n[i]
e=t[0]
r=t[1]-In
t[0]=e*Math.cos(r)
t[1]=e*Math.sin(r)}return n}function xl(n){var t=Ei,e=Ei,r=0,i=Ai,u=fr,o=Ja,a=o.key,l=o,c="L",f=.7
function s(a){var s,h,p,g=[],v=[],d=[],y=-1,m=a.length,M=At(t),x=At(r),w=t===e?function(){return h}:At(e),b=r===i?function(){return p}:At(i)
function _(){g.push("M",o(n(d),f),c,l(n(v.reverse()),f),"Z")}while(++y<m)if(u.call(this,s=a[y],y)){v.push([h=+M.call(this,s,y),p=+x.call(this,s,y)])
d.push([+w.call(this,s,y),+b.call(this,s,y)])}else if(v.length){_()
v=[]
d=[]}v.length&&_()
return g.length?g.join(""):null}s.x=function(n){if(!arguments.length)return e
t=e=n
return s}
s.x0=function(n){if(!arguments.length)return t
t=n
return s}
s.x1=function(n){if(!arguments.length)return e
e=n
return s}
s.y=function(n){if(!arguments.length)return i
r=i=n
return s}
s.y0=function(n){if(!arguments.length)return r
r=n
return s}
s.y1=function(n){if(!arguments.length)return i
i=n
return s}
s.defined=function(n){if(!arguments.length)return u
u=n
return s}
s.interpolate=function(n){if(!arguments.length)return a
a="function"===typeof n?o=n:(o=Wa.get(n)||Ja).key
l=o.reverse||o
c=o.closed?"M":"L"
return s}
s.tension=function(n){if(!arguments.length)return f
f=n
return s}
return s}Qa.reverse=nl
nl.reverse=Qa
u.svg.area=function(){return xl(I)}
u.svg.area.radial=function(){var n=xl(Ml)
n.radius=n.x,delete n.x
n.innerRadius=n.x0,delete n.x0
n.outerRadius=n.x1,delete n.x1
n.angle=n.y,delete n.y
n.startAngle=n.y0,delete n.y0
n.endAngle=n.y1,delete n.y1
return n}
u.svg.chord=function(){var n=fi,t=si,e=wl,r=Ya,i=Za
function u(e,r){var i=o(this,n,e,r),u=o(this,t,e,r)
return"M"+i.p0+l(i.r,i.p1,i.a1-i.a0)+(a(i,u)?c(i.r,i.p1,i.r,i.p0):c(i.r,i.p1,u.r,u.p0)+l(u.r,u.p1,u.a1-u.a0)+c(u.r,u.p1,i.r,i.p0))+"Z"}function o(n,t,u,o){var a=t.call(n,u,o),l=e.call(n,a,o),c=r.call(n,a,o)-In,f=i.call(n,a,o)-In
return{r:l,a0:c,a1:f,p0:[l*Math.cos(c),l*Math.sin(c)],p1:[l*Math.cos(f),l*Math.sin(f)]}}function a(n,t){return n.a0==t.a0&&n.a1==t.a1}function l(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Tn)+",1 "+t}function c(n,t,e,r){return"Q 0,0 "+r}u.radius=function(n){if(!arguments.length)return e
e=At(n)
return u}
u.source=function(t){if(!arguments.length)return n
n=At(t)
return u}
u.target=function(n){if(!arguments.length)return t
t=At(n)
return u}
u.startAngle=function(n){if(!arguments.length)return r
r=At(n)
return u}
u.endAngle=function(n){if(!arguments.length)return i
i=At(n)
return u}
return u}
function wl(n){return n.radius}u.svg.diagonal=function(){var n=fi,t=si,e=bl
function r(r,i){var u=n.call(this,r,i),o=t.call(this,r,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o]
l=l.map(e)
return"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}r.source=function(t){if(!arguments.length)return n
n=At(t)
return r}
r.target=function(n){if(!arguments.length)return t
t=At(n)
return r}
r.projection=function(n){if(!arguments.length)return e
e=n
return r}
return r}
function bl(n){return[n.x,n.y]}u.svg.diagonal.radial=function(){var n=u.svg.diagonal(),t=bl,e=n.projection
n.projection=function(n){return arguments.length?e(_l(t=n)):t}
return n}
function _l(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-In
return[e*Math.cos(r),e*Math.sin(r)]}}u.svg.symbol=function(){var n=Sl,t=kl
function e(e,r){return(El.get(n.call(this,e,r))||Nl)(t.call(this,e,r))}e.type=function(t){if(!arguments.length)return n
n=At(t)
return e}
e.size=function(n){if(!arguments.length)return t
t=At(n)
return e}
return e}
function kl(){return 64}function Sl(){return"circle"}function Nl(n){var t=Math.sqrt(n/Tn)
return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}var El=u.map({circle:Nl,cross:function(n){var t=Math.sqrt(n/5)/2
return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Cl)),e=t*Cl
return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2
return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Al),e=t*Al/2
return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Al),e=t*Al/2
return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}})
u.svg.symbolTypes=El.keys()
var Al=Math.sqrt(3),Cl=Math.tan(30*Pn)
K.transition=function(n){var t,e,r=Tl||++Il,i=jl(n),u=[],o=Rl||{time:Date.now(),ease:Uu,delay:0,duration:250}
for(var a=-1,l=this.length;++a<l;){u.push(t=[])
for(var c=this[a],f=-1,s=c.length;++f<s;){(e=c[f])&&Fl(e,f,i,r,o)
t.push(e)}}return ql(u,i,r)}
K.interrupt=function(n){return this.each(null==n?zl:Ll(jl(n)))}
var zl=Ll(jl())
function Ll(n){return function(){var t,e,r
if((t=this[n])&&(r=t[e=t.active])){r.timer.c=null
r.timer.t=NaN;--t.count?delete t[e]:delete this[n]
t.active+=.5
r.event&&r.event.interrupt.call(this,this.__data__,r.index)}}}function ql(n,t,e){$(n,Dl)
n.namespace=t
n.id=e
return n}var Tl,Rl,Dl=[],Il=0
Dl.call=K.call
Dl.empty=K.empty
Dl.node=K.node
Dl.size=K.size
u.transition=function(n,t){return n&&n.transition?Tl?n.transition(t):n:u.selection().transition(n)}
u.transition.prototype=Dl
Dl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[]
n=Q(n)
for(var a=-1,l=this.length;++a<l;){o.push(t=[])
for(var c=this[a],f=-1,s=c.length;++f<s;)if((r=c[f])&&(e=n.call(r,r.__data__,f,a))){"__data__"in r&&(e.__data__=r.__data__)
Fl(e,f,u,i,r[u][i])
t.push(e)}else t.push(null)}return ql(o,u,i)}
Dl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[]
n=nn(n)
for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o]
e=n.call(r,r.__data__,h,c)
l.push(t=[])
for(var g=-1,v=e.length;++g<v;){(i=e[g])&&Fl(i,g,a,o,u)
t.push(i)}}return ql(l,a,o)}
Dl.filter=function(n){var t,e,r=[]
"function"!==typeof n&&(n=vn(n))
for(var i=0,u=this.length;i<u;i++){r.push(t=[])
for(var o=this[i],a=0,l=o.length;a<l;a++)(e=o[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return ql(r,this.namespace,this.id)}
Dl.tween=function(n,t){var e=this.id,r=this.namespace
if(arguments.length<2)return this.node()[r][e].tween.get(n)
return yn(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})}
function Pl(n,t,e,r){var i=n.id,u=n.namespace
return yn(n,"function"===typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}Dl.attr=function(n,t){if(arguments.length<2){for(t in n)this.attr(t,n[t])
return this}var e="transform"==n?oo:Au,r=u.ns.qualify(n)
function i(){this.removeAttribute(r)}function o(){this.removeAttributeNS(r.space,r.local)}function a(n){return null==n?i:(n+="",function(){var t,i=this.getAttribute(r)
return i!==n&&(t=e(i,n),function(n){this.setAttribute(r,t(n))})})}function l(n){return null==n?o:(n+="",function(){var t,i=this.getAttributeNS(r.space,r.local)
return i!==n&&(t=e(i,n),function(n){this.setAttributeNS(r.space,r.local,t(n))})})}return Pl(this,"attr."+n,t,r.local?l:a)}
Dl.attrTween=function(n,t){var e=u.ns.qualify(n)
function r(n,r){var i=t.call(this,n,r,this.getAttribute(e))
return i&&function(n){this.setAttribute(e,i(n))}}function i(n,r){var i=t.call(this,n,r,this.getAttributeNS(e.space,e.local))
return i&&function(n){this.setAttributeNS(e.space,e.local,i(n))}}return this.tween("attr."+n,e.local?i:r)}
Dl.style=function(n,t,e){var r=arguments.length
if(r<3){if("string"!==typeof n){r<2&&(t="")
for(e in n)this.style(e,n[e],t)
return this}e=""}function i(){this.style.removeProperty(n)}function u(t){return null==t?i:(t+="",function(){var r,i=f(this).getComputedStyle(this,null).getPropertyValue(n)
return i!==t&&(r=Au(i,t),function(t){this.style.setProperty(n,r(t),e)})})}return Pl(this,"style."+n,t,u)}
Dl.styleTween=function(n,t,e){arguments.length<3&&(e="")
function r(r,i){var u=t.call(this,r,i,f(this).getComputedStyle(this,null).getPropertyValue(n))
return u&&function(t){this.style.setProperty(n,u(t),e)}}return this.tween("style."+n,r)}
Dl.text=function(n){return Pl(this,"text",n,Ul)}
function Ul(n){null==n&&(n="")
return function(){this.textContent=n}}Dl.remove=function(){var n=this.namespace
return this.each("end.transition",function(){var t
this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})}
Dl.ease=function(n){var t=this.id,e=this.namespace
if(arguments.length<1)return this.node()[e][t].ease
"function"!==typeof n&&(n=u.ease.apply(u,arguments))
return yn(this,function(r){r[e][t].ease=n})}
Dl.delay=function(n){var t=this.id,e=this.namespace
if(arguments.length<1)return this.node()[e][t].delay
return yn(this,"function"===typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))}
Dl.duration=function(n){var t=this.id,e=this.namespace
if(arguments.length<1)return this.node()[e][t].duration
return yn(this,"function"===typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))}
Dl.each=function(n,t){var e=this.id,r=this.namespace
if(arguments.length<2){var i=Rl,o=Tl
try{Tl=e
yn(this,function(t,i,u){Rl=t[r][e]
n.call(t,t.__data__,i,u)})}finally{Rl=i
Tl=o}}else yn(this,function(i){var o=i[r][e];(o.event||(o.event=u.dispatch("start","end","interrupt"))).on(n,t)})
return this}
Dl.transition=function(){var n,t,e,r=this.id,i=++Il,u=this.namespace,o=[]
for(var a=0,l=this.length;a<l;a++){o.push(n=[])
for(var c=this[a],f=0,s=c.length;f<s;f++){if(t=c[f]){e=t[u][r]
Fl(t,f,u,i,{time:e.time,ease:e.ease,delay:e.delay+e.duration,duration:e.duration})}n.push(t)}}return ql(o,u,i)}
function jl(n){return null==n?"__transition__":"__transition_"+n+"__"}function Fl(n,t,e,r,i){var u,o,a,l,c,f=n[e]||(n[e]={active:0,count:0}),s=f[r]
function h(n){var t=s.delay
o.t=t+u
if(t<=n)return p(n-t)
o.c=p}function p(e){var i=f.active,h=f[i]
if(h){h.timer.c=null
h.timer.t=NaN;--f.count
delete f[i]
h.event&&h.event.interrupt.call(n,n.__data__,h.index)}for(var p in f)if(+p<r){var v=f[p]
v.timer.c=null
v.timer.t=NaN;--f.count
delete f[p]}o.c=g
Ut(function(){if(o.c&&g(e||1)){o.c=null
o.t=NaN}return 1},0,u)
f.active=r
s.event&&s.event.start.call(n,n.__data__,t)
c=[]
s.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&c.push(r)})
l=s.ease
a=s.duration}function g(i){var u=i/a,o=l(u),h=c.length
while(h>0)c[--h].call(n,o)
if(u>=1){s.event&&s.event.end.call(n,n.__data__,t);--f.count?delete f[r]:delete n[e]
return 1}}if(!s){u=i.time
o=Ut(h,0,u)
s=f[r]={tween:new S,time:u,timer:o,delay:i.delay,duration:i.duration,ease:i.ease,index:t}
i=null;++f.count}}u.svg.axis=function(){var n,t=u.scale.linear(),e=Hl,r=6,i=6,o=3,l=[10],c=null
function f(a){a.each(function(){var a=u.select(this)
var f=this.__chart__||t,s=this.__chart__=t.copy()
var h,p=null==c?s.ticks?s.ticks.apply(s,l):s.domain():c,g=null==n?s.tickFormat?s.tickFormat.apply(s,l):I:n,v=a.selectAll(".tick").data(p,s),d=v.enter().insert("g",".domain").attr("class","tick").style("opacity",Ln),y=u.transition(v.exit()).style("opacity",Ln).remove(),m=u.transition(v.order()).style("opacity",1),M=Math.max(r,0)+o
var x=fa(s),w=a.selectAll(".domain").data([0]),b=(w.enter().append("path").attr("class","domain"),u.transition(w))
d.append("line")
d.append("text")
var _,k,S,N,E=d.select("line"),A=m.select("line"),C=v.select("text").text(g),z=d.select("text"),L=m.select("text"),q="top"===e||"left"===e?-1:1
if("bottom"===e||"top"===e){h=Yl,_="x",S="y",k="x2",N="y2"
C.attr("dy",q<0?"0em":".71em").style("text-anchor","middle")
b.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)}else{h=Zl,_="y",S="x",k="y2",N="x2"
C.attr("dy",".32em").style("text-anchor",q<0?"end":"start")
b.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)}E.attr(N,q*r)
z.attr(S,q*M)
A.attr(k,0).attr(N,q*r)
L.attr(_,0).attr(S,q*M)
if(s.rangeBand){var T=s,R=T.rangeBand()/2
f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:y.call(h,s,f)
d.call(h,f,s)
m.call(h,s,s)})}f.scale=function(n){if(!arguments.length)return t
t=n
return f}
f.orient=function(n){if(!arguments.length)return e
e=n in Ol?n+"":Hl
return f}
f.ticks=function(){if(!arguments.length)return l
l=a(arguments)
return f}
f.tickValues=function(n){if(!arguments.length)return c
c=n
return f}
f.tickFormat=function(t){if(!arguments.length)return n
n=t
return f}
f.tickSize=function(n){var t=arguments.length
if(!t)return r
r=+n
i=+arguments[t-1]
return f}
f.innerTickSize=function(n){if(!arguments.length)return r
r=+n
return f}
f.outerTickSize=function(n){if(!arguments.length)return i
i=+n
return f}
f.tickPadding=function(n){if(!arguments.length)return o
o=+n
return f}
f.tickSubdivide=function(){return arguments.length&&f}
return f}
var Hl="bottom",Ol={top:1,right:1,bottom:1,left:1}
function Yl(n,t,e){n.attr("transform",function(n){var r=t(n)
return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Zl(n,t,e){n.attr("transform",function(n){var r=t(n)
return"translate(0,"+(isFinite(r)?r:e(n))+")"})}u.svg.brush=function(){var n,t,e=V(h,"brushstart","brush","brushend"),r=null,i=null,o=[0,0],a=[0,0],l=true,c=true,s=Xl[0]
function h(n){n.each(function(){var n=u.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",d).on("touchstart.brush",d)
var t=n.selectAll(".background").data([0])
t.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair")
n.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move")
var e=n.selectAll(".resize").data(s,I)
e.exit().remove()
e.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Vl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden")
e.style("display",h.empty()?"none":null)
var o,a=u.transition(n),l=u.transition(t)
if(r){o=fa(r)
l.attr("x",o[0]).attr("width",o[1]-o[0])
g(a)}if(i){o=fa(i)
l.attr("y",o[0]).attr("height",o[1]-o[0])
v(a)}p(a)})}h.event=function(r){r.each(function(){var r=e.of(this,arguments),i={x:o,y:a,i:n,j:t},l=this.__chart__||i
this.__chart__=i
if(Tl)u.select(this).transition().each("start.brush",function(){n=l.i
t=l.j
o=l.x
a=l.y
r({type:"brushstart"})}).tween("brush:brush",function(){var e=Cu(o,i.x),u=Cu(a,i.y)
n=t=null
return function(n){o=i.x=e(n)
a=i.y=u(n)
r({type:"brush",mode:"resize"})}}).each("end.brush",function(){n=i.i
t=i.j
r({type:"brush",mode:"resize"})
r({type:"brushend"})})
else{r({type:"brushstart"})
r({type:"brush",mode:"resize"})
r({type:"brushend"})}})}
function p(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+o[+/e$/.test(n)]+","+a[+/^s/.test(n)]+")"})}function g(n){n.select(".extent").attr("x",o[0])
n.selectAll(".extent,.n>rect,.s>rect").attr("width",o[1]-o[0])}function v(n){n.select(".extent").attr("y",a[0])
n.selectAll(".extent,.e>rect,.w>rect").attr("height",a[1]-a[0])}function d(){var s,d,y=this,m=u.select(u.event.target),M=e.of(y,arguments),x=u.select(y),w=m.datum(),b=!/^(n|s)$/.test(w)&&r,_=!/^(e|w)$/.test(w)&&i,k=m.classed("extent"),S=En(y),N=u.mouse(y)
var E=u.select(f(y)).on("keydown.brush",z).on("keyup.brush",L)
u.event.changedTouches?E.on("touchmove.brush",q).on("touchend.brush",R):E.on("mousemove.brush",q).on("mouseup.brush",R)
x.interrupt().selectAll("*").interrupt()
if(k){N[0]=o[0]-N[0]
N[1]=a[0]-N[1]}else if(w){var A=+/w$/.test(w),C=+/^n/.test(w)
d=[o[1-A]-N[0],a[1-C]-N[1]]
N[0]=o[A]
N[1]=a[C]}else u.event.altKey&&(s=N.slice())
x.style("pointer-events","none").selectAll(".resize").style("display",null)
u.select("body").style("cursor",m.style("cursor"))
M({type:"brushstart"})
q()
function z(){if(32==u.event.keyCode){if(!k){s=null
N[0]-=o[1]
N[1]-=a[1]
k=2}Y()}}function L(){if(32==u.event.keyCode&&2==k){N[0]+=o[1]
N[1]+=a[1]
k=0
Y()}}function q(){var n=u.mouse(y),t=false
if(d){n[0]+=d[0]
n[1]+=d[1]}if(!k)if(u.event.altKey){s||(s=[(o[0]+o[1])/2,(a[0]+a[1])/2])
N[0]=o[+(n[0]<s[0])]
N[1]=a[+(n[1]<s[1])]}else s=null
if(b&&T(n,r,0)){g(x)
t=true}if(_&&T(n,i,1)){v(x)
t=true}if(t){p(x)
M({type:"brush",mode:k?"move":"resize"})}}function T(e,r,i){var u,f,h=fa(r),p=h[0],g=h[1],v=N[i],d=i?a:o,y=d[1]-d[0]
if(k){p-=v
g-=y+v}u=(i?c:l)?Math.max(p,Math.min(g,e[i])):e[i]
if(k)f=(u+=v)+y
else{s&&(v=Math.max(p,Math.min(g,2*s[i]-u)))
if(v<u){f=u
u=v}else f=v}if(d[0]!=u||d[1]!=f){i?t=null:n=null
d[0]=u
d[1]=f
return true}}function R(){q()
x.style("pointer-events","all").selectAll(".resize").style("display",h.empty()?"none":null)
u.select("body").style("cursor",null)
E.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null)
S()
M({type:"brushend"})}}h.x=function(n){if(!arguments.length)return r
r=n
s=Xl[!r<<1|!i]
return h}
h.y=function(n){if(!arguments.length)return i
i=n
s=Xl[!r<<1|!i]
return h}
h.clamp=function(n){if(!arguments.length)return r&&i?[l,c]:r?l:i?c:null
r&&i?(l=!!n[0],c=!!n[1]):r?l=!!n:i&&(c=!!n)
return h}
h.extent=function(e){var u,l,c,f,s
if(!arguments.length){if(r)if(n)u=n[0],l=n[1]
else{u=o[0],l=o[1]
r.invert&&(u=r.invert(u),l=r.invert(l))
l<u&&(s=u,u=l,l=s)}if(i)if(t)c=t[0],f=t[1]
else{c=a[0],f=a[1]
i.invert&&(c=i.invert(c),f=i.invert(f))
f<c&&(s=c,c=f,f=s)}return r&&i?[[u,c],[l,f]]:r?[u,l]:i&&[c,f]}if(r){u=e[0],l=e[1]
i&&(u=u[0],l=l[0])
n=[u,l]
r.invert&&(u=r(u),l=r(l))
l<u&&(s=u,u=l,l=s)
u==o[0]&&l==o[1]||(o=[u,l])}if(i){c=e[0],f=e[1]
r&&(c=c[1],f=f[1])
t=[c,f]
i.invert&&(c=i(c),f=i(f))
f<c&&(s=c,c=f,f=s)
c==a[0]&&f==a[1]||(a=[c,f])}return h}
h.clear=function(){if(!h.empty()){o=[0,0],a=[0,0]
n=t=null}return h}
h.empty=function(){return!!r&&o[0]==o[1]||!!i&&a[0]==a[1]}
return u.rebind(h,e,"on")}
var Vl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}
var Xl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]]
var $l=Wt.format=Se.timeFormat
var Bl=$l.utc
var Wl=Bl("%Y-%m-%dT%H:%M:%S.%LZ")
$l.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jl:Wl
function Jl(n){return n.toISOString()}Jl.parse=function(n){var t=new Date(n)
return isNaN(t)?null:t}
Jl.toString=Wl.toString
Wt.second=Qt(function(n){return new Jt(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()})
Wt.seconds=Wt.second.range
Wt.seconds.utc=Wt.second.utc.range
Wt.minute=Qt(function(n){return new Jt(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()})
Wt.minutes=Wt.minute.range
Wt.minutes.utc=Wt.minute.utc.range
Wt.hour=Qt(function(n){var t=n.getTimezoneOffset()/60
return new Jt(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()})
Wt.hours=Wt.hour.range
Wt.hours.utc=Wt.hour.utc.range
Wt.month=Qt(function(n){n=Wt.day(n)
n.setDate(1)
return n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()})
Wt.months=Wt.month.range
Wt.months.utc=Wt.month.utc.range
function Gl(n,t,e){function r(t){return n(t)}r.invert=function(t){return Kl(n.invert(t))}
r.domain=function(t){if(!arguments.length)return n.domain().map(Kl)
n.domain(t)
return r}
function i(n,e){var r=n[1]-n[0],i=r/e,o=u.bisect(Ql,i)
return o==Ql.length?[t.year,Ma(n.map(function(n){return n/31536e6}),e)[2]]:o?t[i/Ql[o-1]<Ql[o]/i?o-1:o]:[ec,Ma(n,e)[2]]}r.nice=function(n,t){var e=r.domain(),u=ca(e),o=null==n?i(u,10):"number"===typeof n&&i(u,n)
o&&(n=o[0],t=o[1])
function a(e){return!isNaN(e)&&!n.range(e,Kl(+e+1),t).length}return r.domain(ha(e,t>1?{floor:function(t){while(a(t=n.floor(t)))t=Kl(t-1)
return t},ceil:function(t){while(a(t=n.ceil(t)))t=Kl(+t+1)
return t}}:n))}
r.ticks=function(n,t){var e=ca(r.domain()),u=null==n?i(e,10):"number"===typeof n?i(e,n):!n.range&&[{range:n},t]
u&&(n=u[0],t=u[1])
return n.range(e[0],Kl(+e[1]+1),t<1?1:t)}
r.tickFormat=function(){return e}
r.copy=function(){return Gl(n.copy(),t,e)}
return ya(r,n)}function Kl(n){return new Date(n)}var Ql=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6]
var nc=[[Wt.second,1],[Wt.second,5],[Wt.second,15],[Wt.second,30],[Wt.minute,1],[Wt.minute,5],[Wt.minute,15],[Wt.minute,30],[Wt.hour,1],[Wt.hour,3],[Wt.hour,6],[Wt.hour,12],[Wt.day,1],[Wt.day,2],[Wt.week,1],[Wt.month,1],[Wt.month,3],[Wt.year,1]]
var tc=$l.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",fr]])
var ec={range:function(n,t,e){return u.range(Math.ceil(n/e)*e,+t,e).map(Kl)},floor:I,ceil:I}
nc.year=Wt.year
Wt.scale=function(){return Gl(u.scale.linear(),nc,tc)}
var rc=nc.map(function(n){return[n[0].utc,n[1]]})
var ic=Bl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",fr]])
rc.year=Wt.year.utc
Wt.scale.utc=function(){return Gl(u.scale.linear(),rc,ic)}
u.text=Ct(function(n){return n.responseText})
u.json=function(n,t){return zt(n,"application/json",uc,t)}
function uc(n){return JSON.parse(n.responseText)}u.html=function(n,t){return zt(n,"text/html",oc,t)}
function oc(n){var t=l.createRange()
t.selectNode(l.body)
return t.createContextualFragment(n.responseText)}u.xml=Ct(function(n){return n.responseXML})
this.d3=u,r=u,i="function"===typeof r?r.call(t,e,t,n):r,void 0!==i&&(n.exports=i)}()}}])

//# sourceMappingURL=78-c-eb1faac51b.js.map