import config from "../config/config";

import { Client, Databases } from "appwrite";

class DBQueries {
    client = new Client
    databases
    constructor() {
        this.client().setEndpoint(config.appwriteApiEndpoint).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
    }
    async getPost(queries = []) {
        try {
            const response = await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries)
            return response
        } catch (error) {
            throw error
        }
        return null
    }
    async createPost({ title, slug, description, status, featuredImage, userId }) {
        try {
            const response = await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                description,
                featuredImage,
                status,
                userId
            })
            return response
        } catch (error) {
            throw error
        }
        return null
    }
    async updatePost({ title, slug, description, status, featuredImage, userId }) {
        try {
            const response = await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                description,
                featuredImage,
                status,
            })
            return response
        } catch (error) {
            throw error
        }
        return null
    }
    async deletePost(slug) {
        try {
            const response = await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return response
        } catch (error) {
            throw error
        }
        return null
    }
}

const dbQueries = new DBQueries()
export default dbQueries