(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[758],{8758:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return we}});var i=t(9439),r=t(5048),a=t(6873),o=t(5831),s=t(4207),l=t(184),d=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{styles:{"[data-feather], .feather":{color:"var(--Icon-color)",margin:"var(--Icon-margin)",fontSize:"var(--Icon-fontSize, 20px)",width:"1em",height:"1em"}}}),(0,l.jsx)(s.Z,{})]})},c=t(6263),x=t(4947),m=t(9525),u=t(5985),h=(t(5462),t(2791)),f=t(1933),p=t(4308),Z=t(4942),j=t(2054),v=t(6488),g=t(7541),y=t(9345),b=t(7029),w=t(7310),C=t(1989),I=t(4013),S=t(1983),k=t(3917),P=t(9832),N=t(3168),z=t(661),L=t(7171),F=t.n(L),H=t(3433),E=t(1413),O=t(5987),W=t(838),q=t(4773),A=["onClick","sx"];function D(e){var n=e.onClick,t=e.sx,r=(0,O.Z)(e,A),o=(0,a.tv)(),s=o.mode,d=o.setMode,c=h.useState(!1),x=(0,i.Z)(c,2),m=x[0],u=x[1];return h.useEffect((function(){u(!0)}),[]),m?(0,l.jsxs)(w.ZP,(0,E.Z)((0,E.Z)({id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral"},r),{},{onClick:function(e){d("light"===s?"dark":"light"),null===n||void 0===n||n(e)},sx:[{ml:"auto","& > *:first-of-type":{display:"dark"===s?"none":"initial"},"& > *:last-of-type":{display:"light"===s?"none":"initial"}}].concat((0,H.Z)(Array.isArray(t)?t:[t])),children:[(0,l.jsx)(W.Z,{}),(0,l.jsx)(q.Z,{})]})):(0,l.jsx)(w.ZP,(0,E.Z)((0,E.Z)({size:"sm",variant:"outlined",color:"neutral"},r),{},{sx:t,disabled:!0}))}var M=(0,j.Z)("i")((function(e){return{color:e.theme.vars.palette.text.tertiary}}));function T(e){var n=e.name,t=e.email,i=e.onClose,r=e.onClick;return(0,l.jsx)(a.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:F(),children:(0,l.jsxs)(z.Z,{className:"Sidebar",sx:{position:{xs:"fixed",md:"sticky"},transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",md:"none"},transition:"transform 0.4s, width 0.4s",zIndex:1e4,height:"100dvh",width:"var(--Sidebar-width)",top:0,p:1.5,py:3,flexShrink:0,display:"flex",flexDirection:"column",gap:2,borderRight:"1px solid",borderColor:"divider"},children:[(0,l.jsx)(o.Z,{styles:function(e){return{":root":(0,Z.Z)({"--Sidebar-width":"224px"},e.breakpoints.up("lg"),{"--Sidebar-width":"256px"})}}}),(0,l.jsx)(c.Z,{className:"Sidebar-overlay",sx:{position:"fixed",zIndex:9998,top:0,left:0,width:"100vw",height:"100vh",bgcolor:"background.body",opacity:"calc(var(--SideNavigation-slideIn, 0) - 0.2)",transition:"opacity 0.4s",transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",lg:"translateX(-100%)"}},onClick:function(){return i()}}),(0,l.jsxs)(c.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,l.jsx)(N.ZP,{fontWeight:"xl",children:"PHONEBOOK"}),(0,l.jsx)(D,{})]}),(0,l.jsx)(c.Z,{sx:{minHeight:0,overflow:"hidden auto",flexGrow:1,display:"flex",flexDirection:"column"},children:(0,l.jsx)(C.Z,{sx:{"--ListItem-radius":"8px","--List-gap":"4px","--List-nestedInsetStart":"40px"},children:(0,l.jsx)(I.Z,{children:(0,l.jsxs)(S.Z,{color:"primary",selected:!0,variant:"soft",children:[(0,l.jsx)(P.Z,{children:(0,l.jsx)(g.Z,{})}),(0,l.jsx)(k.Z,{to:"/",children:"Home"}),(0,l.jsx)(M,{"data-feather":"chevron-down"})]})})})}),(0,l.jsx)(b.Z,{}),(0,l.jsxs)(c.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,l.jsx)(y.Z,{variant:"outlined",src:"/static/images/avatar/3.jpg"}),(0,l.jsxs)(c.Z,{sx:{minWidth:0,flex:1},children:[(0,l.jsx)(N.ZP,{fontSize:"sm",fontWeight:"lg",children:n}),(0,l.jsx)(N.ZP,{level:"body3",children:t})]}),(0,l.jsx)(w.ZP,{variant:"plain",color:"neutral",onClick:r,children:(0,l.jsx)(v.Z,{})})]})]})})}var X=function(){"undefined"!==typeof document&&(document.documentElement.style.removeProperty("--SideNavigation-slideIn"),document.body.style.removeProperty("overflow"))},_=function(){"undefined"!==typeof window&&"undefined"!==typeof document&&(window.getComputedStyle(document.documentElement).getPropertyValue("--SideNavigation-slideIn")?X():"undefined"!==typeof document&&(document.body.style.overflow="hidden",document.documentElement.style.setProperty("--SideNavigation-slideIn","1")))};function K(){var e=(0,r.I0)(),n=(0,r.v9)(p.EA);return(0,l.jsx)(T,{name:n.name,email:n.email,onClose:X,onClick:function(){return e((0,f.ni)())}})}var R=t(8008);function V(){return(0,l.jsx)(a.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:F(),children:(0,l.jsxs)(z.Z,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",position:"fixed",top:0,width:"100vw",height:"var(--Header-height)",zIndex:9995,py:1,px:2,gap:1,boxShadow:"sm"},children:[(0,l.jsx)(o.Z,{styles:function(e){return{":root":(0,Z.Z)({"--Header-height":"52px"},e.breakpoints.up("md"),{"--Header-height":"0px"})}}}),(0,l.jsx)(w.ZP,{onClick:function(){return _()},variant:"outlined",color:"neutral",size:"sm",children:(0,l.jsx)(R.Z,{})}),(0,l.jsx)(D,{sx:{ml:"30px"}})]})})}var Y,B,G,Q,J,U,$,ee,ne=function(e){var n=e.children;return(0,l.jsx)(c.Z,{component:"main",className:"MainContent",sx:function(e){return{px:{xs:2,md:6},pt:{xs:"calc(".concat(e.spacing(2)," + var(--Header-height))"),sm:"calc(".concat(e.spacing(2)," + var(--Header-height))"),md:3},pb:{xs:2,sm:2,md:3},flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100dvh",gap:1}},children:n})},te=t(1134),ie=t(7230),re=t(788),ae=t(5403),oe=t(168),se=t(7691),le=se.ZP.form(Y||(Y=(0,oe.Z)(["\n  display: flex;\n  width: 100%;\n  margin-top: 30px;\n"]))),de=se.ZP.div(B||(B=(0,oe.Z)(["\n  width: 500px;\n"]))),ce=function(e){var n=e.onChange,t=(0,te.cI)().control,i=(0,te.qo)({control:t,name:"filter",defaultValue:""});return(0,l.jsx)(le,{children:(0,l.jsxs)(de,{children:[(0,l.jsx)(ie.Z,{htmlFor:"filter",children:"Find contacts by name:"}),(0,l.jsx)(te.Qr,{control:t,name:"filter",value:i,render:function(e){var t=e.field;return(0,l.jsx)(re.ZP,{startDecorator:(0,l.jsx)(ae.Z,{}),type:"text",id:"filter",value:t.value,onChange:n,sx:{width:"100%"}})}})]})})},xe=t(4695),me=t(6727),ue=t(5156),he=t(9073),fe=(0,se.F4)(G||(G=(0,oe.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),pe=se.ZP.form(Q||(Q=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 24px;\n"]))),Ze=(0,se.ZP)(N.ZP)(J||(J=(0,oe.Z)(["\n  position: absolute;\n  color: red;\n  animation: "," 500ms ease-in-out;\n"])),fe),je=me.Ry().shape({name:me.Z_().required("Name is required!"),number:me.Z_().required("Number is required!").min(7,"Number must be at least 7 digits").max(16,"Number must not exceed 16 digits")}),ve=function(e){var n,t,i=e.addContact,r=(0,te.cI)({resolver:(0,xe.X)(je)}),a=r.register,o=r.handleSubmit,s=r.reset,d=r.formState.errors;return(0,l.jsxs)(pe,{onSubmit:o((function(e,n){i(e.name,e.number),s()})),children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(ie.Z,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(re.ZP,(0,E.Z)((0,E.Z)({type:"text",id:"name"},a("name")),{},{error:d.name})),d.name&&(0,l.jsx)(Ze,{color:"danger",fontSize:"sm",children:null===(n=d.name)||void 0===n?void 0:n.message})]}),(0,l.jsxs)("div",{sx:{display:"flex"},children:[(0,l.jsx)(ie.Z,{htmlFor:"number",children:"Number:"}),(0,l.jsx)(re.ZP,(0,E.Z)((0,E.Z)({type:"tel",id:"number"},a("number")),{},{error:d.number})),d.number&&(0,l.jsx)(Ze,{color:"danger",fontSize:"sm",children:null===(t=d.number)||void 0===t?void 0:t.message})]}),(0,l.jsxs)(ue.Z,{type:"submit",sx:{height:"40px",mt:"auto"},children:[(0,l.jsx)(he.Z,{sx:{mr:"5px"}})," Add contact"]})]})},ge=function(e){var n=e.el,t=(0,x.Nt)(),r=(0,i.Z)(t,2),a=r[0],o=r[1],s=(0,H.Z)(n.name);return(0,l.jsxs)(I.Z,{sx:{maxWidth:"500px"},children:[(0,l.jsx)(y.Z,{children:s[0]}),(0,l.jsxs)(N.ZP,{component:"p",sx:{ml:"8px"},children:[n.name,": ",n.number]}),(0,l.jsx)(ue.Z,{color:"danger",type:"button",disabled:o.isLoading,onClick:function(){return a(n.id)},sx:{ml:"auto"},children:"Delete"})]})},ye=function(e){var n=e.options;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(C.Z,{children:n.map((function(e){return(0,l.jsx)(ge,{el:e},e.id)}))})})},be=(se.ZP.div(U||(U=(0,oe.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),se.ZP.h1($||($=(0,oe.Z)(["\n  margin-right: 20px;\n"])))),we=(se.ZP.h2(ee||(ee=(0,oe.Z)(["\n  margin-right: 90px;\n"]))),function(){var e=(0,x.wY)().data,n=(0,x.Tn)(),t=(0,i.Z)(n,1)[0],o=(0,r.v9)(m.zK),s=(0,r.I0)(),h=null!==e&&void 0!==e?e:[],f=h.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return(0,l.jsxs)(a.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:F(),children:[(0,l.jsx)(d,{}),(0,l.jsxs)(c.Z,{sx:{display:"flex",height:"100dvh"},children:[(0,l.jsx)(K,{}),(0,l.jsx)(V,{}),(0,l.jsxs)(ne,{children:[(0,l.jsx)(be,{children:"Contacts"}),(0,l.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"flex-end"},children:[(0,l.jsx)(ve,{addContact:function(e,n){if(h.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return u.Am.error("".concat(e," is already in contacts."));t({name:e,number:n})}}),(0,l.jsx)(ce,{onChange:function(e){s((0,m.hX)(e.target.value))}})]}),0===h.length?(0,l.jsx)("p",{children:"You don't have contacts yet"}):(0,l.jsx)(ye,{options:f})]})]}),(0,l.jsx)(u.Ix,{theme:"colored"})]})})},7171:function(e,n,t){var i=(0,t(3023).extendTheme)({fontFamily:{display:"'Inter', var(--joy-fontFamily-fallback)",body:"'Inter', var(--joy-fontFamily-fallback)"}});e.exports=i}}]);
//# sourceMappingURL=758.69b0ccd4.chunk.js.map