import Link from "next/link";

export default function MiniPost() {
  const posts: { name: string; imgSrc: string }[] = [
    {
      name: "Post 1",
      imgSrc:
        "https://media.self.com/photos/589a2a10c29288190cbe7b25/1:1/w_577,h_577,c_limit/breakfast-size.jpg",
    },
    {
      name: "Post 2",
      imgSrc:
        "https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg",
    },
    {
      name: "Post 3",
      imgSrc:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2018/11/healthy-overnight-oats.jpg?quality=82&strip=1",
    },
  ];
  return (
    <>
      <Link href="/blog/view/1" className="mini-post-wrapper">
        <img src="/breakfast.jpeg" alt="breakfast ideas" />
        <div>
          <p className="post-title">Healthy Ideas</p>
          <p className="post-content">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </Link>
      <div className="post-img-carousel">
        {posts.map((post, index) => (
          <img key={index} src={post.imgSrc} alt={post.name}></img>
        ))}
      </div>
    </>
  );
}
