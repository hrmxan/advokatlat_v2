<template>
  <div class="px-9 pt-4 pb-7">
    <div v-if="!fileView" class="overflow-x-auto files relative shadow-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Litsenziya iqtisosligi</th>
            <th scope="col" class="py-3 px-6">Yuborilgan sana</th>
            <th scope="col" class="py-3 px-6">holati</th>
            <th scope="col" class="py-3 px-6 text-center">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(res, index) in candidate"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              {{ res[`${$localeKey("licenceTypeName")}`] }}
            </th>
            <td class="py-4 px-6">{{ res.date }}</td>
            <td class="py-4 px-6">{{ res.status }}</td>
            <td class="py-4 px-6 text-center">
              <button
                @click.prevent="filesShow(res.file)"
                class="border-0 outline-none bg-blue-400 p-2 rounded hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FFF"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <files-table
      @close="
        (e) => {
          fileView = false;
        }
      "
      v-if="fileView"
      :files="files"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import FilesTable from "./FilesTable.vue";
export default {
  components: {
    FilesTable,
  },
  props: {
    id: {
      default: "",
    },
  },
  data() {
    return {
      modalShow: false,
      editDate: {},
      fileView: false,
      files: [],
    };
  },
  computed: {
    ...mapState({
      candidate: (state) => {
        return state.user.candidate;
      },
    }),
  },
  methods: {
    ...mapActions({
      getByCandidateId: "user/getByCandidateId",
    }),
    filesShow(res) {
      this.files = res;
      this.fileView = true;
    },
  },
  created() {
    if (this.id) {
      this.getByCandidateId(this.id);
    }
  },
};
</script>

<style></style>
