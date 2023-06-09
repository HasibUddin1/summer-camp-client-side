import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});


const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    axiosSecure.interceptors.request.use((req) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;