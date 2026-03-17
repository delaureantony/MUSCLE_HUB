document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".bgtext");
    text.classList.add("animate");
});
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", (event) => {
        event.preventDefault();
        const muscleGroup = option.textContent.toLowerCase().replace(" & ", "-").replace(" ", "");
        fetchWorkoutImages(muscleGroup);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const gifContainer = document.querySelector(".svgs");

    function fetchWorkoutImages(muscleGroup) {
        fetch(`http://localhost:5000/api/workouts/${muscleGroup}`)
            .then(response => response.json())
            .then(data => {
                gifContainer.innerHTML = ""; // Clear previous images
                data.gifs.forEach(gif => {
                    const img = document.createElement("img");
                    img.src = `images/${gif}`; // Update with your actual image path
                    img.alt = "Workout GIF";
                    img.width = 200;
                    gifContainer.appendChild(img);
                });
            })
            .catch(error => console.error("Error fetching workout images:", error));
    }

    // Example: Load back workout images on page load
    fetchWorkoutImages("back");
});
const workouts = {
    back: {
        exercises: ["Pull-ups", "Lat Pulldown", "Deadlifts"],
        gifs: ["back1.gif", "back2.gif", "back3.gif"]
    },
    chest: {
        exercises: ["Bench Press", "Push-ups", "Chest Fly"],
        gifs: ["chest1.gif", "chest2.gif", "chest3.gif"]
    },
    arms: {
        exercises: ["Bicep Curls", "Triceps Dips", "Hammer Curls"],
        gifs: ["arms1.gif", "arms2.gif", "arms3.gif"]
    },
    legs: {
        exercises: ["Squats", "Lunges", "Leg Press"],
        gifs: ["legs1.gif", "legs2.gif", "legs3.gif"]
    },
    shoulders: {
        exercises: ["Shoulder Press", "Lateral Raises", "Front Raises"],
        gifs: ["shoulder1.gif", "shoulder2.gif", "shoulder3.gif"]
    }
};

// API to get workout details including GIFs
app.get("/api/workouts/:muscleGroup", (req, res) => {
    const muscleGroup = req.params.muscleGroup.toLowerCase();
    const data = workouts[muscleGroup] || { exercises: ["No workouts found"], gifs: ["default.gif"] };
    res.json(data);
});
app.use(express.static("images"));
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", (event) => {
        event.preventDefault();
        const muscleGroup = option.textContent.toLowerCase().replace(" & ", "-").replace(" ", "");
        fetchWorkoutImages(muscleGroup);
    });
});
