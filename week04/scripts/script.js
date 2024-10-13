document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
  
    const lazyLoad = (img) => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    };
  
    const options = {
      root: null, // viewport
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lazyLoad(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    images.forEach(image => {
      observer.observe(image);
    });
  
    // Display last modified date
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  });
  