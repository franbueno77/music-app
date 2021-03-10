const express = require ('express')
const router = express.Router()
const multer = require('multer')
const songs = require('../model/songs')
const mime = require ('mime-types')

const storage = multer.diskStorage({
    destination: "files/",
    filename: (req, file, cb)=> {
        cb('', file.originalname )
    }
})

const upload = multer({
    storage : storage

})

    // show list location view
router.get('/',  (req, res) => {
    /*res.render('listLocation',{
        arrayLoc: await locations.find()
    })*/
    res.send( songs.find())
})
    //show create form view
  
    //show one location view
    router.get('/:id', async (req, res) =>{
         try {
             res.render('songs', {location: await songs.findOne({_id: req.params.id})} )
             
         } catch (error) {
             console.error('No se han encontrado canciones ')
         }
    })
    // edit a location 
    router.get('/edit/:id', async (req, res) =>{
        try {
            res.render('editLocation', {location: await locations.findOne({_id: req.params.id})})
        } catch (error) {
            console.log(`error:  ${error} `)
        }
    })
    // delete a location
    router.get('/delete/:id', async (req, res) =>{
        try {
            await songs.deleteOne({_id: req.params.id})
            res.render('listLocation', {arrayLoc: await songs.find() })
        } catch (error) {
            console.log(`${error} no location to delete`)
        }
    })

    // receive params from CREATE form and save to database
    router.post('/create' , upload.single('file'), async(req, res) => {
        await res.send("todo bien")
    try {
        // other alternative ->   await new  locations(req.body).save()
       
       //res.redirect('../')
        await  res.send(await new  songs(req.body).save()) ;
       console.log(req)
    } catch (error) {
        await res.json({error:"the data could not be saved"})
        console.log(`error: ${error}`)
    }
})


router.put('/create' , upload.single('file'), async(req, res) => {
    try {
        // other alternative ->   await new  locations(req.body).save()
        
        //res.redirect('../')
        await res.send("todo bien")
    
} catch (error) {
    await res.json({error:"the data could not be saved"})
    console.log(`error: ${error}`)
}
})

router.put('/edit/:id' , async(req, res) => {

    try {
        console.log(req.params.id)
        
       await songs.findByIdAndUpdate(req.params.id, {
           country: req.body.country,
           city: req.body.city,
           coorx: req.body.coorx,
           coory: req.body.coory,
        },false)
       res.redirect('../')
    } catch (error) {
    
        console.log(`error: ${error}`)
    }
})
module.exports = router