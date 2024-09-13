const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//  description : => Get all Contacts 
//  @route  Get api/contacts
// @access publick

const getContacts = asyncHandler(async (req, res) => {
    // res.send("get All contacts");
    // res.json({massage:"get All contacts"});
    const contactData = await Contact.find();
    res.status(200).json(contactData);
})

//  @dec  Create New  Contacts 
//  @route  post api/contacts
// @access publick

const createContact = async (req, res) => {
    console.log("the req body is + ", req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }

    const contactData = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contactData);
}

//  @dec  get New  Contacts 
//  @route  GET  api/contacts/:id
// @access publick

const getContact = async (req, res) => {

    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    // res.status(200).json({ massage: `Update Contacts for ${req.params.id}`});
    res.status(200).json(contact);
}

//  @dec  Update  Contacts 
//  @route  PUt  api/contacts/:id
// @access publick

const updateContact = async (req, res) => {

    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedContact);
    // res.status(200).json({ massage: `Update Contacts for ${req.params.id}` });
}

//  @dec  delete  Contacts 
//  @route  Delete   api/contacts/:id
// @access publick

const deleteContact = async (req, res) => {

    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    // await Contact.remove();
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Contact deleted successfully for ID: ${req.params.id}` });
    // res.status(200).json({ massage: `Delete Contacts for ${req.params.id}` });
}

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};