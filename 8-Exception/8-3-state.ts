{   
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout'
    }
    type SuccessState = {
        result: 'success'
    }

    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState{
            throw new Error('no network!!')
        }
    }
    
    class UserService {
        constructor(private client: NetworkClient) {
    
        }
    
        login(){
            this.client.tryConnect();
            // login ....
        }
    }
    
    class App {
        constructor(private userSercice: UserService){}
        run(){
            try{
                this.userSercice.login();
            } catch (error){
                console.log('Network error.. Check your network!!!')
            }
        }
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}