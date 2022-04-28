export interface VueFile {
	vue?: boolean;
	src?: boolean;
	type?: "script" | "template" | "style" | "custom";
	index?: number;
	lang?: string;
	raw?: boolean;
	from?: string;
	isJsx?: boolean;
}

export function parseVueFile(filePath: string) {
	const [filename] = filePath.split("?", 2);

	const url = new URL(filePath, "http://domain.inspector");

	const query = Object.fromEntries(url.searchParams.entries()) as VueFile;

	if (query.vue) {
		query.vue = true;
	}

	if (query.src) {
		query.src = true;
	}

	if (query.index) {
		query.index = +query.index;
	}

	if (query.raw) {
		query.raw = true;
	}

	if (query.hasOwnProperty("lang.tsx") || query.hasOwnProperty("lang.jsx")) {
		query.isJsx = true;
	}

	return {
		filename,
		query,
	};
}
