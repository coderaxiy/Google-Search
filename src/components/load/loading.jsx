import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <CirclesWithBar type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);