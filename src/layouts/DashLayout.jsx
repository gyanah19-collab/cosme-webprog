import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Tooltip,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'

const drawerWidth = 270

function DashLayout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const go = (path) => {
    navigate(path)
    setOpen(false)
  }

  const logout = () => {
    localStorage.removeItem('loggedIn')
    navigate('/auth/signin')
  }

  const menuItems = [
    {
      label: 'Overview',
      icon: <DashboardIcon />,
      path: '/dashboard',
    },
    {
      label: 'Reports',
      icon: <AssessmentIcon />,
      path: '/dashboard/reports',
    },
    {
      label: 'Users',
      icon: <GroupIcon />,
      path: '/dashboard/users',
    },
    {
      label: 'Back Home',
      icon: <HomeIcon />,
      path: '/home',
    },
  ]

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        background:
          'linear-gradient(180deg,#0b0b0b 0%, #111111 45%, #171717 100%)',
        color: '#fff',
        px: 2,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          px: 1,
        }}
      >
        <Avatar
          sx={{
            width: 46,
            height: 46,
            bgcolor: '#fff',
            color: '#000',
            fontWeight: 700,
          }}
        >
          G
        </Avatar>

        <Box>
          <Typography fontWeight={700}>Gilianne Cosme</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,.6)' }}>
            Premium Dashboard
          </Typography>
        </Box>
      </Box>

      <List sx={{ gap: 1, display: 'grid' }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path

          return (
            <ListItemButton
              key={item.path}
              onClick={() => go(item.path)}
              sx={{
                borderRadius: '16px',
                py: 1.3,
                bgcolor: active ? '#fff' : 'transparent',
                color: active ? '#000' : '#fff',
                transition: '.25s',
                '&:hover': {
                  bgcolor: active ? '#fff' : 'rgba(255,255,255,.08)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: active ? '#000' : '#fff',
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          )
        })}
      </List>

      <Box sx={{ mt: 'auto', pt: 4 }}>
        <ListItemButton
          onClick={logout}
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(255,255,255,.06)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,.12)',
            },
          }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Log Out" />
        </ListItemButton>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#050505' }}>
      {/* TOP BAR */}
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          bgcolor: 'rgba(0,0,0,.72)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          zIndex: 1400,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Open Dashboard">
              <IconButton onClick={() => setOpen(true)} sx={{ color: '#fff' }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>

            <Typography fontWeight={700}>
              Creative Dashboard
            </Typography>
          </Box>

          <Avatar sx={{ width: 34, height: 34 }}>G</Avatar>
        </Toolbar>
      </AppBar>

      {/* HOVER / POP SIDEBAR */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: drawerWidth,
            borderRight: '1px solid rgba(255,255,255,.08)',
            background: 'transparent',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* MAIN */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: '88px',
          px: { xs: 2, md: 4 },
          pb: 4,
          color: '#fff',
          background:
            'radial-gradient(circle at top right,#1c1c1c 0%,#0b0b0b 45%,#050505 100%)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default DashLayout