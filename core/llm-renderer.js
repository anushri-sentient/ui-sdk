// LLM → UI renderer
// - renderFromText(container, text): tolerant HTML input
// - createStreamRenderer(container): incremental appender

(() => {
    const { ensureComponentsDefined } = window.GenUIRegistry;
    const { sanitizeHTML } = window.GenUISanitizer;

    async function renderFromText(container, text) {
        if (!container) return;
        await ensureComponentsDefined();
        const frag = sanitizeHTML(text);
        container.appendChild(frag);
    }

    // Minimal streaming parser: appends chunks, renders on balanced tags
    function createStreamRenderer(container) {
        let buffer = '';
        let depth = 0;
        const openRe = /<([a-zA-Z0-9\-]+)(\s[^>]*)?>/g;
        const closeRe = /<\/([a-zA-Z0-9\-]+)\s*>/g;
        return async (chunk) => {
            buffer += chunk;
            // track depth heuristically to find safe cut points
            for (const _ of buffer.matchAll(openRe)) depth++;
            for (const _ of buffer.matchAll(closeRe)) depth = Math.max(0, depth - 1);
            if (depth === 0 && buffer.trim()) {
                await renderFromText(container, buffer);
                buffer = '';
            }
        };
    }

    window.GenUIRenderer = { renderFromText, createStreamRenderer };
})();


