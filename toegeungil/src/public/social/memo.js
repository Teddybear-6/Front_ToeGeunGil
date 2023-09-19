/*
내보내기 방법
1. export {함수명}
2. export default 함수명; */

// import React, { useState } from 'react';
// import axios from 'axios';

// function SocialList() {
//     const [data, setData] = useState(null);
//     const socials = async () => {
//         try {
//             const response = await axios.get(
//                 'http://localhost:8001/socials',
//             );
//             setData(response.data);
//         } catch (e) {
//             console.log(e);
//         }
//     };
//     return (
//         <div>
//             <div>
//                 <button onClick={socials}>불러오기</button>
//             </div>

//             {data && (
//                 <textarea
//                     rows={7}
//                     value={JSON.stringify(data, null, 2)}
//                     readOnly={true}
//                 />
//             )}
//         </div>
//     );
// }



//map 알기
// const array = [1,2,3,4,6];

// for (let index = 0; index < array.length; index++) {

//     test(array[index], index)
// }

// const test = (r, i) => {
//     console.log("객체  : ", r) //객체 1
//     console.log("인덱스 : " , i) // 0
// }