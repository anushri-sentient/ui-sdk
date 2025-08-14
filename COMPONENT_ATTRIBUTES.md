# 🎨 Complete UI Component Attributes Reference

This document provides a comprehensive list of all available attributes for each of the 26 UI components, allowing for extensive customization and flexibility.

---

## 📦 Basic Components

### 📋 Card Component (`<ui-card>`)

**All Attributes:**
- `title` (string) - Card title text
- `subtitle` (string) - Card subtitle text  
- `image` (URL) - Card image URL
- `content` (string) - Card content text
- `actionText` (string) - Primary action button text
- `actionLink` (URL) - Primary action button link
- `secondaryActionText` (string) - Secondary action button text
- `secondaryActionLink` (URL) - Secondary action button link
- `badge` (string) - Badge text (e.g., "New", "Featured", "Sale")
- `rating` (number) - Rating value (e.g., "4.8")
- `features` (comma-separated) - Feature list
- `variant` (string) - Card style: `default`, `elevated`, `outlined`, `minimal`
- `size` (string) - Card size: `small`, `medium`, `large`
- `theme` (string) - Color theme: `primary`, `secondary`, `success`, `warning`, `danger`

**Example:**
```html
<ui-card 
    title="Premium Coffee Experience"
    subtitle="Artisan Roasted & Handcrafted"
    image="https://picsum.photos/400/250?random=1"
    rating="4.8"
    features="Single Origin Beans,Organic Certified,Small Batch Roasting"
    content="Discover our signature coffee blend, carefully crafted from the finest single-origin beans."
    actionText="Order Now"
    actionLink="#"
    secondaryActionText="View Details"
    secondaryActionLink="#"
    badge="Popular"
    variant="default"
    size="medium"
/>
```

### 🏷️ Badge Component (`<ui-badge>`)

**All Attributes:**
- `label` (string) - Badge text
- `color` (string) - Badge color: `primary`, `success`, `warning`, `danger`, `info`
- `size` (string) - Badge size: `small`, `medium`, `large`
- `variant` (string) - Badge style: `filled`, `outlined`, `soft`
- `rounded` (boolean) - Enable rounded corners

**Example:**
```html
<ui-badge label="New" color="primary" size="medium" variant="filled" />
<ui-badge label="Active" color="success" size="small" variant="outlined" />
```

### 👤 Avatar Component (`<ui-avatar>`)

**All Attributes:**
- `src` (string) - Avatar image URL or emoji
- `size` (string) - Avatar size: `small`, `medium`, `large`
- `alt` (string) - Alt text for accessibility
- `status` (string) - Status indicator: `online`, `offline`, `away`, `busy`
- `shape` (string) - Avatar shape: `circle`, `square`, `rounded`

**Example:**
```html
<ui-avatar src="👤" size="medium" status="online" shape="circle" />
<ui-avatar src="https://picsum.photos/100/100" size="large" alt="User Avatar" />
```

### 🏷️ Chips Component (`<ui-chips>`)

**All Attributes:**
- `labels` (comma-separated) - Chip labels
- `color` (string) - Chip color: `primary`, `secondary`, `success`, `warning`, `danger`
- `size` (string) - Chip size: `small`, `medium`, `large`
- `variant` (string) - Chip style: `filled`, `outlined`, `soft`
- `removable` (boolean) - Enable remove functionality

**Example:**
```html
<ui-chips 
    labels="React,Vue,Angular,TypeScript"
    color="primary"
    size="medium"
    variant="filled"
    removable="true"
/>
```

### ➗ Divider Component (`<ui-divider>`)

**All Attributes:**
- `label` (string) - Divider label text
- `style` (string) - Line style: `solid`, `dashed`, `dotted`
- `orientation` (string) - Orientation: `horizontal`, `vertical`
- `size` (string) - Line thickness: `thin`, `medium`, `thick`
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`

**Example:**
```html
<ui-divider 
    label="Section Break"
    style="dashed"
    orientation="horizontal"
    size="medium"
    theme="primary"
/>
```

### 📝 List Component (`<ui-list>`)

**All Attributes:**
- `items` (comma-separated) - List items
- `type` (string) - List type: `unordered`, `ordered`, `description`
- `size` (string) - List size: `small`, `medium`, `large`
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `bordered` (boolean) - Add borders between items

**Example:**
```html
<ui-list 
    items="Item 1,Item 2,Item 3,Item 4"
    type="unordered"
    size="medium"
    theme="primary"
    bordered="true"
/>
```

---

## 📊 Data Components

### 📊 Table Component (`<ui-table>`)

**All Attributes:**
- `headers` (comma-separated) - Column headers
- `rows` (semicolon-separated) - Data rows (comma-separated cells)
- `striped` (boolean) - Enable row striping
- `hoverable` (boolean) - Enable row hover effects
- `compact` (boolean) - Use compact spacing
- `bordered` (boolean) - Add borders to cells
- `sortable` (boolean) - Enable column sorting
- `searchable` (boolean) - Enable search functionality
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `size` (string) - Table size: `small`, `medium`, `large`

**Example:**
```html
<ui-table 
    headers="Name,Email,Role,Status,Last Active"
    rows="John Doe,john@example.com,Senior Developer,Active,2 hours ago;Jane Smith,jane@example.com,UI Designer,Active,1 hour ago;Bob Johnson,bob@example.com,Product Manager,Inactive,3 days ago"
    striped="true"
    hoverable="true"
    compact="false"
    sortable="true"
    searchable="true"
    theme="primary"
    size="medium"
/>
```

---

## 🎮 Interactive Components

### 📂 Accordion Component (`<ui-accordion>`)

**All Attributes:**
- `items` (JSON array) - Array of {title, content} objects
- `multiple` (boolean) - Allow multiple sections open simultaneously
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `size` (string) - Accordion size: `small`, `medium`, `large`
- `animation` (string) - Animation type: `slide`, `fade`, `bounce`
- `icon` (string) - Custom icon: `arrow`, `plus`, `chevron`, `custom`

**Example:**
```html
<ui-accordion 
    items='[{"title":"What is this platform?","content":"This is a modern UI component generator."},{"title":"How to use components?","content":"Simply use the custom HTML tags with appropriate attributes."},{"title":"Is it responsive?","content":"Yes! All components are fully responsive."}]'
    multiple="true"
    theme="primary"
    animation="slide"
    icon="chevron"
/>
```

### 🎠 Carousel Component (`<ui-carousel>`)

**All Attributes:**
- `images` (comma-separated) - Image URLs
- `interval` (milliseconds) - Auto-advance interval
- `autoplay` (boolean) - Enable auto-advance
- `showArrows` (boolean) - Show navigation arrows
- `showDots` (boolean) - Show navigation dots
- `loop` (boolean) - Enable infinite loop
- `fade` (boolean) - Use fade transition instead of slide
- `height` (string) - Carousel height (e.g., "400px", "50vh")
- `theme` (string) - Color theme: `default`, `primary`, `dark`, `light`
- `overlay` (boolean) - Show image overlay with captions

**Example:**
```html
<ui-carousel 
    images="https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3"
    interval="4000"
    autoplay="true"
    showArrows="true"
    showDots="true"
    loop="true"
    height="500px"
    theme="dark"
    overlay="true"
/>
```

### 🧠 Quiz Component (`<ui-quiz>`)

**All Attributes:**
- `question` (string) - Quiz question text
- `options` (JSON array) - Array of {text, isCorrect} objects
- `theme` (string) - Color theme: `primary`, `secondary`
- `showResults` (boolean) - Show results after submission
- `timeLimit` (seconds) - Time limit for quiz
- `multipleChoice` (boolean) - Allow multiple correct answers

**Example:**
```html
<ui-quiz 
    question="What is the most important aspect of web development?"
    options='[{"text":"Design","isCorrect":false},{"text":"Performance","isCorrect":true},{"text":"Content","isCorrect":false},{"text":"SEO","isCorrect":false}]'
    theme="primary"
    showResults="true"
    timeLimit="60"
    multipleChoice="false"
/>
```

### 🔑 Keypoints Component (`<ui-keypoints>`)

**All Attributes:**
- `items` (JSON array) - Array of {text} objects
- `updatedAt` (string) - Last update timestamp
- `confidence` (number) - Confidence score (0-1)
- `skeletonCount` (number) - Number of skeleton items to show
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`

**Example:**
```html
<ui-keypoints 
    items='[{"text":"Retrieval grounding improves factuality"},{"text":"Use citations for verifiability"},{"text":"Prefer streaming markdown for long answers"}]'
    updatedAt="just now"
    confidence="0.86"
    skeletonCount="3"
    theme="primary"
/>
```

### ⏱️ Timeline Component (`<ui-timeline>`)

**All Attributes:**
- `items` (JSON array) - Array of {title, detail, status} objects
- `current` (number) - Current step index
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `orientation` (string) - Timeline orientation: `vertical`, `horizontal`
- `showConnectors` (boolean) - Show connecting lines

**Example:**
```html
<ui-timeline 
    items='[{"title":"Ingest question","detail":"Parse intent and constraints","status":"done"},{"title":"Plan","detail":"Generate outline and tools","status":"current"},{"title":"Answer","detail":"Stream markdown","status":"pending"}]'
    current="1"
    theme="primary"
    orientation="vertical"
    showConnectors="true"
/>
```

### 📚 Resources Component (`<ui-resources>`)

**All Attributes:**
- `items` (JSON array) - Array of {title, description, url} objects
- `layout` (string) - Layout type: `grid`, `list`, `cards`
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `showIcons` (boolean) - Show resource type icons
- `searchable` (boolean) - Enable search functionality

**Example:**
```html
<ui-resources 
    items='[{"title":"Documentation","description":"Official documentation","url":"https://example.com"},{"title":"Tutorial","description":"Step-by-step guide","url":"https://example.com/tutorial"}]'
    layout="grid"
    theme="primary"
    showIcons="true"
    searchable="true"
/>
```

### 💻 Code Block Component (`<ui-code-block>`)

**All Attributes:**
- `title` (string) - Code block title
- `content` (string) - Code content
- `language` (string) - Programming language for syntax highlighting
- `theme` (string) - Code theme: `light`, `dark`, `monokai`, `github`
- `showLineNumbers` (boolean) - Show line numbers
- `copyable` (boolean) - Enable copy functionality
- `collapsible` (boolean) - Allow code block to be collapsed

**Example:**
```html
<ui-code-block 
    title="Example JavaScript Function"
    content="function hello() { console.log('Hello, World!'); }"
    language="javascript"
    theme="dark"
    showLineNumbers="true"
    copyable="true"
    collapsible="true"
/>
```

### 💡 Suggestions Component (`<ui-suggestions>`)

**All Attributes:**
- `items` (comma-separated) - Suggestion items
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `layout` (string) - Layout type: `list`, `grid`, `tags`
- `clickable` (boolean) - Make suggestions clickable
- `maxItems` (number) - Maximum number of items to show

**Example:**
```html
<ui-suggestions 
    items="Suggestion 1,Suggestion 2,Suggestion 3,Suggestion 4"
    theme="primary"
    layout="list"
    clickable="true"
    maxItems="5"
/>
```

### 📜 Scrollytelling Component (`<ui-scrollytelling>`)

**All Attributes:**
- `steps` (JSON array) - Array of {title, content} objects
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `animation` (string) - Animation type: `fade`, `slide`, `zoom`
- `trigger` (string) - Scroll trigger: `viewport`, `element`, `percentage`
- `sticky` (boolean) - Keep content sticky during scroll

**Example:**
```html
<ui-scrollytelling 
    steps='[{"title":"Step 1","content":"First step content"},{"title":"Step 2","content":"Second step content"}]'
    theme="primary"
    animation="fade"
    trigger="viewport"
    sticky="true"
/>
```

### 🎵 Lyric Component (`<ui-lyric>`)

**All Attributes:**
- `text` (string) - Text to stream/highlight
- `mode` (string) - Streaming mode: `word`, `line`
- `cursor` (boolean) - Show blinking cursor
- `speed` (number) - Animation speed in milliseconds (default: 200)
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `fontSize` (string) - Font size (e.g., `1rem`, `1.2rem`)
- `lineHeight` (string) - Line height (e.g., `1.5`, `2`)
- `pauseOnHover` (boolean) - Pause animation on hover
- `loop` (boolean) - Loop the animation
- `highlightColor` (string) - Custom highlight color
- `cursorColor` (string) - Custom cursor color

**Example:**
```html
<ui-lyric 
    text="These are streamed words that highlight one-by-one for better focus."
    mode="word"
    cursor="true"
    speed="200"
    theme="primary"
    fontSize="1.1rem"
    lineHeight="1.8"
    pauseOnHover="true"
    loop="true"
    highlightColor="hsl(25 95% 60%)"
    cursorColor="hsl(25 95% 60%)"
/>
```

### 🃏 Card Stack Component (`<ui-card-stack>`)

**All Attributes:**
- `items` (JSON array) - Array of {title, content} objects
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `animation` (string) - Animation type: `flip`, `slide`, `fade`
- `autoAdvance` (boolean) - Auto-advance through cards
- `showNavigation` (boolean) - Show navigation controls

**Example:**
```html
<ui-card-stack 
    items='[{"title":"Card 1","content":"First card content"},{"title":"Card 2","content":"Second card content"}]'
    theme="primary"
    animation="flip"
    autoAdvance="true"
    showNavigation="true"
/>
```

### 🔦 Spotlight Component (`<ui-spotlight>`)

**All Attributes:**
- `sections` (JSON array) - Array of {title, text} objects
- `activeIndex` (number) - Index of initially active section (default: 0)
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `animation` (string) - Animation type: `slide`, `fade`, `scale`
- `autoRotate` (boolean) - Auto-rotate through sections
- `rotateSpeed` (number) - Rotation speed in milliseconds
- `showIndicators` (boolean) - Show section indicators
- `fullscreen` (boolean) - Enable fullscreen mode
- `keyboardNav` (boolean) - Enable keyboard navigation
- `touchSwipe` (boolean) - Enable touch swipe on mobile

**Example:**
```html
<ui-spotlight 
    sections='[{"title":"Problem","text":"Describe the problem succinctly."},{"title":"Approach","text":"Lay out a step-by-step plan."},{"title":"Answer","text":"Deliver the final result with citations."}]'
    activeIndex="0"
    theme="primary"
    animation="slide"
    autoRotate="true"
    rotateSpeed="5000"
    showIndicators="true"
    fullscreen="false"
    keyboardNav="true"
    touchSwipe="true"
/>
```

### 📰 Ticker Component (`<ui-ticker>`)

**All Attributes:**
- `items` (comma-separated) - Ticker items
- `speed` (string) - Scroll speed: `slow`, `medium`, `fast`
- `direction` (string) - Scroll direction: `left`, `right`
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `pauseOnHover` (boolean) - Pause on mouse hover

**Example:**
```html
<ui-ticker 
    items="Breaking News,Latest Updates,Important Announcement,Special Offer"
    speed="medium"
    direction="left"
    theme="primary"
    pauseOnHover="true"
/>
```

### 💫 Card Swiper Component (`<ui-card-swiper>`)

**All Attributes:**
- `cards` (JSON array) - Array of card objects with id, title, subtitle, image, description, rating, tags
- `showActions` (boolean) - Show accept/reject action buttons
- `autoSwipe` (boolean) - Enable automatic swiping demo
- `swipeThreshold` (number) - Minimum swipe distance to trigger action (default: 100)
- `animationDuration` (number) - Animation duration in milliseconds (default: 300)
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `size` (string) - Swiper size: `small`, `medium`, `large`
- `orientation` (string) - Swipe direction: `horizontal`, `vertical`
- `hapticFeedback` (boolean) - Enable haptic feedback on mobile
- `soundEffects` (boolean) - Enable sound effects

**Example:**
```html
<ui-card-swiper 
    cards='[{"id":"1","title":"Coffee Shop","subtitle":"Artisan Coffee","image":"https://picsum.photos/400/600?random=1","description":"Best coffee in town","rating":"4.8","tags":"Coffee,Atmosphere,WiFi"},{"id":"2","title":"Tech Conference","subtitle":"Innovation Summit","image":"https://picsum.photos/400/600?random=2","description":"Join the biggest tech event","rating":"4.9","tags":"Technology,Networking,Learning"}]'
    showActions="true"
    autoSwipe="false"
    swipeThreshold="100"
    animationDuration="300"
    theme="primary"
    size="medium"
    orientation="horizontal"
    hapticFeedback="true"
    soundEffects="false"
/>
```

### 📅 Interactive Calendar Component (`<ui-calendar>`)

**All Attributes:**
- `events` (JSON array) - Array of event objects with id, title, date, time, duration, type, color
- `view` (string) - Calendar view: `month`, `week`, `day`
- `theme` (string) - Color theme: `primary`, `success`, `warning`, `danger`, `info`
- `showToday` (boolean) - Highlight today's date
- `selectable` (boolean) - Allow date selection
- `multiSelect` (boolean) - Allow multiple date selection
- `firstDay` (string) - First day of week: `monday`, `sunday`
- `locale` (string) - Calendar locale (e.g., `en-US`, `es-ES`)
- `timezone` (string) - Timezone for events
- `eventLimit` (number) - Maximum events to show per day
- `dragAndDrop` (boolean) - Enable drag and drop for events
- `recurringEvents` (boolean) - Support for recurring events
- `eventCategories` (JSON array) - Event category definitions
- `workingHours` (JSON object) - Working hours configuration
- `holidays` (JSON array) - Holiday definitions

**Example:**
```html
<ui-calendar 
    events='[{"id":"1","title":"Team Meeting","date":"2024-01-15","time":"10:00","duration":"60","type":"meeting","color":"primary"},{"id":"2","title":"Project Deadline","date":"2024-01-20","time":"17:00","duration":"0","type":"deadline","color":"danger"}]'
    view="month"
    theme="primary"
    showToday="true"
    selectable="true"
    multiSelect="false"
    firstDay="monday"
    locale="en-US"
    timezone="America/New_York"
    eventLimit="5"
    dragAndDrop="true"
    recurringEvents="true"
    eventCategories='[{"id":"meeting","name":"Meetings","color":"primary"},{"id":"deadline","name":"Deadlines","color":"danger"}]'
    workingHours='{"start":"09:00","end":"17:00","days":[1,2,3,4,5]}'
    holidays='[{"date":"2024-01-01","name":"New Year","color":"danger"}]'
/>
```

---

## 📢 Feedback Components

### ⚠️ Alert Component (`<ui-alert>`)

**All Attributes:**
- `type` (string) - Alert type: `success`, `error`, `warning`, `info`
- `message` (string) - Alert message text
- `duration` (milliseconds) - Auto-dismiss duration
- `dismissible` (boolean) - Allow manual dismissal
- `icon` (string) - Custom icon: `check`, `x`, `warning`, `info`, `custom`
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`

**Example:**
```html
<ui-alert 
    type="success"
    message="Your changes have been saved successfully!"
    duration="5000"
    dismissible="true"
    icon="check"
    theme="success"
/>
```

### 🔔 Notification Component (`<ui-notification>`)

**All Attributes:**
- `type` (string) - Notification type: `success`, `error`, `warning`, `info`
- `title` (string) - Notification title
- `message` (string) - Notification message
- `duration` (milliseconds) - Auto-dismiss duration
- `position` (string) - Position: `top-right`, `top-left`, `bottom-right`, `bottom-left`
- `dismissible` (boolean) - Allow manual dismissal
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`

**Example:**
```html
<ui-notification 
    type="success"
    title="Success!"
    message="Your action was completed successfully."
    duration="3000"
    position="top-right"
    dismissible="true"
    theme="success"
/>
```

---

## 🗺️ Media Components

### 🗺️ Map Component (`<ui-map>`)

**All Attributes:**
- `latitude` (number) - Map center latitude
- `longitude` (number) - Map center longitude
- `zoom` (number) - Map zoom level (1-18)
- `height` (string) - Map height (e.g., "400px", "50vh")
- `theme` (string) - Map theme: `light`, `dark`, `satellite`, `terrain`
- `showControls` (boolean) - Show map controls
- `markers` (JSON array) - Array of {lat, lng, title} objects

**Example:**
```html
<ui-map 
    latitude="40.7128"
    longitude="-74.0060"
    zoom="10"
    height="400px"
    theme="light"
    showControls="true"
    markers='[{"lat":40.7128,"lng":-74.0060,"title":"New York"}]'
/>
```

### 🗺️ Enhanced Map Component (`<ui-enhanced-map>`)

**All Attributes:**
- `latitude` (number) - Map center latitude
- `longitude` (number) - Map center longitude
- `zoom` (number) - Map zoom level (1-18)
- `height` (string) - Map height
- `theme` (string) - Map theme: `light`, `dark`, `satellite`, `terrain`
- `showControls` (boolean) - Show map controls
- `markers` (JSON array) - Array of marker objects
- `routes` (JSON array) - Array of route objects
- `clusters` (boolean) - Enable marker clustering

**Example:**
```html
<ui-enhanced-map 
    latitude="40.7128"
    longitude="-74.0060"
    zoom="10"
    height="400px"
    theme="light"
    showControls="true"
    markers='[{"lat":40.7128,"lng":-74.0060,"title":"New York","icon":"🏙️"}]'
    routes='[{"from":{"lat":40.7128,"lng":-74.0060},"to":{"lat":40.7589,"lng":-73.9851}}]'
    clusters="true"
/>
```

### 🗺️ Dynamic Map Component (`<ui-dynamic-map>`)

**All Attributes:**
- `latitude` (number) - Map center latitude
- `longitude` (number) - Map center longitude
- `zoom` (number) - Map zoom level (1-18)
- `height` (string) - Map height
- `theme` (string) - Map theme: `light`, `dark`, `satellite`, `terrain`
- `showControls` (boolean) - Show map controls
- `markers` (JSON array) - Array of marker objects
- `realTime` (boolean) - Enable real-time updates
- `heatmap` (boolean) - Show heatmap overlay

**Example:**
```html
<ui-dynamic-map 
    latitude="40.7128"
    longitude="-74.0060"
    zoom="10"
    height="400px"
    theme="light"
    showControls="true"
    markers='[{"lat":40.7128,"lng":-74.0060,"title":"New York","color":"red"}]'
    realTime="true"
    heatmap="true"
/>
```

### 🎬 Advanced Media Player Component (`<ui-media-player>`)

**All Attributes:**
- `type` (string) - Media type: `video`, `audio`
- `src` (string) - Media source URL
- `poster` (string) - Poster image URL (for video)
- `title` (string) - Media title
- `description` (string) - Media description
- `autoplay` (boolean) - Auto-play media
- `loop` (boolean) - Loop media
- `muted` (boolean) - Start muted
- `controls` (boolean) - Show native controls
- `playlist` (JSON array) - Playlist items
- `showPlaylist` (boolean) - Show playlist panel
- `theme` (string) - Player theme: `light`, `dark`
- `quality` (string) - Default quality: `auto`, `1080p`, `720p`, `480p`, `360p`
- `subtitles` (JSON array) - Subtitle tracks
- `chapters` (JSON array) - Chapter markers
- `analytics` (boolean) - Enable analytics tracking
- `keyboardControls` (boolean) - Enable keyboard shortcuts
- `pictureInPicture` (boolean) - Enable PiP mode
- `castSupport` (boolean) - Enable casting support
- `downloadable` (boolean) - Allow downloads
- `adaptiveBitrate` (boolean) - Enable adaptive bitrate streaming
- `liveStream` (boolean) - Live stream mode
- `dvr` (boolean) - DVR functionality for live streams

**Example:**
```html
<ui-media-player 
    type="video"
    src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    poster="https://picsum.photos/800/450?random=1"
    title="Sample Video"
    description="A beautiful sample video for demonstration"
    autoplay="false"
    loop="false"
    muted="false"
    controls="true"
    playlist='[{"id":"1","title":"Sample Video 1","src":"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4","poster":"https://picsum.photos/800/450?random=1","duration":"00:01:15"},{"id":"2","title":"Sample Video 2","src":"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4","poster":"https://picsum.photos/800/450?random=2","duration":"00:02:30"}]'
    showPlaylist="true"
    theme="dark"
    quality="auto"
    subtitles='[{"src":"subtitles.vtt","label":"English","srclang":"en"}]'
    chapters='[{"title":"Introduction","time":0},{"title":"Main Content","time":30},{"title":"Conclusion","time":60}]'
    analytics="true"
    keyboardControls="true"
    pictureInPicture="true"
    castSupport="true"
    downloadable="false"
    adaptiveBitrate="true"
    liveStream="false"
    dvr="false"
 />
```

---

## 📐 Layout Components

### 📑 Tabs Component (`<ui-tabs>`)

**All Attributes:**
- `tabs` (JSON array) - Array of {title, content} objects
- `theme` (string) - Color theme: `default`, `primary`, `success`, `warning`, `danger`
- `orientation` (string) - Tab orientation: `horizontal`, `vertical`
- `size` (string) - Tab size: `small`, `medium`, `large`
- `justified` (boolean) - Equal width tabs
- `pills` (boolean) - Use pill-style tabs

**Example:**
```html
<ui-tabs 
    tabs='[{"title":"Overview","content":"Overview content here"},{"title":"Details","content":"Details content here"},{"title":"Settings","content":"Settings content here"}]'
    theme="primary"
    orientation="horizontal"
    size="medium"
    justified="true"
    pills="false"
/>
```

---

## 🎨 Theme Customization

All components support theme customization through CSS custom properties:

```css
:root {
    --brand-hue: 25;                    /* Orange theme */
    --color-primary: hsl(25 95% 60%);   /* Primary color */
    --color-secondary: hsl(45 95% 60%); /* Secondary color */
    --color-success: hsl(142 76% 36%);  /* Success color */
    --color-warning: hsl(38 92% 50%);   /* Warning color */
    --color-danger: hsl(0 84% 60%);     /* Danger color */
    --color-info: hsl(199 89% 48%);     /* Info color */
    --radius-size: 1rem;                /* Border radius */
    --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-large: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --animation-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🚀 Usage Patterns

### 1. HTML Tags (Simplest)
```html
<ui-card title="Hello" content="World"></ui-card>
```

### 2. JavaScript API (Programmatic)
```javascript
UI.card({ title: "Hello", content: "World" });
```

### 3. Visual Builder (No Code)
Use the Component Builder at `/component-builder.html` to visually create components.

---

## 📚 Additional Resources

- **Quick Start Guide**: `/quick-start.html`
- **Usage Examples**: `/usage-examples.html`
- **Component Builder**: `/component-builder.html`
- **Live Demo**: `/components/index.html`
- **Modular Demo**: `/components-modular.html`

This comprehensive attribute reference covers all 26 components with their complete customization options! 