const asyncHandler = require("express-async-handler");

//  description : => Get all Contacts 
//  @route  Get api/contacts
// @access publick

const getContacts = asyncHandler( async (req, res) => {
    // res.send("get All contacts");
    // res.json({massage:"get All contacts"});
    res.status(200).json({ massage: "get All contacts" });
} )

//  @dec  Create New  Contacts 
//  @route  post api/contacts
// @access publick

const createContact = async (req, res) => {
    console.log("the req body is + " , req.body);
     const {name , email , phone} = req.body;

     if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !")
        
     }

    res.status(201).json({ massage: "create contacts" });
}

//  @dec  get New  Contacts 
//  @route  GET  api/contacts/:id
// @access publick

const getContact = async (req, res) => {
    res.status(200).json({ massage: `Update Contacts for ${req.params.id}` });
}

//  @dec  Update  Contacts 
//  @route  PUt  api/contacts/:id
// @access publick

const updateContact = async (req, res) => {
    res.status(200).json({ massage: `Update Contacts for ${req.params.id}` });
}

//  @dec  delete  Contacts 
//  @route  Delete   api/contacts/:id
// @access publick

const deleteContact = async (req, res) => {
    res.status(200).json({ massage: `Delete Contacts for ${req.params.id}` });
}

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact, 
    deleteContact
};