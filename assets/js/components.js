/**
 * Component Loader System for TechShot
 * Dynamically loads and injects HTML components (header, footer, etc.)
 * Perfect for static sites hosted on GitHub Pages
 */

class ComponentLoader {
  constructor() {
    this.componentsPath = this.getComponentsPath();
    this.urlMappings = this.getUrlMappings();
  }

  /**
   * Get the correct path to components based on current page location
   */
  getComponentsPath() {
    const currentPath = window.location.pathname;
    
    // If we're in articles folder, go up one level
    if (currentPath.includes('/articles/')) {
      return '../components/';
    }
    
    // For root level pages
    return './components/';
  }

  /**
   * Get URL mappings based on current page location
   */
  getUrlMappings() {
    const currentPath = window.location.pathname;
    const isInArticles = currentPath.includes('/articles/');
    
    if (isInArticles) {
      return {
        homeUrl: '../index.html',
        aboutUrl: '../about.html',
        contactUrl: '../contact.html'
      };
    }
    
    return {
      homeUrl: './index.html',
      aboutUrl: './about.html',
      contactUrl: './contact.html'
    };
  }

  /**
   * Load a component and replace placeholders
   */
  async loadComponent(componentName) {
    try {
      const response = await fetch(this.componentsPath + componentName + '.html');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      let html = await response.text();
      
      // Replace URL placeholders
      Object.keys(this.urlMappings).forEach(key => {
        const placeholder = `{{${key}}}`;
        html = html.replace(new RegExp(placeholder, 'g'), this.urlMappings[key]);
      });
      
      return html;
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
      return null;
    }
  }

  /**
   * Insert component into the DOM
   */
  async insertComponent(componentName, targetSelector, insertMethod = 'replace') {
    const componentHtml = await this.loadComponent(componentName);
    if (!componentHtml) return false;

    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) {
      console.error(`Target element ${targetSelector} not found`);
      return false;
    }

    switch (insertMethod) {
      case 'replace':
        targetElement.outerHTML = componentHtml;
        break;
      case 'prepend':
        targetElement.insertAdjacentHTML('afterbegin', componentHtml);
        break;
      case 'append':
        targetElement.insertAdjacentHTML('beforeend', componentHtml);
        break;
      default:
        targetElement.innerHTML = componentHtml;
    }

    return true;
  }

  /**
   * Load all components marked with data attributes
   */
  async loadAllComponents() {
    const components = document.querySelectorAll('[data-component]');
    
    for (const element of components) {
      const componentName = element.getAttribute('data-component');
      const insertMethod = element.getAttribute('data-insert') || 'replace';
      
      await this.insertComponent(componentName, `[data-component="${componentName}"]`, insertMethod);
    }
  }

  /**
   * Initialize the component system
   */
  async init() {
    // Load components marked with data attributes
    await this.loadAllComponents();
    
    // Initialize header if placeholder exists
    const headerPlaceholder = document.querySelector('#header-placeholder, [data-component="header"]');
    if (headerPlaceholder) {
      await this.insertComponent('header', '#header-placeholder, [data-component="header"]');
    }

    // Initialize footer if placeholder exists
    const footerPlaceholder = document.querySelector('#footer-placeholder, [data-component="footer"]');
    if (footerPlaceholder) {
      await this.insertComponent('footer', '#footer-placeholder, [data-component="footer"]');
    }

    // Re-initialize JavaScript functionality after components are loaded
    this.reinitializeScripts();
  }

  /**
   * Re-initialize JavaScript functionality after components are loaded
   */
  reinitializeScripts() {    // Re-initialize mobile menu, sticky header, etc.
    if (typeof initEnhancedMobileMenu === 'function') {
      initEnhancedMobileMenu();
    } else if (typeof initMobileMenu === 'function') {
      initMobileMenu();
    }
    if (typeof initStickyHeader === 'function') {
      initStickyHeader();
    }
    if (typeof initSmoothScrolling === 'function') {
      initSmoothScrolling();
    }
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  const loader = new ComponentLoader();
  await loader.init();
});

// Export for manual use
window.ComponentLoader = ComponentLoader;
