import create from 'zustand'


const useVideoStore = create<TVideoStore>((set) => ({
  videoIdToShow: undefined,
  videos: [
    {
      id: 0,
      videoId: "y7zhnCmGvi8",
      videoName: "Walk Tour Auckland City New Zealand!",
      channel: "Virtual New Zealand",
      coords: {
        lat: -36.8493811,
        lng: 174.7690822
      }
    },
    {
      id: 1,
      videoId: "DLru1iQlCJo",
      videoName: "Walk Tour Queenstown New Zealand!",
      channel: "Virtual New Zealand",
      coords: {
        lat: -45.0327606,
        lng: 168.6631659
      }
    }
  ]
}))

export { useVideoStore }