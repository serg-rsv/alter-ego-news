export const encrypt = (message: string): string => {
  // Convert the message to a Uint8Array
  const messageData = new TextEncoder().encode(message);

  // Encrypt the message using Base64 encoding
  return btoa(String.fromCharCode(...new Uint8Array(messageData)));
};
