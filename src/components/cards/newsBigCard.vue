<template>
  <a :href="to" class="h-full">
    <h2 class="mb-4">{{ title }}</h2>
    <p>{{ poster }}</p>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    poster: {
      type: String,
    },
    to: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
a {
  background: #001e24;
  min-height: 320px;
  display: flex;
  border-top: 4px solid transparent;
  flex-direction: column;
  position: relative;
  padding: 40px;
  justify-content: flex-end;
  &:hover {
    border-top: 4px solid #c0cf13;
  }
}
h2 {
  font-size: calc(38px + 7 * ((100vw - 350px) / 850));
  word-break: break-all;
}
p {
  color: #c0cf13;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  letter-spacing: normal;
}
</style>
