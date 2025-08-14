// Gen UI Asset Registry
// - Allowed tags and common attributes per tag
// - Lazy loader for component bundle (simple-components.js)
//
// Notes:
// - We intentionally keep attribute specs permissive but safe: we filter out
//   event handler attrs (on*) and javascript: URLs in the sanitizer.
// - Components are implemented as Web Components in components/simple-components.js.

(() => {
    const ALLOWED_TAGS = [
        'ui-card', 'ui-badge', 'ui-avatar', 'ui-chips', 'ui-list', 'ui-divider', 'ui-table',
        'ui-accordion', 'ui-carousel', 'ui-quiz', 'ui-keypoints', 'ui-timeline', 'ui-resources',
        'ui-code-block', 'ui-suggestions', 'ui-scrollytelling', 'ui-lyric', 'ui-card-stack',
        'ui-spotlight', 'ui-ticker', 'ui-card-swiper', 'ui-calendar', 'ui-alert', 'ui-notification',
        'ui-map', 'ui-enhanced-map', 'ui-dynamic-map', 'ui-media-player', 'ui-tabs'
    ];

    // Minimal attribute allow-list per tag (non-exhaustive; sanitized later)
    const COMMON_ATTRS = ['class', 'id', 'designVariant'];
    const STRING_ATTRS = ['title', 'subtitle', 'content', 'variant', 'theme'];
    const JSON_ATTRS = ['items', 'lines', 'resources', 'cards', 'tabs', 'data', 'tabsData'];
    const NUM_ATTRS = ['interval', 'zoom'];
    const MAP_ATTRS = ['locations', 'center', 'height', 'showMarkers', 'showRoutes', 'routeColor', 'markerColor',
        'mainLocations', 'nearbyLocations', 'showDirections', 'showNearbyMarkers', 'showTraffic', 'showPublicTransport',
        'mainMarkerColor', 'nearbyMarkerColor'];

    const TAG_ATTRS = new Map(ALLOWED_TAGS.map(tag => [
        tag,
        new Set([ ...COMMON_ATTRS, ...STRING_ATTRS, ...JSON_ATTRS, ...NUM_ATTRS, ...MAP_ATTRS ])
    ]));

    async function ensureComponentsDefined() {
        // If any well-known tag is already defined, assume bundle is loaded
        if (customElements.get('ui-card')) return;
        await loadComponentBundle();
        // Wait for a few key elements to be defined
        try { await customElements.whenDefined('ui-card'); } catch (_) {}
    }

    let bundlePromise = null;
    function loadComponentBundle() {
        if (bundlePromise) return bundlePromise;
        bundlePromise = new Promise((resolve, reject) => {
            const existing = document.querySelector('script[data-ui-bundle]');
            if (existing) { resolve(); return; }
            const s = document.createElement('script');
            s.type = 'module';
            s.src = '../components/simple-components.js';
            s.dataset.uiBundle = 'true';
            s.onload = () => resolve();
            s.onerror = (e) => reject(e);
            document.head.appendChild(s);
        });
        return bundlePromise;
    }

    window.GenUIRegistry = {
        allowedTags: ALLOWED_TAGS,
        allowedAttrsFor(tag) { return TAG_ATTRS.get(tag) || new Set(COMMON_ATTRS); },
        ensureComponentsDefined,
        loadComponentBundle
    };
})();


