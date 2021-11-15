import axios from "axios"
import Config from "../util/Config"
import AsyncStorage from '@react-native-async-storage/async-storage';

class ServicoService{
/*
    async cadastrar(data){
        let token = await AsyncStorage.getItem("TOKEN")
        console.log(token)
        console.log(Config.API_URL + "servico/cadastrar")
        return axios({
            url: Config.API_URL + "servico/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) =>{
            return Promise.reject(error)
        })      
    } */

    async cadastrar(data){
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "servico/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            //AsyncStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) =>{
            return Promise.reject(error)
        })      
    }
  
    async listar(data){
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "servico/listar",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            
            return Promise.resolve(response)
        }).catch((error) =>{
            return Promise.reject(error)
        })      
    }

    async listartodos(busca){
        let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "servico/listartodos?busca=" + busca,
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
                Accept: "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            
            return Promise.resolve(response)
        }).catch((error) =>{
            return Promise.reject(error)
        })      
    }
}

const servicoService = new ServicoService()
export default servicoService