import { VideoComponent } from './componets/page/item/video.js';
import { TodoComponent } from './componets/page/item/todo.js';
import { NoteComponent } from './componets/page/item/note.js';
import { ImageComponent } from './componets/page/item/image.js';
import { PageComponent } from './componets/page/page.js';


class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image user Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note', 'NoteBody');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('TOdo', 'todoCheck' );
        todo.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('video Title', 'https://www.youtube.com/embed/kyN_w43ip7Q');
        video.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);
