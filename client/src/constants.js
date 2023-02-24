export const API = {
  GET_ALL: "/api/companies",
  POST_ALL: "/api/companies",
  GET_COMPANY: (id) => {
    return `/api/companies/${id}`;
  },
};

export const URL = {
  COMPANY: (id) => {
    return `/companies/${id}`;
  },
  COMPANIES: `/companies`,
  HOME: `/`,
};
