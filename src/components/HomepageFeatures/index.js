import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Performance and Speed",
    Svg: require("@site/static/img/undraw_speed.svg").default,
    description: (
      <>
        We improve the motor and battery system of the Curio robot to increase
        its speed and performance. With the Smartibot development kit, we can
        test and implement various motor configurations and battery types to
        achieve faster and more efficient movement.
      </>
    ),
  },
  {
    title: "Ease of Use",
    Svg: require("@site/static/img/undraw_ease.svg").default,
    description: (
      <>
        We explore ways to make the robot easier to assemble, program, and
        control, with a user-friendly interface and clear instructions. We aim
        to create a robot that is more intuitive and enjoyable to use for
        students and educators alike.
      </>
    ),
  },
  {
    title: "Expanding Functionality",
    Svg: require("@site/static/img/undraw_features.svg").default,
    description: (
      <>
        We expand the functionality of the Curio robot beyond its basic
        components. Using the Smartibot development kit, we can add sensors,
        cameras, and other electronic components to the robot to enable new
        capabilities.
      </>
    ),
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
