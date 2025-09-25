const express =require('express');
const router= express.Router();

router.get('/',(req,res)=>{
res.json({mensaje:'Mostrando todos los productos'});
});

router.put('id',(req,res)=>{
res.json({mensaje:'Ruta PUT de productos con el id $[id'});
});

router.delate('id',(req,res)=>{
    const id=req.params.id;
res.json({mensaje:'Ruta PUT de productos con el id $[id'});
});

module.exports = router;