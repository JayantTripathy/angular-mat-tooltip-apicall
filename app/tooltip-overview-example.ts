import { Component, ViewEncapsulation } from '@angular/core';
import { TooltipService } from './services/tooltipservice';

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.html',
  styleUrls: ['tooltip-overview-example.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class TooltipOverviewExample {
  tooltipData: string = 'Loading...';
  isLoading: boolean = true;
  constructor(private tooltipService: TooltipService) {}
  ngOnInit() {}

  fetchTooltipData() {
    this.isLoading = true;
    this.tooltipService.getTooltipData().subscribe(
      (data) => {
        console.log(data.setup);
        this.tooltipData = data.setup; // Adjust based on your API response structure
        this.isLoading = false;
      },
      (error) => {
        this.tooltipData = 'Error loading data';
        this.isLoading = false;
      }
    );
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
