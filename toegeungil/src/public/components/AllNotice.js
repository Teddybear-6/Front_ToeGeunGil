// import { useEffect, useState } from "react";
// import NoticeMain from "../pages/NoticeMain";

// function AllNotice() {
//     const [notice, setNotice] = useState([]);

//     useEffect(
//         () => {
//             fetch("http://localhost:8001/notices")
//                 .then(response => response.json())
//                 .then((data) => console.log(data))
//                 .then(data => setNotice(data))
//                 .catch((error) => console.log("error:", error))
//         }, [])

//     return (
//         <>
//             <div className="">
//                 <NoticeMain notices={notice}></NoticeMain>
//             </div>
//         </>
//     );
// }
// export default AllNotice;