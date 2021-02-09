import http from "./BaseAxios";
const routeName = "/movies";

const getAll = async () => {
  return await http.get(routeName);
};

const getById = async (id) => {
  return await http.get(`${routeName}/${id}`);
};

const create = async (data) => {
  return await http.post(routeName, data);
};

const update = async (id, data) => {
  return await http.put(`${routeName}/${id}`, data);
};

const remove = async (id) => {
  return await http.delete(`${routeName}/${id}`);
};

const MovieService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default MovieService;
