<template>
  <a href="#!" @click.prevent="">
    <h2>We have you covered during this time of crisis.</h2>
    <p>Visit our COVID-19 Resource Center</p>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  background: rgba(20, 101, 107, 0.2);
  border-top: 4px solid transparent;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  justify-content: flex-end;
  h2 {
    margin-bottom: 16px;
    color: #ffffff;
    line-height: 32px;
    font-size: 26px;
    font-weight: 400;
  }
  p {
    color: #3fabb5;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: normal;
    padding-bottom: 0;
  }
  &:hover {
    background: #14656b;
    border-top: 4px solid #c0cf13;
    p {
      color: white;
    }
  }
}
</style>
