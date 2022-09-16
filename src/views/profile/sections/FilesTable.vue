<template>
  <div class="files__table">
    <div class="top flex justify-between items-center pb-5">
      <h2 class="m-0">Yuborilgan hujjatlar salom</h2>
      <button
        @click="$emit('close', false)"
        class="border-0 outline-none bg-blue-400 p-2 rounded hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FFF"
          class="bi bi-box-arrow-in-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
      </button>
    </div>
    <div class="overflow-x-auto files relative shadow-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Turi</th>
            <th scope="col" class="py-3 px-6">Nomi</th>
            <th scope="col" class="py-3 px-6">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(file, index) in files"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              {{ file[`${$localeKey("docTypeName")}`] }}
            </th>
            <td class="py-4 px-6">{{ file.fileName }}</td>
            <td class="py-4 px-6 text-right">
              <a
                @click.prevent="viewFile(file)"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >view</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ViewModal
      @close="
        (e) => {
          modalShow = false;
        }
      "
      :isOpen="modalShow"
      :res="showData"
    />
  </div>
</template>

<script>
import ViewModal from "../components/ViewModal.vue";
export default {
  components: {
    ViewModal,
  },
  props: {
    files: {
      default: [],
    },
  },
  data() {
    return {
      modalShow: false,
      showData: {},
    };
  },
  methods: {
    viewFile(file) {
      this.showData = file;
      this.modalShow = true;
    },
  },
};
</script>

<style></style>
