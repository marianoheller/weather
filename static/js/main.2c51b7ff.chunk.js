(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{170:function(e,t,n){e.exports=n(332)},175:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),o=(n(175),n(28)),u=n(11),l=n(12),s=n(65),m=n(375),p=n(374);function f(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background-image: radial-gradient(\n    rgba(255, 255, 255, 0.9),\n    rgba(255, 255, 255, 0.25)\n  );\n"]);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n  & .leaflet-control-container {\n    display: none;\n  }\n"]);return d=function(){return e},e}var v=Object(l.a)(m.a)(d()),h=l.a.div(f());var y=function(e){var t=e.lat,n=void 0===t?49.84:t,a=e.lon,i=void 0===a?-97.13:a,c=Object(s.a)(e,["lat","lon"]),o=[n,i];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(v,Object.assign({center:o,animate:!0,zoom:9},c),r.a.createElement(p.a,{url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"})))},b=n(372);function g(){var e=Object(u.a)(["\n  width: 100%;\n  & input {\n    text-align: center;\n  }\n"]);return g=function(){return e},e}var O=Object(l.a)(b.a)(g());function j(e){var t=e.handleChange,n=Object(s.a)(e,["handleChange"]),i=Object(a.useState)(""),c=Object(o.a)(i,2),u=c[0],l=c[1];return r.a.createElement(O,Object.assign({margin:"normal",placeholder:"Type a city",value:u,onChange:function(e){var n=e.target;l(n.value),t(n.value)}},n))}var w=n(46),x=n.n(w),E=n(99),M=n.n(E),L=n(35),k=n.n(L),P=n(100),D=n(368),K=n(373),S=n(370),I=n(371),_=n(369),F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function C(){var e=Object(u.a)(["\n  opacity: 0.5;\n  filter: saturate(50%);\n"]);return C=function(){return e},e}function N(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return N=function(){return e},e}function z(){var e=Object(u.a)(["\n  max-width: 345;\n"]);return z=function(){return e},e}var B=Object(l.a)(D.a)(z()),T=Object(l.a)(_.a)(N()),W=l.a.img(C());function J(e){e.key;var t=e.timestamp,n=e.temp,a=(e.tempMin,e.tempMax,e.pressure),i=(e.seaLevel,e.groundLevel,e.humidity),c=(e.tempKf,e.icon);return r.a.createElement(B,null,r.a.createElement(K.a,null,r.a.createElement(S.a,null,r.a.createElement(T,{gutterBottom:!0,variant:"h5",component:"h2"},n.toFixed(0)," K",r.a.createElement(W,{src:c,alt:"weather icon"})),r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},"Humidity: ",i.toFixed(2)," %"),r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},"Pressure: ",a.toFixed(2)," hPa")),r.a.createElement(I.a,null,r.a.createElement("span",null,function(e){var t=new Date(e);return F[t.getDay()]}(t)))))}function q(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10vw;\n"]);return q=function(){return e},e}function A(){var e=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100vw;\n"]);return A=function(){return e},e}function H(){var e=Object(u.a)(["\n  display: block;\n  flex-direction: row;\n  justify-content: center;\n"]);return H=function(){return e},e}var $=l.a.div(H()),G=Object(l.a)(P.a.div)(A()),Q=l.a.div(q()),R={from:{opacity:0,transform:"translate3d(0, -40px, 0)"},enter:{opacity:1,transform:"translate3d(0, 0px, 0)"},leave:{opacity:0,transform:"translate3d(0, 40px, 0)"}},U=k()([x()("cityId"),M.a]),V=k()([x()("timestamp"),M.a]),X=function(e){return"".concat(U(e)).concat(V(e))};var Y=n(42),Z=n.n(Y),ee=n(63),te=n(158),ne=n.n(te),ae=n(159),re=n.n(ae),ie="https://api.openweathermap.org";function ce(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(ee.a)(Z.a.mark((function e(t){var n,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="".concat(ie,"/data/2.5/forecast"),e.prev=1,t){e.next=4;break}throw Error("No city name");case 4:return e.next=6,re.a.get(n,{params:{q:t,APPID:"7b17e8b1a5bfc41d0a542e3b2b0508f0"}});case 6:return a=e.sent,r=a.data,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{list:[]});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var ue=n(36),le=n(47),se=n.n(le),me=n(160),pe=n.n(me),fe=n(161),de=n.n(fe),ve=n(162),he=n.n(ve);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(ue.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=k()([se()((function(e){return{cityId:e.cityId,cityName:e.cityName,coords:e.coords,timestamp:1e3*e.dt,temp:e.main.temp,tempMin:e.main.temp_min,tempMax:e.main.temp_max,pressure:e.main.pressure,seaLevel:e.main.sea_level,groundLevel:e.main.grnd_level,humidity:e.main.humidity,tempKf:e.main.temp_kf,icon:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")}})),function(e){return se()((function(t){return be({},t,{cityId:e.city.id,cityName:e.city.name,coords:e.city.coord})}),e.list)}]),Oe=k()([se()((function(e){return be({},e,{temp:e.temp/e.samples,tempMin:e.tempMin/e.samples,tempMax:e.tempMax/e.samples,pressure:e.pressure/e.samples,seaLevel:e.seaLevel/e.samples,groundLevel:e.groundLevel/e.samples,humidity:e.humidity/e.samples,tempKf:e.tempKf/e.samples})})),pe.a,se()(de()((function(e,t){return be({},t,{temp:e.temp+t.temp,tempMin:e.tempMin+t.tempMin,tempMax:e.tempMax+t.tempMax,pressure:e.pressure+t.pressure,seaLevel:e.seaLevel+t.seaLevel,groundLevel:e.groundLevel+t.groundLevel,humidity:e.humidity+t.humidity,tempKf:e.tempKf+t.tempKf,samples:e.samples+1})}),{temp:0,tempMin:0,tempMax:0,pressure:0,seaLevel:0,groundLevel:0,humidity:0,tempKf:0,samples:0})),he()((function(e){return new Date(e.timestamp).getDay()}))]),je=k()([Oe,ge]),we=x()("[0].coords");function xe(){return(xe=Object(ee.a)(Z.a.mark((function e(t,n){var a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(t);case 2:a=e.sent,r=je(a),n(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=ne()((function(e,t){return xe.apply(this,arguments)}),500);function Me(){var e=Object(u.a)(["\n  width: 300px;\n"]);return Me=function(){return e},e}function Le(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Le=function(){return e},e}var ke=l.a.div(Le()),Pe=l.a.div(Me());var De=function(){var e=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return[n,function(e){Ee(e,r)}]}(),t=Object(o.a)(e,2),n=t[0],i=t[1];return r.a.createElement(ke,null,r.a.createElement(y,we(n)),r.a.createElement(Pe,null,r.a.createElement(j,{handleChange:i})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.useState)([]),n=Object(o.a)(t,2),i=n[0],c=n[1],u=Object(P.b)(i,X,R);return Object(a.useEffect)((function(){c([e])}),[e]),r.a.createElement($,null,u.map((function(e){var t=e.item,n=e.props,a=e.key;return r.a.createElement(G,{key:a,style:n},r.a.createElement(Q,null,t&&t.map((function(e){return r.a.createElement(J,e)}))))})))}(n))};var Ke=function(){return r.a.createElement(De,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[170,1,2]]]);
//# sourceMappingURL=main.2c51b7ff.chunk.js.map