(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(514)},458:function(e,t,a){},514:function(e,t,a){"use strict";a.r(t);a(217),a(419);var n=a(0),s=a.n(n),i=a(209),r=a.n(i),l=a(518),o=a(14),c=a(15),p=a(17),m=a(16),u=a(18),d=a(519),h=a(520),v=a(210),g=a.n(v),E=a(517);function b(e){var t=""+(e.getMonth()+1),a=""+e.getDate(),n=e.getFullYear();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),[n,t,a].join("-")}function f(e){var t=new Date;t=t.getFullYear();var a=new Date(e);return t-(a=a.getFullYear())<18?" (Jugend)":""}function S(e){if("undefined"===typeof e||null===e)return!1;var t=new Date;t=t.getFullYear();var a=new Date(e);return t-(a=a.getFullYear())<18}for(var y={hostname:"localhost",protokoll:"http://",loginPage:"/intern/login.php",prod:!1,testuser:{id:307,vorname:"Hart",nachname:"VerdrahtetUsr",permissions:0},stringSeparator:" ",smartphoneWidth:578,anzahlPlaetze:6,platzArray:[],daypickerMaxDays:180,daypickerDaysBeforeToday:3,buchungenlog:"/intern/api/buchungenlog.php",platzbuchungen:"/intern/api/platz.php",dailyStartTime:8,dailyEndTime:20,eveningTime:1800,singleTime:100,doubleTime:130,turnierTime:200,gastId:1},k=1;k<=y.anzahlPlaetze;k++)y.platzArray.push(k);var N={NONE:0,MYDATA_READ:1,MYDATA_WRITE:2,MYDATA_UPDATE:3,ALLDATA_READ:5,ALLDATA_WRITE:8,ALLDATA_UPDATE:15,PERMISSION_FREE_2:32,PERMISSION_FREE_3:64,T_ALL_PERMISSIONS:128,VORSTAND:144,T_REGISTER:256,PERMISSION_FREE_5:512,PERMISSION_FREE_6:1024,PERMISSION_FREE_7:2048,PERMISSION_FREE_8:4096,PERMISSION_FREE_9:8192,PERMISSION_FREE_10:16384,PERMISSION_UPDATE:32768,ADMINISTRATOR:65535},z=y;var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({zumBelegungstag:!0})},a.state={courtData:[],isLoading:!1,error:!1,width:window.innerWidth,zumBelegungstag:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.court,a=e.day;this.fetchPlatz(t,a)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.court,a=e.day;this.fetchPlatz(t,a)}},{key:"fetchPlatz",value:function(e,t){var a=this,n=N.T_ALL_PERMISSIONS===(N.T_ALL_PERMISSIONS&this.props.permissions),i=z.protokoll+z.hostname+"/intern/api/platz.php?op=ra&p="+e+"&ds="+t+"&de="+t;window.addEventListener("resize",this.handleWindowSizeChange),this.setState({isLoading:!0}),fetch(i,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();a.setState({isLoading:!1})}).then(function(i){var r=i.records.map(function(a){var i=a.id,r=function(e,t,a,n,s,i,r){var l=60*Number(t.substring(11,13))+Number(t.substring(14,16))-(60*Number(e.substring(11,13))+Number(e.substring(14,16))),o=a,c="ts-einzel"===o&&l>60||"ts-doppel"===o&&l>120||t.substring(11,16)>"17:00"&&(S(n)||S(s)||S(i)||S(r))?"overbooked":"";return g()("D-"+l,"ts","T-"+e.substring(11,16).replace(":","-"),o,c)}(a.starts_at,a.ends_at,a.booking_type,a.p1geb,a.p2geb,a.p3geb,a.p4geb),l=a.p1.replace(new RegExp("^[\\.\\s]+"),"")+f(a.p1geb)+(a.p2?", "+a.p2.replace(new RegExp("^[\\.\\s]+"),""):" ")+f(a.p2geb)+(a.p3?", "+a.p3.replace(new RegExp("^[\\.\\s]+"),""):" ")+f(a.p3geb)+(a.p4?", "+a.p4.replace(new RegExp("^[\\.\\s]+"),""):" ")+f(a.p4geb);return!n&&a.booking_type.match(/(ts-training)|(ts-nichtreservierbar)/gi)?s.a.createElement("div",{key:i,className:r},s.a.createElement("strong",null,a.starts_at.substring(11,16))," ",l,s.a.createElement("div",null," ",a.comment," ")):s.a.createElement(E.a,{key:i,className:r,to:{pathname:"/belegungsdetails/update",state:{c:e,i:a.id,d:t}}},s.a.createElement("strong",null,a.starts_at.substring(11,16))," ",l,s.a.createElement("div",null," ",a.comment," "))});a.setState({courtData:r}),a.setState({isLoading:!1})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.courtData}}]),t}(n.Component),A=a(211),w=a.n(A),D=[],O=function(e){var t=e.text,a=e.selected;return s.a.createElement("div",{className:"dateBtn ".concat(a?"aktiv":"")},t)},C=function(e){var t=e.text;e.className;return s.a.createElement("div",{className:"dateBtn arrowPicker"},t)},I=C({text:"<",className:"arrow-prev"}),_=C({text:">",className:"arrow-next"}),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={selected:0},a.onSelect=function(e){a.setState({selected:e},function(){return a.props.onClickHandler(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.startswith,a=e.day,n=new Date(a);n.setDate(n.getDate()+z.daypickerMaxDays),D=function(e,t){for(var a=new Date(e),n=[];a<=t;)n.push({name:b(a),text:a.toLocaleDateString("de-DE",{weekday:"short",month:"short",day:"numeric"})}),a.setDate(a.getDate()+1);return n}(t,n),this.setState({selected:a})}},{key:"render",value:function(){var e=this.state.selected,t=D.map(function(e){var t=e.name,a=e.text;return s.a.createElement(O,{text:a,key:t})});return s.a.createElement("div",{className:"App"},s.a.createElement(w.a,{data:t,arrowLeft:I,arrowRight:_,selected:e,onSelect:this.onSelect}))}}]),t}(n.Component),L=(a(458),a(212)),x=a.n(L),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.state={width:window.innerWidth,day:"",dayDate:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange);var e,t=this.props.match.params.day;t=(e=new Date(t))instanceof Date&&!isNaN(e)?new Date(t):new Date,this.setState({dayDate:t,day:b(t)}),this.setDay=this.setDay.bind(this)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"setDay",value:function(e){var t=new Date(e);this.setState({dayDate:t,day:b(t)})}},{key:"render",value:function(){var e=this,t=this.state.width,a=new Date;if(a.setDate(a.getDate()-z.daypickerDaysBeforeToday),t<=z.smartphoneWidth){var n=z.platzArray.map(function(t){return s.a.createElement("div",{key:t,id:"platz"+t},s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:"platzDim"},s.a.createElement("td",{className:"zeitleisteCol"},s.a.createElement(P,null)),s.a.createElement("td",{className:"platz"},s.a.createElement("div",{className:"platznummer"},s.a.createElement("span",{className:"platzziffer"},t),s.a.createElement(E.a,{to:{pathname:"/belegungsdetails/new",state:{c:t,d:e.state.day}}},s.a.createElement("img",{className:"neuBtn p-1 rounded-circle",src:"images/add.png",alt:"Neue Belegung"}))),s.a.createElement("div",null,s.a.createElement(T,{court:t,day:e.state.day,permissions:e.props.permissions})))))))});return s.a.createElement("div",null,s.a.createElement(j,{startswith:a,day:this.state.day,onClickHandler:this.setDay}),s.a.createElement(x.a,null,n),s.a.createElement(M,null))}var i=z.platzArray.map(function(t){return s.a.createElement("td",{key:t,id:"platz"+t,className:"platz"},s.a.createElement("div",null,s.a.createElement("div",{className:"platznummer"},s.a.createElement("span",{className:"platzziffer rounded-circle"},t),s.a.createElement(E.a,{to:{pathname:"/belegungsdetails/new",state:{c:t,d:e.state.day}}},s.a.createElement("img",{className:"neuBtn p-1 rounded-circle",src:"images/add.png",alt:"Neue Belegung"}))),s.a.createElement("div",null,s.a.createElement(T,{court:t,day:e.state.day,permissions:e.props.permissions}))))});return s.a.createElement("div",null,s.a.createElement(j,{startswith:a,day:this.state.day,onClickHandler:this.setDay}),s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:"platzDim"},s.a.createElement("td",{className:"zeitleisteCol"},s.a.createElement(P,null)," "),i))),s.a.createElement(M,null))}}]),t}(n.Component),P=function(){for(var e=[],t=z.dailyStartTime;t<=z.dailyEndTime;t++)for(var a=0;a<60;a+=60)e.push(t.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0"));return s.a.createElement("div",{className:"zeitleiste"},e.map(function(e,t){return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{className:"stunde"},s.a.createElement("div",{className:"stundetext"},e)),s.a.createElement("div",{className:"viertelstunde"}),s.a.createElement("div",{className:"viertelstunde"}),s.a.createElement("div",{className:"viertelstunde"}))}))},M=function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row l-einzeldoppel p-0 pl-1 m-1"},"Einzel/Doppel"),s.a.createElement("div",{className:"row l-turnier p-0 pl-1 m-1"},"Turnier"),s.a.createElement("div",{className:"row l-veranstaltung p-0 pl-1 m-1"},"Veranstaltung"),s.a.createElement("div",{className:"row l-punktspiele p-0 pl-1 m-1"},"Punktspiele"),s.a.createElement("div",{className:"row l-training p-0 pl-1 m-1"},"Training"),s.a.createElement("div",{className:"row l-nichtreservierbar p-0 pl-1 m-1"},"Frei verf\xfcgbar / Anderes"))},F=R,B=a(213),V=a(147),W=a(41),U=a(521),Y=a(214),K=a.n(Y),Z=a(215),H=a.n(Z),J=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(W.a)(Object(W.a)(a))),a.handleSave=a.handleSave.bind(Object(W.a)(Object(W.a)(a))),a.handleDelete=a.handleDelete.bind(Object(W.a)(Object(W.a)(a)));var n=e.r,s=n.starts_at.split(" "),i=Object(V.a)(s,2),r=i[0],l=i[1],c=new Date(r).getDate()===(new Date).getDate(),u=""===n.booking_type?c?"ts-einzel":"ts-turnier":n.booking_type,d=!n.booking_type.match(/(ts-training)|(ts-nichtreservierbar)/gi)||N.T_ALL_PERMISSIONS===(N.T_ALL_PERMISSIONS&a.props.permissions),h=n.ends_at.split(" "),v=Object(V.a)(h,2),g=v[0],E=v[1],b=r.split("-");return a.state={r:n,spieltag:b[2]+"."+b[1]+"."+b[0],startsAtDate:r,endsAtDate:g,startsAtStd:l.substring(0,2),startsAtViertel:l.substring(3,5),endsAtStd:E.substring(0,2),endsAtViertel:E.substring(3,5),bookingType:u,comment:"undefined"===typeof n.comment?"":n.comment,p1:n.p1id,p2:n.p2id,p3:n.p3id,p4:n.p4id,p1geb:n.p1geb,p2geb:n.p2geb,p3geb:n.p3geb,p4geb:n.p4geb,spieler:[],court:n.court,zurTafel:!1,fehlerSpielzeit:!1,fehlerSpielzeitTxt:"",fehlerSpielerTxt:"",spielzeitClassnames:"form-control",invalidClassnameSpielzeit:"",invalidClassnameSpieler:"",saveActive:!1,deleteActive:d,admin:!1,dateIsToday:c,overbooked:!1,jugend:!1,nichtVollBerechtigte:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=z.protokoll+z.hostname+"/intern/api/spieler.php";this.setState({isLoading:!0}),fetch(t,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Laden der Spielerdaten")}).then(function(t){var a=t.records;e.setState({spieler:a})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this;if(!0===this.state.zurTafel)return s.a.createElement(U.a,{to:"/"+this.state.startsAtDate});var t=N.VORSTAND&this.props.permissions;return s.a.createElement("div",null,s.a.createElement("h1",null,"Spieltag: ",this.state.spieltag),s.a.createElement("form",{className:"form-inline"},s.a.createElement("fieldset",{className:"fields"},s.a.createElement("div",null,s.a.createElement("strong",null,"Platz")),s.a.createElement("div",{className:"form-group"},s.a.createElement("select",{id:"court",className:"form-control",onChange:this.handleChange,value:this.state.court},s.a.createElement("option",{value:"--"},"--"),s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"),s.a.createElement("option",{value:"6"},"6"))),s.a.createElement("div",null,s.a.createElement("strong",null,"Start")," ",s.a.createElement("span",{id:"startsAtInvalid",className:"invalidText"},this.state.fehlerSpielzeitTxt)),s.a.createElement("div",{className:"form-group"},s.a.createElement("select",{id:"startsAtStd",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.startsAtStd},s.a.createElement("option",{value:"--"},"--"),s.a.createElement("option",{value:"08"},"08"),s.a.createElement("option",{value:"09"},"09"),s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"11"},"11"),s.a.createElement("option",{value:"12"},"12"),s.a.createElement("option",{value:"13"},"13"),s.a.createElement("option",{value:"14"},"14"),s.a.createElement("option",{value:"15"},"15"),s.a.createElement("option",{value:"16"},"16"),s.a.createElement("option",{value:"17"},"17"),s.a.createElement("option",{value:"18"},"18"),s.a.createElement("option",{value:"19"},"19"),s.a.createElement("option",{value:"20"},"20")),s.a.createElement("select",{id:"startsAtViertel",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.startsAtViertel},s.a.createElement("option",{value:"--"},"--"),s.a.createElement("option",{value:"00"},"00"),s.a.createElement("option",{value:"15"},"15"),s.a.createElement("option",{value:"30"},"30"),s.a.createElement("option",{value:"45"},"45"))),s.a.createElement("div",null,s.a.createElement("strong",null,"Ende")),s.a.createElement("div",{className:"form-group"},s.a.createElement("select",{id:"endsAtStd",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.endsAtStd},s.a.createElement("option",{value:"--"},"--"),s.a.createElement("option",{value:"08"},"08"),s.a.createElement("option",{value:"09"},"09"),s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"11"},"11"),s.a.createElement("option",{value:"12"},"12"),s.a.createElement("option",{value:"13"},"13"),s.a.createElement("option",{value:"14"},"14"),s.a.createElement("option",{value:"15"},"15"),s.a.createElement("option",{value:"16"},"16"),s.a.createElement("option",{value:"17"},"17"),s.a.createElement("option",{value:"18"},"18"),s.a.createElement("option",{value:"19"},"19"),s.a.createElement("option",{value:"20"},"20"),s.a.createElement("option",{value:"21"},"21")),s.a.createElement("select",{id:"endsAtViertel",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpielzeit,onChange:this.handleChange,value:this.state.endsAtViertel},s.a.createElement("option",{value:"--"},"--"),s.a.createElement("option",{value:"00"},"00"),s.a.createElement("option",{value:"15"},"15"),s.a.createElement("option",{value:"30"},"30"),s.a.createElement("option",{value:"45"},"45"))),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("strong",null,"Buchungstyp")),s.a.createElement("select",{id:"bookingType",className:"form-control",onChange:this.handleChange,value:this.state.bookingType},s.a.createElement("option",{disabled:!this.state.dateIsToday,value:"ts-einzel"},"Einzel"),s.a.createElement("option",{disabled:!this.state.dateIsToday,value:"ts-doppel"},"Doppel"),s.a.createElement("option",{value:"ts-turnier"},"Turnier"),s.a.createElement("option",{value:"ts-veranstaltung"},"Veranstaltung"),s.a.createElement("option",{disabled:!t,value:"ts-punktspiele"},"Punktspiele"),s.a.createElement("option",{disabled:!1,value:"ts-training"},"Training"),s.a.createElement("option",{disabled:!t,value:"ts-nichtreservierbar"},"Nicht reservierbar")),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("strong",null,"Spieler")," ",s.a.createElement("span",{id:"playerInvalid",className:"invalidText"},this.state.fehlerSpielerTxt)),s.a.createElement("div",{className:"form-row"},s.a.createElement("select",{id:"p1",className:this.state.spielzeitClassnames+" "+this.state.invalidClassnameSpieler,onChange:this.handleChange,value:this.state.p1},s.a.createElement("option",{value:"none"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return s.a.createElement("option",{key:"p1"+e.id,value:e.id},e.spieler+f(e.geburtsdatum))})),"ts-veranstaltung"!==this.state.bookingType?s.a.createElement("select",{id:"p2",className:"form-control",onChange:this.handleChange,value:this.state.p2},s.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return s.a.createElement("option",{key:"p2"+e.id,value:e.id},e.spieler+f(e.geburtsdatum))})):""),s.a.createElement("div",{className:"form-row"},"ts-doppel"===this.state.bookingType?s.a.createElement("select",{id:"p3",className:"form-control",onChange:this.handleChange,value:this.state.p3},s.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return s.a.createElement("option",{key:"p3"+e.id,value:e.id},e.spieler+f(e.geburtsdatum))})):"","ts-doppel"===this.state.bookingType?s.a.createElement("select",{id:"p4",className:"form-control",onChange:this.handleChange,value:this.state.p4},s.a.createElement("option",{value:"0"},"- Bitte ausw\xe4hlen -"),this.state.spieler.map(function(e){return s.a.createElement("option",{key:"p4"+e.id,value:e.id},e.spieler+f(e.geburtsdatum))})):""),s.a.createElement("div",null,s.a.createElement("strong",null,"Bemerkung")," ",s.a.createElement("span",{id:"startsAtInvalid",className:"hintText"},this.state.fehlerKommentarTxt)),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",id:"comment",className:"form-control w-100",onChange:this.handleChange,value:this.state.comment,placeholder:"Spielergebnis, Gastname, ..."})),s.a.createElement("button",{type:"submit",onClick:function(t){e.handleSave(t)},className:"btn btn-primary m-1",disabled:!this.state.saveActive},"Speichern"),s.a.createElement("button",{type:"submit",onClick:function(t){e.handleDelete(t)},className:"btn btn-primary m-2",disabled:!this.state.deleteActive},"L\xf6schen"))))}},{key:"handleSave",value:function(e){var t=this;e.preventDefault();var a="?op=cu&rid="+this.state.r.id+"&ds="+this.state.startsAtDate+" "+this.state.startsAtStd+":"+this.state.startsAtViertel+"&de="+this.state.endsAtDate+" "+this.state.endsAtStd+":"+this.state.endsAtViertel+"&uid="+this.props.userId+"&p1="+this.state.p1+"&p2="+this.state.p2+"&p3="+this.state.p3+"&p4="+this.state.p4+"&c="+this.state.court+"&t="+this.state.bookingType+"&cmt="+this.state.comment+"&pr=0",n=z.protokoll+z.hostname+"/intern/api/platz.php"+a;fetch(n,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Erzeugen/Updaten der Belegung"+t.state.r.id)}).then(function(e){if("ok"===e.records[0].returncode){var n=z.protokoll+z.hostname+z.buchungenlog+a;fetch(n,{credentials:"same-origin"}),t.setState({zurTafel:!0})}else t.setState({fehlerSpielzeitTxt:"- Spielzeit bereits belegt!",fehlerSpielzeit:!0}),t.setState({invalidClassnameSpielzeit:"invalidFeedback"})})}},{key:"handleDelete",value:function(e){var t=this,a=this.state.startsAtDate+"T"+this.state.startsAtStd+":"+this.state.startsAtViertel+"Z",n=new Date(a),s=new Date;if(e.preventDefault(),n>=s||N.VORSTAND&this.props.permissions){var i="?op=d&rid="+this.state.r.id+"&uid="+this.props.userId,r=z.protokoll+z.hostname+z.platzbuchungen+i;fetch(r,{credentials:"same-origin"}).then(function(e){if(e.ok){var a=z.protokoll+z.hostname+z.buchungenlog+i;fetch(a,{credentials:"same-origin"}),t.setState({zurTafel:!0})}})}else this.setState({zurTafel:!0});e.preventDefault()}},{key:"handleChange",value:function(e){var t=this;e.preventDefault(),this.setState(Object(B.a)({},e.target.id,e.target.value),function(){var e,a,n,s,i={fehlerSpielzeitTxt:"",fehlerSpielzeit:!1,invalidClassnameSpielzeit:"",fehlerSpielerTxt:"",invalidClassnameSpieler:"",saveActive:!0,overbooked:!1,deleteActive:!0},r=Number(t.state.startsAtStd+t.state.startsAtViertel),l=Number(t.state.endsAtStd+t.state.endsAtViertel);t.state.spieler.map(function(i){return i.id===t.state.p1&&(e=i.geburtsdatum),i.id===t.state.p2&&(a=i.geburtsdatum),t.state.doppel&&(i.id===t.state.p3&&(n=null!=i.geburtsdatum&&null!=i.geburtsdatum?i.geburtsdatum:0),i.id===t.state.p4&&(s=null!=i.geburtsdatum&&null!=i.geburtsdatum?i.geburtsdatum:0)),i});var o=t.state.startsAtDate+"T"+t.state.startsAtStd+":"+t.state.startsAtViertel+"Z",c=new Date(o),p=new H.a;p.init("DE","BY");var m=!1;[t.state.p1,t.state.p2,t.state.p3,t.state.p4].map(function(e){return console.log("p: "+e),e===z.gastId&&(m=!0),!0});var u=!!p.isHoliday(c)||0!==c.getDay(),d=6===t.state.court,h=!1,v=!1;[e,a,n,s].map(function(e){return 0!==e&&(S(e)?h=!0:v=!0),e});var g=l>z.eveningTime,E=!1,b=0!==t.state.p1&&0!==t.state.p2,f=0!==t.state.p3&&0!==t.state.p4;if(t.state.bookingType.match(/(ts-turnier)|(ts-einzel)|(ts-veranstaltung)/gi))b&&t.state.p1!==t.state.p2?"ts-veranstaltung"!==t.state.bookingType&&"ts-training"!==t.state.bookingType||(i.p2=i.p3=i.p4=0):(i.p3=i.p4=0,E=!0);else{var y=K.a.uniq([t.state.p1,t.state.p2,t.state.p3,t.state.p4]).length<4;b&&f&&!y||(E=!0)}E?(i.fehlerSpielerTxt="- Bitte 2 oder 4 verschiedene Spieler eintragen (Einzel/Doppel)!",i.invalidClassnameSpieler="invalidFeedback",i.saveActive=!1):m?(i.fehlerKommentarTxt="- Bitte den Gastnamen ins Kommentarfeld schreiben!",i.fehlerKommentar=!0,i.saveActive=!0):"ts-veranstaltung"===t.state.bookingType?(i.fehlerKommentarTxt="- Bitte den Veranstaltungsanlass ins Kommentarfeld schreiben!",i.fehlerKommentar=!0,i.saveActive=!0):d&&v&&!h&&u&&g||d&&v&&!h&&u&&!g||d&&v&&!h&&!u&&g?(i.fehlerSpielerTxt="Achtung: Jugendliche haben auf Platz 6 zu dieser Zeit Vorrecht!",i.invalidClassnameSpieler="invalidFeedback",i.overbooked=!0,i.saveActive=!0):(!d&&!v&&h&&u&&g||!d&&!v&&h&&u&&!g||!d&&!v&&h&&!u&&g)&&(i.fehlerSpielerTxt="Achtung: Erwachsene Vollmitglieder haben zu dieser Zeit Vorrecht!",i.invalidClassnameSpieler="invalidFeedback",i.overbooked=!0,i.saveActive=!0),r>=l?(i.fehlerSpielzeitTxt="- Der Start muss vor dem Ende liegen!",i.fehlerSpielzeit=!0,i.invalidClassnameSpielzeit="invalidFeedback",i.saveActive=!1):"ts-einzel"===t.state.bookingType?l-r>z.singleTime&&(i.fehlerSpielzeitTxt="F\xfcr ein Einzel maximal 60 Minuten buchen",i.fehlerSpielzeit=!0,i.invalidClassnameSpielzeit="invalidFeedback",i.saveActive=!1):"ts-doppel"===t.state.bookingType?l-r>z.doubleTime&&(i.fehlerSpielzeitTxt="F\xfcr ein Doppel maximal 90 Minuten buchen",i.fehlerSpielzeit=!0,i.invalidClassnameSpielzeit="invalidFeedback",i.saveActive=!1):"ts-turnier"!==t.state.bookingType&&l-r===z.turnierTime&&(i.fehlerSpielzeitTxt="F\xfcr ein Turnierspiel 120 Minuten buchen",i.fehlerSpielzeit=!0,i.invalidClassnameSpielzeit="invalidFeedback",i.saveActive=!1),t.state.bookingType.match(/(ts-training)|(ts-nichtreservierbar)/gi)&&(i.deleteActive=N.T_ALL_PERMISSIONS===(N.T_ALL_PERMISSIONS&t.props.permissions),i.saveActive=N.T_ALL_PERMISSIONS===(N.T_ALL_PERMISSIONS&t.props.permissions)),t.setState(i)})}}]),t}(n.Component);var G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={belegung:[],isLoading:!1,error:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.op;if("update"===e){var t=this.props.location.state,a=t.i,n=t.d;this.updateBel(a,n)}else if("new"===e){var s=this.props.location.state,i=s.c,r=s.d;this.newBel(i,r)}}},{key:"updateBel",value:function(e,t){var a=this,n=z.protokoll+z.hostname+"/intern/api/platz.php?op=r&rid="+e;this.setState({isLoading:!0}),fetch(n,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.json();throw new Error("Fehler beim Laden der Platzbuchungsdetails")}).then(function(e){var n=e.records.map(function(e){return s.a.createElement("div",{key:e.id,className:"p-2"},s.a.createElement(E.a,{to:"/"+t},s.a.createElement("p",{className:"btn btn-secondary"},"Zur\xfcck")),s.a.createElement(J,{r:e,userId:a.props.userId,permissions:a.props.permissions}))});a.setState({belegung:n})}).catch(function(e){return a.setState({error:e,isLoading:!1})})}},{key:"newBel",value:function(e,t){var a=function(e,t){return{id:0,user_id:0,p1:"",p2:"",p3:"",p4:"",court:e,starts_at:t+" 08:00:00",ends_at:t+" 09:00:00",booking_type:"",geburtsdatum:"0000-00-00",p1id:0,p2id:0,p3id:0,p4id:0}}(e,t),n=[s.a.createElement("div",{key:-1,className:"p-2"},s.a.createElement(E.a,{to:"/"+t},s.a.createElement("p",{className:"btn btn-secondary"},"Zur\xfcck")),s.a.createElement(J,{r:a,userId:this.props.userId,permissions:this.props.permissions}))];this.setState({belegung:n})}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.belegung)}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,s.a.createElement(h.a,{exact:!0,path:"/belegungsdetails/:op",render:function(t){return s.a.createElement(G,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}),s.a.createElement(h.a,{path:"/:day",render:function(t){return s.a.createElement(F,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}),s.a.createElement(h.a,{render:function(t){return s.a.createElement(F,Object.assign({},t,{userId:e.props.userId,permissions:e.props.permissions}))}}))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={user:{},isLoggedIn:!1,permissions:0,renderData:[],isLoading1:!1,isLoading2:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading1:!0,isLoading2:!0}),z.prod?(this.checkUser(),this.setPermission()):this.setState({user:z.testuser,permissions:z.permissions})}},{key:"checkUser",value:function(){var e=this,t=z.protokoll+z.hostname+"/intern/api/checkuser.php?prod=";fetch(t,{credentials:"same-origin"}).then(function(t){t.ok&&t.json().then(function(t){"OK"===t.retcode?e.setState({user:t,isLoading1:!1}):window.location.href=z.protokoll+z.hostname+z.loginPage})})}},{key:"setPermission",value:function(){var e=this,t=z.protokoll+z.hostname+"/intern/api/checkpermission.php";fetch(t,{credentials:"same-origin"}).then(function(t){t.ok&&t.json().then(function(t){e.setState({permissions:t.retcode,isLoading2:!1})})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading1,a=e.isLoading2;return z.prod&&(t||a)?s.a.createElement("p",null,"Loading..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col text-left"},s.a.createElement("img",{src:"/images/tcoplain_0,1x.png",alt:"TCO -Logo"})),s.a.createElement("div",{className:"col"},s.a.createElement("span",{className:"h6 text-center ml-2"},s.a.createElement("a",{href:"/intern/tafel/",id:"appname"},"Platzbuchung")),s.a.createElement("span",{className:"text-center ml-2"},s.a.createElement("small",null," (",this.state.user.vorname+" "+this.state.user.nachname,")"))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"small align-bottom"},s.a.createElement("span",{className:"pl-5"},s.a.createElement("a",{href:"/intern/logout.php"},s.a.createElement("img",{src:"/images/logout.png",alt:"Logout"}))))))),s.a.createElement(q,{userId:this.state.user.id,permissions:this.state.permissions}),s.a.createElement("footer",{className:"blockquote-footer"},"(c) 2019 by Conny Roloff. Dem TC Olching zur kostenlosen Nutzung zur Verf\xfcgung gestellt."))}}]),t}(n.Component);r.a.render(s.a.createElement(l.a,null,s.a.createElement(Q,null)),document.getElementById("root"))}},[[216,2,1]]]);
//# sourceMappingURL=main.8cb107b3.chunk.js.map