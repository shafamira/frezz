(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,a){e.exports=a(97)},72:function(e,t,a){},75:function(e,t,a){},83:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(17),s=a(19),r=a(18),o=a(1),i=a.n(o),c=a(28),u=a.n(c),d=a(29),m=(a(71),a(72),a(7)),p=a(101),h=a(105),f=a(106),b=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.show?i.a.createElement(f.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0},this.props.title&&i.a.createElement("h5",null,i.a.createElement("strong",null,this.props.title)),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}})):null}}]),a}(o.Component),g=(a(75),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"About container"},i.a.createElement("h1",null,"About"),i.a.createElement("br",null),i.a.createElement("p",null,"FREZZ is a website application that can be used to help and facilitate supermarkets or fruit farmers in Indonesia in choosing fruit with the best quality, for now FREZZ can only be used to classify fruits such as bananas, apples and oranges. This application can determine which fruit is fresh or rotten, this is done as a ",i.a.createElement("i",null,"quality control")," so that the fruit distributed has the best quality.",i.a.createElement("br",null),i.a.createElement("br",null),"FREZZ was created and developed by the following people:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Alyza Rahima Pramudya")),i.a.createElement("li",null,i.a.createElement("strong",null,"Dierta Pasific")),i.a.createElement("li",null,i.a.createElement("strong",null,"Jacqueline Abyasa")),i.a.createElement("li",null,i.a.createElement("strong",null,"Shafa Amira Qonitatin")))))}}]),a}(o.Component)),v=a(6),E=a.n(v),w=a(10),y=a(100),x=a(58),O=a(99),k=a(104),N=a(102),A=a(103),j=a(107),S=a(63),U=a(64),C=a(57),M=a.n(C),T=a(11),L=a(65),I=function(e){var t=e.isLoading,a=e.text,n=e.loadingText,l=e.className,s=void 0===l?"":l,r=e.disabled,o=void 0!==r&&r,c=Object(L.a)(e,["isLoading","text","loadingText","className","disabled"]);return i.a.createElement(O.a,Object.assign({className:"LoadButton ".concat(s),disabled:o||t},c),t&&i.a.createElement(y.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?n:a)},F={0:"Fresh Apple",1:"Fresh Banana",2:"Fresh Orange",3:"Rotten Apple",4:"Rotten Banana",5:"Rotten Orange"},W={API_ENDPOINT:"http://localhost:5000/api"},P=(a(89),a(90),"/model/model3/transfer_learning/model.json"),R=150,D=224,B=3,_="web-model",z=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).initWebcam=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.b.webcam(l.refs.webcam,{resizeWidth:D,resizeHeight:D,facingMode:"environment"});case 3:l.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}},e,null,[[0,6]])})),l.startWebcam=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.webcam&&l.webcam.start();case 1:case"end":return e.stop()}},e)})),l.stopWebcam=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.webcam&&l.webcam.stop();case 1:case"end":return e.stop()}},e)})),l.getModelInfo=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(W.API_ENDPOINT,"/model_info"),{method:"GET"}).then(function(){var e=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then(function(e){l.modelLastUpdated=e.last_updated}).catch(function(e){console.log("Unable to get parse model info.")});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("Unable to get model info")});case 2:case"end":return e.stop()}},e)})),l.updateModel=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: "+_),l.setState({isDownloadingModel:!0}),e.next=4,T.d(P);case 4:return l.model=e.sent,e.next=7,l.model.save("indexeddb://"+_);case 7:l.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}},e)})),l.classifyLocalImage=Object(w.a)(E.a.mark(function e(){var t,a,n,s,r,o,i,c,u,d,m;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({isClassifying:!0}),t=l.refs.cropper.getCroppedCanvas(),a=T.e(function(){return T.a.fromPixels(t).toFloat()}),e.next=5,l.processImage(a);case 5:return n=e.sent,s=T.c.resizeBilinear(n,[R,R]),r=l.model.predict(s),e.next=10,r.data();case 10:return o=e.sent,e.next=13,l.getTopKClasses(o,B);case 13:i=e.sent,l.setState({predictions:i,isClassifying:!1,photoSettingsOpen:!l.state.photoSettingsOpen}),c=l.refs.canvas.getContext("2d"),u=D/t.width,d=D/t.height,m=Math.min(u,d),c.clearRect(0,0,D,D),c.drawImage(t,0,0,t.width*m,t.height*m),a.dispose(),n.dispose(),s.dispose(),r.dispose();case 25:case"end":return e.stop()}},e)})),l.classifyWebcamImage=Object(w.a)(E.a.mark(function e(){var t,a,n,s,r,o,i;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({isClassifying:!0}),e.next=3,l.webcam.capture();case 3:return t=e.sent,a=T.c.resizeBilinear(t,[R,R]),e.next=7,l.processImage(a);case 7:return n=e.sent,s=l.model.predict(n),e.next=11,s.data();case 11:return r=e.sent,e.next=14,l.getTopKClasses(r,B);case 14:return o=e.sent,l.setState({predictions:o,isClassifying:!1,photoSettingsOpen:!l.state.photoSettingsOpen}),i=T.e(function(){return t.toFloat().div(255)}),e.next=19,T.a.toPixels(i,l.refs.canvas);case 19:a.dispose(),t.dispose(),n.dispose(),s.dispose(),i.dispose();case 24:case"end":return e.stop()}},e)})),l.processImage=function(){var e=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.e(function(){return t.expandDims(0).toFloat().div(127).sub(1)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),l.getTopKClasses=function(){var e=Object(w.a)(E.a.mark(function e(t,a){var n,l,s,r,o,i,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],l=0;l<t.length;l++)n.push({value:t[l],index:l});for(n.sort(function(e,t){return t.value-e.value}),s=new Float32Array(a),r=new Int32Array(a),o=0;o<a;o++)s[o]=n[o].value,r[o]=n[o].index;for(i=[],c=0;c<1;c++)i.push({className:F[r[c]],probability:(100*s[c]).toFixed(2)});return e.abrupt("return",i);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),l.handlePanelClick=function(e){l.setState({photoSettingsOpen:!l.state.photoSettingsOpen})},l.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&l.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},l.handleTabSelect=function(e){switch(e){case"camera":l.startWebcam();break;case"localfile":l.setState({filename:null,file:null}),l.stopWebcam()}},l.webcam=null,l.model=null,l.modelLastUpdated=null,l.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(E.a.mark(function e(){var t,a,n,l=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("indexedDB"in window)){e.next=36;break}return e.prev=1,e.next=4,T.d("indexeddb://"+_);case 4:return this.model=e.sent,e.prev=5,e.next=8,Object(U.a)("tensorflowjs",1);case 8:return t=e.sent,e.next=11,t.transaction("model_info_store").objectStore("model_info_store").get(_);case 11:return a=e.sent,n=new Date(a.modelArtifactsInfo.dateSaved),e.next=15,this.getModelInfo();case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||n>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.warn(e.t0),console.warn("Could not retrieve when model was saved.");case 23:e.next=34;break;case 25:return e.prev=25,e.t1=e.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(e.t1),e.next=31,T.d(P);case 31:return this.model=e.sent,e.next=34,this.model.save("indexeddb://"+_);case 34:e.next=40;break;case 36:return console.warn("IndexedDB not supported."),e.next=39,T.d(P);case 39:this.model=e.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),T.e(function(){return l.model.predict(T.f([1,R,R,3]))}).dispose();case 44:case"end":return e.stop()}},e,this,[[1,25],[5,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(w.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Classify container"},!this.state.modelLoaded&&i.a.createElement(o.Fragment,null,i.a.createElement(y.a,null,i.a.createElement("span",{className:"spinner-grow text-success"}))," ",i.a.createElement("span",{className:"loading-model-text"},"Loading Model"),i.a.createElement("h6",null,"Please wait patiently, for the first time it will take a little bit longer")),this.state.modelLoaded&&i.a.createElement(o.Fragment,null,i.a.createElement(x.a,{in:this.state.photoSettingsOpen},i.a.createElement("div",{id:"photo-selection-pane"},this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0},"An update for the ",i.a.createElement("strong",null,this.state.modelType)," model is available.",i.a.createElement("div",{className:"d-flex justify-content-center pt-1"},!this.state.isDownloadingModel&&i.a.createElement(O.a,{onClick:this.updateModel,variant:"outline-info"},"Update"),this.state.isDownloadingModel&&i.a.createElement("div",null,i.a.createElement(y.a,{animation:"border",role:"status",size:"sm"},i.a.createElement("span",{className:"sr-only"},"Downloading..."))," ",i.a.createElement("strong",null,"Downloading..."))))),this.state.showModelUpdateSuccess&&i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0},"The ",i.a.createElement("strong",null,this.state.modelType)," model has been updated!")),i.a.createElement(k.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center"},i.a.createElement(N.a,{eventKey:"camera",title:"Take Photos",className:"takePhoto"},i.a.createElement("div",{id:"no-webcam",ref:"noWebcam"},i.a.createElement("span",{className:"camera-icon"},i.a.createElement(S.a,null)),i.a.createElement("p",null,"No camera found. ",i.a.createElement("br",null),"Please use a device with a camera, or upload an image instead.")),i.a.createElement("div",{className:"button-container"},i.a.createElement(I,{className:"btn btn-outline-success",color:"black",variant:"Success",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Let's Classify!",loadingText:"Classifying..."}))),i.a.createElement(N.a,{eventKey:"localfile",title:"Select Image From Local",className:"localImage"},i.a.createElement(A.a.Group,{controlId:"file"},i.a.createElement(A.a.Label,{className:"textUpload"},"Upload your image"),i.a.createElement("br",null),i.a.createElement(A.a.Label,{className:"btn btn-outline-success"},this.state.filename?this.state.filename:"Browse"),i.a.createElement(A.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})),this.state.file&&i.a.createElement(o.Fragment,null,i.a.createElement("div",{id:"local-image"},i.a.createElement(M.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})),i.a.createElement("div",{className:"button-container"},i.a.createElement(I,{className:"btn btn-outline-success",variant:"Success",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Let's Classify!",loadingText:"Classifying..."}))))))),this.state.predictions.length>0&&i.a.createElement("div",{className:"classification-results"},i.a.createElement("h3",null,"Predictions"),i.a.createElement("canvas",{ref:"canvas",width:D,height:D}),i.a.createElement("br",null),i.a.createElement(j.a,null,this.state.predictions.map(function(e){return console.log(e),"Fresh Apple"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"This most likely",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):"Fresh Orange"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"This most likely",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):"Fresh Banana"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"This most likely",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):"Rotten Banana"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"Oh no! This is",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):"Rotten Orange"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"Oh no! This is",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):"Rotten Apple"===e.className?i.a.createElement("div",null,i.a.createElement("p",null,"Oh no! This is",i.a.createElement("br",null),i.a.createElement("strong",null,e.className),i.a.createElement("br",null),"with",i.a.createElement("br",null),i.a.createElement("strong",null,e.probability,"% probability!"))):void 0})))))}}]),a}(o.Component),Z=(a(93),function(){return i.a.createElement("div",{className:"NotFound"},i.a.createElement("h1",null,"404"),i.a.createElement("h3",null,"The page you were looking for is not here."),i.a.createElement("a",{href:"/"},"Go Home"))}),K=function(e){var t=e.childProps;return i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",exact:!0,component:z,props:t}),i.a.createElement(m.a,{path:"/about",exact:!0,component:g,props:t}),i.a.createElement(m.a,{component:Z}))},q=(a(96),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var l;Object(n.a)(this,a),(l=t.call(this,e)).dismissUpdateAlert=function(e){l.setState({showUpdateAlert:!1})};return l.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},l}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,null,i.a.createElement(h.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg"},i.a.createElement(h.a.Brand,{href:"/"},"Fresh or Rotten"),i.a.createElement(d.b,{to:"/about",className:"navbar-about"},"About FREZZ")),this.props.updateAvailable&&this.state.showUpdateAlert&&i.a.createElement("div",{style:{paddingTop:"10px"}},i.a.createElement(b,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert}))),i.a.createElement(p.a,null,i.a.createElement(K,null)))}}]),a}(o.Component)),G=Object(m.f)(q),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");H?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Q(t,e)})}}function Q(e,t){navigator.serviceWorker.register(e).then(function(e){function a(a){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA2-PWA."),t&&t.onUpdate&&t.onUpdate(e,a)}e.waiting&&e.active&&a(e.waiting),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?a(n):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var $=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={contentCached:!1,updateAvailable:!1},e.handleUpdate=function(t){var a=t.waiting;a&&a.postMessage({type:"SKIP_WAITING"}),e.setState({updateAvailable:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){J({onUpdate:this.handleUpdate})}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(G,{updateAvailable:this.state.updateAvailable}))}}]),a}(o.Component);u.a.render(i.a.createElement($,null),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.01f042c6.chunk.js.map