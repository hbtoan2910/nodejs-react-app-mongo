import React, { useEffect, useState } from "react";

function Tweet() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    //fetch data from API, in this case, from our backend (using promise approach)
    /*fetch("/tweets")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response failed...");
        }
        return res.json(); // Returns a Promise that resolves to parsed JSON data
      })
      .then((data) => {
        setTweets(data); // Update state with the fetched data which is the parsed JSON data
      });*/

    //fetch data from API, in this case, from our backend (using async-await approach)
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const data = await fetch("/tweets");
    const tweets = await data.json();
    setTweets(tweets);
  };

  return (
    <section className="tweetpage">
      <h1 className="tp_title">List of tweets</h1>

      <form method="POST" action="/addTweet">
        <div class="input-group justify-content-center">
          <div class="input-group-prepend">
            <input type="text" name="tweetInput" class="form-control" />
            <input type="submit" value="Submit" class="btn btn-primary mb-2" />
          </div>
        </div>
      </form>

      <ol className="tp_list">
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <p>{tweet.name}</p>
            <p>{tweet.msg}</p>
            <p>written by {tweet.username}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Tweet;
