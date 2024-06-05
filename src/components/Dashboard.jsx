import { Container, Paper, Typography, Button} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <Container maxWidth='false' style={{ height: '100vh', backgroundColor: 'black' }}>
            <Paper  style={{
                backgroundColor: 'orange',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '650px',
                width: '1000px'
            }}>
                <Typography variant="h4" align="center">
                    Dashboard
                </Typography>
                <img src='/n1.gif' alt='logo' width={800} height={600} />
                <Link to='/login'>
                    <Button variant="contained" color="secondary" type="submit" fullWidth size="large">
                        Logout
                    </Button>
                </Link>
            </Paper>
        </Container>
    )
}