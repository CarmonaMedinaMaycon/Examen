import axios from 'axios';



const getCar = async (page, size, sort) => {
   const params = {
      page,
      size, sort
   };
   try {
      const response = await axios.post("http://localhost:8080/api/vehiculos/page", null, { params });

      return response.data;
   } catch (error) {
      throw error;
   }
};
const postCar = async (year, brand, model, serie) => {
    const params = {
        year, brand, model, serie
    };
    try {
       const response = await axios.post("http://localhost:8080/api/vehiculos/", null, { params });
 
       return response.data;
    } catch (error) {
       throw error;
    }
 };

export default {
   getCar,
   postCar
};