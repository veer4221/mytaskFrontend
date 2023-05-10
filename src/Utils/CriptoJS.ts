import CryptoJS from "crypto-js";

// export const encryptOBJ = (obj: any) => CryptoJS.AES.encrypt(JSON.stringify(obj), "SECURE").toString();

// export const decryptOBJ = (data: any) => JSON.parse(CryptoJS.AES.decrypt(data, "SECURE").toString(CryptoJS.enc.Utf8));

export async function encryptOBJ(str: any) {
  return new Promise(function (resolve, reject) {
    try {
      // Encrypt
      var ciphertext = CryptoJS.AES.encrypt(str, "SECURE").toString();
      return resolve(ciphertext);
    } catch (error) {
      return reject(error);
    }
  });
}

export async function decryptOBJ(str: any) {
  return new Promise(function (resolve, reject) {
    try {
      // Encrypt

      var bytes = CryptoJS.AES.decrypt(str, "SECURE");
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      console.log("decript", originalText);
      return resolve(JSON.parse(originalText));
    } catch (error) {
      return reject(error);
    }
  });
}
