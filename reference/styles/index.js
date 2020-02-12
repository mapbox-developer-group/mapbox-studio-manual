/*---
title: Styles
description: Learn how to create and manage styles in Mapbox Studio.
sections: true
order: 2
contentType: reference
---*/

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageShell from '../../../components/markdown-page-shell';

import Introduction from './sections/introduction.md';
import Components from './sections/components.md';
import Layers from './sections/layers.md';
import MapCanvas from './sections/map-canvas.md';
import Toolbar from './sections/toolbar.md';
import ManageStyles from './sections/manage-styles.md';
import ClassicStyles from './sections/classic-styles.md';

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
        <Components
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <Layers
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <MapCanvas
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <Toolbar
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <ManageStyles
          callbackFromParent={this.myCallback}
          location={this.props.location}
        />
        <ClassicStyles
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
