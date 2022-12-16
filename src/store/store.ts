import create from 'zustand'


const useVideoStore = create<TVideoStore>((set, get) => ({
  selectedVideo: null,
  videosAll: [
    {
      id: 0,
      videoId: "y7zhnCmGvi8",
      videoName: "Walk Tour Auckland City New Zealand!",
      channel: "Virtual New Zealand",
      coords: {
        lat: -36.8493811,
        lng: 174.7690822
      },
      country: "New Zealand"
    },
    {
      id: 1,
      videoId: "DLru1iQlCJo",
      videoName: "Walk Tour Queenstown New Zealand!",
      channel: "Virtual New Zealand",
      coords: {
        lat: -45.0327606,
        lng: 168.6631659
      },
      country: "New Zealand"
    },
    {
      id: 2,
      videoId: "mppv-6zlyXA",
      videoName: "Walking from Circular Quay to QVB through George Street | Sydney Walking Tour 🇦🇺",
      channel: "Keep Walking",
      coords: {
        lat: -33.8577526,
        lng: 151.2096203
      },
      country: "Australia"
    }
  ],

  videosFiltered: [],

  filterValues: {},

  setInitialVideoState: () => {
    //Get video data from DB and set videosAll & videosFiltered

    //FOR DEV, set videosFiltered as same as videosAll
    set((state) => { return { videosFiltered: [...state.videosAll] } })
  },

  setSelectedVideoById: (id) => {
    // Unset selectedVideo if no ID
    if(!id) { set(() => { return { selectedVideo: null } }) }
    // Otherwise set it to the video
    const video = [...get().videosAll].find(v => v.id === id)
    set(() => { return { selectedVideo: video } })
  },

  setInitialFilterValues: () => {
    let filterValues:any = {}
    const videosAllCopy = [...get().videosAll]
    const countries = Array.from(new Set(videosAllCopy.map(({ country }) => country)))

    filterValues.countries = countries

    set(() => { return { filterValues: filterValues } })
  },

  setFilteredVideos: (name:string, value:any) => {
    const videosAllCopy = [...get().videosAll]
    const newFilteredValues = videosAllCopy.filter((v:any) => value !== "All" ? v[name] === value : v[name])

    set(() => { return { videosFiltered: newFilteredValues } })
  }
}))

export { useVideoStore }