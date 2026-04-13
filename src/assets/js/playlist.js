import posterAudiotheme from "../media/poster-audiotheme.jpg";

const playlist = [
  {
    artist: "Miaow",
    free: true,
    mp3: "https://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
    oga: "https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
    poster: posterAudiotheme,
    record: "Record Name",
    title: "Bubble",
  },
  {
    artist: "Miaow",
    mp3: "https://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
    oga: "https://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
    poster: posterAudiotheme,
    record: "Record Name",
    title: "Tempered Song",
  },
  {
    artist: "Miaow",
    mp3: "https://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
    oga: "https://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg",
    poster: posterAudiotheme,
    record: "Record Name",
    title: "Lismore",
  },
  {
    artist: "Miaow",
    mp3: "https://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
    oga: "https://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg",
    poster: posterAudiotheme,
    record: "Record Name",
    title: "Stirring of a Fool",
  },
];

const getPlaylistStats = () => ({
  artists: [...new Set(playlist.map((track) => track.artist))],
  freeTracks: playlist.filter((track) => track.free).length,
  records: [...new Set(playlist.map((track) => track.record))],
  totalTracks: playlist.length,
});
const getTracksByArtist = (artist) => playlist.filter((track) => track.artist === artist);
const getFreeTracks = () => playlist.filter((track) => track.free);

export default playlist;
export { getPlaylistStats, getTracksByArtist, getFreeTracks };
