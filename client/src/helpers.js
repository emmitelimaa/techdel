export const formatDate = (inputDate) => {
  const formatD = new Date(inputDate);
  let date, month, year;

  date = formatD.getDate();
  month = formatD.getMonth() + 1;
  year = formatD.getFullYear();
  return `${date}/${month}/${year}`;
};

export const transformData = (data) => {
  const { company_name, repo_name, team_name, technology } = data;
  const formatInput = {
    company_name,
    repo: [
      {
        repo_name,
        team_name,
        technology,
      },
    ],
  };
  return formatInput;
};
