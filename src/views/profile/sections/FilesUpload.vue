<template>
  <main>
    <div class="container mx-auto px-3">
      <div class="card mb-8">
        <div class="top px-9 pt-4">
          <button
            @click="section = 1"
            :class="{
              'bg-blue-500 hover:bg-blue-700 text-white border-blue-700': section == 1,
              'bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400':
                section != 1,
            }"
            class="outline-none font-bold py-2 px-4 border shadow"
          >
            Hujjatlarni yuborish
          </button>
          <button
            @click="section = 2"
            :class="{
              'bg-blue-500 hover:bg-blue-700 text-white border-blue-700': section == 2,
              'bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400':
                section != 2,
            }"
            class="outline-none py-2 px-4 border shadow"
          >
            Yuborilgan hujjatlar
          </button>
        </div>
        <view-requests :id="userData.id" v-if="section == 2" />
        <div v-if="section == 1" class="body px-9 pb-7">
          <TypeSelect
            @licenceTypeId="
              (e) => {
                licenceTypeId = e;
              }
            "
            @regionId="
              (e) => {
                regionId = e;
              }
            "
          />
          <div
            v-for="(direct, index) in directList"
            :key="index"
            class="file__download py-5"
          >
            <!-- <pre>
            {{ direct }}
          </pre
            > -->
            <file-input
              :name="direct[`${$localeKey('name')}`]"
              :id="direct.id"
              @fileChange="
                (e) => {
                  pushFile(direct.id, e);
                }
              "
            />
          </div>
          <div class="flex justify-end">
            <button
              @click="sendFiles"
              class="bg-green-500 outline-none h-10 flex justify-center items-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              :class="{ 'cursor-not-allowed': sendLoad }"
            >
              <mini-loading v-if="sendLoad" />
              <span v-else>Button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FileInput from "../components/FileInput.vue";
import TypeSelect from "../components/TypeSelect.vue";
import userService from "@/services/user.service";

import { mapActions, mapState } from "vuex";
import ViewRequests from "./ViewRequests.vue";
export default {
  components: { FileInput, ViewRequests, TypeSelect },
  computed: {
    ...mapState({
      directList: (state) => {
        return state.user.directoryList;
      },
      userData: (state) => {
        return state.user.userData;
      },
    }),
  },
  data() {
    return {
      form: {},
      licenceTypeId: "",
      regionId: "",
      sendLoad: false,
      section: 1,
      licenceType: "",
    };
  },
  methods: {
    ...mapActions({
      directoryList: "user/directoryList",
      sendDocs: "user/sendDocs",
      getByCandidateId: "user/getByCandidateId",
    }),
    async started() {
      let data = {
        limit: 5,
        page: 0,
      };
      await this.directoryList(data);
    },
    async sendFiles() {
      this.sendLoad = true;
      let lawyerId = this.userData.id;
      let licenceTypeId = this.licenceTypeId;
      let regionId = this.regionId;
      let form = {
        ...this.form,
        licenceTypeId,
        regionId,
      };
      let data = form;
      if (this.sendLoad) {
        try {
          let res = await userService.sendDocs(lawyerId, data);
          console.log("sent", res);
          if (res.status == "200") {
            this.form = {};
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.sendLoad = false;
        }
      }
    },
    pushFile(id, file) {
      // console.log(file, event);
      let form = { ...this.form };
      form[id] = file;
      this.form = form;
    },
  },
  created() {
    this.started();
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: 0.5s ease;
  &:hover {
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 20%);
    border-top-color: #48a8c0;
  }
}
</style>
