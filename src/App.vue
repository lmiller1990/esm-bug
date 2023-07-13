<template>
  <h1 v-if="store.user">Hello, {{ store.user.username }}</h1>
</template>

<script lang="ts" setup>
import { useUsers } from "./store.js";

console.log(store, useUsers())
const store = useUsers();

</script>