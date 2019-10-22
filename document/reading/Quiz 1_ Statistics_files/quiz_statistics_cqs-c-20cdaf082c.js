(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[503],{"0M2J":function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("Idbx")
var a=n("b0yZ").default
var r=t.createClass({displayName:"FileUpload",render:i.type.prototype.render,renderLinkButton:function(){return t.DOM.a({className:"btn",href:this.props.quizSubmissionsZipUrl,target:"_blank",style:{marginBottom:"20px",maxWidth:"50%"}},a.t("download_submissions","Download All Files"))}})
return r}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"0dy+":function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("bbfQ")
var a=n("Wx5O")
var r=n("9Bcd")
var s=n("qAhH")
var o=n("6fTz")
var c=n("W/cH")
var d=t.createClass({displayName:"MultipleChoice",render:function(){var e=c(this.props.answers,this.props.participantCount,{questionType:this.props.questionType})
return i(null,t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-top-left"},a({responseCount:this.props.responses,participantCount:this.props.participantCount,questionText:this.props.questionText,position:this.props.position}),t.DOM.div({className:"question-text","aria-hidden":true,dangerouslySetInnerHTML:{__html:this.props.questionText}})),t.DOM.div({className:"col-sm-4 question-top-right"},s({discriminationIndex:this.props.discriminationIndex,topStudentCount:this.props.topStudentCount,middleStudentCount:this.props.middleStudentCount,bottomStudentCount:this.props.bottomStudentCount,correctTopStudentCount:this.props.correctTopStudentCount,correctMiddleStudentCount:this.props.correctMiddleStudentCount,correctBottomStudentCount:this.props.correctBottomStudentCount}))),t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-bottom-left"},o({answers:this.props.answers})),t.DOM.div({className:"col-sm-4 question-bottom-right"},r({correctResponseRatio:e}))))}})
return d}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"0qTZ":function(e,t,n){var i
i=function(e){var t=n("pgP2")
var i=n("EUYw")
var a=new i(t)
var r=n("FIFq")
r.ajax=function(e){return a.request(e)}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"24ko":function(e,t,n){var i
i=function(e){var t=n("mfk2")
var i=n("tz+7")
var a=n("pgP2")
var r=n("dqvR")
var s=n("8seL")
var o=new r([])
var c=new t("statistics",{getInitialState:function(){return{loading:false,stats_can_load:true}},load:function(){if(!a.quizStatisticsUrl)return a.onError('Missing configuration parameter "quizStatisticsUrl".')
this.setState({loading:true})
return o.fetch({success:this.checkForStatsNoLoad.bind(this)}).then(function(e){this.populate(e)
this.setState({loading:false})}.bind(this))},checkForStatsNoLoad:function(e,t){null==t&&this.setState({stats_can_load:false})},populate:function(e){s(o,e)
this.emitChange()},get:function(){var e
o.length&&(e=o.first().toJSON())
return e},isLoading:function(){return this.state.loading},canBeLoaded:function(){return this.state.stats_can_load},getSubmissionStatistics:function(){var e=this.get()
if(e)return e.submissionStatistics},getQuestionStatistics:function(){var e=this.get()
if(e)return e.questionStatistics},filterForSection:function(e){o.url="all"==e?a.quizStatisticsUrl:a.quizStatisticsUrl+"?section_ids="+e
a.section_ids=e
this.setState({loading:true})
return o.fetch({success:this.checkForStatsNoLoad.bind(this)}).then(function(e){this.populate(e)
this.setState({loading:false})}.bind(this))},__reset__:function(){o.reset()
return t.prototype.__reset__.call(this)}},i)
return c}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"2n7R":function(e,t,n){var i
i=function(e){var t=n("jV2t").default
var i=n("h9wM")
var a="student_analysis"
var r="item_analysis"
var s=i.friendlyDatetime
var o=i.fudgeDateForProfileTimezone
return{getLabel:function(e){return e===a?t.t("student_analysis","Student Analysis"):e===r?t.t("item_analysis","Item Analysis"):e},getInteractionLabel:function(e){var n
var i=e.reportType
e.isGenerated?i===a?n=t.t("Download student analysis report %{statusLabel}",{statusLabel:this.getDetailedStatusLabel(e)}):i===r&&(n=t.t("Download item analysis report %{statusLabel}",{statusLabel:this.getDetailedStatusLabel(e)})):i===a?n=t.t("Generate student analysis report %{statusLabel}",{statusLabel:this.getDetailedStatusLabel(e)}):i===r&&(n=t.t("Generate item analysis report %{statusLabel}",{statusLabel:this.getDetailedStatusLabel(e)}))
return n},getDetailedStatusLabel:function(e,n){var i,a,r
if(e.generatable)if(e.isGenerated){i=s(o(e.file.createdAt))
r=n?t.t("generation_complete","Report has been generated."):t.t("generated_at","Generated: %{date}",{date:i})}else if(e.isGenerating){a=e.progress.completion
r=a<50?t.t("generation_started","Report is being generated."):a<75?t.t("generation_halfway","Less than half-way to go."):t.t("generation_almost_done","Almost done.")}else r=t.t("generatable","Report has never been generated.")
else r=t.t("non_generatable_report_notice","Report can not be generated for Survey Quizzes.")
return r}}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"3A48":function(e,t,n){var i
i=function(e){var t=n("tz+7")
var i={}
i.regenerateReport=function(e){return t.dispatch("quizReports:regenerate",e).promise}
i.abortReportGeneration=function(e){return t.dispatch("quizReports:abort",e).promise}
i.dismissNotification=function(e){return t.dispatch("notifications:dismiss",e).promise}
return i}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"48pv":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("JLUK").default
var a=n("3rwf")
var r=n("vdby")
var s=n("UrHj")
var o=n("P08n")
var c=n("M81g")
var d=n("nDS/")
var _=n("W11D")
var l=n("pWEL")
var u=n("pzE/")
var p=n("9ypM")
var h=i.t("not_available_abbrev","N/A")
var g=t.createClass({displayName:"Column",render:function(){return t.DOM.th({scope:"col"},_({tagName:"i",className:this.props.icon+" inline"})," ",this.props.label)}})
var m=t.createClass({displayName:"Summary",getDefaultProps:function(){return{quizReports:[],pointsPossible:0,scoreAverage:0,scoreHigh:0,scoreLow:0,scoreStdev:0,durationAverage:0,scores:{}}},ratioFor:function(e){var t=o(this.props.pointsPossible)
return t>0?r(e/t*100,0,0):0},render:function(){var e=this.props.loading
return t.DOM.div({id:"summary-statistics",className:e?"loading":void 0},t.DOM.header({className:"padded"},t.DOM.h2({className:"section-title inline"},i.t("quiz_summary","Quiz Summary")),e&&u(null),t.DOM.div({className:"pull-right inline"},p(null),this.props.quizReports.map(this.renderReport))),t.DOM.table({className:"text-left"},l({tagName:"caption",forceSentenceDelimiter:true},i.t("table_description","Summary statistics for all turned in submissions")),t.DOM.thead(null,t.DOM.tr(null,g({icon:"icon-quiz-stats-avg",label:i.t("mean","Average Score")}),g({icon:"icon-quiz-stats-high",label:i.t("high_score","High Score")}),g({icon:"icon-quiz-stats-low",label:i.t("low_score","Low Score")}),g({icon:"icon-quiz-stats-deviation",label:i.t("stdev","Standard Deviation")}),g({icon:"icon-quiz-stats-time",label:i.t("avg_time","Average Time")}))),t.DOM.tbody(null,t.DOM.tr(null,t.DOM.td({className:"emphasized"},e?h:this.ratioFor(this.props.scoreAverage)+"%"),t.DOM.td(null,e?h:this.ratioFor(this.props.scoreHigh)+"%"),t.DOM.td(null,e?h:this.ratioFor(this.props.scoreLow)+"%"),t.DOM.td(null,e?h:s(r(this.props.scoreStdev,2),2)),e?t.DOM.td({key:"duration"},h):t.DOM.td({key:"duration"},l({forceSentenceDelimiter:true},a.toReadableString(this.props.durationAverage)),_(null,a(this.props.durationAverage)))))),c({key:"chart",scores:this.props.scores,scoreAverage:this.props.scoreAverage,pointsPossible:this.props.pointsPossible}))},renderReport:function(e){e.key="report-"+e.id
return d(e)}})
return m}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"6fTz":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("bljh")
var a=n("GLiE")
var r=n("Yn52")
var s=n("zE8J").default
var o=["other","none"]
var c=t.createClass({displayName:"AnswerTable",propTypes:{answers:t.PropTypes.array.isRequired},getDefaultProps:function(){return{answers:[],barHeight:30,visibilityThreshold:5,maxWidth:150,useAnswerBuckets:false}},buildParams:function(e){return e.map(function(e){return{id:""+e.id,count:e.responses,correct:e.correct||e.full_credit,special:o.indexOf(e.id)>-1,answer:e}})},render:function(){var e=this.buildParams(this.props.answers)
var n=i.max(a.map(e,"count"))
var r=i.scale.linear().domain([n,0]).range([this.props.maxWidth,0])
var o=Math.max(this.props.visibilityThreshold,r(n)/100)
var c={xScale:r,visibilityThreshold:o,maxWidth:this.props.maxWidth,barHeight:this.props.barHeight,useAnswerBuckets:this.props.useAnswerBuckets}
return t.DOM.table({className:"answer-drilldown-table detail-section"},t.DOM.caption({className:"screenreader-only"},s.t("A table of answers and brief statistics regarding student answer choices.")),this.renderTableHeader(),t.DOM.tbody(null,this.renderTableRows(e,c)))},renderTableHeader:function(){var e=this.props.useAnswerBuckets?s.t("Answer Description"):s.t("Answer Text")
return t.DOM.thead({className:"screenreader-only"},t.DOM.tr(null,t.DOM.th({scope:"col"},e),t.DOM.th({scope:"col"},s.t("Number of Respondents")),t.DOM.th({scope:"col"},s.t("Percent of respondents selecting this answer")),t.DOM.th({scope:"col","aria-hidden":true},s.t("Answer Distribution"))))},renderTableRows:function(e,t){return e.map(function(e){return r({key:e.id,datum:e,globalSettings:t})})}})
return c}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"8p1U":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("jV2t").default
var a=n("mbrK")
var r=n("2n7R")
var s=n("3A48")
var o=t.createClass({displayName:"Status",propTypes:{generatable:t.PropTypes.bool,isGenerated:t.PropTypes.bool,file:t.PropTypes.shape({createdAt:t.PropTypes.string}),progress:t.PropTypes.shape({workflowState:t.PropTypes.string,completion:t.PropTypes.number})},getInitialState:function(){return{justBeenGenerated:false}},getDefaultProps:function(){return{generatable:true,file:{},progress:{}}},componentWillReceiveProps:function(e){this.props.isGenerating&&e.isGenerated&&this.setState({justBeenGenerated:true})},render:function(){var e=r.getDetailedStatusLabel(this.props,this.state.justBeenGenerated)
return t.DOM.div({className:"quiz-report-status"},this.props.isGenerating?this.renderProgress(e):e)},renderProgress:function(e){var n=this.props.progress.completion
var r=this.props.progress.workflowState===a.PROGRESS_QUEUED
return t.DOM.div({className:"auxiliary"},t.DOM.p(null,t.DOM.span({className:"screenreader-only",children:e}),t.DOM.span({"aria-hidden":"true"},i.t("generating","Report is being generated...")," ",r&&t.DOM.a({href:"#",onClick:this.cancel},i.t("cancel_generation","Cancel")))),t.DOM.div({className:"progress"},t.DOM.div({className:"bar",style:{width:(n||0)+"%"}})))},cancel:function(){s.abortReportGeneration(this.props.id)}})
return o}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"8seL":function(e,t,n){var i
i=function(){return function(e,t,n){var i,a
2===arguments.length&&(n=true)
i=n?"reset":"add"
a=n?{parse:true}:{parse:true,merge:true}
e[i].call(e,t,a)}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"9Bcd":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("bljh")
var a=n("UzlB")
var r=n("vdby")
var s=n("b0yZ").default
var o=2*Math.PI
var c=[-5,15,15]
var d=function(e,t,n){t.attrTween("d",function(t){var a=i.interpolate(t.endAngle,n)
return function(n){t.endAngle=a(n)
return e(t)}})}
var _=function(){var e=i.select(this)
var t=e.text().split(" ")
e.text("")
for(var n=0;n<t.length;n++){var a=e.append("tspan").text(t[n])
a.attr("x",1).attr("dy",c[n])
n>0&&a.attr("class","subcaption")}}
var l=function(e){return s.t("%{ratio}% answered correctly",{ratio:r(100*e,0)})}
var u=function(e){var t=parseFloat(""+this.textContent)/100
var n=i.interpolate(t,e)
return function(e){this.textContent=l(n(e))
i.select(this).each(_)}}
var p=t.createClass({displayName:"Chart",mixins:[a.mixin],getDefaultProps:function(){return{animeDuration:500}},createChart:function(e,t){var n=t.diameter
var a=n/2
var r=t.correctResponseRatio
var s,c,d
var _=i.select(e).attr("width",a).attr("height",a).attr("aria-hidden",true).append("g").attr("transform","translate("+a+","+a+")")
s=i.svg.arc().innerRadius(a).outerRadius(n/2.5).startAngle(0)
_.append("path").datum({endAngle:o}).attr("class","background").attr("d",s)
c=_.append("path").datum({endAngle:0}).attr("class","foreground").attr("d",s)
d=_.selectAll("text").data([r])
d.enter().append("text").attr("text-anchor","middle").text(l(t.correctResponseRatio))
this.arc=s
this.foreground=c
this.caption=d
this.updateChart(_,t)
return _},updateChart:function(e,t){var n=t.correctResponseRatio
this.foreground.transition().duration(t.animeDuration).call(d.bind(null,this.arc),o*n)
this.caption.datum(n).transition().duration(t.animeDuration).tween("text",u)},render:a.defaults.render})
var h=t.createClass({displayName:"CorrectAnswerDonut",propTypes:{correctResponseRatio:t.PropTypes.number.isRequired},getDefaultProps:function(){return{diameter:120,correctResponseRatio:0,children:[]}},render:function(){return t.DOM.section({className:"correct-answer-ratio-section"},this.transferPropsTo(p()))}})
return h}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"9ypM":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("24ko")
var a=n("pgP2")
var r=n("b0yZ").default
var s=t.createClass({displayName:"SectionLink",handleClick:function(e){e.preventDefault()
i.filterForSection(this.props.sectionId)},render:function(){return t.DOM.li({role:"presentation",onClick:this.handleClick},t.DOM.a({href:"#",id:"toolbar-2",role:"menuitem"},this.props.name))}})
var o=t.createClass({displayName:"SectionSelect",getInitialState:function(){return{sections:[]}},componentDidMount:function(){$.ajax({url:a.courseSectionsUrl,data:{all:true},dataType:"json",cache:false,success:function(e){this.setState({sections:e})}.bind(this)})},render:function(){var e=r.t("Section Filter")
a.section_ids&&"all"!=a.section_ids&&(e=$.grep(this.state.sections,function(e){return e.id==a.section_ids})[0].name)
var n=this.state.sections.map(function(e,t){return s({key:t,sectionId:e.id,name:e.name})})
return t.DOM.div({className:"section_selector inline al-dropdown__container"},t.DOM.a({className:"al-trigger btn",role:"button",href:"#"},e,t.DOM.i({className:"icon-mini-arrow-down","aria-hidden":"true"}),t.DOM.span({className:"screenreader-only"},r.t("Section Filter"))),t.DOM.ul({id:"toolbar-1",className:"al-options",style:{maxHeight:"375px",overflowY:"scroll"},role:"menu",tabIndex:"0","aria-hidden":"true","aria-expanded":"false","aria-activedescendant":"toolbar-2"},s({key:"all",sectionId:"all",name:"All Sections"}),n))}})
return o}.call(t,n,t,e),void 0!==i&&(e.exports=i)},ATho:function(e,t,n){var i
i=function(e){var t=n("mfk2")
var i=n("tz+7")
var a=n("pgP2")
var r=n("mbrK")
var s=n("HbOL")
var o=n("ip4/")
var c=n("8seL")
var d=new s
var _=function(e){var t=document.createElement("iframe")
t.style.display="none"
t.src=e
document.body.appendChild(t)}
var l=[]
return new t("quizReports",{load:function(){var e=this.populate.bind(this)
var t=a.quizReportsUrl
if(!t)return a.onError('Missing configuration parameter "quizReportsUrl".')
return d.fetch({data:{include:["progress","file"],includes_all_versions:a.includesAllVersions}}).then(function(t){e(t,{replace:true,track:true})})},populate:function(e,t){t=t||{}
c(d,e,t.replace)
t.track&&d.where({isGenerating:true}).forEach(this.trackReportGeneration.bind(this))
this.emitChange()},getAll:function(){return d.toJSON()},actions:{generate:function(e,t,n){var i=d.findWhere({reportType:e})
if(i){if(i.get("isGenerating"))return n("report is already being generated")
if(i.get("isGenerated"))return n("report is already generated")}d.generate(e).then(function(e){this.trackReportGeneration(e,true)
t()}.bind(this),n)},regenerate:function(e,t,n){var i=d.get(e)
var a=i.get("progress")
if(!i)return n("no such report")
if(!a)return n("report is not being generated")
if(a.workflowState!==r.PROGRESS_FAILED)return n("report generation is not stuck")
d.generate(i.get("reportType")).then(function(e){this.stopTracking(e.get("id"))
this.trackReportGeneration(e,true)
t()}.bind(this),n)},abort:function(e,t,n){var i=d.get(e)
if(!i)return n("no such quiz report")
if(!i.get("progress"))return n("quiz report is not being generated")
i.destroy({wait:true}).then(function(){this.stopTracking(i.get("id"))
d.add(i)
i.fetch().then(t,n)}.bind(this),n)}},__reset__:function(){d.reset()
l=[]
return t.prototype.__reset__.call(this)},trackReportGeneration:function(e,t){var n,i,a,r
var s=e.get("id")
var c=l.filter(function(e){return e.quizReportId===s})[0]
if(c)return
c={quizReportId:s,autoDownload:t}
l.push(c)
n=this.emitChange.bind(this)
i=e.get("progress").url
a=function(){return o(i,{interval:1e3,onTick:function(t,i){e.set("progress",i)
n()}})}
r=function(){return e.fetch({data:{include:["progress","file"]}})}
a().then(r,r).finally(function(){this.stopTracking(s)
c.autoDownload&&e.get("isGenerated")&&_(e.get("file").url)
n()}.bind(this))},stopTracking:function(e){var t=l.filter(function(t){return t.quizReportId===e})[0]
t&&l.splice(l.indexOf(t),1)}},i)}.call(t,n,t,e),void 0!==i&&(e.exports=i)},G1fS:function(e,t,n){var i=n("wbTt")
var a=[]
var r
i||(i={})
i.onLoad=function(e){r?e():a.push(e)}
e.exports=i},GHgI:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("GLiE")
var a=n("b0yZ").default
var r=n("t0sM")
var s=n("pWEL")
n("W11D")
var o=n("48pv")
var c=n("nDS/")
var d=n("bbfQ")
var _=n("0dy+")
var l=n("elP3")
var u=n("Zhui")
var p=n("Idbx")
var h=n("Obm4")
var g=n("0M2J")
var m=i.extend
var f={multiple_choice_question:_,true_false_question:_,short_answer_question:l,multiple_answers_question:l,numerical_question:l,fill_in_multiple_blanks_question:u,multiple_dropdowns_question:u,matching_question:u,essay_question:p,calculated_question:h,file_upload_question:g}
var b=t.createClass({displayName:"Statistics",mixins:[t.addons.ActorMixin],getDefaultProps:function(){return{quizStatistics:{submissionStatistics:{},questionStatistics:[]},notifications:[]}},render:function(){var e=this.props.quizStatistics
var n=e.submissionStatistics
return this.props.canBeLoaded?t.DOM.div({id:"canvas-quiz-statistics"},s({tagName:"h1"},a.t("title","Quiz Statistics")),r({notifications:this.props.notifications}),t.DOM.section(null,o({pointsPossible:e.pointsPossible,scoreAverage:n.scoreAverage,scoreHigh:n.scoreHigh,scoreLow:n.scoreLow,scoreStdev:n.scoreStdev,durationAverage:n.durationAverage,quizReports:this.props.quizReports,scores:n.scores,loading:this.props.isLoadingStatistics})),t.DOM.section({id:"question-statistics-section"},t.DOM.header({className:"padded"},t.DOM.h2({className:"section-title inline"},a.t("question_breakdown","Question Breakdown"))),this.renderQuestions())):t.DOM.div({id:"canvas-quiz-statistics",className:"canvas-quiz-statistics-noload"},t.DOM.div({id:"sad-panda"},t.DOM.img({src:"/images/sadpanda.svg",alttext:a.t("sad-panda-alttext","Sad things in panda land.")}),t.DOM.p(null,a.t("quiz-stats-noshow-warning","Even awesomeness has limits. We can't render statistics for this quiz, but you can download the reports.")),t.DOM.div({className:"links"},this.renderQuizReports(this.props.quizReports))))},renderQuestions:function(){var e=this.props.isLoadingStatistics
var n=this.props.quizStatistics.questionStatistics
var i=this.props.quizStatistics.submissionStatistics.uniqueCount
return e?t.DOM.p(null,a.t("loading_questions","Question statistics are being loaded. Please wait a while.")):0===n.length?t.DOM.p(null,a.t("empty_question_breakdown","There are no question statistics available.")):t.DOM.div(null,n.map(this.renderQuestion.bind(null,i)))},renderQuizReports:function(){var e=this.props.quizReports
if("undefined"!==typeof e&&null!==e&&e.length)return e.map(this.renderReport)},renderReport:function(e){e.key="report-"+e.id
return c(e)},renderQuestion:function(e,t){var n=f[t.questionType]||d
var i=this.props.quizStatistics
var a=m({},t,{key:"question-"+t.id,participantCount:t.participantCount,speedGraderUrl:i.speedGraderUrl,quizSubmissionsZipUrl:i.quizSubmissionsZipUrl})
return n(a)}})
return b}.call(t,n,t,e),void 0!==i&&(e.exports=i)},HbOL:function(e,t,n){var i
i=function(e){var t=n("FIFq")
var i=n("OP6J")
var a=n("C1us")
var r=n("pgP2")
var s=n("EUYw")
var o=new s(r)
var c=["student_analysis","item_analysis"]
return t.Collection.extend({model:i,url:function(){return r.quizReportsUrl},parse:function(e){return a(e,"quiz_reports")},generate:function(e){return o.request({type:"POST",url:this.url(),data:{quiz_reports:[{report_type:e,includes_all_versions:r.includesAllVersions}],include:["progress","file"]}}).then(function(e){var t=this.add(e,{parse:true,merge:true})
return t[0]}.bind(this))},comparator:function(e){return c.indexOf(e.get("reportType"))}})}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Idbx:function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("bbfQ")
var a=n("Wx5O")
var r=n("b0yZ").default
var s=n("6fTz")
var o=t.createClass({displayName:"Essay",render:function(){this.props
return i(null,t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-top-left"},a({responseCount:this.props.responses,participantCount:this.props.participantCount,questionText:this.props.questionText,position:this.props.position}),t.DOM.div({className:"question-text","aria-hidden":true,dangerouslySetInnerHTML:{__html:this.props.questionText}})),t.DOM.div({className:"col-sm-4 question-top-right"})),t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-bottom-left"},s({answers:this.props.answers,useAnswerBuckets:true}),this.renderLinkButton()),t.DOM.div({className:"col-sm-4 question-bottom-right"})))},renderLinkButton:function(){if(!this.props.speedGraderUrl)return null
return t.DOM.a({className:"btn",href:this.props.speedGraderUrl,target:"_blank",style:{marginBottom:"20px",maxWidth:"50%"}},r.t("speedgrader","View in SpeedGrader"))}})
return o}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Ihsx:function(e,t,n){var i
i=function(e){var t=n("pgP2")
var i=n("p/gX")
var a={}
a.configure=i.configure
a.mount=i.mount
a.isMounted=i.isMounted
a.update=i.update
a.reload=i.reload
a.unmount=i.unmount
a.config=t
return a}.call(t,n,t,e),void 0!==i&&(e.exports=i)},JLUK:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 طالب في القيمة المئوية %{percentile}.","other":"%{count} طلاب في القيمة المئوية %{percentile}."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} الطلاب حصلوا على درجات أعلى من المتوسط أو مساوية للمتوسط. و%{below_average} دون المتوسط. ","avg_time":"متوسط الوقت","chart_title":"مخطط النسب المئوية للدرجات","high_score":"الدرجة المرتفعة","low_score":"الدرجة المنخفضة","mean":"متوسط الدرجات","not_available_abbrev":"لا يوجد","quiz_summary":"ملخص الاختبار","stdev":"الانحراف المعياري","table_description":"ملخص الإحصائيات لكل عمليات الإرسال"}}},"cy":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 myfyriwr yn y ganradd %{percentile}. ","other":"%{count} myfyriwr yn y ganradd %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} myfyriwr wedi sgorio’n uwch, neu wedi cael y sgôr gyfartalog, ac %{below_average} o dan hynny. ","avg_time":"Amser ar Gyfartaledd","chart_title":"Siart canraddau sgôr","high_score":"Sgôr Uchel","low_score":"Sgôr Isel","mean":"Sgôr Gyfartalog","not_available_abbrev":"Amherthnasol","quiz_summary":"Crynodeb Cwis","stdev":"Gwyro safonol","table_description":"Crynodeb o’r ystadegau ar gyfer pob cyflwyniad a roddwyd"}}},"da":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 studerende i percentil %{percentile}. ","other":"%{count} studerende i percentilen %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} studerende klarede sig over eller på gennemsnittet, og %{below_average} under. ","avg_time":"Gennemsnitlig tid","chart_title":"Oversigt over procentvist resultat","high_score":"Højt resultat","low_score":"Lavt resultat","mean":"Gennemsnitligt resultat","not_available_abbrev":"N/A","quiz_summary":"Testoversigt","stdev":"Standardafvigelse","table_description":"Oversigtsstatistik for alle afleverede opgaver"}}},"da-x-k12":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 elev i percentil %{percentile}.","other":"%{count} elever i percentilen %{percentile}."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} elever klarede sig over eller på gennemsnittet, og %{below_average} under.","avg_time":"Gennemsnitlig tid","chart_title":"Oversigt over procentvist resultat","high_score":"Højt resultat","low_score":"Lavt resultat","mean":"Gennemsnitligt resultat","not_available_abbrev":"N/A","quiz_summary":"Quizoversigt","stdev":"Standardafvigelse","table_description":"Oversigtsstatistik for alle afleverede opgaver"}}},"de":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 Student im Perzentil %{percentile}","other":"%{count} Studenten im Perzentil %{percentile}"},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} Studenten erreichten mehr Punkte als oder genauso viele wie der Durchschnitt und %{below_average} erreichten weniger Punkte.","avg_time":"Durchschnittliche Zeit","chart_title":"Punktzahlperzentildiagramm","high_score":"Höchste Punktzahl","low_score":"Niedrigste Punktzahl","mean":"Punktedurchschnitt","not_available_abbrev":"k. A.","quiz_summary":"Quiz-Zusammenfassung","stdev":"Standardabweichung","table_description":"Zusammenfassungsstatistik für alle eingegangenen Abgaben"}}},"el":{"quiz_statistics":{"summary":{"avg_time":"Μέσος Χρόνος","chart_title":"Διάγραμμα εκατοστημορίων βαθμολογίας","high_score":"Υψηλή Βαθμολογία","low_score":"Χαμηλότερη βαθμολόγιση","mean":"Μέσος όρος","not_available_abbrev":"Δεν εφαρμόζεται","quiz_summary":"Περίληψη Κουίζ","stdev":"Τυπική Απόκλιση","table_description":"Ανακεφαλαιωτικά στατιστικά για όλες τις ολοκληρωμένες υποβολές"}}},"en-AU":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student in percentile %{percentile}. ","other":"%{count} students in percentile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} students scored above or at the average, and %{below_average} below. ","avg_time":"Average Time","chart_title":"Score percentiles chart","high_score":"High Score","low_score":"Low Score","mean":"Average Score","not_available_abbrev":"N/A","quiz_summary":"Quiz Summary","stdev":"Standard Deviation","table_description":"Summary statistics for all turned in submissions"}}},"en-CA":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student in percentile %{percentile}. ","other":"%{count} students in percentile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} students scored above or at the average, and %{below_average} below. ","avg_time":"Average Time","chart_title":"Score percentiles chart","high_score":"High Score","low_score":"Low Score","mean":"Average Score","not_available_abbrev":"N/A","quiz_summary":"Quiz Summary","stdev":"Standard Deviation","table_description":"Summary statistics for all turned in submissions"}}},"en-GB":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student in percentile %{percentile}. ","other":"%{count} students in percentile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} students scored above or at the average, and %{below_average} below. ","avg_time":"Average time","chart_title":"Score percentiles chart","high_score":"High score","low_score":"Low score","mean":"Average score","not_available_abbrev":"N/A","quiz_summary":"Quiz summary","stdev":"Standard deviation","table_description":"Summary statistics for all turned in submissions"}}},"es":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 alumno en percentil %{percentile}. ","other":"%{count} alumnos en percentil %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} alumnos que obtuvieron una calificación superior u obtuvieron una calificación promedio y %{below_average} obtuvieron calificaciones inferiores. ","avg_time":"Tiempo promedio","chart_title":"Tabla de puntaje por porcentajes","high_score":"Calificación alta","low_score":"Calificación baja","mean":"Puntaje promedio","not_available_abbrev":"N/D","quiz_summary":"Resumen de la evaluación","stdev":"Desviación estándar","table_description":"Todos los resúmenes de estadísticas se han convertido en presentaciones"}}},"fa":{"count_students_in_percentile_percentile_d0adecfe":{"one":"%{count} دانشجو در %{percentile} درصد.","other":"%{count} دانشجو در %{percentile} درصد."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} دانشجو بیشتر یا مساوی میانگین و %{below_average} دانشجو کمتر از میانگین نمره گرفته‌اند.","avg_time":"میانگین زمان","chart_title":"نمودار درصدهای نمره","high_score":"نمره بالا","low_score":"نمره پایین","mean":"میانگین نمره","not_available_abbrev":"موجود نیست","quiz_summary":"خلاصه آزمون","stdev":"انحراف معیار","table_description":"آمار خلاصه برای همه موردهای ارسالی تحویل داده شده"}}},"fr":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 élève dans le centile %{percentile}. ","other":"%{count} élèves dans le centile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} élèves ont eu la moyenne ou plus et %{below_average} ont eu un score inférieur. ","avg_time":"Temps moyen","chart_title":"Graphique des centiles ","high_score":"Bonne note","low_score":"Note faible","mean":"Note moyenne","not_available_abbrev":"NA","quiz_summary":"Synthèse du questionnaire","stdev":"Écart-type","table_description":"Récapitulatif des statistiques pour tous les envois remis"}}},"fr-CA":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 étudiant dans le centile %{percentile}. ","other":"%{count} étudiants dans le centile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} étudiants sont dans la moyenne ou au-dessus, et %{below_average} sont en dessous.","avg_time":"Temps moyen","chart_title":"Graphique des centiles ","high_score":"Bonne note","low_score":"Note faible","mean":"Note moyenne","not_available_abbrev":"N/D","quiz_summary":"Synthèse du questionnaire","stdev":"Écart-type","table_description":"Récapitulatif des statistiques pour tous les envois remis"}}},"he":{"count_students_in_percentile_percentile_d0adecfe":{"one":"תלמיד אחד באחוזון %{percentile}","other":"%{count} תלמידים באחוזון %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} תלמידים קיבלו ציון השווה או גבוה מהממצוע ואילו %{below_average} קיבלו נמוך יותר. ","avg_time":"זמן ממוצע","chart_title":"תרשים עשירונים של הציונים","high_score":"ציון גבוה","low_score":"ציון נמוך","mean":"ציון ממוצע","not_available_abbrev":"N/A","quiz_summary":"סיכום הבוחן","stdev":"סטיית תקן","table_description":"סיכום סטטיסטי לכל אלו שהגישו"}}},"ht":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 elèv an pousantaj %{percentile}. ","other":"%{count} elèv an pousantaj %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} elèv yo fè mwayèn nan oswa plis ke sa, e %{below_average} pi ba. ","avg_time":"Tan Mwayen","chart_title":"Tablo pousantaj nòt","high_score":"Nòt Elve","low_score":"Nòt Fèb","mean":"Nòt Mwayen","not_available_abbrev":"N/A","quiz_summary":"Rezime Quiz","stdev":"Devyasyon Estanda","table_description":"Rezime estatistik pou tout soumisyon ki soumèt yo"}}},"hu":{"quiz_statistics":{"summary":{"avg_time":"Átlagos idő","chart_title":"Diagram az eredmények percentilisek szerinti ábrázolására","high_score":"Legmagasabb pontszám ","low_score":"Legalacsonyabb pontszám ","mean":"Átlagpontszám ","not_available_abbrev":"N/A","quiz_summary":"Kvízösszegzés","stdev":"Szórás","table_description":"Összefoglaló statisztika az összes beadott feladatra"}}},"hy":{"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} ունկնդիրներ ստացել են միջին և միջինից բարձր  գնահատական, իսկ %{below_average} ունկնդիրներ՝ միջինից ցածր:","avg_time":"Միջին տևողություն","chart_title":"Գնահատականների տոկոսային հարաբերակցությունների գծապատկեր","high_score":"Բարձր գնահատական","low_score":"Ցածր գնահատական","mean":"Միջին գնահատական","not_available_abbrev":"Չկա","quiz_summary":"Թեստի ամփոփում","stdev":"Ստանդարտ շեղում","table_description":"Ամփոփ վիճակագրություն բոլոր ուսանողների գծով, ովքեր հանձնել են աշխատանքները:"}}},"is":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 nemandi í hundraðshluta %{percentile}. ","other":"%{count} nemendur í hundraðshluta %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} voru fyrir ofan eða við meðaltal og %{below_average} fyrir neðan.","avg_time":"Meðaltími","chart_title":"Hlutfallsmyndrit einkunnar","high_score":"Hæsta einkunn","low_score":"Lægsta einkunn","mean":"Meðaleinkunn","not_available_abbrev":"Á ekki við","quiz_summary":"Samantekt prófs","stdev":"Staðalfrávik","table_description":"Samtölur fyrir öll skil"}}},"it":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 studente in percentile %{percentile}. ","other":"%{count} studenti in percentile %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} studenti hanno ottenuto un punteggio superiore o nella media e al di sotto del %{below_average}. ","avg_time":"Durata media","chart_title":"Grafico percentili punteggi","high_score":"Punteggio alto","low_score":"Punteggio basso","mean":"Punteggio medio","not_available_abbrev":"N/A","quiz_summary":"Riepilogo quiz","stdev":"Deviazione standard","table_description":"Statistiche di riepilogo per tutte le consegne inviate"}}},"ja":{"count_students_in_percentile_percentile_d0adecfe":{"one":"%{count} %{percentile} 内に受講生。","other":"%{count} %{percentile} 内に受講生。"},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} 受講生は平均以上、または%{below_average}それより下のスコアでした。","avg_time":"平均時間","chart_title":"スコアの百分位数グラフ","high_score":"高スコア","low_score":"低スコア","mean":"平均スコア","not_available_abbrev":"N/A","quiz_summary":"クイズの概要","stdev":"標準偏差","table_description":"提出済みのすべての提出物の概要統計"}}},"ko":{"quiz_statistics":{"summary":{"avg_time":"평균 시간","high_score":"최고 점수","low_score":"최저 점수","mean":"평균 점수","not_available_abbrev":"해당 없음","stdev":"표준편차"}}},"mi":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 ākonga i roto i te ōrau %{percentile}","other":"%{count} Ngā ākonga i roto i te ōrau %{percentile}"},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} Ngā ākonga kua kaute runga ake kei te toharite rānei, me %{below_average} i raro","avg_time":"Wā Wawaenga","chart_title":"Ōrau Kaute tūtohi","high_score":"Kaute teitei","low_score":"Kaute iti","mean":"Kaute toharite","not_available_abbrev":"N/A","quiz_summary":"Whakarāpopoto Quiz","stdev":"ine mahora","table_description":"Tatauranga Whakarāpopoto hoki katoa ka tahuri i roto i te tāpaetanga"}}},"nb":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student i persentil %{percentile}. ","other":"%{count} studenter i persentil %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} studentenes resultat var over eller på gjennomsnittet, og %{below_average} under. ","avg_time":"Gjennomsnittlig tid","chart_title":"Diagram resultatpersentiler ","high_score":"Høyeste resultat","low_score":"Laveste resultat","mean":"Gjennomsnittlig resultat","not_available_abbrev":"N/A","quiz_summary":"Sammendrag av test","stdev":"Standardavvik","table_description":"Sammendrag statistikk for alle slått i innleveringer"}}},"nb-x-k12":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 elev i persentil %{percentile}.","other":"%{count} elever i persentil %{percentile}."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} elevenes resultat var over eller på gjennomsnittet, og %{below_average} under.","avg_time":"Gjennomsnittlig tid","chart_title":"Diagram resultatpersentiler","high_score":"Høyeste resultat","low_score":"Laveste resultat","mean":"Gjennomsnittlig resultat","not_available_abbrev":"N/A","quiz_summary":"Sammendrag av test","stdev":"Standardavvik","table_description":"Sammendrag statistikk for alle slått i innleveringer"}}},"nl":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 cursist in percentiel %{percentile}. ","other":"%{count} cursisten in percentiel %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} cursisten die gemiddeld of hoger hebben gescoord en %{below_average} eronder. ","avg_time":"Gemiddelde tijd","chart_title":"Grafiek met cijferpercentage","high_score":"Hoogste score","low_score":"Laagste score","mean":"Gemiddelde score","not_available_abbrev":"Niet van toepassing","quiz_summary":"Samenvatting van de toets","stdev":"Standaarddeviatie","table_description":"Samenvattingsstatistieken over alles wat is ingezonden"}}},"nn":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student av andel %{percentile}.","other":"%{count} students av andel %{percentile}."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} studentar skåra over eller på middels, og %{below_average} under.","avg_time":"Gjennomsnittleg tid","chart_title":"Diagram resultat i persentil","high_score":"Høg skår","low_score":"Låg skår:","mean":"Gjennomsnittleg resultat","not_available_abbrev":"Gjeld ikkje","quiz_summary":"Quizsamandrag","stdev":"Standardavvik","table_description":"Statistikk samandrag alle innleveringar"}}},"pl":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 uczestnik w percentylu %{percentile}. ","other":"%{count} uczestników w percentylu %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} uczestników uzyskało ocenę powyżej lub równą średniej, zaś %{below_average} uzyskało ocenę poniżej. ","avg_time":"Średni poświęcony czas","chart_title":"Wyniki w percentylach","high_score":"Wysoki wynik punktowy","low_score":"Niski wynik punktowy","mean":"Średni wynik punktowy","not_available_abbrev":"Brak danych","quiz_summary":"Podsumowanie testu","stdev":"Odchylenie standardowe","table_description":"Statystyka podsumowująca dla wszystkich przesłanych zadań"}}},"pt":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 aluno em percentil %{percentile}. ","other":"%{count} alunos em percentil %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} alunos pontuados acima ou dentro da média e %{below_average} abaixo. ","avg_time":"Tempo médio","chart_title":"Gráfico de percentis de pontuação","high_score":"Pontuação alta","low_score":"Pontuação baixa","mean":"Pontuação média","not_available_abbrev":"ND","quiz_summary":"Resumo do teste","stdev":"Desvio padrão","table_description":"Estatísticas resumidas para todos os envios entregues"}}},"pt-BR":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 aluno no percentual %{percentile}. ","other":"%{count} alunos no percentual %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} alunos pontuaram acima ou na média, e %{below_average} abaixo. ","avg_time":"Tempo médio","chart_title":"Gráfico de porcentagens de pontuação","high_score":"Pontuação mais alta","low_score":"Pontuação mais baixa","mean":"Pontuação média","not_available_abbrev":"ND","quiz_summary":"Resumo do teste","stdev":"Desvio padrão","table_description":"Estatísticas de resumo para todos transformadas em envios"}}},"ru":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 учащийся в процентиле %{percentile}. ","other":"%{count} учащихся в процентиле %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} учащиеся с более высокими или средними оценками и %{below_average} более низкими оценками. ","avg_time":"Средняя продолжительность","chart_title":"График процентилей оценки","high_score":"Высокая оценка","low_score":"Низкая оценка","mean":"Средняя оценка","not_available_abbrev":"Недоступно","quiz_summary":"Сводка по контрольной работе","stdev":"Стандартное отклонение","table_description":"Сводная статистика для всех, кто сдал отправки"}}},"sv":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 student i percentil %{percentile}. ","other":"%{count} studenter i percentil %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} studenter poängsatta över eller vid medel och %{below_average} under. ","avg_time":"Genomsnittlig tid","chart_title":"Tabell över poängprocent","high_score":"Högst poäng","low_score":"Lägst poäng","mean":"Genomsnittlig poäng","not_available_abbrev":"Ej tillgängligt","quiz_summary":"Quiz-sammanfattning","stdev":"Standardavvikelse","table_description":"Sammanfattad statistik för alla inlämnade inlämningar"}}},"sv-x-k12":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 elev i percentil %{percentile}.","other":"%{count} elever i percentil %{percentile}."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} elever som har resultat över eller vid medel och %{below_average} under.","avg_time":"Genomsnittlig tid","chart_title":"Tabell över resultatprocent","high_score":"Högst resultat","low_score":"Lägst resultat","mean":"Genomsnittlig resultat","not_available_abbrev":"Ej tillgängligt","quiz_summary":"Quiz-sammanfattning","stdev":"Standardavvikelse","table_description":"Sammanfattad statistik för alla inlämnade inlämningar"}}},"tr":{"count_students_in_percentile_percentile_d0adecfe":{"one":"%{percentile}yüzdebirliğinde 1 öğrenci var. ","other":"  %{percentile}yüzdebirliğinde %{count}öğrenci var."},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} öğrenci ortalama ya da üzerinde ve %{below_average} altında puan aldı.","avg_time":"Ortalama Süre","chart_title":"Puan yüzdebirlik çizelgesi","high_score":"Yüksek Puan","low_score":"Düşük Puan","mean":"Ortalama Puan","not_available_abbrev":"Yok","quiz_summary":"Sınav Özeti","stdev":"Standart Sapma","table_description":"Teslim edilmiş tüm gönderiler için istatistik özetleri"}}},"uk":{"count_students_in_percentile_percentile_d0adecfe":{"one":"1 студент у відсотках %{percentile}. ","other":"%{count} студентів у відсотках %{percentile}. "},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} студентів набрали вище або в середньому, а %{below_average} нижче.","avg_time":"Середній час","chart_title":"Діаграма оцінок у відсотках","high_score":"Вища оцінка","low_score":"Низька оцінка","mean":"Середній бал","not_available_abbrev":"Недоступно","quiz_summary":"Підсумкова контрольна робота","stdev":"Стандартне відхилення","table_description":"Коротка статистика для всіх, хто звернувся з поданнями"}}},"zh-Hans":{"count_students_in_percentile_percentile_d0adecfe":{"one":"%{count} 个学生的分数处在前%{percentile}。","other":"%{count} 个学生的分数处在前%{percentile}。"},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} 学生得分高于平均水平、处在平均水平或低于%{below_average}。","avg_time":"平均时间","chart_title":"百分位分数图","high_score":"高分","low_score":"低分","mean":"平均分","not_available_abbrev":"不适用","quiz_summary":"测验摘要","stdev":"标准偏差","table_description":"所有已提交项的摘要统计"}}},"zh-Hant":{"count_students_in_percentile_percentile_d0adecfe":{"one":"%{count} 學生在百分之 %{percentile}。","other":"%{count} 學生在百分之 %{percentile}。"},"quiz_statistics":{"summary":{"audible_chart_description":"%{above_average} 學生分數高於或平均水平，和 %{below_average} 以下。","avg_time":"平均時間","chart_title":"分數百分比圖表","high_score":"高分","low_score":"低分","mean":"平均分數","not_available_abbrev":"不適用","quiz_summary":"測驗總結","stdev":"標準偏差","table_description":"所有上交提交件的總結統計資料"}}}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quiz_statistics.summary")},LriP:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var a=n.n(i)
var r=n("Ihsx")
var s=n.n(r)
s.a.configure({ajax:a.a.ajax,loadOnStartup:true,quizStatisticsUrl:ENV.quiz_statistics_url,quizReportsUrl:ENV.quiz_reports_url,courseSectionsUrl:ENV.course_sections_url})
s.a.mount(document.body.querySelector("#content")).then(function(){console.log("Yeah!!!")})},M81g:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("UzlB")
var a=n("bljh")
var r=n("JLUK").default
var s=a.max
var o=a.sum
var c=0
var d=18
var _=60
var l=34
var u=t.createClass({displayName:"ScorePercentileChart",mixins:[i.mixin],propTypes:{scores:t.PropTypes.object,scoreAverage:t.PropTypes.number,pointsPossible:t.PropTypes.number},getDefaultProps:function(){return{scores:{},animeDelay:500,animeDuration:500,width:960,height:220,barPadding:.25,minBarHeight:1,numTicks:5}},createChart:function(e,t){var n,r,s,o,u
var p
r=t.width-l-d
s=t.height-c-_
o=a.scale.ordinal().rangeRoundBands([0,r],t.barPadding,0)
o.domain(a.range(0,101,1))
this.y=a.scale.linear().range([s,0])
u=a.svg.axis().scale(o).orient("bottom").tickValues(a.range(0,101,10)).tickFormat(function(e){return e+"%"})
this.yAxis=a.svg.axis().scale(this.y).orient("left").outerTickSize(0).ticks(t.numTicks)
n=a.select(e).attr("role","document").attr("aria-role","document").attr("width",r+l+d).attr("height",s+c+_).attr("viewBox","0 0 "+(r+l+d)+" "+(s+c+_)).attr("preserveAspectRatio","xMidYMax").append("g")
this.title=i.addTitle(n,"")
var h=this.refs.wrapper&&a.select(this.refs.wrapper.getDOMNode())||n
this.description=i.addDescription(h,"")
n.append("g").attr("class","x axis").attr("aria-hidden",true).attr("transform","translate(5,"+s+")").call(u)
this.yAxisContainer=n.append("g").attr("class","y axis").attr("aria-hidden",true).call(this.yAxis)
p=n.append("g")
this.x=o
this.height=s
this.barContainer=p
this.updateChart(n,t)
return n},updateChart:function(e,t){var n
var i=this.chartData=this.calculateChartData(t)
var a=t.scoreAverage/t.pointsPossible*100
n=this.calculateStudentStatistics(a,i)
var s=r.t("audible_chart_description","%{above_average} students scored above or at the average, and %{below_average} below. ",{above_average:n.aboveAverage,below_average:n.belowAverage})
i.forEach(function(e,t){0!==e&&(s+=r.t({one:"1 student in percentile %{percentile}. ",other:"%{count} students in percentile %{percentile}. "},{count:e,percentile:t+""}))})
this.title.text(r.t("chart_title","Score percentiles chart"))
this.description.text(s)
this.renderBars(this.barContainer,t)},renderBars:function(e,t){var n,i,r,o
var c
var d
var _
var l=this.chartData
n=this.height
c=s(l)
i=this.x
r=this.y
r.range([0,c]).rangeRound([n,0]).domain([0,c])
d=-Math.ceil((c+1)/t.numTicks)
this.yAxis.tickValues(a.range(c,0,d)).tickFormat(function(e){return Math.floor(e)})
this.yAxisContainer.call(this.yAxis).selectAll("text").attr("dy",".8em")
this.yAxisContainer.selectAll("line").attr("y1",".5").attr("y2",".5")
_=Math.max(c/100,t.minBarHeight)
o=e.selectAll("rect.bar").data(l)
o.enter().append("rect").attr("class","bar").attr("x",function(e,t){return i(t)}).attr("y",n).attr("width",i.rangeBand).attr("height",0)
o.transition().delay(t.animeDelay).duration(t.animeDuration).attr("y",function(e){return r(e)-_}).attr("height",function(e){return n-r(e)+_})
o.exit().remove()},calculateStudentStatistics:function(e,t){var n=Math.round(e)
return{aboveAverage:t.filter(function(e,t){return t>=n}).reduce(function(e,t){return e+t},0),belowAverage:t.filter(function(e,t){return t<n}).reduce(function(e,t){return e+t},0)}},calculateChartData:function(e){var t,n
var i=[]
var a=e.scores||{}
var r=s(Object.keys(a).map(function(e){return parseInt(e,10)}))
n=s([101,r])
for(t=0;t<n;++t)i[t]=a[""+t]||0
i[100]=o(i.splice(100,i.length))
return i},render:i.defaults.render})
return u}.call(t,n,t,e),void 0!==i&&(e.exports=i)},MWvi:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("mbrK")
var a=n("cY2E")
n("b0yZ").default
var r=t.createClass({displayName:"Help",render:function(){return a({phrase:"discrimination_index_help",articleUrl:i.DISCRIMINATION_INDEX_HELP_ARTICLE_URL},t.DOM.p(null,"This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not."),t.DOM.p(null,"It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly."),t.DOM.p(null,t.DOM.a({href:"%{article_url}",target:"_blank"},"Learn more about quiz statistics.")))}})
return r}.call(t,n,t,e),void 0!==i&&(e.exports=i)},OP6J:function(e,t,n){var i
i=function(e){var t=n("FIFq")
var i=n("BcB5")
var a=n("mbrK")
var r=n("C1us")
var s=function(e){var t=e.progress.workflowState
return["queued","running"].indexOf(t)>-1}
return t.Model.extend({parse:function(e){var t
e=r(e,"quiz_reports",true)
t=i(e,a.QUIZ_REPORT_ATTRS)
t.progress=i(e.progress,a.PROGRESS_ATTRS)
t.file=i(e.file,a.ATTACHMENT_ATTRS)
t.isGenerated=!!(t.file&&t.file.url)
t.isGenerating=!t.isGenerated&&!!(t.progress&&s(t))
return t}})}.call(t,n,t,e),void 0!==i&&(e.exports=i)},OXiE:function(e,t,n){var i
i=function(e){var t=n("FIFq")
var i=n("BcB5")
var a=n("mbrK")
var r=n("GLiE")
var s=n("sBQq")
var o=n("vdby")
var c=n("b0yZ").default
var d=r.findWhere
var _
var l=t.Model.extend({parse:function(e){var t=i(e,a.QUIZ_STATISTICS_ATTRS)
t.submissionStatistics=i(e.submission_statistics,a.SUBMISSION_STATISTICS_ATTRS)
t.questionStatistics=s(e.question_statistics).map(_)
return t}})
var u=function(e){var t
t=e.answerSets&&e.answerSets.length>0?e.answerSets[0].answers:e.answers
if("multiple_answers_question"===e.questionType)return e.responses
return s(t).reduce(function(e,t){return e+(t.responses||0)},0)}
_=function(e){var t
var n=i(e,a.QUESTION_STATISTICS_ATTRS)
var r=u(n)
var _=function(e){"none"===e.id?e.text=c.t("no_answer","No Answer"):"other"===e.id&&(e.text=c.t("unknown_answer","Something Else"))
e.ratio=r>0?o(e.responses/r*100):0}
n.participantCount=r
n.answers?n.answers.forEach(_):n.answerSets&&n.answerSets.forEach(function(e){s(e.answers).forEach(_)})
if(n.pointBiserials){n.pointBiserials=n.pointBiserials.map(function(e){return i(e,a.POINT_BISERIAL_ATTRS)})
t=d(n.pointBiserials,{correct:true})||{}
n.discriminationIndex=t.pointBiserial}n.pointDistribution&&n.pointDistribution.forEach(function(e){e.ratio=r>0?o(e.count/r*100):0})
return n}
return l}.call(t,n,t,e),void 0!==i&&(e.exports=i)},OaTh:function(e,t,n){var i
i=function(e){var t=n("tz+7")
var i={getInitialState:function(){return{actionIndex:null}},getDefaultProps:function(){return{storeError:null}},componentWillReceiveProps:function(e){var t=e.storeError
t&&t.actionIndex===this.state.actionIndex&&this.setState({storeError:t})},componentDidUpdate:function(){if(this.state.storeError){this.onStoreError&&this.onStoreError(this.state.storeError)
this.setState({storeError:null})}},componentWillUnmount:function(){this.lastAction=void 0},consume:function(e){e&&e.preventDefault()},sendAction:function(e,n,i){var a
var r
a=t.dispatch(e,n)
if(i&&false===i.track)return
r=this.setState.bind(this)
this.lastAction=a.promise
r({actionIndex:a.index})
a.promise.then(null,function(e){r({storeError:{actionIndex:a.index,error:e}})})
return a.promise}}
return i}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Obm4:function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("Idbx")
var a=t.createClass({displayName:"Calculated",render:i.type.prototype.render,renderLinkButton:function(){return false}})
return a}.call(t,n,t,e),void 0!==i&&(e.exports=i)},P08n:function(e,t,n){var i,a
i=[n("pgP2")],a=function(e){var t=n("qJBq")
var i=n("b0yZ").default
return function(e){if(null==e)return NaN
if("number"===typeof e)return e
var n=t(e,{thousands:i.lookup("number.format.delimiter"),decimal:i.lookup("number.format.separator")})
return isNaN(n)?t(e):n}}.apply(t,i),void 0!==a&&(e.exports=a)},PQIk:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"فهرس التمييز: %{number}.","discrimination_index":"فهرس التمييز","discrimination_index_dialog_title":"مخطط فهرس التمييز","discrimination_index_dialog_trigger":"تعرف على المزيد عن فهرس التمييز."}}},"cy":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Mynegai Gwahaniaethu: %{number}.","discrimination_index":"Mynegai Gwahaniaethu","discrimination_index_dialog_title":"Siart Mynegai Gwahaniaethu","discrimination_index_dialog_trigger":"Dysgwch fwy am y Mynegai Gwahaniaethu."}}},"da":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Diskriminationsindeks: %{number}.","discrimination_index":"Diskriminationsindeks","discrimination_index_dialog_title":"Diagram tfor diskriminationsindeks","discrimination_index_dialog_trigger":"Læs mere om diskriminationsindekset"}}},"da-x-k12":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Diskriminationsindeks: %{number}.","discrimination_index":"Diskriminationsindeks","discrimination_index_dialog_title":"Diagram tfor diskriminationsindeks","discrimination_index_dialog_trigger":"Læs mere om diskriminationsindekset"}}},"de":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Unterscheidungsindex: %{number}.","discrimination_index":"Unterscheidungsindex","discrimination_index_dialog_title":"Das Unterscheidungsindex-Diagramm","discrimination_index_dialog_trigger":"Erfahren Sie mehr über den Unterscheidungsindex."}}},"el":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"\\u003cmrk mid=\\"7048\\" mtype=\\"seg\\"\\u003eΔείκτης Διάκρισης:\\u003c/mrk\\u003e \\u003cmrk mid=\\"7049\\" mtype=\\"seg\\"\\u003e%{number}.\\u003c/mrk\\u003e","discrimination_index":"Δείκτης Διάκρισης","discrimination_index_dialog_title":"Διάγραμμα Δείκτη Διάκρισης","discrimination_index_dialog_trigger":"Μάθετε περισσότερα για τον Δείκτη Διάκρισης."}}},"en-AU":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Discrimination Index: %{number}.","discrimination_index":"Discrimination Index","discrimination_index_dialog_title":"The Discrimination Index Chart","discrimination_index_dialog_trigger":"Learn more about the Discrimination Index."}}},"en-CA":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Discrimination Index: %{number}.","discrimination_index":"Discrimination Index","discrimination_index_dialog_title":"The Discrimination Index Chart","discrimination_index_dialog_trigger":"Learn more about the Discrimination Index."}}},"en-GB":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Discrimination Index: %{number}.","discrimination_index":"Discrimination Index","discrimination_index_dialog_title":"The Discrimination Index Chart","discrimination_index_dialog_trigger":"Learn more about the Discrimination Index."}}},"es":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Índice de discriminación: %{number}.","discrimination_index":"Índice de discriminación","discrimination_index_dialog_title":"Gráfico de índice de discriminación","discrimination_index_dialog_trigger":"Más información sobre el índice de discriminación."}}},"fa":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"شاخص تمایز: %{number}.","discrimination_index":"شاخص تمایز","discrimination_index_dialog_title":"نمودار شاخص تمایز","discrimination_index_dialog_trigger":"با شاخص تمایز بیشتر آشنا شوید."}}},"fr":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Indice de discrimination : %{number}.","discrimination_index":"Indice de discrimination ","discrimination_index_dialog_title":"L’indice de discrimination ","discrimination_index_dialog_trigger":"Apprenez-en davantage sur l’indice de discrimination."}}},"fr-CA":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Indice de discrimination : %{number}.","discrimination_index":"Indice de discrimination ","discrimination_index_dialog_title":"L’indice de discrimination ","discrimination_index_dialog_trigger":"Apprenez-en davantage sur l’indice de discrimination."}}},"he":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"מדד אי השויון: %{number}.","discrimination_index":"מדד אי השויון","discrimination_index_dialog_title":"גרף מדד אי השויון","discrimination_index_dialog_trigger":"ללימוד מעמיק יותר על מדד אי השויון."}}},"ht":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Endis Diskriminasyon: %{number}.","discrimination_index":"Endis Diskriminasyon","discrimination_index_dialog_title":"Grafik Endis Diskriminasyon","discrimination_index_dialog_trigger":"Aprann plis sou Endis Diskriminasyon an."}}},"hu":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Diszkriminációs index: %{number}.","discrimination_index":"Diszkriminációs index","discrimination_index_dialog_title":"Diszkriminációs index diagram","discrimination_index_dialog_trigger":"Tudjon meg többet a diszkriminációs indexről."}}},"hy":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Տարանջատման ցուցիչ՝ %{number}","discrimination_index":"Տարանջատման ցուցիչ","discrimination_index_dialog_title":"Տարանջատման ցուցչի գծապատկեր","discrimination_index_dialog_trigger":"Իմացեք ավելին Տարանջատման ցուցչի մասին:"}}},"is":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Aðgreiningarvísir: %{number}","discrimination_index":"Aðgreiningarvísir","discrimination_index_dialog_title":"Myndrit aðgreiningarvísis","discrimination_index_dialog_trigger":"Læra meira um aðgreiningarvísi."}}},"it":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Indice di discriminazione: %{number}.","discrimination_index":"Indice di discriminazione","discrimination_index_dialog_title":"Grafico indice di discriminazione","discrimination_index_dialog_trigger":"Scopri di più sull\'indice di discriminazione."}}},"ja":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"識別指数: %{number}。","discrimination_index":"識別指数","discrimination_index_dialog_title":"識別指数グラフ","discrimination_index_dialog_trigger":"識別指数についての詳細を確認します。"}}},"mi":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Taupu Whakahāweatanga: %{number}.","discrimination_index":"Taupū Whakahāwea","discrimination_index_dialog_title":"Ko te Tūtohi Whakahāwea Taupu","discrimination_index_dialog_trigger":"Ako atu e pā ana ki te Taupu Whakahāwea."}}},"nb":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Forskjellsindeks: %{number}.","discrimination_index":"Forskjellsindeks","discrimination_index_dialog_title":"Forskjellsindeks diagram","discrimination_index_dialog_trigger":"Lær mer om forskjellsindeks."}}},"nb-x-k12":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Forskjellsindeks: %{number}.","discrimination_index":"Forskjellsindeks","discrimination_index_dialog_title":"Forskjellsindeks diagram","discrimination_index_dialog_trigger":"Lær mer om forskjellsindeks."}}},"nl":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Discriminatie index: %{number}.","discrimination_index":"Discriminatie index","discrimination_index_dialog_title":"De discriminatie indexgrafiek","discrimination_index_dialog_trigger":"Meer informatie over de discriminatie index."}}},"nn":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Vurderingsliste: %{number}.","discrimination_index":"Vurderingsliste","discrimination_index_dialog_title":"Vurderingslistediagram","discrimination_index_dialog_trigger":"Lær meir om vurderingslista."}}},"pl":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Wykaz sporządzony na podstawie dyskryminacji: %{number}.","discrimination_index":"Wykaz sporządzony na podstawie dyskryminacji","discrimination_index_dialog_title":"Wykaz osób dyskryminowanych","discrimination_index_dialog_trigger":"Dowiedz się więcej o wykazie sporządzonym na podstawie dyskryminacji."}}},"pt":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Índice de discriminação: %{number}.","discrimination_index":"Índice de discriminação","discrimination_index_dialog_title":"Gráfico do índice de discriminação","discrimination_index_dialog_trigger":"Saiba mais sobre o Índice de discriminação."}}},"pt-BR":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Índice de Discriminação: %{number}.","discrimination_index":"Índice de discriminação:","discrimination_index_dialog_title":"O gráfico do índice de discriminação","discrimination_index_dialog_trigger":"Saiba mais sobre o Índice de Discriminação."}}},"ru":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Индекс разделения %{number}.","discrimination_index":"Индекс разделения","discrimination_index_dialog_title":"График индекса разделения","discrimination_index_dialog_trigger":"Узнайте больше об индексе разделения."}}},"sv":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Diskriminationsindex: %{number}.","discrimination_index":"Diskriminationsindex","discrimination_index_dialog_title":"Karta över diskriminationsindex","discrimination_index_dialog_trigger":"Lär dig mer om diskriminationsindex."}}},"sv-x-k12":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Diskriminationsindex: %{number}.","discrimination_index":"Diskriminationsindex","discrimination_index_dialog_title":"Karta över diskriminationsindex","discrimination_index_dialog_trigger":"Lär dig mer om diskriminationsindex."}}},"tr":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Ayrışma Endeksi: %{number}.","discrimination_index":"Ayrışma Endeksi","discrimination_index_dialog_title":"Ayrışma Endeks Göstergesi","discrimination_index_dialog_trigger":"Ayrışma Endeksi hakkında daha fazla bilgi edinin."}}},"uk":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"Індекс дискримінації: %{number}.","discrimination_index":"Індекс дискримінації","discrimination_index_dialog_title":"Діаграма індексу дискримінації ","discrimination_index_dialog_trigger":"Дізнатися більше про індекс дискримінації."}}},"zh-Hans":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"鉴别指数：%{number}。","discrimination_index":"鉴别指数","discrimination_index_dialog_title":"鉴别指数图","discrimination_index_dialog_trigger":"详细了解鉴别指数。"}}},"zh-Hant":{"quiz_statistics":{"discrimination_index":{"audible_discrimination_index":"鑒別指數：%{number}。","discrimination_index":"鑒別指數","discrimination_index_dialog_title":"鑒別指數圖","discrimination_index_dialog_trigger":"瞭解更多關於鑒別指數的內容。"}}}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quiz_statistics.discrimination_index")},UrHj:function(e,t,n){var i,a
i=[n("pgP2")],a=function(e){var t=n("b0yZ").default
var i=n("P08n")
return function(n,a){void 0===a&&(a=e.precision)
"number"===typeof n&&n instanceof Number||(n=i(n))
return t.n(n.toFixed(parseInt(a,10)))}}.apply(t,i),void 0!==a&&(e.exports=a)},UzlB:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=function(e){var t=(e.refs||{}).chart||e
return t.getDOMNode()}
var a={defaults:{updateChart:function(e,t){this.removeChart()
this.__svg=this.createChart(i(this),t)},render:function(){return t.DOM.div({ref:"wrapper"},{},t.DOM.svg({className:"chart",ref:"chart"}))},removeChart:function(){if(this.__svg){this.__svg.remove()
delete this.__svg}}},addTitle:function(e,t){return e.append("title").text(t)},addDescription:function(e,t){return e.append("text").attr("tabindex","0").attr("class","screenreader-only").text(t)},mixin:{componentWillMount:function(){if("function"!==typeof this.createChart)throw"ChartMixin: you must define a createChart() method that returns a d3 element"
this.updateChart||(this.updateChart=a.defaults.updateChart)
this.removeChart||(this.removeChart=a.defaults.removeChart)},componentDidMount:function(){this.__svg=this.createChart(i(this),this.props)},shouldComponentUpdate:function(e){this.updateChart(this.__svg,e)
return false},componentWillUnmount:function(){this.removeChart()}}}
return a}.call(t,n,t,e),void 0!==i&&(e.exports=i)},VxH4:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}، (إجابة صحيحة)","answer_incorrect_answer_80efe585":"%{answer}، (إجابة خاطئة)","answers_which_scored_in_the_bottom_27_74409483":"الأجوبة التي حصلت على نتائج موجودة ضمن أدنى 27% نتيجة","answers_which_scored_in_the_middle_46_46466ffd":"الأجوبة التي حصلت على نتائج موجودة ضمن متوسط 46% من النتائج","answers_which_scored_in_the_top_27_a605232d":"الأجوبة التي حصلت على نتائج موجودة ضمن أعلى 27% نتيجة","correct_answer_5a6a57d1":"إجابة صحيحة","correct_check_icon_617da6c3":"أيقونة التحقق صحيحة","graph_bar_b5daa23d":"شريط الرسومات","incorrect_answer_7c17e63b":"إجابة خاطئة","ungraded_answers_31ef2df7":"أجوبة لم يتم تقييمها","unknown_answers_9688a2bc":"أجوبة غير معروفة","usercount_respondents_1521244":"%{userCount} مجيب/مجيبين"},"cy":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Ateb cywir)","answer_incorrect_answer_80efe585":"%{answer}, (Ateb anghywir)","answers_which_scored_in_the_bottom_27_74409483":"Atebion a oedd yn rhan o’r 27% isaf","answers_which_scored_in_the_middle_46_46466ffd":"Atebion a oedd yn rhan o’r 46% yn y canol","answers_which_scored_in_the_top_27_a605232d":"Atebion a oedd yn rhan o’r 27% uchaf","correct_answer_5a6a57d1":"Ateb Cywir","correct_check_icon_617da6c3":"eicon tic cywir","graph_bar_b5daa23d":"Bar graff","incorrect_answer_7c17e63b":"Ateb Anghywir","ungraded_answers_31ef2df7":"Atebion heb eu graddio","unknown_answers_9688a2bc":"Atebion dieithr","usercount_respondents_1521244":"%{userCount} ymatebwr"},"da":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (korrekt svar)","answer_incorrect_answer_80efe585":"%{answer}, (forkert svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar som scorede i den nederste 27 %","answers_which_scored_in_the_middle_46_46466ffd":"Svar som scorede i de mellemste 46 %","answers_which_scored_in_the_top_27_a605232d":"Svar som scorede i de øverste 27 %","correct_answer_5a6a57d1":"Korrekt svar","correct_check_icon_617da6c3":"flueben-ikon","graph_bar_b5daa23d":"Graflinje","incorrect_answer_7c17e63b":"Forkert svar","ungraded_answers_31ef2df7":"Ikke bedømte svar","unknown_answers_9688a2bc":"Ukendte svar","usercount_respondents_1521244":"%{userCount} respondenter"},"da-x-k12":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (korrekt svar)","answer_incorrect_answer_80efe585":"%{answer}, (forkert svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar som scorede i den nederste 27 %","answers_which_scored_in_the_middle_46_46466ffd":"Svar som scorede i de mellemste 46 %","answers_which_scored_in_the_top_27_a605232d":"Svar som scorede i de øverste 27 %","correct_answer_5a6a57d1":"Korrekt svar","correct_check_icon_617da6c3":"flueben-ikon","graph_bar_b5daa23d":"Graflinje","incorrect_answer_7c17e63b":"Forkert svar","ungraded_answers_31ef2df7":"Ikke bedømte svar","unknown_answers_9688a2bc":"Ukendte svar","usercount_respondents_1521244":"%{userCount} respondenter"},"de":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Richtige Antwort)","answer_incorrect_answer_80efe585":"%{answer}, (Falsche Antwort)","answers_which_scored_in_the_bottom_27_74409483":"Antworten, deren Punktezahlen in den unteren 27 % lagen","answers_which_scored_in_the_middle_46_46466ffd":"Antworten, deren Punktezahlen in den mittleren 46 % lagen","answers_which_scored_in_the_top_27_a605232d":"Antworten, deren Punktezahlen in den oberen 27 % lagen","correct_answer_5a6a57d1":"Richtige Antwort","correct_check_icon_617da6c3":"richtiges Häkchensymbol","graph_bar_b5daa23d":"Diagrammbalken","incorrect_answer_7c17e63b":"Falsche Antwort","ungraded_answers_31ef2df7":"Unbenotete Antworten","unknown_answers_9688a2bc":"Unbekannte Antworten","usercount_respondents_1521244":"%{userCount} Befragte"},"el":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Σωστή απάντηση)","answer_incorrect_answer_80efe585":"%{answer}, (Εσφαλμένη απάντηση)","graph_bar_b5daa23d":"Μπάρας Γραφήματος","incorrect_answer_7c17e63b":"Λάθος Απάντηση","usercount_respondents_1521244":"%{userCount} απαντώντες"},"en-AU":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Correct answer)","answer_incorrect_answer_80efe585":"%{answer}, (Incorrect answer)","answers_which_scored_in_the_bottom_27_74409483":"Answers that scored in the bottom 27%","answers_which_scored_in_the_middle_46_46466ffd":"Answers which scored in the middle 46%","answers_which_scored_in_the_top_27_a605232d":"Answers which scored in the top 27%","correct_answer_5a6a57d1":"Correct Answer","correct_check_icon_617da6c3":"correct check icon","graph_bar_b5daa23d":"Graph bar","incorrect_answer_7c17e63b":"Incorrect Answer","ungraded_answers_31ef2df7":"Ungraded answers","unknown_answers_9688a2bc":"Unknown answers","usercount_respondents_1521244":"%{userCount} respondents"},"en-AU-x-unimelb":{"_b4455c8b":"%"},"en-CA":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Correct answer)","answer_incorrect_answer_80efe585":"%{answer}, (Incorrect answer)","answers_which_scored_in_the_bottom_27_74409483":"Answers which scored in the bottom 27%","answers_which_scored_in_the_middle_46_46466ffd":"Answers which scored in the middle 46%","answers_which_scored_in_the_top_27_a605232d":"Answers which scored in the top 27%","correct_answer_5a6a57d1":"Correct Answer","correct_check_icon_617da6c3":"correct check icon","graph_bar_b5daa23d":"Graph bar","incorrect_answer_7c17e63b":"Incorrect Answer","ungraded_answers_31ef2df7":"Ungraded answers","unknown_answers_9688a2bc":"Unknown answers","usercount_respondents_1521244":"%{userCount} respondents"},"en-GB":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (correct answer)","answer_incorrect_answer_80efe585":"%{answer}, (incorrect answer)","answers_which_scored_in_the_bottom_27_74409483":"Answers that scored in the bottom 27%","answers_which_scored_in_the_middle_46_46466ffd":"Answers that scored in the middle 46%","answers_which_scored_in_the_top_27_a605232d":"Answers that scored in the top 27%","correct_answer_5a6a57d1":"Correct answer","correct_check_icon_617da6c3":"correct check icon","graph_bar_b5daa23d":"Graph bar","incorrect_answer_7c17e63b":"Incorrect answer","ungraded_answers_31ef2df7":"Ungraded answers","unknown_answers_9688a2bc":"Unknown answers","usercount_respondents_1521244":"%{userCount} respondents"},"en-GB-x-lbs":{"_b4455c8b":"%"},"en-GB-x-ukhe":{"_b4455c8b":"%"},"es":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Respuesta correcta)","answer_incorrect_answer_80efe585":"%{answer}, (Respuesta incorrecta)","answers_which_scored_in_the_bottom_27_74409483":"Las respuestas que obtuvieron un puntaje en el 27 % más bajo","answers_which_scored_in_the_middle_46_46466ffd":"Las respuestas que obtuvieron un puntaje en el medio del 46 %","answers_which_scored_in_the_top_27_a605232d":"Las respuestas que obtuvieron un puntaje en el 27 % más alto","correct_answer_5a6a57d1":"Respuesta correcta","correct_check_icon_617da6c3":"icono de comprobación correcto","graph_bar_b5daa23d":"Barra de gráfico","incorrect_answer_7c17e63b":"Respuesta incorrecta","ungraded_answers_31ef2df7":"Respuestas sin calificación","unknown_answers_9688a2bc":"Respuestas desconocidas","usercount_respondents_1521244":"%{userCount} respuestas"},"fa":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}، (پاسخ درست)","answer_incorrect_answer_80efe585":"%{answer}، (پاسخ نادرست)","answers_which_scored_in_the_bottom_27_74409483":"پاسخ هایی که در 27 درصد پایینی نمره گذاری شده اند","answers_which_scored_in_the_middle_46_46466ffd":"پاسخ هایی که در 46 درصد میانی نمره گذاری شده اند","answers_which_scored_in_the_top_27_a605232d":"پاسخ هایی که در 27 درصد بالایی نمره گذاری شده اند","correct_answer_5a6a57d1":"پاسخ درست","correct_check_icon_617da6c3":"اصلاح نماد بازبینی","graph_bar_b5daa23d":"میله نمودار","incorrect_answer_7c17e63b":"پاسخ نادرست","ungraded_answers_31ef2df7":"پاسخ های نمره گذاری نشده","unknown_answers_9688a2bc":"پاسخ های ناشناس","usercount_respondents_1521244":"%{userCount} پاسخ دهنده"},"fi":{"_b4455c8b":"%"},"fr":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (réponse correcte)","answer_incorrect_answer_80efe585":"%{answer}, (réponse incorrecte)","answers_which_scored_in_the_bottom_27_74409483":"Les réponses qui ont un résultat dans les 27% les plus bas","answers_which_scored_in_the_middle_46_46466ffd":"Les réponses qui ont un résultat dans les 46% médians","answers_which_scored_in_the_top_27_a605232d":"Les réponses qui ont un résultat dans les 27% les plus hauts","correct_answer_5a6a57d1":"Réponse correcte","correct_check_icon_617da6c3":"icône de marque \'correct\'","graph_bar_b5daa23d":"Histogramme","incorrect_answer_7c17e63b":"Réponse incorrecte","ungraded_answers_31ef2df7":"Réponses non notées","unknown_answers_9688a2bc":"Réponses inconnues","usercount_respondents_1521244":"%{userCount} répondants"},"fr-CA":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (réponse correcte)","answer_incorrect_answer_80efe585":"%{answer}, (réponse incorrecte)","answers_which_scored_in_the_bottom_27_74409483":"Les réponses qui ont un résultat dans les 27 % les plus bas","answers_which_scored_in_the_middle_46_46466ffd":"Les réponses qui ont un résultat dans les 46 % médians","answers_which_scored_in_the_top_27_a605232d":"Les réponses qui ont un résultat dans les 27 % les plus hauts","correct_answer_5a6a57d1":"Réponse correcte","correct_check_icon_617da6c3":"icône de marque « correct »","graph_bar_b5daa23d":"Histogramme","incorrect_answer_7c17e63b":"Réponse incorrecte","ungraded_answers_31ef2df7":"Réponses non notées","unknown_answers_9688a2bc":"Réponses inconnues","usercount_respondents_1521244":"%{userCount} ont répondu"},"he":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (תשובה נכונה)","answer_incorrect_answer_80efe585":"%{answer}, (תשובה לא נכונה)","answers_which_scored_in_the_bottom_27_74409483":"תשובות אשר ציונן בקבוצת  27% שבתחתית","answers_which_scored_in_the_middle_46_46466ffd":"תשובות אשר ציונן בקבוצת האמצע של 46%","answers_which_scored_in_the_top_27_a605232d":"תשובות אשר ציונן ב 27% העליונים","correct_answer_5a6a57d1":"תשובה נכונה","correct_check_icon_617da6c3":"צלמית אישור בחירה","graph_bar_b5daa23d":"תרשים בר","incorrect_answer_7c17e63b":"תשובה שגויה","ungraded_answers_31ef2df7":"תשובות ללא הערכה","unknown_answers_9688a2bc":"תשובות לא ידועות","usercount_respondents_1521244":"%{userCount} מגיבים"},"ht":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Repons kòrèk)","answer_incorrect_answer_80efe585":"%{answer}, (Repons enkòrèk)","answers_which_scored_in_the_bottom_27_74409483":"Repons ki fè nòt anba 27%","answers_which_scored_in_the_middle_46_46466ffd":"Repons ki fè nòt nan 46%","answers_which_scored_in_the_top_27_a605232d":"Repons ki fè nòt anwo 27%","correct_answer_5a6a57d1":"Bon Repons","correct_check_icon_617da6c3":"ikòn verifikasyon kòrèk","graph_bar_b5daa23d":"Ba grafik","incorrect_answer_7c17e63b":"Repons Enkòrèk","ungraded_answers_31ef2df7":"Repons san klase","unknown_answers_9688a2bc":"Repons Enkoni","usercount_respondents_1521244":"%{userCount} repondan"},"hu":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (helyes válasz)","answer_incorrect_answer_80efe585":"%{answer}, (helytelen válasz)","answers_which_scored_in_the_bottom_27_74409483":"Válaszok, amelyek az alsó 27% között voltak","answers_which_scored_in_the_middle_46_46466ffd":"Válaszok, amelyek a középső 46% között voltak","answers_which_scored_in_the_top_27_a605232d":"Válaszok, amelyek a felső 27% között voltak","correct_answer_5a6a57d1":"Helyes válasz","correct_check_icon_617da6c3":"helyes pipa ikon","graph_bar_b5daa23d":"Grafikon","incorrect_answer_7c17e63b":"Helytelen válasz","ungraded_answers_31ef2df7":"Nem értékelt válaszok","unknown_answers_9688a2bc":"Ismeretlen válaszok","usercount_respondents_1521244":"%{userCount} válaszadó"},"is":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer} (Rétt svar)","answer_incorrect_answer_80efe585":"%{answer}(Rangt svar)","answers_which_scored_in_the_bottom_27_74409483":"Svör sem lentu í neðstu 27% einkunnabilsins","answers_which_scored_in_the_middle_46_46466ffd":"Svör sem lentu í miðju 46% einkunnabilsins","answers_which_scored_in_the_top_27_a605232d":"Svör sem lentu í efstu 27% einkunnabilsins","correct_answer_5a6a57d1":"Rétt svar","correct_check_icon_617da6c3":"rétt tákn","graph_bar_b5daa23d":"Myndritaslá","incorrect_answer_7c17e63b":"Rangt svar","ungraded_answers_31ef2df7":"Ómetin svör","unknown_answers_9688a2bc":"Óþekkt svör","usercount_respondents_1521244":"%{userCount} svarendur"},"it":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (risposta corretta)","answer_incorrect_answer_80efe585":"%{answer}, (risposta errata)","answers_which_scored_in_the_bottom_27_74409483":"Risposte che ricadono nel 27% dei punteggi più bassi","answers_which_scored_in_the_middle_46_46466ffd":"Risposte che ricadono nel 46% dei punteggi medi","answers_which_scored_in_the_top_27_a605232d":"Risposte che ricadono nel 27% dei punteggi più alti","correct_answer_5a6a57d1":"Risposta corretta","correct_check_icon_617da6c3":"segno di spunta per risposta corretta","graph_bar_b5daa23d":"Ortogramma","incorrect_answer_7c17e63b":"Risposta errata","ungraded_answers_31ef2df7":"Risposte senza voto","unknown_answers_9688a2bc":"Risposte sconosciute","usercount_respondents_1521244":"%{userCount} rispondenti"},"ja":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Correct answer)","answer_incorrect_answer_80efe585":"%{answer}, (Incorrect answer)","answers_which_scored_in_the_bottom_27_74409483":"下位27％において得点した回答","answers_which_scored_in_the_middle_46_46466ffd":"中位46％において得点した回答","answers_which_scored_in_the_top_27_a605232d":"上位27％において得点した回答","correct_answer_5a6a57d1":"正解","correct_check_icon_617da6c3":"チェックアイコンを訂正","graph_bar_b5daa23d":"グラフバー","incorrect_answer_7c17e63b":"不正解","ungraded_answers_31ef2df7":"未採点の回答","unknown_answers_9688a2bc":"不明の回答","usercount_respondents_1521244":"%{userCount}  の回答者"},"ko":{"_b4455c8b":"%"},"mi":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Whakautu tika)","answer_incorrect_answer_80efe585":"%{answer}, (Whakahoki hē)","answers_which_scored_in_the_bottom_27_74409483":"Whakautu i kaute i roto i te raro 27%","answers_which_scored_in_the_middle_46_46466ffd":"Whakautu i kaute i roto i te waenganui 46%","answers_which_scored_in_the_top_27_a605232d":"Whakautu i kaute i roto i te runga 27%","correct_answer_5a6a57d1":"Whakautu Tika","correct_check_icon_617da6c3":"tika icon Taki","graph_bar_b5daa23d":"pae kauwhata","incorrect_answer_7c17e63b":"Whakautu hē","ungraded_answers_31ef2df7":"whakautu tē kōekehia","unknown_answers_9688a2bc":"whakautu Kaore e mōhiotia","usercount_respondents_1521244":"%{userCount} kaiurupare"},"nb":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Riktig svar)","answer_incorrect_answer_80efe585":"%{answer}, (Feil svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar som resultat i bunnen 27%","answers_which_scored_in_the_middle_46_46466ffd":"Svar som resultat i midten 46%","answers_which_scored_in_the_top_27_a605232d":"Svar som resultat blant de øverste 27%","correct_answer_5a6a57d1":"Riktig svar","correct_check_icon_617da6c3":"Korrekt avmerkingsikon","graph_bar_b5daa23d":"Grafisk søyle","incorrect_answer_7c17e63b":"Feil svar","ungraded_answers_31ef2df7":"Svar uten vurdering","unknown_answers_9688a2bc":"Ukjente svar","usercount_respondents_1521244":"%{userCount} respondenter"},"nb-x-k12":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Riktig svar)","answer_incorrect_answer_80efe585":"%{answer}, (Feil svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar som resultat i bunnen 27%","answers_which_scored_in_the_middle_46_46466ffd":"Svar som resultat i midten 46%","answers_which_scored_in_the_top_27_a605232d":"Svar som resultat blant de øverste 27%","correct_answer_5a6a57d1":"Riktig svar","correct_check_icon_617da6c3":"Korrekt avmerkingsikon","graph_bar_b5daa23d":"Grafisk søyle","incorrect_answer_7c17e63b":"Feil svar","ungraded_answers_31ef2df7":"Svar uten vurdering","unknown_answers_9688a2bc":"Ukjente svar","usercount_respondents_1521244":"%{userCount} respondenter"},"nl":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Juist antwoord)","answer_incorrect_answer_80efe585":"%{answer}, (Juist antwoord)","answers_which_scored_in_the_bottom_27_74409483":"Antwoorden die scoorden in de laagste 27% ","answers_which_scored_in_the_middle_46_46466ffd":"Antwoorden die scoorden in de laagste 46%","answers_which_scored_in_the_top_27_a605232d":"Antwoorden die scoorden in de hoogste 27%","correct_answer_5a6a57d1":"Juiste antwoord","correct_check_icon_617da6c3":"vinkje corrigeren","graph_bar_b5daa23d":"Grafiekbalk","incorrect_answer_7c17e63b":"Onjuist antwoord","ungraded_answers_31ef2df7":"Niet-beoordeelde antwoorden","unknown_answers_9688a2bc":"Onbekende antwoorden","usercount_respondents_1521244":"%{userCount} respondents"},"nn":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Rett svar)","answer_incorrect_answer_80efe585":"%{answer}, (Feil svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar innan dei lågaste 27%","answers_which_scored_in_the_middle_46_46466ffd":"Svar innan dei midtste 46%","answers_which_scored_in_the_top_27_a605232d":"Svar innan dei høgste 27%","correct_answer_5a6a57d1":"Rett svar","correct_check_icon_617da6c3":"rett avhakingsikon","graph_bar_b5daa23d":"Grafsøyle","incorrect_answer_7c17e63b":"Feil svar","ungraded_answers_31ef2df7":"Svar som ikkje er vurderte","unknown_answers_9688a2bc":"Ukjende svar","usercount_respondents_1521244":"%{userCount} respondentar"},"pl":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Poprawna odpowiedź)","answer_incorrect_answer_80efe585":"%{answer}, (Niepoprawna odpowiedź)","answers_which_scored_in_the_bottom_27_74409483":"Odpowiedzi, które zostały zaliczone do najniższych 27%","answers_which_scored_in_the_middle_46_46466ffd":"Odpowiedzi, które zostały zaliczone w średnim 46%","answers_which_scored_in_the_top_27_a605232d":"Odpowiedzi, które zostały zaliczone do najwyższych 27%","correct_answer_5a6a57d1":"Prawidłowa odpowiedź","correct_check_icon_617da6c3":"prawidłowa ikona check","graph_bar_b5daa23d":"Wykres słupkowy","incorrect_answer_7c17e63b":"Niepoprawna odpowiedź","ungraded_answers_31ef2df7":"Nieocenione odpowiedzi","unknown_answers_9688a2bc":"Nieznane odpowiedzi","usercount_respondents_1521244":"%{userCount} respondentów"},"pt":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Resposta Correta)","answer_incorrect_answer_80efe585":"%{answer}, (Resposta Incorreta)","answers_which_scored_in_the_bottom_27_74409483":"Respostas com pontuação abaixo dos 27%","answers_which_scored_in_the_middle_46_46466ffd":"Respostas com pontuação média 46%","answers_which_scored_in_the_top_27_a605232d":"Respostas com pontuação superior a 27%","correct_answer_5a6a57d1":"Resposta Correta","correct_check_icon_617da6c3":"icone de verificação correta","graph_bar_b5daa23d":"Gráfico de barras","incorrect_answer_7c17e63b":"Resposta Errada","ungraded_answers_31ef2df7":"Respostas não avaliadas","unknown_answers_9688a2bc":"Respostas desconhecidas","usercount_respondents_1521244":"%{userCount} inquiridos"},"pt-BR":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Resposta correta)","answer_incorrect_answer_80efe585":"%{answer}, (Resposta incorreta)","answers_which_scored_in_the_bottom_27_74409483":"Respostas que marcaram na parte inferior 27%","answers_which_scored_in_the_middle_46_46466ffd":"Respostas que marcaram no meio 46%","answers_which_scored_in_the_top_27_a605232d":"Respostas que marcaram na parte superior 27%","correct_answer_5a6a57d1":"Resposta Correta","correct_check_icon_617da6c3":"ícone de marcação correta","graph_bar_b5daa23d":"Gráfico de barras","incorrect_answer_7c17e63b":"Resposta Incorreta","ungraded_answers_31ef2df7":"Respostas não avaliadas","unknown_answers_9688a2bc":"Respostas desconhecidas","usercount_respondents_1521244":"%{userCount} respondentes"},"ru":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Правильный ответ)","answer_incorrect_answer_80efe585":"%{answer}, (Неправильный ответ)","answers_which_scored_in_the_bottom_27_74409483":"Ответы, которые набрали нижние 27% баллов","answers_which_scored_in_the_middle_46_46466ffd":"Ответы, которые набрали 46% баллов посередине","answers_which_scored_in_the_top_27_a605232d":"Ответы, которые набрали верхние 27% баллов","correct_answer_5a6a57d1":"Правильный ответ","correct_check_icon_617da6c3":"правильная отмеченная иконка","graph_bar_b5daa23d":"Гистограмма","incorrect_answer_7c17e63b":"Неправильный ответ","ungraded_answers_31ef2df7":"Ответы без оценки","unknown_answers_9688a2bc":"Неизвестные ответы","usercount_respondents_1521244":"%{userCount} респондентов"},"sl":{"_b4455c8b":"%"},"sv":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (rätt svar)","answer_incorrect_answer_80efe585":"%{answer}, (fel svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar i de lägre 27%","answers_which_scored_in_the_middle_46_46466ffd":"Svar i medel 46%","answers_which_scored_in_the_top_27_a605232d":"Svar i övre 27%","correct_answer_5a6a57d1":"Rätt svar","correct_check_icon_617da6c3":"rätt kryssikon","graph_bar_b5daa23d":"Diagramstapel","incorrect_answer_7c17e63b":"Fel svar","ungraded_answers_31ef2df7":"Ej bedömda svar","unknown_answers_9688a2bc":"Okända svar","usercount_respondents_1521244":"%{userCount} respondenter"},"sv-x-k12":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (rätt svar)","answer_incorrect_answer_80efe585":"%{answer}, (fel svar)","answers_which_scored_in_the_bottom_27_74409483":"Svar i de lägre 27%","answers_which_scored_in_the_middle_46_46466ffd":"Svar i medel 46%","answers_which_scored_in_the_top_27_a605232d":"Svar i övre 27%","correct_answer_5a6a57d1":"Rätt svar","correct_check_icon_617da6c3":"rätt kryssikon","graph_bar_b5daa23d":"Diagramstapel","incorrect_answer_7c17e63b":"Fel svar","ungraded_answers_31ef2df7":"Ej bedömda svar","unknown_answers_9688a2bc":"Okända svar","usercount_respondents_1521244":"%{userCount} respondenter"},"tr":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Doğru cevap)","answer_incorrect_answer_80efe585":"%{answer}, (Yanlış cevap)","answers_which_scored_in_the_bottom_27_74409483":"%27\'nin altında notlandırılmış cevaplar","answers_which_scored_in_the_middle_46_46466ffd":"%46\'lık orta alanda notlandırılmış cevaplar","answers_which_scored_in_the_top_27_a605232d":"En süt %27\'de notlandırılmış cevaplar","correct_answer_5a6a57d1":"Doğru Cevap","correct_check_icon_617da6c3":"doğru kontrol simgesi","graph_bar_b5daa23d":"Grafik çubuğu","incorrect_answer_7c17e63b":"Yanlış Cevap"},"uk":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (Правильна відповідь)","answer_incorrect_answer_80efe585":"%{answer}, (Неправильна відповідь)","answers_which_scored_in_the_bottom_27_74409483":"Відповіді, які набрали нижче 27%","answers_which_scored_in_the_middle_46_46466ffd":"Відповіді, які набрали в середньому 46%","answers_which_scored_in_the_top_27_a605232d":"Відповіді, які набрали вище 27%","correct_answer_5a6a57d1":"Правильна відповідь","correct_check_icon_617da6c3":"пікрограма коректної перевірки","graph_bar_b5daa23d":"Гістограма","incorrect_answer_7c17e63b":"Неправильна відповідь","ungraded_answers_31ef2df7":"Неоцінені відповіді","unknown_answers_9688a2bc":"Невідомі відповіді","usercount_respondents_1521244":"%{userCount} респондентів"},"zh-Hans":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}, (正确答案)","answer_incorrect_answer_80efe585":"%{answer}, (非正确答案)","answers_which_scored_in_the_bottom_27_74409483":"位于底部的27％得分的答案","answers_which_scored_in_the_middle_46_46466ffd":"位于中间的46％得分的答案","answers_which_scored_in_the_top_27_a605232d":"位于顶部的27％得分的答案","correct_answer_5a6a57d1":"正确答案","correct_check_icon_617da6c3":"正确的校验图标","graph_bar_b5daa23d":"图形栏","incorrect_answer_7c17e63b":"非正确答案","ungraded_answers_31ef2df7":"未评分的答案","unknown_answers_9688a2bc":"未知的答案","usercount_respondents_1521244":"%{userCount} 回应"},"zh-Hant":{"_b4455c8b":"%","answer_correct_answer_c2c4a20c":"%{answer}，（正確答案）","answer_incorrect_answer_80efe585":"%{answer}，（不正確答案）","answers_which_scored_in_the_bottom_27_74409483":"得分排名位於底部27%的答案","answers_which_scored_in_the_middle_46_46466ffd":"得分排名位於中部46%的答案","answers_which_scored_in_the_top_27_a605232d":"得分排名位於頂部27%的答案","correct_answer_5a6a57d1":"正確答案","correct_check_icon_617da6c3":"正確確認圖標","graph_bar_b5daa23d":"圖表欄","incorrect_answer_7c17e63b":"不正確的答案","ungraded_answers_31ef2df7":"未評分的答案","unknown_answers_9688a2bc":"未知答案","usercount_respondents_1521244":"%{userCount} 個回應"}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quiz_statistics.answers_tables")},"W/cH":function(e,t,n){var i
i=function(){var e="multiple_answers_question"
return function(t,n,i){var a,r
n=parseInt(n||0,10)
if(n<=0)return 0
i&&(a=i.questionType)
r=e===a?i.correctResponseCount||0:t.reduce(function(e,t){return t.correct?e+t.responses:e},0)
return parseFloat(r)/n}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Wx5O:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("b0yZ").default
var a=n("pWEL")
var r=t.createClass({displayName:"QuestionHeader",getDefaultProps:function(){return{position:1,responseCount:0,participantCount:0}},render:function(){return t.DOM.header(null,a({tagName:"h3"},i.t("question_header","Question %{position}",{position:this.props.position})),a({dangerouslySetInnerHTML:{__html:this.props.questionText}}),t.DOM.span({className:"question-attempts"},i.t("attempts","Attempts: %{count} out of %{total}",{count:this.props.responseCount,total:this.props.participantCount})))}})
return r}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Wzgt:function(e,t,n){var i,a,r;(function(s,o,c){(function(s){"use strict"
a=[n("ouhR")],i=s,r="function"===typeof i?i.apply(t,a):i,r!==c&&(e.exports=r)})(function(e){"use strict"
var t,n,i,a,r,d=true,_=false,l=null,u="x",p="y",h="width",g="height",m="top",f="left",b="bottom",v="right",w="center",y="flipinvert",k="shift",x={},z="qtip",S="data-hasqtip",q="data-qtip-id",D=["ui-widget","ui-tooltip"],T="."+z,A="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),R=z+"-fixed",C=z+"-default",L=z+"-focus",O=z+"-hover",N=z+"-disabled",M="_replacedByqTip",P="oldtitle",I={ie:function(){var e=3,t=o.createElement("div")
while(t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e")if(!t.getElementsByTagName("i")[0])break
return e>4?e:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||_}
function E(t,n,i,a){this.id=i
this.target=t
this.tooltip=l
this.elements={target:t}
this._id=z+"-"+i
this.timers={img:{}}
this.options=n
this.plugins={}
this.cache={event:{},target:e(),disabled:_,attr:a,onTooltip:_,lastClass:""}
this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=_}n=E.prototype
n._when=function(t){return e.when.apply(e,t)}
n.render=function(n){if(this.rendered||this.destroyed)return this
var i=this,a=this.options,r=this.cache,s=this.elements,o=a.content.text,c=a.content.title,l=a.content.button,u=a.position,p=(this._id,[])
e.attr(this.target[0],"aria-describedby",this._id)
this.tooltip=s.tooltip=e("<div/>",{id:this._id,class:[z,C,a.style.classes,z+"-pos-"+a.position.my.abbrev()].join(" "),width:a.style.width||"",height:a.style.height||"",tracking:"mouse"===u.target&&u.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":_,"aria-describedby":this._id+"-content","aria-hidden":d}).toggleClass(N,this.disabled).attr(q,this.id).data(z,this).appendTo(u.container).append(s.content=e("<div />",{class:z+"-content",id:this._id+"-content","aria-atomic":d}))
this.rendered=-1
this.positioning=d
if(c){this._createTitle()
e.isFunction(c)||p.push(this._updateTitle(c,_))}l&&this._createButton()
e.isFunction(o)||p.push(this._updateContent(o,_))
this.rendered=d
this._setWidget()
e.each(x,function(e){var t
"render"===this.initialize&&(t=this(i))&&(i.plugins[e]=t)})
this._unassignEvents()
this._assignEvents()
this._when(p).then(function(){i._trigger("render")
i.positioning=_
i.hiddenDuringWait||!a.show.ready&&!n||i.toggle(d,r.event,_)
i.hiddenDuringWait=_})
t.api[this.id]=this
return this}
n.destroy=function(n){if(this.destroyed)return this.target
function i(){if(this.destroyed)return
this.destroyed=d
var n=this.target,i=n.attr(P)
this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove()
e.each(this.plugins,function(e){this.destroy&&this.destroy()})
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this._unassignEvents()
n.removeData(z).removeAttr(q).removeAttr(S).removeAttr("aria-describedby")
this.options.suppress&&i&&n.attr("title",i).removeAttr(P)
this._unbind(n)
this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=l
delete t.api[this.id]}if(n===d&&"hide"!==this.triggering||!this.rendered)i.call(this)
else{this.tooltip.one("tooltiphidden",e.proxy(i,this))
!this.triggering&&this.hide()}return this.target}
function G(t){return t===l||"object"!==e.type(t)}function j(t){return!(e.isFunction(t)||t&&t.attr||t.length||"object"===e.type(t)&&(t.jquery||t.then))}function B(t){var n,i,a,r
if(G(t))return _
G(t.metadata)&&(t.metadata={type:t.metadata})
if("content"in t){n=t.content
G(n)||n.jquery||n.done?n=t.content={text:i=j(n)?_:n}:i=n.text
if("ajax"in n){a=n.ajax
r=a&&a.once!==_
delete n.ajax
n.text=function(t,n){var s=i||e(this).attr(n.options.content.attr)||"Loading...",o=e.ajax(e.extend({},a,{context:n})).then(a.success,l,a.error).then(function(e){e&&r&&n.set("content.text",e)
return e},function(e,t,i){if(n.destroyed||0===e.status)return
n.set("content.text",t+": "+i)})
return r?s:(n.set("content.text",s),o)}}if("title"in n){if(!G(n.title)){n.button=n.title.button
n.title=n.title.text}j(n.title||_)&&(n.title=_)}}"position"in t&&G(t.position)&&(t.position={my:t.position,at:t.position})
"show"in t&&G(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===d?{ready:d}:{event:t.show})
"hide"in t&&G(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide})
"style"in t&&G(t.style)&&(t.style={classes:t.style})
e.each(x,function(){this.sanitize&&this.sanitize(t)})
return t}a=n.checks={builtin:{"^id$":function(n,i,a,r){var s=a===d?t.nextid:a,o=z+"-"+s
if(s!==_&&s.length>0&&!e("#"+o).length){this._id=o
if(this.rendered){this.tooltip[0].id=this._id
this.elements.content[0].id=this._id+"-content"
this.elements.title[0].id=this._id+"-title"}}else n[i]=r},"^prerender":function(e,t,n){n&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(e,t,n){this._updateContent(n)},"^content.attr$":function(e,t,n,i){this.options.content.text===this.target.attr(i)&&this._updateContent(this.target.attr(n))},"^content.title$":function(e,t,n){if(!n)return this._removeTitle()
n&&!this.elements.title&&this._createTitle()
this._updateTitle(n)},"^content.button$":function(e,t,n){this._updateButton(n)},"^content.title.(text|button)$":function(e,t,n){this.set("content."+t,n)},"^position.(my|at)$":function(e,t,n){"string"===typeof n&&(e[t]=new i(n,"at"===t))},"^position.container$":function(e,t,n){this.rendered&&this.tooltip.appendTo(n)},"^show.ready$":function(e,t,n){n&&(!this.rendered&&this.render(d)||this.toggle(d))},"^style.classes$":function(e,t,n,i){this.rendered&&this.tooltip.removeClass(i).addClass(n)},"^style.(width|height)":function(e,t,n){this.rendered&&this.tooltip.css(t,n)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(e,t,n){this.rendered&&this.tooltip.toggleClass(C,!!n)},"^events.(render|show|move|hide|focus|blur)$":function(t,n,i){this.rendered&&this.tooltip[(e.isFunction(i)?"":"un")+"bind"]("tooltip"+n,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(!this.rendered)return
var e=this.options.position
this.tooltip.attr("tracking","mouse"===e.target&&e.adjust.mouse)
this._unassignEvents()
this._assignEvents()}}}
function U(e,t){var n,i=0,a=e,r=t.split(".")
while(a=a[r[i++]])i<r.length&&(n=a)
return[n||e,r.pop()]}n.get=function(e){if(this.destroyed)return this
var t=U(this.options,e.toLowerCase()),n=t[0][t[1]]
return n.precedance?n.string():n}
function W(e,t){var n,i,a
for(n in this.checks)for(i in this.checks[n])if(a=new RegExp(i,"i").exec(e)){t.push(a);("builtin"===n||this.plugins[n])&&this.checks[n][i].apply(this.plugins[n]||this,t)}}var H=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,F=/^prerender|show\.ready/i
n.set=function(t,n){if(this.destroyed)return this
var i,a=this.rendered,r=_,s=this.options
this.checks
if("string"===typeof t){i=t
t={}
t[i]=n}else t=e.extend({},t)
e.each(t,function(n,i){if(a&&F.test(n)){delete t[n]
return}var o,c=U(s,n.toLowerCase())
o=c[0][c[1]]
c[0][c[1]]=i&&i.nodeType?e(i):i
r=H.test(n)||r
t[n]=[c[0],c[1],i,o]})
B(s)
this.positioning=d
e.each(t,e.proxy(W,this))
this.positioning=_
this.rendered&&this.tooltip[0].offsetWidth>0&&r&&this.reposition("mouse"===s.position.target?l:this.cache.event)
return this}
n._update=function(t,n,i){var a=this,r=this.cache
if(!this.rendered||!t)return _
e.isFunction(t)&&(t=t.call(this.elements.target,r.event,this)||"")
if(e.isFunction(t.then)){r.waiting=d
return t.then(function(e){r.waiting=_
return a._update(e,n)},l,function(e){return a._update(e,n)})}if(t===_||!t&&""!==t)return _
t.jquery&&t.length>0?n.empty().append(t.css({display:"block",visibility:"visible"})):n.html(t)
return this._waitForContent(n).then(function(e){e.images&&e.images.length&&a.rendered&&a.tooltip[0].offsetWidth>0&&a.reposition(r.event,!e.length)})}
n._waitForContent=function(t){var n=this.cache
n.waiting=d
return(e.fn.imagesLoaded?t.imagesLoaded():e.Deferred().resolve([])).done(function(){n.waiting=_}).promise()}
n._updateContent=function(e,t){this._update(e,this.elements.content,t)}
n._updateTitle=function(e,t){this._update(e,this.elements.title,t)===_&&this._removeTitle(_)}
n._createTitle=function(){var t=this.elements,n=this._id+"-title"
t.titlebar&&this._removeTitle()
t.titlebar=e("<div />",{class:z+"-titlebar "+(this.options.style.widget?V("header"):"")}).append(t.title=e("<div />",{id:n,class:z+"-title","aria-atomic":d})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){e(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){e(this).toggleClass("ui-state-hover","mouseover"===t.type)})
this.options.content.button&&this._createButton()}
n._removeTitle=function(e){var t=this.elements
if(t.title){t.titlebar.remove()
t.titlebar=t.title=t.button=l
e!==_&&this.reposition()}}
n.reposition=function(t,n){if(!this.rendered||this.positioning||this.destroyed)return this
this.positioning=d
var i,a,r=this.cache,c=this.tooltip,l=this.options.position,u=l.target,p=l.my,h=l.at,g=l.viewport,y=l.container,k=l.adjust,z=k.method.split(" "),S=c.outerWidth(_),q=c.outerHeight(_),D=0,T=0,A=c.css("position"),R={left:0,top:0},C=c[0].offsetWidth>0,L=t&&"scroll"===t.type,O=e(s),N=y[0].ownerDocument,M=this.mouse
if(e.isArray(u)&&2===u.length){h={x:f,y:m}
R={left:u[0],top:u[1]}}else if("mouse"===u){h={x:f,y:m}
!M||!M.pageX||!k.mouse&&t&&t.pageX?t&&t.pageX||((!k.mouse||this.options.show.distance)&&r.origin&&r.origin.pageX?t=r.origin:t&&(!t||"resize"!==t.type&&"scroll"!==t.type)||(t=r.event)):t=M
"static"!==A&&(R=y.offset())
N.body.offsetWidth!==(s.innerWidth||N.documentElement.clientWidth)&&(a=e(o.body).offset())
R={left:t.pageX-R.left+(a&&a.left||0),top:t.pageY-R.top+(a&&a.top||0)}
if(k.mouse&&L&&M){R.left-=(M.scrollX||0)-O.scrollLeft()
R.top-=(M.scrollY||0)-O.scrollTop()}}else{"event"===u?t&&t.target&&"scroll"!==t.type&&"resize"!==t.type?r.target=e(t.target):t.target||(r.target=this.elements.target):"event"!==u&&(r.target=e(u.jquery?u:this.elements.target))
u=r.target
u=e(u).eq(0)
if(0===u.length)return this
if(u[0]===o||u[0]===s){D=I.iOS?s.innerWidth:u.width()
T=I.iOS?s.innerHeight:u.height()
u[0]===s&&(R={top:(g||u).scrollTop(),left:(g||u).scrollLeft()})}else if(x.imagemap&&u.is("area"))i=x.imagemap(this,u,h,x.viewport?z:_)
else if(x.svg&&u&&u[0].ownerSVGElement)i=x.svg(this,u,h,x.viewport?z:_)
else{D=u.outerWidth(_)
T=u.outerHeight(_)
R=u.offset()}if(i){D=i.width
T=i.height
a=i.offset
R=i.position}R=this.reposition.offset(u,R,y)
if(I.iOS>3.1&&I.iOS<4.1||I.iOS>=4.3&&I.iOS<4.33||!I.iOS&&"fixed"===A){R.left-=O.scrollLeft()
R.top-=O.scrollTop()}if(!i||i&&i.adjustable!==_){R.left+=h.x===v?D:h.x===w?D/2:0
R.top+=h.y===b?T:h.y===w?T/2:0}}R.left+=k.x+(p.x===v?-S:p.x===w?-S/2:0)
R.top+=k.y+(p.y===b?-q:p.y===w?-q/2:0)
if(x.viewport){R.adjusted=x.viewport(this,R,l,D,T,S,q)
a&&R.adjusted.left&&(R.left+=a.left)
a&&R.adjusted.top&&(R.top+=a.top)}else R.adjusted={left:0,top:0}
if(!this._trigger("move",[R,g.elem||g],t))return this
delete R.adjusted
if(n===_||!C||isNaN(R.left)||isNaN(R.top)||"mouse"===u||!e.isFunction(l.effect))c.css(R)
else if(e.isFunction(l.effect)){l.effect.call(c,this,e.extend({},R))
c.queue(function(t){e(this).css({opacity:"",height:""})
I.ie&&this.style.removeAttribute("filter")
t()})}this.positioning=_
return this}
n.reposition.offset=function(t,n,i){if(!i[0])return n
var a,r,s,c,d=e(t[0].ownerDocument),_=!!I.ie&&"CSS1Compat"!==o.compatMode,l=i[0]
function u(e,t){n.left+=t*e.scrollLeft()
n.top+=t*e.scrollTop()}do{if("static"!==(r=e.css(l,"position"))){if("fixed"===r){s=l.getBoundingClientRect()
u(d,-1)}else{s=e(l).position()
s.left+=parseFloat(e.css(l,"borderLeftWidth"))||0
s.top+=parseFloat(e.css(l,"borderTopWidth"))||0}n.left-=s.left+(parseFloat(e.css(l,"marginLeft"))||0)
n.top-=s.top+(parseFloat(e.css(l,"marginTop"))||0)
a||"hidden"===(c=e.css(l,"overflow"))||"visible"===c||(a=e(l))}}while(l=l.offsetParent)
a&&(a[0]!==d[0]||_)&&u(a,1)
return n}
var Q=(i=n.reposition.Corner=function(e,t){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,w).toLowerCase()
this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase()
this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase()
this.forceY=!!t
var n=e.charAt(0)
this.precedance="t"===n||"b"===n?p:u}).prototype
Q.invert=function(e,t){this[e]=this[e]===f?v:this[e]===v?f:t||this[e]}
Q.string=function(){var e=this.x,t=this.y
return e===t?e:this.precedance===p||this.forceY&&"center"!==t?t+" "+e:e+" "+t}
Q.abbrev=function(){var e=this.string().split(" ")
return e[0].charAt(0)+(e[1]&&e[1].charAt(0)||"")}
Q.clone=function(){return new i(this.string(),this.forceY)}
n.toggle=function(t,n){var i=this.cache,a=this.options,s=this.tooltip
if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(i.event.type)&&a.show.target.add(n.target).length===a.show.target.length&&s.has(n.relatedTarget).length)return this
i.event=K(n)}this.waiting&&!t&&(this.hiddenDuringWait=d)
if(!this.rendered)return t?this.render(1):this
if(this.destroyed||this.disabled)return this
var c,u,p,h=t?"show":"hide",g=this.options[h],m=(this.options[t?"hide":"show"],this.options.position),f=this.options.content,b=this.tooltip.css("width"),v=this.tooltip.is(":visible"),w=t||1===g.target.length,y=!n||g.target.length<2||i.target[0]===n.target;(typeof t).search("boolean|number")&&(t=!v)
c=!s.is(":animated")&&v===t&&y
u=c?l:!!this._trigger(h,[90])
if(this.destroyed)return this
u!==_&&t&&this.focus(n)
if(!u||c)return this
e.attr(s[0],"aria-hidden",!!!t)
if(t){i.origin=K(this.mouse)
e.isFunction(f.text)&&this._updateContent(f.text,_)
e.isFunction(f.title)&&this._updateTitle(f.title,_)
if(!r&&"mouse"===m.target&&m.adjust.mouse){e(o).bind("mousemove."+z,this._storeMouse)
r=d}b||s.css("width",s.outerWidth(_))
this.reposition(n,arguments[2])
b||s.css("width","")
!g.solo||("string"===typeof g.solo?e(g.solo):e(T,g.solo)).not(s).not(g.target).qtip("hide",e.Event("tooltipsolo"))}else{clearTimeout(this.timers.show)
delete i.origin
if(r&&!e(T+'[tracking="true"]:visible',g.solo).not(s).length){e(o).unbind("mousemove."+z)
r=_}this.blur(n)}p=e.proxy(function(){if(t){I.ie&&s[0].style.removeAttribute("filter")
s.css("overflow","")
"string"===typeof g.autofocus&&e(this.options.show.autofocus,s).focus()
this.options.show.target.trigger("qtip-"+this.id+"-inactive")}else s.css({display:"",visibility:"",opacity:"",left:"",top:""})
this._trigger(t?"visible":"hidden")},this)
if(g.effect===_||w===_){s[h]()
p()}else if(e.isFunction(g.effect)){s.stop(1,1)
g.effect.call(s,this)
s.queue("fx",function(e){p()
e()})}else s.fadeTo(90,t?1:0,p)
t&&g.target.trigger("qtip-"+this.id+"-inactive")
return this}
n.show=function(e){return this.toggle(d,e)}
n.hide=function(e){return this.toggle(_,e)}
n.focus=function(n){if(!this.rendered||this.destroyed)return this
var i=e(T),a=this.tooltip,r=parseInt(a[0].style.zIndex,10),s=t.zindex+i.length
if(!a.hasClass(L)&&this._trigger("focus",[s],n)){if(r!==s){i.each(function(){this.style.zIndex>r&&(this.style.zIndex=this.style.zIndex-1)})
i.filter("."+L).qtip("blur",n)}a.addClass(L)[0].style.zIndex=s}return this}
n.blur=function(e){if(!this.rendered||this.destroyed)return this
this.tooltip.removeClass(L)
this._trigger("blur",[this.tooltip.css("zIndex")],e)
return this}
n.disable=function(e){if(this.destroyed)return this
"toggle"===e?e=!(this.rendered?this.tooltip.hasClass(N):this.disabled):"boolean"!==typeof e&&(e=d)
this.rendered&&this.tooltip.toggleClass(N,e).attr("aria-disabled",e)
this.disabled=!!e
return this}
n.enable=function(){return this.disable(_)}
n._createButton=function(){var t=this,n=this.elements,i=n.tooltip,a=this.options.content.button,r="string"===typeof a,s=r?a:"Close tooltip"
n.button&&n.button.remove()
a.jquery?n.button=a:n.button=e("<a />",{class:"qtip-close "+(this.options.style.widget?"":z+"-icon"),title:s,"aria-label":s}).prepend(e("<span />",{class:"ui-icon ui-icon-close",html:"&times;"}))
n.button.appendTo(n.titlebar||i).attr("role","button").click(function(e){i.hasClass(N)||t.hide(e)
return _})}
n._updateButton=function(e){if(!this.rendered)return _
var t=this.elements.button
e?this._createButton():t.remove()}
function V(e){return D.concat("").join(e?"-"+e+" ":" ")}n._setWidget=function(){var e=this.options.style.widget,t=this.elements,n=t.tooltip,i=n.hasClass(N)
n.removeClass(N)
N=e?"ui-state-disabled":"qtip-disabled"
n.toggleClass(N,i)
n.toggleClass("ui-helper-reset "+V(),e).toggleClass(C,this.options.style.def&&!e)
t.content&&t.content.toggleClass(V("content"),e)
t.titlebar&&t.titlebar.toggleClass(V("header"),e)
t.button&&t.button.toggleClass(z+"-icon",!e)}
function K(e){return e&&{type:e.type,pageX:e.pageX,pageY:e.pageY,target:e.target,relatedTarget:e.relatedTarget,scrollX:e.scrollX||s.pageXOffset||o.body.scrollLeft||o.documentElement.scrollLeft,scrollY:e.scrollY||s.pageYOffset||o.body.scrollTop||o.documentElement.scrollTop}||{}}function Y(t,n){if(n>0)return setTimeout(e.proxy(t,this),n)
t.call(this)}function J(e){if(this.tooltip.hasClass(N))return _
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this.timers.show=Y.call(this,function(){this.toggle(d,e)},this.options.show.delay)}function Z(t){if(this.tooltip.hasClass(N))return _
var n=e(t.relatedTarget),i=n.closest(T)[0]===this.tooltip[0],a=n[0]===this.options.show.target[0]
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
if(this!==n[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||a)){try{t.preventDefault()
t.stopImmediatePropagation()}catch(e){}return}this.timers.hide=Y.call(this,function(){this.toggle(_,t)},this.options.hide.delay,this)}function $(e){if(this.tooltip.hasClass(N)||!this.options.hide.inactive)return _
clearTimeout(this.timers.inactive)
this.timers.inactive=Y.call(this,function(){this.hide(e)},this.options.hide.inactive)}function X(e){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(e)}n._storeMouse=function(e){(this.mouse=K(e)).type="mousemove"}
n._bind=function(t,n,i,a,r){var s="."+this._id+(a?"-"+a:"")
n.length&&e(t).bind((n.split?n:n.join(s+" "))+s,e.proxy(i,r||this))}
n._unbind=function(t,n){e(t).unbind("."+this._id+(n?"-"+n:""))}
var ee="."+z
function te(n,i,a){e(o.body).delegate(n,(i.split?i:i.join(ee+" "))+ee,function(){var n=t.api[e.attr(this,q)]
n&&!n.disabled&&a.apply(n,arguments)})}e(function(){te(T,["mouseenter","mouseleave"],function(t){var n="mouseenter"===t.type,i=e(t.currentTarget),a=e(t.relatedTarget||t.target),r=this.options
if(n){this.focus(t)
i.hasClass(R)&&!i.hasClass(N)&&clearTimeout(this.timers.hide)}else"mouse"===r.position.target&&r.hide.event&&r.show.target&&!a.closest(r.show.target[0]).length&&this.hide(t)
i.toggleClass(O,n)})
te("["+q+"]",A,$)})
n._trigger=function(t,n,i){var a=e.Event("tooltip"+t)
a.originalEvent=i&&e.extend({},i)||this.cache.event||l
this.triggering=t
this.tooltip.trigger(a,[this].concat(n||[]))
this.triggering=_
return!a.isDefaultPrevented()}
n._bindEvents=function(t,n,i,a,r,s){if(a.add(i).length===a.length){var o=[]
n=e.map(n,function(n){var i=e.inArray(n,t)
if(i>-1){o.push(t.splice(i,1)[0])
return}return n})
o.length&&this._bind(i,o,function(e){var t=!!this.rendered&&this.tooltip[0].offsetWidth>0;(t?s:r).call(this,e)})}this._bind(i,t,r)
this._bind(a,n,s)}
n._assignInitialEvents=function(t){var n=this.options,i=n.show.target,a=n.hide.target,r=n.show.event?e.trim(""+n.show.event).split(" "):[],s=n.hide.event?e.trim(""+n.hide.event).split(" "):[];/mouse(over|enter)/i.test(n.show.event)&&!/mouse(out|leave)/i.test(n.hide.event)&&s.push("mouseleave")
this._bind(i,"mousemove",function(e){this._storeMouse(e)
this.cache.onTarget=d})
function o(t){if(this.disabled||this.destroyed)return _
this.cache.event=K(t)
this.cache.target=t?e(t.target):[c]
clearTimeout(this.timers.show)
this.timers.show=Y.call(this,function(){this.render("object"===typeof t||n.show.ready)},n.show.delay)}this._bindEvents(r,s,i,a,o,function(){clearTimeout(this.timers.show)});(n.show.ready||n.prerender)&&o.call(this,t)}
n._assignEvents=function(){var n=this,i=this.options,a=i.position,r=this.tooltip,c=i.show.target,d=i.hide.target,_=a.container,l=a.viewport,u=e(o),p=(e(o.body),e(s)),h=i.show.event?e.trim(""+i.show.event).split(" "):[],g=i.hide.event?e.trim(""+i.hide.event).split(" "):[]
e.each(i.events,function(e,t){n._bind(r,"toggle"===e?["tooltipshow","tooltiphide"]:["tooltip"+e],t,null,r)});/mouse(out|leave)/i.test(i.hide.event)&&"window"===i.hide.leave&&this._bind(u,["mouseout","blur"],function(e){/select|option/.test(e.target.nodeName)||e.relatedTarget||this.hide(e)})
i.hide.fixed?d=d.add(r.addClass(R)):/mouse(over|enter)/i.test(i.show.event)&&this._bind(d,"mouseleave",function(){clearTimeout(this.timers.show)});(""+i.hide.event).indexOf("unfocus")>-1&&this._bind(_.closest("html"),["mousedown","touchstart"],function(t){var n=e(t.target),i=this.rendered&&!this.tooltip.hasClass(N)&&this.tooltip[0].offsetWidth>0,a=n.parents(T).filter(this.tooltip[0]).length>0
n[0]===this.target[0]||n[0]===this.tooltip[0]||a||this.target.has(n[0]).length||!i||this.hide(t)})
if("number"===typeof i.hide.inactive){this._bind(c,"qtip-"+this.id+"-inactive",$)
this._bind(d.add(r),t.inactiveEvents,$,"-inactive")}this._bindEvents(h,g,c,d,J,Z)
this._bind(c.add(r),"mousemove",function(e){if("number"===typeof i.hide.distance){var t=this.cache.origin||{},n=this.options.hide.distance,a=Math.abs;(a(e.pageX-t.pageX)>=n||a(e.pageY-t.pageY)>=n)&&this.hide(e)}this._storeMouse(e)})
if("mouse"===a.target&&a.adjust.mouse){i.hide.event&&this._bind(c,["mouseenter","mouseleave"],function(e){this.cache.onTarget="mouseenter"===e.type})
this._bind(u,"mousemove",function(e){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(N)&&this.tooltip[0].offsetWidth>0&&this.reposition(e)})}(a.adjust.resize||l.length)&&this._bind(e.event.special.resize?l:p,"resize",X)
a.adjust.scroll&&this._bind(p.add(a.container),"scroll",X)}
n._unassignEvents=function(){var t=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],s,o]
this._unbind(e([]).pushStack(e.grep(t,function(e){return"object"===typeof e})))}
function ne(n,a,r){var s,c,u,p,h,g=e(o.body),m=n[0]===o?g:n,f=n.metadata?n.metadata(r.metadata):l,b="html5"===r.metadata.type&&f?f[r.metadata.name]:l,v=n.data(r.metadata.name||"qtipopts")
try{v="string"===typeof v?e.parseJSON(v):v}catch(e){}p=e.extend(d,{},t.defaults,r,"object"===typeof v?B(v):l,B(b||f))
c=p.position
p.id=a
if("boolean"===typeof p.content.text){u=n.attr(p.content.attr)
if(p.content.attr===_||!u)return _
p.content.text=u}c.container.length||(c.container=g)
c.target===_&&(c.target=m)
p.show.target===_&&(p.show.target=m)
p.show.solo===d&&(p.show.solo=c.container.closest("body"))
p.hide.target===_&&(p.hide.target=m)
p.position.viewport===d&&(p.position.viewport=c.container)
c.container=c.container.eq(0)
c.at=new i(c.at,d)
c.my=new i(c.my)
if(n.data(z))if(p.overwrite)n.qtip("destroy",true)
else if(p.overwrite===_)return _
n.attr(S,a)
p.suppress&&(h=n.attr("title"))&&n.removeAttr("title").attr(P,h).attr("title","")
s=new E(n,p,a,!!u)
n.data(z,s)
n.one("remove.qtip-"+a+" removeqtip.qtip-"+a,function(){var t;(t=e(this).data(z))&&t.destroy(true)})
return s}t=e.fn.qtip=function(n,i,a){var r=(""+n).toLowerCase(),s=l,o=e.makeArray(arguments).slice(1),u=o[o.length-1],p=this[0]?e.data(this[0],z):l
if(!arguments.length&&p||"api"===r)return p
if("string"===typeof n){this.each(function(){var t=e.data(this,z)
if(!t)return d
u&&u.timeStamp&&(t.cache.event=u)
if(!i||"option"!==r&&"options"!==r)t[r]&&t[r].apply(t,o)
else{if(a===c&&!e.isPlainObject(i)){s=t.get(i)
return _}t.set(i,a)}})
return s!==l?s:this}if("object"===typeof n||!arguments.length){p=B(e.extend(d,{},n))
return this.each(function(n){var i,a
a=e.isArray(p.id)?p.id[n]:p.id
a=!a||a===_||a.length<1||t.api[a]?t.nextid++:a
i=ne(e(this),a,p)
if(i===_)return d
t.api[a]=i
e.each(x,function(){"initialize"===this.initialize&&this(i)})
i._assignInitialEvents(u)})}}
e.qtip=E
t.api={}
e.each({attr:function(t,n){if(this.length){var i=this[0],a="title",r=e.data(i,"qtip")
if(t===a&&r&&"object"===typeof r&&r.options.suppress){if(arguments.length<2)return e.attr(i,P)
r&&r.options.content.attr===a&&r.cache.attr&&r.set("content.text",n)
return this.attr(P,n)}}return e.fn["attr"+M].apply(this,arguments)},clone:function(t){e([])
var n=e.fn["clone"+M].apply(this,arguments)
t||n.filter("["+P+"]").attr("title",function(){return e.attr(this,P)}).removeAttr(P)
return n}},function(t,n){if(!n||e.fn[t+M])return d
var i=e.fn[t+M]=e.fn[t]
e.fn[t]=function(){return n.apply(this,arguments)||i.apply(this,arguments)}})
if(!e.ui){e["cleanData"+M]=e.cleanData
e.cleanData=function(t){for(var n,i=0;(n=e(t[i])).length;i++)if(n.attr(S))try{n.triggerHandler("removeqtip")}catch(e){}e["cleanData"+M].apply(this,arguments)}}t.version="2.2.0"
t.nextid=0
t.inactiveEvents=A
t.zindex=15e3
t.defaults={prerender:_,id:_,overwrite:d,suppress:d,content:{text:d,attr:"title",title:_,button:_},position:{my:"top left",at:"bottom right",target:_,container:_,viewport:_,adjust:{x:0,y:0,mouse:d,scroll:d,resize:d,method:"flipinvert flipinvert"},effect:function(t,n,i){e(this).animate(n,{duration:200,queue:_})}},show:{target:_,event:"mouseenter",effect:d,delay:90,solo:_,ready:_,autofocus:_},hide:{target:_,event:"mouseleave",effect:d,delay:0,fixed:_,inactive:_,leave:"window",distance:_},style:{classes:"",widget:_,width:_,height:_,def:d},events:{render:l,move:l,show:l,hide:l,toggle:l,visible:l,hidden:l,focus:l,blur:l}}
var ie,ae="margin",re="border",se="color",oe="background-color",ce="transparent",de=" !important",_e=!!o.createElement("canvas").getContext,le=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i
function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}var pe={},he=["Webkit","O","Moz","ms"]
function ge(e,t){var n,i,a=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+he.join(a+" ")+a).split(" "),s=0
if(pe[t])return e.css(pe[t])
while(n=r[s++])if((i=e.css(n))!==c)return pe[t]=n,i}function me(e,t){return Math.ceil(parseFloat(ge(e,t)))}if(_e)var fe=s.devicePixelRatio||1,be=(ye=o.createElement("canvas").getContext("2d"),ye.backingStorePixelRatio||ye.webkitBackingStorePixelRatio||ye.mozBackingStorePixelRatio||ye.msBackingStorePixelRatio||ye.oBackingStorePixelRatio||1),ve=fe/be
else var we=function(e,t,n){return"<qtipvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}
var ye
function ke(e,t){this._ns="tip"
this.options=t
this.offset=t.offset
this.size=[t.width,t.height]
this.init(this.qtip=e)}e.extend(ke.prototype,{init:function(t){var n,i
i=this.element=t.elements.tip=e("<div />",{class:z+"-tip"}).prependTo(t.tooltip)
if(_e){n=e("<canvas />").appendTo(this.element)[0].getContext("2d")
n.lineJoin="miter"
n.miterLimit=1e5
n.save()}else{n=we("shape",'coordorigin="0,0"',"position:absolute;")
this.element.html(n+n)
t._bind(e("*",i).add(i),["click","mousedown"],function(e){e.stopPropagation()},this._ns)}t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this)
this.create()},_swapDimensions:function(){this.size[0]=this.options.height
this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width
this.size[1]=this.options.height},_useTitle:function(e){var t=this.qtip.elements.titlebar
return t&&(e.y===m||e.y===w&&this.element.position().top+this.size[1]/2+this.options.offset<t.outerHeight(d))},_parseCorner:function(e){var t=this.qtip.options.position.my
if(e===_||t===_)e=_
else if(e===d)e=new i(t.string())
else if(!e.string){e=new i(e)
e.fixed=d}return e},_parseWidth:function(e,t,n){var i=this.qtip.elements,a=re+ue(t)+"Width"
return(n?me(n,a):me(i.content,a)||me(this._useTitle(e)&&i.titlebar||i.content,a)||me(i.tooltip,a))||0},_parseRadius:function(e){var t=this.qtip.elements,n=re+ue(e.y)+ue(e.x)+"Radius"
return I.ie<9?0:me(this._useTitle(e)&&t.titlebar||t.content,n)||me(t.tooltip,n)||0},_invalidColour:function(e,t,n){var i=e.css(t)
return!i||n&&i===e.css(n)||le.test(i)?_:i},_parseColours:function(t){var n=this.qtip.elements,i=this.element.css("cssText",""),a=re+ue(t[t.precedance])+ue(se),r=this._useTitle(t)&&n.titlebar||n.content,s=this._invalidColour,o=[]
o[0]=s(i,oe)||s(r,oe)||s(n.content,oe)||s(n.tooltip,oe)||i.css(oe)
o[1]=s(i,a,se)||s(r,a,se)||s(n.content,a,se)||s(n.tooltip,a,se)||n.tooltip.css(a)
e("*",i).add(i).css("cssText",oe+":"+ce+de+";"+re+":0"+de+";")
return o},_calculateSize:function(e){var t,n,i,a=e.precedance===p,r=this.options["width"],s=this.options["height"],o="c"===e.abbrev(),c=(a?r:s)*(o?.5:1),d=Math.pow,_=Math.round,l=Math.sqrt(d(c,2)+d(s,2)),u=[this.border/c*l,this.border/s*l]
u[2]=Math.sqrt(d(u[0],2)-d(this.border,2))
u[3]=Math.sqrt(d(u[1],2)-d(this.border,2))
t=l+u[2]+u[3]+(o?0:u[0])
n=t/l
i=[_(n*r),_(n*s)]
return a?i:i.reverse()},_calculateTip:function(e,t,n){n=n||1
t=t||this.size
var i=t[0]*n,a=t[1]*n,r=Math.ceil(i/2),s=Math.ceil(a/2),o={br:[0,0,i,a,i,0],bl:[0,0,i,0,0,a],tr:[0,a,i,0,i,a],tl:[0,0,0,a,i,a],tc:[0,a,r,0,i,a],bc:[0,0,i,0,r,a],rc:[0,0,i,s,0,a],lc:[i,0,i,a,0,s]}
o.lt=o.br
o.rt=o.bl
o.lb=o.tr
o.rb=o.tl
return o[e.abbrev()]},_drawCoords:function(e,t){e.beginPath()
e.moveTo(t[0],t[1])
e.lineTo(t[2],t[3])
e.lineTo(t[4],t[5])
e.closePath()},create:function(){var e=this.corner=(_e||I.ie)&&this._parseCorner(this.options.corner)
if(this.enabled=!!this.corner&&"c"!==this.corner.abbrev()){this.qtip.cache.corner=e.clone()
this.update()}this.element.toggle(this.enabled)
return this.corner},update:function(t,n){if(!this.enabled)return this
var a,r,o,c,l,y,k,x,z=this.qtip.elements,S=this.element,q=S.children(),D=this.options,T=this.size,A=D.mimic,R=Math.round
t||(t=this.qtip.cache.corner||this.corner)
if(A===_)A=t
else{A=new i(A)
A.precedance=t.precedance
"inherit"===A.x?A.x=t.x:"inherit"===A.y?A.y=t.y:A.x===A.y&&(A[t.precedance]=t[t.precedance])}r=A.precedance
t.precedance===u?this._swapDimensions():this._resetDimensions()
a=this.color=this._parseColours(t)
if(a[1]!==ce){x=this.border=this._parseWidth(t,t[t.precedance])
D.border&&x<1&&!le.test(a[1])&&(a[0]=a[1])
this.border=x=D.border!==d?D.border:x}else this.border=x=0
k=this.size=this._calculateSize(t)
S.css({width:k[0],height:k[1],lineHeight:k[1]+"px"})
y=t.precedance===p?[R(A.x===f?x:A.x===v?k[0]-T[0]-x:(k[0]-T[0])/2),R(A.y===m?k[1]-T[1]:0)]:[R(A.x===f?k[0]-T[0]:0),R(A.y===m?x:A.y===b?k[1]-T[1]-x:(k[1]-T[1])/2)]
if(_e){o=q[0].getContext("2d")
o.restore()
o.save()
o.clearRect(0,0,6e3,6e3)
c=this._calculateTip(A,T,ve)
l=this._calculateTip(A,this.size,ve)
q.attr(h,k[0]*ve).attr(g,k[1]*ve)
q.css(h,k[0]).css(g,k[1])
this._drawCoords(o,l)
o.fillStyle=a[1]
o.fill()
o.translate(y[0]*ve,y[1]*ve)
this._drawCoords(o,c)
o.fillStyle=a[0]
o.fill()}else{c=this._calculateTip(A)
c="m"+c[0]+","+c[1]+" l"+c[2]+","+c[3]+" "+c[4]+","+c[5]+" xe"
y[2]=x&&/^(r|b)/i.test(t.string())?8===I.ie?2:1:0
q.css({coordsize:k[0]+x+" "+(k[1]+x),antialias:""+(A.string().indexOf(w)>-1),left:y[0]-y[2]*Number(r===u),top:y[1]-y[2]*Number(r===p),width:k[0]+x,height:k[1]+x}).each(function(t){var n=e(this)
n[n.prop?"prop":"attr"]({coordsize:k[0]+x+" "+(k[1]+x),path:c,fillcolor:a[0],filled:!!t,stroked:!t}).toggle(!!(x||t))
!t&&n.html(we("stroke",'weight="'+2*x+'px" color="'+a[1]+'" miterlimit="1000" joinstyle="miter"'))})}s.opera&&setTimeout(function(){z.tip.css({display:"inline-block",visibility:"visible"})},1)
n!==_&&this.calculate(t,k)},calculate:function(t,n){if(!this.enabled)return _
var i,a,r=this,s=this.qtip.elements,o=this.element,c=this.options.offset,d=(s.tooltip.hasClass("ui-widget"),{})
t=t||this.corner
i=t.precedance
n=n||this._calculateSize(t)
a=[t.x,t.y]
i===u&&a.reverse()
e.each(a,function(e,a){var o,_,l
if(a===w){o=i===p?f:m
d[o]="50%"
d[ae+"-"+o]=-Math.round(n[i===p?0:1]/2)+c}else{o=r._parseWidth(t,a,s.tooltip)
_=r._parseWidth(t,a,s.content)
l=r._parseRadius(t)
d[a]=Math.max(-r.border,e?_:c+(l>o?l:-o))}})
d[t[i]]-=n[i===u?0:1]
o.css({margin:"",top:"",bottom:"",left:"",right:""}).css(d)
return d},reposition:function(e,t,n,i){if(!this.enabled)return
var a,r,s=t.cache,o=this.corner.clone(),l=n.adjusted,h=t.options.position.adjust.method.split(" "),g=h[0],y=h[1]||h[0],x={left:_,top:_,x:0,y:0},z={}
function S(e,t,n,i,a){e===k&&o.precedance===t&&l[i]&&o[n]!==w?o.precedance=o.precedance===u?p:u:e!==k&&l[i]&&(o[t]=o[t]===w?l[i]>0?i:a:o[t]===i?a:i)}function q(e,t,i){if(o[e]===w)z[ae+"-"+t]=x[e]=a[ae+"-"+t]-l[t]
else{r=a[i]!==c?[l[t],-a[t]]:[-l[t],a[t]]
if((x[e]=Math.max(r[0],r[1]))>r[0]){n[t]-=l[t]
x[t]=_}z[a[i]!==c?i:t]=x[e]}}if(this.corner.fixed!==d){S(g,u,p,f,v)
S(y,p,u,m,b)
o.string()===s.corner.string()||s.cornerTop===l.top&&s.cornerLeft===l.left||this.update(o,_)}a=this.calculate(o)
a.right!==c&&(a.left=-a.right)
a.bottom!==c&&(a.top=-a.bottom)
a.user=this.offset;(x.left=g===k&&!!l.left)&&q(u,f,v);(x.top=y===k&&!!l.top)&&q(p,m,b)
this.element.css(z).toggle(!(x.x&&x.y||o.x===w&&x.y||o.y===w&&x.x))
n.left-=a.left.charAt?a.user:g!==k||x.top||!x.left&&!x.top?a.left+this.border:0
n.top-=a.top.charAt?a.user:y!==k||x.left||!x.left&&!x.top?a.top+this.border:0
s.cornerLeft=l.left
s.cornerTop=l.top
s.corner=o.clone()},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns)
this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}})
ie=x.tip=function(e){return new ke(e,e.options.style.tip)}
ie.initialize="render"
ie.sanitize=function(e){if(e.style&&"tip"in e.style){var t=e.style.tip
"object"!==typeof t&&(t=e.style.tip={corner:t});/string|boolean/i.test(typeof t.corner)||(t.corner=d)}}
a.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create()
this.qtip.reposition()},"^style.tip.(height|width)$":function(e){this.size=[e.width,e.height]
this.update()
this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}}
e.extend(d,t.defaults,{style:{tip:{corner:d,mimic:_,width:6,height:6,border:d,offset:0}}})
x.viewport=function(e,t,n,i,a,r,c){var d,l,x,S,q,D,T,A,R,C=n.target,L=e.elements.tooltip,O=n.my,N=n.at,M=n.adjust,P=M.method.split(" "),I=P[0],E=P[1]||P[0],G=n.viewport,j=n.container,B=e.cache,U={left:0,top:0}
if(!G.jquery||C[0]===s||C[0]===o.body||"none"===M.method)return U
S=j.offset()||U
q="static"===j.css("position")
d="fixed"===L.css("position")
D=G[0]===s?G.width():G.outerWidth(_)
T=G[0]===s?G.height():G.outerHeight(_)
A={left:d?0:G.scrollLeft(),top:d?0:G.scrollTop()}
R=G.offset()||U
function W(e,n,i,a,r,s,o,c,d){var _=t[r],u=O[e],p=N[e],g=i===k,m=u===r?d:u===s?-d:-d/2,f=p===r?c:p===s?-c:-c/2,b=A[r]+R[r]-(q?0:S[r]),v=b-_,x=_+d-(o===h?D:T)-b,z=m-(O.precedance===e||u===O[n]?f:0)-(p===w?c/2:0)
if(g){z=(u===r?1:-1)*m
t[r]+=v>0?v:x>0?-x:0
t[r]=Math.max(-S[r]+R[r],_-z,Math.min(Math.max(-S[r]+R[r]+(o===h?D:T),_+z),t[r],"center"===u?_-m:1e9))}else{a*=i===y?2:0
if(v>0&&(u!==r||x>0)){t[r]-=z+a
l.invert(e,r)}else if(x>0&&(u!==s||v>0)){t[r]-=(u===w?-z:z)+a
l.invert(e,s)}if(t[r]<A&&-t[r]>x){t[r]=_
l=O.clone()}}return t[r]-_}"shift"===I&&"shift"===E||(l=O.clone())
U={left:"none"!==I?W(u,p,I,M.x,f,v,h,i,r):0,top:"none"!==E?W(p,u,E,M.y,m,b,g,a,c):0}
l&&B.lastClass!==(x=z+"-pos-"+l.abbrev())&&L.removeClass(e.cache.lastClass).addClass(e.cache.lastClass=x)
return U}
x.polys={polygon:function(e,t){var n,i,a,r={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:_},s=0,o=[],c=1,d=1,l=0,u=0
s=e.length
while(s--){n=[parseInt(e[--s],10),parseInt(e[s+1],10)]
n[0]>r.position.right&&(r.position.right=n[0])
n[0]<r.position.left&&(r.position.left=n[0])
n[1]>r.position.bottom&&(r.position.bottom=n[1])
n[1]<r.position.top&&(r.position.top=n[1])
o.push(n)}i=r.width=Math.abs(r.position.right-r.position.left)
a=r.height=Math.abs(r.position.bottom-r.position.top)
if("c"===t.abbrev())r.position={left:r.position.left+r.width/2,top:r.position.top+r.height/2}
else{while(i>0&&a>0&&c>0&&d>0){i=Math.floor(i/2)
a=Math.floor(a/2)
t.x===f?c=i:t.x===v?c=r.width-i:c+=Math.floor(i/2)
t.y===m?d=a:t.y===b?d=r.height-a:d+=Math.floor(a/2)
s=o.length
while(s--){if(o.length<2)break
l=o[s][0]-r.position.left
u=o[s][1]-r.position.top;(t.x===f&&l>=c||t.x===v&&l<=c||t.x===w&&(l<c||l>r.width-c)||t.y===m&&u>=d||t.y===b&&u<=d||t.y===w&&(u<d||u>r.height-d))&&o.splice(s,1)}}r.position={left:o[0][0],top:o[0][1]}}return r},rect:function(e,t,n,i){return{width:Math.abs(n-e),height:Math.abs(i-t),position:{left:Math.min(e,n),top:Math.min(t,i)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(e,t,n,i,a){var r=x.polys._angles[a.abbrev()],s=0===r?0:n*Math.cos(r*Math.PI),o=i*Math.sin(r*Math.PI)
return{width:2*n-Math.abs(s),height:2*i-Math.abs(o),position:{left:e+s,top:t+o},adjustable:_}},circle:function(e,t,n,i){return x.polys.ellipse(e,t,n,n,i)}}
x.svg=function(t,n,i){var a,r,s,c,d,l,u,p,h,g,m,f=e(o),b=n[0],v=e(b.ownerSVGElement),w=true
while(!b.getBBox)b=b.parentNode
if(!b.getBBox||!b.parentNode)return _
a=v.attr("width")||v.width()||parseInt(v.css("width"),10)
r=v.attr("height")||v.height()||parseInt(v.css("height"),10)
var y=(parseInt(n.css("stroke-width"),10)||0)/2
if(y){y/a
y/r}switch(b.nodeName){case"ellipse":case"circle":g=x.polys.ellipse(b.cx.baseVal.value,b.cy.baseVal.value,(b.rx||b.r).baseVal.value+y,(b.ry||b.r).baseVal.value+y,i)
break
case"line":case"polygon":case"polyline":h=b.points||[{x:b.x1.baseVal.value,y:b.y1.baseVal.value},{x:b.x2.baseVal.value,y:b.y2.baseVal.value}]
for(g=[],p=-1,l=h.numberOfItems||h.length;++p<l;){u=h.getItem?h.getItem(p):h[p]
g.push.apply(g,[u.x,u.y])}g=x.polys.polygon(g,i)
break
default:g=b.getBoundingClientRect()
g={width:g.width,height:g.height,position:{left:g.left,top:g.top}}
w=false}m=g.position
v=v[0]
if(w){if(v.createSVGPoint){s=b.getScreenCTM()
h=v.createSVGPoint()
h.x=m.left
h.y=m.top
c=h.matrixTransform(s)
m.left=c.x
m.top=c.y}if(v.viewBox&&(d=v.viewBox.baseVal)&&d.width&&d.height){a/d.width
r/d.height}}m.left+=f.scrollLeft()
m.top+=f.scrollTop()
return g}})})(window,document)},Yn52:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("GLiE")
var a=n("VxH4").default
var r=n("woJ0")
var s=t.createClass({displayName:"AnswerRow",propTypes:{datum:t.PropTypes.object.isRequired,globalSettings:t.PropTypes.object.isRequired},getInitialState:function(){return{neverLoaded:true}},dialogBuilder:function(e){if(!i.isEmpty(e.user_names))return t.DOM.div(null,r({key:e.id+e.poolId,answer_id:e.id,user_names:e.user_names}))
if(e.responses>0)return t.DOM.div(null,a.t("%{userCount} respondents",{userCount:e.responses}))},renderBarPlot:function(){var e=a.t("correct check icon")
return t.DOM.div({key:this.props.datum.id,className:this.getBarClass(),style:this.getBarStyles(),alt:a.t("Graph bar"),title:this.props.datum.correct?a.t("Correct Answer"):a.t("Incorrect Answer")},this.props.datum.correct&&t.DOM.i({className:"icon-check",alt:e}))},componentDidMount:function(){this.setState({neverLoaded:false})},getScoreValueDescription:function(e){var t
switch(e.id){case"top":t=a.t("Answers which scored in the top 27%")
break
case"middle":t=a.t("Answers which scored in the middle 46%")
break
case"bottom":t=a.t("Answers which scored in the bottom 27%")
break
case"ungraded":t=a.t("Ungraded answers")
break
default:t=a.t("Unknown answers")}return t},getBarStyles:function(){var e=this.props.globalSettings.xScale(this.props.datum.count)+this.props.globalSettings.visibilityThreshold+"px"
this.state.neverLoaded&&(e="0px")
return{width:e,height:this.props.globalSettings.barHeight-2+"px"}},getBarClass:function(){var e=this.props.datum.correct?"bar bar-highlighted":"bar"
return this.props.datum.special?e+" bar-striped":e},render:function(){var e=this.props.datum
var n=this.props.globalSettings.useAnswerBuckets?this.getScoreValueDescription(e):e.answer.text
var i=this.props.datum.correct?a.t("%{answer}, (Correct answer)",{answer:n}):a.t("%{answer}, (Incorrect answer)",{answer:n})
return t.DOM.tr({className:e.correct?"correct":void 0},t.DOM.th({scope:"row",className:"answer-textfield"},t.DOM.span({className:"screenreader-only"},i),t.DOM.span({className:"answerText","aria-hidden":"true"},n)),t.DOM.td({className:"respondent-link"},this.dialogBuilder(e.answer)),t.DOM.td({className:"answer-ratio"},e.answer.ratio," ",t.DOM.sup(null,a.t("%"))),t.DOM.td({className:"answer-distribution-cell","aria-hidden":true,style:{width:this.props.globalSettings.maxWidth}},this.renderBarPlot()))}})
return s}.call(t,n,t,e),void 0!==i&&(e.exports=i)},Zhui:function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("b0yZ").default
var a=n("bbfQ")
var r=n("Wx5O")
var s=n("9Bcd")
var o=n("6fTz")
var c=n("W/cH")
var d=n("vdby")
var _=n("txyM")
var l=t.createClass({displayName:"FillInMultipleBlanks",getInitialState:function(){return{answerSetId:void 0}},getDefaultProps:function(){return{answerSets:[]}},getAnswerPool:function(){var e=this.props.answerSets
var t=this.state.answerSetId||(e[0]||{}).id
var n=e.filter(function(e){return e.id===t})[0]||{answers:[]}
n.answers&&n.answers.forEach(function(e){e.poolId=n.id})
return n.answers},componentDidMount:function(){this.ensureAnswerSetSelection(this.props)},componentWillReceiveProps:function(e){this.ensureAnswerSetSelection(e)},render:function(){var e=c(this.getAnswerPool(),this.props.participantCount,{questionType:this.props.questionType})
var n=this.getAnswerPool()
return a(null,t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-top-left"},r({responseCount:this.props.responses,participantCount:this.props.participantCount,questionText:this.props.questionText,position:this.props.position}),t.DOM.div({className:"question-text","aria-hidden":true,dangerouslySetInnerHTML:{__html:this.props.questionText}}),t.DOM.nav({className:"row-fluid answer-set-tabs"},this.props.answerSets.map(this.renderAnswerSetTab))),t.DOM.div({className:"col-sm-4 question-top-right"})),t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-bottom-left"},o({answers:n})),t.DOM.div({className:"col-sm-4 question-bottom-right"},s({correctResponseRatio:e,label:i.t("%{ratio}% responded correctly",{ratio:d(100*e,0)})}))))},renderAnswerSetTab:function(e){var n=e.id
var i=_({active:this.state.answerSetId===n})
return t.DOM.button({key:"answerSet-"+n,onClick:this.switchAnswerSet.bind(null,n),className:i,children:e.text})},ensureAnswerSetSelection:function(e){!this.state.answerSetId&&e.answerSets.length&&this.setState({answerSetId:e.answerSets[0].id})},switchAnswerSet:function(e,t){t.preventDefault()
this.setState({answerSetId:e})}})
return l}.call(t,n,t,e),void 0!==i&&(e.exports=i)},aEir:function(e,t,n){var i
i=function(){var e=/\%\{([^\}]+)\}/g
return function(t,n){var i=t.match(e)
i&&i.forEach(function(e){var i=e.substr(2,e.length-3)
t=t.replace(new RegExp(e,"g"),n[i])})
return t}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},bbfQ:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("txyM")
var a=t.createClass({displayName:"Question",render:function(){var e=i({"question-statistics":true,"content-box":true})
return t.DOM.div({key:this.props.position,className:e,children:this.props.children})}})
return a}.call(t,n,t,e),void 0!==i&&(e.exports=i)},bpP5:function(e,t,n){e.exports={PROGRESS_ATTRS:["id","completion","url","workflow_state"],ATTACHMENT_ATTRS:["created_at","url"],PROGRESS_QUEUED:"queued",PROGRESS_ACTIVE:"running",PROGRESS_COMPLETE:"completed",PROGRESS_FAILED:"failed",KC_RETURN:13}},cDRI:function(e,t,n){var i
i=function(e){var t=n("mfk2")
var i=n("tz+7")
var a=n("GLiE")
var r=a.throttle
var s=new t("notifications",{_state:{notifiers:[],notifications:[],dismissed:[],watchedTargets:[]},initialize:function(){this.run=r(this.run.bind(this),100,{leading:false,trailing:true})},registerWatcher:function(e){var t=e.watchTargets||[]
var n=this._state.watchedTargets
var i=this.run.bind(this)
t.filter(function(e){return-1===n.indexOf(e)}).forEach(function(e){e.addChangeListener(i)})
this._state.notifiers.push(e)},getAll:function(){var e=this._state.dismissed
return this._state.notifications.filter(function(t){return-1===e.indexOf(t.id)}).map(function(e){return e.toJSON()})},run:function(){this._state.notifications=this._state.notifiers.reduce(function(e,t){return e.concat(t())},[])
this.emitChange()},actions:{dismiss:function(e,t){var n=this._state.dismissed
if(-1===n.indexOf(e)){n.push(e)
t()}}}},i)
return s}.call(t,n,t,e),void 0!==i&&(e.exports=i)},cY2E:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("GLiE")
var a=n("aEir")
var r=n("vaeQ")
var s=i.omit
var o=r.underscore
var c=t.createClass({displayName:"InterpolatedText",render:function(){var e,n,i,r
if(!this.props.children)return t.DOM.div(null)
i={}
e=t.DOM.div(null,this.props.children)
n=t.renderComponentToStaticMarkup(e)
r=s(this.props,"children")
i.dangerouslySetInnerHTML={__html:a(n,o(r||{}))}
return t.DOM.div(i)}})
var d=t.createClass({displayName:"Text",getInitialState:function(){return{markup:void 0}},getDefaultProps:function(){return{phrase:null}},componentWillReceiveProps:function(e){var n
if(e.phrase){n=t.renderComponentToStaticMarkup(c(e))
n=n.replace(/<\/?div>/g,"")
this.setState({markup:n})}},render:function(){return t.DOM.div({"aria-role":"article",dangerouslySetInnerHTML:{__html:this.state.markup}})}})
return d}.call(t,n,t,e),void 0!==i&&(e.exports=i)},dqvR:function(e,t,n){var i
i=function(e){var t=n("FIFq")
var i=n("OXiE")
var a=n("C1us")
var r=n("pgP2")
return t.Collection.extend({model:i,url:function(){return r.quizStatisticsUrl},parse:function(e){return a(e,"quiz_statistics")}})}.call(t,n,t,e),void 0!==i&&(e.exports=i)},elP3:function(e,t,n){var i
i=function(e){var t=n("sF2e")
var i=n("bbfQ")
var a=n("9Bcd")
n("qAhH")
var r=n("6fTz")
var s=n("W/cH")
var o=n("Wx5O")
var c=t.createClass({displayName:"ShortAnswer",render:function(){var e=this.props
var n=s(e.answers,e.participantCount,{correctResponseCount:e.correct,questionType:e.questionType})
return i(null,t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-top-left"},o({responseCount:this.props.responses,participantCount:this.props.participantCount,questionText:this.props.questionText,position:this.props.position}),t.DOM.div({className:"question-text","aria-hidden":true,dangerouslySetInnerHTML:{__html:this.props.questionText}})),t.DOM.div({className:"col-sm-4 question-top-right"})),t.DOM.div({className:"grid-row"},t.DOM.div({className:"col-sm-8 question-bottom-left"},r({answers:this.props.answers})),t.DOM.div({className:"col-sm-4 question-bottom-right"},a({correctResponseRatio:n}))))}})
return c}.call(t,n,t,e),void 0!==i&&(e.exports=i)},h9wM:function(e,t,n){var i
i=function(e){var t=n("ouhR")
n("UlQx")
var i={}
i.friendlyDatetime=function(e,n){var i=e
i&&(i.clone=function(){return new Date(i.getTime())})
return t.friendlyDatetime(i,n)}
i.fudgeDateForProfileTimezone=t.fudgeDateForProfileTimezone
return i}.call(t,n,t,e),void 0!==i&&(e.exports=i)},iAcu:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("ouhR")
var a=n("GLiE")
n("Wzgt")
var r=n("pWEL")
var s=a.omit
var o=a.extend
var c=Object.freeze(["content","popupOptions","anchorSelector","children","ref","autoFocus","reactivePositioning","onShow","onHide"])
var d=t.createClass({displayName:"Popup",mixins:[],propTypes:{content:t.PropTypes.func.isRequired,children:t.PropTypes.renderable,popupOptions:t.PropTypes.object,anchorSelector:t.PropTypes.string,reactivePositioning:t.PropTypes.bool,onShow:t.PropTypes.func,onHide:t.PropTypes.func},getInitialState:function(){return{container:null,content:null}},getDefaultProps:function(){return{children:t.DOM.button(null,"Show Popup"),popupOptions:{},anchorSelector:".popup-anchor",reactivePositioning:false,screenReaderSupport:true}},componentDidMount:function(){var e=i(this.getDOMNode())
var n=i('<div class="popup-content" />')
var a
if(!this.props.content)throw new Error("You must provide a 'content' component for a popup!")
a=this.qTipOptions(e,n)
this.qTip=e.qtip(a).qtip("api")
this.__disableInherentAccessibilityLayer(this.qTip)
this.setState({container:n[0],content:t.renderComponent(this.props.content(this.getContentProps(this.props)),n[0])})},componentWillUnmount:function(){t.unmountComponentAtNode(this.state.container)
this.qTip&&this.qTip.destroy(true)},componentDidUpdate:function(){var e=this.state.content
e&&e.setProps(this.getContentProps(this.props),this.contentDidUpdate)},contentDidUpdate:function(){this.reposition()
if(this.focusScreenReaderContentOnUpdate){this.focusScreenReaderContentOnUpdate=false
this.focusScreenReaderContent()}},render:function(){var e=this.getContentProps(this.props)
return t.DOM.div({className:"inline"},this.props.children,this.props.screenReaderSupport&&r({ref:"srContent",tabIndex:"-1","aria-live":"assertive","aria-atomic":"true","aria-relevant":"additions",role:"note",children:this.props.content(e)}))},__disableInherentAccessibilityLayer:function(e){e.tooltip.removeAttr("role").removeAttr("aria-live").removeAttr("aria-atomic").removeAttr("aria-describedby")},getContentProps:function(e){return s(e,c)},getAnchor:function(){var e=i(this.getDOMNode())
var t=e.find(this.props.anchorSelector)
if(!t.length){console.warn("Popup anchor was not found, defaulting to $(this).","Selector: %s",this.props.anchorSelector)
t=e}return t},qTipOptions:function(e,t){var n=o({},{overwrite:false,prerender:true,show:{event:"click focusin",delay:0,target:e,effect:false,solo:false},hide:{event:"click focusout",effect:false,fixed:true,target:e},style:{classes:"qtip-default",def:false,tip:{width:10,height:5}},position:{my:"right center",at:"left center",target:false,adjust:{x:0,y:0}},content:{text:t},events:{show:this.__onShow,hide:this.__onHide}},this.props.popupOptions)
n.show.target||(n.show.target=e)
n.hide.target||(n.hide.target=e)
return n},isOpen:function(){return!!this.qTip.shown},reposition:function(){var e=this.qTip
e&&!!this.props.reactivePositioning&&e.reposition()},focusScreenReaderContent:function(e){if(true===e){this.focusScreenReaderContentOnUpdate=true
return}this.getDOMNode().focus()
this.refs.srContent.getDOMNode().focus()},screenReaderContentHasFocus:function(){return document.activeElement===this.refs.srContent.getDOMNode()},focusAnchor:function(){this.getDOMNode().focus()
this.getAnchor()[0].focus()},close:function(){if(this.qTip.shown){this.qTip.hide()
this.getAnchor().focus()}},__onShow:function(e,t){t.shown=true
this.props.onShow&&this.props.onShow(this.state.container,t)},__onHide:function(e,t){t.shown=false
this.props.onHide&&this.props.onHide()},__getApi:function(){return this.qTip}})
return d}.call(t,n,t,e),void 0!==i&&(e.exports=i)},iNE3:function(e,t,n){var i,a
i=[n("jDx0")],a=function(e){e.on("error",function(e){console.error("RSVP error:",JSON.stringify(e))
e&&e.message&&console.error(e.message)
e&&e.stack&&console.error(e.stack)})
return e}.apply(t,i),void 0!==a&&(e.exports=a)},iU3X:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
n("YGE8")
var i=n("ouhR")
var a=n("GLiE")
var r=n("bpP5")
var s=a.omit
var o=t.createClass({displayName:"Dialog",propTypes:{content:t.PropTypes.func,children:t.PropTypes.renderable,tagName:t.PropTypes.string,className:t.PropTypes.string,title:t.PropTypes.string,width:t.PropTypes.number,autoOpen:t.PropTypes.bool,keyboardAccessible:t.PropTypes.bool,role:t.PropTypes.string,"aria-label":t.PropTypes.string,autoFocus:t.PropTypes.string},getInitialState:function(){return{content:null,container:null,$container:null}},getDefaultProps:function(){return{children:[],autoOpen:false,tagName:"div",role:"button",title:null,width:300,keyboardAccessible:true,autoFocus:"a.ui-dialog-titlebar-close"}},componentDidMount:function(){var e=this.props
e.content?this.__renderDialog(e.content,e):console.warn("You are attempting to create a dialog without any content.")},componentDidUpdate:function(){var e=this.props
!this.state.content&&e.content&&this.__renderDialog(e.content,e)
this.state.content&&this.state.content.setProps(this.__getContentProps(e))},componentWillUnmount:function(){this.__removeDialog()},render:function(){var e=t.DOM[this.props.tagName]
return e({onClick:this.toggle,onKeyPress:this.openOnReturn,className:this.props.className,children:this.props.children,role:this.props.role,"aria-label":this.props["aria-label"],tabIndex:this.props.keyboardAccessible?"0":void 0})},open:function(){this.__send("open")},openOnReturn:function(e){if(this.props.keyboardAccessible&&e.which===r.KC_RETURN){e.preventDefault()
this.open()}},close:function(){this.__send("close")},isOpen:function(){return this.__send("isOpen")},toggle:function(){this.isOpen()?this.close():this.open()},__renderDialog:function(e,n){var a=document.createElement("div")
var r=t.renderComponent(e(),a)
var s=this.props.autoFocus
i(a).dialog({autoOpen:n.autoOpen,title:n.title,width:n.width,open:function(e,t){s&&i(a).closest(".ui-dialog").find(s).focus()}})
this.setState({content:r,container:a,$container:i(a)})},__removeDialog:function(){if(this.state.$container){t.unmountComponentAtNode(this.state.container)
this.state.$container.dialog("destroy")}},__send:function(e){if(this.state.$container)return this.state.$container.dialog(e)},__getContentProps:function(e){return s(e,["className","tagName","content","children","width","title","autoOpen","aria-label","role","keyboardAccessible"])}})
return o}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"ip4/":function(e,t,n){var i
i=function(e){var t=n("jDx0")
var i=n("ouhR")
var a=n("EUYw")
var r=n("mbrK")
var s=n("pgP2")
var o=new a(s)
var c=n("BcB5")
var d=function(e){return o.request({type:"GET",url:e}).then(function(e){return c(e,r.PROGRESS_ATTRS)})}
return function(e,n){var a,o
var c=t.defer()
n=n||{}
i(window).on("beforeunload.progress",function(){return clearTimeout(o)})
a=function(){d(e).then(function(e){n.onTick&&n.onTick(e.completion,e)
e.workflowState===r.PROGRESS_FAILED?c.reject():e.workflowState===r.PROGRESS_COMPLETE?c.resolve():o=setTimeout(a,n.interval||s.pollingFrequency)},function(){c.reject()})}
a()
return c.promise}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},jV2t:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"download_item_analysis_report_statuslabel_8c9387ec":"تنزيل تقرير تحليل العناصر %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"تنزيل تقرير تحليل الطلاب %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"إنشاء تقرير تحليل العناصر %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"إنشاء تقرير تحليل الطلاب %{statusLabel}","quiz_reports":{"cancel_generation":"إلغاء","generatable":"لم يتم إنشاء التقرير.","generated_at":"تاريخ الإنشاء: %{date}","generating":"جارٍ إنشاء التقرير...","generation_almost_done":"على وشك الانتهاء.","generation_complete":"تم إنشاء التقرير.","generation_halfway":"أقل من النصف على الاكتمال.","generation_started":"جارٍ إنشاء التقرير.","item_analysis":"تحليل العنصر","non_generatable_report_notice":"لا يمكن إنشاء التقرير لاختبارات الاستطلاع.","student_analysis":"تحليل الطالب"}},"cy":{"download_item_analysis_report_statuslabel_8c9387ec":"Llwytho adroddiad dadansoddi eitem i lawr %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Llwytho adroddiad dadansoddi myfyrwyr i lawr %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Creu adroddiad dadansoddi eitem %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Creu adroddiad dadansoddi myfyrwyr %{statusLabel}","quiz_reports":{"cancel_generation":"Canslo","generatable":"Dydy’r adroddiad ddim wedi cael ei greu o gwbl.","generated_at":"Wedi creu: %{date}","generating":"Adroddiad wrthi’n cael ei greu...","generation_almost_done":"Bron â gorffen.","generation_complete":"Mae’r adroddiad wedi cael ei greu.","generation_halfway":"Llai na hanner ffordd i fynd.","generation_started":"Mae’r adroddiad wrthi’n cael ei greu.","item_analysis":"Dadansoddi Eitem","non_generatable_report_notice":"Does dim modd creu adroddiad ar gyfer Cwisiau Arolwg.","student_analysis":"Dadansoddi Myfyrwyr"}},"da":{"download_item_analysis_report_statuslabel_8c9387ec":"Download rapport over elementanalyse %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Download rapport over studieanalyse %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generer rapport over elementanalyse %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generer rapport over studieanalyse %{statusLabel}","quiz_reports":{"cancel_generation":"Annuller","generatable":"Rapporten er aldrig blevet genereret.","generated_at":"Genereret: %{date}","generating":"Rapporten genereres ...","generation_almost_done":"Næsten færdig.","generation_complete":"Rapporten er blevet genereret.","generation_halfway":"Mindre end halvdelen tilbage.","generation_started":"Rapporten genereres.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Rapporten kan ikke genereres til spørgeundersøgelsestest.","student_analysis":"Analyse af studerende"}},"da-x-k12":{"download_item_analysis_report_statuslabel_8c9387ec":"Download rapport over elementanalyse %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Download rapport over studieanalyse %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generer rapport over elementanalyse %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generer rapport over studieanalyse %{statusLabel}","quiz_reports":{"cancel_generation":"Annuller","generatable":"Rapporten er aldrig blevet genereret.","generated_at":"Genereret: %{date}","generating":"Rapporten genereres ...","generation_almost_done":"Næsten færdig.","generation_complete":"Rapporten er blevet genereret.","generation_halfway":"Mindre end halvdelen tilbage.","generation_started":"Rapporten genereres.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Rapporten kan ikke genereres til spørgeundersøgelsesquizzer.","student_analysis":"Analyse af elev"}},"de":{"download_item_analysis_report_statuslabel_8c9387ec":"Laden Sie den Elementanalysebericht %{statusLabel} herunter","download_student_analysis_report_statuslabel_1471c8c2":"Laden Sie den Studentenanalysebericht %{statusLabel} herunter","generate_item_analysis_report_statuslabel_16e02c8":"Elementanalysebericht %{statusLabel} erzeugen","generate_student_analysis_report_statuslabel_aecdc4dc":"Studentenanalysebericht %{statusLabel} erzeugen","quiz_reports":{"cancel_generation":"Abbrechen","generatable":"Bericht wurde nie erstellt.","generated_at":"Erstellt am: %{date}","generating":"Bericht wird erstellt ...","generation_almost_done":"Fast fertig.","generation_complete":"Bericht wurde erstellt.","generation_halfway":"Mehr als die Hälfte ist schon geschafft.","generation_started":"Bericht wird erstellt.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Bericht kann nicht für Befragungsquizze erstellt werden.","student_analysis":"Studentenanalyse"}},"el":{"quiz_reports":{"cancel_generation":"Ακύρωση","generatable":"Η αναφορά δεν δημιουργήθηκε ποτέ.","generated_at":"\\u003cmrk mid=\\"7039\\" mtype=\\"seg\\"\\u003eΔημιουργήθηκε:\\u003c/mrk\\u003e \\u003cmrk mid=\\"7040\\" mtype=\\"seg\\"\\u003e%{date}\\u003c/mrk\\u003e","generating":"Η αναφορά δημιουργείται αυτή την στιγμή...","generation_almost_done":"Σχεδόν ολοκληρωμένο.","generation_complete":"Η αναφορά δημιουργήθηκε.","generation_halfway":"Έμεινε λιγότερο από το μισό.","generation_started":"Η αναφορά δημιουργείται αυτή την στιγμή.","item_analysis":"Ανάλυση Στοιχείου","non_generatable_report_notice":"Δεν είναι δυνατή η δημιουργία αναφοράς για Κουίζ Δημοσκοπήσεων.","student_analysis":"Ανάλυση σπουδαστή/ιας"}},"en-AU":{"download_item_analysis_report_statuslabel_8c9387ec":"Download item analysis report %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Download student analysis report %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generate item analysis report %{statusLabel}.","generate_student_analysis_report_statuslabel_aecdc4dc":"Generate student analysis report %{statusLabel}.","quiz_reports":{"cancel_generation":"Cancel","generatable":"Report has never been generated.","generated_at":"Generated: %{date}","generating":"Report is being generated...","generation_almost_done":"Almost done.","generation_complete":"Report has been generated.","generation_halfway":"Less than half-way to go.","generation_started":"Report is being generated.","item_analysis":"Item Analysis","non_generatable_report_notice":"Report can not be generated for Survey Quizzes.","student_analysis":"Student Analysis"}},"en-CA":{"download_item_analysis_report_statuslabel_8c9387ec":"Download item analysis report %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Download student analysis report %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generate item analysis report %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generate student analysis report %{statusLabel}","quiz_reports":{"cancel_generation":"Cancel","generatable":"Report has never been generated.","generated_at":"Generated: %{date}","generating":"Report is being generated...","generation_almost_done":"Almost done.","generation_complete":"Report has been generated.","generation_halfway":"Less than half-way to go.","generation_started":"Report is being generated.","item_analysis":"Item Analysis","non_generatable_report_notice":"Report can not be generated for Survey Quizzes.","student_analysis":"Student Analysis"}},"en-GB":{"download_item_analysis_report_statuslabel_8c9387ec":"Download item analysis report %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Download student analysis report %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generate item analysis report %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generate student analysis report %{statusLabel}","quiz_reports":{"cancel_generation":"Cancel","generatable":"Report has never been generated.","generated_at":"Generated: %{date}","generating":"Report is being generated...","generation_almost_done":"Almost done.","generation_complete":"Report has been generated.","generation_halfway":"Less than half-way to go.","generation_started":"Report is being generated.","item_analysis":"Item analysis","non_generatable_report_notice":"Report cannot be generated for Survey Quizzes.","student_analysis":"Student analysis"}},"es":{"download_item_analysis_report_statuslabel_8c9387ec":"Descargar informe de análisis de elementos %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Descargar informe de análisis de los alumnos %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generar informe de análisis de elementos %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generar informe de análisis del alumno %{statusLabel}","quiz_reports":{"cancel_generation":"Cancelar","generatable":"Nunca se ha generado el informe.","generated_at":"Generado: %{date}","generating":"Se está generando el informe...","generation_almost_done":"Casi terminado.","generation_complete":"Se ha generado el informe.","generation_halfway":"Queda menos de la mitad.","generation_started":"Se está generando el informe.","item_analysis":"Análisis de elementos","non_generatable_report_notice":"No se puede generar un informe para las evaluaciones de encuestas.","student_analysis":"Análisis de alumnos"}},"fa":{"download_item_analysis_report_statuslabel_8c9387ec":"بارگیری گزارش تحلیل مورد %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"بارگیری گزارش تحلیل دانشجو %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"ایجاد گزارش تحلیل مورد %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"ایجاد گزارش تحلیل دانشجو %{statusLabel}","quiz_reports":{"cancel_generation":"لغو","generatable":"گزارش هرگز ایجاد نشده است.","generated_at":"ایجاد شد: %{date}","generating":"گزارش در حال ایجاد است...","generation_almost_done":"تقریبا انجام شد.","generation_complete":"گزارش ایجاد شده است.","generation_halfway":"کمتر از نصف راه باقیمانده است.","generation_started":"گزارش در حال ایجاد شدن است.","item_analysis":"تحلیل پرسش","non_generatable_report_notice":"گزارش را نمی توان برای آزمون های نظرسنجی ایجاد کرد.","student_analysis":"تحلیل دانشجو"}},"fr":{"download_item_analysis_report_statuslabel_8c9387ec":"Téléverser le rapport d\'analyse d\'élément %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Téléverser le rapport d\'analyse d\'étudiant %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Générer le rapport d\'analyse d\'élément %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Générer le rapport d\'analyse d\'étudiant %{statusLabel}","quiz_reports":{"cancel_generation":"Annuler","generatable":"Le rapport n’a jamais été généré.","generated_at":"Générés : %{date}","generating":"Génération du rapport...","generation_almost_done":"Opération presque terminée.","generation_complete":"Le rapport a été généré.","generation_halfway":"Opération effectuée à plus de 50 %.","generation_started":"Génération du rapport en cours.","item_analysis":"Analyse - élément","non_generatable_report_notice":"Le rapport ne peut pas être généré pour les questionnaires d’enquête.","student_analysis":"Analyse - étudiant"}},"fr-CA":{"download_item_analysis_report_statuslabel_8c9387ec":"Télécharger le rapport d\'analyse d\'élément %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Télécharger le rapport d\'analyse d\'étudiant %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Générer le rapport d\'analyse d\'élément %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Générer le rapport d\'analyse d\'étudiant %{statusLabel}","quiz_reports":{"cancel_generation":"Annuler","generatable":"Le rapport n’a jamais été généré.","generated_at":"Générés : %{date}","generating":"Génération du rapport...","generation_almost_done":"Opération presque terminée.","generation_complete":"Le rapport a été généré.","generation_halfway":"Opération effectuée à plus de 50 %.","generation_started":"Génération du rapport en cours.","item_analysis":"Analyse - élément","non_generatable_report_notice":"Le rapport ne peut pas être généré pour les questionnaires d’enquête.","student_analysis":"Analyse - étudiant"}},"he":{"download_item_analysis_report_statuslabel_8c9387ec":"הורדת דוח ניתוח פריטים %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"הורדת דוח ניתוח תלמידים %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"הפקת דוח ניתוח פריטים %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"הפקת דוח ניתוח תלמידים %{statusLabel}","quiz_reports":{"cancel_generation":"ביטול","generatable":"הדוח מעולם לא הופק","generated_at":"הופק: %{date}","generating":"דוח בתהליך הכנה..","generation_almost_done":"כמעט נסתיים","generation_complete":"דוח הופק","generation_halfway":"פחות מחצי הדרך לסיום","generation_started":"דוח בתהליך הפקה","item_analysis":"ניתוח פריטים","non_generatable_report_notice":"אין אפשרות להפיק דוח עבור סקרי בחנים","student_analysis":"ניתוח תלמידים"}},"ht":{"download_item_analysis_report_statuslabel_8c9387ec":"Telechaje rapò analiz eleman %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Telechaje rapò analiz elèv %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Jenere rapò analiz eleman %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Jenere rapò analiz elèv %{statusLabel}","quiz_reports":{"cancel_generation":"Anile","generatable":"Rapò a pa t janm pwodui.","generated_at":"Pwodui: %{date}","generating":"Rapò a an pwodiksyon...","generation_almost_done":"Prèske fini.","generation_complete":"Rapò a pwodui.","generation_halfway":"Mwen ke mwatye chemen pou pakouri.","generation_started":"Rapò a an pwodiksyon.","item_analysis":"Analiz Eleman","non_generatable_report_notice":"Rapò pa t kaab pwodui pou Ankèt Quiz yo.","student_analysis":"Analiz Elèv"}},"hu":{"download_item_analysis_report_statuslabel_8c9387ec":"Itemelemzési jelentés letöltése %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Hallgatói elemzési jelentés letöltése %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Elemanalízis-jelentés generálása %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Hallgatói elemzési jelentés generálása %{statusLabel}","quiz_reports":{"cancel_generation":"Mégse","generatable":"Soha nem lett jelentés generálva.","generated_at":"Generálva: %{date}","generating":"Jelentés generálása...","generation_almost_done":"Majdnem kész.","generation_complete":"Jelentés generálva","generation_halfway":"Kevesebb mint fél éve. ","generation_started":"Jelentés generálása ","item_analysis":"Itemelemzés","non_generatable_report_notice":"Nem lehet jelentést generálni felmérő kvízekhez. ","student_analysis":"Hallgatói elemzés"}},"hy":{"quiz_reports":{"cancel_generation":"Չեղյալ համարել","generatable":"Հաշվետվությունը երբեք չի ստեղծվել:","generated_at":"Ստեղծվել է՝  %{date}","generating":"Հաշվետվությունը ստեղծվում է...","generation_almost_done":"Համարյա պատրաստ է:","generation_complete":"Հաշվետվությունը ստեղծված է:","generation_halfway":"Մնացել է անել կեսից քիչը: ","generation_started":"Հաշվետվությունը ստեղծվում է:","item_analysis":"Տարրի վերլուծություն","non_generatable_report_notice":"Հաշվետվությունը չի կարող գեներացվել հարցման համար:","student_analysis":"Ունկնդրի վերլուծություն"}},"is":{"download_item_analysis_report_statuslabel_8c9387ec":"Hlaða niður greiningarskýrslu %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Hlaða niður greiningarskýrslu nemanda %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Búa til greiningarskýrslu %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Búa til greiningarskýrslu nemanda %{statusLabel}","quiz_reports":{"cancel_generation":"Hætta við","generatable":"Skýrsla hefur aldrei verið búin til.","generated_at":"Búið til: %{date}","generating":"Verið er að búa til skýrslu...","generation_almost_done":"Næstum búið.","generation_complete":"Skýrsla hefur verið búin til.","generation_halfway":"Minna en helmingur eftir.","generation_started":"Verið er að búa til skýrslu.","item_analysis":"Greining atriðis","non_generatable_report_notice":"Ekki hægt að búa til skýrslu fyrir könnunarpróf.","student_analysis":"Greining nemanda"}},"it":{"download_item_analysis_report_statuslabel_8c9387ec":"Scarica report analisi elemento %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Scarica report analisi studenti %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Genera report analisi elementi %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Genera report analisi studenti %{statusLabel}","quiz_reports":{"cancel_generation":"Annulla","generatable":"Il report non è stato mai generato.","generated_at":"Generato: %{date}","generating":"Generazione report in corso...","generation_almost_done":"Quasi fatto.","generation_complete":"Il report è stato generato.","generation_halfway":"Meno della metà del percorso.","generation_started":"Il report è in fase di generazione.","item_analysis":"Analisi elemento","non_generatable_report_notice":"Impossibile generare il report per i quiz dei sondaggi.","student_analysis":"Analisi studenti"}},"ja":{"download_item_analysis_report_statuslabel_8c9387ec":"アイテム分析レポートをダウンロードします%{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"受講生分析レポート%{statusLabel}をダウンロードします","generate_item_analysis_report_statuslabel_16e02c8":"アイテム分析レポート%{statusLabel}を生成します","generate_student_analysis_report_statuslabel_aecdc4dc":"受講生分析レポート%{statusLabel}を生成します","quiz_reports":{"cancel_generation":"キャンセル","generatable":"レポートは生成されていません。","generated_at":"生成日: %{date}","generating":"レポートを生成しています...","generation_almost_done":"ほとんど完了しました。","generation_complete":"レポートが生成されました。","generation_halfway":"50% 以上完了しました。","generation_started":"レポートを生成しています。","item_analysis":"アイテム分析","non_generatable_report_notice":"サーベイ クイズについてはレポートを生成できません。","student_analysis":"受講生分析"}},"ko":{"quiz_reports":{"cancel_generation":"취소","item_analysis":"항목 분석","student_analysis":"학생 분석"}},"mi":{"download_item_analysis_report_statuslabel_8c9387ec":"pūrongo tātari Tikiake tūemi %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"tikiake pūrongo tātari ākonga %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Whakaputa pūrongo tātari tūemi %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Whakaputa pūrongo tātari ākonga %{statusLabel}","quiz_reports":{"cancel_generation":"Whakakore","generatable":"Kua kore te rīpoata kua hangaia.","generated_at":"Hangaia: %{date}","generating":"Kei te hangaia te Rīpoata","generation_almost_done":"Tata mahi.","generation_complete":"Kua waihangatia pūrongo.","generation_halfway":"Iti iho i te hawhe-ara ki te haere.","generation_started":"Kei te hangaia Rīpoata","item_analysis":"Tātari tūemi","non_generatable_report_notice":"E kore e taea te hangaia Rīpoata mō quiz rangahau.","student_analysis":"Tātari Ākonga"}},"nb":{"download_item_analysis_report_statuslabel_8c9387ec":"Last ned element-analyserapport %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Last ned student analyserapport %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generere element-analyserapport %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generere student-analyserapport %{statusLabel}","quiz_reports":{"cancel_generation":"Avbryt","generatable":"Rapporten har aldri blitt generert.","generated_at":"Generert: %{date}","generating":"Rapport blir generert...","generation_almost_done":"Nesten ferdig.","generation_complete":"Rapporten har blitt generert.","generation_halfway":"Mindre enn halv veien å gå.","generation_started":"Rapporten genereres.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Rapporten kan ikke genereres for undersøkelse tester.","student_analysis":"Studentanalyse"}},"nb-x-k12":{"download_item_analysis_report_statuslabel_8c9387ec":"Last ned element-analyserapport %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Last ned elev analyserapport %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generere element-analyserapport %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generere elev-analyserapport %{statusLabel}","quiz_reports":{"cancel_generation":"Avbryt","generatable":"Rapporten har aldri blitt generert.","generated_at":"Generert: %{date}","generating":"Rapport blir generert...","generation_almost_done":"Nesten ferdig.","generation_complete":"Rapporten har blitt generert.","generation_halfway":"Mindre enn halv veien å gå.","generation_started":"Rapporten genereres.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Rapporten kan ikke genereres for undersøkelse tester.","student_analysis":"Elevanalyse"}},"nl":{"download_item_analysis_report_statuslabel_8c9387ec":"Onderdeel van rapport met analyses %{statusLabel} downloaden.","download_student_analysis_report_statuslabel_1471c8c2":"Onderdeel van rapport met cursistanalyses %{statusLabel} downloaden.","generate_item_analysis_report_statuslabel_16e02c8":"Item analyserapport %{statusLabel} genereren","generate_student_analysis_report_statuslabel_aecdc4dc":"Cursist analyserapport %{statusLabel}genereren","quiz_reports":{"cancel_generation":"Annuleren","generatable":"Rapport was nooit gegenereerd.","generated_at":"Gegenereerd: %{date}","generating":"Bezig met genereren van rapport...","generation_almost_done":"Bijna klaar.","generation_complete":"Rapport was gegenereerd.","generation_halfway":"Minder dan de helft nog te gaan.","generation_started":"Bezig met genereren van rapport.","item_analysis":"Analyse van item","non_generatable_report_notice":"Rapport kan niet voor toetsenquête(s) gegenereerd worden.","student_analysis":"Analyse van cursist"}},"nn":{"download_item_analysis_report_statuslabel_8c9387ec":"Last ned elementanalyserapport %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Last ned studentanalyserapport %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generer elementanalyserapport %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generer studentanalyserapport %{statusLabel}","quiz_reports":{"cancel_generation":"Avbryt","generatable":"Rapporten er ikkje generert.","generated_at":"Generert: %{date}","generating":"Rapporten bli generert...","generation_almost_done":"Nesten fullført.","generation_complete":"Rapporten er generert.","generation_halfway":"Mindre enn halvparten igjen.","generation_started":"Rapporten blir generert.","item_analysis":"Elementanalyse","non_generatable_report_notice":"Rapporten kan ikkje genererast for spørjeundersøkingar.","student_analysis":"Studentanalyse"}},"pl":{"download_item_analysis_report_statuslabel_8c9387ec":"Pobierz raport analizy elementu %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Pobierz raport analizy uczestnika %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Utwórz raport analizy elementu %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Utwórz raport analizy uczestnika %{statusLabel}","quiz_reports":{"cancel_generation":"Anuluj","generatable":"Nie wygenerowano wcześniej raportu.","generated_at":"Wygenerowano: %{date}","generating":"Raport jest generowany...","generation_almost_done":"Prawie wykonane.","generation_complete":"Raport został wygenerowany.","generation_halfway":"Wykonano ponad połowę pracy.","generation_started":"Raport jest generowany.","item_analysis":"Analiza elementu","non_generatable_report_notice":"Nie można wygenerować raportu dla testów do ankiet.","student_analysis":"Analiza uczestnika"}},"pt":{"download_item_analysis_report_statuslabel_8c9387ec":"Relatório de análise do iten descarregado %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Relatório de análise do aluno descarregado %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Gerar relatório de análise do ítem %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Gerar relatório de análise do aluno %{statusLabel}","quiz_reports":{"cancel_generation":"Cancelar","generatable":"O relatório nunca foi gerado.","generated_at":"Gerado: %{date}","generating":"O relatório está a ser gerado...","generation_almost_done":"Está quase concluído.","generation_complete":"O relatório foi gerado.","generation_halfway":"Falta menos de metade.","generation_started":"O relatório está a ser gerado.","item_analysis":"Análise de item","non_generatable_report_notice":"Não é possível gerar o relatório para testes de questionários.","student_analysis":"Análise de aluno"}},"pt-BR":{"download_item_analysis_report_statuslabel_8c9387ec":"Baixar relatório de análise de item %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Baixar relatório de análise de estudante %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Gerar relatório de análise de item %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Gerar relatório de análise de estudante %{statusLabel}","quiz_reports":{"cancel_generation":"Cancelar","generatable":"O relatório nunca foi gerado.","generated_at":"Gerado: %{date}","generating":"O relatório está sendo gerado...","generation_almost_done":"Quase pronto.","generation_complete":"O relatório foi gerado.","generation_halfway":"Menos de metade do caminho a percorrer.","generation_started":"O relatório está sendo gerado.","item_analysis":"Análise de itens","non_generatable_report_notice":"O relatório não pode ser gerado pelos Testes de Pesquisa.","student_analysis":"Análise do aluno"}},"ru":{"download_item_analysis_report_statuslabel_8c9387ec":"Скачать отчет об анализе элемента %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Скачать отчет об анализе студента %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Генерировать Отчет об анализе элемента %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Генерировать Отчет об анализе студента %{statusLabel}","quiz_reports":{"cancel_generation":"Отменить","generatable":"Отчет никогда не создавался.","generated_at":"Создан: %{date}","generating":"Отчет создается...","generation_almost_done":"Почти готово.","generation_complete":"Отчет создан.","generation_halfway":"Осталось выполнить меньше половины.","generation_started":"Отчет создается.","item_analysis":"Анализ элемента","non_generatable_report_notice":"Нельзя создать отчет для контрольных работ опроса.","student_analysis":"Анализ студента"}},"sv":{"download_item_analysis_report_statuslabel_8c9387ec":"Ladda ner objektets analysrapport %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Ladda ner studentens analysrapport %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generera analysrapport för objekt %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generera analysrapport för student %{statusLabel}","quiz_reports":{"cancel_generation":"Avbryt","generatable":"Rapport har aldrig genererats.","generated_at":"Genererad: %{date}","generating":"Rapport genereras...","generation_almost_done":"Nästan färdig.","generation_complete":"Rapport har genereras.","generation_halfway":"Mindre än hälften kvar.","generation_started":"Rapport genereras.","item_analysis":"Analys av objekt","non_generatable_report_notice":"Rapport kan inte genereras för undersöknings Quizzes.","student_analysis":"Studentanalys"}},"sv-x-k12":{"download_item_analysis_report_statuslabel_8c9387ec":"Ladda ner objektets analysrapport %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Ladda ner elevens analysrapport %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Generera analysrapport för objekt %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Generera analysrapport för elev %{statusLabel}","quiz_reports":{"cancel_generation":"Avbryt","generatable":"Rapport har aldrig genererats.","generated_at":"Genererad: %{date}","generating":"Rapport genereras...","generation_almost_done":"Nästan färdiggjord.","generation_complete":"Rapport har genereras.","generation_halfway":"Mindre än hälften kvar.","generation_started":"Rapport genereras.","item_analysis":"Analys av objekt","non_generatable_report_notice":"Rapport kan inte genereras för undersöknings Quizzes.","student_analysis":"Elevanalys"}},"tr":{"download_item_analysis_report_statuslabel_8c9387ec":"%{statusLabel} öğe analiz raporunu indirin","download_student_analysis_report_statuslabel_1471c8c2":"%{statusLabel} öğrenci analiz raporunu indirin","quiz_reports":{"cancel_generation":"İptal","generatable":"Rapor asla oluşturulmadı.","generated_at":"Oluşturuldu: %{date}","generating":"Rapor oluşturuluyor...","generation_almost_done":"Neredeyse tamamlandı.","generation_complete":"Raporunuz oluşturuldu.","generation_halfway":"Yarısından az kaldı.","generation_started":"Raporunuz oluşturuluyor.","item_analysis":"Öğe Analizi","non_generatable_report_notice":"Anket Kısa Sınavları için rapor oluşturulamaz.","student_analysis":"Öğrenci Analizi"}},"uk":{"download_item_analysis_report_statuslabel_8c9387ec":"Завантажити звіт по аналізу елементів  %{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"Завантажити аналітичний звіт студента %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"Згенерувати пункт аналітичного звіту %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"Згенерувати аналітичний звіт студента %{statusLabel}","quiz_reports":{"cancel_generation":"Скасувати","generatable":"Звіт ніколи не був згенерований.","generated_at":"Згенеровано: %{date}","generating":"Звіт генерується...","generation_almost_done":"Майже зроблено.","generation_complete":"Звіт був сформований.","generation_halfway":"Менше, ніж на півдорозі.","generation_started":"Звіт генерується.","item_analysis":"Аналіз пункту","non_generatable_report_notice":"Звіт не може бути створений для опитування контрольної роботи.","student_analysis":"Аналіз студента"}},"zh-Hans":{"download_item_analysis_report_statuslabel_8c9387ec":"下载项目的分析报告%{statusLabel}","download_student_analysis_report_statuslabel_1471c8c2":"下载学生的分析报告%{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"生成项目的分析报告 %{statusLabel}","generate_student_analysis_report_statuslabel_aecdc4dc":"生成学生的分析报告 %{statusLabel}","quiz_reports":{"cancel_generation":"取消","generatable":"从未生成报告。","generated_at":"生成日期：%{date}","generating":"正在生成报告...","generation_almost_done":"差不多完成了。","generation_complete":"已生成报告。","generation_halfway":"完成了不到一半。","generation_started":"正在生成报告。","item_analysis":"项目分析","non_generatable_report_notice":"无法针对调查测验生成报告。","student_analysis":"学生分析"}},"zh-Hant":{"download_item_analysis_report_statuslabel_8c9387ec":"下載項目分析報告 %{statusLabel} ","download_student_analysis_report_statuslabel_1471c8c2":"下載學生分析報告 %{statusLabel}","generate_item_analysis_report_statuslabel_16e02c8":"生成項目分析報告 %{statusLabel} ","generate_student_analysis_report_statuslabel_aecdc4dc":"生成學生分析報告 %{statusLabel}","quiz_reports":{"cancel_generation":"取消","generatable":"報告從未生成。","generated_at":"已生成：%{date}","generating":"報告正在生成...","generation_almost_done":"即將完成。","generation_complete":"報告已生成。","generation_halfway":"已完成一半以上。","generation_started":"報告正在生成...","item_analysis":"項目分析","non_generatable_report_notice":"無法生成調查測驗的報告。","student_analysis":"學生分析"}}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quiz_reports")},jYag:function(e,t,n){var i
i=function(e){var t=n("24ko")
var i=n("ATho")
var a=n("cDRI")
var r=n("pgP2")
var s
var o=function(){s({quizStatistics:t.get(),isLoadingStatistics:t.isLoading(),canBeLoaded:t.canBeLoaded(),quizReports:i.getAll(),notifications:a.getAll()})}
var c={start:function(e){s=e
t.addChangeListener(o)
i.addChangeListener(o)
a.addChangeListener(o)
r.loadOnStartup&&c.load()},load:function(){if(r.quizStatisticsUrl){t.load()
i.load()}else console.warn("You have requested to load on start-up, but have not","provided a url to load from in CQS.config.quizStatisticsUrl.")},stop:function(){t.removeChangeListener(o)
i.removeChangeListener(o)
a.removeChangeListener(o)
s=void 0}}
return c}.call(t,n,t,e),void 0!==i&&(e.exports=i)},mbrK:function(e,t,n){e.exports={DISCRIMINATION_INDEX_THRESHOLD:.25,QUIZ_STATISTICS_ATTRS:["id","points_possible","speed_grader_url","anonymous_survey","quiz_submissions_zip_url"],SUBMISSION_STATISTICS_ATTRS:["score_average","score_high","score_low","score_stdev","scores","duration_average","unique_count"],QUESTION_STATISTICS_ATTRS:["id","question_type","question_text","responses","answers","position","user_names","answered_student_count","top_student_count","middle_student_count","bottom_student_count","correct_top_student_count","correct_middle_student_count","correct_bottom_student_count","point_biserials","correct","partially_correct","answer_sets","full_credit","point_distribution"],POINT_BISERIAL_ATTRS:["answer_id","correct","distractor","point_biserial"],QUIZ_REPORT_ATTRS:["id","report_type","readable_type","generatable","includes_all_versions","url"],PROGRESS_ATTRS:["id","completion","url","workflow_state"],ATTACHMENT_ATTRS:["created_at","url"],DISCRIMINATION_INDEX_HELP_ARTICLE_URL:"https://community.canvaslms.com/docs/DOC-13037",PROGRESS_QUEUED:"queued",PROGRESS_ACTIVE:"running",PROGRESS_COMPLETE:"completed",PROGRESS_FAILED:"failed",KC_RETURN:13,NOTIFICATION_REPORT_GENERATION_FAILED:123}},"nDS/":function(e,t,n){var i
i=function(e){var t=n("sF2e")
n("ouhR")
var i=n("8p1U")
var a=n("iAcu")
var r=n("pWEL")
var s=n("W11D")
var o=n("2n7R")
var c=t.createClass({displayName:"Report",mixins:[t.addons.ActorMixin],propTypes:{generatable:t.PropTypes.bool},getInitialState:function(){return{tooltipContent:"",statusLayer:null}},getDefaultProps:function(){return{readableType:"Analysis Report",generatable:true,isGenerated:false,downloadUrl:void 0}},componentDidUpdate:function(e){!e.isGenerated&&this.props.isGenerated?this.refs.popup.screenReaderContentHasFocus()&&this.refs.popup.focusAnchor():!e.isGenerating&&this.props.isGenerating&&(this.refs.popup.screenReaderContentHasFocus()||this.refs.popup.focusScreenReaderContent(true))},render:function(){this.props.reportType
return t.DOM.div({className:"report-generator inline"},a({ref:"popup",content:i,id:this.props.id,isGenerated:this.props.isGenerated,isGenerating:this.props.isGenerating,generatable:this.props.generatable,progress:this.props.progress,file:this.props.file,reactivePositioning:true,anchorSelector:".btn",popupOptions:{show:{event:"mouseenter focusin",delay:0,effect:false,solo:true},hide:{event:"mouseleave focusout",delay:350,effect:false,fixed:true},position:{my:"bottom center",at:"top center"}}},this.props.isGenerated?this.renderDownloader():this.renderGenerator()))},renderGenerator:function(){var e=o.getInteractionLabel(this.props)
return t.DOM.button({disabled:!this.props.generatable,onClick:this.generate,onKeyPress:this.generateAndFocusContent,className:"btn generate-report"},r({children:e}),s(null,t.DOM.i({className:"icon-analytics"})," ",this.props.readableType))},renderDownloader:function(){var e=o.getInteractionLabel(this.props)
return t.DOM.a({href:this.props.file.url,className:"btn download-report"},r({children:e}),s(null,t.DOM.i({className:"icon-analytics"})," ",this.props.readableType))},generate:function(e){e.preventDefault()
this.sendAction("quizReports:generate",this.props.reportType)},generateAndFocusContent:function(e){e.preventDefault()
this.sendAction("quizReports:generate",this.props.reportType)}})
return c}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"p/gX":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("GLiE")
var a=n("pgP2")
var r=n("ytiS")
var s=n("jYag")
var o=n("GHgI")
var c=i.extend
var d
var _
var l={}
var u=function(e){c(a,e)}
var p=function(e,n){u(n)
d=e
return r().then(function(){_=t.renderComponent(o(),d)
s.start(g)})}
var h=function(){return!!_}
var g=function(e){_.setProps(e)}
var m=function(){s.load()}
var f=function(){if(h()){s.stop()
t.unmountComponentAtNode(d)
d=void 0}}
l.configure=u
l.mount=p
l.isMounted=h
l.update=g
l.reload=m
l.unmount=f
l.__getLayout__=function(){return _}
return l}.call(t,n,t,e),void 0!==i&&(e.exports=i)},pgP2:function(e,t,n){var i
i=function(e){var t=n("G1fS")
return t}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"pzE/":function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=t.createClass({displayName:"Spinner",render:function(){return t.DOM.div({className:"ic-Spinner"},t.DOM.div({className:"rect1"}),t.DOM.div({className:"rect2"}),t.DOM.div({className:"rect3"}),t.DOM.div({className:"rect4"}),t.DOM.div({className:"rect5"}))}})
return i}.call(t,n,t,e),void 0!==i&&(e.exports=i)},qAhH:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("mbrK")
var a=n("PQIk").default
var r=n("txyM")
var s=n("iU3X")
var o=n("pWEL")
var c=n("W11D")
var d=n("MWvi")
var _=n("UrHj")
var l=t.createClass({displayName:"DiscriminationIndex",getDefaultProps:function(){return{width:200,height:42,discriminationIndex:0,topStudentCount:0,middleStudentCount:0,bottomStudentCount:0,correctTopStudentCount:0,correctMiddleStudentCount:0,correctBottomStudentCount:0}},render:function(){var e=this.props.discriminationIndex
var n=e>i.DISCRIMINATION_INDEX_THRESHOLD?"+":"-"
var l=0==e?"":e>0?"+":"-"
var u={index:true,positive:"+"===n,negative:"+"!==n}
return t.DOM.section({className:"discrimination-index-section"},t.DOM.div(null,c(null,t.DOM.em({className:r(u)},t.DOM.span({className:"sign"},l),_(Math.abs(this.props.discriminationIndex||0))),t.DOM.p(null,a.t("discrimination_index","Discrimination Index"),s({tagName:"button",title:a.t("discrimination_index_dialog_title","The Discrimination Index Chart"),content:d,width:550,className:"Button Button--icon-action help-trigger","aria-label":a.t("discrimination_index_dialog_trigger","Learn more about the Discrimination Index."),tabIndex:"0"},t.DOM.i({className:"icon-question"})))),o(null,a.t("audible_discrimination_index","Discrimination Index: %{number}.",{number:_(this.props.discriminationIndex||0)}))))}})
return l}.call(t,n,t,e),void 0!==i&&(e.exports=i)},qJBq:function(e,t){(function(){var t,n,i
i=[]
t={}
e.exports=n=function(e,n,a){var r,s,o,c,d,_,l,u,p
null==a&&(a=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
p=n[0],r=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
p=n[0],r=n[1]}else{p=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
r=(null!=n?n.decimal:void 0)||t.decimal}l=""+p+r+a
_=i[l]
if(null==_){o=a?3:1
_=i[l]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+p+"\\d{"+o+",3})+)|\\d*))(?:\\"+r+"(\\d*))?\\s*$")}u=e.match(_)
if(!(null!=u&&3===u.length))return NaN
c=u[1].replace(new RegExp("\\"+p,"g"),"")
s=u[2]
d=parseFloat(c+"."+s)
return d}
e.exports.setOptions=function(e){var n,i
for(n in e){i=e[n]
t[n]=i}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(i){return n(i,e,t)}}
e.exports.factoryReset()}).call(this)},qbx9:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"quizzes":{"dismiss_notification":"تجاهل"}},"cy":{"quizzes":{"dismiss_notification":"Diystyru"}},"da":{"quizzes":{"dismiss_notification":"Afvis"}},"da-x-k12":{"quizzes":{"dismiss_notification":"Afvis"}},"de":{"quizzes":{"dismiss_notification":"Verwerfen"}},"el":{"quizzes":{"dismiss_notification":"Παράβλεψη"}},"en-AU":{"quizzes":{"dismiss_notification":"Dismiss"}},"en-CA":{"quizzes":{"dismiss_notification":"Dismiss"}},"en-GB":{"quizzes":{"dismiss_notification":"Dismiss"}},"es":{"quizzes":{"dismiss_notification":"Descartar"}},"fa":{"quizzes":{"dismiss_notification":"صرفنظر کردن"}},"fr":{"quizzes":{"dismiss_notification":"Ignorer"}},"fr-CA":{"quizzes":{"dismiss_notification":"Ignorer"}},"he":{"quizzes":{"dismiss_notification":"פטור"}},"ht":{"quizzes":{"dismiss_notification":"Rejte"}},"hu":{"quizzes":{"dismiss_notification":"Elvet"}},"hy":{"quizzes":{"dismiss_notification":"Հանել"}},"is":{"quizzes":{"dismiss_notification":"Sleppa"}},"it":{"quizzes":{"dismiss_notification":"Ignora"}},"ja":{"quizzes":{"dismiss_notification":"解散"}},"mi":{"quizzes":{"dismiss_notification":"Pana"}},"nb":{"quizzes":{"dismiss_notification":"Avvise"}},"nb-x-k12":{"quizzes":{"dismiss_notification":"Avvise"}},"nl":{"quizzes":{"dismiss_notification":"Afwijzen"}},"nn":{"quizzes":{"dismiss_notification":"Forkast"}},"pl":{"quizzes":{"dismiss_notification":"Odrzuć"}},"pt":{"quizzes":{"dismiss_notification":"Ignorar"}},"pt-BR":{"quizzes":{"dismiss_notification":"Descartar"}},"ru":{"quizzes":{"dismiss_notification":"Отклонить"}},"sv":{"quizzes":{"dismiss_notification":"Avfärda"}},"sv-x-k12":{"quizzes":{"dismiss_notification":"Avfärda"}},"tr":{"quizzes":{"dismiss_notification":"Yoksay"}},"uk":{"quizzes":{"dismiss_notification":"Відхилити"}},"zh-Hans":{"quizzes":{"dismiss_notification":"解散"}},"zh-Hant":{"quizzes":{"dismiss_notification":"解除"}}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quizzes")},sBQq:function(e,t,n){var i
i=function(){return function(e){return Array.isArray(e)?e:void 0===e?[]:[e]}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},sF2e:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("OaTh")
t.addons||(t.addons={})
t.addons.ActorMixin=i
return t}.call(t,n,t,e),void 0!==i&&(e.exports=i)},t0sM:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("3A48")
var a=n("qbx9").default
var r=[]
var s=t.createClass({displayName:"Notifications",getDefaultProps:function(){return{notifications:[]}},render:function(){return t.DOM.ul({"aria-relevant":"additions","aria-live":"assertive",id:"notifications"},this.props.notifications.map(this.renderNotification))},renderNotification:function(e){var n=r.filter(function(t){return t.code===e.code})[0]
return t.DOM.li({key:e.id},t.DOM.div({className:"notification"},n?n(e.context):e.code),t.DOM.a({className:"dismiss-notification",href:"#",onClick:this.dismiss.bind(null,e.id)},a.t("dismiss_notification","Dismiss")))},dismiss:function(e,t){t.preventDefault()
i.dismissNotification(e)}})
return s}.call(t,n,t,e),void 0!==i&&(e.exports=i)},"tz+7":function(e,t,n){var i
i=function(e){var t=n("DrtY")
var i=n("pgP2")
singleton=new t(i)
return singleton}.call(t,n,t,e),void 0!==i&&(e.exports=i)},vdby:function(e,t,n){var i,a
i=[],a=function(){return function(e,t){var n
void 0===t&&(t=0)
"number"===typeof e&&e instanceof Number||(e=parseFloat(e))
n=Math.pow(10,parseInt(t,10))
e=Math.round(e*n)/n
return e}}.apply(t,i),void 0!==a&&(e.exports=a)},wbTt:function(e,t,n){e.exports={precision:2,ajax:void 0,quizStatisticsUrl:void 0,quizReportsUrl:void 0,courseSectionsUrl:void 0,includesAllVersions:true,loadOnStartup:true,pollingFrequency:1e3,onError:function(e){console.error(e)}}},woJ0:function(e,t,n){var i
i=function(e){var t=n("6Nz/")
var i=n("iU3X")
var a=n("b0yZ").default
var r=t.createClass({displayName:"UserListDialog",getDefaultProps:function(){return{answer_id:0,user_names:[]}},render:function(){return t.DOM.div(null,i({title:a.t("user_names","User Names"),content:this.userList,width:500,tagName:"a"},a.t("%{user_count} respondents",{user_count:this.props.user_names.length})))},userList:function(){return t.DOM.div({key:"answer-users-"+this.props.answer_id},t.DOM.ul({className:"answer-response-list"},this.props.user_names.map(function(e,n){return t.DOM.li({key:n},e)})))}})
return r}.call(t,n,t,e),void 0!==i&&(e.exports=i)},ytiS:function(e,t,n){var i
i=function(e){var t=n("iNE3")
n("0qTZ")
return function(){return t.resolve()}}.call(t,n,t,e),void 0!==i&&(e.exports=i)},zE8J:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"جدول الإجابات وموجز إحصائي بشأن خيارات إجابات الطالب.","answer_description_6b353cfd":"وصف الإجابة","answer_distribution_2a956e3f":"توزيع الإجابات","answer_text_909894d6":"نص الإجابة","number_of_respondents_e1e7e8b":"عدد المجيبين","percent_of_respondents_selecting_this_answer_4c2ce4ee":"النسبة المئوية للمجيبين الذين اختاروا هذه الإجابة"},"cy":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Tabl sy’n cynnwys atebion ac ystadegau cryno ynghylch yr atebion mae myfyrwyr wedi’u dewis.","answer_description_6b353cfd":"Disgrifiad o’r Ateb","answer_distribution_2a956e3f":"Dosbarthiad Ateb","answer_text_909894d6":"Testun yr Ateb","number_of_respondents_e1e7e8b":"Nifer yr ymatebwyr","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Canran yr ymatebwyr sy’n dewis yr ateb hwn"},"da":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabel over svar og korte statistiske oplysninger vedrørende de studerendes svarmuligheder.","answer_description_6b353cfd":"Svarbeskrivelse","answer_distribution_2a956e3f":"Svarfordeling","answer_text_909894d6":"Svarets tekst","number_of_respondents_e1e7e8b":"Antal respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Procentdel af respondenter som vælger dette svar"},"da-x-k12":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabel over svar og korte statistiske oplysninger vedrørende elevernes svarmuligheder.","answer_description_6b353cfd":"Svarbeskrivelse","answer_distribution_2a956e3f":"Svarfordeling","answer_text_909894d6":"Svarets tekst","number_of_respondents_e1e7e8b":"Antal respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Procentdel af respondenter som vælger dette svar"},"de":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Eine Liste mit Antworten und einer kurzen Statistik in Bezug auf die Antworten der Studenten","answer_description_6b353cfd":"Beschreibung der Antwort","answer_distribution_2a956e3f":"Antwortenverteilung","answer_text_909894d6":"Antworttext","number_of_respondents_e1e7e8b":"Anzahl der Befragten","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Prozent der Teilnehmer wählen diese Antwort."},"el":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Ένας πίνακας απαντήσεων και σύντομων στατιστικών αναφορικά με τις επιλογές απάντησης των σπουδαστών.","answer_description_6b353cfd":"Περιγραφή Απάντησης","answer_distribution_2a956e3f":"Κατανομή Απαντήσεων","answer_text_909894d6":"Απάντηση σε κείμενο","number_of_respondents_e1e7e8b":"Αριθμός Aπαντώντων","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Ποσοστό απαντώντων που επέλεξαν αυτή την απάντηση"},"en-AU":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"A table of answers and brief statistics regarding student answer choices.","answer_description_6b353cfd":"Answer Description","answer_distribution_2a956e3f":"Answer Distribution","answer_text_909894d6":"Answer Text","number_of_respondents_e1e7e8b":"Number of Respondents","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Percent of respondents selecting this answer"},"en-AU-x-unimelb":{"answer_text_909894d6":"Answer Text"},"en-CA":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"A table of answers and brief statistics regarding student answer choices.","answer_description_6b353cfd":"Answer Description","answer_distribution_2a956e3f":"Answer Distribution","answer_text_909894d6":"Answer Text","number_of_respondents_e1e7e8b":"Number of Respondents","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Percent of respondents selecting this answer"},"en-GB":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"A table of answers and brief statistics regarding student answer choices.","answer_description_6b353cfd":"Answer description","answer_distribution_2a956e3f":"Answer distribution","answer_text_909894d6":"Answer text","number_of_respondents_e1e7e8b":"Number of respondents","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Per cent of respondents selecting this answer"},"en-GB-x-lbs":{"answer_text_909894d6":"Answer text"},"en-GB-x-ukhe":{"answer_text_909894d6":"Answer text"},"es":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Una tabla de respuestas y breves estadísticas con respecto a las opciones de respuesta del alumno.","answer_description_6b353cfd":"Descripción de la respuesta","answer_distribution_2a956e3f":"Distribución de la respuesta","answer_text_909894d6":"Texto de la respuesta","number_of_respondents_e1e7e8b":"Número de respuestas","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Porcentaje de respuestas que seleccionaron esta respuesta"},"fa":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"یک جدول حاوی پاسخ ها و آمار مختصر در ارتباط با گزینه های پاسخ دانشجو.","answer_description_6b353cfd":"شرح پاسخ","answer_distribution_2a956e3f":"توزیع پاسخ","answer_text_909894d6":"متن پاسخ","number_of_respondents_e1e7e8b":"تعداد پاسخ دهنده ها","percent_of_respondents_selecting_this_answer_4c2ce4ee":"درصد پاسخ دهنده هایی که این پاسخ را انتخاب می کنند"},"fi":{"answer_text_909894d6":"Vastausteksti"},"fr":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Un tableau regroupant réponses et brèves statistiques concernant les choix de réponse des étudiants.","answer_description_6b353cfd":"Description de la réponse","answer_distribution_2a956e3f":"Répartition des réponses","answer_text_909894d6":"Texte de réponse","number_of_respondents_e1e7e8b":"Nombre de répondants","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Pourcentage de répondants qui ont choisi cette réponse"},"fr-CA":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Un tableau regroupant réponses et brèves statistiques concernant les choix de réponse des étudiants.","answer_description_6b353cfd":"Description de la réponse","answer_distribution_2a956e3f":"Répartition des réponses","answer_text_909894d6":"Texte de réponse","number_of_respondents_e1e7e8b":"Nombre de répondants","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Pourcentage de répondants qui ont choisi cette réponse"},"he":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"טבלת התשובות ותקציר סטטיסטיקה של אפשרויות התשובה של תלמיד","answer_description_6b353cfd":"תיאור תשובה","answer_distribution_2a956e3f":"התפלגות התשובות","answer_text_909894d6":"תוכן תשובה","number_of_respondents_e1e7e8b":"מספר המגיבים","percent_of_respondents_selecting_this_answer_4c2ce4ee":"שעור המגיבים שבחרו תשובה זו"},"ht":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Yon tablo repons kout ak estatistik konsènan chwa repons elèv la.","answer_description_6b353cfd":"Deskripsyon Repons","answer_distribution_2a956e3f":"Distribisyon Repons","answer_text_909894d6":"Repons Tèks","number_of_respondents_e1e7e8b":"Kantite Repondan","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Pousantaj patisipan ki chwazi repons sa a"},"hu":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Válaszokat és a hallgatók válaszaiból készült statisztikákat tartalmazó táblázat.","answer_description_6b353cfd":"Válasz leírása ","answer_distribution_2a956e3f":"Válaszok megoszlása","answer_text_909894d6":"Válasz szövege ","number_of_respondents_e1e7e8b":"Válaszadók száma","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Ezt a lehetőséget választó válaszadók százaléka"},"hy":{"answer_text_909894d6":"Պատասխանի տեքստ"},"is":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Tafla með svörum og töluágripi varðandi svör nemenda.","answer_description_6b353cfd":"Lýsing á svari","answer_distribution_2a956e3f":"Svardreifing","answer_text_909894d6":"Texti svars","number_of_respondents_e1e7e8b":"Fjöldi svarenda","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Hlutfall svarenda sem völdu þetta svar"},"it":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Tabella di risposte e brevi statistiche relative alla scelta delle risposte degli studenti.","answer_description_6b353cfd":"Descrizione risposta","answer_distribution_2a956e3f":"Distribuzione risposta","answer_text_909894d6":"Testo della risposta","number_of_respondents_e1e7e8b":"Numero di rispondenti","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Percentuale di rispondenti che hanno selezionato questa risposta"},"ja":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"受講生の解答の選択の答えの表と簡単な統計","answer_description_6b353cfd":"回答の説明","answer_distribution_2a956e3f":"回答の配布","answer_text_909894d6":"解答テキスト","number_of_respondents_e1e7e8b":"回答者の数","percent_of_respondents_selecting_this_answer_4c2ce4ee":"この回答を選択している回答者の割合"},"mi":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"He ripa o ngā whakautu me tauanga poto e pā ana ki whakahoki ākonga kōwhiringa.","answer_description_6b353cfd":"Whakāhuatanga Whakautu","answer_distribution_2a956e3f":"tohatoha Whakautu","answer_text_909894d6":"Kuputuhi Whakautu (80 rohe Pūahua","number_of_respondents_e1e7e8b":"Tau o ngā kaiwhakutu","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Ōrau o ngā kōwhiri tēnei whakahoki"},"nb":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabell med svar og kort statistikk vedrørende studentenes valg av svar.","answer_description_6b353cfd":"Svarbeskrivelse","answer_distribution_2a956e3f":"Svarfordeling","answer_text_909894d6":"Svartekst","number_of_respondents_e1e7e8b":"Antall respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Prosent respondenter som valgte dette svaret"},"nb-x-k12":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabell med svar og kort statistikk vedrørende elevenes valg av svar.","answer_description_6b353cfd":"Svarbeskrivelse","answer_distribution_2a956e3f":"Svarfordeling","answer_text_909894d6":"Svartekst","number_of_respondents_e1e7e8b":"Antall respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Prosent respondenter som valgte dette svaret"},"nl":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Een tabel antwoorden en korte statistieken met betrekking tot antwoordkeuzes van cursisten.","answer_description_6b353cfd":"Antwoordbeschrijving","answer_distribution_2a956e3f":"Antwoorddistributie","answer_text_909894d6":"Antwoordtekst","number_of_respondents_e1e7e8b":"Aantal respondents","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Percentage van respondents dat dit antwoord heeft geselecteerd"},"nn":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Ein tabell med svar og overordna statistikk om studentars svaralternativer.","answer_description_6b353cfd":"Skildring av svar","answer_distribution_2a956e3f":"Svarfordeling","answer_text_909894d6":"Svartekst","number_of_respondents_e1e7e8b":"Tal på respondentar","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Prosent av respondentar som vel dette svaret"},"pl":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Tabela zawierająca odpowiedzi i krótkie statystyki dotyczące odpowiedzi wybranych przez uczniów.","answer_description_6b353cfd":"Opis odpowiedzi","answer_distribution_2a956e3f":"Dystrybucja odpowiedzi","answer_text_909894d6":"Odpowiedź","number_of_respondents_e1e7e8b":"Ilość respondentów","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Procent respondentów, którzy wybrali daną odpowiedź"},"pt":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Uma tabela de respostas e breve estatística de acordo com as escolhas de resposta dos estudantes.","answer_description_6b353cfd":"Descrição da resposta","answer_distribution_2a956e3f":"Distribuição de perguntas","answer_text_909894d6":"Texto da resposta","number_of_respondents_e1e7e8b":"Número de Respostas","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Percentagem de inquiridos com esta resposta"},"pt-BR":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Uma tabela de respostas e breves estatísticas sobre opções de respostas do estudante.","answer_description_6b353cfd":"Descrição da Resposta","answer_distribution_2a956e3f":"Distribuição de respostas","answer_text_909894d6":"Texto de Resposta","number_of_respondents_e1e7e8b":"Número de Respondentes","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Porcentagem de respondentes selecionando esta resposta"},"ru":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Таблица ответов и краткие статистические данные о выборе ответов студента.","answer_description_6b353cfd":"Описание ответа","answer_distribution_2a956e3f":"Распределение ответов","answer_text_909894d6":"Текст ответа","number_of_respondents_e1e7e8b":"Количество респондентов","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Процент респондентов выбравших этот ответ"},"sl":{"answer_text_909894d6":"Besedilo odgovora"},"sv":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabell över svar och sammanfattande statistik om studenters svarsalternativ. ","answer_description_6b353cfd":"Svarsbeskrivning","answer_distribution_2a956e3f":"Svarsfördelning","answer_text_909894d6":"Svarstext","number_of_respondents_e1e7e8b":"Antal respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Procent av respondenter som valt detta svaret"},"sv-x-k12":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"En tabell över svar och sammanfattande statistik om elevers svarsalternativ.","answer_description_6b353cfd":"Svarsbeskrivning","answer_distribution_2a956e3f":"Svarsfördelning","answer_text_909894d6":"Svarstext","number_of_respondents_e1e7e8b":"Antal respondenter","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Procent av respondenter som valt detta svaret"},"tr":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Öğrencilerin cevap tercihleri ile ilgili cevaplar ve kısa istatistik tablosu","answer_description_6b353cfd":"Cevap Açıklaması","answer_distribution_2a956e3f":"Cevap Dağılımı","answer_text_909894d6":"Cevap Metni","number_of_respondents_e1e7e8b":"Cevap Verenlerin Sayısı","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Bu cevabı seçenlerin yüzdesi"},"uk":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"Таблиця відповідей і коротких статистичних даних про вибрані студентами варіанти відповідей.","answer_description_6b353cfd":"Опис відповіді","answer_distribution_2a956e3f":"Розподіл відповіді","answer_text_909894d6":"Текстова відповідь","number_of_respondents_e1e7e8b":"Кількість респондентів","percent_of_respondents_selecting_this_answer_4c2ce4ee":"Відсоток респондентів, які обирають цю відповідь"},"zh-Hans":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"与学生答案选项相关的答案列表和简要统计。","answer_description_6b353cfd":"答案说明","answer_distribution_2a956e3f":"答案分布","answer_text_909894d6":"答案文本","number_of_respondents_e1e7e8b":"应答者的数量","percent_of_respondents_selecting_this_answer_4c2ce4ee":"受访者选择这个答案的百分比"},"zh-Hant":{"a_table_of_answers_and_brief_statistics_regarding__f516e98f":"與學生答題選項相關的答案和簡要統計數據表格。","answer_description_6b353cfd":"答案說明","answer_distribution_2a956e3f":"答案分佈","answer_text_909894d6":"答題文字","number_of_respondents_e1e7e8b":"回應的數量","percent_of_respondents_selecting_this_answer_4c2ce4ee":"選擇此答案的調查對象百分比"}}'))
n("jQeR")
n("0sPK")
t["default"]=i["default"].scoped("quiz_statistics.answer_table")}}])

//# sourceMappingURL=quiz_statistics_cqs-c-20cdaf082c.js.map