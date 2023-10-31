import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cutting-Edge Reasoning Algorithms',
    Svg: require('@site/static/img/algorithm.svg').default,
    description: (
      <>
        We offer the most up-to-date search algorithms for reasoning with LLMs, such as <a href="https://arxiv.org/abs/2305.14992">RAP-MCTS</a>, <a href="https://arxiv.org/abs/2305.10601">Tree-of-Thoughts</a>, <a href="https://arxiv.org/abs/2305.00633">Guided Decoding</a>,
        and more. These advanced algorithms enable tree-structure reasoning and outperform traditional
        chain-of-thoughts approaches.
      </>
    ),
  },
  {
    title: 'Intuitive Visualization and Interpretation',
    Svg: require('@site/static/img/visualization.svg').default,
    description: (
      <>
        Our library provides visualization tools to help users make sense of the reasoning process. Even in the case of
        the most complex reasoning algorithms like Monte-Carlo Tree Search, users can easily diagnose and understand
        what happened with one line of python code.
      </>
    ),
  },
  {
    title: 'Compatibility with any LLM libraries',
    Svg: require('@site/static/img/compatibility.svg').default,
    description: (
      <>
        Our framework is compatible with any LLM frameworks, e.g. Huggingface transformers, OpenAI API, etc.
        Specifically, we integrated LLaMA with the option of using <a href="https://github.com/facebookresearch/llama">fairscale</a> backend
        for improved multi-GPU performance or <a href="https://github.com/QubitPi/llama.cpp">LLaMA.cpp</a> backend with
        lower hardware requirements.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
