const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const companyController = require('../controllers/companyController');

// POST new Company
router.post('/', catchErrors(companyController.postCompany));

// GET all Companies
router.get('/', catchErrors(companyController.getCompanies));

// GET one Company
router.get('/:id', catchErrors(companyController.getCompany));

// PATCH Company
router.patch('/:id', catchErrors(companyController.patchCompany));

// DELETE Company
router.delete('/:id', catchErrors(companyController.deleteCompany));

// GET Users by Company
router.get('/:id/users', catchErrors(companyController.getUsersByCompany));

module.exports = router;