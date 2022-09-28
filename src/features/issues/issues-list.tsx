import { useParams } from 'react-router-dom'
import { Grid, Typography } from "@mui/material";
import { PreloadedQuery, usePreloadedQuery } from "react-relay/hooks";

import { issuesQuery } from "../../pages/__generated__/issuesQuery.graphql";
import { IssuesQuery } from "../../pages/issues";
import { IssuesListItem } from "./issues-list-item";

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
    <Grid container direction="column" spacing={2}>
      <Typography
        variant="h5"
        gutterBottom
        paddingLeft={2}
        paddingTop={3}
      >
        {repo}
      </Typography>
      {data?.repository?.issues?.nodes?.map((node) => (
        <IssuesListItem
          key={node?.id}
          title={node?.title}
          createdAt={node?.createdAt}
        />
      ))}
    </Grid>
  );
};
