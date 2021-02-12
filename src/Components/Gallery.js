import ImageLoader from './ImageLoader';
import Data from '../models/Data';

var scrollListener = {
    handleEvent: (e) => {
        let totalScrolled = e.target.scrollingElement.scrollTop;
        let clientHeight = e.target.scrollingElement.clientHeight;
        let pageSize = e.target.scrollingElement.scrollHeight;

        // trigger loard more data when bottom of page
        if ((totalScrolled + clientHeight === pageSize)) {
            Data.loadImages();
        }
    },
}

var Gallery = {
    oninit: Data.loadImages,
    oncreate: () => document.addEventListener("scroll", scrollListener ),
    onremove: () => document.removeEventListener("scroll", scrollListener),
    view: () => {
        return [
            m("#gallery", {
            } ,[ Data.images.map(image => m(ImageLoader, image)) ])
        ]
    }
}

export default Gallery;