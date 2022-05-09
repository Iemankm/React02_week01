import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../../services/data";
import { motion } from "framer-motion";
import Link from "next/link";
import {PostsList,PostCard,Name,Blog} from "./index.styled"


function sendPost() {
  const name = prompt("post name..") || "No post";
  axios.post("/api/post", {
    name: name,
    blog: "test",
    image: "test",
  });
}


interface IndexPageProps {
  post: Post[];
}

export default function Posts({ post }: IndexPageProps) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 50,
    when: "afterChildren"
  };
  return (
    <PostsList  >
      {post.map(({ name, blog, image }, index) => (
        <Link key={name} href={`/posts/${index}`}>
          <PostCard  transition={spring}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>
            <Name>{name}</Name>
            <Blog>{blog}</Blog>
            {/* <img src={image} alt={"name"} /> */}
          </PostCard>
        </Link>
      ))}
      
      
    </PostsList>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexPageProps>
> {
  return {
    props: { post: getPost() },
  };
}
