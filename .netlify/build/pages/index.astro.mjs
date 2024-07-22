/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, F as Fragment, e as renderSlot, f as renderHead, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent } from '../chunks/astro/server_BTCASzAr.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getImage, $ as $$Image } from '../chunks/_astro_assets_BtViJMti.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { A as AstroError, U as UnknownContentCollectionError } from '../chunks/astro/assets-service_abgooGpH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$9 = createAstro("http://localhost:3000");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("http://localhost:3000");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("http://localhost:3000");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:3000");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:3000");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:3000");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:3000");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:3000");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-seo/src/SEO.astro", void 0);

const logo = new Proxy({"src":"/_astro/noticeboard-logo.DFrmnmea.png","width":49,"height":49,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jasonluo/Documents/astro/noticeboard/src/content/noticeboard-logo.png";
							}
							
							return target[name];
						}
					});

const OUR_BRAND = {
  NAME: "Noticeboard",
  COPYRIGHT: "2024",
  LOGO: "../content/noticeboard-logo.png",
  get DESCRIPTION() {
    return `Welcome to our digital ${this.NAME}`;
  }
};


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro("http://localhost:3000");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/jasonluo/Documents/astro/noticeboard/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const defaultMessage = encodeURIComponent(
    `\u60A8\u597D\uFF01\u6211\u662F\u5E1D\u5CF0\u7687\u6BBF\u7684\u4F4F\u6236\u3002\u6211\u5C0D\u7DB2\u4E0A\u7248\u300C\u4F4F\u6236\u8CC7\u8A0A\u5929\u5730\u300D\u6709\u4EE5\u4E0B\u8A55\u8AD6/\u5EFA\u8B70/\u53CD\u994B\uFF1A`
  );
  return renderTemplate`${maybeRenderHead()}<header class="bg-brand-primary text-white shadow py-3 px-4"> <div class="max-w-7xl mx-auto"> <div class="flex flex-col space-y-3 sm:space-y-0"> <div class="flex justify-between items-center"> <h2 class="text-lg font-semibold"> ${OUR_BRAND.NAME} - MVP
</h2> <a${addAttribute(`https://wa.me/85254886130?text=${defaultMessage}`, "href")} class="flex items-center justify-center bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors duration-300 py-1 px-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ml-2" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "class": "w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" })} <span class="hidden sm:inline">按此處提供意見</span> <span class="sm:hidden">按此提供意見</span> </a> </div> <div> <p class="text-sm leading-relaxed max-w-prose">
歡迎使用網上版「住戶資訊天地」。這個平台由住戶自發建立，旨在為大家提供更多便利。
</p> <p class="text-sm leading-relaxed max-w-prose mt-2">
如果您有任何建議或想參與貢獻此計劃，請與我聯絡。
</p> </div> </div> </div> </header>`;
}, "/Users/jasonluo/Documents/astro/noticeboard/src/components/Header.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/jasonluo/Documents/astro/noticeboard/src/components/Main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white shadow mt-8"> <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"> <p class="text-center text-sm text-gray-500">
&copy; ${OUR_BRAND.COPYRIGHT} ${OUR_BRAND.NAME}. All rights reserved.
</p> </div> </footer>`;
}, "/Users/jasonluo/Documents/astro/noticeboard/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:3000");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "The Hermitage Noticeboard - \u5927\u89D2\u5480 The Hermitage \u5C4B\u82D1\u516C\u544A\u6B04",
    type = "website",
    image
  } = Astro2.props;
  const brandedTitle = title.toLowerCase().includes(OUR_BRAND.NAME.toLowerCase()) ? title : `${title} | ${OUR_BRAND.NAME}`;
  const finalImageSrc = (await getImage({
    src: image || logo,
    width: 1200,
    height: 630,
    format: "jpg",
    quality: 90,
    fit: "contain",
    background: "white"
  })).src;
  const faviconSrcPNG = (await getImage({
    src: logo,
    width: 32,
    height: 32,
    format: "png",
    quality: 90
  })).src;
  return renderTemplate(_a || (_a = __template(['<html lang="zh-HK"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png"', ">", '<!-- Below: Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-CFE6Z4CN9H"><\/script><script type="text/partytown">\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n                dataLayer.push(arguments);\n            }\n            gtag("js", new Date());\n\n            gtag("config", "G-CFE6Z4CN9H");\n        <\/script><!-- Above: Google tag (gtag.js) -->', '</head> <body class="bg-gray-100 text-gray-900"> ', " ", " ", " </body></html>"])), addAttribute(faviconSrcPNG, "href"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      title,
      type,
      image: finalImageSrc,
      url: Astro2.url
    },
    optional: {
      description,
      siteName: OUR_BRAND.NAME
    },
    image: {
      url: finalImageSrc,
      alt: description
    }
  }, "twitter": {
    card: "summary_large_image",
    site: Astro2.url.href,
    creator: "@xemexpress",
    title: brandedTitle,
    description,
    image: finalImageSrc,
    imageAlt: description
  }, "extend": {
    link: [{ rel: "icon", href: OUR_BRAND.LOGO }]
  } }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jasonluo/Documents/astro/noticeboard/src/layouts/Layout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/notices/first.md": () => import('../chunks/first_CpyCjmUq.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"notices":{"type":"content","entries":{"first":"/src/content/notices/first.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/notices/first.md": () => import('../chunks/first_DU_JuM63.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = `${OUR_BRAND.NAME} - \u4F4F\u6236\u8CC7\u8A0A\u5929\u5730`;
  const description = OUR_BRAND.DESCRIPTION;
  const noticeboard = await getEntryBySlug("notices", "first");
  const { image, updatedAt } = noticeboard.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-8"> <h1 class="text-2xl font-semibold mb-6 text-center text-brand-primary">
住戶資訊天地
</h1> <div class="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-brand-primary"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-auto", "src": image, "alt": "The Hermitage Noticeboard", "loading": "eager" })} </div> <p class="mt-4 text-sm text-gray-600 text-center">
照片更新時間: ${updatedAt.toLocaleString("zh-HK", {
    timeZone: "Asia/Hong_Kong"
  })} </p> </div> ` })}`;
}, "/Users/jasonluo/Documents/astro/noticeboard/src/pages/index.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/noticeboard/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };