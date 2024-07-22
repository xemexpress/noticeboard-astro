import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BTCASzAr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"image":"./images/noticeboard.png","updatedAt":"2024-07-21T09:55:00+08:00"};
				const file = "/Users/jasonluo/Documents/astro/noticeboard/src/content/notices/first.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
