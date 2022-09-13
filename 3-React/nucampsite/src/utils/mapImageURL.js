import { baseUrl } from "../app/shared/baseUrl";

import React from "react";

export const mapImageURL = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      image: baseUrl + item.image,
    };
  });
};
