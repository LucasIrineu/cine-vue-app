import axios from 'axios'
import env from '@/env.js'

export default async function getMovies(input: string) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${env.apiKey}&s=${input}`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPlot(id: string) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${env.apiKey}&i=${id}&plot=full`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
