(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3],{"5WdN":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.shorthandPropType=b
t.default=t.SPACING=t.SIZES=t.BACKGROUNDS=t.BORDER_RADII=t.BORDER_WIDTHS=t.STACKING_TYPES=t.SHADOW_TYPES=void 0
var a=r(n("17x9"))
var o={resting:"resting",above:"above",topmost:"topmost",none:"none"}
t.SHADOW_TYPES=o
var i={deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"}
t.STACKING_TYPES=i
var l={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_WIDTHS=l
var d={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_RADII=d
var c={default:"default",inverse:"inverse",transparent:"transparent"}
t.BACKGROUNDS=c
var u={xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"}
t.SIZES=u
var s={0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}
t.SPACING=s
var f={shadow:a.default.oneOf(Object.values(o)),stacking:a.default.oneOf(Object.values(i)),borderWidth:b(Object.values(l)),borderRadius:b(Object.values(d)),background:a.default.oneOf(Object.values(c)),size:a.default.oneOf(Object.values(u)),spacing:b(Object.values(s))}
t.default=f
function b(e){return function(t,n,r,a){var o=t[n]
if("undefined"===typeof o)return
var i=typeof o
if("string"!==i)return new Error("Invalid ".concat(a," `").concat(n,"` of type `").concat(i,"` supplied to `").concat(r,"`, expected ")+"a string.")
var l=o.split(" ")
var d=l.length
if(!(d>0&&d<5))return new Error("Invalid ".concat(a," `").concat(n,"` `").concat(o,"` supplied to `").concat(r,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var c=0;c<d;c++){var u=e.indexOf(l[c])
if(-1===u)return new Error("Invalid ".concat(a," `").concat(n,"` `").concat(l[c],"` supplied to `").concat(r,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}},"9Ajg":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function r(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e}},"G/S0":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=r(n("MVZn"))
var o=r(n("k9CA"))
function i(e){var t=e.typography,n=e.colors,r=e.borders,i=e.spacing,l=e.shadows,d=e.stacking,c=e.breakpoints
return(0,a.default)({fontFamily:t.fontFamily,color:n.oxford,background:n.white,borderColor:n.tiara,colorInverse:n.white,backgroundInverse:n.oxford,borderColorInverse:"transparent",debugOutlineColor:n.borderDebug,backgroundLight:n.porcelain,borderStyle:r.style,arrowSize:"0.5rem",xSmallMaxWidth:c.xSmall,smallMaxWidth:c.small,mediumMaxWidth:c.medium,largeMaxWidth:c.large},(0,o.default)("margin",i),(0,o.default)("padding",i),(0,o.default)("shadow",l),(0,o.default)("stacking",d),(0,o.default)("border",r))}},"MP+e":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
n("Y14w")
var a=r(n("xnDy"))
var o=n("SRMa")
function i(e,t,n,r){if("string"!==typeof n||(0,a.default)(t))return
return n.split(" ").map(function(n){if("auto"===n||"0"===n)return n
if("none"===n)return"0"
var a=(0,o.camelize)("".concat(r,"-").concat(n))
var i=t[a]
"[".concat(e,"] '").concat(a,"' is an invalid '").concat(r,"' value.")
return i||"0"}).join(" ").trim()}},PWIC:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.mirrorShorthandEdges=r
t.mirrorShorthandCorners=a
function r(e){if("string"!==typeof e)return
var t=e.split(" ")
if(4===t.length){var n=[t[3],t[1]]
t[1]=n[0]
t[3]=n[1]}return t.join(" ")}function a(e){if("string"!==typeof e)return
var t=e.split(" ")
if(2===t.length){var n=[t[1],t[0]]
t[0]=n[0]
t[1]=n[1]}3===t.length&&t.push(t[1])
if(4===t.length){var r=[t[1],t[0],t[3],t[2]]
t[0]=r[0]
t[1]=r[1]
t[2]=r[2]
t[3]=r[3]}return t.join(" ")}},SRMa:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.camelize=o
t.pascalize=i
var a=r(n("9Ajg"))
function o(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}function i(e){return(0,a.default)(o(e))}},"V/Za":function(e,t,n){var r=n("q1tI")
function a(){var e=""
try{e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function o(e,t,n){if(!t&&false){var r=a()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var o
for(var i=arguments.length,l=new Array(i>3?i-3:0),d=3;d<i;d++)l[d-3]=arguments[d];(o=console)[e].apply(o,["Warning: ".concat(n)].concat(l,[r]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},XbQQ:function(e,t,n){"use strict"
var r=n("284h")
var a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(n("MVZn"))
var i=a(n("lSNA"))
var l=a(n("lwsE"))
var d=a(n("W8MJ"))
var c=a(n("a1gu"))
var u=a(n("Nsbk"))
var s=a(n("7W2i"))
n("V/Za")
var f=r(n("q1tI"))
var b=a(n("17x9"))
var h=a(n("TSYQ"))
var v=a(n("J2CL"))
var g=a(n("MP+e"))
a(n("9Okx"))
var p=a(n("5WdN"))
var m=n("PWIC")
var _=r(n("LqRq"))
var x=n("IzEL")
var A=a(n("ZJ40"))
var z=a(n("kibL"))
var w=n("2lwo")
var y=a(n("G/S0"))
var X={componentId:"czbXA",template:function(e){return"\n\n.czbXA_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%}\n\n.czbXA_UeJS{display:block}\n\n.czbXA_cuDs{display:inline-block;vertical-align:middle}\n\n.czbXA_desw{display:flex}\n\n.czbXA_cKQL{display:inline-flex;vertical-align:middle}\n\n.czbXA_EMjX{text-align:start}\n\n[dir=ltr] .czbXA_EMjX{text-align:left}\n\n[dir=rtl] .czbXA_EMjX{text-align:right}\n\n.czbXA_ImeN,[dir=ltr] .czbXA_ImeN,[dir=rtl] .czbXA_ImeN{text-align:center}\n\n.czbXA_dBtH{text-align:end}\n\n[dir=ltr] .czbXA_dBtH{text-align:right}\n\n[dir=rtl] .czbXA_dBtH{text-align:left}\n\n.czbXA_bQna{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.czbXA_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit","}\n\n.czbXA_dHtp.czbXA_fzxW{border-color:").concat(e.borderColorInverse||"inherit","}\n\n.czbXA_fZwI{background:").concat(e.background||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_fzxW{background:").concat(e.backgroundInverse||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.czbXA_dUgE{background:").concat(e.backgroundLight||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_dIzR{max-width:").concat(e.xSmallMaxWidth||"inherit","}\n\n.czbXA_VCXp{max-width:").concat(e.smallMaxWidth||"inherit","}\n\n.czbXA_fKcQ{max-width:").concat(e.mediumMaxWidth||"inherit","}\n\n.czbXA_cnhd{max-width:").concat(e.largeMaxWidth||"inherit","}\n\n.czbXA_GJxv{max-width:100vw}\n\n.czbXA_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.czbXA_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.czbXA_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.czbXA_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.czbXA_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.czbXA_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.czbXA_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.czbXA_fhgP{overflow-x:hidden}\n\n.czbXA_dzYG{overflow-x:auto}\n\n.czbXA_divt{overflow-y:hidden}\n\n.czbXA_fKlg{overflow-y:auto}")},root:"czbXA_bGBk","display--block":"czbXA_UeJS","display--inline-block":"czbXA_cuDs","display--flex":"czbXA_desw","display--inline-flex":"czbXA_cKQL","textAlign--start":"czbXA_EMjX","textAlign--center":"czbXA_ImeN","textAlign--end":"czbXA_dBtH",debug:"czbXA_bQna",border:"czbXA_dHtp","background--inverse":"czbXA_fzxW","background--default":"czbXA_fZwI","background--light":"czbXA_dUgE","size--x-small":"czbXA_dIzR","size--small":"czbXA_VCXp","size--medium":"czbXA_fKcQ","size--large":"czbXA_cnhd","size--fullscreen":"czbXA_GJxv","stacking--topmost":"czbXA_fQrx","stacking--above":"czbXA_dtZX","stacking--below":"czbXA_fCiV","stacking--deepest":"czbXA_dJEE","shadow--topmost":"czbXA_fxuY","shadow--resting":"czbXA_bxuL","shadow--above":"czbXA_bIta","overflowX--hidden":"czbXA_fhgP","overflowX--auto":"czbXA_dzYG","overflowY--hidden":"czbXA_divt","overflowY--auto":"czbXA_fKlg"}
var k=function(e){(0,s.default)(t,e)
function t(){var e
var n;(0,l.default)(this,t)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
n=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(a)))
n.handleElementRef=function(e){"function"===typeof n.props.elementRef&&n.props.elementRef(e)
n._element=e}
return n}(0,d.default)(t,[{key:"componentDidMount",value:function(){this._element,this.props.margin}},{key:"render",value:function(){var e
var n=this.props,r=n.children,a=n.textAlign,l=n.background,d=n.display,c=n.debug,u=n.width,s=n.height,b=n.minWidth,v=n.minHeight,g=n.maxWidth,p=n.maxHeight,m=n.overflowX,_=n.overflowY,x=n.stacking,A=n.shadow,y=n.size,k=n.className
var S=(0,z.default)(t,this.props)
return f.default.createElement(S,Object.assign({},(0,w.omitProps)(this.props,t.propTypes),{className:(0,h.default)((e={},(0,i.default)(e,X.root,true),(0,i.default)(e,X.border,this.hasBorder),(0,i.default)(e,X.debug,c),(0,i.default)(e,X["textAlign--".concat(a)],a),(0,i.default)(e,X["background--".concat(l)],l),(0,i.default)(e,X["display--".concat(d)],d&&"auto"!==d),(0,i.default)(e,X["overflowX--".concat(m)],m&&"visible"!==m),(0,i.default)(e,X["overflowY--".concat(_)],_&&"visible"!==_),(0,i.default)(e,X["size--".concat(y)],y&&"auto"!==y),(0,i.default)(e,X["stacking--".concat(x)],x),(0,i.default)(e,X["shadow--".concat(A)],A&&"none"!==A),(0,i.default)(e,k,k),e)),style:(0,o.default)({},this.spacingStyle,this.borderStyle,{width:u,height:s,minWidth:b,minHeight:v,maxWidth:g,maxHeight:p},this.styleProps),ref:this.handleElementRef}),r)}},{key:"hasBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,n=e.borderWidth
if(this.dir===_.DIRECTION.rtl){t=(0,m.mirrorShorthandCorners)(t)
n=(0,m.mirrorShorthandEdges)(n)}return{borderRadius:(0,g.default)("View",this.theme,t,"borderRadius"),borderWidth:(0,g.default)("View",this.theme,n,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,n=e.padding
if("rtl"===this.dir){t=(0,m.mirrorShorthandEdges)(t)
n=(0,m.mirrorShorthandEdges)(n)}return{margin:(0,g.default)("View",this.theme,t,"margin"),padding:(0,g.default)("View",this.theme,n,"padding")}}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,n=e.style
var r=(0,w.pickProps)(n||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage"])
t&&(r.cursor=t)
return r}}])
t.displayName="View"
return t}(f.Component)
k.propTypes={as:b.default.elementType,elementRef:b.default.func,display:b.default.oneOf(["auto","block","inline-block","flex","inline-flex"]),overflowX:b.default.oneOf(["auto","hidden","visible"]),overflowY:b.default.oneOf(["auto","hidden","visible"]),margin:p.default.spacing,padding:p.default.spacing,height:b.default.oneOfType([b.default.string,b.default.number]),width:b.default.oneOfType([b.default.string,b.default.number]),maxHeight:b.default.oneOfType([b.default.string,b.default.number]),maxWidth:b.default.oneOfType([b.default.string,b.default.number]),minHeight:b.default.oneOfType([b.default.string,b.default.number]),minWidth:b.default.oneOfType([b.default.string,b.default.number]),children:b.default.node,textAlign:b.default.oneOf(["start","center","end"]),borderWidth:p.default.borderWidth,borderRadius:p.default.borderWidth,background:b.default.oneOf(["default","inverse","light","transparent"]),shadow:p.default.shadow,stacking:p.default.stacking,cursor:x.cursor,debug:b.default.bool}
k.defaultProps={display:"auto",textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,debug:false,cursor:void 0,borderWidth:void 0,borderRadius:void 0,margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0}
var S=(0,A.default)("5.4.0",{size:"maxWidth"})((0,_.default)()((0,v.default)(y.default,X)(k)))
S.omitViewProps=function(e,t){false
return(0,w.omitProps)(e,S.propTypes)}
var O=S
t.default=O},k9CA:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var r=n("SRMa")
function a(e,t){var n={}
Object.keys(t).forEach(function(a){n[(0,r.camelize)("".concat(e,"-").concat(a))]=t[a]})
return n}}}])

//# sourceMappingURL=3-c-d59c894e7f.js.map