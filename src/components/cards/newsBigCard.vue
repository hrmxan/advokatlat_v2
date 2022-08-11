<template>
  <a href="#!" class="mb-4" @click.prevent="">
    <h2 class="mb-4">Talent Mandatory. Office Optional.</h2>
    <p>View our work from anywhere policy</p>
  </a>
</template>

<script>
export default {};
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
}
p {
  color: #c0cf13;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  letter-spacing: normal;
}
</style>
