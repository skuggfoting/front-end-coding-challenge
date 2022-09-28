import { useParams } from 'react-router-dom'
import { Grid, Typography } from "@mui/material";
import { PreloadedQuery, usePreloadedQuery } from "react-relay/hooks";

import { issuesQuery } from "../../pages/__generated__/issuesQuery.graphql";
import { IssuesQuery } from "../../pages/issues";
import { IssuesListTable } from "./issues-list-table"

interface IssuesListProps {
  queryReference: PreloadedQuery<issuesQuery, Record<string, unknown>>;
}

export const IssuesList = (props: IssuesListProps) => {
  const data = usePreloadedQuery<issuesQuery>(
    IssuesQuery,
    props.queryReference
  );
  const { repo } = useParams()
  return (
    <Grid container direction="column" spacing={2} paddingLeft={2}>
      <Typography
        variant="h5"
        gutterBottom
        paddingTop={3}
      >
        List of open issues for repository: {repo}
      </Typography>
      <IssuesListTable
        nodes={data.repository?.issues?.nodes}
      />
    </Grid>
  );
};
