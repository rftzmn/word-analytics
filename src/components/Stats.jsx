const Stats = ({ stats }) => {
  return (
    <section className='stats'>
      <Stat label='Words' number={stats.numberOfWords} />
      <Stat label='Characters' number={stats.numberOfCharacters} />
      <Stat label='Instagram' number={stats.instagramCharactersleft} />
      <Stat label='Facebook' number={stats.facebookCharctersLeft} />
    </section>
  );
};

function Stat({ label, number }) {
  return (
    <section className='stat'>
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className='second-heading'>{label}</h2>
    </section>
  );
}

export default Stats;
