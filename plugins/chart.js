import Vue from "vue";
import { Line } from "vue-chartjs/legacy";
import gradient from 'chartjs-plugin-gradient';

import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Plugin, Filler,BorderRadius } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend,LineElement, PointElement, CategoryScale, LinearScale, gradient, Filler )
  
  
Vue.component("line-chart", {
  extends: Line,
});

