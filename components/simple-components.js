// Simple Components API - Making UI components easier to use
// This provides a cleaner, more intuitive way to create components

class SimpleComponents {
    constructor() {
        this.init();
    }

    init() {
        // Auto-initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Register all components
        this.registerComponents();
        
        // Add global helper functions
        window.UI = this;
        
        console.log('🎨 Simple Components API loaded! Use UI.card(), UI.table(), etc.');
    }

    registerComponents() {
        // Register custom elements with better defaults
        this.registerCard();
        this.registerTable();
        this.registerAlert();
        this.registerBadge();
        this.registerAvatar();
        this.registerChips();
        this.registerAccordion();
        this.registerCardSwiper();
        this.registerCalendar();
        this.registerMediaPlayer();
        this.registerLyric();
        this.registerSpotlight();
        this.registerList();
        this.registerDivider();
        this.registerTabs();
        this.registerMap();
        this.registerDynamicMap();
        this.registerEnhancedMap();
        this.registerCarousel();
        this.registerQuiz();
        this.registerKeypoints();
        this.registerTimeline();
        this.registerResources();
        this.registerCodeBlock();
        this.registerSuggestions();
        this.registerScrollytelling();
        this.registerCardStack();
        this.registerTicker();
        this.registerNotification();
    }

    // Card Component - Simplified API
    card(options = {}) {
        const defaults = {
            title: 'Card Title',
            subtitle: '',
            image: 'https://picsum.photos/400/250',
            content: 'Card content goes here...',
            actionText: 'Learn More',
            actionLink: '#',
            variant: 'default',
            size: 'medium',
            badge: '',
            rating: null,
            features: []
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-card 
                title="${config.title}"
                subtitle="${config.subtitle}"
                image="${config.image}"
                content="${config.content}"
                actionText="${config.actionText}"
                actionLink="${config.actionLink}"
                variant="${config.variant}"
                size="${config.size}"
                ${config.badge ? `badge="${config.badge}"` : ''}
                ${config.rating ? `rating="${config.rating}"` : ''}
                ${config.features.length > 0 ? `features="${config.features.join(',')}"` : ''}
            ></ui-card>
        `;
    }

    // Table Component - Simplified API
    table(data = [], options = {}) {
        const defaults = {
            striped: true,
            hoverable: true,
            compact: false,
            bordered: false,
            sortable: false,
            searchable: false
        };

        const config = { ...defaults, ...options };
        
        // Auto-generate headers from first row if not provided
        const headers = config.headers || Object.keys(data[0] || {});
        const rows = data.map(row => Object.values(row).join(',')).join(';');
        
        return `
            <ui-table 
                headers="${headers.join(',')}"
                rows="${rows}"
                striped="${config.striped}"
                hoverable="${config.hoverable}"
                compact="${config.compact}"
                bordered="${config.bordered}"
                sortable="${config.sortable}"
                searchable="${config.searchable}"
            ></ui-table>
        `;
    }

    // Alert Component - Simplified API
    alert(message, type = 'info', options = {}) {
        const defaults = {
            duration: 5000,
            dismissible: true
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-alert 
                type="${type}"
                message="${message}"
                duration="${config.duration}"
                dismissible="${config.dismissible}"
            ></ui-alert>
        `;
    }

    // Badge Component - Simplified API
    badge(text, color = 'primary', options = {}) {
        const defaults = {
            size: 'medium',
            rounded: true
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-badge 
                label="${text}"
                color="${color}"
                size="${config.size}"
                rounded="${config.rounded}"
            ></ui-badge>
        `;
    }

    // Avatar Component - Simplified API
    avatar(src, options = {}) {
        const defaults = {
            size: 'medium',
            fallback: '👤',
            rounded: true
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-avatar 
                src="${src || config.fallback}"
                size="${config.size}"
                rounded="${config.rounded}"
            ></ui-avatar>
        `;
    }

    // Chips Component - Simplified API
    chips(labels = [], options = {}) {
        const defaults = {
            color: 'primary',
            removable: false,
            selectable: false
        };

        const config = { ...defaults, ...options };
        
        const labelsStr = Array.isArray(labels) ? labels.join(',') : labels;
        
        return `
            <ui-chips 
                labels="${labelsStr}"
                color="${config.color}"
                removable="${config.removable}"
                selectable="${config.selectable}"
            ></ui-chips>
        `;
    }

    // Accordion Component - Simplified API
    accordion(items = [], options = {}) {
        const defaults = {
            multiple: false,
            defaultOpen: 0
        };

        const config = { ...defaults, ...options };
        
        const itemsJson = JSON.stringify(items);
        
        return `
            <ui-accordion 
                items='${itemsJson}'
                multiple="${config.multiple}"
                defaultOpen="${config.defaultOpen}"
            ></ui-accordion>
        `;
    }

    // Helper method to insert components into DOM
    insert(selector, html) {
        const element = document.querySelector(selector);
        if (element) {
            element.insertAdjacentHTML('beforeend', html);
            return true;
        }
        return false;
    }

    // Helper method to replace content
    replace(selector, html) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = html;
            return true;
        }
        return false;
    }

    // Quick success/error alerts
    success(message, duration = 3000) {
        return this.alert(message, 'success', { duration });
    }

    error(message, duration = 5000) {
        return this.alert(message, 'error', { duration });
    }

    warning(message, duration = 4000) {
        return this.alert(message, 'warning', { duration });
    }

    info(message, duration = 3000) {
        return this.alert(message, 'info', { duration });
    }

    // Register custom elements
    registerCard() {
        if (!customElements.get('ui-card')) {
            customElements.define('ui-card', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const title = this.getAttribute('title') || 'Card Title';
                    const subtitle = this.getAttribute('subtitle') || '';
                    const image = this.getAttribute('image') || '';
                    const content = this.getAttribute('content') || '';
                    const actionText = this.getAttribute('actionText') || '';
                    const actionLink = this.getAttribute('actionLink') || '#';
                    const variant = this.getAttribute('variant') || 'default';
                    const size = this.getAttribute('size') || 'medium';
                    const badge = this.getAttribute('badge') || '';
                    const rating = this.getAttribute('rating') || '';
                    const features = this.getAttribute('features') || '';
                    const designVariant = this.getAttribute('designVariant') || '';

                    const designClass = designVariant ? designVariant : '';
                    
                    this.innerHTML = `
                        <div class="card card-${variant} card-${size} ${designClass}">
                            ${image ? `<img src="${image}" alt="${title}" class="card-image">` : ''}
                            <div class="card-content">
                                ${badge ? `<span class="card-badge">${badge}</span>` : ''}
                                <h3 class="card-title">${title}</h3>
                                ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
                                ${rating ? `<div class="card-rating">⭐ ${rating}</div>` : ''}
                                ${features ? `<div class="card-features">${features.split(',').map(f => `<span class="feature">${f.trim()}</span>`).join('')}</div>` : ''}
                                <p class="card-text">${content}</p>
                                ${actionText ? `<a href="${actionLink}" class="card-action">${actionText}</a>` : ''}
                            </div>
                        </div>
                    `;
                }
            });
        }
    }

    registerTable() {
        if (!customElements.get('ui-table')) {
            customElements.define('ui-table', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const headers = this.getAttribute('headers') || '';
                    const rows = this.getAttribute('rows') || '';
                    const striped = this.getAttribute('striped') === 'true';
                    const hoverable = this.getAttribute('hoverable') === 'true';

                    const headerArray = headers.split(',').map(h => h.trim());
                    const rowArray = rows.split(';').map(row => row.split(',').map(cell => cell.trim()));

                    let tableHTML = '<table class="table';
                    if (striped) tableHTML += ' table-striped';
                    if (hoverable) tableHTML += ' table-hover';
                    tableHTML += '">';

                    if (headerArray.length > 0) {
                        tableHTML += '<thead><tr>';
                        headerArray.forEach(header => {
                            tableHTML += `<th>${header}</th>`;
                        });
                        tableHTML += '</tr></thead>';
                    }

                    if (rowArray.length > 0) {
                        tableHTML += '<tbody>';
                        rowArray.forEach(row => {
                            tableHTML += '<tr>';
                            row.forEach(cell => {
                                tableHTML += `<td>${cell}</td>`;
                            });
                            tableHTML += '</tr>';
                        });
                        tableHTML += '</tbody>';
                    }

                    tableHTML += '</table>';
                    this.innerHTML = tableHTML;
                }
            });
        }
    }

    registerAlert() {
        if (!customElements.get('ui-alert')) {
            customElements.define('ui-alert', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const type = this.getAttribute('type') || 'info';
                    const message = this.getAttribute('message') || '';
                    const duration = parseInt(this.getAttribute('duration')) || 0;
                    const dismissible = this.getAttribute('dismissible') === 'true';

                    this.innerHTML = `
                        <div class="alert alert-${type}">
                            <span class="alert-message">${message}</span>
                            ${dismissible ? '<button class="alert-close" onclick="this.parentElement.remove()">×</button>' : ''}
                        </div>
                    `;

                    if (duration > 0) {
                        setTimeout(() => this.remove(), duration);
                    }
                }
            });
        }
    }

    registerBadge() {
        if (!customElements.get('ui-badge')) {
            customElements.define('ui-badge', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const label = this.getAttribute('label') || '';
                    const color = this.getAttribute('color') || 'primary';
                    const size = this.getAttribute('size') || 'medium';
                    const designVariant = this.getAttribute('designVariant') || '';

                    const designClass = designVariant ? designVariant : '';
                    
                    this.innerHTML = `<span class="badge badge-${color} badge-${size} ${designClass}">${label}</span>`;
                }
            });
        }
    }

    registerAvatar() {
        if (!customElements.get('ui-avatar')) {
            customElements.define('ui-avatar', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const src = this.getAttribute('src') || '👤';
                    const size = this.getAttribute('size') || 'medium';

                    this.classList.add(size);
                    
                    if (src.startsWith('http')) {
                        this.innerHTML = `<img src="${src}" alt="Avatar">`;
                    } else {
                        this.innerHTML = `<span>${src}</span>`;
                    }
                }
            });
        }
    }

    registerChips() {
        if (!customElements.get('ui-chips')) {
            customElements.define('ui-chips', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const labels = this.getAttribute('labels') || '';
                    const color = this.getAttribute('color') || 'primary';

                    const labelArray = labels.split(',').map(l => l.trim());
                    
                    this.innerHTML = `
                        <div class="chips">
                            ${labelArray.map(label => `<span class="chip chip-${color}">${label}</span>`).join('')}
                        </div>
                    `;
                }
            });
        }
    }

    registerAccordion() {
        if (!customElements.get('ui-accordion')) {
            customElements.define('ui-accordion', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = JSON.parse(this.getAttribute('items') || '[]');
                    const multiple = this.getAttribute('multiple') === 'true';
                    const defaultOpen = parseInt(this.getAttribute('defaultOpen')) || -1;

                    let accordionHTML = '<div class="accordion">';
                    items.forEach((item, index) => {
                        const isOpen = index === defaultOpen ? 'active' : '';
                        accordionHTML += `
                            <div class="accordion-item">
                                <div class="accordion-header ${isOpen}" onclick="this.classList.toggle('active'); this.nextElementSibling.classList.toggle('active')">
                                    ${item.title}
                                </div>
                                <div class="accordion-content ${isOpen}">
                                    ${item.content}
                                </div>
                            </div>
                        `;
                    });
                    accordionHTML += '</div>';
                    
                    this.innerHTML = accordionHTML;
                }
            });
        }
    }

    // Card Swiper Component - Simplified API
    cardSwiper(options = {}) {
        const defaults = {
            cards: [
                {
                    id: '1',
                    title: 'Product Card',
                    subtitle: 'Subtitle',
                    image: 'https://picsum.photos/400/600?random=1',
                    description: 'Card description',
                    rating: '4.5',
                    tags: 'Tag1,Tag2'
                }
            ],
            showActions: true,
            autoSwipe: false,
            swipeThreshold: 100,
            animationDuration: 300
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-card-swiper 
                cards='${JSON.stringify(config.cards)}'
                show-actions="${config.showActions}"
                auto-swipe="${config.autoSwipe}"
                swipe-threshold="${config.swipeThreshold}"
                animation-duration="${config.animationDuration}"
            ></ui-card-swiper>
        `;
    }

    // Calendar Component - Simplified API
    calendar(options = {}) {
        const defaults = {
            events: [
                {
                    id: '1',
                    title: 'Team Meeting',
                    date: new Date().toISOString().split('T')[0],
                    time: '10:00',
                    duration: '60',
                    type: 'meeting',
                    color: 'primary'
                }
            ],
            view: 'month',
            theme: 'primary',
            showToday: true,
            selectable: true,
            multiSelect: false,
            firstDay: 'monday'
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-calendar 
                events='${JSON.stringify(config.events)}'
                view="${config.view}"
                theme="${config.theme}"
                show-today="${config.showToday}"
                selectable="${config.selectable}"
                multi-select="${config.multiSelect}"
                first-day="${config.firstDay}"
            ></ui-calendar>
        `;
    }

    // Media Player Component - Simplified API
    mediaPlayer(options = {}) {
        const defaults = {
            type: 'video',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            poster: 'https://picsum.photos/800/450?random=1',
            title: 'Product Video',
            description: 'Media description',
            autoplay: false,
            loop: false,
            muted: false,
            controls: true,
            playlist: [],
            showPlaylist: true,
            theme: 'dark'
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-media-player 
                type="${config.type}"
                src="${config.src}"
                poster="${config.poster}"
                title="${config.title}"
                description="${config.description}"
                autoplay="${config.autoplay}"
                loop="${config.loop}"
                muted="${config.muted}"
                controls="${config.controls}"
                playlist='${JSON.stringify(config.playlist)}'
                show-playlist="${config.showPlaylist}"
                theme="${config.theme}"
            ></ui-media-player>
        `;
    }

    // Lyric Component - Simplified API
    lyric(options = {}) {
        const defaults = {
            text: 'These are streamed words that highlight one-by-one for better focus.',
            mode: 'word',
            cursor: true,
            speed: 200
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-lyric 
                text="${config.text}"
                mode="${config.mode}"
                cursor="${config.cursor}"
                speed="${config.speed}"
            ></ui-lyric>
        `;
    }

    // Spotlight Component - Simplified API
    spotlight(options = {}) {
        const defaults = {
            sections: [
                {
                    title: 'Problem',
                    text: 'Describe the problem succinctly.'
                },
                {
                    title: 'Approach',
                    text: 'Lay out a step-by-step plan.'
                },
                {
                    title: 'Answer',
                    text: 'Deliver the final result with citations.'
                }
            ],
            activeIndex: 0
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-spotlight 
                sections='${JSON.stringify(config.sections)}'
                activeIndex="${config.activeIndex}"
            ></ui-spotlight>
        `;
    }

    // List Component - Simplified API
    list(items = [], options = {}) {
        const defaults = {
            type: 'unordered'
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-list 
                items="${items.join(',')}"
                type="${config.type}"
            ></ui-list>
        `;
    }

    // Divider Component - Simplified API
    divider(options = {}) {
        const defaults = {
            label: '',
            style: 'solid'
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-divider 
                label="${config.label}"
                style="${config.style}"
            ></ui-divider>
        `;
    }

    // Tabs Component - Simplified API
    tabs(tabs = [], options = {}) {
        const defaults = {
            activeTab: 0
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-tabs 
                tabs='${JSON.stringify(tabs)}'
                activeTab="${config.activeTab}"
            ></ui-tabs>
        `;
    }

    // Map Component - Simplified API
    map(options = {}) {
        const defaults = {
            latitude: 40.7128,
            longitude: -74.0060,
            zoom: 1
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-map 
                latitude="${config.latitude}"
                longitude="${config.longitude}"
                zoom="${config.zoom}"
            ></ui-map>
        `;
    }

    // Dynamic Map Component - Simplified API
    dynamicMap(options = {}) {
        const defaults = {
            latitude: 40.7128,
            longitude: -74.0060,
            zoom: 1
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-dynamic-map 
                latitude="${config.latitude}"
                longitude="${config.longitude}"
                zoom="${config.zoom}"
            ></ui-dynamic-map>
        `;
    }

    // Enhanced Map Component - Simplified API
    enhancedMap(options = {}) {
        const defaults = {
            latitude: 40.7128,
            longitude: -74.0060,
            zoom: 1
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-enhanced-map 
                latitude="${config.latitude}"
                longitude="${config.longitude}"
                zoom="${config.zoom}"
            ></ui-enhanced-map>
        `;
    }

    // Carousel Component - Simplified API
    carousel(images = [], options = {}) {
        const defaults = {
            interval: 3000,
            showControls: true,
            showIndicators: true
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-carousel 
                images="${images.join(',')}"
                interval="${config.interval}"
                showControls="${config.showControls}"
                showIndicators="${config.showIndicators}"
            ></ui-carousel>
        `;
    }

    // Quiz Component - Simplified API
    quiz(options = {}) {
        const defaults = {
            question: 'What is the most important aspect of web development?',
            options: [
                { text: 'Design', isCorrect: false },
                { text: 'Performance', isCorrect: true }
            ]
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-quiz 
                question="${config.question}"
                options='${JSON.stringify(config.options)}'
            ></ui-quiz>
        `;
    }

    // Keypoints Component - Simplified API
    keypoints(items = [], options = {}) {
        const defaults = {
            updatedAt: '',
            confidence: 0.95
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-keypoints 
                items='${JSON.stringify(items)}'
                updatedAt="${config.updatedAt}"
                confidence="${config.confidence}"
            ></ui-keypoints>
        `;
    }

    // Timeline Component - Simplified API
    timeline(items = [], options = {}) {
        const defaults = {
            current: 0
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-timeline 
                items='${JSON.stringify(items)}'
                current="${config.current}"
            ></ui-timeline>
        `;
    }

    // Resources Component - Simplified API
    resources(items = []) {
        return `
            <ui-resources 
                items='${JSON.stringify(items)}'
            ></ui-resources>
        `;
    }

    // Code Block Component - Simplified API
    codeBlock(options = {}) {
        const defaults = {
            title: 'Example Code',
            content: 'console.log("Hello World!");',
            language: 'javascript'
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-code-block 
                title="${config.title}"
                content="${config.content}"
                language="${config.language}"
            ></ui-code-block>
        `;
    }

    // Suggestions Component - Simplified API
    suggestions(items = []) {
        return `
            <ui-suggestions 
                items="${items.join(',')}"
            ></ui-suggestions>
        `;
    }

    // Scrollytelling Component - Simplified API
    scrollytelling(steps = []) {
        return `
            <ui-scrollytelling 
                steps='${JSON.stringify(steps)}'
            ></ui-scrollytelling>
        `;
    }

    // Card Stack Component - Simplified API
    cardStack(items = []) {
        return `
            <ui-card-stack 
                items='${JSON.stringify(items)}'
            ></ui-card-stack>
        `;
    }

    // Ticker Component - Simplified API
    ticker(items = []) {
        return `
            <ui-ticker 
                items="${items.join(',')}"
            ></ui-ticker>
        `;
    }

    // Notification Component - Simplified API
    notification(options = {}) {
        const defaults = {
            type: 'info',
            title: 'Notification',
            message: 'This is a notification message.',
            duration: 5000
        };

        const config = { ...defaults, ...options };
        
        return `
            <ui-notification 
                type="${config.type}"
                title="${config.title}"
                message="${config.message}"
                duration="${config.duration}"
            ></ui-notification>
        `;
    }

    registerCardSwiper() {
        if (!customElements.get('ui-card-swiper')) {
            customElements.define('ui-card-swiper', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const cards = JSON.parse(this.getAttribute('cards') || '[]');
                    const showActions = this.getAttribute('show-actions') === 'true';
                    const autoSwipe = this.getAttribute('auto-swipe') === 'true';
                    const swipeThreshold = parseInt(this.getAttribute('swipe-threshold') || '100');
                    const animationDuration = parseInt(this.getAttribute('animation-duration') || '300');
                    
                    let currentIndex = 0;
                    
                    // Create swiper HTML
                    let html = '<div class="swiper-container">';
                    
                    // Add swipe indicators
                    html += '<div class="swipe-indicator left">NOPE</div>';
                    html += '<div class="swipe-indicator right">LIKE</div>';
                    
                    // Add cards
                    cards.forEach((card, index) => {
                        html += `
                            <div class="swiper-card" data-index="${index}" style="z-index: ${cards.length - index};">
                                <img src="${card.image}" alt="${card.title}" class="card-image">
                                <div class="card-overlay">
                                    <h3 class="card-title">${card.title}</h3>
                                    <p class="card-subtitle">${card.subtitle}</p>
                                    <p class="card-description">${card.description}</p>
                                    <div class="card-rating">
                                        <span class="rating-stars">⭐ ${card.rating}</span>
                                        <span class="rating-text">(${card.rating})</span>
                                    </div>
                                    <div class="card-tags">
                                        ${card.tags.split(',').map(tag => `<span class="card-tag">${tag.trim()}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    
                    // Add empty state
                    html += `
                        <div class="swiper-card empty-state" style="display: none;">
                            <div class="icon">💔</div>
                            <div class="message">No more cards!</div>
                            <div class="submessage">Check back later for new content</div>
                        </div>
                    `;
                    
                    html += '</div>';
                    
                    // Add action buttons
                    if (showActions) {
                        html += `
                            <div class="swiper-actions">
                                <button class="action-btn reject" onclick="this.closest('ui-card-swiper').swipeCard('left')">✕</button>
                                <button class="action-btn accept" onclick="this.closest('ui-card-swiper').swipeCard('right')">♥</button>
                            </div>
                        `;
                    }
                    
                    this.innerHTML = html;
                }

                swipeCard(direction) {
                    // Implementation would go here
                    console.log(`Swiped ${direction}`);
                }
            });
        }
    }

    registerCalendar() {
        if (!customElements.get('ui-calendar')) {
            customElements.define('ui-calendar', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const events = JSON.parse(this.getAttribute('events') || '[]');
                    const view = this.getAttribute('view') || 'month';
                    const theme = this.getAttribute('theme') || 'primary';
                    const showToday = this.getAttribute('show-today') === 'true';
                    const selectable = this.getAttribute('selectable') === 'true';
                    const multiSelect = this.getAttribute('multi-select') === 'true';
                    const firstDay = this.getAttribute('first-day') || 'monday';
                    
                    const currentDate = new Date();
                    
                    // Create calendar HTML
                    let html = `
                        <div class="calendar-header">
                            <div class="calendar-nav left">
                                <button class="nav-btn" onclick="this.closest('ui-calendar').navigate('prev')">‹</button>
                            </div>
                            <div class="calendar-nav right">
                                <button class="nav-btn" onclick="this.closest('ui-calendar').navigate('next')">›</button>
                            </div>
                            <h2 class="calendar-title">${currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                        </div>
                        
                        <div class="calendar-controls">
                            <div class="view-selector">
                                <button class="view-btn ${view === 'month' ? 'active' : ''}" onclick="this.closest('ui-calendar').changeView('month')">Month</button>
                                <button class="view-btn ${view === 'week' ? 'active' : ''}" onclick="this.closest('ui-calendar').changeView('week')">Week</button>
                                <button class="view-btn ${view === 'day' ? 'active' : ''}" onclick="this.closest('ui-calendar').changeView('day')">Day</button>
                            </div>
                            <button class="today-btn" onclick="this.closest('ui-calendar').goToToday()">Today</button>
                        </div>
                        
                        <div class="calendar-body">
                            <div class="weekdays">
                                ${this.getWeekdays(firstDay)}
                            </div>
                            <div class="days-grid">
                                ${this.generateDaysGrid(currentDate, events, firstDay)}
                            </div>
                        </div>
                    `;
                    
                    this.innerHTML = html;
                }

                getWeekdays(firstDay) {
                    const weekdays = firstDay === 'monday' 
                        ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    
                    return weekdays.map(day => `<div class="weekday">${day}</div>`).join('');
                }

                generateDaysGrid(date, events, firstDay) {
                    // Simplified grid generation
                    let html = '';
                    for (let i = 0; i < 42; i++) {
                        html += `<div class="day"><div class="day-number">${i + 1}</div></div>`;
                    }
                    return html;
                }

                navigate(direction) {
                    console.log(`Navigate ${direction}`);
                }

                changeView(view) {
                    console.log(`Change view to ${view}`);
                }

                goToToday() {
                    console.log('Go to today');
                }
            });
        }
    }

    registerMediaPlayer() {
        if (!customElements.get('ui-media-player')) {
            customElements.define('ui-media-player', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const type = this.getAttribute('type') || 'video';
                    const src = this.getAttribute('src') || '';
                    const poster = this.getAttribute('poster') || '';
                    const title = this.getAttribute('title') || '';
                    const description = this.getAttribute('description') || '';
                    const autoplay = this.getAttribute('autoplay') === 'true';
                    const loop = this.getAttribute('loop') === 'true';
                    const muted = this.getAttribute('muted') === 'true';
                    const controls = this.getAttribute('controls') === 'true';
                    const playlist = JSON.parse(this.getAttribute('playlist') || '[]');
                    const showPlaylist = this.getAttribute('show-playlist') === 'true';
                    const theme = this.getAttribute('theme') || 'dark';
                    
                    let html = `
                        <div class="player-container">
                            <${type} class="media-element" ${poster ? `poster="${poster}"` : ''} ${autoplay ? 'autoplay' : ''} ${loop ? 'loop' : ''} ${muted ? 'muted' : ''} ${controls ? 'controls' : ''}>
                                <source src="${src}" type="${type === 'video' ? 'video/mp4' : 'audio/mpeg'}">
                                Your browser does not support the ${type} element.
                            </${type}>
                            
                            <div class="player-overlay">
                                <button class="play-button">▶</button>
                            </div>
                            
                            <div class="controls-bar">
                                <div class="progress-container">
                                    <div class="progress-bar"></div>
                                </div>
                                
                                <div class="controls-row">
                                    <div class="controls-left">
                                        <button class="control-btn">▶</button>
                                        <button class="control-btn">⏮</button>
                                        <button class="control-btn">⏭</button>
                                        <span class="time-display">00:00 / 00:00</span>
                                    </div>
                                    
                                    <div class="controls-right">
                                        <div class="volume-container">
                                            <button class="control-btn">🔊</button>
                                            <div class="volume-slider">
                                                <div class="volume-level"></div>
                                            </div>
                                        </div>
                                        ${showPlaylist ? '<button class="control-btn">📋</button>' : ''}
                                        <button class="fullscreen-btn">⛶</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="player-info">
                            <h3 class="media-title">${title}</h3>
                            <p class="media-description">${description}</p>
                        </div>
                    `;
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerLyric() {
        if (!customElements.get('ui-lyric')) {
            customElements.define('ui-lyric', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const text = (this.getAttribute('text') || '').trim();
                    const mode = this.getAttribute('mode') || 'word';
                    const showCursor = this.getAttribute('cursor') === 'true';
                    const speed = parseInt(this.getAttribute('speed') || '200');
                    
                    const words = mode === 'line' ? text.split(/\n+/) : text.split(/(\s+)/);
                    let html = '<div class="wrap">' + words.map(w => `<span class="w">${this.escapeHtml(w)}</span>`).join('') + (showCursor ? '<span class="cursor"></span>' : '') + '</div>';
                    this.innerHTML = html;
                    
                    const spans = [...this.querySelectorAll('.w')];
                    let i = 0;
                    const tick = () => {
                        if (i > 0) spans[i-1].classList.remove('active');
                        if (i < spans.length) spans[i].classList.add('active');
                        i = (i + 1) % spans.length;
                    };
                    let interval = setInterval(tick, speed);
                    
                    // Store interval for cleanup
                    this._interval = interval;
                }

                disconnectedCallback() {
                    if (this._interval) {
                        clearInterval(this._interval);
                    }
                }

                escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text || '';
                    return div.innerHTML;
                }
            });
        }
    }

    registerSpotlight() {
        if (!customElements.get('ui-spotlight')) {
            customElements.define('ui-spotlight', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const sections = this.safeParseJSON(this.getAttribute('sections')) || [];
                    const activeIndex = parseInt(this.getAttribute('activeIndex') || '0', 10);
                    
                    let html = sections.map((s, i) => 
                        `<article class="sec ${i === activeIndex ? 'active' : ''}" tabindex="0" data-i="${i}">
                            <div class="title">${this.escapeHtml(s.title || '')}</div>
                            <div class="text">${this.escapeHtml(s.text || '')}</div>
                        </article>`
                    ).join('');
                    
                    this.innerHTML = html;
                    
                    const secs = this.querySelectorAll('.sec');
                    const setActive = (i) => {
                        secs.forEach((el, idx) => el.classList.toggle('active', idx === i));
                    };
                    
                    secs.forEach(el => {
                        el.addEventListener('mouseenter', () => setActive(Number(el.getAttribute('data-i'))));
                        el.addEventListener('focus', () => setActive(Number(el.getAttribute('data-i'))));
                        el.addEventListener('click', () => setActive(Number(el.getAttribute('data-i'))));
                    });
                }

                safeParseJSON(str) {
                    try {
                        return JSON.parse(str);
                    } catch {
                        return null;
                    }
                }

                escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text || '';
                    return div.innerHTML;
                }
            });
        }
    }

    // Register missing components
    registerList() {
        if (!customElements.get('ui-list')) {
            customElements.define('ui-list', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = this.getAttribute('items')?.split(',') || [];
                    const type = this.getAttribute('type') || 'unordered';
                    
                    const tag = type === 'ordered' ? 'ol' : 'ul';
                    let html = `<${tag}>`;
                    items.forEach(item => {
                        html += `<li>${item.trim()}</li>`;
                    });
                    html += `</${tag}>`;
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerDivider() {
        if (!customElements.get('ui-divider')) {
            customElements.define('ui-divider', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const label = this.getAttribute('label') || '';
                    const style = this.getAttribute('style') || 'solid';
                    
                    let html = '<div class="divider">';
                    if (label) {
                        html += `<span class="divider-label">${label}</span>`;
                    }
                    html += `<hr class="divider-line divider-${style}">`;
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerTabs() {
        if (!customElements.get('ui-tabs')) {
            customElements.define('ui-tabs', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const tabs = JSON.parse(this.getAttribute('tabs') || '[]');
                    const activeTab = parseInt(this.getAttribute('activeTab') || '0');
                    
                    let html = '<div class="tabs">';
                    html += '<div class="tabs-header">';
                    tabs.forEach((tab, index) => {
                        html += `<button class="tab-btn ${index === activeTab ? 'active' : ''}" onclick="this.closest('ui-tabs').switchTab(${index})">${tab.title}</button>`;
                    });
                    html += '</div>';
                    html += '<div class="tabs-content">';
                    tabs.forEach((tab, index) => {
                        html += `<div class="tab-content ${index === activeTab ? 'active' : ''}">${tab.content}</div>`;
                    });
                    html += '</div>';
                    html += '</div>';
                    
                    this.innerHTML = html;
                }

                switchTab(index) {
                    const buttons = this.querySelectorAll('.tab-btn');
                    const contents = this.querySelectorAll('.tab-content');
                    
                    buttons.forEach(btn => btn.classList.remove('active'));
                    contents.forEach(content => content.classList.remove('active'));
                    
                    buttons[index].classList.add('active');
                    contents[index].classList.add('active');
                }
            });
        }
    }

    registerMap() {
        if (!customElements.get('ui-map')) {
            customElements.define('ui-map', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const locations = this.getAttribute('locations');
                    const center = this.getAttribute('center');
                    const zoom = parseInt(this.getAttribute('zoom')) || 10;
                    const height = this.getAttribute('height') || '400px';
                    const showMarkers = this.getAttribute('showMarkers') === 'true';
                    const showRoutes = this.getAttribute('showRoutes') === 'true';
                    const routeColor = this.getAttribute('routeColor') || '#FF6B6B';
                    const markerColor = this.getAttribute('markerColor') || '#4ECDC4';
                    const theme = this.getAttribute('theme') || 'light';
                    const interactive = this.getAttribute('interactive') === 'true';

                    this.style.height = height;
                    this.style.width = '100%';
                    this.style.borderRadius = '1rem';
                    this.style.overflow = 'hidden';
                    this.style.position = 'relative';
                    this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

                    // Create map container
                    const mapContainer = document.createElement('div');
                    mapContainer.id = 'map-' + Math.random().toString(36).substr(2, 9);
                    mapContainer.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                        overflow: hidden;
                        position: relative;
                    `;

                    this.appendChild(mapContainer);

                    // Parse locations
                    const locationList = locations ? locations.split(';').map(loc => {
                        const [name, lat, lng] = loc.split(',');
                        return { name: name.trim(), lat: parseFloat(lat), lng: parseFloat(lng) };
                    }) : [];

                    // Parse center coordinates
                    const [centerLat, centerLng] = center ? center.split(',').map(coord => parseFloat(coord)) : [0, 0];

                    // Initialize map after a short delay to ensure DOM is ready
                    setTimeout(() => {
                        this.initMap(mapContainer, locationList, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme, interactive);
                    }, 100);
                }

                initMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme, interactive) {
                    // Check if Leaflet is available
                    if (typeof L !== 'undefined') {
                        try {
                            this.initLeafletMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme, interactive);
                        } catch (error) {
                            console.error('Error initializing Leaflet map:', error);
                            this.createFallbackMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme);
                        }
                    } else {
                        console.warn('Leaflet not available, using fallback map');
                        this.createFallbackMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme);
                    }
                }

                initLeafletMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme, interactive) {
                    const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
                    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

                    const map = L.map(container.id, {
                        center: [centerLat, centerLng],
                        zoom: zoom,
                        zoomControl: interactive,
                        scrollWheelZoom: interactive,
                        dragging: interactive,
                        touchZoom: interactive,
                        doubleClickZoom: interactive,
                        boxZoom: interactive,
                        keyboard: interactive
                    });

                    L.tileLayer(tileLayer, {
                        attribution: attribution,
                        maxZoom: 19
                    }).addTo(map);

                    container.leafletMap = map;

                    // Add markers if enabled
                    if (showMarkers && locations.length > 0) {
                        locations.forEach(location => {
                            const markerIcon = L.divIcon({
                                className: 'custom-marker',
                                html: `<div style="
                                    background-color: ${markerColor};
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    border: 3px solid white;
                                    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: white;
                                    font-weight: bold;
                                    font-size: 12px;
                                ">📍</div>`,
                                iconSize: [20, 20],
                                iconAnchor: [10, 10]
                            });

                            const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
                                .addTo(map);

                            marker.on('click', function() {
                                map.setView([location.lat, location.lng], 12);
                            });

                            marker.bindPopup(`<b>${location.name}</b><br>${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);
                        });
                    }

                    // Add routes if enabled
                    if (showRoutes && locations.length > 1) {
                        const routePoints = locations.map(loc => [loc.lat, loc.lng]);
                        
                        const shadowRoute = L.polyline(routePoints, {
                            color: '#000',
                            weight: 14,
                            opacity: 0.4
                        }).addTo(map);
                        
                        const mainRoute = L.polyline(routePoints, {
                            color: routeColor,
                            weight: 10,
                            opacity: 1.0
                        }).addTo(map);
                        
                        mainRoute.bringToFront();
                        map.fitBounds(mainRoute.getBounds(), { padding: [20, 20] });
                    } else if (locations.length > 0) {
                        const bounds = locations.map(loc => [loc.lat, loc.lng]);
                        map.fitBounds(bounds, { padding: [20, 20] });
                    }
                }

                createFallbackMap(container, locations, centerLat, centerLng, zoom, showMarkers, showRoutes, routeColor, markerColor, theme) {
                    const canvas = document.createElement('canvas');
                    canvas.width = container.offsetWidth || 400;
                    canvas.height = container.offsetHeight || 300;
                    canvas.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    `;
                    
                    container.appendChild(canvas);
                    
                    const ctx = canvas.getContext('2d');
                    const width = canvas.width;
                    const height = canvas.height;

                    ctx.clearRect(0, 0, width, height);
                    ctx.fillStyle = theme === 'dark' ? '#2c3e50' : '#f8f9fa';
                    ctx.fillRect(0, 0, width, height);

                    // Draw grid
                    ctx.strokeStyle = theme === 'dark' ? '#34495e' : '#e9ecef';
                    ctx.lineWidth = 1;
                    for (let i = 0; i < width; i += 50) {
                        ctx.beginPath();
                        ctx.moveTo(i, 0);
                        ctx.lineTo(i, height);
                        ctx.stroke();
                    }
                    for (let i = 0; i < height; i += 50) {
                        ctx.beginPath();
                        ctx.moveTo(0, i);
                        ctx.lineTo(width, i);
                        ctx.stroke();
                    }

                    // Draw markers if enabled
                    if (showMarkers && locations.length > 0) {
                        locations.forEach(location => {
                            const x = width / 2 + (location.lng - centerLng) * 100 * zoom;
                            const y = height / 2 + (location.lat - centerLng) * 100 * zoom;

                            ctx.fillStyle = markerColor;
                            ctx.beginPath();
                            ctx.arc(x, y, 8, 0, 2 * Math.PI);
                            ctx.fill();

                            ctx.strokeStyle = theme === 'dark' ? '#fff' : '#000';
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            ctx.fillStyle = theme === 'dark' ? '#fff' : '#000';
                            ctx.font = '12px Inter, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(location.name, x, y - 15);
                        });
                    }

                    const message = document.createElement('div');
                    message.style.cssText = `
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: rgba(255, 255, 255, 0.9);
                        padding: 8px 12px;
                        border-radius: 4px;
                        font-size: 12px;
                        color: #666;
                        backdrop-filter: blur(10px);
                    `;
                    message.textContent = 'Map (Fallback Mode)';
                    container.appendChild(message);
                }
            });
        }
    }

    registerDynamicMap() {
        if (!customElements.get('ui-dynamic-map')) {
            customElements.define('ui-dynamic-map', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const latitude = this.getAttribute('latitude') || '40.7128';
                    const longitude = this.getAttribute('longitude') || '-74.0060';
                    const zoom = this.getAttribute('zoom') || '2';
                    
                    this.innerHTML = `
                        <div class="dynamic-map-container">
                            <div class="map-placeholder">
                                <div class="map-info">
                                    <h3>Dynamic Map Component</h3>
                                    <p>Latitude: ${latitude}</p>
                                    <p>Longitude: ${longitude}</p>
                                    <p>Zoom: ${zoom}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        }
    }

    registerEnhancedMap() {
        if (!customElements.get('ui-enhanced-map')) {
            customElements.define('ui-enhanced-map', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const mainLocations = this.getAttribute('mainLocations');
                    const nearbyLocations = this.getAttribute('nearbyLocations');
                    const center = this.getAttribute('center');
                    const zoom = parseInt(this.getAttribute('zoom')) || 2;
                    const height = this.getAttribute('height') || '500px';
                    const showDirections = this.getAttribute('showDirections') === 'true';
                    const showNearbyMarkers = this.getAttribute('showNearbyMarkers') === 'true';
                    const showTraffic = this.getAttribute('showTraffic') === 'true';
                    const showPublicTransport = this.getAttribute('showPublicTransport') === 'true';
                    const mainMarkerColor = this.getAttribute('mainMarkerColor') || '#4ECDC4';
                    const nearbyMarkerColor = this.getAttribute('nearbyMarkerColor') || '#FF6B6B';
                    const routeColor = this.getAttribute('routeColor') || '#FF4500';
                    const theme = this.getAttribute('theme') || 'light';
                    const interactive = this.getAttribute('interactive') === 'true';

                    this.style.height = height;
                    this.style.width = '100%';
                    this.style.borderRadius = '1rem';
                    this.style.overflow = 'hidden';
                    this.style.position = 'relative';
                    this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';

                    // Create map container
                    const mapContainer = document.createElement('div');
                    mapContainer.id = 'enhanced-map-' + Math.random().toString(36).substr(2, 9);
                    mapContainer.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                        overflow: hidden;
                        position: relative;
                    `;

                    this.appendChild(mapContainer);

                    // Parse locations
                    const mainLocationList = mainLocations ? mainLocations.split(';').map(loc => {
                        const [name, lat, lng] = loc.split(',');
                        return { name: name.trim(), lat: parseFloat(lat), lng: parseFloat(lng), type: 'main' };
                    }) : [];

                    const nearbyLocationList = nearbyLocations ? nearbyLocations.split(';').map(loc => {
                        const [name, lat, lng] = loc.split(',');
                        return { name: name.trim(), lat: parseFloat(lat), lng: parseFloat(lng), type: 'nearby' };
                    }) : [];

                    // Parse center coordinates
                    const [centerLat, centerLng] = center ? center.split(',').map(coord => parseFloat(coord)) : [0, 0];

                    // Initialize map after a short delay to ensure DOM is ready
                    setTimeout(() => {
                        this.initEnhancedMap(mapContainer, mainLocationList, nearbyLocationList, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, showTraffic, showPublicTransport, routeColor, mainMarkerColor, nearbyMarkerColor, theme, interactive);
                    }, 100);
                }

                initEnhancedMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, showTraffic, showPublicTransport, routeColor, mainMarkerColor, nearbyMarkerColor, theme, interactive) {
                    // Check if Leaflet is available
                    if (typeof L !== 'undefined') {
                        try {
                            this.initEnhancedLeafletMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, showTraffic, showPublicTransport, routeColor, mainMarkerColor, nearbyMarkerColor, theme, interactive);
                        } catch (error) {
                            console.error('Error initializing enhanced Leaflet map:', error);
                            this.createEnhancedFallbackMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, routeColor, mainMarkerColor, nearbyMarkerColor, theme);
                        }
                    } else {
                        console.warn('Leaflet not available, using enhanced fallback map');
                        this.createEnhancedFallbackMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, routeColor, mainMarkerColor, nearbyMarkerColor, theme);
                    }
                }

                initEnhancedLeafletMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, showTraffic, showPublicTransport, routeColor, mainMarkerColor, nearbyMarkerColor, theme, interactive) {
                    const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
                    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

                    const map = L.map(container.id, {
                        center: [centerLat, centerLng],
                        zoom: zoom,
                        zoomControl: interactive,
                        scrollWheelZoom: interactive,
                        dragging: interactive,
                        touchZoom: interactive,
                        doubleClickZoom: interactive,
                        boxZoom: interactive,
                        keyboard: interactive
                    });

                    L.tileLayer(tileLayer, {
                        attribution: attribution,
                        maxZoom: 19
                    }).addTo(map);

                    container.leafletMap = map;

                    // Add main location markers
                    mainLocations.forEach(location => {
                        const markerIcon = L.divIcon({
                            className: 'main-marker',
                            html: `<div style="
                                background-color: ${mainMarkerColor};
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                                border: 3px solid white;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                                font-weight: bold;
                                font-size: 14px;
                            ">📍</div>`,
                            iconSize: [24, 24],
                            iconAnchor: [12, 12]
                        });

                        const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
                            .addTo(map);

                        marker.on('click', function() {
                            map.setView([location.lat, location.lng], 12);
                        });

                        marker.bindPopup(`<b>${location.name}</b><br>${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);
                    });

                    // Add nearby location markers if enabled
                    if (showNearbyMarkers && nearbyLocations.length > 0) {
                        nearbyLocations.forEach(location => {
                            const markerIcon = L.divIcon({
                                className: 'nearby-marker',
                                html: `<div style="
                                    background-color: ${nearbyMarkerColor};
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    border: 2px solid white;
                                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: white;
                                    font-weight: bold;
                                    font-size: 12px;
                                ">📍</div>`,
                                iconSize: [20, 20],
                                iconAnchor: [10, 10]
                            });

                            const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
                                .addTo(map);

                            marker.on('click', function() {
                                map.setView([location.lat, location.lng], 12);
                            });

                            marker.bindPopup(`<b>${location.name}</b> (Nearby)<br>${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);
                        });
                    }

                    // Add directions if enabled
                    if (showDirections && mainLocations.length > 1) {
                        const routePoints = mainLocations.map(loc => [loc.lat, loc.lng]);
                        
                        const shadowRoute = L.polyline(routePoints, {
                            color: '#000',
                            weight: 14,
                            opacity: 0.4
                        }).addTo(map);
                        
                        const mainRoute = L.polyline(routePoints, {
                            color: routeColor,
                            weight: 10,
                            opacity: 1.0
                        }).addTo(map);
                        
                        mainRoute.bringToFront();
                        map.fitBounds(mainRoute.getBounds(), { padding: [20, 20] });
                    } else if (mainLocations.length > 0) {
                        const bounds = mainLocations.map(loc => [loc.lat, loc.lng]);
                        map.fitBounds(bounds, { padding: [20, 20] });
                    }
                }

                createEnhancedFallbackMap(container, mainLocations, nearbyLocations, centerLat, centerLng, zoom, showDirections, showNearbyMarkers, routeColor, mainMarkerColor, nearbyMarkerColor, theme) {
                    const canvas = document.createElement('canvas');
                    canvas.width = container.offsetWidth || 400;
                    canvas.height = container.offsetHeight || 300;
                    canvas.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    `;
                    
                    container.appendChild(canvas);
                    
                    const ctx = canvas.getContext('2d');
                    const width = canvas.width;
                    const height = canvas.height;

                    ctx.clearRect(0, 0, width, height);
                    ctx.fillStyle = theme === 'dark' ? '#2c3e50' : '#f8f9fa';
                    ctx.fillRect(0, 0, width, height);

                    // Draw grid
                    ctx.strokeStyle = theme === 'dark' ? '#34495e' : '#e9ecef';
                    ctx.lineWidth = 1;
                    for (let i = 0; i < width; i += 50) {
                        ctx.beginPath();
                        ctx.moveTo(i, 0);
                        ctx.lineTo(i, height);
                        ctx.stroke();
                    }
                    for (let i = 0; i < height; i += 50) {
                        ctx.beginPath();
                        ctx.moveTo(0, i);
                        ctx.lineTo(width, i);
                        ctx.stroke();
                    }

                    // Draw main location markers
                    mainLocations.forEach(location => {
                        const x = width / 2 + (location.lng - centerLng) * 100 * zoom;
                        const y = height / 2 + (location.lat - centerLng) * 100 * zoom;

                        ctx.fillStyle = mainMarkerColor;
                        ctx.beginPath();
                        ctx.arc(x, y, 12, 0, 2 * Math.PI);
                        ctx.fill();

                        ctx.strokeStyle = theme === 'dark' ? '#fff' : '#000';
                        ctx.lineWidth = 3;
                        ctx.stroke();

                        ctx.fillStyle = theme === 'dark' ? '#fff' : '#000';
                        ctx.font = 'bold 14px Inter, sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText(location.name, x, y - 20);
                    });

                    // Draw nearby location markers if enabled
                    if (showNearbyMarkers && nearbyLocations.length > 0) {
                        nearbyLocations.forEach(location => {
                            const x = width / 2 + (location.lng - centerLng) * 100 * zoom;
                            const y = height / 2 + (location.lat - centerLng) * 100 * zoom;

                            ctx.fillStyle = nearbyMarkerColor;
                            ctx.beginPath();
                            ctx.arc(x, y, 8, 0, 2 * Math.PI);
                            ctx.fill();

                            ctx.strokeStyle = theme === 'dark' ? '#fff' : '#000';
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            ctx.fillStyle = theme === 'dark' ? '#fff' : '#000';
                            ctx.font = '12px Inter, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(location.name, x, y - 15);
                        });
                    }

                    const message = document.createElement('div');
                    message.style.cssText = `
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: rgba(255, 255, 255, 0.9);
                        padding: 8px 12px;
                        border-radius: 4px;
                        font-size: 12px;
                        color: #666;
                        backdrop-filter: blur(10px);
                    `;
                    message.textContent = 'Enhanced Map (Fallback Mode)';
                    container.appendChild(message);
                }
            });
        }
    }

    registerCarousel() {
        if (!customElements.get('ui-carousel')) {
            customElements.define('ui-carousel', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const images = this.getAttribute('images')?.split(',') || [];
                    const interval = parseInt(this.getAttribute('interval')) || 3000;
                    
                    let html = '<div class="carousel">';
                    if (images.length > 0) {
                        html += `<img src="${images[0]}" alt="Carousel image" class="carousel-image">`;
                    }
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerQuiz() {
        if (!customElements.get('ui-quiz')) {
            customElements.define('ui-quiz', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const question = this.getAttribute('question') || 'Question?';
                    const options = JSON.parse(this.getAttribute('options') || '[]');
                    
                    let html = '<div class="quiz">';
                    html += `<div class="quiz-question">${question}</div>`;
                    html += '<div class="quiz-options">';
                    options.forEach(option => {
                        html += `<div class="quiz-option">${option.text}</div>`;
                    });
                    html += '</div>';
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerKeypoints() {
        if (!customElements.get('ui-keypoints')) {
            customElements.define('ui-keypoints', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = JSON.parse(this.getAttribute('items') || '[]');
                    
                    let html = '<div class="keypoints" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 1.4rem;">Key Points</h3>';
                    items.forEach((item, index) => {
                        html += `
                            <div class="keypoint-item" style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; padding: 1rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                                <div class="keypoint-dot" style="width: 2rem; height: 2rem; border-radius: 50%; background: var(--gradient-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; flex-shrink: 0;">${index + 1}</div>
                                <div class="keypoint-text" style="flex: 1; line-height: 1.6; color: var(--color-dark);">${item.text}</div>
                            </div>
                        `;
                    });
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerTimeline() {
        if (!customElements.get('ui-timeline')) {
            customElements.define('ui-timeline', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = JSON.parse(this.getAttribute('items') || '[]');
                    
                    let html = '<div class="timeline" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative;">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 2rem; font-size: 1.4rem;">Timeline</h3>';
                    
                    // Add timeline line
                    html += '<div style="position: absolute; left: 2rem; top: 4rem; bottom: 2rem; width: 2px; background: var(--gradient-primary);"></div>';
                    
                    items.forEach((item, index) => {
                        html += `
                            <div class="timeline-item" style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem; position: relative;">
                                <div class="timeline-marker" style="width: 1rem; height: 1rem; border-radius: 50%; background: var(--gradient-primary); border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); flex-shrink: 0; margin-top: 0.5rem;"></div>
                                <div class="timeline-content" style="flex: 1; padding-left: 1rem;">
                                    <h4 style="color: var(--color-primary); margin: 0 0 0.5rem 0; font-size: 1.2rem;">${item.title}</h4>
                                    <p style="color: var(--color-dark); line-height: 1.6; margin: 0;">${item.detail}</p>
                                </div>
                            </div>
                        `;
                    });
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerResources() {
        if (!customElements.get('ui-resources')) {
            customElements.define('ui-resources', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    // Try both 'items' and 'resources' attributes
                    const itemsAttr = this.getAttribute('items');
                    const resourcesAttr = this.getAttribute('resources');
                    const items = itemsAttr ? JSON.parse(itemsAttr) : (resourcesAttr ? JSON.parse(resourcesAttr) : []);
                    
                    let html = '<div class="resources" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 1.4rem;">Resources</h3>';
                    items.forEach(item => {
                        html += `
                            <a href="${item.url}" class="resource-item" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 0.5rem; transition: all 0.3s ease; text-decoration: none; color: inherit; margin-bottom: 1rem;">
                                <div class="resource-icon" style="width: 2rem; height: 2rem; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem;">🔗</div>
                                <div class="resource-content" style="flex: 1;">
                                    <h4 class="resource-title" style="font-weight: 600; color: var(--color-dark); margin: 0 0 0.25rem 0;">${item.title}</h4>
                                    <p class="resource-description" style="color: var(--color-dark); opacity: 0.7; font-size: 0.9rem; margin: 0;">${item.description}</p>
                                </div>
                            </a>
                        `;
                    });
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerCodeBlock() {
        if (!customElements.get('ui-code-block')) {
            customElements.define('ui-code-block', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const title = this.getAttribute('title') || 'Code';
                    const content = this.getAttribute('content') || 'console.log("Hello World!");';
                    const language = this.getAttribute('language') || 'javascript';
                    
                    this.innerHTML = `
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-title">${title}</span>
                                <button class="copy-btn">Copy</button>
                            </div>
                            <pre><code class="language-${language}">${content}</code></pre>
                        </div>
                    `;
                }
            });
        }
    }

    registerSuggestions() {
        if (!customElements.get('ui-suggestions')) {
            customElements.define('ui-suggestions', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = this.getAttribute('items')?.split(',') || [];
                    
                    let html = '<div class="suggestions" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 1.4rem;">Suggestions</h3>';
                    html += '<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">';
                    items.forEach(item => {
                        html += `<div class="suggestion-item" style="padding: 0.5rem 1rem; background: var(--gradient-primary); color: white; border-radius: 2rem; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all 0.3s ease;">${item.trim()}</div>`;
                    });
                    html += '</div></div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerScrollytelling() {
        if (!customElements.get('ui-scrollytelling')) {
            customElements.define('ui-scrollytelling', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const steps = JSON.parse(this.getAttribute('steps') || '[]');
                    
                    let html = '<div class="scrollytelling">';
                    steps.forEach((step, index) => {
                        html += `
                            <div class="scrolly-step ${index === 0 ? 'active' : ''}">
                                <h4>${step.title}</h4>
                                <p>${step.content}</p>
                            </div>
                        `;
                    });
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerCardStack() {
        if (!customElements.get('ui-card-stack')) {
            customElements.define('ui-card-stack', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const items = JSON.parse(this.getAttribute('items') || '[]');
                    
                    let html = '<div class="card-stack" style="position: relative; height: 400px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 2rem; font-size: 1.4rem;">Card Stack</h3>';
                    items.forEach((item, index) => {
                        const offset = index * 8;
                        html += `
                            <div class="stack-card" style="position: absolute; top: ${4 + offset}rem; left: ${offset}px; right: ${offset}px; background: white; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid rgba(0,0,0,0.1); z-index: ${items.length - index}; transition: all 0.3s ease;">
                                <h4 style="color: var(--color-primary); margin: 0 0 0.5rem 0; font-size: 1.2rem;">${item.title}</h4>
                                <p style="color: var(--color-dark); line-height: 1.6; margin: 0;">${item.content}</p>
                            </div>
                        `;
                    });
                    html += '</div>';
                    
                    this.innerHTML = html;
                }
            });
        }
    }

    registerTicker() {
        if (!customElements.get('ui-ticker')) {
            customElements.define('ui-ticker', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    // Try both 'items' and 'lines' attributes
                    const itemsAttr = this.getAttribute('items');
                    const linesAttr = this.getAttribute('lines');
                    
                    let items = [];
                    if (itemsAttr) {
                        items = itemsAttr.split(',');
                    } else if (linesAttr) {
                        try {
                            items = JSON.parse(linesAttr);
                        } catch (e) {
                            items = [];
                        }
                    }
                    
                    let html = '<div class="ticker" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden;">';
                    html += '<h3 style="color: var(--color-primary); margin-bottom: 1rem; font-size: 1.2rem;">Live Ticker</h3>';
                    html += '<div class="ticker-container" style="display: flex; gap: 2rem; animation: ticker 20s linear infinite;">';
                    items.forEach(item => {
                        const text = typeof item === 'string' ? item.trim() : item;
                        html += `<div class="ticker-item" style="background: var(--gradient-primary); color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; white-space: nowrap; font-weight: 500;">${text}</div>`;
                    });
                    html += '</div></div>';
                    
                    this.innerHTML = html;
                    
                    // Add CSS animation
                    if (!document.querySelector('#ticker-styles')) {
                        const style = document.createElement('style');
                        style.id = 'ticker-styles';
                        style.textContent = `
                            @keyframes ticker {
                                0% { transform: translateX(100%); }
                                100% { transform: translateX(-100%); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                }
            });
        }
    }

    registerNotification() {
        if (!customElements.get('ui-notification')) {
            customElements.define('ui-notification', class extends HTMLElement {
                connectedCallback() {
                    this.render();
                }

                render() {
                    const type = this.getAttribute('type') || 'info';
                    const title = this.getAttribute('title') || 'Notification';
                    const message = this.getAttribute('message') || 'This is a notification message.';
                    
                    this.innerHTML = `
                        <div class="notification notification-${type}">
                            <div class="notification-header">
                                <h4>${title}</h4>
                                <button class="notification-close">×</button>
                            </div>
                            <div class="notification-content">${message}</div>
                        </div>
                    `;
                }
            });
        }
    }
}

// Initialize the Simple Components API
new SimpleComponents();
