import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { forEach as _forEach } from 'lodash';
import { first } from 'rxjs/operators';

import { INavigation, navigations } from '../../navigation';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav;
  navigations = navigations;
  activeMediaQuery;
  sideNavMode = 'side';
  isDefaultOpen = true;

  constructor(
    private router: Router,
    private mediaObserver: MediaObserver
  ) {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.sideNavMode = 'over';
        this.isDefaultOpen = false;
      } else {
        this.sideNavMode = 'side';
        this.isDefaultOpen = true;
      }
    });
  }

  ngOnInit(): void {
  }

  onNavigation(selectedNavigation: INavigation): void {
    if (selectedNavigation.isParent) {
      if (selectedNavigation.children && selectedNavigation.children.length) {
        _forEach(this.navigations, nav => {
          if (nav.id === selectedNavigation.id) {
            nav.showChild = true;
          } else {
            nav.showChild = false;
          }
        });

        setTimeout(() => {
          const collapsibleDiv = document.getElementById('collapsible');
          collapsibleDiv.style.maxHeight = collapsibleDiv.scrollHeight + 'px';
        }, 100);
      } else {
        setTimeout(() => {
          const collapsibleDiv = document.getElementById('collapsible');
          collapsibleDiv.style.maxHeight = '0px';

          _forEach(this.navigations, nav => {
            nav.showChild = false;
          });

        }, 100);

        this.router.navigate([selectedNavigation.url]);
      }
    } else {
      this.router.navigate([selectedNavigation.url]);
    }
  }

  closeSideNav(): void {
    this.sidenav.close();
  }

  changeTheme(type: string): void {

  }
}
