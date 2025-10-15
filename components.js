// components.js
function loadBottomNavigation() {
  const bottomNav = `
    <nav class="bottom-nav">
      <a href="workfit-pwa.html" class="bottom-nav-item">
        <i class="fas fa-home bottom-nav-icon"></i>
        <span class="bottom-nav-label">Home</span>
      </a>
      <a href="Announcements-wpa.html" class="bottom-nav-item">
        <i class="fas fa-bullhorn bottom-nav-icon"></i>
        <span class="bottom-nav-label">Updates</span>
      </a>
      <a href="Tracker.html" class="bottom-nav-item">
        <i class="fas fa-chart-line bottom-nav-icon"></i>
        <span class="bottom-nav-label">Tracker</span>
      </a>
      <a href="Account.html" class="bottom-nav-item">
        <i class="fas fa-user bottom-nav-icon"></i>
        <span class="bottom-nav-label">Account</span>
      </a>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('beforeend', bottomNav);
  
  // Set active state based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.bottom-nav-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage) {
      item.classList.add('active');
    }
  });
}

// Load when DOM is ready
document.addEventListener('DOMContentLoaded', loadBottomNavigation);