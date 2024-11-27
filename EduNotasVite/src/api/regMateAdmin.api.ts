import axios from 'axios'

const API_URL = axios.create ({
  baseURL: 'http://127.0.0.1:8000/administrador/regmat/mate/'
}) 

type Mate = {
  nombre: string
  descripcion: string
  habilitable: boolean
  nivel_educativo: string
};

export const getAllMate = () => {
  return axios.get('http://127.0.0.1:8000/administrador/regmat/mate/')
}

{/*
export const postMate = (mate) => {
  return API_URL.post('/', mate)
}
   */}
