<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" name="csrf-token" content="{{ csrf_token() }}">
        {{--<meta name="csrf-token" content="{{ csrf_token() }}">--}}
        <title>Chatroom</title>
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <div id="app">
            <h1>Chatroom</h1>
            {{--<chat-message></chat-message>--}}
            {{-- add prop for chat log as data be in app.js and pass data for chat-log --}}
            <chat-log :messages="messages"></chat-log>

            <chat-composer @messagesent="addMessage"></chat-composer>
            <example-component></example-component>
        </div>
        <script src="js/app.js" charset="UTF-8"></script>
    </body>
</html>