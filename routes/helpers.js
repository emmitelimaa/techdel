module.exports = {
  addRepo: (repo, guid) =>
    `INSERT INTO repo(name, team_name,technology, company_id, score) VALUES ('${repo.name}','${repo.team_name}', '${repo.technology}','${guid}', null) `,
  getAllRepos: () => `SELECT * from repo`,
  getRepoById: (id) => `SELECT * from repo WHERE company_id = ${id}`,
  addCompany: (name) =>
    `INSERT INTO company(name, score) VALUES ('${name}', null)`,
  getCompanyByName: (name) => `SELECT * from company WHERE name = '${name}'`,
  getCompanyById: (id) => `SELECT * FROM company WHERE id = ${id}`,
};
