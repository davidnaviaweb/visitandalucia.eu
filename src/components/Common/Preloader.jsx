import './Preloader.css'

const Preloader = () => {
    return (
        <div className="flex items-center justify-center h-screen w-100">
            <div className="preloader-rolling"><div className="preloader">
                <div></div>
            </div></div>
        </div>
    )
}
export default Preloader;