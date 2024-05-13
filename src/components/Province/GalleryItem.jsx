
function GalleryItem(image) {
    const source = image.file;
    console.log(source);
    return (
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    className="w-full h-64 rounded-lg"
                    src={source} />
            </div>
        </div>
    )

}
export default GalleryItem