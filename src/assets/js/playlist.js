import posterAudiotheme from '../media/poster-audiotheme.jpg';
import posterStarkPalace from '../media/poster-stark-palace.jpg';

const playlist = [
  {
    title: 'Bubble',
    artist: 'Miaow',
    record: 'Record Name',
    free: true,
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Cro Magnon Man',
    artist: 'The Stark Palace',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
    poster: posterStarkPalace
  },
  {
    title: 'Tempered Song',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Your Face',
    artist: 'The Stark Palace',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg',
    poster: posterStarkPalace
  },
  {
    title: 'Hidden',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Lentement',
    artist: 'Miaow',
    record: 'Record Name',
    free: true,
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Cyber Sonnet',
    artist: 'The Stark Palace',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg',
    poster: posterStarkPalace
  },
  {
    title: 'Lismore',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'The Separation',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Beside Me',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Stirring of a Fool',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Partir',
    artist: 'Miaow',
    record: 'Record Name',
    free: true,
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Thin Ice',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg',
    poster: posterAudiotheme
  }
];

function getPlaylistStats () {
  return {
    totalTracks: playlist.length,
    freeTracks: playlist.filter(track => track.free).length,
    artists: [...new Set(playlist.map(track => track.artist))],
    records: [...new Set(playlist.map(track => track.record))]
  };
}

function getTracksByArtist (artist) {
  return playlist.filter(track => track.artist === artist);
}

function getFreeTracks () {
  return playlist.filter(track => track.free);
}

export default playlist;
export { getPlaylistStats, getTracksByArtist, getFreeTracks };
