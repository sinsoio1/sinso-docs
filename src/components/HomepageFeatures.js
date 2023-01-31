import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const enFeatureList = [
  {
    title: 'AI TO AUGMENT DOCTORS',
    Svg: require('../../static/img/tutorial/img11.svg').default,
    description: (
      <>
        In the near future, AI will augment doctors to help find the key,
        relevant data and present it in a concise, easily digestible format.
      </>
    ),
  },
  {
    title: 'AI HELP DETECT CANCER',
    Svg: require('../../static/img/tutorial/img12.svg').default,
    description: (
      <>
        Scientists have created an AI that can detect breast cancer with high
        levels of accuracy.
      </>
    ),
  },
  {
    title: 'AI CAN FILL LABOR GAPS',
    Svg: require('../../static/img/tutorial/img13.svg').default,
    description: (
      <>
        Many countries lack enough radiologists and AI can fill a labor gap by
        analyzing various medical images.
      </>
    ),
  },
  {
    title: 'AI HELP FIND BEST IMAGE SETTINGS ',
    Svg: require('../../static/img/tutorial/img14.svg').default,
    description: (
      <>
        AI is helping medical professionals determine the best imaging settings
        during capture to reduce radiation and increase accuracy of images.
      </>
    ),
  },
  {
    title: 'REDUCES ARTIFACTS IN MEDICAL IMAGES',
    Svg: require('../../static/img/tutorial/img15.svg').default,
    description: (
      <>
        AI applied post image capture enhances images and reduces artifacts and
        abnormalities caused by the capture process.
      </>
    ),
  },
  {
    title: 'DIAGNOSE AND CATEGORIZE CARDIOVASCULAR DISEASES',
    Svg: require('../../static/img/tutorial/img16.svg').default,
    description: (
      <>
        ML offers a non-invasive way to analyze images of cardiac computed
        tomography.
      </>
    ),
  },
]
const zhFeatureList = [
  {
    title: '专注医疗',
    Svg: require('../../static/img/img2.svg').default,
    description: (
      <>
        Web3medicallabs 是一个服务于医学领域的医学开源社区，
        里面有许多新颖实用的项目。
      </>
    ),
  },
  {
    title: '区块链的力量',
    Svg: require('../../static/img/img3.svg').default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        区块链技术赋能医疗行业，尤其是filecoin等
      </>
    ),
  },
  {
    title: '黑客和极客文化',
    Svg: require('../../static/img/img4.svg').default,
    description: (
      <>
        我们聚集了一群改变世界的程序员。
        你愿意接受最困难的问题并挑战自己吗？快快 加入我们！
      </>
    ),
  },
]
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="margin-top-sm">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(size) {
  let FeatureList = []
  size.language == 'zh-cn'
    ? (FeatureList = zhFeatureList)
    : (FeatureList = enFeatureList)
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
  )
}
