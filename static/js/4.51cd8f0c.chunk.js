(this["webpackJsonpredux-beginner"]=this["webpackJsonpredux-beginner"]||[]).push([[4],{177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},193:function(e,t,a){},296:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);a(2);var o=a(11),n=a(58),c=(a(177),a(6));function r(e){var t=e.title,a=e.backgroundUrl,o=a?{backgroundImage:"url(".concat(a,")")}:{};return Object(c.jsx)("section",{className:"banner",style:o,children:Object(c.jsx)("h1",{className:"banner__title",children:t})})}r.defaultProps={title:"",backgroundUrl:""};var l=r,i={ORANGE_BG:a.p+"static/media/orange-bg.a98c2734.jpg",BLUE_BG:a.p+"static/media/blue-bg.93b683dc.jpg",COLORFUL_BG:a.p+"static/media/colorful-bg.95c0fb34.jpg",PINK_BG:a.p+"static/media/pink-bg.d6dafc0a.jpg"},s=a(122),d=a(123),u=a(299);a(178);function j(e){var t=e.photo,a=e.onEditClick,o=e.onRemoveClick;return Object(c.jsxs)("div",{className:"photo",children:[Object(c.jsx)("img",{src:t.photo,alt:t.title}),Object(c.jsxs)("div",{className:"photo__overlay",children:[Object(c.jsx)("h3",{className:"photo__title",children:t.title}),Object(c.jsxs)("div",{className:"photo__actions",children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{outline:!0,size:"sm",color:"light",onClick:function(){a&&a(t)},children:"Edit"})}),Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{outline:!0,size:"sm",color:"danger",onClick:function(){o&&o(t)},children:"Remove"})})]})]})]})}j.defaultProps={photo:[],onEditClick:null,onRemoveClick:null};var b=j;function h(e){var t=e.photoList,a=e.onPhotoEditClick,o=e.onPhotoRemoveClick;return Object(c.jsx)(s.a,{children:t.map((function(e){return Object(c.jsx)(d.a,{xs:"12",md:"6",lg:"3",children:Object(c.jsx)(b,{photo:e,onEditClick:a,onRemoveClick:o})},e.title)}))})}h.defaultProps={photoList:[],onPhotoEditClick:null,onPhotoRemoveClick:null};var m=h;var p=function(e){var t=e.category,a=e.handleClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u.a,{value:t.value,onClick:a,className:"ml-3 mb-3 btn-warning",children:t.label})})},O=a(44),v=a(32),f=a(29),x=a(121),g=a(300),y=(a(179),[{value:1,label:"Technology"},{value:2,label:"Education"},{value:3,label:"Nature"},{value:4,label:"Animals"},{value:5,label:"Styles"}]),k=function(e){for(var t=document.querySelectorAll(e),a=0;a<t.length;a++)t[a].classList.remove("active")};var C=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.photos})),a=Object(o.g)(),n=t.list,r=function(t){k(".category-search > button");var a=t.target.value,o=Object(O.e)(a);e(o)},j=function(t){k(".category-search > button"),t.target.classList.add("active");var a=Object(O.d)(t.target.value);e(a)};return(r||j)&&(""===t.searchText&&"0"===t.category||(n=t.filter)),Object(c.jsxs)("div",{className:"photo-main",children:[Object(c.jsx)(l,{title:"Your awesome photos \ud83c\udf89",backgroundUrl:i.PINK_BG}),Object(c.jsxs)(x.a,{className:"text-center",children:[Object(c.jsxs)(s.a,{className:"mb-3",children:[Object(c.jsx)(d.a,{xs:"12",md:"6",className:"mt-3",children:Object(c.jsx)(g.a,{value:t.searchText,type:"text",name:"search",placeholder:" \ud83d\udd0d Search by description",onChange:r})}),Object(c.jsx)(d.a,{xs:"12",md:"6",className:"mt-3",children:Object(c.jsx)(u.a,{color:"primary",children:Object(c.jsx)(f.b,{to:"/photos/add",children:"Add new photo"})})})]}),Object(c.jsxs)(s.a,{className:"category-search",children:[Object(c.jsx)(u.a,{value:"0",onClick:j,className:"ml-3 mb-3 btn-warning active",children:"All"}),y.map((function(e){return Object(c.jsx)(p,{category:e,handleClick:j})}))]}),console.log(t),Object(c.jsx)(m,{photoList:n,onPhotoEditClick:function(e){var t="/photos/".concat(e.id);a.push(t)},onPhotoRemoveClick:function(t){var a=t.id,o=Object(O.c)(a);e(o)}})]})]})},N=a(22),P=a(301),_=a(304),B=a(138),R=a(302),I=a(303);function w(e){var t=e.field,a=e.form,o=e.type,n=e.label,r=e.placeholder,l=e.disabled,i=t.name,s=a.errors,d=a.touched,u=s[i]&&d[i];return Object(c.jsxs)(P.a,{children:[n&&Object(c.jsx)(R.a,{for:i,children:n}),Object(c.jsx)(g.a,Object(N.a)(Object(N.a)({id:i},t),{},{type:o,disabled:l,placeholder:r,invalid:u})),Object(c.jsx)(B.a,{name:i,component:I.a})]})}w.defaultProps={type:"text",label:"",placeholder:"",disabled:!1};var E=w,U=a(298);function S(e){var t=e.field,a=e.form,o=e.options,n=e.label,r=e.placeholder,l=e.disabled,i=t.name,s=t.value,d=o.find((function(e){return e.value===s})),u=a.errors,j=a.touched,b=u[i]&&j[i];return Object(c.jsxs)(P.a,{children:[n&&Object(c.jsx)(R.a,{for:i,children:n}),Object(c.jsx)(U.a,Object(N.a)(Object(N.a)({id:i},t),{},{value:d,onChange:function(e){var a=e?e.value:e,o={target:{name:i,value:a}};t.onChange(o)},placeholder:r,isDisabled:l,options:o,className:b?"is-invalid":""})),Object(c.jsx)(B.a,{name:i,component:I.a})]})}S.defaultProps={label:"",placeholder:"",disabled:!1,options:[]};var q=S,A=a(19),L=a.n(A),T=a(25);a(193);M.defaultProps={name:"",imageUrl:"",onImageUrlChange:null,onRandomButtonBlur:null};var G=function(){var e=Math.trunc(2e3*Math.random());return"https://picsum.photos/id/".concat(e,"/300/300")};function M(e){var t=e.name,a=e.imageUrl,o=e.onImageUrlChange,n=e.onRandomButtonBlur,r=function(){var e=Object(T.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(t=G(),o(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"random-photo",children:[Object(c.jsx)("div",{className:"random-photo__button",children:Object(c.jsx)(u.a,{outline:!0,name:t,color:"primary",onBlur:n,onClick:r,children:"Random a photo"})}),Object(c.jsx)("div",{className:"random-photo__photo",children:a&&Object(c.jsx)("img",{src:a,alt:"Ooops ... not found. Please click random again!",onError:function(e){return e.target.src=r()}})})]})}var z=M;function V(e){var t=e.field,a=e.form,o=e.label,n=t.name,r=t.value,l=t.onBlur,i=a.errors,s=a.touched,d=i[n]&&s[n];return Object(c.jsxs)(P.a,{children:[o&&Object(c.jsx)(R.a,{for:n,children:o}),Object(c.jsx)(z,{name:n,imageUrl:r,onImageUrlChange:function(e){a.setFieldValue(n,e)},onRandomButtonBlur:l}),Object(c.jsx)("div",{className:d?"is-invalid":""}),Object(c.jsx)(B.a,{name:n,component:I.a})]})}V.defaultProps={label:""};var F=V,J=a(297);function K(e){var t=e.initialValues,a=e.isAddMode,o=J.b().shape({title:J.c().required("This field is required."),categoryId:J.a().required("This field is required.").nullable(),photo:J.c().when("categoryId",{is:1,then:J.c().required("This field is required."),otherwise:J.c().notRequired()})});return Object(c.jsx)(B.d,{initialValues:t,validationSchema:o,onSubmit:e.onSubmit,children:function(e){e.values,e.errors,e.touched;var t=e.isSubmitting;return Object(c.jsxs)(B.c,{children:[Object(c.jsx)(B.b,{name:"title",component:E,label:"Title",placeholder:"Eg: Wow nature ..."}),Object(c.jsx)(B.b,{name:"categoryId",component:q,label:"Category",placeholder:"What's your photo category?",options:y}),Object(c.jsx)(B.b,{name:"photo",component:F,label:"Photo"}),Object(c.jsx)(P.a,{children:Object(c.jsxs)(u.a,{type:"submit",color:a?"primary":"success",children:[t&&Object(c.jsx)(_.a,{size:"sm"}),a?"Add to album":"Update your photo"]})})]})}})}K.defaultProps={onSubmit:null};var W=K;a(296);var D=function(e){var t=Object(v.b)(),a=Object(o.g)(),n=Object(o.h)().photoId,r=!n,i=Object(v.c)((function(e){return e.photos.list.find((function(e){return e.id===+n}))}));console.log({photoId:n,editedPhoto:i});var s=r?{title:"",categoryId:null,photo:""}:i;return Object(c.jsxs)("div",{className:"photo-edit",children:[Object(c.jsx)(l,{title:"Pick your amazing photo \ud83d\ude0e"}),Object(c.jsx)("div",{className:"photo-edit__form",children:Object(c.jsx)(W,{isAddMode:r,initialValues:s,onSubmit:function(e){return new Promise((function(o){setTimeout((function(){if(r){var n=Object(N.a)(Object(N.a)({},e),{},{id:(i=1e4,s=99999,i+Math.trunc(Math.random()*(s-i)))}),c=Object(O.a)(n);console.log({action:c}),t(c)}else{var l=Object(O.f)(e);t(l)}var i,s;a.push("/photos"),o(!0)}),2e3)}))}})})]})};t.default=function(e){var t=Object(o.i)();return Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:t.url,component:C}),Object(c.jsx)(o.b,{path:"".concat(t.url,"/add"),component:D}),Object(c.jsx)(o.b,{path:"".concat(t.url,"/:photoId"),component:D}),Object(c.jsx)(o.b,{component:n.a})]})}}}]);
//# sourceMappingURL=4.51cd8f0c.chunk.js.map