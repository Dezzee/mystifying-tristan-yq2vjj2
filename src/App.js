import styles from "./styles.css";

const topsong = [
  {
    title: "Tight Rope",
    url: "https://www.youtube.com/embed/glYcr99Grkg?si=heYBQtR08c1y1LMD",
    id: 0,
  },
  { title: "not tight rope", id: 1 },
];

function BuyNow() {
  return (
    <a
      href="https://www.amazon.com/RUCKUS-Movements/dp/B0C5JHJXX6"
      target="blank"
    >
      <button> Buy on Amazon</button>
    </a>
  );
}

const album = {
  name: "Album Cover",
  imageUrl: "https://i.scdn.co/image/ab67616d0000b273383e0706a61e1ed58495a3e6",
};

const spotify = {
  name: "Listen Now",
  imageUrl:
    "https://www.citypng.com/public/uploads/preview/square-black-green-spotify-app-icon-png-701751694969849j7wtxvnrgo.png",
};

export default function Killer() {
  return (
    <>
      <div2>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/glYcr99Grkg?si=heYBQtR08c1y1LMD"
        ></iframe>
      </div2>
      <div3>
        <a href={topsong[0].url} target="blank">
          <button>{topsong[0].title} </button>
        </a>
      </div3>
      <br />
      <div2>
        <a
          href="https://open.spotify.com/track/0qESwJG5DLYEpigv3h08ky?si=cbfb846c5fa646db"
          target="blank"
        >
          <img
            className="streamSpotify"
            src={spotify.imageUrl}
            alt={"Spotify Listen"}
            style={{
              height: 48,
              width: 50,
            }}
          />
        </a>
        <BuyNow />
        <img
          className="albumcover"
          src={album.imageUrl}
          alt={"Band Album Cover"}
          style={{
            height: 48,
            width: 50,
          }}
        />
      </div2>
      <br />
      <div2></div2>
      <h1>
        Movements
        <br /> "TIGHTROPE"
      </h1>
      <p>
        I've been staring at the world from a tightrope
        <br />
        Worried sick but I'm hanging on to high hopes
        <br />
        And I'm swinging hard, always hoping that I strike gold
        <br />
        But you walk by and it's like you've got your eyes closed
        <br />
        And I don't mean to intrude
        <br />
        But I'm dying to reach you
        <br />
        So can I try to be somebody you could love?
        <br />
        I don't know if I could ever measure up
        <br />
        And you took my breath like water in my lungs
        <br />
        I would die to be somebody you could love, oh
        <br />
        I never know just what to say so I keep shut
        <br />
        It's like I'm always too afraid I'm gonna freeze up
        <br />
        And if I try too hard then it's too much
        <br />
        But if I don't start soon I'm gonna lose touch
        <br />
        It's just the way you give me too much to choose from
        <br />
        And I don't mean to intrude
        <br />
        But I'm dying to reach you
        <br />
        So can I try to be somebody you could love?
        <br />
        I don't know if I could ever measure up
        <br />
        But you took my breath like water in my lungs
        <br />
        And I would die to be somebody you could love, oh-oh
        <br />
        Oh-oh-oh
        <br />
        Don't remind me
        <br />
        I could never be enough
        <br />
        Stay beside me
        <br />
        'Cause I only want your love
        <br />
        Don't remind me
        <br />
        I could never be enough
        <br />
        Stay beside me
        <br />
        'Cause I only want your love
        <br />
        I've been staring at the world from a tightrope
        <br />
        Worried sick but I'm hanging on to high hopes
        <br />
        So can I try to be somebody you could love?
        <br />
        I don't know if I could ever measure up
        <br />
        But you took my breath like water in my lungs
        <br />
        And I would die to be somebody you could love, oh-oh
        <br />
        Oh-oh-oh
        <br />
        Yeah, you took my breath like water in my lungs
        <br />
        And I would die to be somebody you could love
        <br />
      </p>
    </>
  );
}
