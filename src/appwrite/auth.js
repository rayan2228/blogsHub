import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class AuthService {
    client = new Client()
    account

    constructor() {
        this.client().setEndpoint(config.appwriteApiEndpoint).setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ name, email, password }) {
        try {
            const response = await this.account.create(ID.unique(), email, password, name)
            return response
        } catch (error) {
            throw error
        }
        return null
    }

    async login({ email, password }) {
        try {
            const response = await this.account.createEmailSession(email, password)
            return response
        } catch (error) {
            throw response
        }
        return null
    }
    async getCurrentUser() {
        try {
            const response = await this.account.get()
            return response
        } catch (error) {
            throw response
        }
        return null
    }
    async logout() {
        try {
            const response = await this.account.deleteSessions()
            return response
        } catch (error) {
            throw response
        }
        return null
    }


}

const authService = new AuthService()

export default authService