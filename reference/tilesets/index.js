/*---
title: Tilesets
description: Learn how to create and manage tilesets in Mapbox Studio.
sections: true
order: 3
contentType: reference
---*/

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageShell from '../../../components/markdown-page-shell';

import Introduction from './sections/introduction.md';
import ManageTilesets from './sections/manage-tilesets.md';
import TilesetInfoPage from './sections/tileset-info-page.md';

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
        <ManageTilesets
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <TilesetInfoPage
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
