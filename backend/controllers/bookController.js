const Book = require("../models/Book");
const addBookValidation = require("../validations/addBook");


const addNewBook = async (req, res) => {


    try {

        const book = req.body;
        const {error} = addBookValidation.validate(book);  // parametre validasyon

        if(error){
            return res.json({
                res : false, 
                status : 400,
                message : error.details[0].message
            });
        }

        const {id} = req.body;

        const findBook = await Book.findOne({ id: id });  // Eğer zaten kayıtlıysa

        if(findBook){

            return res.json({
                res :false,
                status: 500,
                message : "Zaten Kayıtlı"
            });
        }

        const newBook = new Book(book);

        await newBook.save();

        return res.json({
            res :true,
            status : 202,
            data : newBook
        })

    } catch (error) {

        return res.json({

            res :false,
            status: 500 ,
            message: error.message
        })   
    }
    

    
}

const getAllBooks = async (req,res)=>{

    try {
        

        const books = await Book.find({});  // Tüm kayıtları bul

        return res.json({
            res :true,
            status :200,
            data : books
        })
        
    } catch (error) {

        return res.json({
            res : false,
            status : 500,
            message : error.message
        })
    }
}

const getBookById = async (req, res) => {
    try {

        const {id} = req.body;

        const book = await Book.findOne({ id: id });  // ide değerine göre bul

        if(!book){

            return res.json({
                res :false,
                status: 500,
                message : "Kayıt Bulunamadı"
            });
        }

        return res.json({
            res:true,
            status : 200,
            data : book
        });


        
    } catch (error) {

        return res.json({
            res :false, 
            status : 500,
            message : error.message
        })
    }
}

const deleteBookById = async (req, res) => {

    try {
        
        const {id} = req.body;

        const book = await  Book.findByIdAndDelete(id);  // id değerine göre bul ve sil

        if(!book){
            return res.json({
                res:false,
                status : 404,
                message : "Kayıt Bulunamadı"
            })
        }

        return res.json({
            res : true,
            status : 202,
            data : book
        })


    } catch (error) {
        return res.json({
            res: false,
            status : 500,
            message: error.message
        })
    }
}




module.exports = {addNewBook ,getAllBooks , getBookById, deleteBookById }