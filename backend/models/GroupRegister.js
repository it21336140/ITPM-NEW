const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroupRegisterSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    RegistrationNumber: { // Corrected field name
        type: String,
        required: true
    },
    ContactNumber: { // Corrected field name
        type: Number,
        required: true
    },
    EmailAddress: { // Corrected field name
        type: String,
        required: true
    },
    Batch: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    GroupName: { // Corrected field name
        type: String,
        required: true
    },
    ProjectLeader: { // Corrected field name
        type: String,
        required: true
    },
    ProjectTitle: { // Corrected field name
        type: String,
        required: true
    },
    ResearchArea: { // Corrected field name
        type: String,
        required: true
    },
    ResearchGroup: { // Corrected field name
        type: String,
        required: true
    },
    Supervisor: { // Corrected field name
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('GroupRegister', GroupRegisterSchema);
