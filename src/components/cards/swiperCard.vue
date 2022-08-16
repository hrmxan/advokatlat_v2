<template>
  <router-link :to="`/news/${id}`" class="mx-3">
    <p>{{ title }}</p>
    <div class="text" v-html="text"></div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    timing: {
      type: String,
    },
    text: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
a {
  display: flex;
  flex-direction: column;
  border-top: 4px solid #48a8c0;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  color: #ffffff;
  display: flex;
  outline: none;
  min-height: 308px;
  padding: 37px;
  text-decoration: none;
  transition: 0.5s ease;
  width: 100%;
  p {
    color: #48a8c0;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    margin: 0px 0px 12px;
  }
  div.text {
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;

    flex: 1;
    width: 100%;
    max-height: 100px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background: #14656b;
    border-color: #c0cf13;
  }
}
</style>
