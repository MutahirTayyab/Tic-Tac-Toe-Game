                                              🎲 Tic Tac Toe Game 🎲

Welcome to the Tic Tac Toe Game project! This classic, timeless game has been crafted using HTML, CSS, and JavaScript for a fun, interactive experience. Challenge yourself or a friend in a game of X's and O's, built with responsive design, sleek visuals, and seamless gameplay.

🎮 Features

Player Vs Player: Play as Player X and Player O, taking turns to mark your spot on the board.

Win Detection: The game identifies winning combinations in real-time, celebrating the winner with a message.

Draw Notification: If all squares are filled and no player has won, the game detects a draw.

Reset Functionality: Start a fresh game anytime with a single click.

Dynamic Interface: Real-time updates and player notifications create an engaging experience.

🛠️ Technologies Used

HTML5: Game structure and layout.

CSS3: Styling, color schemes, button animations, and responsive design.

JavaScript: Game logic, win conditions, draw detection, and player interaction.

📂 Project Structure

|-- index.html           # Core HTML structure

|-- style.css            # Styles and animations for the UI

|-- app.js               # JavaScript for game logic and interactivity

🚀 How to Play

Select a Square: Player O starts the game. Each player selects an empty square to place their symbol (X or O).

Alternate Turns: Player O and Player X alternate turns until a player wins or the game ends in a draw.

Winning Patterns: The game checks for winning patterns and announces the winner.

Start a New Game: Use the "New Game" or "Reset" buttons to play again.

💻 Code Overview

HTML

Grid Layout: A 3x3 grid for the game board, using <button> elements inside a container.

Buttons: New Game and Reset Game buttons for control.

CSS

Styling: Smooth background, text colors, button hover effects, and animations for an engaging user experience.

Responsiveness: The game board adjusts to fit different screen sizes.

JavaScript

Core Logic: Tracks player turns, updates the board, and manages win/draw conditions.

Win Patterns: Checks the board against predefined win patterns.

Event Listeners: Interactivity with button clicks for gameplay and resetting.

🌟 Concepts Utilized

Array Management: Win patterns are stored as a 2D array, making the game logic modular and efficient.

DOM Manipulation: Dynamically updates the board, displays messages, and disables buttons as needed.

Functions and Callbacks: Modular functions manage game states like resetting, enabling/disabling buttons, and 
checking the winner.

📈 Future Improvements

AI Opponent: Add a mode to play against an AI.

Score Tracking: Implement scoreboards to track wins over multiple games.

Enhanced UI: Introduce animations for winning combinations and improved button styles.

🔄 Reset and New Game Functions

The Reset and New Game buttons allow players to restart with a clean board and enable game squares. These are connected with event listeners and the resetGame() function in JavaScript to bring the game back to its initial state.

📝 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it in your projects.

👨‍💻 Created By: Mutahir Tayyab

If you find this project helpful, don't forget to give it a ⭐ on GitHub!

🤝 Contributing

Interested in contributing? Feel free to fork the repository, create new features, or report issues. Let's make this game even more enjoyable!

Enjoy playing Tic Tac Toe, and happy coding!