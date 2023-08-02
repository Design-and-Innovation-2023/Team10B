import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Performance and Speed",
    Svg: require("@site/static/img/undraw_speed.svg").default,
    description: (
      <>
        We upgrade Curio robot's motor and battery for improved speed and
        performance using the Smartibot development kit.
      </>
    ),
  },
  {
    title: "Ease of Use",
    Svg: require("@site/static/img/undraw_ease.svg").default,
    description: (
      <>
        We strive to enhance the robot's user-friendliness, making it easier to
        assemble, program, and control for students and educators.
      </>
    ),
  },
  {
    title: "Expanding Functionality",
    Svg: require("@site/static/img/undraw_features.svg").default,
    description: (
      <>
        We expand Curio robot's capabilities by adding sensors, cameras, and
        electronic components using the Smartibot development kit.
      </>
    ),
  },
];

const designThinkingList = [
  {
    title: "Storyboard",
    Svg: require("@site/static/img/undraw_storyboard.svg").default,
    description:
      "Visualize user experience through sketches or images, gather information, collaborate, and understand user perspectives.",
  },
  {
    title: "Stolen Goods",
    Svg: require("@site/static/img/undraw_take.svg").default,
    description:
      "Create unique product by gathering requirements and analyzing competitors.",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Design({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container text--center">
          <h2>Battlebot (Final Design)</h2>
          <p>Affordable, Versatile, Sustainable, User-Friendly</p>
          <div className={styles.prototypeImages}>
            <img
              src={
                require("@site/static/img/third-prototype/front.jpg").default
              }
              alt="Curio"
            />
            <img
              src={require("@site/static/img/third-prototype/back.jpg").default}
              alt="Curio"
            />
            <img
              src={require("@site/static/img/third-prototype/left.jpg").default}
              alt="Curio"
            />
            <img
              src={
                require("@site/static/img/third-prototype/right.jpg").default
              }
              alt="Curio"
            />
          </div>
          <div className={styles.prototypeButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/prototypes/third-prototype"
            >
              Find out more 🔍
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container text--center">
          <h2>
            Revamp Curio Through{" "}
            <b className="text--primary">Design Thinking</b>
          </h2>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container text--center">
          <h2>Methodogies</h2>
          <div className="row">
            {designThinkingList.map((props, idx) => (
              <Design key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
