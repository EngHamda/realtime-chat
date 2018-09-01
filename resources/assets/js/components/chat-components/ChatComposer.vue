<template lang="html">
    <div class="chat-composer">
        <input
                type="text"
                placeholder="Start typing your message..."
                v-model="messageText"
                @keyup.enter="sendMessage"
        >
        <button class="btn btn-primary" v-on:click="sendMessage">Send</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messageText: 'Hi, '//Default Message
            }
        },
        methods: {
            /**
             * get msg from input field when click enter on send button
             */
            sendMessage() {
                console.log(this.messageText);
                /**
                 * messagesent is event in this component
                 * this event sent data for method in parent component
                 */
                this.$emit('messagesent', {
                    message: this.messageText,
                    user: {"name":
                        /**
                         * get name from navbar
                         * "Test user"
                         */
                        $('.navbar-right .dropdown-toggle').text()
                    }
                });
                this.messageText = '';
            }
        }
    }
</script>

<style lang="css">
    .chat-composer {
        display: flex;
    }
    .chat-composer input {
        flex: 1 auto;
    }
    .chat-composer button {
        border-radius: 0;
    }
</style>
