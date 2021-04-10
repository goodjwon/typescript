{
    type Video = {
        title: string;
        author: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P]
    }

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'hi',
    }

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog'
    }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    }

    const obj2: Nullable<Video> = {
        title: 'hi', 
        author: null
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
}