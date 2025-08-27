import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ question_types: string }>;
}) => {
  const { question_types } = await params;
  return <div>page</div>;
};

export default page;
