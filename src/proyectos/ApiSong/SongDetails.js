import Message from "./../crud-json-server/Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null; //evita renderizado innecesario

  return (
    <div className="details">
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics lyric={search.song} title={search.artist} />
      )}
      {/* bio */}
      {!bio.artists ? (
        <Message
          msg={`Error: no existe el Interprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongArtist artist={bio.artists[0]} />
      )}
    </div>
  );
};

export default SongDetails;
