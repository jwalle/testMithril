import {shuffleArray} from '../tools'

const setSize = ({height, width, id}) => {
    // all portrait images
    if (height > width) return {  'grid-row': `span 2` }

    const rand = Math.random();
    // 20 % landscape images
    if (rand > 0.8) return { "grid-column": `span 2` };
    // 20 % double size images
    if (rand < 0.2) return { "grid-column": `span 2`,  'grid-row': `span 2` };
    // 60 % normal images
    return { 'grid-row': `span 1` };
};

const Data = {
    page: 1,
    images: [],
    loadImages: () => {
            return m.request({
                method: 'GET',
                url: 'https://picsum.photos/v2/list?limit=30&page=' + Data.page
            })
            .then((result) => {
                shuffleArray(result);
                result = result.map((image) => {
                    // set a random dimension to each image
                    image.dimension = setSize(image)
                    return image;
                });
                Data.images.push(...result)
                Data.page += 1;
            })
            .catch((error) => console.error(error))
    }
}

export default Data