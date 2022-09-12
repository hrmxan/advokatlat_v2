<template>
  <router-link class="h-full" :to="`/news/${id}`" @click.prevent="">
    <strong>{{ title }}</strong>
    <span>{{ timing }}</span>
    <div class="text text-base" v-html="text"></div>
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
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
  color: #000000;
  line-height: 32px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-top: 4px solid #c0cf13;
  padding: 42px;
  min-height: 250px;
  margin: 0;
  align-items: stretch;
  transition: all 0.5s ease;
  strong {
    color: #48a8c0;
    font-size: 12px;
    line-height: 12px;
    display: block;
    margin-bottom: 13px;
  }
  span {
    color: #333f48;
    margin: 0 0 3px 0;
    font-size: 12px;
    line-height: 12px;
    display: flex;
  }
  .text {
    font-family: "Lato", sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
    line-height: 32px;
    color: #000000 !important;

    flex: 1;
    width: 100%;
    max-height: 100px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    p {
      background: #000000 !important;
    }
  }
  &:hover {
    border-top-color: #48a8c0;
    color: #48a8c0;
    text-decoration: none;
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 20%);
    .text,
    .text * {
      color: #48a8c0;
    }
  }
}
</style>
