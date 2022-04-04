import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import { css, cx } from "@emotion/css";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className={cx(styles.blue, "pt-10")}>
        hello world
      </div>
    </Main>
  );
};

export default Index;

const styles = {
  blue: css`
    background-color: white;
  `,
};
