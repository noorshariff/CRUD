const user = require('../models/employee');
const ObjectId = require('mongoose').Types.ObjectId;





//getting the employee details by specific id//
exports.getById=((req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No records found by this id");
    user.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log(err)
        }
    })

})


//getting the employee details
exports.getDetails = (req,res)=>{
    user.find().then(data =>{
        console.log(data)
         res.json(data)
    }).catch(err=>{
        console.log(err)
    })
}


//Posting the employee details to the database
exports.postDetails=((req,res)=>{
    var emp = new user({
        name: req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    });
    emp.save().then(data => {
        console.log(data);
        return res.json(data);
    },err=>{
        console.log(err)
    })
    })

exports.updateDetails=(req,res)=>{
    let id=req.body.id;
    let name=req.body.name;
    let position=req.body.position; 
    let office =req.body.office;
    let salary = req.body.salary;
    user.findById(id).then(empD=>{
        // console.log(name)
        empD.name=name;
        empD.position=position;
        empD.office=office;
        empD.salary=salary;
        empD.save();
        res.json(empD);
       
    }).catch(err=>{
        console.log(err)
    })
}

 

exports.deleteDetails=((req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No records found by this id");

    user.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
             console.log(err)
        }
    })
})





