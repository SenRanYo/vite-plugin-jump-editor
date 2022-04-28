import type { Plugin } from "vite";
import { parseVueFile } from "./utils";
import { compileSFCTemplate } from "./compiler";

function VitePluginJumpEditor(): Plugin {
	return {
		name: "vite-plugin-vue-jump-editor",
		enforce: "pre",
		apply: "serve",
		transform(code, id) {
			const { filename, query } = parseVueFile(id);

			const isJsx = filename.endsWith(".jsx") || filename.endsWith(".tsx") || (filename.endsWith(".vue") && query.isJsx);
			const isTpl = filename.endsWith(".vue") && query.type !== "style";

			if (isJsx || isTpl) {
				compileSFCTemplate({ code, id: filename, type: isJsx ? "jsx" : "template" }).then((res) => {
					console.log(res);
				});
			}

			if (isJsx || isTpl) return compileSFCTemplate({ code, id: filename, type: isJsx ? "jsx" : "template" });

			return code;
		},
	};
}

export default VitePluginJumpEditor;
