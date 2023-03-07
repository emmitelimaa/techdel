export const API = {
  GET_ALL: "/companies",
  POST_ALL: "/companies",
  GET_COMPANY: (id) => {
    return `/companies/${id}`;
  },
};

export const URL = {
  COMPANY: (id) => {
    return `/companies/${id}`;
  },
  COMPANIES: `/companies`,
  HOME: `/`,
};
