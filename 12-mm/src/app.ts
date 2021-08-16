import { ImageComponent } from './componets/page/item/image.js';
import { PageComponent } from './componets/page/page.js';

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image user Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);