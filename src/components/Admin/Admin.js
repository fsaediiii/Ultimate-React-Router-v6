import React, { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/css';

import Loadable from '../Common/Loadable';

const ProductEdit = Loadable(lazy(() => import('../Product/ProductEdit')));
const ProductsIndex = Loadable(lazy(() => import('../Product/ProductsIndex')));

const AdminStyles = css`
  .Admin {
    &-Title {
     color:#3fe368;
    }
    &-Header {
      display: flex;
      align-items: center;
    }
    &-New {
      text-decoration: none;
      border: 2px solid #fff;
      color: #fff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
`;

const Admin = () => (
  <div className={AdminStyles}>
    <div className="Admin-Header">
      <h1 className="Admin-Title">Admin</h1>
      <Link to="new" className="Admin-New">
        New
      </Link>
    </div>

    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path="/new" element={<ProductEdit isEdit={false} />} />
      <Route path="/:id" element={<ProductEdit isEdit={true} />} />
    </Routes>
  </div>
);

export default Admin;