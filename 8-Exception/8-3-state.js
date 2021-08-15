"use strict";
{
    var NetworkClient_1 = /** @class */ (function () {
        function NetworkClient() {
        }
        NetworkClient.prototype.tryConnect = function () {
            throw new Error('no network!!');
        };
        return NetworkClient;
    }());
    var UserService_1 = /** @class */ (function () {
        function UserService(client) {
            this.client = client;
        }
        UserService.prototype.login = function () {
            this.client.tryConnect();
            // login ....
        };
        return UserService;
    }());
    var App_1 = /** @class */ (function () {
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
    var client_1 = new NetworkClient_1();
    var service_1 = new UserService_1(client_1);
    var app_1 = new App_1(service_1);
    app_1.run();
}
