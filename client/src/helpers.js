export const formatDate = (inputDate) => {
  const formatD = new Date(inputDate);
  let date, month, year;

  date = formatD.getDate();
  month = formatD.getMonth() + 1;
  year = formatD.getFullYear();
  return `${date}/${month}/${year}`;
};
