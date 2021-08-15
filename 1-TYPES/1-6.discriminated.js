"use strict";
{
    function login() {
        return {
            result: 'success',
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
        if (state.result === 'success') {
            console.log("" + state.response.body);
        }
        else {
            console.log("" + state.reason);
        }
    }
    ;
}
