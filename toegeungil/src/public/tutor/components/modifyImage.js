import { useState, useEffect } from "react";

function Imageset({ image, setShowImages, showImages, setHobbyImage, hobbyImage }) {
    const [url, setUrl] = useState(image);

    useEffect(() => {
        setUrl(image)
        
    }, [image])

    const handleAddImages = (event) => {

        if (event.target.files.length > 4 || hobbyImage.length > 3 || url.length > 3) {
            alert("이미지는 4장까지 업로드 가능합니다.");
        } else {

            const imageLists = event.target.files;
            let imageUrlLists = [...showImages];

            for (let i = 0; i < imageLists.length; i++) {
                const currentImageUrl = URL.createObjectURL(imageLists[i]);
                imageUrlLists.push(currentImageUrl);

            }


            setHobbyImage([...hobbyImage, imageLists])
            setShowImages(imageUrlLists);
          
        }
    };




    const handleDeleteImage1 = (id) => {
        setShowImages(url.filter((_, index) => index !== id));
        setUrl(url.filter((_, index) => index !== id));
    };

    const handleDeleteImage2 = (id) => {
        setShowImages(url.filter((_, index) => index !== id));
        
    };



    return (
        <>
            <label htmlFor="input-file" onChange={handleAddImages}>
                <input type="file" id="input-file" multiple />
            </label>
            <div className="imageframe">
                {url?.map((image, id) => (
                    <div key={id}>
                        <img className="image" src={`http://106.250.199.126:9000/image/${image.path}`} alt={`${url}-${id}`} />
                        <button onClick={() => handleDeleteImage1(id)}>X</button>
                    </div>

                ))}

                {showImages.map((image, id) => (
                    <div key={id}>
                        <img className="image" src={image} alt={`${image}-${id}`} />
                        <button onClick={() => handleDeleteImage2(id)}>X</button>
                    </div>

                ))}

            </div>

        </>

    )
}

export default Imageset;