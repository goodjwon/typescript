"use strict";
{
    function move(direction) {
        console.log(direction);
    }
    ;
    move('down');
    move('right');
    var tile = 16;
    function login2() {
        return {
            response: {
                body: 'logged in!!'
            },
        };
    }
    ;
    // printLoginStatus(state: LoginState)
    // success -> body
    // fail -> reason
    function printLoginStatus(state) {
        if ('response' in state) {
            console.log("" + state.response.body);
        }
        else {
            console.log("" + state.reason);
        }
    }
    ;
}
