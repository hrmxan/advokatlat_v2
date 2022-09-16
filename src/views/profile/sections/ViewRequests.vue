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
            <th scope="col" class="py-3 px-6">Amallar</th>
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
            <td class="py-4 px-6 text-right">
              <a
                @click.prevent="filesShow(res.file)"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
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
