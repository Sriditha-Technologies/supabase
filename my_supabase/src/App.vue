<template>
  <div id="app">
    <ClientsList />
  </div>
</template>

<script setup>
import ClientsList from './components/ClientsList.vue'
</script>

<style>
/* Basic global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>