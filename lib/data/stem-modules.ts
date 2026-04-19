/* ── STEM Modules Page Data ── AICRA India STEM Lab ───────── */

export interface StemProject {
  name: string;
  description: string;
}

export interface StemCategory {
  name: string;
  projects: StemProject[];
}

export interface GradeBand {
  id: string;
  label: string;
  slug: string;
  colorClass: string;
  tagline: string;
  description: string;
  categories: StemCategory[];
}

export const stemModulesData = {

  hero: {
    badge: "Official AICRA Collaboration",
    headline: "STEM Modules for Every Grade",
    subheadline: "Grade 1 to Grade 12 — Projects for Schools & Inter-Colleges",
    body: "MechEtron is an official collaborator with AICRA (All India Council for Robotics & Automation). These STEM project modules are part of the India STEM Lab (ISL) curriculum — designed to inspire students through hands-on Science, Technology, Engineering, and Math projects aligned with CBSE/ICSE standards.",
    ctas: [
      { label: "Explore Grade Modules", href: "#grade-modules" },
      { label: "Partner With Us", href: "/schools" },
    ],
  },

  aboutISL: {
    heading: "What is India STEM Lab?",
    body: "Under the India STEM Mission (ISM) Project, AICRA is setting up 2000 India STEM Labs in schools across India. The concept is established with the motto: 'Creating an eco-system where learners become inspired by Science, Technology, Engineering and Math; learn to make innovative projects along with their regular studies and get exposure to international competitions.' India STEM Lab mixes the creativity and curiosity of young students with the hands-on education aspects of STEM — with focus on robot building and science-based activities.",
    stats: [
      { number: "2000+", label: "STEM Labs across India" },
      { number: "Grade 1–12", label: "Complete coverage" },
      { number: "20+", label: "Technology domains" },
      { number: "CBSE/ICSE", label: "Syllabus integrated" },
    ],
  },

  objectives: [
    {
      role: "Students",
      icon: "🎓",
      description: "A platform to integrate STEM streams, build innovative projects, and compete internationally.",
    },
    {
      role: "Teachers",
      icon: "👩‍🏫",
      description: "Relate classroom concepts to real-life, develop affinity towards technology, and increase student motivation.",
    },
    {
      role: "Management",
      icon: "🏫",
      description: "School gets an integrated STEM Lab and global-standard robotics program.",
    },
    {
      role: "Parents",
      icon: "👨‍👩‍👧",
      description: "Instills core life skills — critical thinking, teamwork, and problem solving in children of all ages.",
    },
  ],

  benefits: [
    "Full Hardware Setup — 3D Printers, Robotics Kits",
    "Train the Trainer Program for Faculty",
    "Syllabus Integration with CBSE/ICSE",
    "Maintenance & Ongoing Support",
    "AICRA Certification for Students",
    "Access to District, National & International Competitions",
  ],

  techProgression: [
    { tech: "Non-Screen STEM Projects",      grades: "Grade 1–2" },
    { tech: "Basic Coding",                  grades: "Grade 1–4" },
    { tech: "Robotics Programming",          grades: "Grade 3–6" },
    { tech: "Basic Mobile Applications",     grades: "Grade 3–6" },
    { tech: "Medium Robotics",               grades: "Grade 5–6" },
    { tech: "Google Analytics",              grades: "Grade 7" },
    { tech: "Mobile Applications",           grades: "Grade 7–8" },
    { tech: "Internet of Things (IoT)",      grades: "Grade 7–9" },
    { tech: "3D Printing",                   grades: "Grade 7–10" },
    { tech: "Advance Coding",               grades: "Grade 7–12" },
    { tech: "Game Development",             grades: "Grade 8–12" },
    { tech: "Cloud Computing",              grades: "Grade 9–12" },
    { tech: "Drone / UAV",                  grades: "Grade 9–12" },
    { tech: "Cyber Security",               grades: "Grade 9–12" },
    { tech: "Machine Learning",             grades: "Grade 9–12" },
    { tech: "Neural Network",               grades: "Grade 9–12" },
    { tech: "Advance Robotics",             grades: "Grade 9–12" },
    { tech: "Artificial Intelligence",      grades: "Grade 11–12" },
    { tech: "AR / VR",                      grades: "Grade 11–12" },
    { tech: "Industry Automation",          grades: "Grade 11–12" },
    { tech: "Digital Twin",                 grades: "Grade 12" },
  ],

  gradeBands: [
    {
      id: "grade-1-2",
      label: "Grade 1 & 2",
      slug: "grade-1-2",
      colorClass: "green",
      tagline: "Non-Screen STEM Projects",
      description: "Hands-on physical activities that build STEM foundations without screens — bridges, solar ovens, water filters, and basic electronics.",
      categories: [
        {
          name: "Non-Screen STEM Projects",
          projects: [
            { name: "Paper Bridge Building", description: "Design and construct paper bridges. Test strength and load-bearing capacity using small weights." },
            { name: "Solar Oven Construction", description: "Build solar ovens from cardboard, aluminum foil, and plastic wrap to cook food using solar energy." },
            { name: "Balloon-Powered Cars", description: "Create balloon-powered cars using straws and wheels. Learn about propulsion and friction." },
            { name: "Magnetic Slime", description: "Explore magnetism and polymers by making magnetic slime using glue and iron filings." },
            { name: "Water Filtration System", description: "Design homemade filtration systems using sand, gravel, and coffee filters." },
            { name: "Weather Instruments", description: "Create homemade barometers, anemometers, and rain gauges to monitor weather." },
            { name: "Math Puzzles and Games", description: "Develop mathematical thinking through tangrams, Sudoku, and strategic board games." },
            { name: "DIY Volcano", description: "Create a volcanic eruption model. Explore the science of chemical reactions." },
            { name: "Mathematical Art", description: "Explore geometric patterns, tessellations, and symmetry through art projects." },
            { name: "Hydroponics System", description: "Set up a small hydroponic system for growing plants without soil." },
            { name: "Sound Energy & Buzzers", description: "Introduction to sound energy using buzzers and basic electronics." },
            { name: "Water Overflow Alarm", description: "Build a simple alarm triggered by water overflow." },
            { name: "The Party Doorbell", description: "Create a fun interactive doorbell project." },
            { name: "Secret Morse Codes", description: "Learn to encode and decode messages using Morse code." },
          ],
        },
      ],
    },
    {
      id: "grade-3-4",
      label: "Grade 3 & 4",
      slug: "grade-3-4",
      colorClass: "blue",
      tagline: "Basic Coding & Robotics",
      description: "Introduction to Arduino coding and beginner-level robotics. Students build line-followers, obstacle avoiders, and simple automation.",
      categories: [
        {
          name: "Basic Coding & Robotics Projects",
          projects: [
            { name: "LED Blinking with Arduino", description: "Use an Arduino board to create a simple LED blinking project. Teaches basics of programming and hardware." },
            { name: "Line-Following Robot", description: "Build a robot that follows a line using infrared sensors. Introduces sensors, motors, and control logic." },
            { name: "Obstacle-Avoidance Robot", description: "Construct a robot that navigates and avoids obstacles using ultrasonic sensors." },
            { name: "Light-Following Robot", description: "Create a robot that follows light sources using light sensors. Learn sensor input and motor control." },
            { name: "Remote-Controlled Robot", description: "Build a robot controlled via smartphone app or remote device. Involves wireless communication coding." },
            { name: "Morse Code Transmitter", description: "Program an Arduino to transmit Morse code messages using an LED or buzzer." },
            { name: "Temperature and Humidity Monitor", description: "Build a monitoring system with a digital display using Arduino or Raspberry Pi." },
            { name: "Digital Dice", description: "Create a digital dice using an LED matrix and microcontroller." },
            { name: "Music-Playing Robot", description: "Build a robot that plays music or sound effects using a speaker and microcontroller." },
            { name: "Smart Light Control", description: "Build a system that controls lights based on motion or light levels automatically." },
          ],
        },
      ],
    },
    {
      id: "grade-5-6",
      label: "Grade 5 & 6",
      slug: "grade-5-6",
      colorClass: "purple",
      tagline: "Advanced Robotics & Mobile Apps",
      description: "Intermediate robotics programming, drones, swarm robots, and first mobile app development using real programming tools.",
      categories: [
        {
          name: "Programmings & Advance Robotics Projects",
          projects: [
            { name: "Maze-Solving Robot", description: "Build a robot that autonomously navigates through a maze using pathfinding algorithms." },
            { name: "Voice-Controlled Robot", description: "Create a robot that responds to voice commands using speech recognition." },
            { name: "Vision-Based Object Tracking", description: "Develop a robot that follows objects using a camera and computer vision techniques." },
            { name: "Manually Controlled Drone", description: "Assemble a drone to perform flights including takeoff, landing, and GPS-based navigation." },
            { name: "Robotic Arm Control", description: "Write code to control a robotic arm's movement. Experiment with inverse kinematics." },
            { name: "Swarm Robotics", description: "Create a swarm of small robots that communicate and collaborate on tasks." },
            { name: "Telepresence Robot", description: "Build a remote-controlled robot with a camera and screen for remote operation." },
            { name: "Robot Soccer", description: "Develop a team of soccer-playing robots and program them to play autonomously." },
            { name: "Autonomous Racing Robot", description: "Build a small racing robot and program it to follow a track autonomously." },
            { name: "AI-Powered Robot", description: "Integrate AI techniques into a robot to enable it to learn and adapt to different tasks." },
          ],
        },
        {
          name: "Basic Mobile Applications Projects",
          projects: [
            { name: "To-Do List App", description: "Create a task management app with due dates, priority, and categories." },
            { name: "Flashcard App", description: "Build a flashcard app for learning new languages and vocabulary." },
            { name: "Calculator App", description: "Develop a basic calculator app performing arithmetic operations." },
            { name: "Weather App", description: "Fetch real-time weather data based on user location. Display forecasts and alerts." },
            { name: "Note-Taking App", description: "Create a note-taking app with organization and search functionality." },
          ],
        },
      ],
    },
    {
      id: "grade-7-8",
      label: "Grade 7 & 8",
      slug: "grade-7-8",
      colorClass: "teal",
      tagline: "IoT, 3D Printing & Advanced Robotics",
      description: "Internet of Things projects connecting real sensors to the cloud, 3D printing physical models, and advanced robotics with ROS.",
      categories: [
        {
          name: "Internet of Things (IoT) Projects",
          projects: [
            { name: "Smart Home Automation", description: "Control lights, thermostat, and appliances remotely via smartphone or voice commands." },
            { name: "Weather Station", description: "Build a weather station collecting temperature, humidity, and pressure data sent to a cloud server." },
            { name: "Plant Monitoring System", description: "Monitor soil moisture and send watering notifications automatically." },
            { name: "Home Security System", description: "Design a security system with motion sensors and cameras that sends alerts." },
            { name: "Smart Door Lock", description: "Create a smart door lock controllable via smartphone app or RFID tags." },
            { name: "Automated Pet Feeder", description: "Build an IoT-controlled pet feeder that dispenses food at scheduled times." },
            { name: "Waste Management System", description: "Develop a smart waste bin that detects fill level and notifies collection services." },
            { name: "IoT-Based Health Monitoring", description: "Track vital signs like heart rate and temperature. Send data to a mobile app." },
            { name: "Water Quality Monitoring", description: "Monitor water quality in a reservoir. Send alerts for contamination or abnormal levels." },
            { name: "Smart Irrigation System", description: "Adjust watering schedules based on weather forecasts and soil moisture levels." },
          ],
        },
        {
          name: "Advance Robotics Projects",
          projects: [
            { name: "Humanoid Robot Interaction", description: "Program a humanoid robot to interact with humans, recognize faces, and respond to voice." },
            { name: "ROS (Robot Operating System) Projects", description: "Use the Robot Operating System (ROS) for mapping and navigation projects." },
            { name: "Robotic Vacuum Cleaner", description: "Create a robot that autonomously navigates and cleans a room using path planning." },
            { name: "AI-Powered Robot", description: "Integrate ML or reinforcement learning into a robot for adaptive behavior." },
            { name: "Gesture-Controlled Robot", description: "Create a robot that responds to hand gestures using accelerometers or gesture recognition." },
          ],
        },
        {
          name: "3D Printing Projects",
          projects: [
            { name: "Custom Keychains", description: "Design and print personalized keychains with names, school logos, or unique shapes." },
            { name: "Miniature Landmarks", description: "3D print miniature versions of famous landmarks — combines history with technology." },
            { name: "Puzzle Cubes", description: "Design and print 3D puzzle cubes that require assembly. Builds spatial reasoning." },
            { name: "Desk Organizer", description: "Create custom desk organizers with various compartments." },
            { name: "Plant Pots", description: "Print unique plant pots experimenting with different shapes and sizes." },
            { name: "Solar System Models", description: "3D print a scale model of the solar system with accurately sized planets." },
          ],
        },
      ],
    },
    {
      id: "grade-9-10",
      label: "Grade 9 & 10",
      slug: "grade-9-10",
      colorClass: "orange",
      tagline: "Cloud Computing, Drones & Machine Learning",
      description: "Cloud-based application development, UAV/drone operations, machine learning models, and neural network fundamentals.",
      categories: [
        {
          name: "Cloud Computing Projects",
          projects: [
            { name: "Cloud-Based File Storage and Sharing", description: "Develop a web or mobile app for storing and sharing files in the cloud." },
            { name: "Online Collaboration Platform", description: "Build a platform enabling simultaneous work on documents by students and teachers." },
            { name: "Cloud-Based School Management System", description: "Streamline attendance, grade management, and teacher-student communication." },
            { name: "Cloud-Based Classroom Management", description: "Allow teachers to create, assign, and grade assignments online with student submissions." },
            { name: "Cloud-Based LMS", description: "Develop a Learning Management System with educational resources, quizzes, and course materials." },
            { name: "Cloud-Based Bookstore", description: "Create a platform for students to buy, sell, and exchange textbooks." },
            { name: "Cloud-Based Budget Tracker", description: "Design a budget tracking app recording expenses, income, and savings goals." },
            { name: "Cloud-Based Note-Taking App", description: "Develop a note-taking app that synchronizes notes across multiple devices." },
            { name: "Cloud-Based Project Management Tool", description: "Build a project management tool for school projects with task collaboration and deadlines." },
            { name: "Cloud-Based Virtual Labs", description: "Create a virtual lab environment where students perform scientific experiments online." },
          ],
        },
        {
          name: "UAV / Drone Projects",
          projects: [
            { name: "Drone Building and Assembly", description: "Build drones from scratch. Learn components, assembly, and safety precautions." },
            { name: "Aerial Photography and Videography", description: "Use camera-equipped drones for aerial photography and videography." },
            { name: "Drone Racing", description: "Build racing drones through obstacle courses. Promotes teamwork and problem-solving." },
            { name: "Environmental Monitoring", description: "Monitor air quality and temperature using sensors attached to drones." },
            { name: "Search and Rescue Simulation", description: "Program drones to search for and locate missing objects — demonstrating UAV life-saving applications." },
          ],
        },
        {
          name: "Machine Learning Projects",
          projects: [
            { name: "Predictive Text Generator", description: "Predict the next word or phrase using NLP techniques." },
            { name: "Sentiment Analysis for Social Media", description: "Analyze social media posts for positive, negative, or neutral sentiment." },
            { name: "Image Classification", description: "Develop a system that identifies objects in images." },
            { name: "Fake News Detector", description: "Build a system detecting fake news by analyzing content and credibility scoring." },
            { name: "Spam Email Filter", description: "Create a spam filter using machine learning text classification algorithms." },
            { name: "Predictive Healthcare", description: "Develop a model predicting a patient's risk of certain medical conditions." },
            { name: "Customer Churn Prediction", description: "Analyze customer data to predict which customers are likely to leave a service." },
            { name: "Music Recommendation System", description: "Build a system suggesting songs based on listening history." },
            { name: "Stock Price Prediction", description: "Predict stock prices using historical data and time series analysis." },
            { name: "Facial Emotion Recognition", description: "Develop a model recognizing emotions in facial expressions from images or webcam." },
          ],
        },
        {
          name: "Neural Network Projects",
          projects: [
            { name: "Handwritten Digit Recognition", description: "Create a neural network recognizing handwritten digits 0–9 from images." },
            { name: "Hand Gesture Recognition", description: "Develop a gesture recognition system using convolutional neural networks." },
            { name: "Voice Recognition System", description: "Build a voice-to-text transcription system using recurrent neural networks." },
            { name: "Object Detection in Images", description: "Detect and locate objects in images using YOLO or SSD models." },
            { name: "Chatbot Development", description: "Develop a chatbot for conversations using sequence-to-sequence models." },
            { name: "Predictive Text Generation", description: "Train an RNN or Transformer model to generate coherent text." },
          ],
        },
      ],
    },
    {
      id: "grade-11-12",
      label: "Grade 11 & 12",
      slug: "grade-11-12",
      colorClass: "red",
      tagline: "AI, AR/VR & Industry Automation",
      description: "Advanced Artificial Intelligence, augmented and virtual reality applications, and industrial automation systems with real-world engineering challenges.",
      categories: [
        {
          name: "Artificial Intelligence Projects",
          projects: [
            { name: "Chatbot Development", description: "Create a chatbot that holds conversations on various topics using Python." },
            { name: "Voice Recognition System", description: "Create a voice recognition system using speech recognition libraries and APIs." },
            { name: "Predictive Text Generator", description: "Build a predictive text generator suggesting next words or phrases." },
            { name: "Personalized Recommender System", description: "Design a system suggesting movies and books based on user preferences." },
            { name: "News Aggregator and Summarizer", description: "Develop a news aggregator using NLP and information retrieval." },
            { name: "Object Detection in Images", description: "Create a computer vision model detecting and locating objects in images." },
            { name: "Facial Recognition System", description: "Build a system identifying individuals from images or live video streams." },
            { name: "Autonomous Robot", description: "Build and program autonomous robots navigating and completing tasks using AI." },
            { name: "Predictive Analytics for School Data", description: "Use AI to analyze and predict trends in student performance or attendance." },
            { name: "AI for Environmental Monitoring", description: "Build AI systems monitoring air quality, wildlife tracking, and environmental data." },
          ],
        },
        {
          name: "AR / VR Projects",
          projects: [
            { name: "Virtual Museum Tour", description: "Create a VR experience taking users on a virtual tour of a museum." },
            { name: "AR History Lesson", description: "Develop an AR app overlaying historical information onto real-world locations." },
            { name: "VR Science Lab", description: "Build a virtual science laboratory for conducting experiments safely in VR." },
            { name: "AR Storytelling", description: "Create AR-enhanced storybooks where characters come to life with animations." },
            { name: "Virtual Field Trips", description: "Organize virtual field trips to historical and far-off destinations using VR headsets." },
            { name: "Anatomy and Biology VR", description: "Create VR models of the human body, cells, or organisms for biology lessons." },
          ],
        },
        {
          name: "Industry Automation Projects",
          projects: [
            { name: "Conveyor Belt Control System", description: "Create a mini conveyor belt with start-stop controls and object detection." },
            { name: "Automated Sorting System", description: "Build a system sorting objects by color, size, or other criteria using sensors." },
            { name: "Smart Home Automation", description: "Develop a smart home system controlling lights, fans, and appliances using IoT." },
            { name: "Robotic Arm Control", description: "Assemble and program a robotic arm to pick and place objects." },
            { name: "Traffic Light Control System", description: "Simulate a traffic intersection with working traffic lights and control system." },
            { name: "Automated Greenhouse", description: "Create a greenhouse system auto-monitoring temperature, humidity, and light." },
            { name: "Smart Irrigation System", description: "Develop an IoT-based irrigation system adjusting water flow by soil moisture." },
            { name: "Inventory Management System", description: "Design an automated inventory system tracking items using RFID or barcode scanners." },
            { name: "Solar Tracker", description: "Construct a solar tracker adjusting solar panels to follow the sun's path." },
            { name: "Waste Sorting Robot", description: "Build a robot that autonomously sorts recyclable and non-recyclable items." },
            { name: "CNC Machine Control", description: "Set up a CNC machine and program it to carve or engrave designs on materials." },
            { name: "Robotic Vacuum Cleaner", description: "Build a robotic vacuum cleaner navigating rooms while avoiding obstacles." },
            { name: "Smart Waste Bin", description: "Develop a smart waste bin that sorts and compacts trash automatically." },
          ],
        },
      ],
    },
  ] as GradeBand[],
};
