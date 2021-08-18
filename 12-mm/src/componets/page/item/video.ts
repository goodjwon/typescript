import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string){
            super(`
                <section class="video">
                    <div class="video__player">
                        <iframe frameborder="0" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen;
                            class="video__iframe">
                            </iframe>
                    </div>
                    <h3 class="video__title"></h3>
                </section>`);
        

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        console.log(url)
        iframe.src = this.convertToURL(url); // url -> videoId

        const titleElement = this.element.querySelector('.video__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

    private convertToURL(url:string): string{
        
        const regExp =  /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
        const match = url.match(regExp);
        
        const videoId = match? match[1] || match[2] : undefined;

        if(videoId){
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;

    }
}