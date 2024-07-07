import { mongoose } from "mongoose";


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
       
    },
    lname: {
        type: String,
       
    },
    dateOfBirth: {
        type: Date,
       
    },
    email: {
        type: String,
       
    },
    phone: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    account: {
        accountNumber: {
            type: Number,
            
        },
        openedOn: {
            type: Date,
            
        },
        balance: {
            type: Number,
            
        },
        card:{
            cardNumber: {
                type: Number,
              
            },
            cardIssued: {
                type: Date,
                
            },
            cardExpiry: {
                type: Date,
               
            },
        },
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

