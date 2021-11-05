import { memo } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Header from "components/Header";
import Skills from "components/Skills";
import AboutSectionsContainer from "components/About";
import AboutTitle from "components/About/AboutTitle";
import Footer from "components/Footer";

import allSections, { AboutSectionMetaStructure } from "lib/AboutMetadata";

const sections: AboutSectionMetaStructure[] = [
  allSections.softwareDevelopment,
  allSections.creativeWriting
];

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Anshul Gautam</title>
      </Head>
      <motion.div
        key="index"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <>
          <Header />
          <Skills />
          <AboutTitle text={"About"} />
          <AboutSectionsContainer sections={sections} />
          {
            /*
            <ProjectTitle text={"About"} />
            <Projects projects={projects} />
            <AllProjectsButton />
            */
          }
          <Footer />
        </>
      </motion.div>
    </>
  );
};

export default memo(IndexPage);
