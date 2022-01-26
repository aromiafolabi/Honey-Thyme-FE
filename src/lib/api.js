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

export function toggleSaves(cocktailId) {
  return axios.post(`${baseUrl}/cocktails/${cocktailId}`, cocktailId, headers())
}

// * LOGIN/REGISTER

export function registerUser(formData) {
  console.log(formData)
  return axios.post(`${baseUrl}/register/`, formData)
}

export function loginUser(formData) {
  console.log(formData)
  return axios.post(`${baseUrl}/login/`, formData)
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

export function getProfileInfo(userId) {
  return axios.get(`${baseUrl}/profile/${userId}`)
}

export function getSaves(userId) {
  return axios.get(`${baseUrl}/profile/${userId}/saves`, headers())
}
