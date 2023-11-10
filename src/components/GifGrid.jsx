import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // Never call functions inside funcional components
    // getGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {isLoading && (<h2>Loading...</h2>)}

            <div className='card-grid'>
                {/* {images.map(({ id, title, url }) => <GifItem key={id} title={title} url={url}  /> )} */}
                {images.map((image) => <GifItem key={image.id} {...image} />)}
            </div>

        </>
    )

};