const ImageLoader = () => {
    let _dom = undefined;
    let state = {
        loadedURL: null,
    };

    // create a link to the image with a downscale resolution
    const setLink = ({height, width, id}, downscale) => {
        const lowWidth = Math.floor(width / downscale);
        const lowHeight = Math.floor(height / downscale);

        return `https://picsum.photos/id/${id}/${lowWidth}/${lowHeight}`
    };

    //switch resolution when Higher res is loaded
    const switchImage = (vnode) => {        
        let loadImage = new Image();
        loadImage.onload = () => {
            state.loadedURL =  loadImage.src;
            m.redraw();
        }
        loadImage.src = setLink(vnode.attrs, 2);
    };

    
    const renderView = (vnode) => {
        return  m('div', {style:vnode.attrs.dimension},
            [
                m('img', {src: state.loadedURL || setLink(vnode.attrs, 10), alt: vnode.attrs.author}),
                m('span', { class: 'author_name' }, vnode.attrs.author)
            ]
        )
    }

    return {
        oninit: (vnode) => switchImage(vnode),
        oncreate: (vnode) => _dom = vnode.dom,
        view: (vnode) => renderView(vnode)
    }
}

export default ImageLoader;