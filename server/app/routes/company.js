module.exports = (router) => {
  var CompanyController = require('../controllers/companyController');
  router.get('/company', CompanyController.getAllCompany);
  router.get('/company/detail/:username', CompanyController.getCompany);
  router.delete('/company/delete/:username', CompanyController.deleteCompany);
  router.post('/company/create', CompanyController.createCompany);
  router.put('/company/update', CompanyController.updateCompany);
};
