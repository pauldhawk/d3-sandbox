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

    private width: number;
    private height: number;

    private svg: any;     // TODO replace all `any` by the right type

    private radius: number;

    private arc: any;
    private pie: any;
    private color: any;

    private g: any;

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

    benchmark_arc;
    score_arc;
    constructor() {}

    ngOnInit() {
      const score_color_array = Object.keys(this.pulse_score_list).map(x => this.pulse_score_list[x]);
      const score_colors = d3Scale.scaleOrdinal()
        .range(score_color_array);
      const bench_color_array = Object.keys(this.pulse_benchmark_list).map(x => this.pulse_benchmark_list[x]);

      const benchmark_colors = d3Scale.scaleOrdinal()
      .range(bench_color_array);

      this.initSvg();

      this.drawChart(bench_color_array, benchmark_colors, this.benchmark_arc);
      this.drawChart(score_color_array, score_colors, this.score_arc);
    }

    private initSvg() {
        this.svg = d3.select('svg');

        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;

        const anglesRange = 0.5 * Math.PI;
        this.arc = d3Shape.arc()
          .outerRadius(this.radius - 10)
          .innerRadius(this.radius - 70)
        this.benchmark_arc = d3Shape.arc()
          .outerRadius(this.radius - 80)
          .innerRadius(this.radius - 100)

        this.score_arc = d3Shape.arc()
          .outerRadius(this.radius - 10)
          .innerRadius(this.radius - 70)

        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => 1)
            .startAngle( anglesRange * -1)
            .endAngle( anglesRange)
            .padAngle(.02)

        this.svg = d3.select('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    }

    private drawChart(data, colors, arc) {
        let g = this.svg.selectAll('.benchmark')
            .data(this.pie(data))
            .enter().append('g')
            // .attr('class', 'arc');

        g.append('path')
            .attr('d', arc)
            .style('fill', (d, i) => colors(i) );
    }

}
