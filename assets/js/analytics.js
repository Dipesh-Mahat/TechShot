// Analytics tracking system for TechShot
class AnalyticsTracker {
  constructor() {
    this.initializeGA();
    this.trackPageView();
    this.setupViewCounters();
  }

  // Initialize Google Analytics
  initializeGA() {
    // Add Google Analytics tracking code
    if (typeof gtag === 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your actual GA ID
      };
    }
  }

  // Track current page view
  trackPageView() {
    const articlePath = window.location.pathname;
    const articleTitle = document.title;
    
    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: articleTitle,
        page_location: window.location.href,
        page_path: articlePath
      });
    }

    // Track locally for immediate feedback
    this.incrementLocalViewCount(articlePath);
  }

  // Local view counting (stored in localStorage)
  incrementLocalViewCount(path) {
    const viewCounts = JSON.parse(localStorage.getItem('articleViews') || '{}');
    viewCounts[path] = (viewCounts[path] || 0) + 1;
    localStorage.setItem('articleViews', JSON.stringify(viewCounts));
  }

  // Get local view counts
  getLocalViewCounts() {
    return JSON.parse(localStorage.getItem('articleViews') || '{}');
  }

  // Setup view counters on article pages
  setupViewCounters() {
    const viewCountElements = document.querySelectorAll('.view-count');
    const localViews = this.getLocalViewCounts();
    const currentPath = window.location.pathname;

    viewCountElements.forEach(element => {
      const articlePath = element.dataset.articlePath || currentPath;
      const views = localViews[articlePath] || Math.floor(Math.random() * 5000) + 500; // Fallback to random for demo
      element.textContent = `${views.toLocaleString()} views`;
    });
  }

  // Update popular posts based on view data
  updatePopularPosts() {
    const articles = [
      {
        title: "Ultimate Guide to Using ChatGPT Effectively",
        path: "/articles/chatgpt-guide.html",
        date: "May 25, 2025"
      },
      {
        title: "MacBook Pro M3 Max: Two Months Later", 
        path: "/articles/macbook-pro-m3-review.html",
        date: "May 18, 2025"
      },
      {
        title: "10 VS Code Extensions That Will Boost Your Productivity",
        path: "/articles/vscode-extensions.html", 
        date: "May 15, 2025"
      },
      {
        title: "Building the Ultimate Smart Home in 2025",
        path: "/articles/smart-home-guide-2025.html",
        date: "May 5, 2025"
      },
      {
        title: "The Ethical Dilemmas Facing AI Development in 2025",
        path: "/articles/ai-ethics-2025.html",
        date: "May 10, 2025"
      },
      {
        title: "How Multimodal AI Models Are Changing Content Creation",
        path: "/articles/multimodal-ai-content-creation.html",
        date: "May 2, 2025"
      }
    ];

    const viewCounts = this.getLocalViewCounts();
    
    // Sort articles by view count
    const sortedArticles = articles
      .map(article => ({
        ...article,
        views: viewCounts[article.path] || Math.floor(Math.random() * 5000) + 500
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 4); // Top 4 articles

    // Update popular posts HTML
    const popularPostsContainer = document.querySelector('.popular-posts ul');
    if (popularPostsContainer) {
      popularPostsContainer.innerHTML = sortedArticles.map(article => `
        <li>
          <a href="${article.path}">
            <span class="post-title">${article.title}</span>
            <span class="post-meta">
              <span class="post-date">${article.date}</span>
              <span class="view-count" data-article-path="${article.path}">${article.views.toLocaleString()} views</span>
            </span>
          </a>
        </li>
      `).join('');
    }
  }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const analytics = new AnalyticsTracker();
  
  // Update popular posts if on homepage
  if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    analytics.updatePopularPosts();
  }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnalyticsTracker;
}
