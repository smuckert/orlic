(this.webpackJsonporlic=this.webpackJsonporlic||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=(a(17),a(2)),s=a.n(l),i=a(5),u=a(3),m=a.n(u),d=m.a.client("https://orlic.cdn.prismic.io/api/v2",{accessToken:"MC5YZmluWkJFQUFDSUFGQnE3.77-9bu-_ve-_ve-_ve-_ve-_vRzvv73vv70AETDvv713H--_vSzvv70T77-9GSfvv73vv71DEBvvv70hfO-_vQ"}),f=a(4),p=(a(20),function(e){var t,a,n,c,o=e.heroData,l=[],s="";return o.length>0&&(l=(t=o[0].data).hero_text,s=t.background_video.url,t.contact,a=t.text_color,n=t.contact[0].info,c=t.contact[1].info),r.a.createElement("div",{className:"hero"},r.a.createElement("video",{src:s,autoPlay:!0,muted:!0,playsInline:!0,loop:!0}),r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("div",{className:"text",style:{color:a}},f.RichText.render(l)),r.a.createElement("div",{className:"contact"},r.a.createElement("p",{className:"contact-item",style:{color:a}},n),r.a.createElement("a",{className:"contact-item",href:"mailto:".concat(c),style:{color:a}},r.a.createElement("p",null,c)))))}),v=a(7),h=a(9),E=(a(26),function(e){var t,a,n,c,o,l=e.headerData;return l.length>0&&(a=(t=l[0].data).logo.url,n=t.icon_color,c=t.links[0].link_item,o=t.links[1].link_item),r.a.createElement("div",{className:"header"},a&&r.a.createElement("img",{className:"logo",src:a,alt:"logo"}),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.a,{color:n,icon:h.b})),r.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.a,{color:n,icon:h.a}))))}),x=(a(27),function(e){var t=e.caseData,a=e.textColor,n=t.data,c=(n.case_title[0].text,n.media.url),o=n.link,l=n.case_text;return r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"case"},r.a.createElement("div",{className:"media-wrapper"},n.media.name.endsWith("mp4")?r.a.createElement("video",{src:c,autoPlay:!0,muted:!0,playsInline:!0,loop:!0}):r.a.createElement("img",{src:c,alt:"case"})),r.a.createElement("div",{className:"description",style:{color:a}},f.RichText.render(l)))}),_=(a(28),function(e){var t=e.imageWithTextData.data,a=t.background_color,n=t.text_color,c=t.image.url,o=t.title[0].text,l=t.description_text;return r.a.createElement("div",{className:"image-with-text",style:{background:a,color:n}},r.a.createElement("img",{src:c,alt:"showcase image",style:{boxShadow:window.innerWidth<=420?"5px 5px 0px 1px ".concat(n):"10px 11px 0px 1px ".concat(n)}}),r.a.createElement("div",{className:"headline-wrapper"},r.a.createElement("h2",null,o),f.RichText.render(l)))}),y=(a(29),function(e){var t,a,n,c,o,l,s,i,u,m=e.footerData;return m.length>0&&(a=(t=m[0].data).title[0].text,n=t.footer_content,o=t.background_color,l=t.text_color,i=t.footer_links[0].link_item,s=t.footer_links[1].link_item,u=t.footer_links[2].link_item,c=n.map((function(e,t){return r.a.createElement("div",{className:"column",key:e+t},f.RichText.render(e.text_column))}))),r.a.createElement("div",{className:"footer",style:{color:l,background:o}},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"column-wrapper"},c,r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Connect"),r.a.createElement("p",null,r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{color:l}},"Twitter")),r.a.createElement("p",null,r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",style:{color:l}},"Medium")),r.a.createElement("p",null,r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer",style:{color:l}},"LinkedIn")))))}),b=(a(30),function(){var e,t,a,c,o,l,u=Object(n.useState)([]),f=Object(i.a)(u,2),v=f[0],h=f[1],b=Object(n.useState)([]),g=Object(i.a)(b,2),k=g[0],w=g[1],N=Object(n.useState)([]),O=Object(i.a)(N,2),j=O[0],D=O[1],S=Object(n.useState)([]),T=Object(i.a)(S,2),P=T[0],W=T[1],q=Object(n.useState)([]),R=Object(i.a)(q,2),C=R[0],I=R[1],B=Object(n.useState)([]),F=Object(i.a)(B,2),J=F[0],Q=F[1];return Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","hero_component")));case 2:(e=t.sent)&&h(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","header_component")));case 2:(e=t.sent)&&w(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","case_component")));case 2:(e=t.sent)&&D(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","imagewithtext_component")));case 2:(e=t.sent)&&W(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","footer_component")));case 2:(e=t.sent)&&I(e.results);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(d.query(m.a.Predicates.at("document.type","showcase")));case 2:(e=t.sent)&&Q(e.results);case 4:case"end":return t.stop()}}))}()}),[]),J.length>0&&(a=J[0].data.showcase_title[0].text,c=J[0].data.container_background_color,o=J[0].data.text_color,l=J[0].data.hide),j.length>0&&(e=j.map((function(e,t){return r.a.createElement(x,{key:e+t,caseData:e,textColor:o||void 0})}))),P.length>0&&(t=P.map((function(e,t){return r.a.createElement(_,{key:e+t,imageWithTextData:e})}))),r.a.createElement("div",{className:"main"},r.a.createElement(E,{headerData:k}),r.a.createElement(p,{heroData:v}),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"showcase",style:{display:"".concat("true"===l?"none":"block"),background:c,color:o}},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"case-wrapper"},e)),t),r.a.createElement(y,{footerData:C}))});var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ac5ad8cd.chunk.js.map