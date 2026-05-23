import { useState } from "react"

import {
  Box,
  Typography,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button,
} from "@mui/material"

import articleContent from "../../assets/article-content"

function DashArticleListPage() {

  const [search, setSearch] = useState("")

  const filteredArticles = articleContent.filter((article) =>
    article.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <Box sx={{ p: 3, color: "white" }}>

      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          Articles
        </Typography>

        <Button variant="contained">
          Add Article
        </Button>
      </Box>

      {/* SEARCH */}
      <TextField
        placeholder="Search articles..."
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 3,
          input: { color: "white" },
        }}
      />

      {/* TABLE */}
      <Table>

        <TableHead>
          <TableRow>

            <TableCell sx={{ color: "white" }}>
              Title
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Description
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Status
            </TableCell>

            <TableCell sx={{ color: "white" }}>
              Actions
            </TableCell>

          </TableRow>
        </TableHead>

        <TableBody>

          {filteredArticles.map((article, index) => (

            <TableRow key={index}>

              <TableCell sx={{ color: "white" }}>
                {article.title}
              </TableCell>

              <TableCell sx={{ color: "white" }}>
                {article.description}
                </TableCell>

              <TableCell>

                <Chip
                  label="Published"
                  sx={{
                    background: "#16a34a",
                    color: "white",
                    fontWeight: 700,
                  }}
                />

              </TableCell>

              <TableCell>

                <Box sx={{ display: "flex", gap: 1 }}>

                  <Button size="small">
                    Edit
                  </Button>

                  <Button
                    size="small"
                    color="error"
                  >
                    Delete
                  </Button>

                </Box>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </Box>
  )
}

export default DashArticleListPage