import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";

interface RepositoryListItemProps {
  description?: string | null;
  name?: string;
  totalCount?: number;
  owner?: string;
}

export const RepositoryListItem = (props: RepositoryListItemProps) => {
  const { description, name, totalCount, owner } = props;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardActionArea href={`${name}?owner=${owner}` || ''}>
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
        </CardActionArea>
      </Card>
    </Grid>
  );
};
