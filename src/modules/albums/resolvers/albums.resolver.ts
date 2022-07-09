export const albumResolver = {
  Query: {
    albums: async (_, {limit, offset}, { dataSources }) => {
      return dataSources.albumService.getAllAlbums(limit, offset);
    },
    album: async (_, {id}, { dataSources }) => {
      return dataSources.albumService.getAlbumById(id);
    }
  },
  Mutation: {
    createAlbum: async (_, {name, released, artistsIds}, { dataSources }) => {    
      return dataSources.albumService.createAlbum({name, released, artistsIds});
    }
  },
  Album: {
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id: string) => dataSources.artistsService.getArtistById(id));
      return artists;
    },
  }
}