export const host = "http://localhost:5000";
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const createRoomRoute = `${host}/api/room/createRoom`;
export const joinRoomRoute = `${host}/api/room/joinRoom`;
export const createDocumentRoute = `${host}/api/doc/createDocument`;
export const getDocumentsRoute = (roomID) => `${host}/api/doc/getDocuments/${roomID}`;
export const updateDocumentRoute = (docID) =>`${host}/api/doc/updateDocument/${docID}`;