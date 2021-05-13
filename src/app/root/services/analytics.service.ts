// tslint:disable: object-literal-shorthand
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// tslint:disable-next-line: ban-types
declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  trackingId: 'G-3W7RF96DDX';
  analytics;

  constructor(
    private router: Router
  ) {
    gtag('js', new Date());
    gtag('config', this.trackingId, {
      send_page_view: false
    });
  }


  trackPage(pageData?: any): void {
    gtag('config', this.trackingId,
      {
        page_path: this.router.url,
        page_title: (pageData && pageData.title) ? pageData.title : null
      }
    );
  }

  eventTrack(eventName: string, category: string, label: string, action?: string, value?: string): void {
    gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  identify(userId: string, firstName: string, lastName: string): void {
    this.analytics.identify(userId, {
      firstName: firstName,
      lastName: lastName
    });
  }
}
