/*global jPlayerPlaylist:false */

window.demo = window.demo || {};

(function( window, $, undefined ) {
	'use strict';

	var	$body   = $( 'body' ),
		$player = $( '.audio-player' ),
		demo    = window.demo,
		jPlaylist;

	$.extend( demo, {
		config: {},

		init: function() {
			$body.addClass( 'ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch' );
		},

		/**
		 * Initialize the jPlayer and playlist.
		 */
		setupPlayer: function() {
			var posterSize = 220;

			jPlaylist = new jPlayerPlaylist({
				jPlayer: '#jquery_jplayer_1',
				cssSelectorAncestor: '#jp_container_1'
			}, [
				{
					title: 'Cro Magnon Man',
					artist: 'The Stark Palace',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Cro+Magnon+Man'
				},
				{
					title: 'Your Face',
					artist: 'The Stark Palace',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Your+Face'
				},
				{
					title: 'Cyber Sonnet',
					artist: 'The Stark Palace',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Cyber+Sonnet'
				},
				{
					title: 'Tempered Song',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Tempered+Song'
				},
				{
					title: 'Hidden',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Hidden'
				},
				{
					title: 'Lentement',
					artist: 'Miaow',
					record: 'Record Name',
					free:true,
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Lentement'
				},
				{
					title: 'Lismore',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Lismore'
				},
				{
					title: 'The Separation',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=The+Separation'
				},
				{
					title: 'Beside Me',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Beside+Me'
				},
				{
					title: 'Bubble',
					artist: 'Miaow',
					record: 'Record Name',
					free:true,
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Bubble'
				},
				{
					title: 'Stirring of a Fool',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Stirring+of+a+Fool'
				},
				{
					title: 'Partir',
					artist: 'Miaow',
					record: 'Record Name',
					free: true,
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Partir'
				},
				{
					title: 'Thin Ice',
					artist: 'Miaow',
					record: 'Record Name',
					mp3: 'http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3',
					oga: 'http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg',
					poster: 'http://placehold.it/' + posterSize + '?text=Thin+Ice'
				}
			], {
				swfPath: 'assets/js/vendor',
				supplied: 'oga, mp3',
				wmode: 'window',
				useStateClassSkin: true,
				autoBlur: false,
				keyEnabled: true,
				ready: function() {
					demo.updateCurrentTrack();
				},
				play: function() {
					demo.updateCurrentTrack();
				},
				ended: function() {
					demo.updateCurrentTrack();
				}
			});
		},

		/**
		 * Playlist toggle buttons and display.
		 */
		setupPlaylistDisplay: function() {
			var $toggles = $( '.playlist-toggles' );

			$toggles.on( 'click', 'button', function( e ) {
				var $this          = $( this ),
					currentDisplay = $toggles.find( '.selected' ).data( 'display' ),
					newDisplay     = $this.data( 'display' );

				$toggles.find( 'button' ).removeClass( 'selected' );
				$this.addClass( 'selected' );

				$player.removeClass( 'playlist-' + currentDisplay );
				$player.addClass( 'playlist-' + newDisplay );
			});
		},

		/**
		 * Update current track info when playlist changes.
		 */
		updateCurrentTrack: function() {
			var $trackPoster  = $( '.track-poster img' ),
				$trackTitle  = $( '.track-title' ),
				$trackArtist = $( '.track-artist' ),
				$trackRecord = $( '.track-record' ),
				currentTrack = jPlaylist.playlist[jPlaylist.current];

			$trackPoster.attr( 'src', currentTrack.poster );
			$trackTitle.text( currentTrack.title );
			$trackArtist.text( currentTrack.artist );
			$trackRecord.text( currentTrack.record );
		}
	});

	// Document ready.
	jQuery(function() {
		demo.init();
		demo.setupPlayer();
		demo.setupPlaylistDisplay();
	});

})( this, jQuery );
