import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const comment = router.query.comment as string;

  return (
    <>
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  );
}
