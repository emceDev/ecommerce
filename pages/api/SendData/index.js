import Transaction from '../../../models/transaction';
import db from '../MongoDb/index'

const postBuyFormToDb = async (data) => {
    let buyerName = data.buyerName
    let sellerName = data.sellerName
    let cart = data.cart
    try {
        await db
        console.log('connecting to db')

        const transaction = new Transaction({
            buyerName,
            sellerName,
            cart
        })

            try {
                await transaction.save()
                return {code:200, message:'succes'}
            } catch (error) {
                return {code:error.code, message:error.message}
            }

    } catch (error) {
        console.log(error)
        return {code:error.code, message:error.message}
    }
};


export default async function SendData(req, res) {

     const format = /[`!@#$%^&*()+\=\[\]{};':"\\|.<>\/?~]/
     if(
        format.test(req.body.productName)===true 
     || format.test(req.body.sellerName)===true 
     || format.test(req.body.buyerName)===true)
     {
        return res.json({error:'invalid chars used'})
    }else if(req.body){
        var res1 = await postBuyFormToDb(req.body)
        return res.json({ error: res1.message})
  }}
  