import mongoose from mongoose;

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const schema = new mongoose.Schema({
    service:{
        type: [serviceSchema],
        required:[true,"Please provide a service"]
    },
    status:{
        type:String,
        default:"unpaid",
        required:[true,"Please provide a status"],
    },
    amount:{
        type:Number,
        required:[true,"Please provide a amount"],
    },
    customerId:{
        type: mongoose.Types.ObjectId,
        required:[true,"Please provide a customerId"]
    },
    refNumber: {
        type: String,
        required:[true,"Please provide a refNumber"]
      },
    date:{
        type:Date,
        required:[true,"Please provide a date"]
    },
},{timestamps:true});

export const Invoices = mongoose.model("Invoices", schema);