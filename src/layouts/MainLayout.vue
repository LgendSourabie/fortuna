<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          class="text-black"
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black">
          <div class="absolute-center">
            <q-icon class="text-black" name="pix" />
            Fortuna
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :width="260" :breakpoint="767" class="bg-primary" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label class="text-black" header> Navigation </q-item-label>

        <NavLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import NavLink from "src/components/Nav/NavLink.vue";

const navLinks = [
  {
    title: "Entries",
    icon: "account_balance_wallet",
    link: "/",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
  },
 
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
