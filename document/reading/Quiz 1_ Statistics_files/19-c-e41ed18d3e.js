(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[19],{"0crz":function(e,t,i){"use strict"
var r=i("ouhR")
var s=i.n(r)
var a=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
i("jQeR")
i("0sPK")
var o=a["default"].scoped("lib.text_helper")
var l=i("5Ky4")
var c,u,d
c="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+s.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,i,r,s,a,n,o,h
s=[]
a=[]
e=e.replace(u,function(e,t){var i
a.push(e===c?c:(i=e,"http://"===i.slice(0,7)||"https://"===i.slice(0,8)||(i="http://"+i),s.push(i),"<a href='"+Object(l["a"])(i)+"'>"+Object(l["a"])(e)+"</a>"))
return c})
e=Object(l["a"])(e)
e=e.replace(new RegExp(c,"g"),function(e,t){return a.shift()})
e=e.replace(/\n/g,"<br />\n")
n=[]
o=[]
h=e.split("\n")
for(t=0,i=h.length;t<i;t++){r=h[t]
if(r.match(/^(&gt;|>)/))o.push(r)
else{o.length&&n.push(d.quoteClump(o))
o=[]
n.push(r)}}o.length&&n.push(d.quoteClump(o))
return n.join("\n")},delimit:function(e){var t,i,r,s,a
if(isNaN(e))return String(e)
a=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
i=Math.floor(t)
s=t===i?"":String(t).replace(/^\d+\./,".")
while(i>=1e3){r=String(i).replace(/\d+(\d\d\d)$/,",$1")
i=Math.floor(i/1e3)
s=r+s}return a+String(i)+s},truncateText:function(e,t){var i,r,s,a,n,l
null==t&&(t={})
r=null!=(a=t.max)?a:30
i=o.t("ellipsis","...")
l=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=r)return e
n=0
while(true){s=e.indexOf(l,n+1)
if(s<0||s>r-i.length)break
n=s}n||(n=r-i.length)
return e.substring(0,n)+i},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},B1vq:function(e,t,i){"use strict"
var r=i("ouhR")
var s=i.n(r)
i("s/PJ")
i("c6Pp")
s.a.fn.scrollToVisible=function(e){var t={}
var i=s()(e)
if(0===i.length)return
var r=i.offset(),a=i.outerWidth(),n=i.outerHeight(),o=r.top,l=o+n,c=r.left,u=c+a,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),_=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){var f=s()("body").offset()
this.each(function(){try{f=s()(this).offset()
return false}catch(e){}})
o-=f.top
l-=f.top
c-=f.left
u-=f.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){_=s()(window).height()
s()("#wizard_box:visible").length>0&&(_-=s()("#wizard_box:visible").height())
g=s()(window).width()
o-=d
c-=h
l-=d
u-=h}o<0||_<n&&l>_?t.scrollTop=o+d:l>_&&(t.scrollTop=l+d-_+20)
c<0?t.scrollLeft=c+h:u>g&&(t.scrollLeft=u+h-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},iklP:function(e,t,i){"use strict"
var r=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"findLinkForService":{"buttons":{"search":"بحث","search_by_tag":"بحث حسب العلامة"},"errors":{"search_failed":"فشل البحث، الرجاء المحاولة مرة أخرى."},"no_description":"بلا وصف","no_results_found":"لم يتم العثور على نتائج","status":{"diigo_search_throttling":"يقوم Diigo بتقييد المستخدمين إلى بحث واحد كل عشر ثوان.  يرجى الانتظار...","searching":"جارٍ البحث..."},"titles":{"bookmark_search":"البحث في الإشارات المرجعية: %{service_name}"}}},"cy":{"findLinkForService":{"buttons":{"search":"Chwilio","search_by_tag":"Chwilio yn ôl tag"},"errors":{"search_failed":"Mae\'r broses chwilio wedi methu, rhowch gynnig arall arni."},"no_description":"Dim disgrifiad","no_results_found":"Heb ddod o hyd i ganlyniadau","status":{"diigo_search_throttling":"Mae Diigo yn cyfyngu defnyddwyr i chwilio dim ond unwaith bob deg eiliad.  Arhoswch funud...","searching":"Wrthi\'n chwilio..."},"titles":{"bookmark_search":"Chwilio am nod tudalen: %{service_name}"}}},"da":{"findLinkForService":{"buttons":{"search":"Søg","search_by_tag":"Søg efter tag"},"errors":{"search_failed":"Søgning mislykkede, prøv igen."},"no_description":"Ingen beskrivelse","no_results_found":"Der blev ikke fundet resultater","status":{"diigo_search_throttling":"Diigo begrænser brugerne til en søgning hvert tiende sekund.  Vent venligst ...","searching":"Søger ..."},"titles":{"bookmark_search":"Bogmærkesøgning: %{service_name}"}}},"el":{"findLinkForService":{"buttons":{"search":"Αναζήτηση","search_by_tag":"Αναζήτηση βάσει Ετικέτας"},"errors":{"search_failed":"Η αναζήτηση απέτυχε, παρακαλώ δοκιμάστε ξανά."},"no_description":"Δεν υπάρχει περιγραφή","no_results_found":"Δεν βρέθηκαν αποτελέσματα","status":{"diigo_search_throttling":"\\u003cmrk mid=\\"1417\\" mtype=\\"seg\\"\\u003eΤο Diigo περιορίζει τους χρήστες σε μία αναζήτηση ανά δέκα δευτερόλεπτα.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1418\\" mtype=\\"seg\\"\\u003eΠαρακαλώ περιμένετε...\\u003c/mrk\\u003e","searching":"Αναζήτηση..."},"titles":{"bookmark_search":"\\u003cmrk mid=\\"1431\\" mtype=\\"seg\\"\\u003eΑναζήτηση Σελιδοδείκτη:\\u003c/mrk\\u003e \\u003cmrk mid=\\"1432\\" mtype=\\"seg\\"\\u003e%{service_name}\\u003c/mrk\\u003e"}}},"en-AU":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by Tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No Results Found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-CA":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by Tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No Results Found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-GB":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No results found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"en-GB-x-ukhe":{"findLinkForService":{"buttons":{"search":"Search","search_by_tag":"Search by tag"},"errors":{"search_failed":"Search failed, please try again."},"no_description":"No description","no_results_found":"No results found","status":{"diigo_search_throttling":"Diigo limits users to one search every ten seconds.  Please wait...","searching":"Searching..."},"titles":{"bookmark_search":"Bookmark Search: %{service_name}"}}},"fa":{"findLinkForService":{"buttons":{"search":"جستجو","search_by_tag":"جستجو بر اساس برچسب"},"errors":{"search_failed":"جستجو انجام نشد، لطفا دوباره سعی کنید."},"no_description":"شرح موجود نیست","no_results_found":"نتیجه ای یافت نشد","status":{"diigo_search_throttling":"Diigo کاربران را به یک جستجو در هر ده ثانیه محدود می کند. لطفا صبر کنید...","searching":"درحال جستجو..."},"titles":{"bookmark_search":"نشانه گذاری جستجو: %{service_name}"}}},"he":{"findLinkForService":{"buttons":{"search":"חיפוש","search_by_tag":"חיפוש לפי תגיות"},"errors":{"search_failed":"החיפוש נכשל, יש לנסות שוב"},"no_description":"אין תיאור","no_results_found":"לא נמצאו תוצאות","status":{"diigo_search_throttling":"דייגו מגביל משתמשים לחיפוש אחד כל עשר שניות. נא להמתין...","searching":"מחפש..."},"titles":{"bookmark_search":"סימון מאפייני החיפוש %{service_name} לגישה ישירה"}}},"hu":{"findLinkForService":{"buttons":{"search":"Keresés","search_by_tag":"Keresés címke alapján"},"errors":{"search_failed":"A keresés sikertelen, kérjük, próbálja újra. "},"no_description":"Nincs leírás","no_results_found":"Nincs találat","status":{"diigo_search_throttling":"A Diigo korlátozása alapján tíz másodpercenként egy keresést lehet végrehajtani. Kérjük, várjon...","searching":"Keresés..."},"titles":{"bookmark_search":"Könyvjelző keresése: %{service_name}"}}},"hy":{"findLinkForService":{"buttons":{"search":"Որոնել","search_by_tag":"Որոնում ըստ պիտակի"},"errors":{"search_failed":"Որոնումը չհաջողվեց, փորձեք կրկին:"},"no_description":"Նկարագրություն չկա","no_results_found":"Ոչ մի արդյունք չի գտնվել","status":{"diigo_search_throttling":"Diigo-ն օգտատերերի համար սահմանել է որոնում տասը վայրկյան պարբերականությամբ:  Խնդրում ենք սպասել... ","searching":"Որոնումը ընթացքում է..."},"titles":{"bookmark_search":"Էջանիշի որոնում՝ %{service_name}"}}},"is":{"findLinkForService":{"buttons":{"search":"Leita","search_by_tag":"Leita eftir merki"},"errors":{"search_failed":"Leit tókst ekki, reyndu aftur."},"no_description":"Engin lýsing","no_results_found":"Engar niðurstöður fundust","status":{"diigo_search_throttling":"Diigo takmarkar notendur við eina leit á hverjum tíu sekúndum.  Augnablik...","searching":"Leita..."},"titles":{"bookmark_search":"Bókamerkjaleit: %{service_name}"}}},"ko":{"findLinkForService":{"buttons":{"search":"검색","search_by_tag":"태그로 검색"},"errors":{"search_failed":"검색에 실패했습니다. 다시 시도하시기 바랍니다."},"no_description":"설명 없음","no_results_found":"찾은 결과 없음","status":{"diigo_search_throttling":"Diigo는 매 10초마다 한 번의 검색만 허용합니다. 기다려 주십시오...","searching":"검색 중..."},"titles":{"bookmark_search":"북마크 검색: %{service_name}"}}},"mi":{"findLinkForService":{"buttons":{"search":"Rapu","search_by_tag":"Rapu i te Tūtohu"},"errors":{"search_failed":"I rahua te rapunga, tēnā koa ngana anō koa."},"no_description":"Kāore he whakaahuatanga","no_results_found":"Kaore he hua","status":{"diigo_search_throttling":"Diigo aukati ai i ngā kaiwhakamahi ki te rapu ia tekau hēkona i te wā  Tēnā koa tatari ....","searching":"Rapu ana ..."},"titles":{"bookmark_search":"Pukatohu Rapu %{service_name}"}}},"nn":{"findLinkForService":{"buttons":{"search":"Søk","search_by_tag":"Søk etter tag"},"errors":{"search_failed":"Søket mislukkast, prøv på nytt seinare."},"no_description":"Inga skildring","no_results_found":"Finn ikkje resultat","status":{"diigo_search_throttling":"Med Diigo er du avgrensa til eit søk kvart tiande sekund. Vent...","searching":"Søker..."},"titles":{"bookmark_search":"Bokmerk søket: %{service_name}"}}},"pt":{"findLinkForService":{"buttons":{"search":"Pesquisar","search_by_tag":"Pesquisar por tag"},"errors":{"search_failed":"Falha na pesquisa, tente novamente."},"no_description":"Sem descrição","no_results_found":"Nenhum resultado encontrado","status":{"diigo_search_throttling":"O Diigo limita os utilizadores a uma pesquisa a cada dez segundos.  É favor aguardar...","searching":"A pesquisar..."},"titles":{"bookmark_search":"Pesquisa de Bookmark: %{service_name}"}}},"ru":{"findLinkForService":{"buttons":{"search":"Поиск","search_by_tag":"Поиск по тегу"},"errors":{"search_failed":"Сбой поиска, повторите попытку"},"no_description":"Описание отсутствует","no_results_found":"Результаты не найдены","status":{"diigo_search_throttling":"Diigo позволяет пользователям выполнять один поиск раз в десять секунд.  Подождите...","searching":"Идет поиск..."},"titles":{"bookmark_search":"Сделать закладку для поиска: %{service_name}"}}},"tr":{"findLinkForService":{"buttons":{"search":"Ara","search_by_tag":"Etikete göre Ara"},"errors":{"search_failed":"Arama işlemi başarısız, lütfen tekrar deneyin."},"no_description":"Açıklama Yok","no_results_found":"Hiç Sonuç Bulunamadı","status":{"diigo_search_throttling":"Diigo kullanıcıları her 10 saniyede bir arama yapabilecek şekilde sınırlıyor. Lütfen bekleyiniz...","searching":"Aranıyor..."},"titles":{"bookmark_search":"Yer İmi Arama: %{service_name}"}}}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("findLinkForService")
var n=i("ouhR")
var o=i.n(n)
var l=i("5Ky4")
var c=i("0crz")
i("jYyc")
i("Z+Ib")
i("YGE8")
i.d(t,"b",function(){return u})
i.d(t,"a",function(){return h})
function u(e,t,i){o.a.isArray(e)||(e=[e])
let r="/services?service_types=".concat(e.join(","))
o.a.ajaxJSON(r,"GET",{},function(e){t&&t(e)},function(e){i&&i(e)})}let d
function h(e,t){let i=o()("#instructure_bookmark_search")
if(!i.length){i=o()("<div id='instructure_bookmark_search'/>")
i.append("".concat("<form id='bookmark_search_form' style='margin-bottom: 5px;'><img src='/images/blank.png'/>&nbsp;&nbsp;<input type='text' class='query' style='width: 230px;'/><button class='btn search_button' type='submit'>").concat(Object(l["a"])(a.t("buttons.search","Search")),"</button></form>"))
i.append("<div class='results' style='max-height: 200px; overflow: auto;'/>")
i.find("form").submit(function(t){t.preventDefault()
t.stopPropagation()
let r=new Date
if("diigo"==e&&d&&r-d<15e3){setTimeout(function(){i.find("form").submit()},15e3-(r-d))
i.find(".results").empty().append(Object(l["a"])(a.t("status.diigo_search_throttling","Diigo limits users to one search every ten seconds.  Please wait...")))
return}i.find(".results").empty().append(Object(l["a"])(a.t("status.searching","Searching...")))
d=new Date
let s=i.find(".query").val()
let n=o.a.replaceTags(i.data("reference_url"),"query",s)
o.a.ajaxJSON(n,"GET",{},function(e){i.find(".results").empty()
e.length||i.find(".results").append(Object(l["a"])(a.t("no_results_found","No Results Found")))
for(let t in e){e[t].short_title=e[t].title
e[t].title==e[t].description&&(e[t].short_title=c["a"].truncateText(e[t].description,{max:30}))
o()("<div class='bookmark'/>").appendTo(i.find(".results")).append(o()('<a class="bookmark_link" style="font-weight: bold;"/>').attr({href:e[t].url,title:e[t].title}).text(e[t].short_title)).append(o()("<div style='margin: 5px 10px; font-size: 0.8em;'/>").text(e[t].description||a.t("no_description","No description")))}},function(){i.find(".results").empty().append(Object(l["a"])(a.t("errors.search_failed","Search failed, please try again.")))})})
i.delegate(".bookmark_link","click",function(e){e.preventDefault()
let r=o()(this).attr("href")
let s=o()(this).attr("title")||o()(this).text()
i.dialog("close")
t({url:r,title:s})})}i.find(".search_button").text("delicious"==e?a.t("buttons.search_by_tag","Search by Tag"):a.t("buttons.search","Search"))
i.find("form img").attr("src","/images/".concat(e,"_small_icon.png"))
let r="/search/bookmarks?q=%7B%7B+query+%7D%7D&service_type=%7B%7B+service_type+%7D%7D"
r=o.a.replaceTags(r,"service_type",e)
i.data("reference_url",r)
i.find(".results").empty().end().find(".query").val("")
i.dialog({title:a.t("titles.bookmark_search","Bookmark Search: %{service_name}",{service_name:o.a.titleize(e)}),open(){i.find("input:visible:first").focus().select()},width:400})}},mykf:function(e,t,i){"use strict"
const r=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=r},p6Wi:function(e,t,i){"use strict"
var r=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"}}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("instructure_misc_plugins")
var n=i("ouhR")
var o=i.n(n)
var l=i("5Ky4")
var c=i("JD5e")
i("jYyc")
i("YGE8")
i("B1vq")
i("s/PJ")
o.a.fn.setOptions=function(e,t){var i=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(function(e){var t=Object(l["a"])(e)
i+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(i))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){var e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
var i=t.innerWidth()
e.css("overflow-y","scroll")
var r=t.innerWidth()
e.remove()
return i-r}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
var t=this
var i=null
var r=true
e.noMessage=e.noMessage||e.no_message
var s=function(){if(!r){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",function(){t.remove()})})
var s=e.prepareData?e.prepareData.call(t,i):{}
s.authenticity_token=Object(c["a"])()
o.a.ajaxJSON(e.url,"DELETE",s,function(i){e.success.call(t,i)},function(i,r,s,a){e.error&&o.a.isFunction(e.error)?e.error.call(t,i,r,s,a):o.a.ajaxJSON.unhandledXHRs.push(r)})}else{e.success||(e.success=function(){t.fadeOut("slow",function(){t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){r=false
var n="object"==typeof e.dialog?e.dialog:{}
i=o()(e.message).dialog(o.a.extend({},{modal:true,close:s,buttons:[{text:a.t("#buttons.cancel","Cancel"),click:function(){o()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){r=true
o()(this).dialog("close")}}]},n))
return}r=confirm(e.message)}s()}
o.a.fn.confirmDelete.defaults={message:a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){var t=(window.location.search||"").replace(/^\?/,"").split("&")
var i=null
for(var r=0;r<t.length;r++){var s=t[r]
s&&0===s.indexOf("hash=")&&(i="#"+s.substring(5))}this.bind("document_fragment_change",e)
var a=this
var n=false
for(r=0;r<o.a._checkFragments.fragmentList.length;r++){var l=o.a._checkFragments.fragmentList[r]
l.doc[0]==a[0]&&(n=true)}n||o.a._checkFragments.fragmentList.push({doc:a,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(function(){i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){var e=o.a._checkFragments.fragmentList
for(var t=0;t<e.length;t++){var i=e[t]
var r=i.doc
if(r[0].location.hash!=i.fragment){r.triggerHandler("document_fragment_change",r[0].location.hash)
i.fragment=r[0].location.hash
o.a._checkFragments.fragmentList[t]=i}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){var e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each(function(t){o()(this).showIf(e.call(this))})
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
var t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
var i=this.offset()
e&&e.offset&&(i=e.offset)
var r=this.width()
var s=this.height()
var a=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:r+6,height:s+6,top:i.top-3,left:i.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover(function(){o()(this).stop().fadeOut("fast",function(){o()(this).remove()})})
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",function(){o()(this).remove()}):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",function(){o()(this).remove()})
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){var t=o.a.extend({minHeight:400},e),i=o()(this),r=o()("#wrapper"),s=o()("#main"),a=o()("#not_right_side"),n=o()(window),l=o()(this).add(t.alsoResize)
function c(){l.height(0)
var e=n.height()-(r.offset().top+r.outerHeight())+(s.height()-a.height()),c=Math.max(400,e)
l.height(c)
o.a.isFunction(t.onResize)&&t.onResize.call(i,c)}c()
n.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each(function(){var t=e.minWidth||o()(this).width(),i="",r=o()(this),s=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:r.css("fontSize"),fontFamily:r.css("fontFamily"),fontWeight:r.css("fontWeight"),letterSpacing:r.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(function(){if(i===(i=r.val()))return
s.text(i)
var a=s.width(),n=a+e.comfortZone>=t?a+e.comfortZone:t,o=r.width(),l=n<o&&n>=t||n>t&&n<e.maxWidth
l&&r.width(n)})}
s.insertAfter(r)
o()(this).bind("keyup keydown blur update change",a)})
return this}
o.a}}])

//# sourceMappingURL=19-c-e41ed18d3e.js.map