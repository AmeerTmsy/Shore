import { useEffect, useRef } from "react";
import { Toast } from "../../../../utils/Alert";

export default function ProductMediaStep({
    images,
    setImages,
    setStep,
    heroIndex,
    setHeroIndex,
}) {
    const inputRef = useRef();
    const MAX_IMAGES = 10;

    const handleFiles = (files) => {
        const imageFiles = Array.from(files).filter(file =>
            file.type.startsWith("image/")
        );
        if (imageFiles.length !== files.length) {
            Toast.warning("Only image files are allowed");
        }
        const remainingSlots = MAX_IMAGES - images.length;
        if (remainingSlots <= 0) {
            Toast.warning("Limit reached (10 images)");
            return;
        }
        const filesToAdd = imageFiles.slice(0, remainingSlots);
        if (filesToAdd.length < imageFiles.length) {
            Toast.warning("Only 10 images allowed");
        }
        const newImages = filesToAdd.map(file => URL.createObjectURL(file));
        setImages(prev => {
            const updated = [...prev, ...newImages];
            if (heroIndex === null && updated.length > 0) setHeroIndex(0);
            return updated;
        });
    };

    useEffect(() => {
        console.log(heroIndex)
        console.log(images.length)
    }, [heroIndex])

    return (
        <div className="space-y-6">
            {/* Upload Box */}
            <div className="bg-white shadow-[1px_2px_5px_2px_rgba(0,0,0,0.1)] rounded-2xl p-6">
                <h2 className="text-lg font-medium mb-2">Product Media</h2>
                <p className="text-sm text-gray-500 mb-4 font-light">
                    Upload high-quality images
                </p>
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => {
                        if (images.length >= MAX_IMAGES) {
                            Toast.warning("Only 10 images allowed");
                            return
                        }
                        inputRef.current.click()
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const files = e.dataTransfer.files;
                        if (!files || files.length === 0) return;
                        handleFiles(files);
                    }}
                    className="border border-dashed border-gray-400 rounded-xl p-10 text-center cursor-pointer hover:bg-gray-50"
                >
                    <p className="mb-2">Drag and drop images</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                        Browse Files
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        ref={inputRef}
                        onChange={(e) => handleFiles(e.target.files)}
                    />
                </div>
            </div>
            {/* Gallery */}
            <div>
                <p className="mb-3 text-sm text-gray-500">
                    Uploaded Gallery ({images.length}/10)
                </p>
                <div className="grid gap-2 md:grid-cols-2 p-4 shadow-[1px_2px_5px_2px_rgba(0,0,0,0.1)] rounded-2xl">
                    <div className="">
                        <div className="relative">
                            {images.map((image, index) => {
                                if (index === heroIndex) {
                                    return (
                                        <img
                                            key={index}
                                            className="w-full h-auto object-cover rounded-lg"
                                            src={image}
                                            alt="hero image"
                                        />
                                    );
                                }
                                return null;
                            })}
                            <span className="absolute top-2 left-2 bg-[#ff7c01dd] border border-orange-500 text-white text-xs px-2 py-1 rounded">
                                {heroIndex < images.length
                                    ? "Thumbnail Image"
                                    : images.length ? "Click to set as thumbnail" : "The gallery is empty"}
                            </span>
                        </div>

                    </div>
                    <div className="">
                        <div className="grid grid-cols-2 gap-4 min-h-32">
                            {images.map((img, i) => (
                                <div key={i} className="relative group">

                                    <img
                                        src={img}
                                        alt=""
                                        className="rounded-xl w-full h-32 object-cover"
                                    />

                                    {/* HERO BADGE */}
                                    {heroIndex === i && (
                                        <span className="absolute top-2 left-2 bg-[#ff7c01dd] border border-orange-500 text-white text-xs px-2 py-1 rounded">
                                            MAIN HERO
                                        </span>
                                    )}

                                    {/* ACTION OVERLAY */}
                                    <div className="absolute rounded-xl inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setHeroIndex(i)}
                                            className="bg-white text-sm px-3 py-1 rounded cursor-pointer"
                                        >Set Hero</button>
                                        <button
                                            onClick={() => {
                                                setImages(prev => prev.filter((_, idx) => idx !== i));

                                                // Fix hero index if deleted
                                                // if (heroIndex === i) setHeroIndex(null);
                                            }}
                                            className="bg-red-500 text-white text-sm px-3 py-1 rounded cursor-pointer"
                                        >Remove</button>
                                    </div>

                                </div>
                            ))}
                            {/* Add More */}
                            {/* <div
                        onClick={() => inputRef.current.click()}
                        className="border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer"
                    >+ Add More</div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Actions */}
            <div className="flex justify-between">
                <button
                    onClick={() => setStep(1)}
                    className=" px-5 py-2 rounded-lg flex gap-2 items-center"
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M42.5 7.857L26.357 24L42.5 40.143M21.643 7.857L5.5 24l16.143 16.143" strokeWidth="3" /></svg> Previous</button>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setStep(3)}
                        className="border text-orange-500 px-5 py-2 rounded-lg"
                    >Save draft</button>
                    <button
                        onClick={() => setStep(3)}
                        className="bg-orange-500 text-white px-5 py-2 rounded-lg"
                    >Continue</button>
                </div>
            </div>
        </div>
    );
}