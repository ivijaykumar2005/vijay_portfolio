type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vijay kumar | 3D Modeler",
    fullName: "Vijay Kumar",
    email: "vijaywork2005@gmail.com",
  },
  hero: {
    name: "Vijay Kumar",
    p: ["I create 3D models, 3D animation,and 3D sculpting"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Motivated Animation Diploma graduate with a solid foundation in 3D modeling and animation. Skilled in
        industry-standard software like Maya, ZBrush, Blender, and Adobe Photoshop. I am eager to contribute technical proficiency,
        creativity, and a passion for visual storytelling to a dynamic team in animation and 3D modeling. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through 
        real-world examples of my work. Each project is briefly described 
        with accompanying screenshots and links to the original files. 
        These examples highlight my ability to work with various 
        software and manage projects efficiently.`,
    },
  },
};
