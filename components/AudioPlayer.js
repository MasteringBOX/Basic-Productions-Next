import Song from "./Song";
import {useEffect} from "react";
import SongTest from "./SongTest";

const AudioPlayer = () => {
    const songs = [
        {
            "name": "Carreteras",
            "artist": "Néstor Rausell y Los Impostores",
            "album": "Carreteras",
            "url": "/audio/carreteras.mp3",
            "cover_art_url": "/img/carreteras.jpg",
            "duration": "3:23"
        },
        {
            "name": "No me quiero ir",
            "artist": "Néstor Rausell y Los Impostores",
            "album": "Carreteras",
            "url": "/audio/no_me_quiero_ir.mp3",
            "cover_art_url": "/img/carreteras.jpg",
            "duration": "3:12"
        },
        {
            "name": "3 Million Truckers",
            "artist": "US Truck Association",
            "album": "3 Million Truckers",
            "url": "/audio/3_Million_Truckers.mp3",
            "cover_art_url": "/img/truck.jpg",
            "duration": "3:12"
        },
    ];

        useEffect(() => {

            let songElements = document.getElementsByClassName('song');

            for( var i = 0; i < songElements.length; i++ ){
                /*
                  Ensure that on mouseover, CSS styles don't get messed up for active songs.
                */
                songElements[i].addEventListener('mouseover', function(){
                    this.style.backgroundColor = '#00A0FF';

                    this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
                    this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

                    if( !this.classList.contains('amplitude-active-song-container') ){
                        this.querySelectorAll('.play-button-container')[0].style.display = 'block';
                    }

                    this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
                });

                /*
                  Ensure that on mouseout, CSS styles don't get messed up for active songs.
                */
                songElements[i].addEventListener('mouseout', function(){
                    this.style.backgroundColor = '#FFFFFF';
                    this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
                    this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
                    this.querySelectorAll('.play-button-container')[0].style.display = 'none';
                    this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
                });

                /*
                  Show and hide the play button container on the song when the song is clicked.
                */
                songElements[i].addEventListener('click', function(){
                    this.querySelectorAll('.play-button-container')[0].style.display = 'none';
                });
            }
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/amplitudejs@latest/dist/amplitude.min.js';
            script.async = true;

            script.onload = () => {
                Amplitude.init({
                    songs: songs,
                    callbacks: {
                        play: function () {
                            document.getElementById('album-art').style.visibility = 'hidden';
                            document.getElementById('large-visualization').style.visibility = 'visible';
                        },
                        pause: function () {
                            document.getElementById('album-art').style.visibility = 'visible';
                            document.getElementById('large-visualization').style.visibility = 'hidden';
                        },
                    },
                    waveforms: {
                        sample_rate: 50,
                    },
                });
            };

            document.body.appendChild(script);

            //document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';

            return () => {
                // Clean up on component unmount
                const amplitudePlayer = document.getElementById('amplitude-player');
                amplitudePlayer && amplitudePlayer.remove();
            };
        }, []);





    return(
        <div id="blue-playlist-container">


            <div id="amplitude-player">


                <div id="amplitude-left">
                    <img data-amplitude-song-info="cover_art_url" className="album-art"/>
                    <div className="amplitude-visualization" id="large-visualization">

                    </div>
                    <div id="player-left-bottom">
                        <div id="time-container">
                          <span className="current-time">
                            <span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span>
                          </span>
                            <div id="progress-container">
                                <div className="amplitude-wave-form">

                                </div>
                                <input type="range" className="amplitude-song-slider"/>
                                <progress id="song-played-progress" className="amplitude-song-played-progress"></progress>
                                <progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
                            </div>
                            <span className="duration">
                <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
              </span>
                        </div>

                        <div id="control-container">
                            <div id="repeat-container">
                                <div className="amplitude-repeat" id="repeat"></div>
                                <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
                            </div>

                            <div id="central-control-container">
                                <div id="central-controls">
                                    <div className="amplitude-prev" id="previous"></div>
                                    <div className="amplitude-play-pause" id="play-pause"></div>
                                    <div className="amplitude-next" id="next"></div>
                                </div>
                            </div>

                            <div id="volume-container">
                                <div className="volume-controls">
                                    <div className="amplitude-mute amplitude-not-muted"></div>
                                    <input type="range" className="amplitude-volume-slider"/>
                                    <div className="ms-range-fix"></div>
                                </div>
                                <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle-right"></div>
                            </div>
                        </div>

                        <div id="meta-container">
                            <span data-amplitude-song-info="name" className="song-name"></span>

                            <div className="song-artist-album">
                                <span data-amplitude-song-info="artist"></span>
                                <span data-amplitude-song-info="album"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="amplitude-right">
                    {songs.map((song, index) => (
                        <Song key={index} {...song} index={index} />
                    ))}
                </div>

            </div>

        </div>);

}

export default AudioPlayer;
