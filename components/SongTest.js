const SongTest = (props) => {
    return (
        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="0">
            <div className="song-now-playing-icon-container">
                <div className="play-button-container">

                </div>
                <img className="now-playing"
                     src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
            </div>
            <div className="song-meta-data">
                <span className="song-title">The Gun</span>
                <span className="song-artist">Lorn</span>
            </div>
            <span className="song-duration">3:16</span>
        </div>
    );
};

export default SongTest;