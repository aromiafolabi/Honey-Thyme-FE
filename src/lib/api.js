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

export function addSaves(cocktailId, cocktailData) {
  return axios.post(`${baseUrl}/cocktails/${cocktailId}/saved/`, cocktailData, headers())
}

export function removeSaves(cocktailId, savedId, cocktailData) {
  return axios.delete(`${baseUrl}/cocktails/${cocktailId}/saved/${savedId}`, headers(), cocktailData)
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


export function editProfile(profileId, formData) {
  return axios.put(`${baseUrl}/profile/${profileId}/`, formData, headers())
}

export function deleteProfile(profileId) {
  return axios.delete(`${baseUrl}/profile/${profileId}/`, headers()) 
}


// * COMMENT REQUESTS

export function createCocktailComment(cocktailId, cocktailData) {
  return axios.post(`${baseUrl}/cocktails/${cocktailId}/comments/`, cocktailData, headers())
}

export function deleteCocktailComment(cocktailId, commentId) {
  return axios.delete(`${baseUrl}/cocktails/${cocktailId}/comments/${commentId}`, headers())
}

export function getProfileInfo(profileId) {
  return axios.get(`${baseUrl}/profile/${profileId}/`, headers())
}
