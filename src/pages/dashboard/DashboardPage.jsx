import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 52 },
  { month: "May", value: 61 },
  { month: "Jun", value: 74 },
];

const barData = [
  { name: "Music", value: 12 },
  { name: "Design", value: 18 },
  { name: "Articles", value: 9 },
  { name: "Media", value: 15 },
];

const pieData = [
  { name: "Spotify", value: 35 },
  { name: "Instagram", value: 30 },
  { name: "YouTube", value: 20 },
  { name: "Letterboxd", value: 15 },
];

const COLORS = ["#7c6cff", "#fbbf24", "#ff4d67", "#38bdf8"];

export default function DashboardPage() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#050505",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Overview</h1>
      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Premium analytics dashboard with readable charts.
      </p>

      {/* TOP CHARTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {/* LINE */}
        <div className="glass-card">
          <h3>Monthly Reach</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="#222" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  background: "#111",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7c6cff"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR */}
        <div className="glass-card">
          <h3>Creative Output</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#222" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  background: "#111",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              />
              <Bar dataKey="value" fill="#7c6cff" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {/* PIE */}
        <div className="glass-card">
          <h3>Platform Presence</h3>

          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#111",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              />

              <Legend
                wrapperStyle={{
                  color: "#fff",
                  paddingTop: "20px",
                  fontSize: "15px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* NOTES */}
        <div className="glass-card">
          <h3>Performance Notes</h3>

          {[
            ["Spotify Campaign", "Excellent growth this month"],
            ["Instagram Reels", "Strong engagement"],
            ["YouTube Shorts", "Needs consistency"],
            ["Articles", "Great retention rate"],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#101010",
                padding: "20px",
                borderRadius: "18px",
                marginBottom: "16px",
                border: "1px solid #222",
              }}
            >
              <h4 style={{ marginBottom: "8px" }}>{item[0]}</h4>
              <p style={{ color: "#aaa" }}>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}