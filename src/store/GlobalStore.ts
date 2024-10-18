import { defineStore } from 'pinia'
import type IMovie from '../interfaces/IMovie'
import type IGlobalState from '@/interfaces/IGlobalState'

export const useGlobalStore = defineStore('GlobalStore', {
  state: (): IGlobalState => ({
    loading: false,
    relatedFinds: null,
  }),
  actions: {
    isLoading() {
      this.loading = true
    },
    LoadingFinished() {
      this.loading = false
    },
    async addRelated(searchResults: IMovie[]) {
      this.relatedFinds = searchResults
    },

    async removeRelated(index: number) {
      if (this.relatedFinds !== null) {
        this.relatedFinds?.splice(index, 1)
      }
    },

    async filterRelated(imdbID: string) {
      const newArray =
        this.relatedFinds?.filter(movie => movie.imdbID !== imdbID) || []
      this.relatedFinds = newArray
    },

    async clearRelated() {
      this.relatedFinds = null
    },
  },
})
