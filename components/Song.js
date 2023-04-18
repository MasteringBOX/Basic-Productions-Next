const Song = (props) => {
    return (
        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index={props.index}>
            <div className="song-now-playing-icon-container">
                <div className="play-button-container">

                </div>
                <img className="now-playing"
                     src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
            </div>
            <div className="song-meta-data">
                <span className="song-title">{props.name}</span>
                <span className="song-artist">{props.artist}</span>
            </div>
            <span className="song-duration">{props.duration}</span>
        </div>
    );
};

export default Song;