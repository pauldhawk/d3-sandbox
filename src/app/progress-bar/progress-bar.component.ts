import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as Selection from 'd3-selection'
import { gray } from 'd3-color';

@Component({
  selector: 'app-progress-bar',
  template: `<div class="d3-bar-graph-wrapper">
    <svg  [attr.height]="height" [attr.width]="width">
    </svg>
  </div>`,
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  d3 = d3;
  private width: number = 300;
  private height: number = 16;


  private parentNativeElement: any;
  private svg: any;
  private radius: number;
  private g: any;

  progress_color = '#0076BC'; // for hs '#56AADB' for benchmark;
  background_color = '#808080'; // F8F8F8
  progress_value = 85;
  progress_max = 100;
  round = 2;
  constructor(element: ElementRef) {
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    if (this.parentNativeElement !== null) {
      // grab elements
      this.svg = this.d3.select(this.parentNativeElement).select("svg");
      this.g = this.svg.append('g');

      // create background
      const background = this.svg.append('rect')
        .attr('rx', this.round)
        .attr('ry', this.round)
        .attr('fill', () => this.background_color)
        .attr('height', this.height)
        .attr('width', this.width)
        .attr('x', 0);

        // progress bar
      const progress = this.svg.append('rect')
        .attr('fill', this.progress_color)
        .attr('height', this.height)
        .attr('width', 0)
        .attr('rx', this.round)
        .attr('ry', this.round)
        .attr('x', 0);
      // animate it
      progress.transition()
        .duration(1000)
        .attr('width', () => {
          const a_percent = this.width / this.progress_max;
          return this.progress_value * a_percent;
        });
    }
  }




// var progress = svg.append('rect')
//         .attr('class', 'progress-rect')
//         .attr('fill', function(){
//           return colorScale(currentState);
//         })
//         .attr('height', 15)
//         .attr('width', 0)
//         .attr('rx', 10)
//         .attr('ry', 10)
//         .attr('x', 0);

// progress.transition()
//   .duration(1000)
//   .attr('width', function(){
//     var index = states.indexOf(currentState);
//     return (index + 1) * segmentWidth;
//   });

// function moveProgressBar(state){
//   progress.transition()
//     .duration(1000)
//     .attr('fill', function(){
//       return colorScale(state);
//     })
//     .attr('width', function(){
//       var index = states.indexOf(state);
//       return (index + 1) * segmentWidth;
//     });
// }

  // ngOnDestroy() {
  //   if (this.svg.empty && !this.svg.empty()) {
  //     this.svg.selectAll('*').remove();
  //   }
  // }
}
