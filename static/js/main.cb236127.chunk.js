(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),o=n.n(a),i=(n(13),n(2)),s=n(4),j=n(8),u=n(6),b=n.n(u),d=n(0);function l(e){var t=e.options,n=e.leaveFeedback;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("button",{className:b.a.Button,type:"button",onClick:function(){return n(e)},children:e},e)}))})}function x(e){var t=e.item,n=e.text;return Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[n,":"," ",Object(d.jsxs)("span",{children:[t,"positivePercentage"===n&&"%"]})]})})}function O(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return console.log(t,n,c,r,a),Object(d.jsxs)("ul",{children:[Object(d.jsx)(x,{text:"good",item:t},"good"),Object(d.jsx)(x,{text:"neutral",item:n},"neutral"),Object(d.jsx)(x,{text:"bad",item:c},"bad"),Object(d.jsx)(x,{text:"total",item:r},"total"),Object(d.jsx)(x,{text:"positivePercentage",item:a},"positivePercentage")]})}x.defaultProps={item:0};var g=n(7),h=n.n(g),f=function(e){var t=e.children;return Object(d.jsx)("div",{className:h.a.Container,children:t})};function v(e){var t=e.title,n=e.children;return Object(d.jsx)("section",{children:Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:t}),n]})})}var p=function(e){var t=e.message;return Object(d.jsx)("p",{children:t})};p.defaultProps={message:"have not any message"};var m=function(e){var t=e.good,n=e.neutral,c=e.bad;return Math.round(100/(t+n+c)*t)};function k(){var e,t=Object(c.useRef)(!1),n=Object(c.useState)({good:0,neutral:0,bad:0}),r=Object(j.a)(n,2),a=r[0],o=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{title:"Please leave feedback",children:Object(d.jsx)(l,{options:["good","neutral","bad"],leaveFeedback:function(e){t.current=!0,o((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,t[e]+1))}))}})}),Object(d.jsx)(v,{title:"Statistics",children:t.current?Object(d.jsx)(O,{good:a.good,neutral:a.neutral,bad:a.bad,total:(e=a,e.good+e.neutral+e.bad),positivePercentage:m(a)}):Object(d.jsx)(p,{message:"No feedback given"})})]})}o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={Button:"FeedbackOptions_Button__5eEyV"}},7:function(e,t,n){e.exports={Container:"Container_Container__iF80E"}}},[[15,1,2]]]);
//# sourceMappingURL=main.cb236127.chunk.js.map