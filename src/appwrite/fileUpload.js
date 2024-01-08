import { Client, Storage, ID } from "appwrite";
import config from "../config/config";

class FileUpload {
    client = new Client
    storage
    constructor() {
        this.client().setEndpoint(config.appwriteApiEndpoint).setProject(config.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(fileId) {
        try {
            const response = await this.storage.createFile(config.appwriteBucketId, ID.unique(), fileId)
            return response
        } catch (error) {
            throw error
        }
        return false
    }
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(config.appwriteBucketId, fileId)
            return true
        } catch (error) {
            throw error
        }
        return false
    }
    filePreview(fileId) {
        try {
            const response = this.storage.getFilePreview(config.appwriteBucketId, fileId)
            return response
        } catch (error) {
            throw error
        }
        return false
    }
}


const fileUpload = new FileUpload()
export default fileUpload