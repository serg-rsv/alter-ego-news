export const decrypt = (): string => {
  const encryptedMessage = 'N2JkYmZhOWI2YTcyNDA0YTg4ODM1YWY3YzA1YmQzODU=';
  // Decrypt the message from Base64 encoding
  const decryptedMessage = atob(encryptedMessage);

  // Convert the decrypted message to a string
  const decryptedString = new TextDecoder().decode(
    new Uint8Array([...decryptedMessage].map((char) => char.charCodeAt(0)))
  );

  return decryptedString;
};
