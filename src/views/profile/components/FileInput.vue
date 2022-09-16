<template>
  <label
    class="flex flex-col w-full p-4 border-2 border-bgdarkblue hover:border-baseyellow border-opacity-30 border-dashed"
    :for="id"
  >
    <p class="text text-bgdarkblue">
      {{ name }}
    </p>
    <strong v-if="fileName" class="flex mt-2 text-green-600"> {{ fileName }}</strong>
    <strong v-else class="flex mt-2 text-baseblue"> {{ fileIn }}</strong>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="rgb(15, 116, 54)"
      class="bi bi-download"
      viewBox="0 0 16 16"
    >
      <path
        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
      />
      <path
        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
      />
    </svg>
    <input @change="fileUpload" class="hidden" :id="id" type="file" />
  </label>
</template>

<script>
export default {
  props: {
    id: {
      default: "file",
    },
    name: {
      type: String,
    },
    fileIn: {
      default: "",
    },
  },
  data() {
    return {
      fileName: null,
      fileData: "",
    };
  },
  watch: {
    fileData(e) {
      if (e != "") {
        this.$emit("fileChange", this.fileData);
      }
    },
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.files[0].name;
      this.fileData = event.target.files[0];
    },
  },
};
</script>

<style scoped lang="scss">
label {
  position: relative;
  cursor: pointer;
  p {
    color: #3f4254;
  }
  p,
  strong {
    font-size: 18px;
    opacity: 1;
    transition: 0.5s;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.5s;
  }
  &:hover {
    p,
    strong {
      opacity: 0.1;
      fill: rgb(15, 116, 54);
    }
    svg {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
