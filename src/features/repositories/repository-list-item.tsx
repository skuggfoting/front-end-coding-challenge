import { Card, CardContent, Grid, Typography } from "@mui/material";

interface RepositoryListItemProps {
  description?: string | null;
  name?: string;
  totalCount?: number;
}

export const RepositoryListItem = (props: RepositoryListItemProps) => {
  const { description, name, totalCount } = props;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
          <Typography color="text.secondary" paddingTop={1} variant="body2">
            Number of open issues: {totalCount}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
