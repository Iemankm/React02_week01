import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../../services/data";
import Link from "next/link";
import { useRouter } from "next/router";
import {PostCard,Name,Blog} from "./[id].styled"

interface IndexPageProps {
  post: Post[];
}

export default function PostDetails({ post }: IndexPageProps) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 50,
    when: "afterChildren"
  };

  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log(id);
  return (
    <PostCard>
      <Name transition={spring}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>{post[id].name}</Name>
      <Blog transition={spring}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>{post[id].blog}</Blog>
      {/* <img src={post[id].image} alt={"name"} /> */}
    </PostCard>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexPageProps>
> {
  return {
    props: { post: getPost() },
  };
}
