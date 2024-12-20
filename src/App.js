import Feed from "./Feed";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-4">05-RSS-FEED</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">
        Good morning, James
      </h2>
      <div className="w-3/4 max max-w-lg border mx-auto p-5 rounded-xl">
        <div className="bg-black flex flex-col items-center rounded-lg py-2 px-6 mb-5">
          <img
            src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png"
            alt=""
          />
        </div>
        {articles.map((item, i) => (
          <Feed
            key-={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
