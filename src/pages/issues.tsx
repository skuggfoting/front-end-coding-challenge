import { useParams } from 'react-router-dom'
import { Typography } from "@mui/material";
import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { graphql } from "relay-runtime";

import { issuesQuery } from "./__generated__/issuesQuery.graphql";
import { IssuesList } from "../features/issues/issues-list";

export const IssuesQuery = graphql`
  query issuesQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(first: 100, filterBy: { states: OPEN }, orderBy: { direction: ASC, field: CREATED_AT }) {
        nodes {
          id
          title
          createdAt
        }
      }
    }
  }
`;

const Issues = () => {
  const { repo } = useParams()
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get("owner");

  const [queryReference, loadQuery] =
    useQueryLoader<issuesQuery>(IssuesQuery);

  useEffect(() => {
    loadQuery({ owner: paramValue || '', name: repo || '' });
  }, []);

  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      {queryReference ? (
        <IssuesList queryReference={queryReference} />
      ) : (
        <Typography>No results match the search criteria.</Typography>
      )}
    </Suspense>
  );
};

export default Issues;
