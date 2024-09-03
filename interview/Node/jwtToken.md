# Here we are showing step by step how to implement JWT(Json Web Token)

* At backend Side

1. Dependencies:

        mkdir jwt-backend
        cd jwt-backend
        npm init -y
        npm install express mongoose bcrypt jsonwebtoken cors



2. User Schema (backend/models/user.js):

        const mongoose = require("mongoose");
        const bcrypt = require("bcrypt");

        const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        tokens: [
            {
            token: {
                type: String,
                required: true,
            },
            },
        ],
        });

        userSchema.methods.verifyPassword = async function (password) {
        const user = this;
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
        };

        const User = mongoose.model("User", userSchema);

        module.exports = User;


3. Setting up JWT (backend/utils/jwtHelper.js):

        const jwt = require('jsonwebtoken');
        const SECRET_KEY = "YOUR_SECRET_KEY";  // Store this securely!
        const generateToken = (user) => {
            return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
                expiresIn: '1h'
            });
        };
        const verifyToken = (token) => {
            return jwt.verify(token, SECRET_KEY);
        };
        module.exports = { generateToken, verifyToken };


4. Setting up Routes (backend/routes/auth.js):

        const express = require("express");
        const jwt = require("jsonwebtoken");
        const User = require("../models/user");
        const router = express.Router();
        const bcrypt = require("bcrypt");

        router.post("/login", async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) return res.status(400).send("Invalid username or password.");

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword)
            return res.status(400).send("Invalid username or password.");

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        res.send({ token });
        });

        router.post("/register", async (req, res) => {
        try {
            const { username, password } = req.body;

            const existingUser = await User.findOne({ username });
            if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = new User({
            username,
            password: hashedPassword,
            });

            const savedUser = await user.save();
            res.json({
            message: "User registered successfully",
            userId: savedUser._id,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
        });

        module.exports = router;


5. Server Configuration (backend/server.js):

        const express = require("express");
        const mongoose = require("mongoose");
        const authRoutes = require("./routes/auth");
        const cors = require("cors"); // Import the CORS middleware
        require("dotenv").config();

        const app = express();
        const PORT = 3001;

        mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB", err);
        });

        app.use(cors()); // Use CORS middleware to allow requests from the frontend
        app.use(express.json());
        app.use("/api/auth", authRoutes); // All the routes defined in auth.js will be prefixed with /api/auth

        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });


6. On frontend : LoginForm Component (frontend/components/Login.js):

        import React, { useState, useContext } from "react";
        import axios from "axios";
        import { AuthContext } from "./AuthContext";
        import { useNavigate } from "react-router-dom";

        const Login = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
        const { setToken } = useContext(AuthContext);
        const navigate = useNavigate();
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            const response = await axios.post("/api/auth/login", {
                username,
                password,
            });
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
            } catch (error) {
            console.error("Authentication failed:", error);
            setToken(null);
            localStorage.removeItem("token");
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data); // Set the error message if present in the error response
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
            }
        };

        return (
            <div>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
            <form onSubmit={handleSubmit}>
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
            </div>
        );
        };

        export default Login;        


7. Authentication Context Component (frontend/components/AuthContext.js):

        import React, { createContext, useState, useEffect } from "react";

        export const AuthContext = createContext();

        export const AuthProvider = ({ children }) => {
        const [token, setToken] = useState(null);
        const [loading, setLoading] = useState(true); 

        useEffect(() => {
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
            setLoading(false); 
        }, []);

        return (
            <AuthContext.Provider value={{ token, setToken, loading }}>
            {children}
            </AuthContext.Provider>
        );
        };


8. Dashboard Protected Component (frontend/components/Dashboard.js):

        import { useContext } from "react"; 
        import { AuthContext } from "./AuthContext";
        import { Navigate } from "react-router-dom"; 

        function Dashboard() {
        const { token, loading } = useContext(AuthContext);
        if (loading) {
            return null;
        }

        if (!token) {
            return <Navigate to="/login" replace />;
        }

        return <h1>Dashboard: Protected Content Here</h1>;
        }

        export default Dashboard;
