import { Grid } from "@mui/material";
import { PreloadedQuery, usePreloadedQuery } from "react-relay/hooks";

import { repositoriesQuery } from "../../pages/__generated__/repositoriesQuery.graphql";
import { RepositoriesQuery } from "../../pages/repositories";
import { RepositoryListItem } from "./repository-list-item";

interface RepositoryListProps {
  queryReference: PreloadedQuery<repositoriesQuery, Record<string, unknown>>;
}

export const RepositoryList = (props: RepositoryListProps) => {
  const data = usePreloadedQuery<repositoriesQuery>(
    RepositoriesQuery,
    props.queryReference
  );
  return (
    <Grid container direction="column" spacing={2}>
      {data.search.nodes?.map((node) => (
        <RepositoryListItem
          key={node?.id}
          description={node?.description}
          name={node?.name}
          totalCount={node?.issues?.totalCount}
          owner={node?.owner?.login}
        />
      ))}
    </Grid>
  );
};
