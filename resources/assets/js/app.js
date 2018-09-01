
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('chat-message', require('./components/chat-components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/chat-components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/chat-components/ChatComposer.vue'));
const app = new Vue({
    el: '#app',
    data(){
        return {
            messages:[
                {
                    "message":"y",
                    "user":"y"
                },
                {
                    "message":"x",
                    "user":"x"
                }
            ]
        };
    },
    methods: {
        addMessage(message) {
            console.log("in app: msg text is "+ message.message);
            // Add to existing messages "chat-log"
            this.messages.push(message);
            // Persist to the database etc
        }
    }
});
