<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
}
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
</template>

<style lang="scss"></style>
