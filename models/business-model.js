const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Business = new Schema(
    {
        certification_type: { type: String, required: true },
        firm_name: { type: String, required: true },
        owners: { type: String, required: true },
        work_description: { type: String, required: true },
        physical_address: { type: String, required: true },
        mailing_address: { type: String, required: true },
        phone_number: { type: String, required: true },
        fax_number: { type: String, required: true },
        email_address: { type: String, required: true },
        categories: { type: [String], required: true },
        website: { type: String, required: true },  
    },
    { timestamps: true },
)

var Member = mongoose.model('businesses', Business, 'list');

module.exports = Member;