<template lang="html">
    <div class="chat-log">
        <!-- loop messages then add for each item attr "key" has item value -->
        <!--
        Note:
             * if msg element is data will value of each item is this data ,but
               if msg element is property will get value from this array

        -->
        <chat-message
             v-for="(messageData, messageIndex) in messages"
                     v-bind:messageData="messageData"
                     v-bind:messageIndex="messageIndex"
                     :key="messageIndex"
        ></chat-message>
    </div>
</template>

<script>
    export default {
//        data(){
//            return {
//                messages:[
//                    {
//                        "message":"y",
//                        "user":"y"
//                    },
//                    {
//                        "message":"x",
//                        "user":"x"
//                    }
//                ]
//            };
//        }
        props: ['messages']
    }
</script>

<style lang="css">
    .chat-log .chat-message:nth-child(even) {
        background-color: #ccc;
    }
</style>