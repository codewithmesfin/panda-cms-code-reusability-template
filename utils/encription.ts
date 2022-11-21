
import CryptoJS from "crypto-js";
let key = "dsgdfg3465hfdfjgdsjfgdafbbfgdsf9584968gdsjybhrththt465"
const encryption = {
    encrypt(data:any) {
        // Encrypt
        const ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            `${key}`
        );
        return ciphertext
    },
    decrypt(data:any) {
        //Decrypt
        try {
            let bytes = CryptoJS.AES.decrypt(data, `${key}`);
            let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decryptedData)
        } catch (error) {
            console.log(error)
        }
    }
}

export default encryption