import React from 'react'
import GalleryItem from './GalleryItem'
import H2 from '../Common/H2'

function Gallery({ images }) {
    return (
        <>
            <H2 text={'Galería'} />
            <div className="grid grid-cols-3 gap-4 mt-4 auto-rows-fr">
                {images.map((image, index) => (
                    <GalleryItem {...image} key={index} />
                ))}
            </div>
        </>
    )

}
export default Gallery