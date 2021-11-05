import logos from "./logos";

type AboutSectionName =
  | "softwareDevelopment"
  | "creativeWriting"
  | "technicalBlog";

export type StackType = { label?: string; logo?: string; invert?: boolean };

export type AboutSectionMetaStructure = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live?: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type AboutSectionMeta = {
  [K in AboutSectionName]: AboutSectionMetaStructure;
};

const aboutSectionMetaEntires: AboutSectionMeta = {
  softwareDevelopment: {
    title: "I build Software and Solutions",
    description: [
      "I have **7+ years of IT Industry experience**, where I have worked extensively on developing and maintening medium sized to large scale distributed and non-distributed applications for my clients using Java stack.",
      "My experience encompasses all phases of software life cycle, with proven skills in **Agile Craftsmanship**.",
      "Currently I am working as **Module Lead** for a highly data-driven organization dedicated to provide unified view of data for any enterprise. I work across a range of products and services to develop intelligent **Big Data** processing solutions.",
      "When I am not coding, I am probably **gaming** or writing **blogs**!"
    ],
    images: {
      main: {
        link: "/assets/about/working-engineer.svg",
        width: 979,
        height: 750,
      },
    },
    stack: [],
    links: {}
  },

  creativeWriting: {
    title: "I write Blogs",
    description: [
      "I have flare for **writing**.",
      "Being an artist in nature, I find ways to represent my perspective through my blogs. Mostly, my areas of writing include **satire**, **poetry**, **short stories**, **life lessons**, and **experiences** I gathered over time",
      "I also try to include my poor **photography skills** and **digital paintings** in my blog posts.",
      "I write on several platforms including my own blogging website, **Life of a Minion**. Check out my creative blog website from the link below.",
    ],
    images: {
      main: {
        link: "/assets/about/read-write.svg",
        width: 979,
        height: 750
      },
    },
    stack: [],
    links: {
      live: "https://blog.anshulgautam.in/",
    },
  },
  technicalBlog: {
    title: "Covid-19 India tracker",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      webm: "/project/covid-19/c4.webm",
      mp4: "/project/covid-19/c4.mp4",
      poster: "/project/covid-19/poster.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [logos.chartjs, logos.react, logos.materialui],
    links: {
      github: "https://github.com/BhavyaCodes/covid-tracker-material-ui-react",
      live: "https://covid-tracker-beta.vercel.app/",
    },
  }
};

export default aboutSectionMetaEntires;
