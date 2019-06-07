const { Department } = require('../models')
const D              = {}

D.GetDepartments = (req, res) => {
    res.send('Departments');
}

D.GetDepartment = (req, res) => {
    res.send('Department');
}

module.exports = D;