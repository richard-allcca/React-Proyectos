import React, { useEffect, useState } from "react";
import { helperHttp } from "./../../helpers/helperHttp";
import Loader from "./../crud-json-server/Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let urlArtists = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let urlSongs = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      // console.log(urlSongs);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helperHttp().get(urlArtists),
        helperHttp().get(urlSongs),
      ]);
      // console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //? maneja el envio de formulario
    setSearch(data);
    // setBio(data.artist);
    // setLyric(data.song);
  };

  return (
    <div>
      <h2>SEARCH SONG</h2>
      <article className="grid-1-2">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;

// Notas:
// Flujo
// SongSearch => SongForm - SonDetails
// SongDetails => SongLyrics - SonArtists
