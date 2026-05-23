import axios from "axios"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Button,
  Modal,
  Chip,
  Switch,
} from "@mui/material"

function UsersPage() {

    const user = JSON.parse(
    localStorage.getItem("user")
  )

  if (user?.role !== "admin") {
  return <Navigate to="/home" />
}

  const [users, setUsers] = useState([])

  const [search, setSearch] = useState("")
  const [role, setRole] = useState("")
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")

  const [open, setOpen] = useState(false)
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  username: "",
  password: "",
  contact: "",
  role: "",
  gender: "",
  status: "active",
})

const [errors, setErrors] = useState({})

  const filtered = users.filter((u) => {
    const match =
  (u.firstName || '')
    .toLowerCase()
    .includes(search.toLowerCase()) ||

  (u.lastName || '')
    .toLowerCase()
    .includes(search.toLowerCase()) ||

  (u.email || '')
    .toLowerCase()
    .includes(search.toLowerCase()) ||

  (u.username || '')
    .toLowerCase()
    .includes(search.toLowerCase())

    return (
      match &&
      (role ? u.role === role : true) &&
      (gender ? u.gender === gender : true) &&
      (status ? u.status === status : true)
    )
  })

  useEffect(() => {
  fetchUsers()
}, [])

const fetchUsers = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/auth/users"
    )

    setUsers(res.data)

  } catch (err) {
    console.log(err)
  }
}

  const validate = () => {
  const newErrors = {}


  if (!form.firstName.trim()) {
    newErrors.firstName = "First name is required"
  }

  if (!form.lastName.trim()) {
    newErrors.lastName = "Last name is required"
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required"
  }

  if (!form.username.trim()) {
    newErrors.username = "Username is required"
  }

  if (/\s/.test(form.username)) {
    newErrors.username = "Username must not contain spaces"
  }

  const ageNum = Number(form.age)

    if (
      !Number.isInteger(ageNum) ||
      ageNum < 1 ||
      ageNum > 120
    ) {
      newErrors.age =
        "Enter valid age"
    }

  if (!/^\d{11}$/.test(form.contact)) {
    newErrors.contact = "Contact number must be 11 digits"
  }

  if (
  form.password &&
  form.password.length < 8
) {
  newErrors.password =
    "Password must be at least 8 characters"
}
  return newErrors
}

  const handleSave = async () => {
  const validationErrors = validate()

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  if (editId) {
    const payload = { ...form }

    if (!payload.password) {
      delete payload.password
    }

    await axios.put(
      `http://localhost:5000/api/auth/users/${editId}`,
      payload
    )
    fetchUsers()
  } else {
    await axios.post(
  "http://localhost:5000/api/auth/signup",
  form
)

fetchUsers()
  }

  setErrors({})

  setOpen(false)
  setEditId(null)

  setForm({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    username: "",
    password: "",
    contact: "",
    role: "",
    gender: "",
    status: "active",
  })
}

  const handleEdit = (u) => {
    setForm({
      firstName: u.firstName,
      lastName: u.lastName,
      age: u.age,
      email: u.email,
      username: u.username,
      password: "",
      contact: u.contact,
      role: u.role,
      gender: u.gender,
      status: u.status,
    })
    setEditId(u._id)
    setOpen(true)
  }

  const toggleStatus = async (id) => {

  try {

    await axios.patch(
      `http://localhost:5000/api/auth/users/${id}/status`
    )

    fetchUsers()

  } catch (err) {
    console.log(err)
  }
}

  return (
    <Box sx={{ p: 3, color: "white" }}>

      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 800 }}>
          Users
        </Typography>

        <Button onClick={() => setOpen(true)} variant="contained">
          Add User
        </Button>
      </Box>

      {/* FILTERS (FIXED VISIBILITY + LOOK LIKE SORT BUTTONS) */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>

        <TextField
          placeholder="Search users..."
          onChange={(e) => setSearch(e.target.value)}
          sx={{ input: { color: "white" }, width: 220 }}
        />

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel sx={{ color: "white" }}>Role</InputLabel>
          <Select value={role} onChange={(e) => setRole(e.target.value)} sx={{ color: "white" }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
            <MenuItem value="viewer">Viewer</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel sx={{ color: "white" }}>Gender</InputLabel>
          <Select value={gender} onChange={(e) => setGender(e.target.value)} sx={{ color: "white" }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel sx={{ color: "white" }}>Status</InputLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} sx={{ color: "white" }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* TABLE */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }}>Username</TableCell>
            <TableCell sx={{ color: "white" }}>Role</TableCell>
            <TableCell sx={{ color: "white" }}>Status</TableCell>
            <TableCell sx={{ color: "white" }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filtered.map((u) => (
            <TableRow key={u._id}>
              <TableCell sx={{ color: "white" }}>{u.firstName} {u.lastName}</TableCell>
              <TableCell sx={{ color: "white" }}>{u.email}</TableCell>
              <TableCell sx={{ color: "white" }}>{u.username}</TableCell>
              <TableCell sx={{ color: "white" }}>{u.role}</TableCell>

              <TableCell>
                <Chip
                  label={u.status === "active" ? "Active" : "Inactive"}
                  sx={{
                    background: u.status === "active" ? "#16a34a" : "#dc2626",
                    color: "white",
                    fontWeight: 700,
                  }}
                />
              </TableCell>

              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>

                  <Button size="small" onClick={() => handleEdit(u)}>
                    Edit
                  </Button>

                  <Button
                    size="small"
                    onClick={() => toggleStatus(u._id)}
                    color={u.status === "active" ? "error" : "success"}
                  >
                    {u.status === "active" ? "Disable" : "Activate"}
                  </Button>

                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#0d0d0d",
      p: 4,
      borderRadius: 4,
      width: 440,
      color: "white",
      boxShadow: "0 0 40px rgba(0,0,0,0.7)",
    }}
  >

    <Typography sx={{ mb: 3, fontWeight: 900, fontSize: 20 }}>
      {editId ? "Edit User" : "Add User"}
    </Typography>

    {[
      "firstName",
      "lastName",
      "age",
      "email",
      "username",
      "contact",
      "password",
    ]
.map((field) => (
      <TextField
      key={field}
      fullWidth
      label={field.toUpperCase()}
      value={form[field]}
      onChange={(e) =>
        setForm({ ...form, [field]: e.target.value })
      }
      error={!!errors[field]}
      helperText={errors[field]}
      sx={{
        mb: 2,
        input: { color: "white" },
        label: { color: "rgba(255,255,255,0.7)" },
        "& .MuiFormHelperText-root": {
          color: "#f87171",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(255,255,255,0.2)",
          },
          "&:hover fieldset": {
            borderColor: "#fff",
          },
        },
      }}
    />
    ))}

    {/* ROLE */}
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel sx={{ color: "rgba(255,255,255,0.7)" }}>Role</InputLabel>
      <Select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        sx={{ color: "white" }}
      >
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="editor">Editor</MenuItem>
        <MenuItem value="viewer">Viewer</MenuItem>
      </Select>
    </FormControl>

    {/* GENDER */}
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel sx={{ color: "rgba(255,255,255,0.7)" }}>Gender</InputLabel>
      <Select
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
        sx={{ color: "white" }}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </FormControl>

    {/* STATUS TOGGLE */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
      <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
        Status: {form.status}
      </Typography>

      <Switch
        checked={form.status === "active"}
        onChange={() =>
          setForm({
            ...form,
            status: form.status === "active" ? "inactive" : "active",
          })
        }
      />
    </Box>

    <Button
      fullWidth
      variant="contained"
      onClick={handleSave}
      sx={{
        background: "#fff",
        color: "#000",
        fontWeight: 800,
        "&:hover": { background: "#e5e5e5" },
      }}
    >
      {editId ? "Update User" : "Create User"}
    </Button>

  </Box>
</Modal>

    </Box>
  )
}

export default UsersPage