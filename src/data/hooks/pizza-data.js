// import { collection, onSnapshot } from "firebase/firestore";
// import db from "../service/firebase"
// import { useState } from "react";

// function useIndex() {
//     const [pizza, setPizza] = useState([]);
//     onSnapshot(collection(db,"pizzas"), (snapshot) =>{
//         snapshot.docs.map( doc =>{
//             let pizzas = doc.data();
//             setPizza(pizzas);
//         })
//     });
//     return [pizza, setPizza];
// }
// export default useIndex;

// const pizzas = [
//     {
//         id: (Math.random() * 100),
//         nome: "Margherita",
//         ingredientes: ["molho de tomate", "queijo mozzarella", "manjericão", "azeite"],
//         preco: 19.99,
//         tamanho: "grande",
//         vegetariana: true,
//         disponivel: true,
//         imagemUrl: "https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167-900x600.jpg",
//         descricao: "Uma clássica pizza Margherita com molho de tomate fresco, queijo mozzarella, manjericão e um toque de azeite."
//     },
// ]