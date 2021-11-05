import { memo } from "react";
import AboutSection from "./AboutSection";
import { AboutSectionMetaStructure } from "lib/AboutMetadata";

function AboutSectionsContainer({ sections }: { sections: AboutSectionMetaStructure[] }) {
  const renderAboutSectionsContainer = () => {
    return sections.map(
      ({ title, description, images, stack, links, special }, index) => {
        return (
          <AboutSection
            key={index}
            index={index + 1}
            title={title}
            description={description}
            images={images}
            stack={stack}
            links={links}
            special={special}
          />
        );
      }
    );
  };

  return <section>{renderAboutSectionsContainer()}</section>;
}

export default memo(AboutSectionsContainer);
