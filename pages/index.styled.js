import styled from "styled-components";
import { motion } from "framer-motion";

export const PostForm = styled(motion.div)`
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

export const NameField = styled.input`
  height: 30px;
  width: 250px;
  margin-bottom: 10px;
`;
export const BlogField = styled.textarea`
  height: 460px;
  width: 450px;
  margin-bottom: 10px;
`;

export const SubmitBtn = styled(motion.input)`
  background-color: maroon;
  color: white;
  height: 30px;
  width: 120px;
  font-size: 15px;
  margin-right: 10px;
`;

export const ListBtn = styled(motion.button)`
  background-color: maroon;
  color: white;
  height: 30px;
  width: 120px;
  font-size: 15px;
`;
