/*---
title: Datasets
description: Learn how to create and manage datasets in Mapbox Studio.
sections: true
order: 4
contentType: reference
---*/

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageShell from '../../../components/markdown-page-shell';

import Introduction from './sections/introduction.md';
import ManageDatasets from './sections/manage-datasets.md';
import DatasetEditor from './sections/dataset-editor.md';

export default class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { headings: [] };
  }

  myCallback = headings => {
    this.setState(prevState => ({
      headings: [...prevState.headings, headings]
    }));
  };
  render() {
    const headings = this.state.headings.reduce((a, b) => a.concat(b), []);
    return (
      <MarkdownPageShell {...this.props} headings={headings}>
        <Introduction
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <ManageDatasets
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <DatasetEditor
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
      </MarkdownPageShell>
    );
  }
}

Page.propTypes = {
  location: PropTypes.object,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};
