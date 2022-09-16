<template>
  <div>
    {{ resPonse }}
  </div>
</template>
<script>
// import login from "@/services/login.service.js";

import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      resPonse: {},
    };
  },
  methods: {
    ...mapMutations({
      isLoading: "user/setLoading",
    }),
    ...mapActions({
      tokenOneId: "user/tokenOneId",
    }),
    getSearchParameters() {
      let prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? this.transformToAssocArray(prmstr) : {};
    },
    transformToAssocArray(prmstr) {
      let params = {};
      let prmarr = prmstr.split("&");
      for (let i = 0; i < prmarr.length; i++) {
        let tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
      }
      return params;
    },
    async setProfile() {
      this.isLoading(true);
      let params = this.getSearchParameters();
      console.log(params);
      this.resPonse = params;
      if (!params.state && !params.code) {
        // this.$router.push("/login");
        console.log("if ichida");
      } else {
        // await login.loginRequestToOneId(params.code, params.state).then((res) => {
        //   if (res.data.token) {
        //     userService.setToken(res.data.token);
        //     this.isLoading(false);
        //     this.$router.push({ name: "Profile" });
        //   }
        // });
        this.tokenOneId({
          code: params.code,
          state: params.state,
        });
      }
    },
  },
  created() {
    this.setProfile();
  },
};
</script>
