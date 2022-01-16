import Nelson from '../images/IMG_2260.JPG'

export const homeInfo = [
  {
    img: Nelson,
    header: 'Hello, World!',
    paragraph:
      'A young full-stack developer who is also a currect computer science major enrolled in a broad spectrum of managing information systems classes. Experienced in assembly language programming and object-oriented design, with an emphasis on data structures and algorithm analysis.',
    skillsTitle: 'Certified skills: ',
    skills: [
      {
        value: 'HTML',
      },
      {
        value: 'CSS',
      },
      {
        value: 'JavaScript',
      },
      {
        value: 'PHP',
      },
      {
        value: 'MySQL',
      },
      {
        value: 'C++',
      },
      {
        value: 'ReactJS',
      },
    ],
    recommendationTitle: 'Received Recommendations:',
    recommendation:
      "I worked with Charles on multiple projects during our time in Bootcamp. He is a quick study and a willing teacher. Many times, I would reach out to him for an explanation of concepts and review of my code. During our projects, he demonstrated problem-solving and a team-first approach. For one project we collaborated to complete a full backend ourselves. Another project he took on the challenge of working multiple external APIs into the project seamlessly. From my experience collaborating with Charles, he has a strong grasp on full stack development concepts and ;has shown the ability to be an excellent communicator. When the 'going got touch' during our projects, he dug in and hit deadlines. I've enjoyed my time collaborating with Charles and would work with him on future projects.",
    job: '-Senior Sales Engineer at AppDynamics',
  },
]

export const contactInfo = [
  {
    header: 'Contact Me',
    formInputs: [
      {
        type: 'text',
        name: 'firstname',
        id: 'fname',
        required: true,
        text: 'First Name: ',
      },
      {
        type: 'text',
        name: 'lastname',
        id: 'lname',
        required: true,
        text: 'Last Name: ',
      },
      {
        type: 'tel',
        name: 'phone',
        id: 'phone',
        placeholder: 'Format: 123-456-7890',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
        text: 'Phone: ',
        required: false,
      },
      {
        type: 'email',
        name: 'email',
        id: 'email',
        required: true,
        text: 'Email: ',
      },
      {
        type: 'textarea',
        name: 'message',
        id: 'messge',
        required: true,
        text: 'Message: ',
      },
    ],
  },
]

export const projectInfo = [
  {
    title: 'Portfolio Website:',
    img: Nelson,
    link: 'https://github.com/cmattrox/ReactPlayground',
    text:
      "This is just some test text. I could have used lorem ipsum text but this will also work. I love my girlfriend so very much and I love being at her place where it is just the two of us. It's like we are living together, which I just can't wait to do. This is just supposed to be my portfolio page, it isn't the nicest looking but I am pretty proud of the technologies used and how it is built. I am not the most creative but I am really good at building out what needs to be done. So if you give me a design or picture and say this is what I want I will make it almost identical",
    technologies: [
      {
        title: 'React',
      },
      {
        title: 'TailwindCSS',
      },
      {
        title: 'NPM',
      },
      {
        title: 'JQuery',
      },
      {
        title: 'Email.JS',
      },
      {
        title: 'FontAwesome',
      },
      {
        title: 'Github Pages',
      },
      {
        title: 'PostCSS',
      },
      {
        title: 'Autoprefixer',
      },
      {
        title: 'Craco',
      },
    ],
  },
  {
    title: 'Another Website',
    img: Nelson,
    link: 'https://github.com/cmattrox/ReactPlayground',
    text:
      "This is just some test text. I could have used lorem ipsum text but this will also work. I love my girlfriend so very much and I love being at her place where it is just the two of us. It's like we are living together, which I just can't wait to do. This is just supposed to be my portfolio page, it isn't the nicest looking but I am pretty proud of the technologies used and how it is built. I am not the most creative but I am really good at building out what needs to be done. So if you give me a design or picture and say this is what I want I will make it almost identical",
    technologies: [
      {
        title: 'React',
      },
      {
        title: 'TailwindCSS',
      },
      {
        title: 'NPM',
      },
      {
        title: 'JQuery',
      },
      {
        title: 'Email.JS',
      },
      {
        title: 'FontAwesome',
      },
      {
        title: 'Github Pages',
      },
      {
        title: 'PostCSS',
      },
      {
        title: 'Autoprefixer',
      },
      {
        title: 'Craco',
      },
    ],
  },
  {
    title: 'Last Website',
    img: Nelson,
    link: 'https://github.com/cmattrox/ReactPlayground',
    text:
      "It's like we are living together, which I just can't wait to do. This is just supposed to be my portfolio page, it isn't the nicest looking but I am pretty proud of the technologies used and how it is built. I am not the most creative but I am really good at building out what needs to be done. So if you give me a design or picture and say this is what I want I will make it almost identical",
    technologies: [
      {
        title: 'FontAwesome',
      },
      {
        title: 'Github Pages',
      },
      {
        title: 'PostCSS',
      },
      {
        title: 'Autoprefixer',
      },
      {
        title: 'Craco',
      },
    ],
  },
]

export const experienceInfo = [
  {
    header: 'Experience',
    experience: [
      {
        title: 'International Academy of Science (Full-Stack Developer):',
        time: 'September 2021 - Current',
        description:
          "I do all sorts of stuff. I work a lot on the back end and front end. This job is so much fun. I hope Kathryn loves how poorly this is written. I didn't do it on purpose that's for sure. I think I am going to add a bottom border to each one of these entries.",
      },
      {
        title:
          "Metropolitan Community College (Associate's in Computer Science):",
        time: 'January 2020 - May 2022',
        description:
          "I do all sorts of stuff. I work a lot on the back end and front end. This job is so much fun. I hope Kathryn loves how poorly this is written. I didn't do it on purpose that's for sure. I think I am going to add a bottom border to each one of these entries.",
      },
      {
        title: 'University of Kansas (Full-Stack Bootcamp):',
        time: 'May 2018 - October 2018',
        description:
          "I do all sorts of stuff. I work a lot on the back end and front end. This job is so much fun. I hope Kathryn loves how poorly this is written. I didn't do it on purpose that's for sure. I think I am going to add a bottom border to each one of these entries.",
      },
    ],
  },
]
