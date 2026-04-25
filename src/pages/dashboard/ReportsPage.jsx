// src/pages/dashboard/ReportsPage.jsx

import { Box, Typography } from "@mui/material";
import {
  LineChart,
  BarChart,
  PieChart,
} from "@mui/x-charts";

export default function ReportsPage() {
  const axisStyle = {
    tickLabelStyle: {
      fill: "#ffffff",
      fontSize: 12,
      fontWeight: 600,
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        background:
          "linear-gradient(135deg,#050505 0%, #0b0b0b 45%, #141414 100%)",
        color: "#fff",
      }}
    >
      {/* HEADER */}
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          mb: 1,
        }}
      >
        Reports
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.65)",
          mb: 4,
          fontSize: "16px",
        }}
      >
        Detailed analytics dashboard using MUI X Charts.
      </Typography>

      {/* TOP GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
          mb: 3,
        }}
      >
        {/* MONTHLY REACH */}
        <Box
          sx={{
            p: 3,
            borderRadius: "28px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Monthly Reach
          </Typography>

          <LineChart
            height={320}
            xAxis={[
              {
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                scaleType: "point",
                ...axisStyle,
              },
            ]}
            yAxis={[axisStyle]}
            series={[
              {
                data: [18, 24, 20, 32, 38, 45],
                color: "#7c6cff",
                curve: "natural",
              },
            ]}
            grid={{ horizontal: true }}
            sx={{
              "& .MuiChartsAxis-line": {
                stroke: "#333",
              },
              "& .MuiChartsGrid-line": {
                stroke: "#1e1e1e",
              },
            }}
          />
        </Box>

        {/* AUDIENCE GROWTH */}
        <Box
          sx={{
            p: 3,
            borderRadius: "28px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Audience Growth
          </Typography>

          <BarChart
            height={320}
            xAxis={[
              {
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                scaleType: "band",
                ...axisStyle,
              },
            ]}
            yAxis={[axisStyle]}
            series={[
              {
                data: [1200, 1800, 1500, 2400, 3100, 4200],
                color: "#38bdf8",
              },
            ]}
            sx={{
              "& .MuiChartsAxis-line": {
                stroke: "#333",
              },
              "& .MuiChartsGrid-line": {
                stroke: "#1e1e1e",
              },
            }}
          />
        </Box>
      </Box>

      {/* PIE CHART */}
      <Box
        sx={{
          p: 3,
          borderRadius: "28px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 800,
            mb: 2,
          }}
        >
          Platform Presence
        </Typography>

        <PieChart
          height={420}
          series={[
            {
              innerRadius: 75,
              outerRadius: 135,
              paddingAngle: 4,
              cornerRadius: 6,
              data: [
                {
                  id: 0,
                  value: 35,
                  label: "Spotify",
                  color: "#7c6cff",
                },
                {
                  id: 1,
                  value: 30,
                  label: "Instagram",
                  color: "#fbbf24",
                },
                {
                  id: 2,
                  value: 20,
                  label: "YouTube",
                  color: "#ff4d67",
                },
                {
                  id: 3,
                  value: 15,
                  label: "Letterboxd",
                  color: "#38bdf8",
                },
              ],
            },
          ]}
          sx={{
            "& .MuiChartsLegend-label": {
              fill: "#ffffff !important",
              color: "#ffffff !important",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.2px",
            },
          }}
        />
      </Box>
    </Box>
  );
}
