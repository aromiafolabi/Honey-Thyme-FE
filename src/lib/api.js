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

export function deleteCocktail(cocktailId) {
  return axios.delete(`${baseUrl}/cocktails/${cocktailId}`, headers())
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
  return axios.put(`${baseUrl}/profile/${userId}`, formData, headers())
}

export function deleteProfile(userId) {
  return axios.delete(`${baseUrl}/profile/${userId}`, headers())
}


// * COMMENT REQUESTS

export function createCocktailComment(cocktailId, formData) {
  return axios.post(`${baseUrl}/cocktails/${cocktailId}/comments`, formData, headers())
}

export function deleteCocktailComment(cocktailId, commentId) {
  return axios.delete(`${baseUrl}/cocktails/${cocktailId}/comments/${commentId}`, headers())
}
