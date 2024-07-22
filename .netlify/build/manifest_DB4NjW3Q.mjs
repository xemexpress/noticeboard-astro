import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_BTCASzAr.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jasonluo/Documents/astro/noticeboard/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[]).concat([\"dataLayer.push\"])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[]).concat([\"dataLayer.push\"])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.YwyGXy3H.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:3000","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jasonluo/Documents/astro/noticeboard/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DB4NjW3Q.mjs","/Users/jasonluo/Documents/astro/noticeboard/src/content/notices/first.md?astroContentCollectionEntry=true":"chunks/first_CpyCjmUq.mjs","/Users/jasonluo/Documents/astro/noticeboard/src/content/notices/first.md?astroPropagatedAssets":"chunks/first_DU_JuM63.mjs","/Users/jasonluo/Documents/astro/noticeboard/src/content/notices/first.md":"chunks/first_Bb5sj6Yk.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/noticeboard-logo.DFrmnmea.png","/_astro/noticeboard.CCbzGdW_.png","/_astro/index.YwyGXy3H.css","/favicon.svg","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
