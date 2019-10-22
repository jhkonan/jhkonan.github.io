(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[110],{"7LJr":function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
var t=this.filter(":first")
var a
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
a=t.data("loading_images")||[]
a.forEach(function(e){e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
a=t.data("loading_images")||[]
var n=a.pop()
n&&n.remove()
t.data("loading_images",a)
return this}"register_image"==e&&3==arguments.length&&(i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
var o=i.a.fn.loadingImg.image_files["normal"]
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(o=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
var r=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)r=t.outerHeight()
else if("middle"==e.vertical)r=t.outerHeight()/2-o.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}var s=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)s=t.outerWidth()-o.width
else if("middle"==e.horizontal)s=t.outerWidth()/2-o.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}var l=t.zIndex()+1
var u=i()(document.createElement("div")).addClass("loading_image_holder")
var m=i()(document.createElement("img")).attr("src",o.url)
u.append(m)
a=t.data("loading_images")||[]
a.push(u)
t.data("loading_images",a)
if(t.css("position")&&"static"!=t.css("position")){u.css({zIndex:l,position:"absolute",top:r,left:s})
t.append(u)}else{var d=t.offset()
var c=d.top,_=d.left
e.vertical&&(c+=r)
e.horizontal&&(_+=s)
u.css({zIndex:l,position:"absolute",top:c,left:_})
i()("body").append(u)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},"7WS/":function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"play_media_comment_35257210":"تشغيل تعليق الوسائط.","play_media_comment_by_name_from_createdat_515b3b":"تشغيل تعليق الوسائط بواسطة %{name} من %{createdAt}."},"cy":{"play_media_comment_35257210":"Chwarae sylw ar gyfryngau.","play_media_comment_by_name_from_createdat_515b3b":"Chwarae sylw ar gyfryngau gan %{name} o %{createdAt}."},"da":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."},"en-AU":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-AU-x-unimelb":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-CA":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-lbs":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-ukhe":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"es":{"play_media_comment_35257210":"Reproducir comentario multimedia.","play_media_comment_by_name_from_createdat_515b3b":"Reproducir comentario multimedia de %{name} desde %{createdAt}."},"fi":{"play_media_comment_35257210":"Toista mediakommentti.","play_media_comment_by_name_from_createdat_515b3b":"Toista mediakommenttia %{name} kohteesta %{createdAt}."},"fr":{"play_media_comment_35257210":"Lancer le commentaire sur média.","play_media_comment_by_name_from_createdat_515b3b":"Lancer le commentaire sur média par %{name} à partir de %{createdAt}."},"fr-CA":{"play_media_comment_35257210":"Lire le commentaire du support","play_media_comment_by_name_from_createdat_515b3b":"Lire le commentaire du support par %{name} du %{createdAt}."},"ht":{"play_media_comment_35257210":"Jwe kòmantè medya.","play_media_comment_by_name_from_createdat_515b3b":"Jwe kòmantè medya pa %{name} de %{createdAt}."},"is":{"play_media_comment_35257210":"Spila miðilsathugasemd.","play_media_comment_by_name_from_createdat_515b3b":"Spila miðilsathugasemd eftir %{name} frá %{createdAt}."},"it":{"play_media_comment_35257210":"Commento sulla riproduzione del contenuto multimediale.","play_media_comment_by_name_from_createdat_515b3b":"Commento sulla riproduzione del contenuto multimediale da parte di %{name} da %{createdAt}."},"ja":{"play_media_comment_35257210":"メディア コメントの再生。","play_media_comment_by_name_from_createdat_515b3b":"%{name}まで%{createdAt}からのメディアのコメントを再生します。"},"mi":{"play_media_comment_35257210":"Mahia ngā korero pāpāho","play_media_comment_by_name_from_createdat_515b3b":"Mahia ngā korero pāpāho ma %{name} mai te %{createdAt}."},"nb":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nb-x-k12":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nl":{"play_media_comment_35257210":"Media-opmerking afspelen","play_media_comment_by_name_from_createdat_515b3b":"Speel media-opmerking door %{name} van %{createdAt} af."},"nn":{"play_media_comment_35257210":"Spel av medieinnhald.","play_media_comment_by_name_from_createdat_515b3b":"Spel av mediekommentar frå %{name} den %{createdAt}."},"pl":{"play_media_comment_35257210":"Odtwórz komentarz multimedialny.","play_media_comment_by_name_from_createdat_515b3b":"Odtwórz komentarz multimedialny %{name} z %{createdAt}."},"pt":{"play_media_comment_35257210":"Reproduzir comentário de mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentários de mídia %{name} de %{createdAt}."},"pt-BR":{"play_media_comment_35257210":"Reproduzir comentário em mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentário em mídia por %{name} de %{createdAt}."},"ru":{"play_media_comment_35257210":"Воспроизведение мультимедийного комментария.","play_media_comment_by_name_from_createdat_515b3b":"Воспроизвести мультимедийный комментарии %{name} из %{createdAt}."},"sl":{"play_media_comment_35257210":"Predvajaj komentar v obliki medija.","play_media_comment_by_name_from_createdat_515b3b":"Predvajaj komentar v obliki medija %{name}, ki je bil ustvarjen ob/dne %{createdAt}."},"sv":{"play_media_comment_35257210":"Spela upp medieinnehåll.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"zh-Hans":{"play_media_comment_35257210":"播放媒体评论。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}的来自%{createdAt}的媒体评论。"},"zh-Hant":{"play_media_comment_35257210":"播放媒體評論。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}於%{createdAt}創建的媒體評論。"}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("mediaCommentThumbnail")
var r=a("GLiE")
var s=a.n(r)
var l=a("5Ky4")
var u=a("ouhR")
var m=a.n(u)
var d=a("hX7l")
const c={normal:{width:140,height:100},small:{width:70,height:50}}
function _(e,t,a){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
let n,i
const r=m()(e)
try{const e=document.createElement("a")
e.href=r.attr("href")
i=e}catch(e){}if(i&&Object(d["a"])(i.search).no_preview)return
const s=c[t]||c.normal
const u=r.data("media_comment_id")||m.a.trim(r.find(".media_comment_id:first").text())||(n=r.attr("id"))&&n.match(/^media_comment_/)&&n.substring(14)||m.a.trim(r.parent().find(".media_comment_id:first").text())
const _=r.data("author")
const h=r.data("created_at")
let g
g=_&&h?o.t("Play media comment by %{name} from %{createdAt}.",{name:_,createdAt:h}):o.t("Play media comment.")
if(u){const e="https://".concat(INST.kalturaSettings.resource_domain)
const n="".concat(e,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(u,"/width/")+"".concat(s.width,"/height/").concat(s.height,"/bgcolor/000000/type/2/vid_sec/5")
const i=m()("<span\n        style='background-image: url(".concat(Object(l["a"])(n),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat(Object(l["a"])(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat(Object(l["a"])(g),"\n          </span>\n        </span>\n      </span>"))
const o=r.closest("p")
o.attr("title")||o.attr("title",Object(l["a"])(g))
let d=r
if(a){d=r.clone().empty().removeClass("instructure_file_link")
const e=r.parent(".instructure_file_link_holder")
e.length?d.appendTo(e):r.after(d)}else r.empty()
d.data("download",d.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(i).css({backgroundImage:"",padding:0})}}m.a.fn.mediaCommentThumbnail=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal"
let t=arguments.length>1?arguments[1]:void 0
return this.each(function(){s.a.defer(_,this,e,t)})}},OShF:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var o=a("5Ky4")
a("JI1W")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each(function(){var t=i()(this)
i.a.each(["name","id","class"],function(a,n){t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})})
e.id&&this.attr("id",e.id)
var t=false
if(e.data)for(var a in e.data){if(e.except&&-1!=i.a.inArray(a,e.except))continue
e.data[a]&&e.dataValues&&-1!=i.a.inArray(a,e.dataValues)&&this.data(a,e.data[a].toString())
var n=this.find("."+a)
var r=e.avoid||""
n.each(function(){var n=i()(this)
if(n.length>0&&0===n.closest(r).length){"undefined"!=typeof e.data[a]&&null!==e.data[a]||(e.data[a]="")
if(e.htmlValues&&-1!=i.a.inArray(a,e.htmlValues)){n.html(i.a.raw(e.data[a].toString()))
if(n.hasClass("user_content")){t=true
n.removeClass("enhanced")
n.data("unenhanced_content_html",e.data[a].toString())}}else if("INPUT"==n[0].tagName.toUpperCase())n.val(e.data[a])
else try{var s=e.data[a].toString()
n.html(Object(o["a"])(s))}catch(e){}}})}e.hrefValues&&e.data&&this.find("a,span[rel]").each(function(){var t,a,n,o=i()(this)
for(var r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
var s=e.hrefValues[r]
if(t=o.attr("href")){var l=i.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
var u=o.text()===o.html()?o.text():null
if(t!==l){o.attr("href",l)
u&&o.text(u)}}(a=o.attr("rel"))&&o.attr("rel",i.a.replaceTags(a,s,e.data[s]));(n=o.attr("name"))&&o.attr("name",i.a.replaceTags(n,s,e.data[s]))}})
t&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,a={}
if(e.textValues){var n=this
e.textValues.forEach(function(e){var t=n.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=i.a.trim(t.text())
"&nbsp;"===t.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
a[e]=o})}if(e.dataValues)for(t in e.dataValues){var o=this.data(e.dataValues[t])
o&&(a[e.dataValues[t]]=o)}if(e.htmlValues)for(t in e.htmlValues){var r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):i.a.trim(r.html())
a[e.htmlValues[t]]=o}return a}
i.a.fn.getTemplateValue=function(e,t){var a=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(a)[e]}},TBRb:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var o=a("GLiE")
var r=a.n(o)
var s=a("Nxtp")
a("YGE8")
i.a.fn.fixDialogButtons=function(){return this.each(function(){const e=i()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let a=i.a.map(t.toArray(),t=>{const a=i()(t)
let n=a.attr("class")||""
const o=a.attr("id")
if(a.is(".dialog_closer")){a.off(".fixdialogbuttons")
a.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===a.prop("type")&&a[0].form&&(n+=" button_type_submit")
return{text:a.text(),"data-text-while-loading":a.data("textWhileLoading"),click:()=>a.click(),class:n,id:o}})
a=r.a.sortBy(a,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",a)}})}},VNfg:function(e,t,a){"use strict"
var n=a("rnoQ")
a("u7Gu")
var i=a("pQTu")
var o=a("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"instructure_js":{"alerts":{"file_previews_disabled":"تم تعطيل معايانات الملف لموقع Canvas هذا"},"buttons":{"next_module":"الوحدة التالية","previous_module":"الوحدة السابقة"},"draft":"مسودة","errors":{"posting_message_failed":"فشل النشر، حاول مرة أخرى"},"links":{"minimize_file_preview":"تصغير معاينة الملف","minimize_youtube_video":"تصغير الفيديو","view_equella_content_in_new_window":"عرض المحتوى في نافذة جديدة"},"status":{"posting_message":"جارٍ نشر الرسالة..."},"switched_roles_message":{"designer":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك مصممًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","observer":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك واحدًا من الملاحظين.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","student":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك طالبًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","ta":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك مساعد معلم.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","teacher":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك معلمًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق."},"titles":{"equella_content_preview":"معاينة محتوى Equella","external_link":"ارتباطات إلى موقع خارجي.","preview_document":"معاينة المستند"}},"time":{"count_hours_ago":{"one":"منذ ساعة مضت","other":"منذ %{count} ساعة مضت"},"count_minutes_ago":{"one":"منذ دقيقة مضت","other":"منذ %{count} دقيقة مضت"},"less_than_a_minute_ago":"منذ أقل من دقيقة"}},"cy":{"instructure_js":{"alerts":{"file_previews_disabled":"Mae’r nodwedd rhagolwg ffeil wedi’i hanalluogi ar gyfer y safle hwn ar Canvas"},"buttons":{"next_module":"Modiwl Nesaf","previous_module":"Modiwl Blaenorol"},"draft":"Drafft","errors":{"posting_message_failed":"Post wedi methu, rhowch gynnig arall arni"},"links":{"minimize_file_preview":"Lleihau’r Rhagolwg o’r Ffeil","minimize_youtube_video":"Lleihau Fideo","view_equella_content_in_new_window":"gweld y cynnwys mewn ffenestr newydd"},"status":{"posting_message":"Wrthi’n postio neges..."},"switched_roles_message":{"designer":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel dylunydd erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","observer":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel arsyllwr erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","student":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel myfyriwr erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","ta":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel cynorthwyydd dysgu erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","teacher":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel athro erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs."},"titles":{"equella_content_preview":"Rhagolwg o gynnwys EQUELLA","external_link":"Dolenni at safle allanol.","preview_document":"Gweld rhagolwg o’r ddogfen"}},"time":{"count_hours_ago":{"one":"1 awr yn ôl","other":"%{count} awr yn ôl"},"count_minutes_ago":{"one":"1 munud yn ôl","other":"%{count} munud yn ôl"},"less_than_a_minute_ago":"llai na munud yn ôl"}},"da":{"instructure_js":{"alerts":{"file_previews_disabled":"Fil-forhåndsvisning er blevet deaktiveret for denne Canvas-side"},"buttons":{"next_module":"Næste modul","previous_module":"Forrige modul"},"draft":"Kladde","errors":{"posting_message_failed":"Opslag mislykkedes, prøv igen"},"links":{"minimize_file_preview":"Minimer fil-forhåndsvisning","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"vis indholdet i et nyt vindue"},"status":{"posting_message":"Lægger besked ud ..."},"switched_roles_message":{"designer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som designer.  Du kan gendanne din rolle og tilladelser fra fagets startside.","observer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som observatør.  Du kan gendanne din rolle og tilladelser fra fagets startside.","student":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som studerende.  Du kan gendanne din rolle og tilladelser fra fagets startside.","ta":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som undervisningsassistent.  Du kan gendanne din rolle og tilladelser fra fagets startside.","teacher":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som lærer.  Du kan gendanne din rolle og tilladelser fra fagets startside."},"titles":{"equella_content_preview":"EQUELLA forhåndsvisning af indhold","external_link":"Links til en ekstern webside.","preview_document":"Forhåndsvisning af dokumentet"}},"time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"da-x-k12":{"time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"de":{"time":{"count_hours_ago":{"one":"vor 1 Stunde","other":"vor %{count} Stunden"},"count_minutes_ago":{"one":"vor 1 Minute","other":"vor %{count} Minuten"},"less_than_a_minute_ago":"vor weniger als einer Minute"}},"el":{"instructure_js":{"alerts":{"file_previews_disabled":"Οι προεπισκοπήσεις αρχείων είναι απενεργοποιημένες για αυτή την ιστοσελίδα Canvas"},"buttons":{"next_module":"Επόμενη Ενότητα","previous_module":"Προηγούμενη Ενότητα"},"draft":"Προσχέδιο","errors":{"posting_message_failed":"Η Δημοσίευση Απέτυχε. Δοκιμάστε Ξανά."},"links":{"minimize_file_preview":"Ελαχιστοποίηση Προεπισκόπησης Αρχείου","minimize_youtube_video":"Ελαχιστοποίηση Βίντεο","view_equella_content_in_new_window":"Προβολή του περιεχομένου σε νέο παράθυρο"},"status":{"posting_message":"Δημοσίευση Μηνύματος..."},"switched_roles_message":{"designer":"\\u003cmrk mid=\\"1421\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως σχεδιαστής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1422\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","observer":"\\u003cmrk mid=\\"1423\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως παρατηρητής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1424\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","student":"\\u003cmrk mid=\\"1425\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως σπουδαστής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1426\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","ta":"\\u003cmrk mid=\\"1427\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως βοηθός διδασκαλίας.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1428\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","teacher":"\\u003cmrk mid=\\"1429\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως καθηγητής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1430\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e"},"titles":{"equella_content_preview":"Προεπισκόπιση Περιεχομένου του Equella","external_link":"Σύνδεσμοι σε εξωτερική ιστοσελίδα.","preview_document":"Προεπισκόπιση αρχείου"}},"time":{"count_hours_ago":{"one":"1 ώρα πριν","other":"%{count} ώρες πριν"},"count_minutes_ago":{"one":"1 λεπτό πριν","other":"%{count} λεπτά πριν"},"less_than_a_minute_ago":"λιγότερο από ένα λεπτό πριν"}},"en-AU":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-AU-x-unimelb":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this subject, and are now viewing the subject as a designer.  You can restore your role and permissions from the subject home page.","observer":"You have switched roles temporarily for this subject, and are now viewing the subject as an observer.  You can restore your role and permissions from the subject home page.","student":"You have switched roles temporarily for this subject, and are now viewing the subject as a student.  You can restore your role and permissions from the subject home page.","ta":"You have switched roles temporarily for this subject, and are now viewing the subject as a Tutor.  You can restore your role and permissions from the subject home page.","teacher":"You have switched roles temporarily for this subject, and are now viewing the subject as an instructor.  You can restore your role and permissions from the subject home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-CA":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next module","previous_module":"Previous module"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as a observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-lbs":{"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-ukhe":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next unit","previous_module":"Previous unit"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this module, and are now viewing the module as a designer.  You can restore your role and permissions from the module home page.","observer":"You have switched roles temporarily for this module, and are now viewing the module as a observer.  You can restore your role and permissions from the module home page.","student":"You have switched roles temporarily for this module, and are now viewing the module as a student.  You can restore your role and permissions from the module home page.","ta":"You have switched roles temporarily for this module, and are now viewing the module as a TA.  You can restore your role and permissions from the module home page.","teacher":"You have switched roles temporarily for this module, and are now viewing the module as a teacher.  You can restore your role and permissions from the module home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"es":{"time":{"count_hours_ago":{"one":"hace 1 hora","other":"hace %{count} horas"},"count_minutes_ago":{"one":"hace 1 minuto","other":"hace %{count} minutos"},"less_than_a_minute_ago":"hace menos de un minuto"}},"fa":{"instructure_js":{"alerts":{"file_previews_disabled":"پیش نمایش فایل ها برای این تارنمای کانواس غیر فعال شده است"},"buttons":{"next_module":"ماژول بعدی","previous_module":"ماژول قبلی"},"draft":"پیش نویس","errors":{"posting_message_failed":"ارسال انجام نشد، دوباره سعی کنید"},"links":{"minimize_file_preview":"کمینه کردن پیش نمایش فایل","minimize_youtube_video":"کمینه کردن تصویر","view_equella_content_in_new_window":"مشاهده محتوا در پنجره جدید"},"status":{"posting_message":"درحال ارسال پیام..."},"switched_roles_message":{"designer":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک طراح مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","observer":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک بیننده مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","student":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک دانشجو مشاهده می کنید. می توانید نقش و مجوزها را از صفحه اصلی درس بازیابی کنید.","ta":"نقش های مربوط به این درس را تغییر داده اید و اکنون درس را به عنوان یک دستیار آموزشی مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","teacher":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک استاد مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید."},"titles":{"equella_content_preview":"پیش نمایش محتوای Equella","external_link":"به یک تارنمای بیرونی پیوند می شود.","preview_document":"پیش نمایش سند"}},"time":{"count_hours_ago":{"one":"%{count} ساعت قبل","other":"%{count} ساعت قبل"},"count_minutes_ago":{"one":"%{count} دقیقه قبل","other":"%{count} دقیقه قبل"},"less_than_a_minute_ago":"کمتر از یک دقیقه پیش"}},"fi":{"time":{"count_hours_ago":{"one":"1 tunti sitten","other":"%{count} tuntia sitten"},"count_minutes_ago":{"one":"1 minuutti sitten","other":"%{count} minuuttia sitten"},"less_than_a_minute_ago":"vähemmän kuin minuutti sitten"}},"fr":{"time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’1 minute"}},"fr-CA":{"time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’une minute"}},"he":{"instructure_js":{"alerts":{"file_previews_disabled":"תצוגה מוקדמת של קבצים אינה מופעלת באתר קנבס זה."},"buttons":{"next_module":"המודול הבא","previous_module":"המודול הקודם"},"draft":"טיוטה","errors":{"posting_message_failed":"הפרסום נכשל, יש לנסות שוב"},"links":{"minimize_file_preview":"מיזעור חלון תצוגה מקדימה של קובץ","minimize_youtube_video":"מיזעור וידאו","view_equella_content_in_new_window":"תצוגת התוכן בחלון חדש"},"status":{"posting_message":"מפרסם הודעה..."},"switched_roles_message":{"designer":"החלפת תפקידים באופן זמני לקורס זה, וכעת מתפקד/ת כתכנן/ת. ניתן לחזור לתפקיד הקודם על הרשאותיו מדף הבית","observer":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כמשקיף/ה. ניתן לשחזר את תפקידך הקודם והרשאותיו מדף הבית של הקורס","student":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כתלמיד/ה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס","ta":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כעוזר/ת הוראה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס","teacher":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כמורה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס"},"titles":{"equella_content_preview":"תצוגה מוקדמת של תוכן Equella ","external_link":"קישורים לאתר חיצוני","preview_document":"תצוגה מוקדמת של המסמך"}},"time":{"count_hours_ago":{"one":"לפני שעה","other":"לפני %{count} שעות"},"count_minutes_ago":{"one":"לפני דקה","other":"לפני %{count} דקות"},"less_than_a_minute_ago":"לפני פחות מדקה"}},"ht":{"time":{"count_hours_ago":{"one":"1 èdtan de sa","other":"%{count} èdtan de sa"},"count_minutes_ago":{"one":"1 minit de sa","other":"%{count} minit de sa"},"less_than_a_minute_ago":"mwens ke yon minit de sa"}},"hu":{"instructure_js":{"alerts":{"file_previews_disabled":"Ezen a Canvas oldalon a fájlok előnézete le van tiltva. "},"buttons":{"next_module":"Következő modul","previous_module":"Előző modul"},"draft":"Piszkozat","errors":{"posting_message_failed":"Sikertelen bejegyzés, próbálja újra "},"links":{"minimize_file_preview":"Fájl előnézet méretének csökkentése","minimize_youtube_video":"Videó méretének csökkentése","view_equella_content_in_new_window":"tartalom megtekintése új ablakban"},"status":{"posting_message":"Üzenet közzététele... "},"switched_roles_message":{"designer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg tervezőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","observer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg megfigyelőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","student":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg hallgatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","ta":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg segédoktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","teacher":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg oktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján."},"titles":{"equella_content_preview":"Equella tartalom előnézete","external_link":"Linkek egy külső oldalra","preview_document":"Dokumentum előnézete"}},"time":{"count_hours_ago":{"one":"1 órával ezelőtt","other":"%{count} órával ezelőtt"},"count_minutes_ago":{"one":"1 perccel ezelőtt","other":"%{count} perccel ezelőtt"},"less_than_a_minute_ago":"kevesebb mint egy perce"}},"hy":{"instructure_js":{"alerts":{"file_previews_disabled":"Ֆայլերի նախնական դիտումները Canvas-ի այս կայքի համար անջատվել են"},"buttons":{"next_module":"Հաջորդ մոդուլը","previous_module":"Նախորդ մոդուլը"},"draft":"Սևագիր","errors":{"posting_message_failed":"Տեղադրումը չհաջողվեց, փորձեք կրկին:"},"links":{"minimize_file_preview":"Փոքրացնել ֆայլի նախնական դիտումը","minimize_youtube_video":"Փոքրացնել տեսահոլովակը","view_equella_content_in_new_window":"Բովանդակության դիտում նոր պատուհանում"},"status":{"posting_message":"Հաղորդագրությունը տեղադրվում է..."},"switched_roles_message":{"designer":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դիզայներ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները: ","observer":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դիտորդ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","student":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես ունկնդիր: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","ta":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես ասիստենտ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","teacher":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դասավանդող: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:"},"titles":{"equella_content_preview":"Equella-ի բովանդակության նախնական դիտում","external_link":"Արտաքին կայքին հղումներ","preview_document":"Փաստաթղթի նախնական դիտում"}},"time":{"count_hours_ago":{"one":"1 ժամ առաջ","other":"%{count} ժամ առաջ"},"count_minutes_ago":{"one":"1 րոպե առաջ","other":"%{count} րոպե առաջ"},"less_than_a_minute_ago":"ավելի քիչ, քան մեկ րոպե առաջ"}},"is":{"instructure_js":{"alerts":{"file_previews_disabled":"Forskoðun skráa er ekki virk fyrir þessa Canvas-síðu"},"buttons":{"next_module":"Næsta eining","previous_module":"Fyrri eining"},"draft":"Drög","errors":{"posting_message_failed":"Birting tókst ekki, reyndu aftur"},"links":{"minimize_file_preview":"Lágmarka forskoðun skrár","minimize_youtube_video":"Minnka myndband","view_equella_content_in_new_window":"skoða efnið í nýjum glugga"},"status":{"posting_message":"Birti skilaboð..."},"switched_roles_message":{"designer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem hönnuður.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","observer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem skoðandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","student":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem nemandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","ta":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem aðstpðarkennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","teacher":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem kennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins."},"titles":{"equella_content_preview":"Equella forskoðun efnis","external_link":"Tenglar á ytra svæði.","preview_document":"Forskoða skjal"}},"time":{"count_hours_ago":{"one":"Fyrir 1 klukkustund","other":"Fyrir %{count} klukkustundum"},"count_minutes_ago":{"one":"Fyrir 1 mínútu","other":"Fyrir %{count} mínútum"},"less_than_a_minute_ago":"fyrir tæpri mínútu"}},"it":{"time":{"count_hours_ago":{"one":"1 ora fa","other":"%{count} ore fa"},"count_minutes_ago":{"one":"1 minuto fa","other":"%{count} minuti fa"},"less_than_a_minute_ago":"meno di un minuto fa"}},"ja":{"time":{"count_hours_ago":{"one":"%{count} 時間前","other":"%{count} 時間前"},"count_minutes_ago":{"one":"%{count} 分前","other":"%{count} 分前"},"less_than_a_minute_ago":"1 分前未満"}},"ko":{"instructure_js":{"alerts":{"file_previews_disabled":"이 Canvas 사이트에는 파일 미리 보기 사용 안 함"},"buttons":{"next_module":"다음 모듈","previous_module":"이전 모듈"},"draft":"초안","errors":{"posting_message_failed":"게시 실패. 다시 시도하시기 바랍니다."},"links":{"minimize_file_preview":"파일 미리 보기 최소화","minimize_youtube_video":"비디오 최소화","view_equella_content_in_new_window":"새 창에서 내용 보기"},"status":{"posting_message":"메시지 게시 중..."},"switched_roles_message":{"designer":"이 과목에 대해 임시로 역할을 전환하여 지금 디자이너로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","observer":"이 과목에 대해 임시로 역할을 전환하여 지금 감독자로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","student":"이 과목에 대해 임시로 역할을 전환하여 지금 학생으로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","ta":"이 과목에 대해 임시로 역할을 전환하여 지금 조교로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","teacher":"이 과목에 대해 임시로 역할을 전환하여 지금 교사로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다."},"titles":{"equella_content_preview":"Equella 내용 미리 보기","external_link":"외부 사이트로 연결합니다.","preview_document":"문서 미리 보기"}},"time":{"count_hours_ago":{"one":"%{count}시간 전","other":"%{count}시간 전"},"count_minutes_ago":{"one":"%{count}분 전","other":"%{count}분 전"},"less_than_a_minute_ago":"1분 전 이내"}},"mi":{"instructure_js":{"alerts":{"file_previews_disabled":"Kua monokia arokite Kōnae mō tēnei pae Canvas"},"buttons":{"next_module":"Kōwae Panuku","previous_module":"Kōwae mua"},"draft":"tauira","errors":{"posting_message_failed":"Whakairi rahua, Whakamātauria ano"},"links":{"minimize_file_preview":"Whakamōkito Arokitenga Kōnae","minimize_youtube_video":"Whakamōkito Ataata","view_equella_content_in_new_window":"tiro te ihirangi i roto i te matapihi hou"},"status":{"posting_message":"Te tuku Karere ..."},"switched_roles_message":{"designer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he kaitātai.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","observer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga hei kaimātakitaki.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","student":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he ākonga.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","ta":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he TA.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","teacher":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga ano he kaiako.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga."},"titles":{"equella_content_preview":"Arokite Ihirangi Equella","external_link":"Hononga ki te pae o waho.","preview_document":"Arokite i te tuhinga"}},"time":{"count_hours_ago":{"one":"1 haora i mua","other":"%{count} haora i mua"},"count_minutes_ago":{"one":"1 meneti i mua","other":"%{count} meneti i mua"},"less_than_a_minute_ago":"iti iho i te i te meneti i mua"}},"nb":{"time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nb-x-k12":{"time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nl":{"time":{"count_hours_ago":{"one":"1 uur geleden","other":"%{count} uur geleden"},"count_minutes_ago":{"one":"1 minuut geleden","other":"%{count} minuten geleden"},"less_than_a_minute_ago":"minder dan 1 minuut geleden"}},"nn":{"instructure_js":{"alerts":{"file_previews_disabled":"Førehandsvising av filer er deaktivert for dette Canvas-området"},"buttons":{"next_module":"Neste modul","previous_module":"Førre modul"},"draft":"Utkast","errors":{"posting_message_failed":"Oppføring mislukkast, prøv på nytt seinare"},"links":{"minimize_file_preview":"Minimer førehandsvising av fil","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"sjå innhaldet i eit nytt vindauge"},"status":{"posting_message":"Sender melding..."},"switched_roles_message":{"designer":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein designar.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","observer":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein observatør.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","student":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein student.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","ta":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein undervisingsassistent.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","teacher":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein faglærar.  Du kan tilbakestille rolla og løyvet frå emnet si startside."},"titles":{"equella_content_preview":"Førehandsvising av innhald frå EQUELLA","external_link":"Lenker til eit ekstern område.","preview_document":"Førehandsvising av dokumentet"}},"time":{"count_hours_ago":{"one":"1 time sidan","other":"%{count} timar sidan"},"count_minutes_ago":{"one":"1 minutt sidan","other":"%{count} minutt sidan"},"less_than_a_minute_ago":"mindre enn eit minutt sidan"}},"pl":{"time":{"count_hours_ago":{"one":"1 godzina temu","other":"%{count} godzin temu"},"count_minutes_ago":{"one":"1 minuta temu","other":"%{count} minut temu"},"less_than_a_minute_ago":"mniej niż minutę temu"}},"pt":{"instructure_js":{"alerts":{"file_previews_disabled":"As visualizações de arquivo foram desativadas para este site Canvas"},"buttons":{"next_module":"Próximo módulo","previous_module":"Módulo anterior"},"draft":"Rascunho","errors":{"posting_message_failed":"Falha na publicação, tente novamente"},"links":{"minimize_file_preview":"Minimizar visualização de arquivo","minimize_youtube_video":"Minimizar vídeo","view_equella_content_in_new_window":"exibir o conteúdo em uma nova janela"},"status":{"posting_message":"Publicando mensagem..."},"switched_roles_message":{"designer":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como designer.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","observer":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como observador.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","student":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como aluno.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","ta":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como assistente.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","teacher":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como professor.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina."},"titles":{"equella_content_preview":"Visualização do conteúdo do Equella","external_link":"Links para um site externo","preview_document":"Visualizar o documento"}},"time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"pt-BR":{"time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"ru":{"instructure_js":{"alerts":{"file_previews_disabled":"Предварительный просмотр файла отключен для этого сайта Canvas"},"buttons":{"next_module":"Следующий модуль","previous_module":"предыдущий модуль"},"draft":"Черновик","errors":{"posting_message_failed":"Сбой записи, повторите попытку"},"links":{"minimize_file_preview":"Уменьшить просмотр файла","minimize_youtube_video":"Уменьшить видео","view_equella_content_in_new_window":"просмотр содержания в новом окне"},"status":{"posting_message":"Публикация сообщения..."},"switched_roles_message":{"designer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как дизайнер.  Можно восстановить роль и разрешения на домашней странице курса.","observer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как наблюдатель.  Можно восстановить роль и разрешения на домашней странице курса.","student":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как студент.  Можно восстановить роль и разрешения на домашней странице курса.","ta":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как ассистент.  Можно восстановить роль и разрешения на домашней странице курса.","teacher":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как учитель.  Можно восстановить роль и разрешения на домашней странице курса."},"titles":{"equella_content_preview":"Предварительный просмотр содержания Equella","external_link":"Ссылки на внешний сайт.","preview_document":"Предварительный просмотр документа"}},"time":{"count_hours_ago":{"one":"1 час назад","other":"%{count} часа(ов) назад"},"count_minutes_ago":{"one":"1 минута назад","other":"%{count} минут(ы) назад"},"less_than_a_minute_ago":"меньше минуты назад"}},"sl":{"time":{"count_hours_ago":{"one":"1 uro prej","other":"%{count} ur prej"},"count_minutes_ago":{"one":"1 minuto prej","other":"%{count} minut prej"},"less_than_a_minute_ago":"manj kot minuto prej"}},"sv":{"time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sen"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"mindre än en minut sen"}},"sv-x-k12":{"time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sen"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"mindre än en minut sen"}},"tr":{"instructure_js":{"alerts":{"file_previews_disabled":"Bu Canvas sitesinde dosya ön izlemeleri devre dışı"},"buttons":{"next_module":"Sonraki Modül","previous_module":"Önceki Modül"},"draft":"Taslak","errors":{"posting_message_failed":"Gönderim Başarısız, Lütfen Tekrar Deneyin"},"links":{"minimize_file_preview":"Dosya Ön İzlemesini Küçült","minimize_youtube_video":"Video\'yu Küçült","view_equella_content_in_new_window":"içeriği yeni pencerede görüntüle"},"status":{"posting_message":"Mesajınız Gönderiliyor..."},"switched_roles_message":{"designer":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda tasarımcı olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","observer":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda gözlemci olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","student":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda öğrenci olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","ta":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda asistan öğretmen olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","teacher":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda öğretmen olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz."},"titles":{"equella_content_preview":"Equella İçerik Ön İzlemesi","external_link":"Harici bir siteye bağlantılar.","preview_document":"Bu Dosyayı Önizle"}},"time":{"count_hours_ago":{"one":"1 saat önce","other":"%{count} saat önce"},"count_minutes_ago":{"one":"1 dakika önce","other":"%{count} dakika önce"},"less_than_a_minute_ago":"bir dakikadan daha az"}},"uk":{"time":{"count_hours_ago":{"one":"1 година тому","other":"%{count} годин тому"},"count_minutes_ago":{"one":"1 хвилина тому","other":"%{count} хвилин тому"},"less_than_a_minute_ago":"Менше, ніж хвилину тому"}},"zh-Hans":{"time":{"count_hours_ago":{"one":"%{count} 小时前","other":"%{count} 小时前"},"count_minutes_ago":{"one":"%{count} 分钟前","other":"%{count} 分钟前"},"less_than_a_minute_ago":"不到一分钟前"}},"zh-Hant":{"time":{"count_hours_ago":{"one":"%{count}小時以前","other":"%{count} 小時以前"},"count_minutes_ago":{"one":"%{count}分鐘以前","other":"%{count} 分鐘以前"},"less_than_a_minute_ago":"不到一分鐘以前"}}}'))
a("jQeR")
a("0sPK")
var r=i["default"].scoped("instructure_js")
var s=a("ouhR")
var l=a.n(s)
var u=a("GLiE")
var m=a.n(u)
var d=a("2DhO")
var c=a("5Ky4")
var _=a("Nxtp")
var h=a("21i1")
a("YGE8")
function g(e){e=(e||"").split(":")[0]
var t=e.split("."),a=t.length
return(a>1?[t[a-2],t[a-1]]:t).join("")}var p=g(window.location.hostname)
l.a.expr[":"].external=function(e){var t=l()(e).attr("href")
return!!(t&&t.length&&!t.match(/^(mailto\:|javascript\:)/)&&e.hostname&&g(e.hostname)!=p)}
window.equella={ready:function(e){l()(document).triggerHandler("equella_ready",e)},cancel:function(){l()(document).triggerHandler("equella_cancel")}}
l()(document).bind("equella_ready",function(e,t){l()("#equella_dialog").triggerHandler("equella_ready",t)}).bind("equella_cancel",function(){l()("#equella_dialog").dialog("close")})
window.external_tool_dialog={ready:function(e){var t=jQuery.Event("selection")
t.contentItems=e
l()("#resource_selection_dialog:visible").triggerHandler(t)
l()("#homework_selection_dialog:visible").triggerHandler(t)},cancel:function(){l()("#external_tool_button_dialog").dialog("close")
l()("#resource_selection_dialog").dialog("close")
l()("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){l()("#instructure_image_search").triggerHandler("search_results",e)}
a("VHne")
a("jYyc")
a("fy7k")
var f=a("hiU6")
a("UlQx")
a("Z+Ib")
a("JI1W")
a("p6Wi")
a("q3b3")
a("7LJr")
a("MWZS")
a("OShF")
a("TBRb")
a("7WS/")
a("2sOc")
a("teYS")
a("Yf8v")
a("fuo4")
a("Sv6n")
l()("body").on("click","[data-track-category]",function(){const e=l()(this).data(),t=e.trackCategory,a=e.trackLabel,n=e.trackAction,i=e.trackValue
Object(f["a"])(t,n,a,i)})
function v(){const e=l()(this)
const t=e.attr("href")
const a=l.a.youTubeID(t||"")
if(a&&!e.hasClass("inline_disabled")){const n=l()('\n      <a\n        href="'.concat(Object(c["a"])(t),'"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/').concat(Object(c["a"])(a),'/2.jpg)"\n          alt="').concat(Object(c["a"])(e.data("preview-alt")||""),'"\n        />\n      </a>\n    '))
n.click(Object(_["a"])(function(){const e=l()("\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/".concat(Object(c["a"])(a),"?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ").concat(Object(c["a"])(r.t("links.minimize_youtube_video","Minimize Video")),"\n          </a>\n        </span>\n      "))
e.find(".hide_youtube_embed_link").click(Object(_["a"])(()=>{e.remove()
n.show()
Object(f["a"])("hide_embedded_content","hide_you_tube")}))
l()(this).after(e).hide()}))
Object(f["a"])("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(n)}}Object(f["a"])("Route",location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
var w=".dialog, .draggable, .resizable, .sortable, .tabs"
function b(){var e=l()("#content")
l()(".user_content:not(.enhanced):visible").addClass("unenhanced")
l()(".user_content.unenhanced:visible").each(function(){var t=l()(this)
t.find("img").css("maxWidth",Math.min(e.width(),t.width()))
t.data("unenhanced_content_html",t.html())}).find(".enhanceable_content").show().filter(w).ifExists(function(e){var t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+w+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each(function(){var e=l()(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(function(t){t.preventDefault()
e.dialog()})}).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each(function(){l()(this).tabs()}).end().end().find("a:not(.not_external, .external):external").each(function(){var e=Object(c["a"])(r.t("titles.external_link","Links to an external site."))
l()(this).not(":has(img)").addClass("external").html("<span>"+l()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+l.a.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+l.a.raw(e)+")</span>")}).end()
l.a.filePreviewsEnabled()&&l()("a.instructure_scribd_file").not(".inline_disabled").each(function(){var e=l()(this)
if(l.a.trim(e.text())){var t=l()("<span class='instructure_file_holder link_holder'/>"),a=l()("<a class='file_preview_link' aria-hidden='true' href='"+Object(c["a"])(e.attr("href"))+"' title='"+Object(c["a"])(r.t("titles.preview_document","Preview the document"))+"' style='padding-left: 5px;'><img src='/images/preview.png' alt='"+Object(c["a"])(r.t("titles.preview_document","Preview the document"))+"'/></a>")
e.removeClass("instructure_scribd_file").before(t).appendTo(t)
t.append(a)
e.hasClass("auto_open")&&a.click()}})
l()(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each(function(){l()(this).closest("a").addClass("instructure_inline_media_comment")}).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",true).end().not(".youtubed").each(v)
l()(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(function(){l()(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)}l()(function(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout(function(){l.a.each(m.a.uniq(window._earlyClick.clicks),function(){var e=l.a.Event("click")
e.preventDefault()
l()(this).trigger(e)})},1)}const e=l()("#breadcrumbs")
if(e.length){let t
let a=false
const n=1.5*e.find("li:visible:first").height()
const i=()=>{let i=500
t=t||e.find(".ellipsible")
t.ifExists(function(){t.css("maxWidth","")
for(let o=0;e.height()>n&&o<20;o++){if(!a){a=true
t.addClass("ellipsis")}t.css("maxWidth",i-=20)}})}
i()
l()(window).resize(i)}n["a"].prototype.bindOpenKeys.call({$el:l()("#keyboard_navigation")})
l()("#switched_role_type").ifExists(function(){var e=l()(this).attr("class")
var t=l()("<img/>")
var a=null
switch(l()(this).data("role")){case"TeacherEnrollment":a=r.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":a=r.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":a=r.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":a=r.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":a=r.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:a=r.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",a).css({paddingRight:2,width:12,height:12})
l()("#crumb_"+e).find("a").prepend(t)})
l()("a.show_quoted_text_link").live("click",function(e){var t=l()(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show()
l()(this).hide()}})
l()("a.equella_content_link").live("click",function(e){e.preventDefault()
var t=l()("#equella_preview_dialog")
if(!t.length){t=l()("<div/>")
t.attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+Object(c["a"])(r.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text(l()(this).attr("title")||l()(this).text()||r.t("titles.equella_content_preview","Equella Content Preview"))
var a=t.find("iframe")
setTimeout(function(){a.css("background","#fff")},2500)
l()("body").append(t)
t.dialog({autoOpen:false,width:"auto",resizable:false,title:r.t("titles.equella_content_preview","Equella Content Preview"),close:function(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",l()(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",l()(this).attr("href"))})
l()(".dialog_opener[aria-controls]:not(.user_content *)").live("click",function(e){var t=this
l()("#"+l()(this).attr("aria-controls")).ifExists(function(a){e.preventDefault()
if(!a.data("dialog")){a.dialog(l.a.extend({autoOpen:false,modal:true},l()(t).data("dialogOpts")))
a.fixDialogButtons()}a.dialog("open")})})
l.a.filePreviewsEnabled()?l()("a.file_preview_link").live("click",function(e){e.preventDefault()
var t=l()(this).loadingImage({image_size:"small"}).hide()
l.a.ajaxJSON(t.attr("href").replace(/\/download/,""),"GET",{},function(a){var n=a&&a.attachment
t.loadingImage("remove")
if(n&&(l.a.isPreviewable(n.content_type,"google")||n.canvadoc_session_url)){var i=l()("<div>").insertAfter(t.parents(".link_holder:last")).loadDocPreview({canvadoc_session_url:n.canvadoc_session_url,mimeType:n.content_type,public_url:n.public_url,attachment_preview_processing:"pending_upload"==n.workflow_state||"processing"==n.workflow_state})
var o=l()('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+Object(c["a"])(r.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(function(e){e.preventDefault()
t.show()
t.focus()
i.remove()
Object(f["a"])("hide_embedded_content","hide_file_preview")})
i.prepend(o)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&o.focus()
Object(f["a"])("show_embedded_content","show_file_preview")}},function(){t.loadingImage("remove").hide()})}):l()("a.file_preview_link").live("click",function(e){e.preventDefault()
alert(r.t("alerts.file_previews_disabled","File previews have been disabled for this Canvas site"))})
var t
l.a.subscribe("userContent/change",function(){clearTimeout(t)
t=setTimeout(b,50)})
l()(document).bind("user_content_change",b)
l()(function(){setInterval(b,15e3)
setTimeout(b,15)})
l()(".zone_cached_datetime").each(function(){if(l()(this).attr("title")){var e=d["a"].parse(l()(this).attr("title"))
e&&l()(this).text(l.a.datetimeString(e))}})
l()(".show_sub_messages_link").click(function(e){e.preventDefault()
l()(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message")
l()(this).parents(".communication_sub_message").remove()})
l()(".show_comments_link").click(function(e){e.preventDefault()
l()(this).closest("ul").find("li").show()
l()(this).closest("li").remove()})
l()(".communication_message .message_short .read_more_link").click(function(e){e.preventDefault()
l()(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()})
l()(".communication_message .close_notification_link").live("click",function(e){e.preventDefault()
var t=l()(this).parents(".communication_message")
t.confirmDelete({url:l()(this).attr("rel"),noMessage:true,success:function(){l()(this).slideUp(function(){l()(this).remove()})}})})
l()(".communication_message .add_entry_link").click(function(e){e.preventDefault()
var t=l()(this).parents(".communication_message")
var a=t.find(".reply_message").hide()
var n=t.find(".communication_sub_message.blank").clone(true).removeClass("blank")
a.before(n.show())
var i=m.a.uniqueId("textarea_")
n.find("textarea.rich_text").attr("id",i)
l()(document).triggerHandler("richTextStart",l()("#"+i))
n.find("textarea:first").focus().select()})
l()(document).bind("richTextStart",function(e,t){if(!t||0===t.length)return
t=l()(t)
if(!t||0===t.length)return
h["a"].initSidebar({show:function(){l()("#sidebar_content").hide()},hide:function(){l()("#sidebar_content").show()}})
h["a"].loadNewEditor(t,{focus:true})}).bind("richTextEnd",function(e,t){if(!t||0===t.length)return
t=l()(t)
if(!t||0===t.length)return
h["a"].destroyRCE(t)})
l()(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click(function(e){e.preventDefault()
l()(this).parents(".communication_message").find(".content .users_list").slideToggle()})
l()(".communication_message .delete_message_link").click(function(e){e.preventDefault()
l()(this).parents(".communication_message").confirmDelete({noMessage:true,url:l()(this).attr("href"),success:function(){l()(this).slideUp()}})})
l()(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit:function(e){l()(this).find("button").attr("disabled",true)
l()(this).find(".submit_button").text(r.t("status.posting_message","Posting Message..."))
l()(this).loadingImage()},success:function(e){l()(this).loadingImage("remove")
var t=l()(this).parents(".communication_sub_message")
var a=t.parents(".communication_message")
var n=e.messages[0]
t.fillTemplateData({data:{post_date:l.a.datetimeString(n.created_at),message:n.body},htmlValues:["message"]})
t.find(".message").show()
l()(this).remove()
a.find(".reply_message").show()
l.a.flashMessage("Message Sent!")
l()(document).triggerHandler("user_content_change")
"/"===location.pathname&&Object(f["a"])("dashboard_comment","create")},error:function(e){l()(this).loadingImage("remove")
l()(this).find("button").attr("disabled",false)
l()(this).find(".submit_button").text("Post Failed, Try Again")
l()(this).formErrors(e)}})
l()(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit:function(e){l()(this).find("button").attr("disabled",true)
l()(this).find(".submit_button").text(r.t("status.posting_message","Posting Message..."))
l()(this).loadingImage()},success:function(e){l()(this).loadingImage("remove")
var t=l()(this).parents(".communication_sub_message")
if(l()(this).hasClass("submission_comment_form")){var a=l()(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id
var n=null
for(var i in e){var o=e[i].submission
o.user_id==a&&(n=o)}if(n){var r=n.submission_comments[n.submission_comments.length-1].submission_comment
r.post_date=l.a.datetimeString(r.created_at)
r.message=r.formatted_body||r.comment
t.fillTemplateData({data:r,htmlValues:["message"]})}}else{var s=e.discussion_entry
s.post_date=l.a.datetimeString(s.created_at)
t.find(".content > .message_html").val(s.message)
t.fillTemplateData({data:s,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show()
l()(document).triggerHandler("richTextEnd",l()(this).find("textarea.rich_text"))
l()(document).triggerHandler("user_content_change")
l()(this).remove()
location.href.match(/dashboard/)&&Object(f["a"])("dashboard_comment","create")},error:function(e){l()(this).loadingImage("remove")
l()(this).find("button").attr("disabled",false)
l()(this).find(".submit_button").text(r.t("errors.posting_message_failed","Post Failed, Try Again"))
l()(this).formErrors(e)}})
l()(".communication_sub_message form .cancel_button").click(function(){var e=l()(this).parents(".communication_sub_message")
var t=l()(this).parents(".communication_message")
l()(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()})
l()(".communication_message,.communication_sub_message").bind("focusin mouseenter",function(){l()(this).addClass("communication_message_hover")}).bind("focusout mouseleave",function(){l()(this).removeClass("communication_message_hover")})
l()(".communication_sub_message .more_options_reply_link").click(function(e){e.preventDefault()
var t=l()(this).parents("form")
var a=null
a=t.hasClass("submission_comment_form")?{comment:t.find("textarea:visible:first").val()||""}:{message:t.find("textarea:visible:first").val()||""}
location.href=l()(this).attr("href")+"?message="+encodeURIComponent(a.message)})
l()(".communication_message.new_activity_message").ifExists(function(){this.find(".message_type img").click(function(){var e=l()(this),t=l.a.trim(e.attr("class"))
e.parents(".message_type").find("img").removeClass("selected")
e.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(e.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+t+"_form").show().find(".context_select").change()})
this.find(".context_select").change(function(){var e=l()(this),t=e.val(),a=e.parents(".communication_message"),n=a.find("form")
n.attr("action",a.find("."+t+"_form_url").attr("href"))
n.data("context_name",this.options[this.selectedIndex].text)
n.data("context_code",t)
a.find(".roster_list").hide().find(":checkbox").each(function(){l()(this).attr("checked",false)})
a.find("."+t+"_roster_list").show()}).triggerHandler("change")
this.find(".cancel_button").click(function(e){l()(this).parents(".communication_message").hide().prev(".new_activity_message").show()})
this.find(".new_activity_message_link").click(function(e){e.preventDefault()
l()(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()})
this.find("form.message_form").formSubmit({beforeSubmit:function(e){l()("button").attr("disabled",true)
l()("button.submit_button").text(r.t("status.posting_message","Posting Message..."))},success:function(e){l()("button").attr("disabled",false)
l()("button.submit_button").text("Post Message")
var t=l()(this).data("context_code")||""
var a=l()(this).data("context_name")||""
if(l()(this).hasClass("discussion_topic_form")){var n=e.discussion_topic
n.context_code=a
n.user_name=l()("#identity .user_name").text()
n.post_date=l.a.datetimeString(n.created_at)
n.topic_id=n.id
var i=l()(this).parents(".communication_message").find(".template")
var o=i.find(".communication_message").clone(true)
o.find(".header .title,.behavior_content .less_important a").attr("href",i.find("."+t+"_topic_url").attr("href"))
o.find(".add_entry_link").attr("href",i.find("."+t+"_topics_url").attr("href"))
o.find(".user_name").attr("href",i.find("."+t+"_user_url").attr("href"))
o.find(".topic_assignment_link,.topic_assignment_url").attr("href",i.find("."+t+"_assignment_url").attr("href"))
o.find(".attachment_name,.topic_attachment_url").attr("href",i.find("."+t+"_attachment_url").attr("href"))
var r={discussion_topic_id:n.id}
o.fillTemplateData({data:n,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"})
o.find(".subcontent").fillTemplateData({data:r,hrefValues:["topic_id","user_id"]})
o.find(".subcontent form").attr("action",i.find("."+t+"_entries_url").attr("href"))
o.fillFormData(r,{object_name:"discussion_entry"})
l()(this).parents(".communication_message").after(o.hide())
o.slideDown()
l()(this).parents(".communication_message").slideUp()
l()(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else l()(this).hasClass("announcement_form")||location.reload()},error:function(e){l()("button").attr("disabled",false)
l()("button.submit_button").text(r.t("errors.posting_message_failed","Post Failed, Try Again"))
l()(this).formErrors(e)}})})
l()("#topic_list .show_all_messages_link").show().click(function(e){e.preventDefault()
l()("#topic_list .topic_message").show()
l()(this).hide()})
var i=[]
function o(){i=l()(".time_ago_date:visible").toArray()
s()}function s(){var e=i.shift()
if(e){var t=l()(e),a=t.data("parsed_date")||Date.parse(t.data("timestamp")||"")
if(a){var n=new Date-a
t.data("timestamp",a.toISOString())
t.data("parsed_date",a)
var u=l.a.fudgeDateForProfileTimezone(a)
var m=u.toString("MMM d, yyyy")+u.toString(" h:mmtt").toLowerCase()
var d=m
if(n<864e5)if(n<36e5)if(n<6e4)d=r.t("#time.less_than_a_minute_ago","less than a minute ago")
else{var c=parseInt(n/6e4,10)
d=r.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:c})}else{var _=parseInt(n/36e5,10)
d=r.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:_})}t.text(d)
t.attr("title",m)}setTimeout(s,1)}else setTimeout(o,6e4)}setTimeout(o,100)
var u=l()("#sequence_footer .sequence_details_url").filter(":last").attr("href")
if(u)l.a.ajaxJSON(u,"GET",{},function(e){var t=l()("#sequence_footer")
if(e.current_item){l()("#sequence_details .current").fillTemplateData({data:e.current_item.content_tag})
l.a.each({previous:".prev",next:".next"},function(a,n){var i=t.find(n)
if(e[a+"_item"]||e[a+"_module"]){var o=e[a+"_item"]&&e[a+"_item"].content_tag||e[a+"_module"]&&e[a+"_module"].context_module
if(!e[a+"_item"]){o.title=o.title||o.name
"unpublished"===o.workflow_state&&(o.title+=" ("+r.t("draft","Draft")+")")
o.text="previous"==a?r.t("buttons.previous_module","Previous Module"):r.t("buttons.next_module","Next Module")
i.addClass("module_button")}i.fillTemplateData({data:o})
e[a+"_item"]?i.attr("href",l.a.replaceTags(t.find(".module_item_url").attr("href"),"id",o.id)):i.attr("href",l.a.replaceTags(t.find(".module_url").attr("href"),"id",o.id)+"/items/"+("previous"===a?"last":"first"))}else i.hide()})
t.show()
l()(window).resize()}})
else{var _=l()("#sequence_footer")
if(_.length){var g=l()(_[0])
Promise.all([a.e(6),a.e(67),a.e(577)]).then(a.bind(null,"/j35")).then(()=>{g.moduleSequenceFooter({courseID:g.attr("data-course-id"),assetType:g.attr("data-asset-type"),assetID:g.attr("data-asset-id")})})}}l()("#right-side").delegate(".more_link","click",function(e){var t=l()(this)
var a=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&a.first().find(":tabbable:first").focus()
return false})
l()("#right-side").on("click",".disable-todo-item-link",function(e){e.preventDefault()
var t=l()(this).parents("li, div.topic_message").last()
var a=l()(this).closest(".to-do-list > li").prev()
var n=a.find(".disable-todo-item-link").length&&a.find(".disable-todo-item-link")||l()(".todo-list-header")
var i=l()(this).data("api-href")
var o=l()(this).data("flash-message")
function r(e){t.confirmDelete({url:e,noMessage:true,success:function(){o&&l.a.flashMessage(o)
l()(this).slideUp(function(){l()(this).remove()
n.focus()})}})}r(i)})
setTimeout(function(){l()("#content a:external,#content a.explicit_external_link").not(".external").each(function(){var e=r.t("titles.external_link","Links to an external site.")
var t=l()('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append(l()('<span class="screenreader-only"/>').text(e))
l()(this).not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon").addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+l()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)})},2e3)})},cuKi:function(e,t,a){"use strict"
a.d(t,"a",function(){return o})
var n=a("GLiE")
var i=a.n(n)
function o(e){return i()(e).reduce((e,t,a)=>{let n=a.split("][")
let o=n.length-1
if(/\[/.test(n[0])&&/\]$/.test(n[o])){n[o]=n[o].replace(/\]$/,"")
n=n.shift().split("[").concat(n)
o=n.length-1}else o=0
if(o){let i=0
let r=e
while(i<=o){a=""===n[i]?r.length:n[i]
r=r[a]=i<o?r[a]||(n[i+1]&&isNaN(n[i+1])?{}:[]):t
i++}}else i.a.isArray(e[a])?e[a].push(t):null!=e[a]?e[a]=[e[a],t]:e[a]=t
return e},{})}},fy7k:function(e,t,a){"use strict"
var n=a("u7Gu")
var i=a("pQTu")
var o=a("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"لا يمكن عرض هذا المستند في Canvas.","document_preview_processing":"تجري معالجة معاينة المستند حاليًا. الرجاء إعادة المحاولة لاحقًا."}}},"cy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Does dim modd dangos y ddogfen hon yn Canvas.","document_preview_processing":"Mae’r rhagolwg o’r ddogfen wrthi’n cael ei brosesu ar hyn o bryd. Rhowch gynnig arall arni rywbryd eto."}}},"da":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokument kan ikke vises i Canvas.","document_preview_processing":"Dokumentets forhåndsvisning bliver behandlet i øjeblikket. Prøv igen senere."}}},"el":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Αυτό το έγγραφο δεν μπορεί να εμφανιστεί μέσα στο Canvas.","document_preview_processing":"\\u003cmrk mid=\\"5994\\" mtype=\\"seg\\"\\u003eΗ προεπισκόπηση του εγγράφου δημιουργείται αυτή τη στιγμή.\\u003c/mrk\\u003e \\u003cmrk mid=\\"5995\\" mtype=\\"seg\\"\\u003eΠαρακαλώ δοκιμάστε ξανά αργότερα.\\u003c/mrk\\u003e"}}},"en-AU":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-AU-x-unimelb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB-x-ukhe":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"fa":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"این سند نمی تواند در کانواس نمایش داده شود.","document_preview_processing":"پیش نمایش سند در حال پردازش است. لطفا بعدا دوباره تلاش کنید."}}},"he":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"מסמך זה לא ניתן להצגה בתוך קנבס.","document_preview_processing":"התצוגה המוקדמת של מסמך זה מעובדת כעת. יש לנסות מאוחר יותר"}}},"hu":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ezt a dokumentumot nem lehet megtekinteni a Canvasban. ","document_preview_processing":"A dokumentum előnézete feldolgozás alatt. Kérjük, próbálja újra később."}}},"hy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Այս փաստաթուղթը չի կարող ցուցադրվել Canvas-ի ներսում:","document_preview_processing":"Փաստաթղթի նախնական դիտումը այժմ մշակման փուլում է: Փորձեք կրկին ավելի ուշ:"}}},"is":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ekki hægt að sýna þetta skjal í Canvas.","document_preview_processing":"Forskoðun skjala er í vinnslu. Vinsamlegast reyndu aftur seinna."}}},"ko":{"jquery_doc_previews":{"errors":{"document_preview_processing":"문서 미리 보기를 처리 중입니다. 나중에 다시 시도하시기 바랍니다."}}},"mi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"E kore e taea te whakaatu i tēnei tuhinga i roto i Canvas.","document_preview_processing":"Kei te tukatuka i tēnei wā te arokite tuhinga. Tēnā koa ngana anō i muri mai."}}},"nn":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikkje visast i Canvas.","document_preview_processing":"Førehandsvisinga av dokumentet blir behandla no. Prøv på nytt seinare."}}},"pt":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Não é possível visualizar este documento dentro do Canvas.","document_preview_processing":"A pré-visualização do documento está a ser processada. É favor, tentar novamente mais tarde."}}},"ru":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Этот документ нельзя отобразить внутри Canvas.","document_preview_processing":"Предварительный просмотр документа в данный момент обрабатывается. Попробуйте еще раз позже."}}},"tr":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Bu belge Canvas içinde görüntülenemez.","document_preview_processing":"Döküman ön izlemesi hala işleniyor. Lütfen daha sonra tekrar deneyin."}}}}'))
a("jQeR")
a("0sPK")
var r=i["default"].scoped("jquery_doc_previews")
var s=a("ouhR")
var l=a.n(s)
a("GLiE")
var u=a("5Ky4")
a("jYyc")
var m=a("hiU6")
a("JI1W")
a("7LJr")
var d=a("Vj0+")
var c={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
l.a.filePreviewsEnabled=function(){return!(n["a"].disableCrocodocPreviews&&n["a"].disableGooglePreviews)}
l.a.isPreviewable=function(e,t){return l.a.filePreviewsEnabled()&&c[e]&&(!t||!n["a"]["disable"+l.a.capitalize(t)+"Previews"]&&c[e][{scribd:0,google:1}[t]])}
l.a.fn.loadDocPreview=function(e){return this.each(function(){var t=l()(this),a=l.a.extend({width:"100%",height:"400px"},t.data(),e)
function i(e){if(a.attachment_view_inline_ping_url){l.a.ajaxJSON(a.attachment_view_inline_ping_url,"POST",{},function(){},function(){})
Object(m["a"])("Doc Previews",e,JSON.stringify(a,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!n["a"].disableCrocodocPreviews&&a.crocodoc_session_url){const e=Object(d["a"])(a.crocodoc_session_url)
var o=l()("<iframe/>",{src:e,width:a.width,height:a.height,allowfullscreen:"1",id:a.id})
o.appendTo(t)
o.load(function(){i("crocodoc")
l.a.isFunction(a.ready)&&a.ready()})}else if(a.canvadoc_session_url){const e=l()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
e.appendTo(t)
const n=void 0!==a.iframe_min_height?a.iframe_min_height:"800px"
const r=Object(d["a"])(a.canvadoc_session_url)
o=l()("<iframe/>",{src:r,width:a.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":n},id:a.id})
o.appendTo(e)
o.load(function(){i("canvadocs")
l.a.isFunction(a.ready)&&a.ready()})}else if(!n["a"].disableGooglePreviews&&(!a.mimetype||l.a.isPreviewable(a.mimetype,"google"))&&a.attachment_id||a.public_url){var s=function(){var e="//docs.google.com/viewer?"+l.a.param({embedded:true,url:a.public_url})
a.ajax_valid&&!a.ajax_valid()||l()('<iframe src="'+Object(u["a"])(e)+'" height="'+a.height+'" width="100%" />').appendTo(t).load(function(){i("google")
l.a.isFunction(a.ready)&&a.ready()})}
if(a.public_url)s()
else if(a.attachment_id){var c="/api/v1/files/"+a.attachment_id+"/public_url.json"
a.submission_id&&(c+="?"+l.a.param({submission_id:a.submission_id}))
t.loadingImage()
l.a.ajaxJSON(c,"GET",{},function(e){t.loadingImage("remove")
if(e&&e.public_url){l.a.extend(a,e)
s()}})}}else l.a.filePreviewsEnabled()&&(a.attachment_preview_processing?t.html("<p>"+Object(u["a"])(r.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(u["a"])(r.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))})}},hX7l:function(e,t,a){"use strict"
a.d(t,"a",function(){return r})
var n=a("ODXe")
var i=a("cuKi")
const o={true:true,false:false,null:null}
function r(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return r(e,...arguments)}const a={}
e.replace(/\+/g," ").split("&").forEach(e=>{let i=e.split("="),r=Object(n["a"])(i,2),s=r[0],l=r[1]
s=decodeURIComponent(s)
l=decodeURIComponent(l)
t&&(l=l&&!isNaN(l)?+l:"undefined"===l?void 0:void 0!==o[l]?o[l]:l)
a[s]=l})
return Object(i["a"])(a)}},rnoQ:function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"اختصارات لوحة المفاتيح"}}},"cy":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Bysellau Hwylus"}}},"da":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Genvejstaster"}}},"el":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Συντομεύσεις πληκτρολογίου"}}},"en-AU":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-AU-x-unimelb":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-CA":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-GB":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"en-GB-x-ukhe":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"fa":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"میانبرهای صفحه کلید"}}},"he":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"קיצורי מקלדת"}}},"hu":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Billentyűparancsok"}}},"hy":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Արագ հասանելիության ստեղներ"}}},"is":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Flýtilyklar"}}},"ko":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"키보드 단축키"}}},"mi":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Pokatata papapātuhi"}}},"nn":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Hurtigtastar"}}},"pt":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Atalhos de teclado"}}},"ru":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Клавиши быстрого доступа"}}},"tr":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Klavye Kısayolları"}}}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("KeyboardNavDialog")
var r=a("FIFq")
var s=a("ouhR")
var l=a.n(s)
a("YGE8")
var u=function(e,t){for(var a in t)m.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},m={}.hasOwnProperty
t["a"]=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.el="#keyboard_navigation"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
t.prototype.render=function(e){this.$el.html(e)
return this}
t.prototype.bindOpenKeys=function(){var e
e=null
return l()(document).keydown((t=this,function(a){var n
n=188===a.keyCode||191===a.keyCode
if(n&&!l()(a.target).is(":input")){a.preventDefault()
if(!t.$el.is(":visible")){e=document.activeElement
return t.$el.dialog({title:o.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){l()("li",this).attr("tabindex","")
if(e)return l()(e).focus()}})}t.$el.dialog("close")
if(e)return l()(e).focus()}}))
var t}
return t}(r["View"])}}])

//# sourceMappingURL=110-c-93031953d3.js.map