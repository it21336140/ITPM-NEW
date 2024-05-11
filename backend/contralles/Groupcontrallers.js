const Group = require('../models/GroupRegister');

const createGroup = async (req, res) => {
    const { Name, RegistrationNumber, ContactNumber, EmailAddress, Batch, Specialization, GroupName, ProjectLeader, ProjectTitle, ResearchArea, ResearchGroup, Supervisor } = req.body;

    try {
        // Check if all required fields are present in the request body
        if (!Name || !RegistrationNumber || !ContactNumber || !EmailAddress || !Batch || !Specialization || !GroupName || !ProjectLeader || !ProjectTitle || !ResearchArea || !ResearchGroup || !Supervisor) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create new group document
        const group = await Group.create({
            Name, RegistrationNumber, ContactNumber, EmailAddress, Batch, Specialization, GroupName, ProjectLeader, ProjectTitle, ResearchArea, ResearchGroup, Supervisor
        });

        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createGroup
};

