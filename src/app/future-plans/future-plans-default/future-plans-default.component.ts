import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-plans-default',
  templateUrl: './future-plans-default.component.html',
  styleUrls: ['./future-plans-default.component.scss']
})
export class FuturePlansDefaultComponent implements OnInit {
  learningGoalList = [
    {
      Title: 'Unit testing',
      Icon: 'ad_units',
      color: '#29B7DD'
    },
    {
      Title: 'E2E testing',
      Icon: 'bug_report',
      color: '#8B72EE'
    },
    {
      Title: 'Hiroku',
      Icon: 'api',
      color: '#5D3BE7'
    },
    {
      Title: 'Firebase',
      Icon: 'whatshot',
      color: '#BD72EF'
    },
    {
      Title: 'Docker',
      Icon: 'dock',
      color: '#B4B1F4'
    },
    {
      Title: 'nginx',
      Icon: 'https',
      color: '#F375F4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
