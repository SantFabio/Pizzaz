import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"; // Importe a referência para o seu objeto Firestore

// Função para atualizar a propriedade "address" de um usuário
export const updateAddress = async (userId, newAddress) => {
    try {
        // Construa a referência para o documento do usuário
        const userDocRef = doc(db, "usuarios", userId);

        // Atualize apenas a propriedade "address" do documento
        await updateDoc(userDocRef, {
            address: newAddress
        });

        console.log("Endereço do usuário atualizado com sucesso!");
        return true;
    } catch (error) {
        console.error("Erro ao atualizar o endereço do usuário:", error);
    }
};
export const getUserById = async (userId) => {
    try {
        // Construa a referência para o documento do usuário
        const docRef = doc(db, "usuarios", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
        return null;
    }
};