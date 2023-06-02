"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[189],{2189:function(e,n,t){t.r(n),t.d(n,{default:function(){return we}});var i=t(9439),r=t(2791),o=t(5048),a=t(6263),s=t(3168),l=t(4947),d=t(9525),c=t(5985),x=(t(5462),t(1933)),u=t(4308),m=t(4942),h=t(2054),p=t(6873),f=t(6488),g=t(7541),v=t(5831),Z=t(9345),j=t(7029),b=t(7310),y=t(1989),w=t(4013),k=t(1983),C=t(3917),S=t(9832),P=t(661),I=t(7171),N=t.n(I),L=t(3433),z=t(1413),T=t(5987),D=t(838),F=t(4773),H=t(184),E=["onClick","sx"];function W(e){var n=e.onClick,t=e.sx,o=(0,T.Z)(e,E),a=(0,p.tv)(),s=a.mode,l=a.setMode,d=r.useState(!1),c=(0,i.Z)(d,2),x=c[0],u=c[1];return r.useEffect((function(){u(!0)}),[]),x?(0,H.jsxs)(b.ZP,(0,z.Z)((0,z.Z)({id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral"},o),{},{onClick:function(e){l("light"===s?"dark":"light"),null===n||void 0===n||n(e)},sx:[{ml:"auto","& > *:first-of-type":{display:"dark"===s?"none":"initial"},"& > *:last-of-type":{display:"light"===s?"none":"initial"}}].concat((0,L.Z)(Array.isArray(t)?t:[t])),children:[(0,H.jsx)(D.Z,{}),(0,H.jsx)(F.Z,{})]})):(0,H.jsx)(b.ZP,(0,z.Z)((0,z.Z)({size:"sm",variant:"outlined",color:"neutral"},o),{},{sx:t,disabled:!0}))}var O=(0,h.Z)("i")((function(e){return{color:e.theme.vars.palette.text.tertiary}}));function q(e){var n=e.name,t=e.email,i=e.onClose,r=e.onClick;return(0,H.jsx)(p.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:N(),children:(0,H.jsxs)(P.Z,{className:"Sidebar",sx:{position:{xs:"fixed",md:"sticky"},transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",md:"none"},transition:"transform 0.4s, width 0.4s",zIndex:1e4,height:"100dvh",width:"var(--Sidebar-width)",top:0,p:1.5,py:3,flexShrink:0,display:"flex",flexDirection:"column",gap:2,borderRight:"1px solid",borderColor:"divider"},children:[(0,H.jsx)(v.Z,{styles:function(e){return{":root":(0,m.Z)({"--Sidebar-width":"224px"},e.breakpoints.up("lg"),{"--Sidebar-width":"256px"})}}}),(0,H.jsx)(a.Z,{className:"Sidebar-overlay",sx:{position:"fixed",zIndex:9998,top:0,left:0,width:"100vw",height:"100vh",bgcolor:"background.body",opacity:"calc(var(--SideNavigation-slideIn, 0) - 0.2)",transition:"opacity 0.4s",transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",lg:"translateX(-100%)"}},onClick:function(){return i()}}),(0,H.jsxs)(a.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,H.jsx)(s.ZP,{fontWeight:"xl",children:"PHONEBOOK"}),(0,H.jsx)(W,{})]}),(0,H.jsx)(a.Z,{sx:{minHeight:0,overflow:"hidden auto",flexGrow:1,display:"flex",flexDirection:"column"},children:(0,H.jsx)(y.Z,{sx:{"--ListItem-radius":"8px","--List-gap":"4px","--List-nestedInsetStart":"40px"},children:(0,H.jsx)(w.Z,{children:(0,H.jsxs)(k.Z,{color:"primary",selected:!0,variant:"soft",children:[(0,H.jsx)(S.Z,{children:(0,H.jsx)(g.Z,{})}),(0,H.jsx)(C.Z,{to:"/",children:"Home"}),(0,H.jsx)(O,{"data-feather":"chevron-down"})]})})})}),(0,H.jsx)(j.Z,{}),(0,H.jsxs)(a.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,H.jsx)(Z.Z,{variant:"outlined",src:"/static/images/avatar/3.jpg"}),(0,H.jsxs)(a.Z,{sx:{minWidth:0,flex:1},children:[(0,H.jsx)(s.ZP,{fontSize:"sm",fontWeight:"lg",children:n}),(0,H.jsx)(s.ZP,{level:"body3",children:t})]}),(0,H.jsx)(b.ZP,{variant:"plain",color:"neutral",onClick:r,children:(0,H.jsx)(f.Z,{})})]})]})})}var A=function(){"undefined"!==typeof document&&(document.documentElement.style.removeProperty("--SideNavigation-slideIn"),document.body.style.removeProperty("overflow"))},M=function(){"undefined"!==typeof window&&"undefined"!==typeof document&&(window.getComputedStyle(document.documentElement).getPropertyValue("--SideNavigation-slideIn")?A():"undefined"!==typeof document&&(document.body.style.overflow="hidden",document.documentElement.style.setProperty("--SideNavigation-slideIn","1")))};function X(){var e=(0,o.I0)(),n=(0,o.v9)(u.EA);return(0,H.jsx)(q,{name:n.name,email:n.email,onClose:A,onClick:function(){e((0,x.ni)())}})}var _=t(8008);function R(){return(0,H.jsx)(p.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:N(),children:(0,H.jsxs)(P.Z,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",position:"fixed",top:0,width:"100vw",height:"var(--Header-height)",zIndex:9995,py:1,px:2,gap:1,boxShadow:"sm"},children:[(0,H.jsx)(v.Z,{styles:function(e){return{":root":(0,m.Z)({"--Header-height":"52px"},e.breakpoints.up("md"),{"--Header-height":"0px"})}}}),(0,H.jsx)(b.ZP,{onClick:function(){return M()},variant:"outlined",color:"neutral",size:"sm",children:(0,H.jsx)(_.Z,{})}),(0,H.jsx)(W,{sx:{ml:"30px"}})]})})}var B,K,V,Y,G,Q,J=t(4207),U=t(4584),$=t(1252),ee=function(e){var n=e.children;return(0,H.jsxs)(p.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:N(),children:[(0,H.jsx)(J.Z,{}),(0,H.jsx)(v.Z,{styles:{":root":{"--Collapsed-breakpoint":"769px","--Cover-width":"50vw","--Transition-duration":"0.4s"}}}),(0,H.jsx)(a.Z,{sx:function(e){return(0,m.Z)({width:"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",transition:"width var(--Transition-duration)",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",position:"relative",zIndex:1,display:"flex",justifyContent:"flex-end",backdropFilter:"blur(6px)",backgroundColor:"rgba(255 255 255 / 0.6)"},e.getColorSchemeSelector("dark"),{backgroundColor:"rgba(19 19 24 / 0.4)"})},children:(0,H.jsx)(a.Z,{component:"main",className:"MainContent",sx:{display:"flex",flexDirection:"column",width:400,height:"100dvh",maxWidth:"100%",minWidth:0,px:{xs:2,md:6},pt:{xs:"calc(".concat(N().spacing(2)," + var(--Header-height))"),sm:"calc(".concat(N().spacing(2)," + var(--Header-height))"),md:3},pb:{xs:2,sm:2,md:3},flex:1,gap:1},children:n})}),(0,H.jsx)(a.Z,{sx:function(e){return(0,m.Z)({height:"100%",position:"fixed",right:0,top:0,bottom:0,left:"clamp(0px, (50vw - var(--Collapsed-breakpoint)) * 999, 50vw - var(--Cover-width))",transition:"background-image var(--Transition-duration), left var(--Transition-duration) !important",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",backgroundColor:"background.level1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(U,")")},e.getColorSchemeSelector("dark"),{backgroundImage:"url(".concat($,")")})}})]})},ne=t(1134),te=t(7230),ie=t(788),re=t(5403),oe=t(168),ae=t(7691),se=ae.ZP.form(B||(B=(0,oe.Z)(["\n  display: flex;\n  width: 100%;\n  margin-top: 30px;\n"]))),le=ae.ZP.div(K||(K=(0,oe.Z)(["\n  width: 500px;\n"]))),de=function(e){var n=e.onChange,t=(0,ne.cI)().control,i=(0,ne.qo)({control:t,name:"filter",defaultValue:""});return(0,H.jsx)(se,{children:(0,H.jsxs)(le,{children:[(0,H.jsx)(te.Z,{htmlFor:"filter",children:"Find contacts by name:"}),(0,H.jsx)(ne.Qr,{control:t,name:"filter",value:i,render:function(e){var t=e.field;return(0,H.jsx)(ie.ZP,{startDecorator:(0,H.jsx)(re.Z,{}),type:"text",id:"filter",value:t.value,onChange:n,sx:{width:"100%"}})}})]})})},ce=t(4695),xe=t(6727),ue=t(9275),me=t(9073),he=(0,ae.F4)(V||(V=(0,oe.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),pe=ae.ZP.form(Y||(Y=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 24px;\n"]))),fe=(0,ae.ZP)(s.ZP)(G||(G=(0,oe.Z)(["\n  position: absolute;\n  color: red;\n  animation: "," 500ms ease-in-out;\n"])),he),ge=xe.Ry().shape({name:xe.Z_().required("Name is required!"),number:xe.Z_().required("Number is required!").min(7,"Number must be at least 7 digits").max(16,"Number must not exceed 16 digits")}),ve=function(e){var n,t,i=e.addContact,r=e.isLoading,o=(0,ne.cI)({resolver:(0,ce.X)(ge)}),a=o.register,s=o.handleSubmit,l=o.reset,d=o.formState.errors;return(0,H.jsxs)(pe,{onSubmit:s((function(e,n){i(e.name,e.number),l()})),children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(te.Z,{htmlFor:"name",children:"Name:"}),(0,H.jsx)(ie.ZP,(0,z.Z)((0,z.Z)({type:"text",id:"name"},a("name")),{},{error:d.name})),d.name&&(0,H.jsx)(fe,{color:"danger",fontSize:"sm",children:null===(n=d.name)||void 0===n?void 0:n.message})]}),(0,H.jsxs)("div",{sx:{display:"flex"},children:[(0,H.jsx)(te.Z,{htmlFor:"number",children:"Number:"}),(0,H.jsx)(ie.ZP,(0,z.Z)((0,z.Z)({type:"tel",id:"number"},a("number")),{},{error:d.number})),d.number&&(0,H.jsx)(fe,{color:"danger",fontSize:"sm",children:null===(t=d.number)||void 0===t?void 0:t.message})]}),(0,H.jsxs)(ue.Z,{type:"submit",loading:r,loadingPosition:"end",sx:{height:"40px",mt:"auto"},children:[(0,H.jsx)(me.Z,{sx:{mr:"5px"}})," Add contact"]})]})},Ze=function(){return(0,H.jsx)(a.Z,{sx:{position:"absolute",bottom:"0",left:"5%",borderBottom:"1px solid black",width:"90%",margin:"0 auto"}})},je=function(e){var n=e.el,t=(0,l.Nt)(),r=(0,i.Z)(t,2),o=r[0],d=r[1],c=(0,L.Z)(n.name);return(0,H.jsxs)(w.Z,{sx:{maxWidth:"500px"},children:[(0,H.jsx)(Z.Z,{children:c[0]}),(0,H.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,H.jsx)(s.ZP,{component:"p",sx:{ml:"8px"},children:n.name}),(0,H.jsxs)(s.ZP,{component:"p",level:"body2",sx:{ml:"8px"},children:["Phone: ",n.number]})]}),(0,H.jsx)(ue.Z,{color:"danger",type:"button",loading:d.isLoading,onClick:function(){return o(n.id)},sx:{ml:"auto"},children:"Delete"}),(0,H.jsx)(Ze,{})]})},be=(0,ae.ZP)(y.Z)(Q||(Q=(0,oe.Z)(["\n  height: 600px;\n  max-width: 500px;\n\n  overflow: auto;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),ye=function(e){var n=e.options;return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(be,{children:n.map((function(e){return(0,H.jsx)(je,{el:e},e.id)}))})})},we=function(){var e=(0,l.wY)(),n=e.data,t=void 0===n?[]:n,x=e.refetch,u=(0,l.Tn)(),m=(0,i.Z)(u,2),h=m[0],p=m[1],f=(0,o.v9)(d.zK),g=(0,o.I0)();(0,r.useEffect)((function(){x()}),[x]);var v=t.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(a.Z,{sx:{display:"flex",height:"100dvh"},children:[(0,H.jsx)(X,{}),(0,H.jsx)(R,{}),(0,H.jsxs)(ee,{children:[(0,H.jsx)(s.ZP,{component:"h1",level:"h1",sx:{mb:"0"},children:"Contacts"}),(0,H.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"flex-end"},children:[(0,H.jsx)(ve,{addContact:function(e,n){if(t.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return c.Am.error("".concat(e," is already in contacts."));h({name:e,number:n})},isLoading:p.isLoading}),(0,H.jsx)(de,{onChange:function(e){g((0,d.hX)(e.target.value))}})]}),0===t.length?(0,H.jsx)("p",{children:"You don't have contacts yet"}):(0,H.jsx)(ye,{options:v})]})]}),(0,H.jsx)(c.Ix,{theme:"colored"})]})}},1252:function(e,n,t){e.exports=t.p+"static/media/dark.bc67f3bc576dc2377f25.jpg"},4584:function(e,n,t){e.exports=t.p+"static/media/light.8a0f11c3d6bd5f9fc872.jpg"}}]);
//# sourceMappingURL=189.b88413f4.chunk.js.map