@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            {{--how know div #app--}}
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Chatroom</div>

                    {{-- add prop for chat log as data be in app.js and pass data for chat-log --}}
                    <chat-log :messages="messages"></chat-log>
                    <chat-composer v-on:messagesent="addMessage"></chat-composer>
                </div>
            </div>
        </div>
    </div>
@endsection
