<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      {{ $t('appTitle') }}
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <router-link to="/">
        <v-list-item prepend-icon="mdi-home" :title="t('pages.home.title')">
        </v-list-item>
      </router-link>

      <router-link to="/privacy">
        <v-list-item prepend-icon="mdi-security" :title="t('pages.privacy.title')">
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const drawer = ref(false);

const items = [
  {
    "title": t('pages.home.title'),
    "value": "home"
  },
  {
    "title": t('pages.privacy.title'),
    "value": "privacy"
  },
];
</script>
