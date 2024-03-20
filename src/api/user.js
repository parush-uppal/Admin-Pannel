import client from "./client";

export const catchError = (error) =>{
    const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
  }

export const getUser = async () => {
    try {
      const { data } = await client("/product/all");
      return data;
    } catch (error) {
      return catchError(error);
    }
  };