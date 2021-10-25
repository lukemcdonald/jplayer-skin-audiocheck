const app = {
  init: () => {
    document.body.classList.add('ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch')
  },

  setupPlaylistDisplay: () => {
    const player = document.querySelector('.audio-player')
    const toggles = document.querySelectorAll('.playlist-toggles button')

    function toggleOpen(event) {
      const current = Array.from(toggles).find(toggle => toggle.classList.contains('selected'))
      const selected = event.target

      current.classList.remove('selected')
      selected.classList.add('selected')

      player.classList.remove(`playlist-${current.getAttribute('data-display')}`)
      player.classList.add(`playlist-${selected.getAttribute('data-display')}`)
    }

    Array.from(toggles).forEach(toggle => toggle.addEventListener('click', toggleOpen, false))
  },
}

app.init()
app.setupPlaylistDisplay()
