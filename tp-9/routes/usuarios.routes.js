const express =require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.json({mensaje:'Mostrando todos los usuarios'});
});

router.get('/',(req,res)=>{
    const id=req.params.id;
    res.json({mensaje:'Esta ruta GET de usuarios con el ID ${id}'});
});

router.post('/',(req,res)=>{
    const id=req.params.id;
     res.json({mensaje:'Usuario creado correctamente'});
});

router.put('/id',(req,res)=>{
    const id=req.params.id;
     res.json({mensaje:'Ruta DELETE de usuarios con el id ${id}'});
});

MediaSourceHandle.exports=router;