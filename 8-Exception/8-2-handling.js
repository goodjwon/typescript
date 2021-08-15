"use strict";
var NetworkClient = /** @class */ (function () {
    function NetworkClient() {
    }
    NetworkClient.prototype.tryConnect = function () {
        throw new Error('no network!!');
    };
    return NetworkClient;
}());
var UserService = /** @class */ (function () {
    function UserService(client) {
        this.client = client;
    }
    UserService.prototype.login = function () {
        this.client.tryConnect();
        // login ....
    };
    return UserService;
}());
var App = /** @class */ (function () {
    function App(userSercice) {
        this.userSercice = userSercice;
    }
    App.prototype.run = function () {
        try {
            this.userSercice.login();
        }
        catch (error) {
            console.log('Network error.. Check your network!!!');
        }
    };
    return App;
}());
var client = new NetworkClient();
var service = new UserService(client);
var app = new App(service);
app.run();
