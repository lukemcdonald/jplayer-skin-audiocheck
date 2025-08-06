/*global jQuery:false jPlayerPlaylist:false */
import playlist from './playlist.js'
import swfFile from '../media/jquery.jplayer.swf?url'

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
        swfPath: swfFile.replace(/\/[^\/]*$/, ''),
        supplied: 'oga, mp3',
        wmode: 'window',
        useStateClassSkin: true,
        autoBlur: false,
        keyEnabled: true,
        ready: () => demo.setupCurrentTrack(),
        play: () => demo.setupCurrentTrack(),
        ended: () => demo.setupCurrentTrack(),
      },
    )
  },

  /**
   * Update current track info when playlist changes.
   */
  setupCurrentTrack: () => {
    const current = jPlaylist.playlist[jPlaylist.current]

    const artist = document.querySelector('.track-artist')
    const poster = document.querySelector('.track-poster img')
    const record = document.querySelector('.track-record')
    const title = document.querySelector('.track-title')

    artist.textContent = current.artist
    poster.setAttribute('src', current.poster)
    record.textContent = current.record
    title.textContent = current.title
  },
})

demo.setupPlayer()
demo.setupCurrentTrack()
