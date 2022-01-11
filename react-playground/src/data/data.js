export const homeInfo = [
  {
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
