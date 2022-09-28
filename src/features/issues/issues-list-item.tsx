import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";

interface RepositoryListItemProps {
  title?: string;
  createdAt?: string;
}

export const IssuesListItem = (props: RepositoryListItemProps) => {
  const { title, createdAt } = props;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
