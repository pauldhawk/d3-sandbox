import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { POPULATION } from '../shared';
//    encapsulation: ViewEncapsulation.None,
@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

    title = 'Donut Chart';

    private width: number = 200;
    private height: number = this.width / 2;

    private svg: any;     // TODO replace all `any` by the right type

    private radius: number;

    private pie: any;
    private benchmark_arc;
    private score_arc;
    private background_color = '#F8F8F8'
    pulse_score_list = {
      0: '#D8F1FF',
      1: '#A0DCFF',
      2: '#40B4FF',
      3: '#0074BF',
      4: '#004A79',
      5: '#273953',
    }
    pulse_benchmark_list = {
      0: '#D4E5BE',
      1: '#B7CD99',
      2: '#A2C179',
      3: '#83A753',
      4: '#648B30',
      5: '#426415',
    };


    constructor() {}

    ngOnInit() {
      const score_color_array = Object.keys(this.pulse_score_list).map(x => this.pulse_score_list[x]);
      const score_colors = d3Scale.scaleOrdinal()
        .range(score_color_array);

      const bench_color_array = Object.keys(this.pulse_benchmark_list).map(x => this.pulse_benchmark_list[x]);
      const benchmark_colors = d3Scale.scaleOrdinal()
      .range(bench_color_array);

      this.initSvg();

      this.drawChart([1,2,3,4,5,6], benchmark_colors, this.benchmark_arc, 2);
      this.drawChart([1,2,3,4,5,6], score_colors, this.score_arc, 3);
    }

    private initSvg() {
      this.svg = d3.select('svg');
      this.radius = this.height;

      const scale = 450;
      const margin = 10 * this.radius / scale;
      const bench = 60 * this.radius / scale;
      const score = 100 * this.radius / scale;

      const score_outer_arc = this.radius;
      const score_inner_arc = score_outer_arc - score;
      const bench_outer_arc = score_inner_arc - margin;
      const bench_inner_arc = bench_outer_arc - bench;

      const anglesRange = 0.5 * Math.PI;

      this.score_arc = d3Shape.arc()
        .outerRadius(score_outer_arc)
        .innerRadius(score_inner_arc);

      this.benchmark_arc = d3Shape.arc()
        .outerRadius(bench_outer_arc)
        .innerRadius(bench_inner_arc);

      this.pie = d3Shape.pie()
        .sort(null)
        .value((d: any) => 1)
        .startAngle( anglesRange * -1)
        .endAngle( anglesRange)
        .padAngle(.02);

      this.svg = d3.select('svg')
        .append('g')
        .attr('transform', 'translate(' + this.width / 2 + ',' + this.height + ')');
    }

    private drawChart(data, colors, arc, score) {
      const g = this.svg.selectAll('.arcs')
        .data(this.pie(data))
        .enter().append('g')

      g.append('path')
        .attr('d', arc)
        .style('fill', (d, i) => (i <= score)
          ? colors(i)
          : this.background_color);
    }

}
