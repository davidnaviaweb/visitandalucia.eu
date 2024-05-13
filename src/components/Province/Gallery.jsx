import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery({images}) {
    return (
        <>
            <h2>Galería</h2>
            <div className="flex flex-wrap -m-1 md:-m-2">
                {images.map((image, index) => (
                    <GalleryItem {...image} key={index} />
                ))}
            </div>
        </>
    )

}
export default Gallery