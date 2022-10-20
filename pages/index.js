import Qs from "next-test-pkg-reproduce";
console.log(Qs);
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/test">Test</Link>
    </div>
  );
}
