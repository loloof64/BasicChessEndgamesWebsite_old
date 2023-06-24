<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-app-bar-nav-icon />
      {{ $t('appTitle') }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useLocale } from 'vuetify'
const t = useLocale();
</script>
