import {useRef} from 'react'
import {useHistory} from 'react-router-dom'

import './styles/styles.css'
import {Container, Form, Button, Row, Col, Nav} from 'react-bootstrap';
import {Navigation} from "./components/Navigation";

export function Dashboard() {

    return (
        <>
            <Navigation/>
            <span>Hoi es worked</span>
        </>
    );
}