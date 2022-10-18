<template>
  <main class="statistics">
    <LineChart />
  </main>
</template>

<script>
import LineChart from '../components/chart/LineChart.vue';
export default {
    components: { LineChart }
}
</script>

<style>
.statistics {
  background-color: #fff;
}
</style>