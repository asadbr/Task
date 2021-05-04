import { apiService } from "./apiService";

export const employeesService = {
  /**
   * Method for getting a certain number of employess
   * @param perPage -
   * @param page -
   * @returns {Promise<AxiosResponse<any>>}
   */
  getEmployees: (perPage, page) => {
    return apiService.get("employees?_limit=" + perPage + "&_page=" + page);
  },

  /**
   * Method to Get all Employees
   * @param {Array} params - request params
   * @returns {Promise<AxiosResponse<any>>}
   **/
  getAllEmployees: () => {
    return apiService.get("employees");
  },
  /**
   * Method to get Employ data by Id
   * @param {Number} id - Employ Id
   * @param {Object} params - Employ Getted Data
   * @returns {Promise<AxiosResponse<any>>}
   */
  getEmploy: (id) => {
    return apiService.get("employees/" + id);
  },
  /**
   * Method to call api for update some employ data
   * @param {Number} id - employ id
   * @param {Object} params - employ updated data
   * @returns {Promise<AxiosResponse<any>>}
   */
  updateEmploy: (id, params) => {
    return apiService.put("employees/" + id, params);
  },
  /**
   * Method to call api for delete some employ by Id
   * @param {Number} id - employ Id
   * @returns {Promise<AxiosResponse<any>>}
   */
  deleteEmploy: (id) => {
    return apiService.delete("employees/" + id);
  },
};
