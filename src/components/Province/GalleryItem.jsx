function GalleryItem(image) {
    const load = image.file != undefined;
    return (
        load ? (
            <div className="w-full h-64 bg-cover rounded-lg" style={{ backgroundImage: 'url(' + image.file + ')' }}>
            </div>
        ) : (
            <></>
        )
    )

}
export default GalleryItem