import axios from 'axios'

const api_axios = axios.create ({
  baseURL: 'http://127.0.0.1:8000/administrador/regmat/mate/'
}) 

export const getAllMate = () => {
  return api_axios.get('/')
}

interface Mate {
  nombre: string
  descripcion: string
  habilitable: boolean
  nivel_educativo: string
  creador: number
}

export const createMate = (mate: Mate) => {
  return api_axios.post('/', mate) 
}