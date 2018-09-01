<template lang="html">
    <div class="chat-message">
        <!-- If use data not props  and data will repeat as in loop  -->
        <!--<p>{{ message }}</p>-->
        <!--<small>{{ user }}</small>-->
        <p>{{ messageData.message }}</p>
        <small>{{ messageData.user.name }}</small>
    </div>
</template>

<script>
    export default {
        //assign message props"property" value in component
//        data(){
//            return {
//                        "message":"z",
//                        "user":"z"
//            };
//        }
        props: ['messageData']
    }
</script>

<style lang="css">
    .chat-message {
        padding: 1rem;
    }
    .chat-message > p {
        margin-bottom: .5rem;
    }
</style>