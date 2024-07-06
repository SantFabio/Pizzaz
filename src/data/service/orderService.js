import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Supondo que você já tenha configurado a conexão com o Firestore

export const sendOrderToDataBase = async (pedido) => {
    try {
        // Adiciona um novo documento com um ID automático à coleção "pedidos"
        const docRef = await addDoc(collection(db, 'pedidos'), pedido);

        // Retorna o ID do documento adicionado
        return docRef.id;
    } catch (erro) {
        console.error('Erro ao enviar pedido para o Firestore:', erro);
        return null; // Retorna null em caso de erro
    }
};

// Supondo que `pedido` contém os dados do pedido a serem enviados
// enviarPedidoParaFirestore(pedido)
//   .then((pedidoId) => {
//     if (pedidoId) {
//       console.log('Pedido enviado para o Firestore com sucesso! ID do pedido:', pedidoId);
//     } else {
//       console.log('Erro ao enviar pedido para o Firestore.');
//     }
//   });
