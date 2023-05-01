import React from "react";

type Props = {
  categoryActive: string;
};

export const Banner = ({ categoryActive }: Props) => {
  return <div>{categoryActive}</div>;
};
