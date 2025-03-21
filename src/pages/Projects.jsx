import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import donation from "../assets/projects/donation.png";
import currency from "../assets/projects/currency.jpeg";
import todo from "../assets/projects/Todo.png";
import Notes from "../assets/projects/notes.png";
import weather from "../assets/projects/weather.png";
import TicTac from "../assets/projects//tictac.png";

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Recent Top <strong className="yellow">Works </strong>
                </h1>
                <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={currency}
                            isBlog={false}
                            title="Currency-Convertor"
                            description="A simple and efficient **Currency Converter** app built with **React.js** that allows users to convert currencies in real-time. It fetches the latest exchange rates from an API and provides a seamless user experience with a clean and responsive interface. 🚀💰"
                            ghLink="https://github.com/Mr-Nikhil-jha/Currency-Convertor"
                            demoLink="https://currency-convertor-coral-five.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            isBlog={false}
                            title="Todo - list"
                            description="A sleek and intuitive **Todo List** app built with **React.js** to help you organize tasks efficiently. It allows users to add, edit, delete, and mark tasks as complete, ensuring better productivity with a smooth and responsive UI. ✅📝"
                            ghLink="https://github.com/Mr-Nikhil-jha/todo"
                            demoLink="https://task-add-list.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TicTac}
                            isBlog={false}
                            title="Tic tac Toe"
                            description="A classic **Tic-Tac-Toe** game built with **HTML, CSS, and JavaScript**, enhanced with **Firebase** for real-time multiplayer gameplay. Play with friends online, track moves instantly, and enjoy a smooth, interactive gaming experience. 🎮❌⭕"
                            ghLink="https://github.com/Mr-Nikhil-jha/online_tic_tac_Toe"
                            demoLink="https://mr-nikhil-jha.github.io/online_tic_tac_Toe//"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={donation}
                            isBlog={false}
                            title="Pay-Donation"
                            description="A simple and secure **Donation App** built with **HTML, CSS, and JavaScript**, integrated with **Razorpay (Test Mode)** for seamless payment processing. Users can contribute effortlessly while experiencing a smooth and responsive interface. 💖💰"
                            ghLink="https://github.com/Mr-Nikhil-jha/Pay-donation"
                            demoLink="https://pay-donation.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Notes}
                            isBlog={false}
                            title="Keep Notes"
                            description="A lightweight and user-friendly **Notes App** built with **HTML, CSS, and JavaScript**, using **Local Storage** to save notes permanently in the browser. Easily create, edit, and delete notes with a clean and responsive interface. 📝📌"
                            ghLink="https://github.com/Mr-Nikhil-jha/Notes"
                            demoLink="https://notes-save.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="Weather"
                            description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
                            ghLink="https://github.com/Mr-Nikhil-jha/react-weather"
                            demoLink="https://locateweather.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
