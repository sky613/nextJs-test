import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>main</p>
      <Link href={"about"} prefetch={false}>
        클릭할 영역(컴포넌트)
      </Link>
    </>
  );
}
