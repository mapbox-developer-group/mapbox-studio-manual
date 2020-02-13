/*---
title: "Troubleshooting"
description: Resolve common issues across Mapbox products.
color: red
headerImage: /help/img/categories/troubleshoot.svg
---*/
import React from 'react';
import PropTypes from 'prop-types';
import PageShell from '../../components/page-shell';
import ExamplesPage from '@mapbox/dr-ui/examples-page';
import CardContainer from '@mapbox/dr-ui/card-container';
import Card from '@mapbox/dr-ui/card';
import { getTopics } from '../../util/get-topics';
import listTrubs from '@mapbox/batfish/data/list-trubs'; //eslint-disable-line

class TroubleshootingLandingPage extends React.PureComponent {
  render() {
    const topics = getTopics();
    const renderedCardContainers = topics
      .map((currentTopic, i) => {
        const cardsForTopic = listTrubs
          .filter(doc => {
            return doc.topic.indexOf(currentTopic.title) > -1;
          })
          .map((doc, index) => {
            return (
              <Card
                key={index}
                title={doc.title}
                description={doc.description}
                path={doc.path}
              />
            );
          });
        if (cardsForTopic.length > 0) {
          const titleProper =
            currentTopic.title.charAt(0).toUpperCase() +
            currentTopic.title.slice(1);
          return (
            <CardContainer
              key={i}
              title={titleProper}
              path={currentTopic.path}
              fullWidthCards={true}
              cards={cardsForTopic}
            />
          );
        }
      })
      .filter(item => {
        return item !== undefined;
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

TroubleshootingLandingPage.propTypes = {
  frontMatter: PropTypes.object
};

export default TroubleshootingLandingPage;
