# MEGAHERTZ

Welcome to MEGAHERTZ!

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Description

MEGAHERTZ is a hardware-based IoT-based and Development-based project. It leverages a combination of C++, Node.js, React.js, and MongoDB to create a powerful and dynamic application. Whether you're a developer looking to contribute or a user exploring the features, this readme provides essential information to get you started.

## Technologies Used

The following technologies were used in the development of this project:

- **C++**: Used for creating a Web-server and interfacing with Arduino uno to measure power factor and interface with LCD-PANEL.
- **Node.js**: Used for the backend to login, signup,reset-password,forget,password and fetching the data from esp8266 wifi module.
- **React.js**:Used for Frontend
- **MongoDB**: Used for connecting with the database.

## Installation

To get started with MEGAHERTZ, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aayush1316/MegaHertz.git
   cd MegaHertz
2**Run the Application:**
   - After completing the above steps, you can now run your application. Execute the following commands in separate terminal windows:

     - **Run C++ Code:**
       ```bash
       Run in ARDUINO IDE installing packages of esp8266.
       ```

     - **Run Node.js Server:**
       ```bash
       cd server
       npm install
       npm run dev
       ```

     - **Run React.js App:**
       ```bash
       cd front-end
       npm install
       npm start
       ```
   Your node server should now be running at `http://localhost:8000` in your system.
   Your application should now be accessible at `http://localhost:3000` in your web browser.
## Usage
  This project is used for automation and in commercial buildings for energy efficiency.
