import React from "react";
import Storyblok, { version } from "../lib/storyblok-client";
import { relationsToResolve } from "../constants/general";
import Components from "../components/components";
import { GetStaticProps } from "next";

interface HomePageProps {
  story: any;
}

const Index: React.FC<HomePageProps> = (props) => {
  const { story } = props;
  return (
    story &&
    React.createElement(Components(story?.content?.component), {
      key: story?.uuid,
      content: story?.content,
      published: story.published_at,
    })
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const {
      data: { story },
    } = await Storyblok.get(`cdn/stories/home`, {
      resolve_relations: relationsToResolve,
      version,
    });

    return {
      props: {
        story,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
