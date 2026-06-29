function renderNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'features.html', label: 'Features' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const linksHtml = navLinks.map(link => {
    const isActive = currentPage === link.href || (currentPage === '' && link.href === 'index.html');
    const activeClass = isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900';
    return `<a href="${link.href}" class="text-sm ${activeClass} transition-colors">${link.label}</a>`;
  }).join('');

  const navbarHtml = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="index.html" class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span class="text-xl font-bold text-slate-900">FlowTask</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:gap-8">
            ${linksHtml}
          </div>

          <!-- Desktop CTA -->
          <div class="hidden md:flex md:items-center md:gap-4">
            <a href="login.html" class="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">Log in</a>
            <a href="register.html" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">Get Started</a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" id="menu-icon-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="hidden h-6 w-6" id="menu-icon-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="hidden md:hidden bg-white border-t border-slate-100" id="mobile-menu">
        <div class="space-y-1 px-4 pb-4 pt-2">
          ${navLinks.map(link => {
            const isActive = currentPage === link.href || (currentPage === '' && link.href === 'index.html');
            const activeClass = isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900';
            return `<a href="${link.href}" class="block rounded-md px-3 py-2 text-base ${activeClass} transition-colors">${link.label}</a>`;
          }).join('')}
          <div class="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <a href="login.html" class="block rounded-md px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">Log in</a>
            <a href="register.html" class="block rounded-md bg-blue-600 px-3 py-2 text-base font-semibold text-white text-center hover:bg-blue-500 transition-colors">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }
}

renderNavbar();
