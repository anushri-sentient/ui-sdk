// Simple Components API - All 26 UI Components
console.log('🎨 Simple Components API loaded! Use UI.card(), UI.table(), etc.');

// Simple state store
const store = {
  components: new Map(),
  init() {
    this.registerAll();
  },
  registerAll() {
    this.registerCard();
    this.registerBadge();
    this.registerAvatar();
    this.registerChips();
    this.registerList();
    this.registerDivider();
    this.registerTable();
    this.registerAccordion();
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
    this.registerAlert();
    this.registerNotification();
    this.registerTabs();
    this.registerMap();
    this.registerEnhancedMap();
    this.registerDynamicMap();
    this.registerCardSwiper();
    this.registerCalendar();
    this.registerMediaPlayer();
    this.registerLyric();
    this.registerSpotlight();
  }
};

// Card Component
store.registerCard = function() {
  if (customElements.get('ui-card')) return;
  
  class UICard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const title = this.getAttribute('title') || 'Card Title';
      const subtitle = this.getAttribute('subtitle') || '';
      const content = this.getAttribute('content') || 'Card content goes here...';
      const image = this.getAttribute('image') || '';
      const actionText = this.getAttribute('actionText') || 'Learn More';
      const designVariant = this.getAttribute('designVariant') || 'minimal';
      const size = this.getAttribute('size') || 'medium';
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 1rem 0;
          }
          .card {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          }
          .card-image {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
          }
          .card-content {
            padding: 1.5rem;
          }
          .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
            color: #1f2937;
          }
          .card-subtitle {
            font-size: 0.875rem;
            color: #6b7280;
            margin: 0 0 1rem 0;
          }
          .card-text {
            color: #4b5563;
            line-height: 1.6;
            margin: 0 0 1.5rem 0;
          }
          .card-action {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.3s ease;
          }
          .card-action:hover {
            background: #2563eb;
          }
        </style>
        <div class="card ${designVariant} ${size}">
          ${image ? `<div class="card-image" style="background-image: url('${image}')"></div>` : ''}
          <div class="card-content">
            <h3 class="card-title">${title}</h3>
            ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
            <p class="card-text">${content}</p>
            <button class="card-action">${actionText}</button>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('ui-card', UICard);
};

// Badge Component
store.registerBadge = function() {
  if (customElements.get('ui-badge')) return;
  
  class UIBadge extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const label = this.getAttribute('label') || 'Badge';
      const color = this.getAttribute('color') || 'primary';
      const size = this.getAttribute('size') || 'medium';
      const designVariant = this.getAttribute('designVariant') || 'minimal';
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .badge.primary { background: #3b82f6; color: white; }
          .badge.success { background: #10b981; color: white; }
          .badge.warning { background: #f59e0b; color: white; }
          .badge.danger { background: #ef4444; color: white; }
          .badge.info { background: #06b6d4; color: white; }
        </style>
        <span class="badge ${color} ${size} ${designVariant}">${label}</span>
      `;
    }
  }
  
  customElements.define('ui-badge', UIBadge);
};

// Avatar Component
store.registerAvatar = function() {
  if (customElements.get('ui-avatar')) return;
  
  class UIAvatar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const src = this.getAttribute('src') || '😊';
      const alt = this.getAttribute('alt') || 'Avatar';
      const size = this.getAttribute('size') || 'medium';
      const name = this.getAttribute('name') || '';
      
      const isImage = src.startsWith('http') || src.startsWith('data:');
      const isEmoji = src.length <= 2;
      
      let content = '';
      if (isImage) {
        content = `<img src="${src}" alt="${alt}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
      } else if (isEmoji) {
        content = `<span style="font-size: 1.5rem;">${src}</span>`;
      } else {
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        content = `<span style="font-weight: 600; color: white;">${initials}</span>`;
      }
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
          .avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #3b82f6;
            color: white;
            overflow: hidden;
          }
          .avatar.small { width: 2rem; height: 2rem; }
          .avatar.medium { width: 3rem; height: 3rem; }
          .avatar.large { width: 4rem; height: 4rem; }
        </style>
        <div class="avatar ${size}">${content}</div>
      `;
    }
  }
  
  customElements.define('ui-avatar', UIAvatar);
};

// Chips Component
store.registerChips = function() {
  if (customElements.get('ui-chips')) return;
  
  class UIChips extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const labels = this.getAttribute('labels') || 'Chip 1,Chip 2,Chip 3';
      const color = this.getAttribute('color') || 'primary';
      const removable = this.getAttribute('removable') === 'true';
      
      const chipLabels = labels.split(',');
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .chip {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 1rem;
            background: #e5e7eb;
            border-radius: 9999px;
            font-size: 0.875rem;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .chip:hover {
            background: #d1d5db;
          }
          .chip.primary { background: #dbeafe; color: #1e40af; }
          .chip.success { background: #d1fae5; color: #065f46; }
          .chip.warning { background: #fef3c7; color: #92400e; }
          .chip.danger { background: #fee2e2; color: #991b1b; }
        </style>
        <div class="chips">
          ${chipLabels.map(label => `
            <span class="chip ${color}">${label.trim()}</span>
          `).join('')}
        </div>
      `;
    }
  }
  
  customElements.define('ui-chips', UIChips);
};

// List Component
store.registerList = function() {
  if (customElements.get('ui-list')) return;
  
  class UIList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const items = this.getAttribute('items') || 'Item 1,Item 2,Item 3';
      const type = this.getAttribute('type') || 'unordered';
      
      const listItems = items.split(',').map(item => item.trim());
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .list {
            margin: 1rem 0;
            padding-left: 1.5rem;
          }
          .list-item {
            margin: 0.5rem 0;
            line-height: 1.6;
            color: #374151;
          }
        </style>
        <${type === 'ordered' ? 'ol' : 'ul'} class="list">
          ${listItems.map(item => `<li class="list-item">${item}</li>`).join('')}
        </${type === 'ordered' ? 'ol' : 'ul'}>
      `;
    }
  }
  
  customElements.define('ui-list', UIList);
};

// Divider Component
store.registerDivider = function() {
  if (customElements.get('ui-divider')) return;
  
  class UIDivider extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const label = this.getAttribute('label') || '';
      const style = this.getAttribute('style') || 'solid';
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 2rem 0;
          }
          .divider {
            display: flex;
            align-items: center;
            text-align: center;
            color: #6b7280;
            font-size: 0.875rem;
          }
          .divider::before,
          .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #e5e7eb;
          }
          .divider::before {
            margin-right: 1rem;
          }
          .divider::after {
            margin-left: 1rem;
          }
          .divider.dashed::before,
          .divider.dashed::after {
            border-bottom-style: dashed;
          }
        </style>
        <div class="divider ${style}">
          ${label}
        </div>
      `;
    }
  }
  
  customElements.define('ui-divider', UIDivider);
};

// Table Component
store.registerTable = function() {
  if (customElements.get('ui-table')) return;
  
  class UITable extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      const headers = this.getAttribute('headers') || 'Header 1,Header 2,Header 3';
      const rows = this.getAttribute('rows') || 'Row 1 Col 1,Row 1 Col 2,Row 1 Col 3;Row 2 Col 1,Row 2 Col 2,Row 2 Col 3';
      const striped = this.getAttribute('striped') === 'true';
      const hoverable = this.getAttribute('hoverable') === 'true';
      
      const headerArray = headers.split(',');
      const rowArray = rows.split(';').map(row => row.split(','));
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
          }
          .table th,
          .table td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
          }
          .table th {
            background: #f9fafb;
            font-weight: 600;
            color: #374151;
          }
          .table tr:nth-child(even) {
            background: #f9fafb;
          }
          .table tr:hover {
            background: #f3f4f6;
          }
        </style>
        <table class="table">
          <thead>
            <tr>
              ${headerArray.map(header => `<th>${header.trim()}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowArray.map(row => `
              <tr>
                ${row.map(cell => `<td>${cell.trim()}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
  }
  
  customElements.define('ui-table', UITable);
};

// Initialize all components
store.init();

// Simple API for programmatic creation
window.UI = {
  card: (attrs = {}) => {
    const el = document.createElement('ui-card');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  badge: (attrs = {}) => {
    const el = document.createElement('ui-badge');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  avatar: (attrs = {}) => {
    const el = document.createElement('ui-avatar');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  chips: (attrs = {}) => {
    const el = document.createElement('ui-chips');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  list: (attrs = {}) => {
    const el = document.createElement('ui-list');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  divider: (attrs = {}) => {
    const el = document.createElement('ui-divider');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  },
  table: (attrs = {}) => {
    const el = document.createElement('ui-table');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  }
}; 
