(this.webpackJsonporlic=this.webpackJsonporlic||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),s=(a(17),a(2)),l=a.n(s),i=a(4),u=a(3),m=a.n(u),d=m.a.client("https://orlic.cdn.prismic.io/api/v2",{accessToken:"MC5YZmluWkJFQUFDSUFGQnE3.77-9bu-_ve-_ve-_ve-_ve-_vRzvv73vv70AETDvv713H--_vSzvv70T77-9GSfvv73vv71DEBvvv70hfO-_vQ"}),f=a(5),v=(a(20),function(e){var t,a,n,r=e.heroData,o=[],s="";return r.length>0&&(o=(t=r[0].data).hero_text,s=t.background_video.url,t.contact,a=t.contact[0].info,n=t.contact[1].info),c.a.createElement("div",{className:"hero"},c.a.createElement("video",{src:s,autoPlay:!0,muted:!0,playsInline:!0,loop:!0}),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("div",{className:"text"},f.RichText.render(o)),c.a.createElement("div",{className:"contact"},c.a.createElement("p",{className:"contact-item"},a),c.a.createElement("a",{className:"contact-item",href:"mailto:".concat(n)},c.a.createElement("p",null,n)))))}),p=a(7),h=a(9),E=(a(26),function(e){var t=e.headerData,a="";return t.length>0&&(a=t[0].data.logo.url),c.a.createElement("div",{className:"header"},c.a.createElement("img",{className:"logo",src:a,alt:"logo"}),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"https://www.twitter.com",rel:"noopener noreferrer",target:"_blank"},c.a.createElement(p.a,{icon:h.b})),c.a.createElement("a",{href:"https://www.linkedin.com",rel:"noopener noreferrer",target:"_blank"},c.a.createElement(p.a,{icon:h.a}))))}),w=(a(27),function(e){var t=e.caseData.data,a=t.case_title[0].text,n=t.media.url,r=t.link;return c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"case"},c.a.createElement("div",{className:"media-wrapper"},t.media.name.endsWith("mp4")?c.a.createElement("video",{src:n,autoPlay:!0,muted:!0,playsInline:!0,loop:!0}):c.a.createElement("img",{src:n,alt:"case"})),c.a.createElement("h3",null,a))}),g=(a(28),function(e){var t=e.imageWithTextData.data,a=t.background_color,n=t.text_color,r=t.image.url,o=t.title[0].text,s=t.description_text;return console.log(n),c.a.createElement("div",{className:"image-with-text",style:{background:a,color:n}},c.a.createElement("img",{src:r,alt:"showcase image"}),c.a.createElement("div",{className:"headline-wrapper"},c.a.createElement("h2",null,o),f.RichText.render(s)))}),b=(a(29),function(e){var t,a,n,r=e.footerData;return r.length>0&&(a=(t=r[0].data).title[0].text,n=t.footer_content.map((function(e,t){return c.a.createElement("div",{className:"column",key:e+t},f.RichText.render(e.text_column))}))),c.a.createElement("div",{className:"footer"},c.a.createElement("h2",null,a),c.a.createElement("div",{className:"column-wrapper"},n))}),x=(a(30),function(){var e,t,a,r,o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],f=s[1],p=Object(n.useState)([]),h=Object(i.a)(p,2),x=h[0],y=h[1],_=Object(n.useState)([]),N=Object(i.a)(_,2),k=N[0],O=N[1],j=Object(n.useState)([]),D=Object(i.a)(j,2),S=D[0],P=D[1],T=Object(n.useState)([]),q=Object(i.a)(T,2),W=q[0],R=q[1],B=Object(n.useState)([]),F=Object(i.a)(B,2),I=F[0],J=F[1];return Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","hero_component")));case 2:(e=t.sent)&&f(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","header_component")));case 2:(e=t.sent)&&y(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","case_component")));case 2:(e=t.sent)&&O(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","imagewithtext_component")));case 2:(e=t.sent)&&P(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","footer_component")));case 2:(e=t.sent)&&R(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(d.query(m.a.Predicates.at("document.type","showcase")));case 2:(e=t.sent)&&J(e.results);case 4:case"end":return t.stop()}}))}()}),[]),k.length>0&&(e=k.map((function(e,t){return c.a.createElement(w,{key:e+t,caseData:e})}))),S.length>0&&(t=S.map((function(e,t){return c.a.createElement(g,{key:e+t,imageWithTextData:e})}))),I.length>0&&(a=I[0].data.showcase_title[0].text,r=I[0].data.container_background_color),c.a.createElement("div",{className:"main"},c.a.createElement(E,{headerData:x}),c.a.createElement(v,{heroData:u}),c.a.createElement("div",{className:"content-container"},c.a.createElement("div",{className:"showcase",style:{background:r}},c.a.createElement("h2",null,a),c.a.createElement("div",{className:"case-wrapper"},e)),t),c.a.createElement(b,{footerData:W}))});var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.b5e79965.chunk.js.map