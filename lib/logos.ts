type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "java"
  | "spring"
  | "cassandra"
  | "docker"
  | "aws"
  | "azure"
  | "heroku"
  | "mssql"
  | "microservice";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  s3: {
    label: "AWS-S3",
    logo: "/assets/icons/s3.svg",
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  java: {
    label: "Java",
    logo: "/assets/icons/java.svg"
  },
  spring: {
    label: "Spring Boot",
    logo: "/assets/icons/spring.svg"
  },
  cassandra: {
    label: "Cassandra",
    logo: "/assets/icons/cassandra.svg",
    invert: true
  },
  docker: {
    label: "Docker",
    logo: "/assets/icons/docker.svg",
  },
  aws: {
    label: "AWS",
    logo: "/assets/icons/aws.svg",
  },
  azure: {
    label: "Azure",
    logo: "/assets/icons/azure.svg",
  },
  heroku: {
    label: "Heroku",
    logo: "/assets/icons/heroku.svg",
  },
  mssql: {
    label: "MS SQL Server",
    logo: "/assets/icons/mssql.svg",
  },
  microservice: {
    label: "Micro Services",
    logo: "/assets/icons/microservice.png",
  }
};

export default logos;
