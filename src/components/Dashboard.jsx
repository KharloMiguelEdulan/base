import { Container, Paper, Typography, Button} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
    return (
        <Container maxWidth='false' style={{ height: '100vh', backgroundColor: 'white' }}>
            <Paper  style={{
                backgroundColor: 'orange',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '650px',
                width: '1000px',borderRadius: '10px', border: 'none'
            }}>
                <img src='/n1.gif' alt='logo' width={1000} height={670} style={{ borderRadius: '10px', border: 'none' }}/>
                <Link to='/login'>
                    <Button variant="contained" color="secondary" type="submit" fullWidth size="large">
                        Logout
                    </Button>
                </Link>
            </Paper>
        </Container>
    )
}