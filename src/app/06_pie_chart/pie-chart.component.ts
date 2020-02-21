import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Cols from 'd3-collection';
import * as d3Axis from 'd3-axis';
import { POPULATION } from '../shared';
import mocks from '../shared/heat_mocks';
@Component({
    selector: 'app-pie-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    // sizing
    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    @Input('width') total_width = 400;
    @Input('height') total_height = 400;
    height;
    width;
    private padding = 0.05;

    // colors and scales
    private color_array = [ '#D8F1FF', '#A0DCFF', '#40B4FF', '#0074BF', '#004A79', '#273953', ];
    private color: any; // the color scale

    private x;
    private y;

    // raw data
    @Input() data = mocks.data;
    @Input() xData = mocks.scores;
    @Input() yData = mocks.topics;

    title = 'Pie Chart';
    private radius: number;

    private arc: any;
    private labelArc: any;
    private pie: any;


    private color_range: any;
    private svg: any;

    constructor() {

    }

    ngOnInit() {
      this.width = this.total_width - this.margin.left - this.margin.right;
      this.height = this.total_height - this.margin.top - this.margin.bottom;
      this.initSvg();
      this.drawPie();
    }

    private initSvg() {
      this.color = d3Scale.scaleLinear<string>()
        .range(this.color_array)
        .domain([0,d3Array.max(this.data, (x) => x.count)])

      this.y = d3Scale.scaleBand()
        .range([0, this.height])
        .domain(this.yData.map(y => `id-${y.topic_id}`))
        .padding(this.padding);

      this.x = d3Scale.scaleBand()
        .range([0, this.width])
        .domain(this.xData.map(x => `id-${x.score}`))
        .padding(this.padding);


      this.svg = d3.select('svg')
        .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
    }

    private drawPie() {
      let g = this.svg.selectAll('.heat')
        .data(this.data, (d) =>  `${d.topic_id}:${d.score_id}`)
        .enter()
        .append("rect")
        .attr("y", (d) =>  this.y(`id-${d.topic_id}`) )
        .attr("x", (d) => this.x(`id-${d.score_id}`)  )
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", this.x.bandwidth() )
        .attr("height", this.y.bandwidth() )
        .style("fill", (d) => this.color(d.count) )
        .style("stroke-width", 4)
        .style("stroke", "none")
        .style("opacity", 0.8)
    }

}
