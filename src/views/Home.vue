<template>
  <div class="home">
    <h1>Homepage and content</h1>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
