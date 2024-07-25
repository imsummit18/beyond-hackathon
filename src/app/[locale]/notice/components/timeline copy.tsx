'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Twitter } from 'lucide-react';
import { InView } from 'react-intersection-observer';

const timelineData = [
  {
    className: 'vertical-timeline-element--work',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid rgb(33, 150, 243)' },
    date: '2011 - present',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    description:
      'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    className: 'vertical-timeline-element--work',
    date: '2010 - 2011',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Art Director',
    subtitle: 'San Francisco, CA',
    description:
      'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
  },
  {
    className: 'vertical-timeline-element--work',
    date: '2008 - 2010',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Web Designer',
    subtitle: 'Los Angeles, CA',
    description: 'User Experience, Visual Design',
  },
  {
    className: 'vertical-timeline-element--work',
    date: '2006 - 2008',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Web Designer',
    subtitle: 'San Francisco, CA',
    description: 'User Experience, Visual Design',
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'April 2013',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    description: 'Strategy, Social Media',
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'November 2012',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Agile Development Scrum Master',
    subtitle: 'Certification',
    description: 'Creative Direction, User Experience, Visual Design',
  },
  {
    className: 'vertical-timeline-element--education',
    date: '2002 - 2006',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
    subtitle: 'Bachelor Degree',
    description: 'Creative Direction, Visual Design',
  },
  {
    className: 'vertical-timeline-element--education',
    date: '2002 - 2006',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Twitter strokeWidth={1} absoluteStrokeWidth />,
    title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
    subtitle: 'Bachelor Degree',
    description: 'Creative Direction, Visual Design',
  },
];

const Timeline = ({
  animate = true,
  className = '',
  layout = '2-columns',
  lineColor = '#FFF',
}) => {
  // const handleInViewChange = (inView, entry) => {
  //   if (inView) {
  //     // You can add your custom in-view logic here
  //     console.log("Element is in view:", entry.target);
  //   }
  // };

  return (
    <div className={`timeline ${className}`}>
      <VerticalTimeline animate={animate} lineColor={lineColor}>
        {timelineData.map((item, index) => (
          /*  <InView key={index} onChange={handleInViewChange}>
            {({ inView, ref, entry }) => (

            )}
          </InView> */
          <VerticalTimelineElement
            key='timeline'
            // className={`${item.className} ${inView ? "in-view" : ""}`}
            contentStyle={item.contentStyle}
            contentArrowStyle={item.contentArrowStyle}
            date={item.date}
            iconStyle={item.iconStyle}
            icon={item.icon}
          >
            {item.title && (
              <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            )}
            {item.subtitle && (
              <h4 className='vertical-timeline-element-subtitle'>
                {item.subtitle}
              </h4>
            )}
            {item.description && <p>{item.description}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
