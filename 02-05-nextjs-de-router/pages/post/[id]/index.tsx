import { useRouter } from "next/router";
import Link from "next/link";

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href={`/post/${id}/first-comment`}>First comment</Link>
        </li>
        <li>
          <Link href={`/post/${id}/second-comment`}>Second comment</Link>
        </li>
      </ul>
    </>
  );
}
