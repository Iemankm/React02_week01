import styled from "styled-components";
import { motion } from "framer-motion";

export const PostsList = styled.div`
  margin-top: 5%;
  margin-bottom: 12%;
  margin-left: 28%;
  margin-right: 50%;
  border: 1px solid maroon;
  width: 600px;
  height: 630px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  border-radius: 5px;
  box-shadow: 10px 10px 10px maroon;
`;

export const PostCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  height: 140px;
  width: 450px;
  margin-bottom: 5px;
`;

export const Name = styled.h1`
  font-size: 20px;
  color: maroon;
  padding-bottom: 0px;
`;

export const Blog = styled.p`
  font-size: 10px;
`;
