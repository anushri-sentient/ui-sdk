// Gen UI Sanitizer & Attribute Coercion
// - Strips unsafe tags/attrs
// - Enforces allow-list from GenUIRegistry

(() => {
    // Basic HTML parser using a detached DOM
    function parseHTML(html) {
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        return tpl.content;
    }

    function isSafeUrl(value) {
        if (typeof value !== 'string') return false;
        try {
            const u = new URL(value, window.location.origin);
            if (u.protocol === 'javascript:') return false;
            return true;
        } catch (_) {
            return true; // treat as relative/safe text
        }
    }

    function sanitizeNode(node) {
        const { allowedTags, allowedAttrsFor } = window.GenUIRegistry;
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null);
        const toRemove = [];
        while (walker.nextNode()) {
            const el = walker.currentNode;
            const tag = el.tagName.toLowerCase();
            if (!allowedTags.includes(tag)) {
                // Allow non-component HTML primitives inside components
                if (!tag.startsWith('ui-')) continue;
                toRemove.push(el);
                continue;
            }
            // Remove inline event handlers and disallowed attrs
            const allowed = allowedAttrsFor(tag);
            [...el.attributes].forEach(attr => {
                const name = attr.name;
                const value = attr.value;
                if (name.startsWith('on')) { el.removeAttribute(name); return; }
                if (!allowed.has(name)) { el.removeAttribute(name); return; }
                if ((name === 'href' || name === 'src') && !isSafeUrl(value)) { el.removeAttribute(name); return; }
            });
        }
        toRemove.forEach(n => n.remove());
        return node;
    }

    function sanitizeHTML(html) {
        const frag = parseHTML(html);
        sanitizeNode(frag);
        return frag;
    }

    window.GenUISanitizer = { sanitizeHTML };
})();


