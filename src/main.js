import Vue from "vue";
import App from "@/App.vue";

/**
 * Javascript entry point
 */

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
