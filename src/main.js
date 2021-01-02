import {createApp} from 'vue';
import App from "@/App";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseDIalog from "@/components/UI/BaseDIalog";


const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDIalog)

app.mount('#app');