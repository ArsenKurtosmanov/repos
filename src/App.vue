<template>
  <v-app>
    <Navbar/>
</v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    comments: {
        Navbar
    },
    components: { Navbar }
}
</script>