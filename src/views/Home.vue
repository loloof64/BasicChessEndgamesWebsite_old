<template>
  <v-main class="content">
    <h1>{{ $t('pages.home.title') }}</h1>
    <br />
    <p>{{ $t('pages.home.description_1') }}</p>
    <br />
    <p>{{ $t('pages.home.description_2') }}<br />{{ $t('pages.home.description_3') }}</p>
  </v-main>
</template>

<script setup>
</script>

<style scoped>
.content {
  padding-left: 20px;
  padding-right: 20px;
}
</style>