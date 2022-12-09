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
  }
  
  type TVideoStore = {
    videoIdToShow: number | undefined
    videos: TVideo[]
  }
}