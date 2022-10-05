<template>      
    <round-chart
         :chartData="chartData"
         :chartOptions="chartOptions"
         :width="600"
         :height="600"
    />
</template>

<script>
export default {
    props: {
      chartId: {
        type: String,
        default: 'doughnut-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 600
      },
      height: {
        type: Number,
        default: 600
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        chartData: {
            labels: ['January'],
            datasets: [
                {
                  data: [40,20,10,15,5,10],
                  label: '',
                  backgroundColor: ['#0A6148','#09976E','#09976E','#09976E','#09976E','#09976E'],
                  borderColor: ["#0A6148","#0A6148","#0A6148","#0A6148","#0A6148","#0A6148","#0A6148","#0A6148"],
                  fill:true,
                }
            ],

        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                legend:{
                    display:false,
                }
            },
            elements: {
                arc: {
                  weight: .5,
                }
            }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>