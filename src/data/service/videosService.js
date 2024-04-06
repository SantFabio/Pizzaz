// // videosService.js
// import { collection, onSnapshot } from "firebase/firestore";
// import db from "./firebase";

// const VIDEOS = "videos";

// const getVideos = (setVideos) => {
//   const unsubscribe = onSnapshot(collection(db, VIDEOS), (snapshot) => {

//       const videosArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//       setVideos(videosArray);
//   });

//   return unsubscribe;
// };

// export default getVideos;
