// Minimal UI Components core (no ImageService)
// - Global registry for component init
// - Streaming ops renderer
// - Simple state store and default actions

(() => {
    const componentRegistry = new Map();

    function register(name, initFn, schema) {
        componentRegistry.set(name, { initFn, schema });
    }

    function init() {
        // Prefer registered components if any, else call known init functions
        if (componentRegistry.size > 0) {
            componentRegistry.forEach(({ initFn }) => {
                try { typeof initFn === 'function' && initFn(); } catch (e) { console.error(`Init failed for ${name}`, e); }
            });
            return;
        }
        const initFunctions = [
            'initAvatars', 'initBadges', 'initCards', 'initChips', 'initDividers',
            'initLists', 'initTables', 'initAlerts', 'initNotifications',
            'initAccordions', 'initCarousels', 'initQuizzes', 'initResources',
            'initCodeBlocks', 'initCitations', 'initKeypoints', 'initSuggestions',
            'initTimelines', 'initScrollytelling', 'initLyric', 'initCardStacks',
            'initSpotlights', 'initTickers', 'initTabs', 'initEnhancedMaps'
        ];
        initFunctions.forEach(fn => {
            try { if (typeof window[fn] === 'function') window[fn](); } catch (e) { console.error(`Error calling ${fn}:`, e); }
        });
    }

    // Tiny state store for bindings
    const listeners = new Set();
    const state = {};
    function get(path) {
        return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), state);
    }
    function set(path, value) {
        const keys = path.split('.');
        let cursor = state;
        for (let i = 0; i < keys.length - 1; i++) {
            const k = keys[i];
            if (typeof cursor[k] !== 'object' || cursor[k] === null) cursor[k] = {};
            cursor = cursor[k];
        }
        cursor[keys[keys.length - 1]] = value;
        listeners.forEach(l => { try { l({ path, value }); } catch (e) {} });
    }
    function subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }

    // Streaming ops
    function applyOps(ops = []) {
        ops.forEach(op => {
            try {
                switch (op.op) {
                    case 'replace': {
                        const el = document.querySelector(op.selector);
                        if (el) el.outerHTML = op.html;
                        break;
                    }
                    case 'append': {
                        const el = document.querySelector(op.selector);
                        if (el) el.insertAdjacentHTML('beforeend', op.html);
                        break;
                    }
                    case 'prepend': {
                        const el = document.querySelector(op.selector);
                        if (el) el.insertAdjacentHTML('afterbegin', op.html);
                        break;
                    }
                    case 'remove': {
                        const el = document.querySelector(op.selector);
                        if (el) el.remove();
                        break;
                    }
                    case 'setText': {
                        const el = document.querySelector(op.selector);
                        if (el) el.textContent = op.text ?? '';
                        break;
                    }
                    case 'setAttr': {
                        const el = document.querySelector(op.selector);
                        if (el && op.name) el.setAttribute(op.name, op.value ?? '');
                        break;
                    }
                    case 'removeAttr': {
                        const el = document.querySelector(op.selector);
                        if (el && op.name) el.removeAttribute(op.name);
                        break;
                    }
                    default:
                        console.warn('Unknown op', op);
                }
            } catch (e) { console.error('applyOps error', op, e); }
        });
    }

    // Default actions
    const actions = {
        open_url: ({ url, target = '_blank' }) => { if (url) window.open(url, target, 'noopener'); },
        copy: async ({ text }) => { try { await navigator.clipboard.writeText(text || ''); } catch (e) { console.error('copy failed', e); } },
        mutate_state: ({ path, value }) => set(path, value),
        focus: ({ selector }) => { const el = document.querySelector(selector); if (el) el.focus(); },
        scrollIntoView: ({ selector, behavior = 'smooth' }) => { const el = document.querySelector(selector); if (el) el.scrollIntoView({ behavior }); }
    };

    window.UIComponents = { register, init, applyOps, store: { get, set, subscribe }, actions };
})();


