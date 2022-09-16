<template>
  <div
    tabindex="-1"
    :class="{ hidden: !isOpen, show: isOpen }"
    class="show bg-gray-500 bg-opacity-50 extralarge-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
    aria-hidden="false"
  >
    <div
      class="relative min-h-screen flex flex-col mx-auto p-4 w-full max-w-7xl h-full md:h-auto"
    >
      <!-- Modal content -->
      <div
        class="relative h-full flex-grow flex flex-col bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <!-- Modal header -->
        <div
          class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            {{ res[`${$localeKey("docTypeName")}`] }}
          </h3>
          <button
            @click="coleModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="extralarge-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6 flex-grow">
          <embed
            class="w-full min-h-full"
            type="file/pdf"
            :src="api2 + '/' + res.uploadPath"
          />
        </div>
        <!-- Modal footer -->
      </div>
    </div>
  </div>
</template>

<script>
const api2 = process.env.VUE_APP_ROOT_API2;
export default {
  components: {},
  data() {
    return {
      form: [],
      api2,
    };
  },
  props: {
    isOpen: {
      default: false,
    },
    res: {
      default: {},
    },
  },
  methods: {
    updateFile(id, file) {
      // console.log(file, event);
      let form = [...this.form];
      form[id] = file;
      this.form = form;
    },
    coleModal() {
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped lang="scss">
.extralarge-modal {
  z-index: 1000;
}
</style>
