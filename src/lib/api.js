import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * GET COCKTAILS

export function getAllCocktails() {
  return axios.get(`${baseUrl}/cocktails`)
}

export function getSingleCocktail(cocktailId) {
  return axios.get(`${baseUrl}/cocktails/${cocktailId}`)
}

// * LOGIN/REGISTER

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}


//* USER REQUESTS

export function editProfile(userId, formData) {
  return axios.put(`${baseUrl}/account/${userId}`, formData, headers())
}

export function deleteProfile(userId) {
  return axios.delete(`${baseUrl}/account/${userId}`, headers())
}