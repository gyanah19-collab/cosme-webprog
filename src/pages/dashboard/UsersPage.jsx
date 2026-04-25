// src/pages/dashboard/UsersPage.jsx

import { Box, Typography, Paper, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const rows = [
  { id: 1, firstName: 'Gilianne', lastName: 'Cosme', age: 21, status: 'Active' },
  { id: 2, firstName: 'Maria', lastName: 'Lopez', age: 22, status: 'Pending' },
  { id: 3, firstName: 'John', lastName: 'Reyes', age: 20, status: 'Active' },
  { id: 4, firstName: 'Angela', lastName: 'Tan', age: 24, status: 'Inactive' },
  { id: 5, firstName: 'Marco', lastName: 'Dela Cruz', age: 23, status: 'Active' },
]

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', flex: 1 },
  { field: 'lastName', headerName: 'Last Name', flex: 1 },
  { field: 'age', headerName: 'Age', width: 110 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      const color =
        params.value === 'Active'
          ? 'success'
          : params.value === 'Pending'
          ? 'warning'
          : 'default'

      return <Chip label={params.value} color={color} size="small" />
    },
  },
]

function UsersPage() {
  return (
    <Box sx={{ color: '#fff' }}>
      <Typography
        sx={{
          fontSize: '46px',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          mb: 1,
        }}
      >
        Users
      </Typography>

      <Typography
        sx={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '15px',
          mb: 4,
        }}
      >
        Manage members with a premium readable dark interface.
      </Typography>

      <Paper
        sx={{
          p: 2,
          borderRadius: '30px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box sx={{ height: 650 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            sx={{
              border: 0,
              color: '#fff',
              backgroundColor: '#080808',

              /* entire root */
              '&.MuiDataGrid-root': {
                backgroundColor: '#080808',
              },

              '& .MuiDataGrid-main': {
                backgroundColor: '#080808',
              },

              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: '#080808',
              },

              /* TOP HEADER ROW FIX */
              '& .MuiDataGrid-columnHeaders': {
                background: '#111111 !important',
                color: '#ffffff !important',
                minHeight: '56px !important',
                maxHeight: '56px !important',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              },

              '& .MuiDataGrid-columnHeader': {
                background: '#111111 !important',
                color: '#ffffff !important',
              },

              '& .MuiDataGrid-columnHeaderTitle': {
                color: '#ffffff !important',
                fontWeight: 700,
                fontSize: '14px',
              },

              '& .MuiDataGrid-iconSeparator': {
                color: 'rgba(255,255,255,0.12)',
              },

              '& .MuiSvgIcon-root': {
                color: '#ffffff',
              },

              /* rows */
              '& .MuiDataGrid-row': {
                backgroundColor: '#0d0d0d',
              },

              '& .MuiDataGrid-row:nth-of-type(even)': {
                backgroundColor: '#141414',
              },

              '& .MuiDataGrid-row:hover': {
                backgroundColor: '#1d1d1d',
              },

              '& .MuiDataGrid-cell': {
                color: '#ffffff',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              },

              /* footer */
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: '#111111',
                color: '#ffffff',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              },

              '& .MuiTablePagination-root': {
                color: '#ffffff',
              },

              '& .MuiSelect-select': {
                color: '#ffffff',
              },

              /* fillers */
              '& .MuiDataGrid-filler': {
                backgroundColor: '#080808',
              },

              '& .MuiDataGrid-scrollbarFiller': {
                backgroundColor: '#080808',
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  )
}

export default UsersPage