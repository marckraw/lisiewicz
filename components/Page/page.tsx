import React from "react";
import SbEditable from "storyblok-react";

import Components from "../components";

interface PageProps {
  content: any; // TODO: Fix Types
}

const Page: React.FC<PageProps> = (props) => {
  console.log("whatever");
  return (
    <SbEditable content={props.content}>
      <main>
        {props.content?.body?.map((blok: any) => {
          // TODO: Fix Types
          return React.createElement(Components(blok.component), {
            key: blok._uid,
            blok,
          } as any);
        })}
      </main>
    </SbEditable>
  );
};

export default Page;
