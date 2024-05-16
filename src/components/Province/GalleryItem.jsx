function GalleryItem(image) {
    const load = image.file != undefined;
    return (
        load ? (
            <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                    <img
                        alt="gallery"
                        className="w-full h-64 rounded-lg"
                        src={`${image.file}`} />
                </div>
            </div>
        ) : (
            <></>
        )
    )

}
export default GalleryItem