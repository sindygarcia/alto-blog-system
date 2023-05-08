import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/logo_2.png" alt="Blog Logo" width={100} height={70} />
      </Link>
    </div>
  );
}
