import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  digitalmagic,
  blendersoftware,
  marvelous,
  maya,
  photoshop,
  substancepainter,
  zbrush,
  banshee_avatar_3,
  game_character_1,
  girl_2,
  head_1,
  head_spin,
  house_1,
  phone,
  japan_master_1,
  man_human_fusion_2,
  mosquito_robot_1,
  robot,
  saber_toothed_tiger,
  sci_fi_gun_1,
  snake,
  vinayagar,
  water_monster_2,
  mobile,
  backend,
  creator,
  web,

  
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "3D Modeling",
    icon: web,
  },
  {
    title: "3D Animation",
    icon: mobile,
  },
  {
    title: "3D Sculpting",
    icon: backend,
  },
  {
    title: "3D Rendering",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "ZBrush",
    icon: zbrush,
  },
  {
    name: "Blender",
    icon: blendersoftware,
  },
  {
    name: "Autodesk Maya",
    icon: maya,
  },
  {
    name: "Sunstance Painter",
    icon: substancepainter,
  },
  {
    name: "Marvelous Designer",
    icon: marvelous,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  
  
];

const experiences: TExperience[] = [
  {
    title: "Intern",
    companyName: "Digital Magic Visuals (I) Ltd",
    icon: digitalmagic,
    iconBg: "#383E56",
    date: "January 2024 - March 2024",
    points: [
      "Contributed to the project 'Whispers of the Past' during a 2-month internship.",
      "Demonstrated sincerity, hard work, and commitment while working on animation and 3D modeling tasks.",
      "Gained practical experience in 3D modeling and animation, collaborating with a professional team.",
      "Utilized industry-standard software such as Autodesk Maya in project workflows.",
    ],
  },
  
];


const projects: TProject[] = [
  {
    name: "Mosquito Robot - 3D Model",
    description:
      "Created a detailed 3D model of a mosquito robot, focusing on mechanical design and texturing.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Texturing",
        color: "green-text-gradient",
      },
      
    ],
    image: mosquito_robot_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/mosqito_robot",
  },
  {
    name: "Human Robot - 3D Model",
    description:
      "Modeled a realistic human robot, emphasizing detailed features and articulation",
    tags: [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
    ],
    image: robot,
    sourceCodeLink:  "https://github.com/ivijaykumar2005/3D_model/tree/main/robot",
  },
  {
    name: "3D model of game character",
    description:
      "Designed and modeled a detailed game character for interactive media.",
    tags: [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
    ],
    image: game_character_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/game_character",
  },
  {
    name: "Head Spin Dance - 3D Animation",
    description:
      "Created a dynamic head spin dance animation showcasing character movement and fluidity.",
    tags: 
    [
      {
        name: "Autodesk Maya",
        color: "blue-text-gradient",
      },
  
    ],
    image: head_spin,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_Animation/tree/main/head_spin_animation",
  },
  {
    name: "3D model of Vinayagar",
    description:
      "Modeled a detailed 3D representation of Vinayagar, focusing on traditional aesthetics",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: vinayagar,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/vinayagar",
  },
  {
    name: "3D model of human head",
    description:
      "Developed a realistic 3D model of a human head, emphasizing anatomical accuracy.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: head_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/head",
  },
  {
    name: "3D model of girl",
    description:
      "Created a detailed 3D model of a female character, focusing on character design and textures.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: girl_2,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/girl",
  },
  {
    name: "3D model of Water monster",
    description:
      "Designed a 3D model of a water monster, incorporating realistic water effects and textures.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: water_monster_2,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/water_monster",
  },
  {
    name: "3D model of Banshee Avatar",
    description:
      "Modeled a banshee avatar with intricate details and ethereal textures for visual impact",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: banshee_avatar_3,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/banshee_avatar",
  },
  {
    name: "3D model of snake",
    description:
      "Created a realistic 3D model of a snake, focusing on scales and movement dynamics.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: snake,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/snake",
  },
  {
    name: "3D model of Rotary dial hone",
    description:
      "Modeled a vintage rotary dial phone with detailed textures and historical accuracy",
    tags: 
    [
      {
        name: "Maya",
        color: "blue-text-gradient",
      },
      {
        name: "Substance Painter",
        color: "green-text-gradient",
      },
  
    ],
    image: phone,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/phone",
  },
  {
    name: "3D model of Sci-fi gun",
    description:
      "Developed a futuristic sci-fi gun model for gaming and interactive media",
    tags: 
    [
      {
        name: "Maya",
        color: "blue-text-gradient",
      },
  
    ],
    image: sci_fi_gun_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/sci_fi_gun",
  },
  {
    name: "3D model of House",
    description:
      "Designed a detailed 3D model of a house, including interior and exterior elements.",
    tags: 
    [
      {
        name: "Maya",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
  
    ],
    image: house_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/house",
  },
  {
    name: "3D model of Saber toothed tiger",
    description:
      " Created a realistic 3D model of a saber-toothed tiger, focusing on anatomical details",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
      {
        name: "Maya",
        color: "green-text-gradient",
      },
  
    ],
    image: saber_toothed_tiger,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/saber_toothed_tiger",
  },
  {
    name: "3D model of human and animal fusion",
    description:
      "Modeled a fusion of human and animal forms, showcasing creativity and advanced modeling skills.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: man_human_fusion_2,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/man_human_fusion",
  },
  {
    name: "3D model of Japan master",
    description:
      "Detailed 3D model of a wise Japanese martial arts master.",
    tags: 
    [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
  
    ],
    image: japan_master_1,
    sourceCodeLink: "https://github.com/ivijaykumar2005/3D_model/tree/main/japan%20master",
  },
  
];

export { services, technologies, experiences, projects };
