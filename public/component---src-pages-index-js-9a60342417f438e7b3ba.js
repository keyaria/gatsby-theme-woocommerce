(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(A,e,t){"use strict";t.r(e);t(20),t(218);var a=t(1),i=t(0),s=t.n(i),r=t(83),d=t(220),o=t.n(d),c=t(210),n=t(209),g=t(211),l=t(223),E=function(){return l.data.allWcProducts.nodes},f={name:"1nvf2ph",styles:"display:flex;justify-content:space-around;flex-wrap:wrap;"},B={name:"1p2cbqg",styles:"margin-bottom:50px;"},p={name:"1r4kg10",styles:"text-decoration:none;color:black;font-size:16px;img{margin-bottom:0;}h4{margin-bottom:5px;}.onSale{text-decoration:line-through;color:grey;}"},u={name:"gg4vpm",styles:"display:flex;justify-content:space-between;"},h=function(A){var e=A.product,t=e.imageFile.childImageSharp.fixed;return console.log(t),Object(a.a)("div",{css:B},Object(a.a)(r.a,{to:e.slug,css:p},Object(a.a)("h4",null,e.name),Object(a.a)(o.a,{fixed:t}),Object(a.a)("div",{css:u},Object(a.a)("span",{className:e.on_sale?"onSale":""},"Price: ",Object(a.a)(g.a,{price:e.price})),Object(a.a)("span",null,e.on_sale?Object(a.a)(s.a.Fragment,null,Object(a.a)("span",null,"Sale: "),Object(a.a)(g.a,{price:e.sale_price})):""))))};e.default=function(){var A=E();return console.log(A),Object(a.a)(c.a,null,Object(a.a)(n.a,{title:"Home"}),Object(a.a)("div",{css:f},A.map(function(A){return Object(a.a)(h,{key:A.id,product:A})})))}},218:function(A,e,t){"use strict";t(219)("fixed",function(A){return function(){return A(this,"tt","","")}})},219:function(A,e,t){var a=t(2),i=t(10),s=t(41),r=/"/g,d=function(A,e,t,a){var i=String(s(A)),d="<"+e;return""!==t&&(d+=" "+t+'="'+String(a).replace(r,"&quot;")+'"'),d+">"+i+"</"+e+">"};A.exports=function(A,e){var t={};t[A]=e(d),a(a.P+a.F*i(function(){var e=""[A]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",t)}},220:function(A,e,t){"use strict";t(15),t(16),t(6),t(81),t(108),t(218);var a=t(23);e.__esModule=!0,e.default=void 0;var i,s=a(t(82)),r=a(t(48)),d=a(t(147)),o=a(t(148)),c=a(t(0)),n=a(t(49)),g=function(A){var e=(0,o.default)({},A),t=e.resolutions,a=e.sizes,i=e.critical;return t&&(e.fixed=t,delete e.resolutions),a&&(e.fluid=a,delete e.sizes),i&&(e.loading="eager"),e.fluid&&(e.fluid=Q([].concat(e.fluid))),e.fixed&&(e.fixed=Q([].concat(e.fixed))),e},l=function(A){var e=A.fluid,t=A.fixed;return(e&&e[0]||t&&t[0]).src},E=Object.create({}),f=function(A){var e=g(A),t=l(e);return E[t]||!1},B="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,u=p&&window.IntersectionObserver,h=new WeakMap;function j(A){return A.map(function(A){var e=A.src,t=A.srcSet,a=A.srcSetWebp,i=A.media,s=A.sizes;return c.default.createElement(c.default.Fragment,{key:e},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:s}),c.default.createElement("source",{media:i,srcSet:t,sizes:s}))})}function Q(A){var e=[],t=[];return A.forEach(function(A){return(A.media?e:t).push(A)}),[].concat(e,t)}function b(A){return A.map(function(A){var e=A.src,t=A.media,a=A.tracedSVG;return c.default.createElement("source",{key:e,media:t,srcSet:a})})}function w(A){return A.map(function(A){var e=A.src,t=A.media,a=A.base64;return c.default.createElement("source",{key:e,media:t,srcSet:a})})}function Y(A,e){var t=A.srcSet,a=A.srcSetWebp,i=A.media,s=A.sizes;return"<source "+(e?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(e?a:t)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var N=function(A,e){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(A){A.forEach(function(A){if(h.has(A.target)){var e=h.get(A.target);(A.isIntersecting||A.intersectionRatio>0)&&(i.unobserve(A.target),h.delete(A.target),e())}})},{rootMargin:"200px"})),i);return t&&(t.observe(A),h.set(A,e)),function(){t.unobserve(A),h.delete(A)}},m=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",a=A.srcSet?'srcset="'+A.srcSet+'" ':"",i=A.title?'title="'+A.title+'" ':"",s=A.alt?'alt="'+A.alt+'" ':'alt="" ',r=A.width?'width="'+A.width+'" ':"",d=A.height?'height="'+A.height+'" ':"",o=A.crossOrigin?'crossorigin="'+A.crossOrigin+'" ':"",c=A.loading?'loading="'+A.loading+'" ':"",n=A.draggable?'draggable="'+A.draggable+'" ':"";return"<picture>"+A.imageVariants.map(function(A){return(A.srcSetWebp?Y(A,!0):"")+Y(A)}).join("")+"<img "+c+r+d+t+a+e+s+i+o+n+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=function(A){var e=A.src,t=A.imageVariants,a=A.generateSources,i=A.spreadProps,s=c.default.createElement(C,(0,o.default)({src:e},i));return t.length>1?c.default.createElement("picture",null,a(t),s):s},C=c.default.forwardRef(function(A,e){var t=A.sizes,a=A.srcSet,i=A.src,s=A.style,r=A.onLoad,n=A.onError,g=A.loading,l=A.draggable,E=(0,d.default)(A,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:t,srcSet:a,src:i},E,{onLoad:r,onError:n,ref:e,loading:g,draggable:l,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});C.propTypes={style:n.default.object,onError:n.default.func,onLoad:n.default.func};var x=function(A){function e(e){var t;(t=A.call(this,e)||this).seenBefore=p&&f(e),t.isCritical="eager"===e.loading||e.critical,t.addNoScript=!(t.isCritical&&!e.fadeIn),t.useIOSupport=!B&&u&&!t.isCritical&&!t.seenBefore;var a=t.isCritical||p&&(B||!t.useIOSupport);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&e.fadeIn},t.imageRef=c.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,s.default)(t)),t.handleRef=t.handleRef.bind((0,s.default)(t)),t}(0,r.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(A){var e=this;this.useIOSupport&&A&&(this.cleanUpListeners=N(A,function(){var A=f(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:A,imgCached:!!e.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=g(A),t=l(e),E[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=g(this.props),e=A.title,t=A.alt,a=A.className,i=A.style,s=void 0===i?{}:i,r=A.imgStyle,d=void 0===r?{}:r,n=A.placeholderStyle,l=void 0===n?{}:n,E=A.placeholderClassName,f=A.fluid,B=A.fixed,p=A.backgroundColor,u=A.durationFadeIn,h=A.Tag,Q=A.itemProp,Y=A.loading,N=A.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:x?1:0,transition:I?"opacity "+u+"ms":"none"},d),S="boolean"==typeof p?"lightgray":p,P={transitionDelay:u+"ms"},G=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&P,{},d,{},l),M={title:e,alt:this.state.isVisible?"":t,style:G,className:E};if(f){var v=f,y=v[0];return c.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(y.srcSet)},c.default.createElement(h,{style:{width:"100%",paddingBottom:100/y.aspectRatio+"%"}}),S&&c.default.createElement(h,{title:e,style:(0,o.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),y.base64&&c.default.createElement(D,{src:y.base64,spreadProps:M,imageVariants:v,generateSources:w}),y.tracedSVG&&c.default.createElement(D,{src:y.tracedSVG,spreadProps:M,imageVariants:v,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,j(v),c.default.createElement(C,{alt:t,title:e,sizes:y.sizes,src:y.src,crossOrigin:this.props.crossOrigin,srcSet:y.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:Q,loading:Y,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:t,title:e,loading:Y},y,{imageVariants:v}))}}))}if(B){var O=B,F=O[0],k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},s);return"inherit"===s.display&&delete k.display,c.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},S&&c.default.createElement(h,{title:e,style:(0,o.default)({backgroundColor:S,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},I&&P)}),F.base64&&c.default.createElement(D,{src:F.base64,spreadProps:M,imageVariants:O,generateSources:w}),F.tracedSVG&&c.default.createElement(D,{src:F.tracedSVG,spreadProps:M,imageVariants:O,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,j(O),c.default.createElement(C,{alt:t,title:e,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:Q,loading:Y,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:t,title:e,loading:Y},F,{imageVariants:O}))}}))}return null},e}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=n.default.shape({width:n.default.number.isRequired,height:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string,media:n.default.string}),R=n.default.shape({aspectRatio:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,sizes:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string,media:n.default.string});x.propTypes={resolutions:I,sizes:R,fixed:n.default.oneOfType([I,n.default.arrayOf(I)]),fluid:n.default.oneOfType([R,n.default.arrayOf(R)]),fadeIn:n.default.bool,durationFadeIn:n.default.number,title:n.default.string,alt:n.default.string,className:n.default.oneOfType([n.default.string,n.default.object]),critical:n.default.bool,crossOrigin:n.default.oneOfType([n.default.string,n.default.bool]),style:n.default.object,imgStyle:n.default.object,placeholderStyle:n.default.object,placeholderClassName:n.default.string,backgroundColor:n.default.oneOfType([n.default.string,n.default.bool]),onLoad:n.default.func,onError:n.default.func,onStartLoad:n.default.func,Tag:n.default.string,itemProp:n.default.string,loading:n.default.oneOf(["auto","lazy","eager"]),draggable:n.default.bool};var S=x;e.default=S},223:function(A){A.exports=JSON.parse('{"data":{"allWcProducts":{"nodes":[{"id":"024c5063-d484-55a8-b6bf-cebd39544ef6","name":"Vneck Tshirt","slug":"vneck-tee","status":"publish","price":"18","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/vneck-tee.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB7MqZ5vWKzAA//8QAHBAAAgAHAAAAAAAAAAAAAAAAAQIAEBESEyAh/9oACAEBAAEFAiaRkkw4pF2n/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQIRIP/aAAgBAwEBPwGIVj//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwFY/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEQIDH/2gAIAQEABj8CMlV//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECAxIf/aAAgBAQABPyEzbAr0GCXZyM9tf//aAAwDAQACAAMAAAAQ6/8A/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxBSWP/EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/EEEI/8QAGxABAAICAwAAAAAAAAAAAAAAAQARMVEgIXH/2gAIAQEAAT8Qsj4GWNLMaVqDYO4mXIUdQCo944//2Q==","width":250,"height":250,"src":"/static/ba94b6622c09f01c94d27b78b51bd984/4d406/vneck-tee.jpg","srcSet":"/static/ba94b6622c09f01c94d27b78b51bd984/4d406/vneck-tee.jpg 1x,\\n/static/ba94b6622c09f01c94d27b78b51bd984/4cd1e/vneck-tee.jpg 1.5x,\\n/static/ba94b6622c09f01c94d27b78b51bd984/32ee9/vneck-tee.jpg 2x"}}}},{"id":"b09e72a9-69cb-5c4b-8008-bb3dcbd70b17","name":"Tshirt","slug":"tshirt","status":"publish","price":"18","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/tshirt.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtTWaagAA//8QAGRAAAwADAAAAAAAAAAAAAAAAAAEREBIg/9oACAEBAAEFAjbDKrx//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFhAAAwAAAAAAAAAAAAAAAAAAADAx/9oACAEBAAY/AiI//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECAhUf/aAAgBAQABPyFah6RgFdggNf/aAAwDAQACAAMAAAAQj/8A/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEgMSFBUf/aAAgBAQABPxATzEboD1INlxjRo3LiC31j/9k=","width":250,"height":250,"src":"/static/4297b17ea8ef56fa18b945f49eec8f60/4d406/tshirt.jpg","srcSet":"/static/4297b17ea8ef56fa18b945f49eec8f60/4d406/tshirt.jpg 1x,\\n/static/4297b17ea8ef56fa18b945f49eec8f60/4cd1e/tshirt.jpg 1.5x,\\n/static/4297b17ea8ef56fa18b945f49eec8f60/32ee9/tshirt.jpg 2x"}}}},{"id":"c7e8119d-00f1-5a04-9028-b23d5ce1e922","name":"Polo","slug":"polo","status":"publish","price":"20","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/polo.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB7U9yubiUAD//xAAaEAACAgMAAAAAAAAAAAAAAAABAgARECAx/9oACAEBAAEFAiage8MLC90//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAECAxgf/aAAgBAQABPyEAMwewVcGImP8A/9oADAMBAAIAAwAAABCL/wD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxBW4//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/ECP/xAAdEAEBAAEEAwAAAAAAAAAAAAABEQAQICExQWGB/9oACAEBAAE/EPgA94yiyzu6Elt5EcrxCLevO3//2Q==","width":250,"height":250,"src":"/static/ecd2b32d138bd1bd43c5f5358b18e603/4d406/polo.jpg","srcSet":"/static/ecd2b32d138bd1bd43c5f5358b18e603/4d406/polo.jpg 1x,\\n/static/ecd2b32d138bd1bd43c5f5358b18e603/4cd1e/polo.jpg 1.5x,\\n/static/ecd2b32d138bd1bd43c5f5358b18e603/32ee9/polo.jpg 2x"}}}},{"id":"e8544c08-d8cc-5523-8eda-d0d1f731177b","name":"Long Sleeve Tee","slug":"long-sleeve-tee","status":"publish","price":"25","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/long-sleeve-tee.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAB7MVaNAUAB//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhAREiD/2gAIAQEAAQUCJpah/X//xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPwFj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAEDFRgf/aAAgBAQABPyH2QdhVgHkYRgylX//aAAwDAQACAAMAAAAQnzj/AP/EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/EFDH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAARExABAhUXGBwf/aAAgBAQABPxATUqjGXj8GdCEsSwsB4+mCAdGgFAetf//Z","width":250,"height":250,"src":"/static/d32981a126ee7a8cd9179cbb8cb657a4/4d406/long-sleeve-tee.jpg","srcSet":"/static/d32981a126ee7a8cd9179cbb8cb657a4/4d406/long-sleeve-tee.jpg 1x,\\n/static/d32981a126ee7a8cd9179cbb8cb657a4/4cd1e/long-sleeve-tee.jpg 1.5x,\\n/static/d32981a126ee7a8cd9179cbb8cb657a4/32ee9/long-sleeve-tee.jpg 2x"}}}},{"id":"60884fc0-c967-5774-9448-8b291cd11908","name":"Hoodie","slug":"hoodie","status":"publish","price":"42","on_sale":true,"sale_price":"42","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/hoodie.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAe3XLPNahcAAf//EABkQAAMAAwAAAAAAAAAAAAAAAAABAhEgMv/aAAgBAQABBQIVZZRPWn//xAAWEQEBAQAAAAAAAAAAAAAAAAABICH/2gAIAQMBAT8BDI//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwFY/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEQESD/2gAIAQEABj8CKlZ//8QAGRABAQADAQAAAAAAAAAAAAAAAREAECEg/9oACAEBAAE/IcNxeapAL1yEDz//2gAMAwEAAgADAAAAEMv/AP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QNSx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAECAQE/EIIY/8QAGxABAAICAwAAAAAAAAAAAAAAARFBABAgITH/2gAIAQEAAT8Qwbg3b0PCAMUZJvsZUqOP/9k=","width":250,"height":250,"src":"/static/fd4465acc1b8780b8030042f8e33261d/4d406/hoodie.jpg","srcSet":"/static/fd4465acc1b8780b8030042f8e33261d/4d406/hoodie.jpg 1x,\\n/static/fd4465acc1b8780b8030042f8e33261d/4cd1e/hoodie.jpg 1.5x,\\n/static/fd4465acc1b8780b8030042f8e33261d/32ee9/hoodie.jpg 2x"}}}},{"id":"988be9af-8d74-5a7b-9f36-0156870e167b","name":"Hoodie with Zipper","slug":"hoodie-with-zipper","status":"publish","price":"45","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/hoodie-with-zipper.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB7c0WdQUAD//EABgQAAMBAQAAAAAAAAAAAAAAAAABAhEg/9oACAEBAAEFAib1li5//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABYQAAMAAAAAAAAAAAAAAAAAABAgYf/aAAgBAQAGPwIxv//EABwQAAEDBQAAAAAAAAAAAAAAAAEAEDEgIUFRof/aAAgBAQABPyE2CAYNDpZbmn//2gAMAwEAAgADAAAAEAv4/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxBQx//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB4QAQEAAgEFAQAAAAAAAAAAAAERECEAMUFxkaHw/9oACAEBAAE/EEIrA4GdJ+nnBZUYrHzkCjVQ3vozA6B6x//Z","width":250,"height":250,"src":"/static/585ec40ebf97ce9f38bac62edce87daf/4d406/hoodie-with-zipper.jpg","srcSet":"/static/585ec40ebf97ce9f38bac62edce87daf/4d406/hoodie-with-zipper.jpg 1x,\\n/static/585ec40ebf97ce9f38bac62edce87daf/4cd1e/hoodie-with-zipper.jpg 1.5x,\\n/static/585ec40ebf97ce9f38bac62edce87daf/32ee9/hoodie-with-zipper.jpg 2x"}}}},{"id":"05d36284-0701-59a1-9943-2373904106b1","name":"Hoodie with Pocket","slug":"hoodie-with-pocket","status":"publish","price":"35","on_sale":true,"sale_price":"35","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/hoodie-with-pocket.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7dcs6agAAf/EABkQAAMAAwAAAAAAAAAAAAAAAAABAhEgIf/aAAgBAQABBQIVZZRPa0//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAWEAEBAQAAAAAAAAAAAAAAAAABADD/2gAIAQEABj8Ckw//xAAaEAEBAAIDAAAAAAAAAAAAAAABEQAhECBB/9oACAEBAAE/IcMwdcUkLt8yADr/AP/aAAwDAQACAAMAAAAQz/8A/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAcEAEAAQQDAAAAAAAAAAAAAAABABARMUEgUWH/2gAIAQEAAT8QgxDu4aAOAC6EQciN7nnfH//Z","width":250,"height":250,"src":"/static/bce652a2af5958a28d8a6dfdbf84e92a/4d406/hoodie-with-pocket.jpg","srcSet":"/static/bce652a2af5958a28d8a6dfdbf84e92a/4d406/hoodie-with-pocket.jpg 1x,\\n/static/bce652a2af5958a28d8a6dfdbf84e92a/4cd1e/hoodie-with-pocket.jpg 1.5x,\\n/static/bce652a2af5958a28d8a6dfdbf84e92a/32ee9/hoodie-with-pocket.jpg 2x"}}}},{"id":"c5655142-621f-51eb-96a4-cc6f0584dbc2","name":"Hoodie with Logo","slug":"hoodie-with-logo","status":"publish","price":"45","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/hoodie-with-logo.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7dZys2EAAf/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhEgMf/aAAgBAQABBQIUrYxdx//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAQACAwAAAAAAAAAAAAAAAAEAURAgMf/aAAgBAQABPyGAhWOJS6//2gAMAwEAAgADAAAAEIP/AP8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAGhABAQADAQEAAAAAAAAAAAAAAREAITEQIP/aAAgBAQABPxDCCN8WgLtjMAkRu+cnz//Z","width":250,"height":250,"src":"/static/34ae00519ec366fe29b48791a4163831/4d406/hoodie-with-logo.jpg","srcSet":"/static/34ae00519ec366fe29b48791a4163831/4d406/hoodie-with-logo.jpg 1x,\\n/static/34ae00519ec366fe29b48791a4163831/4cd1e/hoodie-with-logo.jpg 1.5x,\\n/static/34ae00519ec366fe29b48791a4163831/32ee9/hoodie-with-logo.jpg 2x"}}}},{"id":"9e2b25e7-9f25-5023-96c2-0dd3328e8972","name":"Sunglasses","slug":"sunglasses","status":"publish","price":"90","on_sale":false,"sale_price":"","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/sunglasses.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7aqCaAAAf//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMQEiD/2gAIAQEAAQUCy6bxKyOf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGxAAAgEFAAAAAAAAAAAAAAAAAREAAhASICH/2gAIAQEABj8CuOpQ5VPX/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAMRAgIUH/2gAIAQEAAT8hJVy8eyY+REOL4K1//9oADAMBAAIAAwAAABB//wD/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB0QAQEAAgEFAAAAAAAAAAAAAAERACFhECAxUXH/2gAIAQEAAT8QAVAe1mCCiJx0qVm9teMASdFofZ57f//Z","width":250,"height":250,"src":"/static/551956fe0c247553510fcf0a57e1c031/4d406/sunglasses.jpg","srcSet":"/static/551956fe0c247553510fcf0a57e1c031/4d406/sunglasses.jpg 1x,\\n/static/551956fe0c247553510fcf0a57e1c031/4cd1e/sunglasses.jpg 1.5x,\\n/static/551956fe0c247553510fcf0a57e1c031/32ee9/sunglasses.jpg 2x"}}}},{"id":"ddbe4e6c-5396-55a4-8521-b6fc2bbc8eba","name":"Cap","slug":"cap","status":"publish","price":"16","on_sale":true,"sale_price":"16","images":[{"src":"http://woo.gkdevil.in/wp-content/uploads/2019/08/cap.jpg"}],"imageFile":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7cmMbBYAB//EABkQAAEFAAAAAAAAAAAAAAAAAAEAEBEgIf/aAAgBAQABBQJyJW1//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BY//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAgMSH/2gAIAQEAAT8hWuwR5hoC9+a//9oADAMBAAIAAwAAABBz/wD/AP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPxAhj//EABcRAQEBAQAAAAAAAAAAAAAAABEBICH/2gAIAQIBAT8QtIcx/8QAHBABAAIBBQAAAAAAAAAAAAAAAREhABAgMUFR/9oACAEBAAE/EAEqDOVToAQle4KsRUPe3//Z","width":250,"height":250,"src":"/static/2e230635266f70a225f8053dafba180c/4d406/cap.jpg","srcSet":"/static/2e230635266f70a225f8053dafba180c/4d406/cap.jpg 1x,\\n/static/2e230635266f70a225f8053dafba180c/4cd1e/cap.jpg 1.5x,\\n/static/2e230635266f70a225f8053dafba180c/32ee9/cap.jpg 2x"}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9a60342417f438e7b3ba.js.map