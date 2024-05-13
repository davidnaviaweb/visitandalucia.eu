import React from 'react'
import GalleryItem from './GalleryItem'
import H2 from '../Common/H2'

function Gallery({ images }) {
    return (
        <>
            <H2 text={'Galería'} />
            <div className="flex flex-wrap -m-1 md:-m-2">
                {images.map((image, index) => (
                    <GalleryItem {...image} key={index} />
                ))}
            </div>
        </>
    )

}
export default Gallery