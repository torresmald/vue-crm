import api from '../api/axios';

export default {
    obtenerClientes (){
        return api.get('/clientes')
    },
    agregarClientes (data){
        return api.post('/clientes', data)
    },
    obtenerCliente (id){
        return api.get(`/clientes/${id}`)
    },
    editarCliente (id, data){
        return api.patch(`/clientes/${id}`, data)
    },
    eliminarCliente (id){
        return api.delete(`/clientes/${id}`)
    }
}