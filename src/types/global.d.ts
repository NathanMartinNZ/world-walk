export {}

declare global {
  type TVideo = {
    id: number
    videoId: string
    videoName: string
    channel: string
    coords: {
      lat: number
      lng: number
    }
    country: string
  }
  
  type TVideoStore = {
    selectedVideo: TVideo | null
    videosAll: TVideo[]
    videosFiltered: TVideo[]
    filterValues: any
    setInitialVideoState: () => void
    setSelectedVideoById: (id:number|null) => void
    setInitialFilterValues: () => void
    setFilteredVideos: (name:string, value:any) => void
  }
}