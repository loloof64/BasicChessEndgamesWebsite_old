<template>
  <div class="content">
    <p>{{ $t('pages.home.description_1') }}</p>
    <br />
    <p>{{ $t('pages.home.description_2') }}<br />{{ $t('pages.home.description_3') }}</p>
  </div>
</template>

<script setup>
import { useLocale } from 'vuetify'
const t = useLocale();
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>