
import { useState ,useEffect} from "react";

const Images = () => {
    const [showImages, setShowImages] = useState([]);
  
    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];
  
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }
  
      setShowImages(imageUrlLists);
    };
  
    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
    };
  
    return (
      <div >
        <label htmlFor="input-file"  onChange={handleAddImages}>
          <input type="file" id="input-file" multiple  />
          {/* <Plus fill="#646F7C" /> */}
          <span>사진추가</span>
        </label>
  
        // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력
        {showImages.map((image, id) => (
          <div  key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button onClick={() => handleDeleteImage(id)} />
          </div>
        ))}
      </div>
    );
  };

  export default Images;