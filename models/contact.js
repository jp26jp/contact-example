const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
                                              first_name: {type: String, required: true},
                                              last_name : {type: String, required: true},
                                              number    : {type: String, required: true}
                                          }, {timestamps: {}})

module.exports = mongoose.model("Contact", ContactSchema)
