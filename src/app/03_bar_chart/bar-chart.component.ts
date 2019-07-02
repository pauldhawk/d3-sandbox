import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { STATISTICS } from '../shared';

@Component({
    selector: 'app-bar-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    title = 'Bar Chart';

    private width: number;
    private bar_width: number;
    private bar_height: number = 30;
    private bar_padding: number = 4;
    median_height: number = 20;
    private height: number;
    private margin = {top: 20, right: 20, bottom: 30, left: 40};

    private x: any;
    private y: any;
    private svg: any;
    private g: any;

    benchmark_median = 1;
    our_score = 1;
    benchmark_translate: number;
    scores = [
      {name: "None", score_count: 2, score_percent: .20},
      {name: "Rudimentary", score_count: 2, score_percent: .20},
      {name: "Intermediate", score_count: 1, score_percent: .10 },
      {name: "Robust", score_count: 5, score_percent: .50 }
    ];

    constructor() {}

    ngOnInit() {
        this.initSvg();
        this.drawBars();
    }

    private initSvg() {
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.bar_width = ( this.width / 4 ) - this.bar_padding;
        this.benchmark_translate = ( this.width / 4 ) * this.benchmark_median;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
         //   .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private drawBars() {
        this.g.selectAll('.bar')
            .data(this.scores)
            .enter().append('rect') // '#98abc5', '#8a89a6'
            .style('fill', (d, i) => this.our_score  > i ? '#0076BC' : '#ffffff') // f8f8f8
            .attr('x', (d, i) => i * (this.bar_width + this.bar_padding) )
            .attr('y', 0)
            .attr('width', this.bar_width)
            .attr('height', this.bar_height );

        this.svg.append('rect')
            .attr("transform", `translate(${this.benchmark_translate},0) rotate(45)`)
            .attr('x',  0)
            .attr('y', 0)
            .attr('width', this.median_height)
            .attr('height', this.median_height)
            .attr('fill', '#56AADB');
    }

}
