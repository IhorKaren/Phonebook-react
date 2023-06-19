"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[630],{7652:function(e,o,r){r.r(o),r.d(o,{default:function(){return G}});var n=r(1413),t=r(2791),a=r(5048),i=r(1087),l=r(4695),s=r(6727),c=r(1134),d=r(4308),u=r(1933),m=r(354),p=r(5985),v=(r(5462),r(9275)),x=r(7230),h=r(8625),f=r(788),g=r(3168),Z=r(4942),b=r(9439),y=r(5987),j=r(6873),w=r(5831),k=r(4207),D=r(6263),C=r(7310),P=r(2671),S=r(2746),z=r(1912),I=r(7171),F=r.n(I),R=r.p+"static/media/light2.2ffcec3248dda89d13a1.jpg",L=r.p+"static/media/dark2.1d9e56ecaa629f6af5b6.jpg",T=r(184),M=["onClick"];function B(e){var o=e.onClick,r=(0,y.Z)(e,M),a=(0,j.tv)(),i=a.mode,l=a.setMode,s=t.useState(!1),c=(0,b.Z)(s,2),d=c[0],u=c[1];return t.useEffect((function(){u(!0)}),[]),d?(0,T.jsx)(C.ZP,(0,n.Z)((0,n.Z)({id:"toggle-mode",size:"sm",variant:"plain",color:"neutral"},r),{},{onClick:function(e){l("light"===i?"dark":"light"),null===o||void 0===o||o(e)},children:"light"===i?(0,T.jsx)(S.Z,{}):(0,T.jsx)(z.Z,{})})):(0,T.jsx)(C.ZP,{size:"sm",variant:"plain",color:"neutral",disabled:!0})}function W(e){var o=e.children;return(0,T.jsxs)(j.lL,{defaultMode:"dark",disableTransitionOnChange:!0,theme:F(),children:[(0,T.jsx)(k.Z,{}),(0,T.jsx)(w.Z,{styles:{":root":{"--Collapsed-breakpoint":"769px","--Cover-width":"40vw","--Form-maxWidth":"700px","--Transition-duration":"0.4s"}}}),(0,T.jsx)(D.Z,{sx:function(e){return(0,Z.Z)({width:"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",transition:"width var(--Transition-duration)",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",position:"relative",zIndex:1,display:"flex",justifyContent:"flex-end",backdropFilter:"blur(4px)",backgroundColor:"rgba(255 255 255 / 0.6)"},e.getColorSchemeSelector("dark"),{backgroundColor:"rgba(19 19 24 / 0.4)"})},children:(0,T.jsxs)(D.Z,{sx:{display:"flex",flexDirection:"column",minHeight:"100dvh",width:"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",maxWidth:"100%",px:2},children:[(0,T.jsxs)(D.Z,{component:"header",sx:{py:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,T.jsx)(g.ZP,{fontWeight:"lg",startDecorator:(0,T.jsx)(D.Z,{component:"span",sx:{width:24,height:24,background:function(e){return"linear-gradient(45deg, ".concat(e.vars.palette.primary.solidBg,", ").concat(e.vars.palette.primary.solidBg," 30%, ").concat(e.vars.palette.primary.softBg,")")},borderRadius:"50%",boxShadow:function(e){return e.shadow.md},"--joy-shadowChannel":function(e){return e.vars.palette.primary.mainChannel}}}),children:"Phonebook"}),(0,T.jsx)(B,{})]}),(0,T.jsxs)(D.Z,{component:"main",sx:(0,Z.Z)({my:"auto",py:2,pb:5,display:"flex",flexDirection:"column",gap:2,width:400,maxWidth:"100%",mx:"auto",borderRadius:"sm","& form":{display:"flex",flexDirection:"column",gap:2}},"& .".concat(P.Z.asterisk),{visibility:"hidden"}),children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(g.ZP,{component:"h2",fontSize:"xl2",fontWeight:"lg",children:"Welcome!"}),(0,T.jsx)(g.ZP,{level:"body2",sx:{my:1,mb:3},children:"Let's get started! Please enter your details."})]}),o]}),(0,T.jsx)(D.Z,{component:"footer",sx:{py:3},children:(0,T.jsxs)(g.ZP,{level:"body3",textAlign:"center",children:["\xa9 Ihor Karen ",(new Date).getFullYear()]})})]})}),(0,T.jsx)(D.Z,{sx:function(e){return(0,Z.Z)({height:"100%",position:"fixed",right:0,top:0,bottom:0,left:"clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",transition:"background-image var(--Transition-duration), left var(--Transition-duration) !important",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",backgroundColor:"background.level1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(R,")")},e.getColorSchemeSelector("dark"),{backgroundImage:"url(".concat(L,")")})}})]})}var A,V,q,E=r(168),N=r(7691),_=(0,N.F4)(A||(A=(0,E.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),H=N.ZP.div(V||(V=(0,E.Z)(["\n  position: relative;\n  padding: 5px;\n"]))),J=(0,N.ZP)(g.ZP)(q||(q=(0,E.Z)(["\n  position: absolute;\n  bottom: -15px;\n  animation: "," 0.5s ease-in;\n"])),_),O=s.Ry().shape({name:s.Z_().required("Name is required!"),email:s.Z_().required("Email is required!"),password:s.Z_().required("Password is required!").min(5,"Password must be at least 5 digits").max(12,"Password must not exceed 12 digits")}),G=function(){var e,o,r,s=(0,a.I0)(),Z=(0,a.v9)(d.wq),b=(0,a.v9)(d.hg);(0,t.useEffect)((function(){Z&&(p.Am.error("Error, please try again."),s((0,m.f)()))}),[Z,s]);var y=(0,c.cI)({resolver:(0,l.X)(O)}),j=y.register,w=y.handleSubmit,k=y.reset,D=y.formState.errors;return(0,T.jsxs)(W,{children:[(0,T.jsxs)("form",{onSubmit:w((function(e,o){var r={name:e.name,email:e.email,password:e.password};s((0,u.a$)(r)),k()})),children:[(0,T.jsxs)(H,{children:[(0,T.jsx)(x.Z,{htmlFor:"name",children:"Name:"}),(0,T.jsx)(f.ZP,(0,n.Z)((0,n.Z)({type:"text",id:"name"},j("name")),{},{error:Boolean(D.name)})),D.name&&(0,T.jsx)(J,{color:"danger",fontSize:"sm",children:null===(e=D.name)||void 0===e?void 0:e.message})]}),(0,T.jsxs)(H,{children:[(0,T.jsx)(x.Z,{htmlFor:"email",children:"Email:"}),(0,T.jsx)(f.ZP,(0,n.Z)((0,n.Z)({type:"email",id:"email"},j("email")),{},{error:Boolean(D.email)})),D.email&&(0,T.jsx)(J,{color:"danger",fontSize:"sm",children:null===(o=D.email)||void 0===o?void 0:o.message})]}),(0,T.jsxs)(H,{children:[(0,T.jsx)(x.Z,{htmlFor:"password",children:"Password:"}),(0,T.jsx)(f.ZP,(0,n.Z)((0,n.Z)({type:"password",id:"password"},j("password")),{},{error:Boolean(D.password)})),D.password&&(0,T.jsx)(J,{color:"danger",fontSize:"sm",children:null===(r=D.password)||void 0===r?void 0:r.message})]}),(0,T.jsx)(v.Z,{type:"submit",loading:b,loadingPosition:"end",sx:{marginTop:"10px"},children:"Register"}),(0,T.jsxs)(g.ZP,{fontSize:"md",children:["Are you already registered?",(0,T.jsx)(h.Z,{component:i.rU,to:"/login",sx:{marginLeft:"5px"},children:"Go to login page."})]})]}),(0,T.jsx)(p.Ix,{theme:"colored",position:"top-left"})]})}},2746:function(e,o,r){var n=r(4836);o.Z=void 0;var t=n(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M11.01 3.05C6.51 3.54 3 7.36 3 12c0 4.97 4.03 9 9 9 4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95-.84.54-1.84.85-2.91.85-2.98 0-5.4-2.42-5.4-5.4 0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z"}),"DarkModeRounded");o.Z=i},1912:function(e,o,r){var n=r(4836);o.Z=void 0;var t=n(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightModeRounded");o.Z=i},8625:function(e,o,r){r.d(o,{Z:function(){return P}});var n=r(9439),t=r(4942),a=r(3366),i=r(7462),l=r(2791),s=r(4419),c=r(7312),d=r(5372),u=r(7563),m=r(8519),p=r(2054),v=r(5051),x=r(8313),h=r(5714),f=r(7637);function g(e){return(0,f.d6)("MuiLink",e)}var Z=(0,f.sI)("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","h5","h6","body1","body2","body3","startDecorator","endDecorator"]),b=r(3168),y=r(184),j=["color","textColor","variant"],w=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],k=(0,p.Z)("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:function(e,o){return o.startDecorator}})((function(e){var o,r=e.ownerState;return(0,i.Z)({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},"string"!==typeof r.startDecorator&&("flex-start"===r.alignItems||"flex-start"===(null==(o=r.sx)?void 0:o.alignItems))&&{marginTop:"2px"})})),D=(0,p.Z)("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:function(e,o){return o.endDecorator}})((function(e){var o,r=e.ownerState;return(0,i.Z)({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},"string"!==typeof r.startDecorator&&("flex-start"===r.alignItems||"flex-start"===(null==(o=r.sx)?void 0:o.alignItems))&&{marginTop:"2px"})})),C=(0,p.Z)("a",{name:"JoyLink",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(e){var o,r,n,a,l,s,c,d=e.theme,u=e.ownerState;return[(0,i.Z)({"--Icon-fontSize":"1.25em"},u.level&&"inherit"!==u.level&&d.typography[u.level],"inherit"===u.level&&{fontSize:"inherit",fontFamily:"inherit",lineHeight:"inherit"},"none"===u.underline&&{textDecoration:"none"},"hover"===u.underline&&{textDecoration:"none","&:hover":{textDecorationLine:"underline"}},"always"===u.underline&&{textDecoration:"underline"},u.startDecorator&&{verticalAlign:"bottom"},{display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:d.vars.radius.xs,padding:0,cursor:"pointer"},"context"!==u.color&&{textDecorationColor:"rgba(".concat(null==(o=d.vars.palette[u.color])?void 0:o.mainChannel," / var(--Link-underlineOpacity, 0.72))")},u.variant?(0,i.Z)({paddingBlock:"min(0.15em, 4px)",paddingInline:"0.375em"},!u.nesting&&{marginInline:"-0.375em"}):(0,i.Z)({},"context"!==u.color&&{color:"rgba(".concat(null==(r=d.vars.palette[u.color])?void 0:r.mainChannel," / 1)")},(0,t.Z)({},"&.".concat(Z.disabled),(0,i.Z)({pointerEvents:"none"},"context"!==u.color&&{color:"rgba(".concat(null==(n=d.vars.palette[u.color])?void 0:n.mainChannel," / 0.6)")}))),{userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},u.overlay?(0,t.Z)({position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"}},"".concat(d.focus.selector),{"&::after":d.focus.default}):(0,t.Z)({position:"relative"},d.focus.selector,d.focus.default)),u.variant&&(0,i.Z)({},null==(a=d.variants[u.variant])?void 0:a[u.color],(0,t.Z)({"&:hover":null==(l=d.variants["".concat(u.variant,"Hover")])?void 0:l[u.color],"&:active":null==(s=d.variants["".concat(u.variant,"Active")])?void 0:s[u.color]},"&.".concat(Z.disabled),null==(c=d.variants["".concat(u.variant,"Disabled")])?void 0:c[u.color]))]})),P=l.forwardRef((function(e,o){var r=(0,v.Z)({props:e,name:"JoyLink"}),t=r.color,p=void 0===t?"primary":t,f=r.textColor,Z=r.variant,P=(0,a.Z)(r,j),S=(0,(0,x.VT)(Z).getColor)(e.color,p),z=l.useContext(b.FR),I=l.useContext(b.eu),F=(0,m.Z)((0,i.Z)({},P,{color:f})),R=F.children,L=F.disabled,T=void 0!==L&&L,M=F.onBlur,B=F.onFocus,W=F.level,A=void 0===W?"body1":W,V=F.overlay,q=void 0!==V&&V,E=F.underline,N=void 0===E?"hover":E,_=F.endDecorator,H=F.startDecorator,J=F.component,O=F.slots,G=void 0===O?{}:O,K=F.slotProps,U=void 0===K?{}:K,X=(0,a.Z)(F,w),Y=z||I?e.level||"inherit":A,$=(0,d.Z)(),Q=$.isFocusVisibleRef,ee=$.onBlur,oe=$.onFocus,re=$.ref,ne=l.useState(!1),te=(0,n.Z)(ne,2),ae=te[0],ie=te[1],le=(0,u.Z)(o,re),se=(0,i.Z)({},F,{color:S,disabled:T,focusVisible:ae,underline:N,variant:Z,level:Y,overlay:q,nesting:z}),ce=function(e){var o=e.level,r=e.color,n=e.variant,t=e.underline,a=e.focusVisible,i=e.disabled,l={root:["root",r&&"color".concat((0,c.Z)(r)),i&&"disabled",a&&"focusVisible",o,t&&"underline".concat((0,c.Z)(t)),n&&"variant".concat((0,c.Z)(n))],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,s.Z)(l,g,{})}(se),de=(0,i.Z)({},X,{component:J,slots:G,slotProps:U}),ue=(0,h.Z)("root",{additionalProps:{onBlur:function(e){ee(e),!1===Q.current&&ie(!1),M&&M(e)},onFocus:function(e){oe(e),!0===Q.current&&ie(!0),B&&B(e)}},ref:le,className:ce.root,elementType:C,externalForwardedProps:de,ownerState:se}),me=(0,n.Z)(ue,2),pe=me[0],ve=me[1],xe=(0,h.Z)("startDecorator",{className:ce.startDecorator,elementType:k,externalForwardedProps:de,ownerState:se}),he=(0,n.Z)(xe,2),fe=he[0],ge=he[1],Ze=(0,h.Z)("endDecorator",{className:ce.endDecorator,elementType:D,externalForwardedProps:de,ownerState:se}),be=(0,n.Z)(Ze,2),ye=be[0],je=be[1];return(0,y.jsx)(b.FR.Provider,{value:!0,children:(0,y.jsxs)(pe,(0,i.Z)({},ve,{children:[H&&(0,y.jsx)(fe,(0,i.Z)({},ge,{children:H})),R,_&&(0,y.jsx)(ye,(0,i.Z)({},je,{children:_}))]}))})}))}}]);
//# sourceMappingURL=630.31a53e4c.chunk.js.map