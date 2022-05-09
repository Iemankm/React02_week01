import styled from "styled-components";
import { motion } from "framer-motion";

export const PostCard = styled.div`
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

export const Name = styled(motion.h1)`
  font-size: 40px;
  color: maroon;
  padding-bottom: 0px;
`;

export const Blog = styled(motion.p)`
  font-size: 20px;
  padding-top: 0px;
`;
