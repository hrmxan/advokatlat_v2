<template>
  <a href="#!" class="mx-3" @click.prevent="">
    <p>Lorem, ipsum dolor.</p>
    <strong>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugit optio facere
      sint rerum! Doloribus?
    </strong>
  </a>
</template>

<script>
export default {};
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
  p {
    color: #48a8c0;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    margin: 0px 0px 12px;
  }
  strong {
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;
  }
  &:hover {
    background: #14656b;
    border-color: #c0cf13;
  }
}
</style>
