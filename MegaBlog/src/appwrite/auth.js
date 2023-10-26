import conf from "../conf/conf"
import {Client,Account,ID} from "appwrite"

// const client=new Client()
// .setEndpoint("https://cloud.appwrite.io/v1") //Your Api Endpiont 
// .setProject("65395c5dcdf3c08cd642") //Your Project Id

// const account =new Account(client)

// const user= await account.create(
//     ID.unique(),
//     "email@gmail.com",
//     "password"
// );



export class AuthService{
    client=new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)

        } catch (error) {
            throw error
        }
    }
}


const authService=new AuthService();
export default authService;
