(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){e.exports=a(453)},433:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);a(194),a(395);for(var n=a(0),i=a.n(n),s=a(188),r=a.n(s),l=a(457),o=a(14),c=a(15),p=a(17),m=a(16),u=a(18),d=a(459),h=a(458),v=a(189),E=a.n(v),g=a(456),f={hostname:"localhost",protokoll:"http://",loginPage:"/intern/login.php",prod:!1,smartphoneWidth:578,anzahlPlaetze:6,platzArray:[],daypickerMaxDays:180,daypickerDaysBeforeToday:3,buchungenlog:"/intern/api/buchungenlog.php",dailyStartTime:8,dailyEndTime:20},S=1;S<=f.anzahlPlaetze;S++)f.platzArray.push(S);var b={NONE:0,MYDATA_READ:1,MYDATA_WRITE:2,MYDATA_UPDATE:3,ALLDATA_READ:5,ALLDATA_WRITE:8,ALLDATA_UPDATE:15,VORSTAND:16,PERMISSION_FREE_2:32,PERMISSION_FREE_3:64,T_ALL_PERMISSIONS:128,T_REGISTER:256,PERMISSION_FREE_5:512,PERMISSION_FREE_6:1024,PERMISSION_FREE_7:2048,PERMISSION_FREE_8:4096,PERMISSION_FREE_9:8192,PERMISSION_FREE_10:16384,PERMISSION_UPDATE:32768,ADMINISTRATOR:65535},y=f;var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({zumBelegungstag:!0})},a.state={courtData:[],isLoading:!1,error:!1,width:window.innerWidth,zumBelegungstag:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.court,a=e.day;this.fetchPlatz(t,a)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.court,a=e.day;this.fetchPlatz(t,a)}},{key:"fetchPlatz",value:function(e,t){var a=this,n=b.T_ALL_PERMISSIONS===(b.T_ALL_PERMISSIONS&this.props.permissions),s=y.protokoll+y.hostname+"/intern/api/platz.php?op=ra&p="+e+"&ds="+t+"&de="+t;window.addEventListener("resize",this.handleWindowSizeChange),this.setState({isLoading:!0}),fetch(s,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();a.setState({isLoading:!1})}).then(function(s){var r=s.records.map(function(a){var s=a.id,r=function(e,t,a){var n=60*Number(t.substring(11,13))+Number(t.substring(14,16))-(60*Number(e.substring(11,13))+Number(e.substring(14,16))),i=a;return E()("D-"+n,"ts","T-"+e.substring(11,16).replace(":","-"),i)}(a.starts_at,a.ends_at,a.booking_type),l=a.p1.replace(new RegExp("^[\\.\\s]+"),"")+(a.p2?", "+a.p2.replace(new RegExp("^[\\.\\s]+"),""):" ")+(a.p3?", "+a.p3.replace(new RegExp("^[\\.\\s]+"),""):" ")+(a.p4?", "+a.p4.replace(new RegExp("^[\\.\\s]+"),""):" ");return!n&&a.booking_type.match(/(ts-training)|(ts-nichtreservierbar)/gi)?i.a.createElement("div",{key:s,className:r},i.a.createElement("strong",null,a.starts_at.substring(11,16))," ",l,i.a.createElement("div",null," ",a.comment," ")):i.a.createElement(g.a,{key:s,className:r,to:{pathname:"/belegungsdetails/update",state:{c:e,i:a.id,d:t}}},i.a.createElement("strong",null,a.starts_at.substring(11,16))," ",l,i.a.createElement("div",null," ",a.comment," "))});a.setState({courtData:r}),a.setState({isLoading:!1})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.courtData}}]),t}(n.Component),N=a(190),A=a.n(N);function z(e){var t=""+(e.getMonth()+1),a=""+e.getDate(),n=e.getFullYear();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),[n,t,a].join("-")}var w=[],D=function(e){var t=e.text,a=e.selected;return i.a.createElement("div",{className:"dateBtn ".concat(a?"aktiv":"")},t)},O=function(e){var t=e.text;e.className;return i.a.createElement("div",{className:"dateBtn arrowPicker"},t)},C=O({text:"<",className:"arrow-prev"}),T=O({text:">",className:"arrow-next"}),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={selected:0},a.onSelect=function(e){a.setState({selected:e},function(){return a.props.onClickHandler(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.startswith,a=e.day,n=new Date(a);n.setDate(n.getDate()+y.daypickerMaxDays),w=function(e,t){for(var a=new Date(e),n=[];a<=t;)n.push({name:z(a),text:a.toLocaleDateString("de-DE",{weekday:"short",month:"short",day:"numeric"})}),a.setDate(a.getDate()+1);return n}(t,n),this.setState({selected:a})}},{key:"render",value:function(){var e=this.state.selected,t=w.map(function(e){var t=e.name,a=e.text;return i.a.createElement(D,{text:a,key:t})});return i.a.createElement("div",{className:"App"},i.a.createElement(A.a,{data:t,arrowLeft:C,arrowRight:T,selected:e,onSelect:this.onSelect}))}}]),t}(n.Component),_=(a(433),a(191)),j=a.n(_),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.state={width:window.innerWidth,day:"",dayDate:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange);var e,t=this.props.match.params.day;t=(e=new Date(t))instanceof Date&&!isNaN(e)?new Date(t):new Date,this.setState({dayDate:t,day:z(t)}),this.setDay=this.setDay.bind(this)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"setDay",value:function(e){var t=new Date(e);this.setState({dayDate:t,day:z(t)})}},{key:"render",value:function(){var e=this,t=this.state.width,a=new Date;if(a.setDate(a.getDate()-y.daypickerDaysBeforeToday),t<=y.smartphoneWidth){var n=y.platzArray.map(function(t){return i.a.createElement("div",{key:t,id:"platz"+t},i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"platzDim"},i.a.createElement("td",{className:"zeitleisteCol"},i.a.createElement(R,null)),i.a.createElement("td",{className:"platz"},i.a.createElement("div",{className:"platznummer"},i.a.createElement("span",{className:"platzziffer"},t),i.a.createElement(g.a,{to:{pathname:"/belegungsdetails/new",state:{c:t,d:e.state.day}}},i.a.createElement("img",{className:"neuBtn p-1 rounded-circle",src:"images/add.png",alt:"Neue Belegung"}))),i.a.createElement("div",null,i.a.createElement(k,{court:t,day:e.state.day,permissions:e.props.permissions})))))))});return i.a.createElement("div",null,i.a.createElement(I,{startswith:a,day:this.state.day,onClickHandler:this.setDay}),i.a.createElement(j.a,null,n),i.a.createElement(x,null))}var s=y.platzArray.map(function(t){return i.a.createElement("td",{key:t,id:"platz"+t,className:"platz"},i.a.createElement("div",null,i.a.createElement("div",{className:"platznummer"},i.a.createElement("span",{className:"platzziffer rounded-circle"},t),i.a.createElement(g.a,{to:{pathname:"/belegungsdetails/new",state:{c:t,d:e.state.day}}},i.a.createElement("img",{className:"neuBtn p-1 rounded-circle",src:"images/add.png",alt:"Neue Belegung"}))),i.a.createElement("div",null,i.a.createElement(k,{court:t,day:e.state.day,permissions:e.props.permissions}))))});return i.a.createElement("div",null,i.a.createElement(I,{startswith:a,day:this.state.day,onClickHandler:this.setDay}),i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"platzDim"},i.a.createElement("td",{className:"zeitleisteCol"},i.a.createElement(R,null)," "),s))),i.a.createElement(x,null))}}]),t}(n.Component),R=function(){for(var e=[],t=y.dailyStartTime;t<=y.dailyEndTime;t++)for(var a=0;a<60;a+=60)e.push(t.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0"));return i.a.createElement("div",{className:"zeitleiste"},e.map(function(e,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement("div",{className:"stunde"},i.a.createElement("div",{className:"stundetext"},e)),i.a.createElement("div",{className:"viertelstunde"}),i.a.createElement("div",{className:"viertelstunde"}),i.a.createElement("div",{className:"viertelstunde"}))}))},x=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col l-turnier p-0 m-1 text-center"},"Turnier"),i.a.createElement("div",{className:"col l-punktspiele p-0 m-1 text-center"},"Punktspiele"),i.a.createElement("div",{className:"col l-training m-1 text-center"},"Training"),i.a.createElement("div",{className:"col l-nichtreservierbar p-0 m-1 text-center"},"Frei verf\xfcgbar / Anderes"))},P=L,M=a(192),B=a(137),W=a(39),F=a(460),V=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(W.a)(Object(W.a)(a))),a.handleSave=a.handleSave.bind(Object(W.a)(Object(W.a)(a))),a.handleDelete=a.handleDelete.bind(Object(W.a)(Object(W.a)(a)));var n=e.r,i=n.starts_at.split(" "),s=Object(B.a)(i,2),r=s[0],l=s[1],c=new Date(r).getDate()===(new Date).getDate(),u=""===n.booking_type?"ts-turnier":n.booking_type,d=!n.booking_type.match(/(ts-training)|(ts-nichtreservierbar)/gi)||b.T_ALL_PERMISSIONS===(b.T_ALL_PERMISSIONS&a.props.permissions),h=n.ends_at.split(" "),v=Object(B.a)(h,2),E=v[0],g=v[1],f=r.split("-"),S="Doppel"===n.booking_type;return a.state={r:n,spieltag:f[2]+"."+f[1]+"."+f[0],startsAtDate:r,endsAtDate:E,startsAtStd:l.substring(0,2),startsAtViertel:l.substring(3,5),endsAtStd:g.substring(0,2),endsAtViertel:g.substring(3,5),bookingType:u,comment:"undefined"===typeof n.comment?"":n.comment,p1:n.p1id,p2:n.p2id,p3:n.p3id,p4:n.p4id,spieler:[],court:n.court,zurTafel:!1,doppel:S,fehlerSpielzeit:!1,fehlerSpielzeitTxt:"",fehlerSpieler:!1,fehlerSpielerTxt:"",spielzeitClassnames:"form-control",invalidClassnameSpielzeit:"",invalidClassnameSpieler:"",saveActive:!1,deleteActive:d,admin:!1,dateIsToday:c},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=y.protokoll+y.hostname+"/intern/api/spieler.php";this.setState({isLoading:!0}),fetch(t,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Laden der Spielerdaten")}).then(function(t){var a=t.records;e.setState({spieler:a})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this;return!0===this.state.zurTafel?i.a.createElement(F.a,{to:"/"+this.state.startsAtDate}):i.a.createElement("div",null,i.a.createElement("h1",null,"Spieltag: ",this.state.spieltag),i.a.createElement("form",{className:"form-inline"},i.a.createElement("fieldset",{className:"fields"},i.a.createElement("div",null,i.a.createElement("strong",null,"Platz")),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{id:"court",className:"form-control",onChange:this.handleChange,value:this.state.court},i.a.createElement("option",{value:"--"},"--"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"))),i.a.createElement("div",null,i.a.createElement("strong",null,"Start")," ",i.a.createElement("span",{id:"startsAtInvalid",className:"invalidText"},this.state.fehlerSpielzeitTxt)),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{id:"startsAtStd",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.startsAtStd},i.a.createElement("option",{value:"--"},"--"),i.a.createElement("option",{value:"08"},"08"),i.a.createElement("option",{value:"09"},"09"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"11"},"11"),i.a.createElement("option",{value:"12"},"12"),i.a.createElement("option",{value:"13"},"13"),i.a.createElement("option",{value:"14"},"14"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"16"},"16"),i.a.createElement("option",{value:"17"},"17"),i.a.createElement("option",{value:"18"},"18"),i.a.createElement("option",{value:"19"},"19"),i.a.createElement("option",{value:"20"},"20")),i.a.createElement("select",{id:"startsAtViertel",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.startsAtViertel},i.a.createElement("option",{value:"--"},"--"),i.a.createElement("option",{value:"00"},"00"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"45"},"45"))),i.a.createElement("div",null,i.a.createElement("strong",null,"Ende")),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{id:"endsAtStd",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.endsAtStd},i.a.createElement("option",{value:"--"},"--"),i.a.createElement("option",{value:"08"},"08"),i.a.createElement("option",{value:"09"},"09"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"11"},"11"),i.a.createElement("option",{value:"12"},"12"),i.a.createElement("option",{value:"13"},"13"),i.a.createElement("option",{value:"14"},"14"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"16"},"16"),i.a.createElement("option",{value:"17"},"17"),i.a.createElement("option",{value:"18"},"18"),i.a.createElement("option",{value:"19"},"19"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"21"},"21")),i.a.createElement("select",{id:"endsAtViertel",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.endsAtViertel},i.a.createElement("option",{value:"--"},"--"),i.a.createElement("option",{value:"00"},"00"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"45"},"45"))),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Buchungstyp")),i.a.createElement("select",{id:"bookingType",className:"form-control",onChange:this.handleChange,value:this.state.bookingType},i.a.createElement("option",{value:"ts-turnier"},"Turnier"),i.a.createElement("option",{value:"ts-punktspiele"},"Punktspiele"),i.a.createElement("option",{value:"ts-training"},"Training"),i.a.createElement("option",{value:"ts-nichtreservierbar"},"Nicht reservierbar")),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Spieler")," ",i.a.createElement("span",{id:"playerInvalid",className:"invalidText"},this.state.fehlerSpielerTxt)),i.a.createElement("div",{className:"form-row"},i.a.createElement("select",{id:"p1",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpieler,onChange:this.handleChange,value:this.state.p1},i.a.createElement("option",{value:"none"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return i.a.createElement("option",{key:"p1"+e.id,value:e.id},e.spieler)})),i.a.createElement("select",{id:"p2",className:"form-control",onChange:this.handleChange,value:this.state.p2},i.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return i.a.createElement("option",{key:"p2"+e.id,value:e.id},e.spieler)}))),i.a.createElement("div",{className:"form-row"},this.state.doppel?i.a.createElement("select",{id:"p3",className:"form-control",onChange:this.handleChange,value:this.state.p3},i.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return i.a.createElement("option",{key:"p3"+e.id,value:e.id},e.spieler)})):"",this.state.doppel?i.a.createElement("select",{id:"p4",className:"form-control",onChange:this.handleChange,value:this.state.p4},i.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return i.a.createElement("option",{key:"p4"+e.id,value:e.id},e.spieler)})):""),i.a.createElement("div",null,i.a.createElement("strong",null,"Bemerkung")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{id:"comment",className:"form-control",onChange:this.handleChange,value:this.state.comment,placeholder:"Spielergebnis o. \xe4."})),i.a.createElement("button",{type:"submit",onClick:function(t){e.handleSave(t)},className:"btn btn-primary m-1",disabled:!this.state.saveActive},"Speichern"),i.a.createElement("button",{type:"submit",onClick:function(t){e.handleDelete(t)},className:"btn btn-primary m-2",disabled:!this.state.deleteActive},"L\xf6schen"))))}},{key:"handleSave",value:function(e){var t=this;e.preventDefault();var a="?op=cu&rid="+this.state.r.id+"&ds="+this.state.startsAtDate+" "+this.state.startsAtStd+":"+this.state.startsAtViertel+"&de="+this.state.endsAtDate+" "+this.state.endsAtStd+":"+this.state.endsAtViertel+"&uid="+this.props.userId+"&p1="+this.state.p1+"&p2="+this.state.p2+"&p3="+this.state.p3+"&p4="+this.state.p4+"&c="+this.state.court+"&t="+this.state.bookingType+"&cmt="+this.state.comment+"&pr=0",n=y.protokoll+y.hostname+"/intern/api/platz.php"+a;fetch(n,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Erzeugen/Updaten der Belegung"+t.state.r.id)}).then(function(e){var n=e.records[0].id;if("ok"===e.records[0].returncode){var i=y.protokoll+y.hostname+y.buchungenlog+a+"&rid="+n;fetch(i,{credentials:"same-origin"}),t.setState({zurTafel:!0})}else t.setState({fehlerSpielzeitTxt:"- Spielzeit bereits belegt!",fehlerSpielzeit:!0}),t.setState({invalidClassnameSpielzeit:"invalidFeedback"})})}},{key:"handleDelete",value:function(e){var t=this;e.preventDefault();var a="?op=d&rid="+this.state.r.id+"&uid="+this.state.r.userId,n=y.protokoll+y.hostname+y.buchungenlog+a;fetch(n,{credentials:"same-origin"}).then(function(e){if(e.ok){var n=y.protokoll+y.hostname+"/intern/api/buchungenlog.php"+a+"&uid="+t.props.userId;fetch(n,{credentials:"same-origin"}),t.setState({zurTafel:!0})}}),e.preventDefault()}},{key:"handleChange",value:function(e){var t=this;e.preventDefault();var a={};"bookingType"===(a={id:e.target.id,value:e.target.value}).id&&("Doppel"===a.value?this.setState({doppel:!0,p3:0,p4:0}):this.setState({doppel:!1})),this.setState(Object(M.a)({},a.id,a.value),function(){a.id.match(/(startsAtStd)|(startsAtViertel)|(endsAtStd)|(endsAtViertel)|(court)|(p1)|(p2)|(p3)|(p4)|(bookingType)|(comment)/gi)&&(t.clearFehler(),t.validateSpielzeit(),t.validateSpieler(),t.state.bookingType.match(/(ts-training)|(ts-nichtreservierbar)/gi)&&(t.setState({deleteActive:b.T_ALL_PERMISSIONS===(b.T_ALL_PERMISSIONS&t.props.permissions)}),t.setState({saveActive:b.T_ALL_PERMISSIONS===(b.T_ALL_PERMISSIONS&t.props.permissions)})))})}},{key:"clearFehler",value:function(){this.setState({fehlerSpielzeitTxt:"",fehlerSpielzeit:!1,invalidClassnameSpielzeit:""}),this.setState({fehlerSpielerTxt:"",fehlerSpieler:!1,invalidClassnameSpieler:""}),this.setState({saveActive:!0}),this.setState({deleteActive:!0})}},{key:"validateSpielzeit",value:function(){if(this.state.startsAtStd+this.state.startsAtViertel>=this.state.endsAtStd+this.state.endsAtViertel)return this.setState({fehlerSpielzeitTxt:"- Der Start muss vor dem Ende liegen!",fehlerSpielzeit:!0}),this.setState({invalidClassnameSpielzeit:"invalidFeedback"}),void this.setState({saveActive:!1})}},{key:"validateSpieler",value:function(){var e=this.state;"0000"===""+e.p1+e.p2+e.p3+e.p4&&(this.setState({fehlerSpielerTxt:"- Bitte mindestens einen Spieler eintragen!",fehlerSpieler:!0}),this.setState({invalidClassnameSpieler:"invalidFeedback"}),this.setState({saveActive:!1}))}}]),t}(n.Component);var U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={belegung:[],isLoading:!1,error:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.op;if("update"===e){var t=this.props.location.state,a=t.i,n=t.d;this.updateBel(a,n)}else if("new"===e){var i=this.props.location.state,s=i.c,r=i.d;this.newBel(s,r)}}},{key:"updateBel",value:function(e,t){var a=this,n=y.protokoll+y.hostname+"/intern/api/platz.php?op=r&rid="+e;this.setState({isLoading:!0}),fetch(n,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Laden der Platzbuchungsdetails")}).then(function(e){var n=e.records.map(function(e){return i.a.createElement("div",{key:e.id,className:"p-2"},i.a.createElement(g.a,{to:"/"+t},i.a.createElement("p",{className:"btn btn-secondary"},"Zur\xfcck")),i.a.createElement(V,{r:e,userId:a.props.userId,permissions:a.props.permissions}))});a.setState({belegung:n})}).catch(function(e){return a.setState({error:e,isLoading:!1})})}},{key:"newBel",value:function(e,t){var a=function(e,t){return{id:0,user_id:0,p1:"",p2:"",p3:"",p4:"",court:e,starts_at:t+" 08:00:00",ends_at:t+" 09:00:00",booking_type:"",p1id:0,p2id:0,p3id:0,p4id:0}}(e,t),n=[i.a.createElement("div",{key:-1,className:"p-2 w-50"},i.a.createElement(g.a,{to:"/"+t},i.a.createElement("p",{className:"btn btn-secondary"},"Zur\xfcck")),i.a.createElement(V,{r:a,userId:this.props.userId,permissions:this.props.permissions}))];this.setState({belegung:n})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.belegung)}}]),t}(n.Component),Y=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(h.a,{exact:!0,path:"/belegungsdetails/:op",render:function(t){return i.a.createElement(U,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}),i.a.createElement(h.a,{path:"/:day",render:function(t){return i.a.createElement(P,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}),i.a.createElement(h.a,{render:function(t){return i.a.createElement(P,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={user:{},isLoggedIn:!1,permissions:0,renderData:[],isLoading1:!1,isLoading2:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading1:!0,isLoading2:!0}),y.prod?(this.checkUser(),this.setPermission()):this.setState({user:{id:211,vorname:"Conny",nachname:"Roloff"}})}},{key:"checkUser",value:function(){var e=this,t=y.protokoll+y.hostname+"/intern/api/checkuser.php";fetch(t,{credentials:"same-origin"}).then(function(t){t.ok&&t.json().then(function(t){"OK"===t.retcode?e.setState({user:t,isLoading1:!1}):window.location.href=y.protokoll+y.hostname+y.loginPage})})}},{key:"setPermission",value:function(){var e=this,t=y.protokoll+y.hostname+"/intern/api/checkpermission.php";fetch(t,{credentials:"same-origin"}).then(function(t){t.ok&&t.json().then(function(t){e.setState({permissions:t.retcode,isLoading2:!1})})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading1,a=e.isLoading2;return y.prod&&(t||a)?i.a.createElement("p",null,"Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col text-left"},i.a.createElement("img",{src:"/images/tcoplain_0,1x.png",alt:"TCO -Logo"})),i.a.createElement("div",{className:"col"},i.a.createElement("span",{className:"h6 text-center ml-2"},i.a.createElement("a",{href:"/intern/tafel/",id:"appname"},"Turnierplaner")),i.a.createElement("span",{className:"text-center ml-2"},i.a.createElement("small",null," (",this.state.user.vorname+" "+this.state.user.nachname,")"))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"small align-bottom"},i.a.createElement("span",{className:"pl-5"},i.a.createElement("a",{href:"/intern/logout.php"},i.a.createElement("img",{src:"/images/logout.png",alt:"Logout"}))))))),i.a.createElement(Y,{userId:this.state.user.id,permissions:this.state.permissions}),i.a.createElement("footer",{className:"blockquote-footer"},"(c) 2019 by Conny Roloff. Dem TC Olching zur kostenlosen Nutzung zur Verf\xfcgung gestellt."))}}]),t}(n.Component);r.a.render(i.a.createElement(l.a,null,i.a.createElement(H,null)),document.getElementById("root"))}},[[193,2,1]]]);
//# sourceMappingURL=main.e9c64969.chunk.js.map