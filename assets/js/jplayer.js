/*global jQuery:false jPlayerPlaylist:false */
import playlist from './playlist.js'

const demo = window.demo || {}
let jPlaylist

jQuery.extend(demo, {
  /**
   * Initialize the jPlayer and playlist.
   */
  setupPlayer: () => {
    jPlaylist = new jPlayerPlaylist(
      {
        jPlayer: '#jplayer-1',
        cssSelectorAncestor: '#jplayer-container-1',
      },
      playlist,
      {
        swfPath: 'assets/media',
        supplied: 'oga, mp3',
        wmode: 'window',
        useStateClassSkin: true,
        autoBlur: false,
        keyEnabled: true,
        ready: () => demo.setupCurrentTrack(),
        play: () => demo.setupCurrentTrack(),
        ended: () => demo.setupCurrentTrack(),
      }
    )
  },

  /**
   * Update current track info when playlist changes.
   */
  setupCurrentTrack: () => {
    const current = jPlaylist.playlist[jPlaylist.current]
    const poster = document.querySelector('.track-poster img')
    const title = document.querySelector('.track-title')
    const artist = document.querySelector('.track-artist')
    const record = document.querySelector('.track-record')

    poster.setAttribute('src', current.poster)
    title.textContent = current.title
    artist.textContent = current.artist
    record.textContent = current.record
  },
})

demo.setupPlayer()
demo.setupCurrentTrack()
