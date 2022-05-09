import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../services/data";
import { useState } from "react";
import Link from 'next/link'
import { motion } from "framer-motion";
import {PostForm,NameField,BlogField,SubmitBtn,ListBtn} from "./index.styled"

interface IndexPageProps {
  post: Post[];
}

export default function IndexPage({ post }: IndexPageProps) {
  const [name, setname] = useState("");
  const [blog, setblog] = useState("");
  const [image, setImage] = useState("");

  function sendPost(e) {
    e.preventDefault();
    axios.post("/api/post", {
      name,
      blog,
      image,
    });
  }
  return (
    <PostForm  transition={{
      type: "spring",
      velocity: 100,
      stiffness: 10
    }}
    initial={{ y: -70, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}>
      <motion.form onSubmit={sendPost}  
        >
        <div>
          <NameField
            onChange={(e) => setname(e.target.value)}
            type="text"
            value={name} placeholder="Name"
          />
        </div>
        <div>
          <BlogField
            onChange={(e) => setblog(e.target.value)}
            value={blog} placeholder="Write Your Blog Here!"
          />
        </div>
        <div>
         
        </div>
        <div>
          <SubmitBtn  whileTap={{ scale: 0.8 }} type={"submit"} value="Publish" />
         <ListBtn whileTap={{ scale: 0.8 }}>
          <Link href="/posts">
            <a>Show List</a>
          </Link> 
          </ListBtn>
        </div>
      </motion.form>
    </PostForm>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexPageProps>
> {
  return {
    props: { post: getPost() },
  };
}
