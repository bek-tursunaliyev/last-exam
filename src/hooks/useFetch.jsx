import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://imageyukla.duckdns.org/api/images";

export function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setData(res.data);
      setError(null);
    } catch (err) {
      console.error("GET xatolik:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (formData) => {
    try {
      const res = await axios.post(`${BASE_URL}/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("POST xatolik:", err);
      throw err;
    }
  };

  // DELETE
  const deleteData = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("DELETE xatolik:", err);
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
    createData,
    deleteData,
  };
}
