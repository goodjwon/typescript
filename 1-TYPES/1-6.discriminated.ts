{
  
     // function: login -> success, fail...
     type SucccessState = {
         result: 'success';
         response: {
             body: string
         }
     };
     type FailState = {
        result: 'fail';
        reason: string;
     };

     type LoginState = SucccessState | FailState;

     function login (): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!!'
            },
        };
     };

     // printLoginStatus(state: LoginState)
     // success -> body
     // fail -> reason
     function printLoginStatus(state: LoginState){
        
         if(state.result === 'success'){
             console.log(`${state.response.body}`);
         }else{
             console.log(`${state.reason}`)
         }
     };
}