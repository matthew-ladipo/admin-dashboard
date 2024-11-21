import { Post } from "../type/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "The Rise of Artificial Intelligence",
    body:
      "Artificial Intelligence (AI) is revolutionizing various industries...",
    author: "John Doe",
    date: "2024-05-01",
    comments: [
      { id: "1", text: "Great introduction!", username: "Jane" },
      {
        id: "2",
        text: "Looking forward to more posts on this topic.",
        username: "Alex",
      },
    ],
  },
  {
    id: "2",
    title: "Quantum Computing: A New Era of Computing",
    body: "Quantum computing holds the potential to solve problems...",
    author: "Emily Smith",
    date: "2024-04-28",
    comments: [
      { id: "1", text: "Fascinating read!", username: "Mark" },
      {
        id: "2",
        text: "I have some questions about quantum algorithms.",
        username: "Sarah",
      },
    ],
  },
  {
    id: "3",
    title: "Blockchain: Transforming Industries",
    body: "Blockchain technology is disrupting traditional industries...",
    author: "David Johnson",
    date: "2024-05-03",
    comments: [
      { id: "1", text: "Blockchain has immense potential!", username: "Lucy" },
      {
        id: "2",
        text: "I'm curious about its scalability.",
        username: "Michael",
      },
    ],
  },
  {
    id: "4",
    title: "The Future of Augmented Reality",
    body: "Augmented Reality (AR) is changing the way we interact...",
    author: "Sophia Williams",
    date: "2024-05-05",
    comments: [
      { id: "1", text: "AR applications are amazing!", username: "Grace" },
      {
        id: "2",
        text: "Can't wait to see AR integrated into everyday life.",
        username: "Jack",
      },
    ],
  },
 
  {
    id: "9",
    title: "Cloud Computing: Enabling Scalable Solutions",
    body: "Cloud computing provides on-demand access to computing...",
    author: "James Taylor",
    date: "2024-05-18",
    comments: [
      {
        id: "1",
        text: "Cloud computing has transformed IT.",
        username: "Harper",
      },
      {
        id: "2",
        text: "Concerned about data privacy in the cloud.",
        username: "Logan",
      },
    ],
  },
  {
    id: "10",
    title: "Machine Learning: Powering Intelligent Systems",
    body: "Machine Learning (ML) algorithms enable computers...",
    author: "Ava Johnson",
    date: "2024-05-20",
    comments: [
      { id: "1", text: "ML is reshaping industries.", username: "Emma" },
      {
        id: "2",
        text: "I'm interested in reinforcement learning.",
        username: "Daniel",
      },
    ],
  },
];

export default posts;
