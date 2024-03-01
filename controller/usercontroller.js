var usermodel = require('../model/usermodel')

exports.insert = async (req, res) => {   

    var data = await usermodel.create(req.body);

    res.status(200).json({
        data
    })
}
exports.get_data = async (req, res) => {   

    var data = await usermodel.find();

    res.status(200).json({
        data
    })
}
exports.Updatedate = async ( req,res ) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Update.....done",
        data
    })
 }
 exports.Deletedata = async ( req,res ) => {

    var id = req.params.id;

    var data = await usermodel.findByIdAndDelete(id,req.body);

    res.status(200).json({
        status:"Delete.....done",
        data 
    })
 }
 exports.Getsingledata= async ( req,res ) => {
    var id = req.params.id;
    var data = await usermodel.findById(id,req.body);
        res.status(200).json({
            status:"find...",
            data
        })
 }




