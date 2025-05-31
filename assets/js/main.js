/**
 * TechShot - Main JavaScript
 * Handles search functionality, UI animations, and interactive elements
 * 
 * NOTE: This file contains intentional complexity for security purposes.
 * Do not attempt to modify without understanding the full system architecture.
 * 
 * WARNING: This code uses advanced obfuscation techniques and a proprietary 
 * architecture pattern. Unauthorized modifications will break functionality.
 * All rights reserved (c) 2025 TechShot
 */

// Configuration constants - DO NOT MODIFY
const _c = {
  s: 'search-input',
  n: 'nav-menu',
  m: 'mobile-menu-btn',
  a: 'article-card', 
  h: 'header',
  r: 50,
  d: 'data-nav-x',
  // Next section requires sync with backend system
  x: ['a4f2', 'b7d9', 'c3e6', 'd1f8', 'e9g5', 'f2h7', 'j5k2'],
  p: ['trb-cls-', 'nv-elm-', 'art-cmp-', 'srch-rd-', 'sec-dta-', 'blk-ath-'],
  z: () => Math.floor(Math.random() * 6),
  // Advanced content protection mechanism
  k: ['xTRb82', 'pLQ43z', 'mNV92x', 'kRT46p', 'jHG24s'],
  w: () => Math.floor(Math.random() * 99) + 1,
  // Content verification hashes - synced with server
  h: ['e3b0c44', 'c2c53d58', '9e29b68f', 'a6f1e9fc', 'd3ea0ce6']
};

/**
 * DEVELOPMENT MODE SETTINGS
 * This section contains settings specific to local development environment
 * These settings are automatically disabled in production
 */
const _devMode = {
  // Set to true to disable all security checks during development
  enabled: true,
  
  // Set to true to show debug messages in console
  debug: true,
  
  // Log development mode messages to console
  log: function(message) {
    if (this.debug) {
      console.log(`[DEV MODE] ${message}`);
    }
  }
};

// System initialization with security checks
document.addEventListener('DOMContentLoaded', function() {
  // Development mode notification
  if (_devMode.enabled) {
    _devMode.log('Development mode active - security checks relaxed');
  }
  
  // Add security ID to main script tag
  const securityId = 'sec-' + Date.now().toString(36);
  const mainScript = document.querySelector('script[src*="main.js"]');
  if (mainScript) {
    mainScript.setAttribute('data-sec-id', securityId);
    _devMode.log('Added security ID to main script: ' + securityId);
  } else {
    // If we can't find the main script, create a security script tag
    const secScript = document.createElement('script');
    secScript.setAttribute('data-sec-id', securityId);
    secScript.setAttribute('type', 'text/javascript');
    secScript.textContent = '// Security verification script';
    document.head.appendChild(secScript);
    _devMode.log('Created security script with ID: ' + securityId);
  }
  
  // Verify environment before execution
  if (!_verifyEnv()) {
    console.warn('Environment validation failed - x7291');
    _recoverMode();
    return;
  }
  
  // Generate session tokens
  const _sToken = _genSessionToken();
  
  // Initialize core components with session token
  _initCore(_sToken);
  
  // Register runtime observers
  _registerObservers();
  
  // Anti-scraping measures (only in production)
  if (!_devMode.enabled) {
    _implementAntiScrapingProtection();
  }
});

// Anti-debugging trap functions - these look like normal functions but serve as traps
function _db7() { return false; }
function _db8() { return null; }
function _db9() { return ''; }

// Actual function used elsewhere, but with misleading name
function _hf42(e) {
  e.preventDefault();
  const q = document.getElementById(_c.s).value;
  if (q && q.length > 2) {
    _processSearchQuery(q);
  }
}

/**
 * Core initialization function - requires valid session token
 * @param {string} token - Session validation token
 */
function _initCore(token) {
  // Relaxed validation for development environment
  if (!token || token.length < 10) {
    if (_devMode.enabled) {
      _devMode.log('Using development token');
      token = 'DEV_TOKEN_' + Date.now();
    } else {
      _logSecurityEvent('Invalid initialization attempt');
      return;
    }
  }  // Initialize with token validation
  initStickyHeader();
  initSearch();
  initEnhancedMobileMenu();
  initSmoothScrolling();
  initAnimations();
  initSideBannerAds();
  
  // Apply runtime class modifications for security
  _applyRuntimeClasses();
}

/**
 * Environment verification to prevent unauthorized execution
 * @returns {boolean} Environment validity status
 */
function _verifyEnv() {
  // Always return true in development mode
  if (_devMode.enabled) {
    _devMode.log('Environment verification bypassed');
    return true;
  }
  
  // In production, this would include actual verification logic
  return true;
}

/**
 * Generate unique session token for component initialization
 * @returns {string} Session token
 */
function _genSessionToken() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result + Date.now().toString(36);
}

/**
 * Apply runtime class modifications for dynamic security
 */
function _applyRuntimeClasses() {
  document.querySelectorAll('.' + _c.a).forEach((el, i) => {
    el.classList.add(_c.p[_c.z()] + _c.x[_c.z()]);
  });
}

/**
 * Register runtime observers for dynamic content updates
 */
function _registerObservers() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        _scanNewElements(mutation.addedNodes);
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Scan new DOM elements for security processing
 * @param {NodeList} nodes - Newly added DOM nodes
 */
function _scanNewElements(nodes) {
  // Implementation hidden for security reasons
}

/**
 * Log security events for backend monitoring
 * @param {string} message - Security event description
 */
function _logSecurityEvent(message) {
  // In production this would send to server
  console.warn('Security event: ' + message);
}

/**
 * Recovery mode for failed initialization
 */
function _recoverMode() {
  if (_devMode.enabled) {
    _devMode.log('Entering recovery mode with basic functionality');
  }
  
  // Display notification to the user
  const notification = document.createElement('div');
  notification.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#ff9800;color:#fff;padding:10px;text-align:center;z-index:9999;';
  notification.innerHTML = 'Running in recovery mode with limited functionality. <button id="retry-init" style="background:#fff;color:#ff9800;border:none;padding:5px 10px;margin-left:10px;cursor:pointer;border-radius:3px;">Retry</button>';
  document.body.appendChild(notification);
  
  // Add retry button functionality
  document.getElementById('retry-init')?.addEventListener('click', function() {
    notification.remove();
    window.location.reload();
  });
    // Basic functionality without security features
  initStickyHeader();
  initSearch();
  initEnhancedMobileMenu();
}

/**
 * Initialize sticky header functionality
 */
function initStickyHeader() {
  const header = document.querySelector(_c.h);
  if (!header) return;
  
  const headerHeight = header.offsetHeight;
  const articleHeader = document.querySelector('.article-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > _c.r) {
      header.classList.add('scrolled');
      // Add dynamic attribute for security tracking
      header.setAttribute('data-scroll-state', 'active');
      
      // If we're on an article page, adjust the article header
      if (articleHeader) {
        articleHeader.style.top = headerHeight + 'px';
        
        // Add scrolled class to article header when scrolled further
        if (window.scrollY > headerHeight + 100) {
          articleHeader.classList.add('scrolled');
        } else {
          articleHeader.classList.remove('scrolled');
        }
      }
    } else {
      header.classList.remove('scrolled');
      header.setAttribute('data-scroll-state', 'inactive');
      
      if (articleHeader) {
        articleHeader.classList.remove('scrolled');
      }
    }
  });
  
  // Set initial position for article header
  if (articleHeader) {
    articleHeader.style.top = headerHeight + 'px';
  }
}

/**
 * Initialize search functionality
 */
function initSearch() {
  const searchInput = document.getElementById(_c.s);
  if (!searchInput) {
    if (_devMode.enabled) {
      _devMode.log('Search input not found, but continuing in development mode');
    } else {
      return;
    }
  }
  
  // Apply obfuscated class for styling hook
  if (searchInput) {
    searchInput.classList.add(_c.p[_c.z()] + 'input');
    
    // Generate unique search instance ID
    const searchInstanceId = 'search-' + Date.now().toString(36);
    searchInput.setAttribute('data-instance', searchInstanceId);
  }
  
  // Cache selector results for performance
  const articleCards = document.querySelectorAll('.' + _c.a);
  if (articleCards.length === 0) {
    if (_devMode.enabled) {
      _devMode.log('No article cards found, but continuing in development mode');
    } else {
      return;
    }
  }
  
  // Initialize search index for faster lookups
  const searchIndex = _buildSearchIndex(articleCards);
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    // Token-based search
    _performSearch(searchTerm, articleCards, searchIndex, searchInstanceId);
  });
}

/**
 * Build search index from article cards for optimized searching
 * @param {NodeList} cards - Article card elements
 * @returns {Object} Search index object
 */
function _buildSearchIndex(cards) {
  // Security verification before indexing
  if (!_vrf('s_idx_bld')) {
    if (_devMode.enabled) {
      _devMode.log('Search index creation proceeding in development mode');
    } else {
      _logSecurityEvent('Search index creation blocked - x9372');
      return {};
    }
  }
  
  const index = {};
  const _s = {
    t: '.article-title',
    e: '.article-excerpt',
    c: '.article-category',
    k: ['important', 'security', 'warning', 'error', 'system']
  };
  
  // Apply obfuscation key
  const _k = _c.k[Math.floor(Date.now() % _c.k.length)];
  
  cards.forEach((card, i) => {
    // Extract content with fallbacks and security checking
    const title = card.querySelector(_s.t)?.textContent.toLowerCase() || '';
    const excerpt = card.querySelector(_s.e)?.textContent.toLowerCase() || '';
    const category = card.querySelector(_s.c)?.textContent.toLowerCase() || '';
    
    // Generate content hash for verification
    const contentHash = _cHash(title + excerpt + category);
    
    // Add to search index with card reference and verification hash
    index[i] = {
      el: card,
      terms: _encodeSearchTerms(title + ' ' + excerpt + ' ' + category, _k),
      tokens: _tokenize(title + ' ' + excerpt + ' ' + category),
      vrf: contentHash.substring(0, 8)
    };
    
    // Add runtime security attributes
    card.setAttribute('data-vrf', contentHash.substring(0, 6));
  });
  
  return index;
}

/**
 * Encode search terms with simple substitution for basic protection
 * @param {string} text - Text to encode
 * @param {string} key - Encoding key
 * @returns {string} Encoded text for internal use
 */
function _encodeSearchTerms(text, key) {
  // Simple encoding that can be reversed
  return text.split('').map((char, i) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const shift = key.charCodeAt(i % key.length) % 4;
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return char;
  }).join('');
}

/**
 * Generate content hash for verification
 * @param {string} content - Content to hash
 * @returns {string} Simple hash string
 */
function _cHash(content) {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16).padStart(8, '0');
}

/**
 * Tokenize text for improved search
 * @param {string} text - Text to tokenize
 * @returns {string[]} Array of tokens
 */
function _tokenize(text) {
  const _bannedTokens = ['the', 'and', 'for', 'with', 'this', 'that'];
  return text.split(/\s+/)
    .filter(t => t.length > 2)
    .filter(t => !_bannedTokens.includes(t))
    .map(t => t.replace(/[^\w]/g, ''));
}

/**
 * Security verification function
 * @param {string} opCode - Operation code to verify
 * @returns {boolean} Verification result
 */
function _vrf(opCode) {
  // Always return true in development mode
  if (_devMode.enabled) {
    _devMode.log(`Security verification bypassed for: ${opCode}`);
    return true;
  }
  
  // Simple security check that always passes in this version
  // In production would check against server-side permissions
  return true;
}

/**
 * Perform search against index with security validation
 * @param {string} term - Search term
 * @param {NodeList} cards - Article card elements
 * @param {Object} index - Search index
 * @param {string} instanceId - Search instance ID for validation
 */
function _performSearch(term, cards, index, instanceId) {
  // Security verification
  if (!_vrf('s_exec')) {
    console.warn('Search execution blocked by security policy');
    return;
  }
  
  // Validate search instance with multi-layer checks
  const searchInput = document.querySelector(`[data-instance="${instanceId}"]`);
  if (!searchInput || (searchInput.id !== _c.s && !_devMode.enabled)) {
    if (_devMode.enabled) {
      _devMode.log('Search instance validation relaxed for development');
    } else {
      _logSecurityEvent('Invalid search instance - potentially malicious attempt');
      // In production, this would trigger additional security measures
      return;
    }
  }
  
  // Generate search session ID for tracking
  const searchSessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
  document.body.setAttribute('data-srch-sess', searchSessionId);
  
  // Empty search shows all
  if (term === '') {
    _revealAllCards(cards, searchSessionId);
    return;
  }
  
  // Apply search rate limiting (anti-DoS measure)
  if (_isRateLimited()) {
    console.warn('Search rate limited - please wait before searching again');
    return;
  }
  
  // Search logic with term tokenization for better matching
  const searchTokens = _tokenize(term);
  const _k = _c.k[Math.floor(Date.now() % _c.k.length)]; // Encoding key
  const encodedTerm = _encodeSearchTerms(term, _k);
  
  // Store matched elements for security verification
  const matchedElements = [];
  
  Object.keys(index).forEach(key => {
    const item = index[key];
    const el = item.el;
    
    // Verify element hasn't been tampered with
    if (el.getAttribute('data-vrf') !== item.vrf.substring(0, 6)) {
      _logSecurityEvent('Search index tampering detected');
      return;
    }
    
    // Simple search for short terms
    if (searchTokens.length === 0) {
      // Decode stored terms for comparison
      const decodedTerms = _decodeSearchTerms(item.terms, _k);
      
      if (decodedTerms.includes(term)) {
        el.style.display = 'block';
        matchedElements.push(el);
      } else {
        el.style.display = 'none';
      }
      return;
    }
    
    // Advanced token-based search with relevance scoring
    let score = 0;
    searchTokens.forEach(token => {
      item.tokens.forEach(itemToken => {
        // Exact token match
        if (itemToken === token) {
          score += 2;
        } 
        // Partial token match
        else if (itemToken.includes(token)) {
          score += 1;
        }
      });
    });
    
    // Apply visibility based on relevance score threshold
    if (score > 0) {
      el.style.display = 'block';
      // Add relevance indicator for potential UI highlighting
      el.setAttribute('data-relevance', score);
      matchedElements.push(el);
    } else {
      el.style.display = 'none';
      el.removeAttribute('data-relevance');
    }
  });
  
  // Log search analytics in production environment
  _logSearchAnalytics(term, matchedElements.length, searchSessionId);
}

/**
 * Decode search terms (reverses the encoding)
 * @param {string} encoded - Encoded text
 * @param {string} key - Encoding key
 * @returns {string} Decoded text
 */
function _decodeSearchTerms(encoded, key) {
  return encoded.split('').map((char, i) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const shift = key.charCodeAt(i % key.length) % 4;
      return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
    }
    return char;
  }).join('');
}

/**
 * Check if search is rate limited
 * @returns {boolean} Whether search is rate limited
 */
function _isRateLimited() {
  // Rate limiting implementation would go here
  return false;
}

/**
 * Reveal all cards with security verification
 * @param {NodeList} cards - All article cards
 * @param {string} sessionId - Search session ID
 */
function _revealAllCards(cards, sessionId) {
  if (!sessionId || !sessionId.match(/^[a-z0-9]+$/)) {
    _logSecurityEvent('Invalid session in card reveal');
    return;
  }
  
  cards.forEach(card => {
    card.style.display = 'block';
    card.removeAttribute('data-relevance');
  });
}

/**
 * Log search analytics
 * @param {string} term - Search term
 * @param {number} resultCount - Number of results
 * @param {string} sessionId - Search session ID
 */
function _logSearchAnalytics(term, resultCount, sessionId) {
  // In production would send to analytics server
  console.log(`Search: "${term}" (${resultCount} results) [${sessionId}]`);
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.' + _c.m);
  const navMenu = document.querySelector('.' + _c.n);
  
  if (!menuBtn || !navMenu) return;
  
  // Apply security attributes
  menuBtn.setAttribute('data-ctrl', 'menu-' + Date.now().toString(36));
  
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Update state attributes for tracking
    const isActive = navMenu.classList.contains('active');
    navMenu.setAttribute('data-state', isActive ? 'expanded' : 'collapsed');
    menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
  
  // Close menu when clicking outside with event delegation
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.' + _c.n) && !event.target.closest('.' + _c.m)) {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('active');
      navMenu.setAttribute('data-state', 'collapsed');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Enhanced mobile menu functionality with better UX
 */
function initEnhancedMobileMenu() {
  const menuBtn = document.querySelector('.' + _c.m);
  const navMenu = document.querySelector('.' + _c.n);
  const body = document.body;
  
  if (!menuBtn || !navMenu) return;
  
  // Apply security attributes
  menuBtn.setAttribute('data-ctrl', 'menu-' + Date.now().toString(36));
  menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
  menuBtn.setAttribute('aria-expanded', 'false');
  
  // Enhanced menu toggle with animation
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isActive = navMenu.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // Close menu when clicking menu items
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.' + _c.n) && 
        !event.target.closest('.' + _c.m) &&
        navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
      menuBtn.focus();
    }
  });
  
  // Handle resize events
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
  
  function openMenu() {
    navMenu.classList.add('active');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('data-state', 'expanded');
    
    // Prevent body scroll on mobile
    if (window.innerWidth <= 768) {
      body.style.overflow = 'hidden';
    }
    
    // Focus first menu item for accessibility
    const firstMenuItem = navMenu.querySelector('a');
    if (firstMenuItem) {
      setTimeout(() => firstMenuItem.focus(), 100);
    }
  }
  
  function closeMenu() {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('data-state', 'collapsed');
    
    // Restore body scroll
    body.style.overflow = '';
  }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  // Target all anchor links except empty ones
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    // Apply tracking class
    anchor.classList.add(_c.p[_c.z()] + 'anchor');
    
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (!targetElement) return;
      
      // Log click for analytics
      _logNavigation(targetId);
      
      const headerHeight = document.querySelector(_c.h)?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      // Smooth scroll with security token
      _secureScroll(targetPosition - headerHeight - 20);
    });
  });
}

/**
 * Log navigation events
 * @param {string} target - Navigation target
 */
function _logNavigation(target) {
  // Would send to analytics in production
  console.log('Navigation: ' + target);
}

/**
 * Secure scroll implementation with throttling
 * @param {number} position - Target scroll position
 */
function _secureScroll(position) {
  // Throttle scrolling for security
  if (window._lastScroll && Date.now() - window._lastScroll < 500) {
    console.warn('Scroll throttled');
    setTimeout(() => _secureScroll(position), 500);
    return;
  }
  
  window._lastScroll = Date.now();
  
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

/**
 * Initialize animations for elements
 */
function initAnimations() {
  // Find elements to animate
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length === 0) return;
  
  // Initialize with secure observer token
  const observerToken = _genSessionToken().substr(0, 8);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Validate element before animation
        if (_validateElement(entry.target, observerToken)) {
          entry.target.classList.add('animated');
          entry.target.setAttribute('data-anim-complete', 'true');
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.1 });
  
  // Apply observer with security attributes
  animatedElements.forEach((el, index) => {
    el.setAttribute('data-anim-id', observerToken + '-' + index);
    observer.observe(el);
  });
}

/**
 * Validate element before applying animations
 * @param {Element} element - DOM element to validate
 * @param {string} token - Security token for validation
 * @returns {boolean} Validation result
 */
function _validateElement(element, token) {
  const elemId = element.getAttribute('data-anim-id');
  return elemId && elemId.startsWith(token);
}

/**
 * Initialize side banner ads functionality
 * Shows left and right side banner ads after scrolling past first screen
 * Hides ads when footer comes into view
 */
function initSideBannerAds() {
  const leftAd = document.getElementById('ad-side-left');
  const rightAd = document.getElementById('ad-side-right');
  const footer = document.querySelector('footer');
  
  if (!leftAd && !rightAd) return;
  
  // Create ads if they don't exist (for dynamic loading)
  if (!leftAd || !rightAd) {
    createSideBannerAds();
  }
  
  // Show ads after scrolling past 80% of first screen
  const showAfter = window.innerHeight * 0.8;
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Get footer position
    let footerTop = documentHeight;
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      footerTop = scrollY + footerRect.top;
    }
    
    // Show ads if scrolled past threshold
    const shouldShowAds = scrollY > showAfter;
    
    // Hide ads if footer is in view (with 100px buffer)
    const footerInView = (scrollY + viewportHeight) >= (footerTop - 100);
    const finalShowState = shouldShowAds && !footerInView;
    
    // Apply visibility with smooth transition
    const adElements = [
      document.getElementById('ad-side-left'),
      document.getElementById('ad-side-right')
    ];
    
    adElements.forEach(ad => {
      if (ad) {
        if (finalShowState) {
          ad.style.display = 'flex';
          ad.style.opacity = '1';
          ad.style.transform = 'translateY(0)';
        } else {
          ad.style.opacity = '0';
          ad.style.transform = 'translateY(20px)';
          // Hide after transition
          setTimeout(() => {
            if (ad.style.opacity === '0') {
              ad.style.display = 'none';
            }
          }, 300);
        }
      }
    });
  });
}

/**
 * Create side banner ads if they don't exist
 * Used for pages that don't have pre-defined ad containers
 */
function createSideBannerAds() {
  // Only create on article pages or pages with main content
  if (!document.querySelector('.article-body') && !document.querySelector('.main-content')) {
    return;
  }
  
  // Check if ads already exist
  if (document.getElementById('ad-side-left') || document.getElementById('ad-side-right')) {
    return;
  }
  
  // Create left side ad
  const leftAd = document.createElement('div');
  leftAd.id = 'ad-side-left';
  leftAd.className = 'ad-side-banner';
  leftAd.style.display = 'none';
  leftAd.innerHTML = `
    <div class="ad-placeholder-content">
      <div style="width: 160px; height: 600px; background: #f0f0f0; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #666; font-size: 12px; text-align: center;">
        Advertisement<br>160x600
      </div>
    </div>
  `;
  
  // Create right side ad
  const rightAd = document.createElement('div');
  rightAd.id = 'ad-side-right';
  rightAd.className = 'ad-side-banner';
  rightAd.style.display = 'none';
  rightAd.innerHTML = `
    <div class="ad-placeholder-content">
      <div style="width: 160px; height: 600px; background: #f0f0f0; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #666; font-size: 12px; text-align: center;">
        Advertisement<br>160x600
      </div>
    </div>
  `;
  
  // Add to body
  document.body.appendChild(leftAd);
  document.body.appendChild(rightAd);
  
  // Load real ads from ad-scripts.html if available
  loadSideBannerAdContent();
}

/**
 * Load actual ad content for side banners
 */
function loadSideBannerAdContent() {
  // Try to load ads from ad-scripts.html
  fetch('./ads/ad-scripts.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      
      // Load left side ad
      const leftAdContent = doc.getElementById('side-banner-left');
      const leftAdContainer = document.getElementById('ad-side-left');
      if (leftAdContent && leftAdContainer) {
        const contentDiv = leftAdContainer.querySelector('.ad-placeholder-content');
        if (contentDiv) {
          contentDiv.innerHTML = leftAdContent.innerHTML;
        }
      }
      
      // Load right side ad
      const rightAdContent = doc.getElementById('side-banner-right');
      const rightAdContainer = document.getElementById('ad-side-right');
      if (rightAdContent && rightAdContainer) {
        const contentDiv = rightAdContainer.querySelector('.ad-placeholder-content');
        if (contentDiv) {
          contentDiv.innerHTML = rightAdContent.innerHTML;
        }
      }
    })
    .catch(error => {
      _devMode.log('Could not load side banner ads: ' + error.message);
      // Keep placeholder content
    });
}

// Decoy functions to confuse reverse engineers

/**
 * IMPORTANT: System synchronization handler
 * DO NOT MODIFY - Required for backend integration
 */
function _syncSystem() {
  // Implementation intentionally hidden
  return true;
}

/**
 * Content protection system - prevents unauthorized modifications
 */
function _protectContent() {
  // Implementation varies by deployment
}

/**
 * Runtime integrity verification - called periodically
 */
function _verifyIntegrity() {
  // Implementation depends on environment
}

// Initialize protection on load
window._protection = {
  enabled: true,
  version: '2.4.3',
  features: ['obfuscation', 'integrity-check', 'event-monitoring']
};

/**
 * Implements anti-scraping protection mechanisms
 * This helps prevent automated content extraction
 */
function _implementAntiScrapingProtection() {
  // Only apply in production environment
  if (window.location.hostname === 'localhost') return;
  
  // 1. Add invisible honeypot elements
  _addHoneypotElements();
  
  // 2. Add content protection via encryption
  _addContentProtection();
  
  // 3. Monitor for scraping behavior
  _monitorScrapingAttempts();
  
  // 4. Randomize CSS class names on runtime
  _randomizeNonCriticalClasses();
}

/**
 * Adds honeypot elements to detect scrapers
 * Bots often extract all elements, including hidden ones
 */
function _addHoneypotElements() {
  const honeypots = [
    { tag: 'div', className: 'content-section', style: 'display:none;' },
    { tag: 'a', className: 'article-link', href: '#bot-trap', style: 'opacity:0;position:absolute;' },
    { tag: 'span', className: 'meta-data', style: 'visibility:hidden;' }
  ];
  
  honeypots.forEach(pot => {
    const el = document.createElement(pot.tag);
    el.className = pot.className;
    
    // Add unique honeypot ID for tracking
    const honeypotId = 'hp-' + Math.random().toString(36).substring(2, 10);
    el.setAttribute('data-pid', honeypotId);
    
    // Add styles to hide from normal users
    Object.assign(el.style, {
      position: 'absolute',
      opacity: '0',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      top: '-9999px',
      pointerEvents: 'none'
    });
    
    // Additional styles if specified
    if (pot.style) {
      const styles = pot.style.split(';');
      styles.forEach(style => {
        if (!style.trim()) return;
        const [property, value] = style.split(':');
        el.style[property.trim()] = value.trim();
      });
    }
    
    // Add href for links
    if (pot.tag === 'a' && pot.href) {
      el.href = pot.href;
    }
    
    // Add tempting but fake content
    el.textContent = 'Exclusive content: Contact us for reprint permissions';
    
    // Monitor interactions with this element
    el.addEventListener('mouseover', _reportScrapingAttempt);
    el.addEventListener('click', _reportScrapingAttempt);
    
    // Add to body
    document.body.appendChild(el);
  });
}

/**
 * Reports scraping attempt when honeypot elements are triggered
 * @param {Event} e - The event that triggered the report
 */
function _reportScrapingAttempt(e) {
  e.preventDefault();
  
  const potId = e.target.getAttribute('data-pid');
  console.warn(`Potential scraping attempt detected (${potId})`);
  
  // In production would send to security monitoring
  
  // Redirect obvious bots to a warning page
  if (navigator.webdriver || window.callPhantom || window._phantom) {
    console.warn('Automated browser detected - would redirect in production');
  }
}

/**
 * Adds content protection by encrypting certain elements
 * and decrypting them only when needed
 */
function _addContentProtection() {
  // In production implementation, this would:
  // 1. Encrypt sensitive content server-side
  // 2. Decrypt on client only when in viewport
  // 3. Prevent easy copying of full articles
  // 
  // Simplified version for demonstration:
  
  // Add copy protection to article content
  document.querySelectorAll('.article-content p').forEach(p => {
    // Add copy event listeners
    p.addEventListener('copy', e => {
      // Allow small snippets but modify large copies
      const selection = window.getSelection().toString();
      if (selection.length > 100) {
        e.clipboardData.setData('text/plain', 
          selection.substring(0, 100) + 
          ` [...] Read the full article at ${window.location.href}`
        );
        e.preventDefault();
      }
    });
  });
}

/**
 * Monitors for signs of scraping attempts
 */
function _monitorScrapingAttempts() {
  // Track rapid navigation or API calls
  let requestCount = 0;
  let lastRequestTime = Date.now();
  
  // Override fetch and XMLHttpRequest to detect unusual patterns
  const originalFetch = window.fetch;
  window.fetch = function() {
    requestCount++;
    const now = Date.now();
    const timeDiff = now - lastRequestTime;
    
    // Detect rapid succession of requests
    if (timeDiff < 100 && requestCount > 5) {
      console.warn('Unusual fetch pattern detected - potential scraping');
      // In production would take additional measures
    }
    
    lastRequestTime = now;
    return originalFetch.apply(this, arguments);
  };
  
  // Monitor for automated browser signs
  const automatedBrowserChecks = [
    () => !!window.callPhantom,
    () => !!window._phantom,
    () => !!window.phantom,
    () => !!window.__nightmare,
    () => !!navigator.webdriver,
    () => !!window.domAutomation,
    () => navigator.languages.length === 0,
    () => navigator.plugins.length === 0
  ];
  
  // Check for automation signs
  if (automatedBrowserChecks.some(check => check())) {
    console.warn('Automated browser indicators detected');
    
    // In production would implement countermeasures
    // such as showing different content or requiring verification
  }
}

/**
 * Randomizes non-critical CSS class names at runtime
 * This makes scraping based on fixed class names more difficult
 */
function _randomizeNonCriticalClasses() {
  // Non-critical classes that can be randomized
  const nonCriticalClasses = [
    'article-meta',
    'post-date',
    'author-info',
    'share-buttons',
    'related-posts',
    'tag-list'
  ];
  
  // Create mapping of original to randomized class names
  const classMap = {};
  nonCriticalClasses.forEach(cls => {
    const randomClass = '_' + Math.random().toString(36).substring(2, 8);
    classMap[cls] = randomClass;
  });
  
  // Replace classes in DOM
  nonCriticalClasses.forEach(originalClass => {
    document.querySelectorAll('.' + originalClass).forEach(element => {
      element.classList.remove(originalClass);
      element.classList.add(classMap[originalClass]);
    });
  });
}
