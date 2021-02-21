{
    function checkNotNullBad(arg:number | null): number{
        if(arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNull<T>(arg:T | null): T{
        if(arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }

    const number = checkNotNull(1);
    console.log(number);
    const boal: boolean = checkNotNull(true)
    console.log(boal);
    
}