(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[37],{356:function(e,t,a){"use strict";a.r(t);var c=a(82),s=a(0),l=a.n(s),r=a(557),i=a(507),n=a(521),d=a(83),o=a(405),m=a(558),j=a.n(m),b=a(560),x=a.n(b),h=a(561),u=a.n(h),O=a(600),f=a.n(O),g=a(478),p=a(2),y=(a(224),a(6)),v={width:"100wv",height:"33rem"},N={lat:28.6139,lng:77.209},S=["places","geometry","visualization","drawing"];t.default=function(){var e=Object(g.g)({id:"google-map-script",googleMapsApiKey:"AIzaSyDvqub0gVMyj_O-pMmLRkQQKP_UsCMKFXQ",libraries:S}).isLoaded,t=l.a.useState([]),a=Object(c.a)(t,2),s=(a[0],a[1],l.a.useState(null)),m=Object(c.a)(s,2),b=(m[0],m[1]),h=l.a.useState([]),O=Object(c.a)(h,2),z=(O[0],O[1],l.a.useCallback((function(e){b(e)}),[])),I=l.a.useCallback((function(e){b(null)}),[]),E=l.a.useState(p.i.connected),A=Object(c.a)(E,2),D=(A[0],A[1],l.a.useState("")),C=Object(c.a)(D,2),w=C[0],T=C[1],k=l.a.useState([]),L=Object(c.a)(k,2),V=L[0],B=L[1];return l.a.useEffect((function(){return T(""),B([]),console.log(sessionStorage.getItem("user_id")),p.i.emit("ondashboard",{userId:null==p.c.id||null==p.c.id||null==p.c.id?sessionStorage.getItem("user_id"):p.c.id}),p.i.on("dashboardData",(function(e){T(e.data[0]),B(e.deviceList)})),function(){p.i.off("ondashboard"),p.i.off("dashboardData"),T(""),B([])}}),[]),e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{title:"Dashboard",description:"Ecommerce Dashboard Page"}),Object(y.jsxs)("div",{className:"page-title-container",children:[Object(y.jsx)(d.c,{className:"muted-link pb-1 d-inline-block hidden breadcrumb-back",to:"/",children:Object(y.jsx)("span",{className:"align-middle text-small ms-1",children:"\xa0"})}),Object(y.jsx)("h1",{className:"mb-0 pb-0  display-4",id:"title",style:{marginLeft:"0.5rem",fontWeight:"700",fontSize:"1.5rem",color:"#5ebce3"},children:"Dashboard"})]}),Object(y.jsxs)(r.a,{className:"mb-5 g-2",children:[Object(y.jsx)(i.a,{xs:"6",md:"4",lg:"4",children:Object(y.jsx)(d.c,{to:"device-list",children:Object(y.jsx)(n.a,{className:"h-100 hover-scale-up cursor-pointer",children:Object(y.jsxs)(n.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(y.jsx)("div",{className:"sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4",children:Object(y.jsx)(j.a,{className:"text-primary"})}),Object(y.jsx)("div",{className:"mb-1 d-flex align-items-center text-alternate lh-1-25",style:{fontSize:"0.8rem"},children:"TOTAL DEVICES"}),Object(y.jsx)("div",{className:"text-primary cta-4",style:{fontSize:"1.3rem"},children:w.totalDevice})]})})})}),Object(y.jsx)(i.a,{xs:"6",md:"4",lg:"4",children:Object(y.jsx)(n.a,{className:"h-100 hover-scale-up",children:Object(y.jsxs)(n.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(y.jsx)("div",{className:"sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4",children:Object(y.jsx)(x.a,{className:"text-primary"})}),Object(y.jsx)("div",{className:"mb-1 d-flex align-items-center text-alternate lh-1-25",style:{fontSize:"0.8rem"},children:"ACTIVE DEVICES"}),Object(y.jsx)("div",{className:"text-primary cta-4",style:{fontSize:"1.3rem"},children:w.totalActive})]})})}),Object(y.jsx)(i.a,{xs:"6",md:"4",lg:"4",children:Object(y.jsx)(n.a,{className:"h-100 hover-scale-up",children:Object(y.jsxs)(n.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(y.jsx)("div",{className:"sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4",children:Object(y.jsx)(u.a,{className:"text-primary"})}),Object(y.jsx)("div",{className:"mb-1 d-flex align-items-center text-alternate lh-1-25",style:{fontSize:"0.8rem"},children:"INACTIVE DEVICES"}),Object(y.jsx)("div",{className:"text-primary cta-4",style:{fontSize:"1.3rem"},children:w.totalDeactive})]})})}),Object(y.jsx)(i.a,{xs:"6",md:"4",lg:"4",children:Object(y.jsx)(n.a,{className:"h-100 hover-scale-up",children:Object(y.jsxs)(n.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(y.jsx)("div",{className:"sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4",children:Object(y.jsx)(f.a,{className:"text-primary"})}),Object(y.jsx)("div",{className:"mb-1 d-flex align-items-center text-alternate lh-1-25",style:{fontSize:"0.8rem"},children:"TODAY'S ALERTS"}),Object(y.jsx)("div",{className:"text-primary cta-4",style:{fontSize:"1.3rem"},children:w.todayAlert})]})})}),Object(y.jsx)(i.a,{xs:"6",md:"4",lg:"4",children:Object(y.jsx)(n.a,{className:"h-100 hover-scale-up",children:Object(y.jsxs)(n.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(y.jsx)("div",{className:"sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4",children:Object(y.jsx)(d.b,{to:"/alert/active-alert",style:{color:"#7c7c7c"},children:Object(y.jsx)(f.a,{className:"text-primary"})})}),Object(y.jsx)("div",{className:"mb-1 d-flex align-items-center text-alternate lh-1-25",style:{fontSize:"0.8rem"},children:"ACTIVE ALERTS"}),Object(y.jsx)("div",{className:"text-primary cta-4",style:{fontSize:"1.3rem"},children:w.acticeAlert})]})})})]}),Object(y.jsx)("div",{children:Object(y.jsx)(g.c,{mapContainerStyle:v,center:N,zoom:5,onLoad:z,onUnmount:I,mapTypeId:"terrain",children:Object(y.jsx)(g.e,{averageCenter:!0,enableRetinaIcons:!0,gridSize:60,children:function(e){return V.map((function(t,a){return Object(y.jsx)(g.d,{position:{lat:parseFloat(t.latitude),lng:parseFloat(t.longitude)},clusterer:e,draggable:!0,zIndex:2},a)}))}})})})]}):Object(y.jsx)(y.Fragment,{})}},405:function(e,t,a){"use strict";var c=a(142),s=(a(0),a(6));t.a=function(e){var t=e.title,a=void 0===t?"":t,l=e.description,r=void 0===l?"":l,i=e.children,n=void 0===i?null:i;return Object(s.jsxs)(c.a,{children:[a&&Object(s.jsx)("title",{children:a}),r&&Object(s.jsx)("meta",{name:"description",content:r}),n&&n]})}}}]);