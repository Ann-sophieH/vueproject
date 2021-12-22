import { createApp, reactive } from "vue"; //reactive om berichten te implementeren bij lag
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "nprogress/nprogress.css";

const GStore = reactive({message: ""}) //methode die message bevat
createApp(App)
    .use(store)
    .use(router)
    .provide('GStore', GStore) //providen van gstore variablee zodat je in elk component kan gebruiken
    .mount("#app");
