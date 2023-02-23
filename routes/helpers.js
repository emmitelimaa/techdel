module.exports = {
  addRepo: (repo, guid) =>
    `INSERT INTO repo(repo_name, team_name,technology, company_id, repo_score) VALUES ('${repo.name}','${repo.team_name}', '${repo.technology}','${guid}', null) `,
  getAllRepos: () => `SELECT * from repo`,
  getRepoById: (id) => `SELECT * from repo WHERE company_id = ${id}`,
  addCompany: (name) =>
    `INSERT INTO company(company_name, company_score) VALUES ('${name}', null)`,
  getCompanyByName: (name) =>
    `SELECT * from company WHERE company_name = '${name}'`,
  getCompanyById: (id) => `SELECT * FROM company WHERE id = ${id}`,
};
