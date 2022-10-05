<template>
  <div class="container">
    <line-chart
      :chart-options='chartOptions'
      :chart-data='chartData'
      chart-id='myCustomId'
    />
  </div>
</template>

<script>

export default {
  computed: {
      chartData() { 
        return {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
              data: [40, 39, 10, 40, 39, 80, 40],
              label: '',
              // backgroundColor: '#85C250', 
              borderColor: ["#1BD19C"],
              radius: 0,
              tension:0.3,
              borderWidth: 1,
              fill:true,
              backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0,0,0,600);

                gradient.addColorStop(0, '#1BD19C');
                gradient.addColorStop(1, '#1cd19e00');

                return gradient;
              },
            }
          ],
        }
      },
      chartOptions() { 
        return  {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
              x:{
                grid:{
                  color:'#1bd19d42'
                }
              },
              y:{
                grid:{
                  color:'#1bd19d42'
                }
              }
            },
            plugins:{
                legend:{
                    display:false,
                },
                filler: {
                    propagate: true
                }
              }
            }
      }
    }
}
</script>
<style scoped>
  .container{
    width: 100%;
    height: 500px;
  }
</style>

