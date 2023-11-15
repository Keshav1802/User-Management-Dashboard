<template>
  <div id="app">
    <header>
      <h1>User Management Dashboard</h1>
    </header>

    <main>
      <DashboardCreate />
    </main>

    <footer>
      <p>&copy; Made By Keshav Kumar</p>
    </footer>
  </div>
</template>

<script>
import DashboardCreate from './components/DashboardCreate.vue';

export default {
  components: {
    DashboardCreate,
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

header {
  background-color: #41b883;
  padding: 20px;
  color: white;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #eee;
}
</style>
