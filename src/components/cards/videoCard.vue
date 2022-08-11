<template>
  <a href="#!" @click.prevent="">
    <div class="video">
      <iframe
        height="315"
        src="https://www.youtube-nocookie.com/embed/cLD2QW2vYQ0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="body p-5">
      <strong>Lorem ipsum dolor sit amet.</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae
        consequatur aliquam laborum, doloribus enim!
      </p>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  border-top: 4px solid #c0cf13;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: 0.5s ease;
  .video {
    height: 208px;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      font-size: 22px;
      line-height: 26px;
      font-weight: 400;
      color: black;
      text-align: center;
    }
    p {
      color: #9b9b9b;
      font-size: 16px;
      line-height: 22px;
      font-style: italic;
      text-align: center;
    }
  }
  &:hover {
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 20%);
    border-top-color: #48a8c0;
    strong {
      color: #48a8c0;
    }
  }
}
</style>
