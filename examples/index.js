/*---
title: 'Examples'
description: 'Examples for Mapbox Studio.'
---*/

import React from 'react';
import PropTypes from 'prop-types';
import PageShell from '../../components/page-shell';
import ExamplesPage from '@mapbox/dr-ui/examples-page';
import listExamples from '@mapbox/batfish/data/list-examples'; // eslint-disable-line
import { getTopics } from '../../util/get-topics';
import CardContainer from '@mapbox/dr-ui/card-container';
import Card from '@mapbox/dr-ui/card';
import AppropriateImage from '../../components/appropriate-image';

export default class StudioExamplesPage extends React.PureComponent {
  render() {
    const allTopics = getTopics(listExamples);
    const renderedCardContainers = allTopics.map(topic => {
      const cardsForTopic = listExamples
        .filter(example => {
          return example.topic === topic.title;
        })
        .map((example, index) => {
          return (
            <Card
              key={index}
              title={example.title}
              description={example.description}
              path={example.path}
              thumbnail={
                <AppropriateImage
                  style={{ borderRadius: '4px' }}
                  imageId={example.image}
                  background={true}
                />
              }
            />
          );
        });
      return (
        <CardContainer
          title={topic.title}
          path={topic.path}
          fullWidthCards={false}
          cards={cardsForTopic}
        />
      );
    });
    return (
      <PageShell {...this.props}>
        <ExamplesPage
          frontMatter={this.props.frontMatter}
          cardContainers={renderedCardContainers}
        />
      </PageShell>
    );
  }
}

StudioExamplesPage.propTypes = {
  frontMatter: PropTypes.object
};
