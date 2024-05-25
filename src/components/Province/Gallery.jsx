import React from 'react'
import GalleryItem from './GalleryItem'
import H2 from '../Common/H2'

function Gallery({ images }) {
    return (
        <>
            <H2 text={'Galería'} />
            <div className="grid gap-2 mt-4 md:gap-4 4 sm:grid-cols-2 auto-rows-fr lg:grid-cols-3 xl:grid-cols-4">
                {images.map((image, index) => (
                    <GalleryItem {...image} key={index} />
                ))}
            </div>
        </>
    )

}
export default Gallery