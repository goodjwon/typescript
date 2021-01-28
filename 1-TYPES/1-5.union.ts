{
    /**
     * Union Type: OR
     * 
     */

     type Direction = 'left' | 'right' | 'up' | 'down';
     function move(direction: Direction){
         console.log(direction)
     };

     move('down');
     move('right');

     type TileSize = 8 | 16 | 32;
     const tile: TileSize = 16;
       

     // function: login -> success, fail...

     type SucccessState = {
         response: {
             body: string
         }
     };

     type FailState = {
         response: {
            reason: string
         }
     };

     type LoginState = SucccessState | FailState;

     function login2(): LoginState {
        return {
            response: {
                body: 'logged in!!'
            },
        };
     };

     // printLoginStatus(state: LoginState)
     // success -> body
     // fail -> reason
     function printLoginStatus(state: LoginState):void {
         if ( 'response' in state){
             console.log(`${state.response.body}`);
         }else{
             console.log(`${state.reason}`)
         }
     };
}