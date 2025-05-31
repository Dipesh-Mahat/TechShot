// Advanced Search Functionality for TechShot
// Professional client-side search with fuzzy matching

class AdvancedSearch {
  constructor() {
    this.searchDatabase = this.buildSearchDatabase();
    this.initializeSearch();
    this.setupEventListeners();
  }

  // Build comprehensive search database
  buildSearchDatabase() {
    return [
      {
        id: 'chatgpt-guide',
        title: 'Ultimate Guide to Using ChatGPT Effectively',
        excerpt: 'Learn how to craft perfect prompts, use advanced features, and get the most out of ChatGPT for your work and creative projects.',
        category: 'AI Breakthroughs',
        author: 'Jane Smith',
        date: 'May 25, 2025',
        url: 'articles/chatgpt-guide.html',
        tags: ['AI', 'ChatGPT', 'Prompts', 'Productivity', 'Machine Learning', 'Guide', 'Tutorial'],
        keywords: ['chatgpt', 'ai', 'prompts', 'artificial intelligence', 'openai', 'conversation', 'tips', 'tricks', 'productivity', 'professional', 'creative', 'writing'],
        image: 'https://placehold.co/600x400/e4f2fd/2d7cc1?text=ChatGPT+Guide'
      },
      {
        id: 'google-beam',
        title: 'Google Beam: The Next Evolution in Search Technology',
        excerpt: 'Google\'s new AI-powered search experience aims to revolutionize how we find and interact with information online.',
        category: 'AI Breakthroughs',
        author: 'Mark Johnson',
        date: 'May 20, 2025',
        url: 'articles/google-beam.html',
        tags: ['Google', 'Search', 'AI', 'Technology', 'Innovation', 'Web'],
        keywords: ['google', 'search', 'beam', 'ai search', 'technology', 'innovation', 'web search', 'algorithm', 'information', 'online'],
        image: 'https://placehold.co/600x400/f7f0ff/5b3b8c?text=Google+Beam'
      },
      {
        id: 'macbook-pro-m3',
        title: 'MacBook Pro M3 Max: Two Months Later',
        excerpt: 'Our long-term review of Apple\'s most powerful laptop reveals how it holds up for professional creative work.',
        category: 'Tech News',
        author: 'Alex Chen',
        date: 'May 18, 2025',
        url: 'articles/macbook-pro-m3-review.html',
        tags: ['Apple', 'MacBook', 'M3', 'Review', 'Laptop', 'Performance'],
        keywords: ['macbook', 'apple', 'm3', 'laptop', 'review', 'performance', 'creative', 'professional', 'mac', 'chip', 'processor'],
        image: 'https://placehold.co/600x400/e9f5e9/2e7d32?text=MacBook+Pro+M3'
      },
      {
        id: 'vscode-extensions',
        title: '10 VS Code Extensions That Will Boost Your Productivity',
        excerpt: 'Transform your coding experience with these essential Visual Studio Code extensions for developers.',
        category: 'Software Tips',
        author: 'David Park',
        date: 'May 15, 2025',
        url: 'articles/vscode-extensions.html',
        tags: ['VS Code', 'Extensions', 'Productivity', 'Development', 'Coding', 'Tools'],
        keywords: ['vscode', 'visual studio code', 'extensions', 'coding', 'development', 'productivity', 'programming', 'tools', 'developer'],
        image: 'https://placehold.co/600x400/fff3e0/ef6c00?text=VS+Code+Tips'
      },
      {
        id: 'ai-ethics',
        title: 'The Ethical Dilemmas Facing AI Development in 2025',
        excerpt: 'As AI becomes more integrated into our daily lives, we explore the moral questions that researchers and companies must address.',
        category: 'AI Breakthroughs',
        author: 'Sarah Williams',
        date: 'May 10, 2025',
        url: 'articles/ai-ethics-2025.html',
        tags: ['AI', 'Ethics', 'Technology', 'Society', 'Responsibility', 'Future'],
        keywords: ['ai ethics', 'artificial intelligence', 'moral', 'responsibility', 'society', 'technology', 'future', 'bias', 'fairness'],
        image: 'https://placehold.co/600x400/ffebee/c62828?text=AI+Ethics'
      },
      {
        id: 'smart-home-guide',
        title: 'Building the Ultimate Smart Home in 2025: A Comprehensive Guide',
        excerpt: 'From Matter-compatible devices to AI assistants, here\'s everything you need to know about creating a modern smart home.',
        category: 'Tech News',
        author: 'Michael Torres',
        date: 'May 5, 2025',
        url: 'articles/smart-home-guide-2025.html',
        tags: ['Smart Home', 'IoT', 'Automation', 'Matter', 'AI Assistant', 'Technology'],
        keywords: ['smart home', 'iot', 'automation', 'matter', 'home automation', 'smart devices', 'ai assistant', 'alexa', 'google'],
        image: 'https://placehold.co/600x400/e0f7fa/006064?text=Smart+Home'
      },
      {
        id: 'multimodal-ai',
        title: 'How Multimodal AI Models Are Changing Content Creation',
        excerpt: 'The latest advancements in AI models that can work with text, images, and audio simultaneously.',
        category: 'AI Breakthroughs',
        author: 'Jane Smith',
        date: 'May 2, 2025',
        url: 'articles/multimodal-ai-content-creation.html',
        tags: ['AI', 'Multimodal', 'Content Creation', 'Machine Learning', 'Innovation'],
        keywords: ['multimodal ai', 'content creation', 'ai models', 'text generation', 'image generation', 'audio', 'creative ai'],
        image: 'https://placehold.co/600x400/e4f2fd/2d7cc1?text=AI+Research'
      },
      {
        id: 'open-source-ai',
        title: 'Tech Industry Moves Toward Open Source AI Development',
        excerpt: 'Major tech companies announce new coalition for open standards in AI development, potentially reshaping how AI technologies evolve.',
        category: 'Tech News',
        author: 'AI Team',
        date: 'May 28, 2025',
        url: 'articles/open-source-ai-development.html',
        tags: ['Open Source', 'AI', 'Technology', 'Industry', 'Standards', 'Development'],
        keywords: ['open source', 'ai development', 'tech industry', 'standards', 'collaboration', 'innovation'],
        image: 'https://placehold.co/600x400/e0f7fa/006064?text=Tech+News'
      },
      {
        id: 'command-line-tools',
        title: '5 Essential Command Line Tools Every Developer Should Know',
        excerpt: 'Boost your productivity with these powerful command line utilities that simplify common development tasks.',
        category: 'Software Tips',
        author: 'David Park',
        date: 'April 25, 2025',
        url: 'articles/command-line-tools.html',
        tags: ['Command Line', 'Tools', 'Development', 'Productivity', 'Terminal', 'CLI'],
        keywords: ['command line', 'cli', 'terminal', 'tools', 'development', 'productivity', 'bash', 'shell', 'utilities'],
        image: 'https://placehold.co/600x400/fff3e0/ef6c00?text=Software+Tips'
      }
    ];
  }

  // Initialize search functionality
  initializeSearch() {
    this.searchInput = document.getElementById('search-input');
    this.searchButton = document.querySelector('.search-container button');
    this.createSearchResultsContainer();
    this.createSearchOverlay();
  }

  // Create search results container
  createSearchResultsContainer() {
    // Remove existing results container if any
    const existingResults = document.getElementById('search-results');
    if (existingResults) {
      existingResults.remove();
    }

    // Create new results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results';
    resultsContainer.className = 'search-results hidden';
    
    resultsContainer.innerHTML = `
      <div class="search-results-header">
        <h3>Search Results</h3>
        <button class="close-search" aria-label="Close search">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="search-results-content">
        <div class="search-stats"></div>
        <div class="search-suggestions"></div>
        <div class="search-results-list"></div>
        <div class="search-no-results hidden">
          <div class="no-results-icon">
            <i class="fas fa-search"></i>
          </div>
          <h4>No articles found</h4>
          <p>Try different keywords or browse our categories</p>
          <div class="search-suggestions-alternative">
            <h5>Popular topics:</h5>
            <div class="suggestion-tags">
              <span class="suggestion-tag" data-search="ai">AI</span>
              <span class="suggestion-tag" data-search="technology">Technology</span>
              <span class="suggestion-tag" data-search="programming">Programming</span>
              <span class="suggestion-tag" data-search="productivity">Productivity</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Insert after search container
    const searchContainer = document.querySelector('.search-container').parentNode;
    searchContainer.appendChild(resultsContainer);
  }

  // Create search overlay for mobile
  createSearchOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.className = 'search-overlay hidden';
    document.body.appendChild(overlay);
  }

  // Setup event listeners
  setupEventListeners() {
    // Search input events
    this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    this.searchInput.addEventListener('focus', this.handleSearchFocus.bind(this));
    this.searchInput.addEventListener('keydown', this.handleKeyNavigation.bind(this));

    // Search button click
    this.searchButton.addEventListener('click', this.handleSearchButtonClick.bind(this));

    // Close search events
    document.addEventListener('click', this.handleOutsideClick.bind(this));
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));

    // Suggestion tag clicks
    document.addEventListener('click', this.handleSuggestionClick.bind(this));
  }

  // Handle search input
  handleSearch(event) {
    const query = event.target.value.trim();
    
    if (query.length === 0) {
      this.hideSearchResults();
      return;
    }

    if (query.length < 2) {
      this.showSearchSuggestions(query);
      return;
    }

    const results = this.performSearch(query);
    this.displaySearchResults(results, query);
  }

  // Perform the actual search with fuzzy matching
  performSearch(query) {
    const normalizedQuery = query.toLowerCase();
    const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 1);
    
    const results = this.searchDatabase.map(article => {
      let score = 0;
      let matchedTerms = [];

      // Search in different fields with different weights
      const searchFields = [
        { field: 'title', weight: 10, content: article.title.toLowerCase() },
        { field: 'excerpt', weight: 5, content: article.excerpt.toLowerCase() },
        { field: 'category', weight: 8, content: article.category.toLowerCase() },
        { field: 'tags', weight: 7, content: article.tags.join(' ').toLowerCase() },
        { field: 'keywords', weight: 6, content: article.keywords.join(' ').toLowerCase() },
        { field: 'author', weight: 3, content: article.author.toLowerCase() }
      ];

      queryWords.forEach(word => {
        searchFields.forEach(field => {
          // Exact match
          if (field.content.includes(word)) {
            score += field.weight;
            if (!matchedTerms.includes(word)) {
              matchedTerms.push(word);
            }
          }
          
          // Fuzzy match (similar words)
          if (this.fuzzyMatch(word, field.content)) {
            score += field.weight * 0.5;
            if (!matchedTerms.includes(word)) {
              matchedTerms.push(word);
            }
          }
        });
      });

      // Boost score for multiple word matches
      if (matchedTerms.length > 1) {
        score *= 1 + (matchedTerms.length * 0.2);
      }

      return {
        ...article,
        score,
        matchedTerms,
        relevance: this.calculateRelevance(article, normalizedQuery)
      };
    });

    // Filter and sort results
    return results
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Limit to top 10 results
  }

  // Fuzzy matching algorithm
  fuzzyMatch(word, text) {
    if (word.length < 3) return false;
    
    // Check for partial matches
    const partialMatch = word.slice(0, -1);
    if (text.includes(partialMatch)) return true;
    
    // Check for character transposition and similar patterns
    for (let i = 0; i < text.length - word.length + 1; i++) {
      const substring = text.substring(i, i + word.length);
      const distance = this.levenshteinDistance(word, substring);
      if (distance <= Math.floor(word.length * 0.3)) {
        return true;
      }
    }
    
    return false;
  }

  // Calculate Levenshtein distance for fuzzy matching
  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Calculate relevance score
  calculateRelevance(article, query) {
    const titleMatch = article.title.toLowerCase().includes(query);
    const categoryMatch = article.category.toLowerCase().includes(query);
    const exactMatch = article.keywords.some(keyword => 
      keyword.toLowerCase() === query
    );
    
    if (exactMatch) return 'high';
    if (titleMatch || categoryMatch) return 'medium';
    return 'low';
  }

  // Display search results
  displaySearchResults(results, query) {
    const resultsContainer = document.getElementById('search-results');
    const resultsList = resultsContainer.querySelector('.search-results-list');
    const statsElement = resultsContainer.querySelector('.search-stats');
    const noResults = resultsContainer.querySelector('.search-no-results');

    if (results.length === 0) {
      resultsList.innerHTML = '';
      statsElement.innerHTML = '';
      noResults.classList.remove('hidden');
      this.showSearchResults();
      return;
    }

    noResults.classList.add('hidden');
    
    // Update stats
    statsElement.innerHTML = `
      <p class="search-stats-text">
        Found <strong>${results.length}</strong> article${results.length !== 1 ? 's' : ''} 
        for "<strong>${this.escapeHtml(query)}</strong>"
      </p>
    `;

    // Generate results HTML
    resultsList.innerHTML = results.map(article => this.createSearchResultHTML(article, query)).join('');
    
    this.showSearchResults();
  }

  // Create HTML for individual search result
  createSearchResultHTML(article, query) {
    const highlightedTitle = this.highlightSearchTerms(article.title, query);
    const highlightedExcerpt = this.highlightSearchTerms(article.excerpt, query);
    
    return `
      <article class="search-result-item" data-relevance="${article.relevance}">
        <div class="search-result-image">
          <img src="${article.image}" alt="${this.escapeHtml(article.title)}" loading="lazy">
        </div>
        <div class="search-result-content">
          <div class="search-result-meta">
            <span class="search-result-category">${this.escapeHtml(article.category)}</span>
            <span class="search-result-relevance relevance-${article.relevance}">
              ${article.relevance === 'high' ? 'Highly Relevant' : 
                article.relevance === 'medium' ? 'Relevant' : 'Related'}
            </span>
          </div>
          <h3 class="search-result-title">
            <a href="${article.url}">${highlightedTitle}</a>
          </h3>
          <p class="search-result-excerpt">${highlightedExcerpt}</p>
          <div class="search-result-footer">
            <span class="search-result-author">
              <i class="fas fa-user"></i> ${this.escapeHtml(article.author)}
            </span>
            <span class="search-result-date">
              <i class="fas fa-calendar"></i> ${article.date}
            </span>
            <div class="search-result-tags">
              ${article.matchedTerms.slice(0, 3).map(term => 
                `<span class="matched-tag">${this.escapeHtml(term)}</span>`
              ).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Highlight search terms in text
  highlightSearchTerms(text, query) {
    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 1);
    let highlightedText = text;
    
    queryWords.forEach(word => {
      const regex = new RegExp(`(${this.escapeRegExp(word)})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="search-highlight">$1</mark>');
    });
    
    return highlightedText;
  }

  // Show search suggestions for short queries
  showSearchSuggestions(query) {
    const resultsContainer = document.getElementById('search-results');
    const suggestionsElement = resultsContainer.querySelector('.search-suggestions');
    const resultsList = resultsContainer.querySelector('.search-results-list');
    const statsElement = resultsContainer.querySelector('.search-stats');
    
    resultsList.innerHTML = '';
    statsElement.innerHTML = '';
    
    const suggestions = this.generateSuggestions(query);
    
    if (suggestions.length > 0) {
      suggestionsElement.innerHTML = `
        <div class="suggestions-header">
          <h4>Search suggestions:</h4>
        </div>
        <div class="suggestions-list">
          ${suggestions.map(suggestion => `
            <button class="suggestion-item" data-search="${suggestion.term}">
              <i class="fas fa-search"></i>
              <span class="suggestion-text">${suggestion.term}</span>
              <span class="suggestion-count">${suggestion.count} articles</span>
            </button>
          `).join('')}
        </div>
      `;
    } else {
      suggestionsElement.innerHTML = '';
    }
    
    this.showSearchResults();
  }

  // Generate search suggestions
  generateSuggestions(query) {
    const suggestions = new Map();
    const normalizedQuery = query.toLowerCase();
    
    this.searchDatabase.forEach(article => {
      // Check keywords and tags
      [...article.keywords, ...article.tags].forEach(term => {
        const normalizedTerm = term.toLowerCase();
        if (normalizedTerm.startsWith(normalizedQuery) && normalizedTerm !== normalizedQuery) {
          const count = suggestions.get(normalizedTerm) || 0;
          suggestions.set(normalizedTerm, count + 1);
        }
      });
    });
    
    return Array.from(suggestions.entries())
      .map(([term, count]) => ({ term, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }

  // Event handlers
  handleSearchFocus() {
    if (this.searchInput.value.trim()) {
      this.showSearchResults();
    }
  }

  handleSearchButtonClick(event) {
    event.preventDefault();
    const query = this.searchInput.value.trim();
    if (query) {
      this.handleSearch({ target: { value: query } });
    }
  }

  handleOutsideClick(event) {
    const searchResults = document.getElementById('search-results');
    const searchContainer = document.querySelector('.search-container');
    
    if (!searchContainer.contains(event.target) && !searchResults.contains(event.target)) {
      this.hideSearchResults();
    }
  }

  handleEscapeKey(event) {
    if (event.key === 'Escape') {
      this.hideSearchResults();
      this.searchInput.blur();
    }
  }

  handleSuggestionClick(event) {
    if (event.target.closest('.suggestion-item') || event.target.closest('.suggestion-tag')) {
      const suggestionElement = event.target.closest('.suggestion-item') || event.target.closest('.suggestion-tag');
      const searchTerm = suggestionElement.dataset.search;
      
      this.searchInput.value = searchTerm;
      this.handleSearch({ target: { value: searchTerm } });
    }
    
    if (event.target.closest('.close-search')) {
      this.hideSearchResults();
    }
  }

  handleKeyNavigation(event) {
    const results = document.querySelectorAll('.search-result-item, .suggestion-item');
    const currentFocus = document.querySelector('.search-result-item.focused, .suggestion-item.focused');
    
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigateResults(results, currentFocus, 'next');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateResults(results, currentFocus, 'prev');
    } else if (event.key === 'Enter' && currentFocus) {
      event.preventDefault();
      const link = currentFocus.querySelector('a');
      if (link) {
        window.location.href = link.href;
      }
    }
  }

  navigateResults(results, currentFocus, direction) {
    if (results.length === 0) return;
    
    if (currentFocus) {
      currentFocus.classList.remove('focused');
    }
    
    let nextIndex = 0;
    if (currentFocus) {
      const currentIndex = Array.from(results).indexOf(currentFocus);
      nextIndex = direction === 'next' 
        ? (currentIndex + 1) % results.length
        : (currentIndex - 1 + results.length) % results.length;
    }
    
    results[nextIndex].classList.add('focused');
    results[nextIndex].scrollIntoView({ block: 'nearest' });
  }

  // Utility functions
  showSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    const overlay = document.getElementById('search-overlay');
    
    resultsContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('search-active');
  }

  hideSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    const overlay = document.getElementById('search-overlay');
    
    resultsContainer.classList.add('hidden');
    overlay.classList.add('hidden');
    document.body.classList.remove('search-active');
    
    // Clear focus
    document.querySelectorAll('.search-result-item.focused, .suggestion-item.focused')
      .forEach(item => item.classList.remove('focused'));
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.advancedSearch = new AdvancedSearch();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AdvancedSearch;
}
