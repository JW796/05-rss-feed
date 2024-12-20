const Feed = ({ title, link, date }) => {

  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-US", formatted);
  return (
    <>
      <h3 className="text-xl mb-1">{title}</h3>
      <p>{articleDate}</p>
    </>
  );
};

export default Feed;
