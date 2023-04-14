/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from "react";

import "./index.scss";
import Menu from "../Menu";

import Menu2 from "components/Menu2";

import Storage from "components/Storage";

class SbarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { settingPage } = this.props;

    return (
      <aside
        className={`sidebar w-248  mt-0 position-relative bg-dark mh-100 overflow-hidden d-flex flex-column z-index-100 `}
      >
        {!settingPage ? (
          <>
            <Menu />
          </>
        ) : (
          <Menu2 />
        )}

        <div className="position-absolute d-flex flex-wrap align-items-center bottom-0 mb-1 border-top border-gray-700 w-100 py-1 button-language ">
          <Storage />
        </div>
      </aside>
    );
  }
}

export default withTranslation("dam")(SbarLeft);
