const app = {
  init: () => {
    document.body.classList.add(
      'ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch'
    )
  },

  setupPlaylistDisplay: () => {
    const player = document.querySelector('.audio-player')
    const toggles = document.querySelectorAll('.playlist-toggles button')
    const jpAudio = document.querySelector('.jp-audio')

    function toggleOpen(event) {
      const current = Array.from(toggles).find((toggle) => toggle.classList.contains('selected'))
      const selected = event.target

      // Set audio player scroll back to top to ensure playlist is visible.
      jpAudio.scrollTop = 0

      // Update selected item classes.
      current.classList.remove('selected')
      selected.classList.add('selected')

      // Update playlist display class.
      player.classList.remove(`playlist-${current.getAttribute('data-display')}`)
      player.classList.add(`playlist-${selected.getAttribute('data-display')}`)
    }

    Array.from(toggles).forEach((toggle) => toggle.addEventListener('click', toggleOpen, false))
  },
}

app.init()
app.setupPlaylistDisplay()
