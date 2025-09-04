// src/app/services/seo.service.ts
import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  updateMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
  }) {
    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords || '' });

    // Canonical link
    let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") || 
                                document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', config.canonicalUrl || window.location.href);
    document.head.appendChild(link);
  }
  
}
