import Image from "next/image";
import Link from "next/link";

export default function Post({ id, name }: { id: number; name: string }) {
  return (
    <Link href={`/blog/view/${id}`} className="post">
      <Image
        // src="https://random.imagecdn.app/500/150"
        src="https://picsum.photos/350/300"
        alt={name}
        width={350}
        height={300}
        style={{ borderRadius: "2px" }}
      ></Image>
      <div className="overlay">
        <div className="name">{name}</div>
      </div>
    </Link>
  );
}
