import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const MusicPlayer = () => {
    const tracks = [
        {
            url: "/audio/carreteras.mp3",
            title: "Néstor Rausell y Los Impostores - Carreteras",
            tags: ["rock"],
        },
        {
            url: "/audio/3_Million_Truckers.mp3",
            title: "US Truck Association - 3 Million Truckers",
            tags: ["rock"],
        },
        {
            url: "/audio/no_me_quiero_ir.mp3",
            title: "Néstor Rausell y Los Impostores - No me quiero ir",
            tags: ["rock"],
        }
    ];

    const colors = `html {
          --playerBackground: #151616;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #E7e8e8;
          --progressUsed: #E7e8e8;
          --progressLeft: #5e5e5e;
          --volumeSlider: #ffffff;
          --volumeUsed: #5B616A;
          --volumeLeft:  #151616;
          --playlistBackground: #E7e8e8;
          --playlistText: #5B616A;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #5B616A;
      }`;

    return(<>
        <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={true}
            autoPlayNextTrack={true}
            customColorScheme={colors}
        />
    </>);

}

export default MusicPlayer;
