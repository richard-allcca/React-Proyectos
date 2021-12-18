const SongLyrics = ({ title, lyric }) => {
  return (
    <section className="lirycs">
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </section>
  );
};

export default SongLyrics;
