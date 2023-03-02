module.exports = {
  getAllCompanies: () => {
    `SELECT * FROM companies
    ORDER BY company_name ASC`
  },

  getAllRepos: () => `SELECT * from repos`,

  getAllCompaniesRepos: () => 
{  `SELECT 
    * 
  FROM companies c
  LEFT JOIN repos r ON c.company_id = r.company_id
  ORDER BY company_name ASC`},

  getRepoById: (id) => `SELECT * from repos WHERE company_id = ${id}`,

  // addCompany: (name) =>
  //   `INSERT INTO companies(company_name) VALUES ('${name}')`,

  getCompanyByName: (name) =>
    `SELECT * from companies WHERE LOWER(company_name) = '${name}'`,

  getCompanyById: (id) => `SELECT * FROM companies WHERE id = ${id}`,

  addCompany: (company) => {
    `INSERT INTO companies
    (company_name) 
    VALUES ('${company.company_name}') `;
  },
  addRepo: (repo, company_id) => {
    return `INSERT INTO repos
    (repo_name, team_name ,technology, company_id, repo_score) 
    VALUES ('${repo.repo_name}','${repo.team_name}', '${repo.technology}','${company_id}', null) `;
  },

};

