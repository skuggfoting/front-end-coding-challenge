import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'

interface IssuesListTableProps {
  nodes?: any;
}

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 600 },
  { field: 'createdAt', headerName: 'Created at', width: 300 },
];

export const IssuesListTable = (props: IssuesListTableProps) => {
  const { nodes } = props;
  return (
    <Box sx={{ height: 'calc(100vh - 100px)', width: '100%', maxHeight: 1061, minHeight: 300 }}>
      <DataGrid
        rows={nodes || []}
        columns={columns}
        rowHeight={38}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </Box>
  );
};