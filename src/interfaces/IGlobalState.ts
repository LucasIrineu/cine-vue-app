import type IMovie from './IMovie'

export default interface IGlobalState {
  loading: boolean
  relatedFinds: IMovie[] | null
}
