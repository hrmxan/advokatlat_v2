<template>
  <a href="#!" @click.prevent="">
    <img class="mr-3" src="@/assets/img/lawyer_default.jpg" />
    <div class="body">
      <strong>Type of</strong>
      <h3 class="mb-3">Palonchiyev Tugunchi Palonchi o'gli</h3>
      <span>Toshkent</span>
      <p class="mt-3">BIO ga o'tish</p>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  strong {
    color: #929292;
    font-family: "Lato", sans-serif;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1.5px;
    line-height: 16px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 4px;
  }
  h3 {
    font-size: 22px;
    line-height: 26px;
    @apply text-bgdarkblue;
  }
  span {
    color: #929292;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
  p {
    color: #48a8c0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
}
a {
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #d9d9d9;
  img {
    width: 80px;
    height: 105px;
    object-fit: cover;
  }
  transition: 0.5s ease;
  &:hover {
    box-shadow: 0 2px 80px 0 rgb(0 0 0 / 20%);
    h3 {
      color: #c0cf13;
    }
  }
}
</style>
