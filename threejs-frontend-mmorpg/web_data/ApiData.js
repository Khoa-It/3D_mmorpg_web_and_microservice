import { UserManager } from "../manager_system/UserManager.js";



export class ApiData {
    static baseUrlUserService = 'https://localhost:7047';
    static baseUrlResourceService = 'http://localhost:8080';
    static baseUrlSocketService = 'http://localhost:3030';
    static userBaseUrl = `${this.baseUrlUserService}/api/User`;
    static frienshipBaseUrl = `${this.baseUrlUserService}/api/Friendship`;

    static url = {
        user: {
            getAccount: `${this.userBaseUrl}/account`,
            createUser: this.userBaseUrl,
        },
        friendship: {
            getall: (id) => `${this.frienshipBaseUrl}/${id}`,
            update: this.frienshipBaseUrl,
            myfriends: `${this.frienshipBaseUrl}/friends/${UserManager.getUserId()}`,
        },
        static_resource: {
            update: `${this.baseUrlResourceService}/static_resources`,
            get: `${this.baseUrlResourceService}/static_resources`,
        },
        socket_service: {
            payment: `${this.baseUrlSocketService}/payment`,
        },
    }
    static method = {
        post: "POST",
        put: "PUT",
        delete: "DELETE",
        get: "GET",
    }
    static apiConfig = (loginData, med) => {
        if (loginData == null) {
            return {
                method: med,
                headers: {
                    "Content-Type": "application/json"
                },
            } 
        }
        return {
            method: med,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        }
    }
    static async getAccount(email, password) {
        const loginData = {email, password}
        try {
            const response = await fetch(this.url.user.getAccount,this.apiConfig(loginData, this.method.post));
            console.log('get account successfull');
            return await response.json();
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async register(param){
        try {
            const response = await fetch(this.url.user.createUser, this.apiConfig(param, this.method.post));
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async updateStaticResource(param){
        try {
            const response = await fetch(this.url.static_resource.update, this.apiConfig(param,this.method.post));
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getStaticResource(){
        try {
            const response = await fetch(this.url.static_resource.get,this.apiConfig(null,this.method.get));
            return response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async payment(param){
        try {
            const response = await fetch(this.url.socket_service.payment,this.apiConfig(param,this.method.post));
            return response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getAllFriendShip(id){
        try {
            const response = await fetch(this.url.friendship.getall(id),this.apiConfig(null,this.method.get));
            return response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async updateFriendship(id){
        try {
            const param = {
                userId1 : UserManager.getUserId(),
                userId2 : id,
            }
            const response = await fetch(this.url.friendship.update,this.apiConfig(param,this.method.put));
            return response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getMyFriends() {
        try {
            const res = await fetch(this.url.friendship.myfriends, this.apiConfig(null,this.method.get));
            return res.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}