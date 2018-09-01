
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
        /*why can't remove this if i get data from backend*/
        // moved from ChatLog to here
        // then get from backend
        return {
            messages:[
                {
                    "message":"y",
                    "user":{"name":"y"}
                },
                {
                    "message":"x",
                    "user":{"name":"x"}
                }
            ]
        };
    },
    methods: {
        addMessage(message) {
            console.log("new msg: "+ message.message);
            // Persist to the database etc
            //get new message
            axios.post('/message',message).then(response => {
                //store message to backend
                //log response data
                console.log(response.data);
                if (response.data.status === 200 ){
                    // Add to existing messages "chat-log"
                    this.messages.push(message);
                // } else{
                    //error in console
                    /**
                     *  Error in render: "TypeError: Cannot read property 'name' of undefined"
                     */
                    // this.messages.push(message+ " Failed send");
                }

            });
        }
    },
    created() {
        //get messages from backend
        axios.get('/message').then(response => {
            console.log(response.data);
            //this line override messages data above
            this.messages = response.data;
        });

        //event
        window.Echo.join('chatroom')
            /**
             * here
             *      executed immediately once the channel is joined successfully,
             *      and will receive an array containing the user information
             *      for all of the other users currently subscribed to the channel.
             * The joining
             *      method will be executed when a new user joins a channel,
             * while the leaving
             *      method will be executed when a user leaves the channel.
             */
            // .here((users) => {
            //         this.usersInRoom = users;
            // })
            // .joining((user) => {
            //         this.usersInRoom.push(user);
            // })
            // .leaving((user) => {
            //         this.usersInRoom = this.usersInRoom.filter(u => u != user)
            // })
            .listen('MessagePosted', (e) => {
                console.log('Got event...');
                //handle event
                   this.messages.push({
                    message: e.message.message,
                    user: e.user
                });
            });
    }
});
