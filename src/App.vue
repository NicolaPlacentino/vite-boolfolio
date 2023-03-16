<script>
import HomePage from './pages/HomePage.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { HomePage, AppHeader },
}
</script>

<template>
  <AppHeader></AppHeader>
  <HomePage></HomePage>
</template>

<style lang="scss"></style>
