<h1 align="center">
  <a href="#">Racism Zero</a>
</h1>

<h3 align="center">
  Project that aims to spread the story of some anti-racist personalities
</h3>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> •  
 <a href="#author">Author</a>
</p>


## About

Racism Zero - School project of the subject of the trail of digital technologies of philosophy where we address the stories of great anti-racist personalities

---

## Features

- [x] Request personalities from a CMS and list them
- [x] Dynamic routing for each requested personality
- [x]	Responsive Design

---

## Layout

### Homepage
<img src="https://github.com/Artur-Poffo/Racism-Zero/blob/main/public/README/Home.png?raw=true" alt="Print of Homepage" />

### Personalities List Page
<img src="https://github.com/Artur-Poffo/Racism-Zero/blob/main/public/README/Personalities.png?raw=true" alt="Print of Personalities List Page" />

### Personality Page Layout
<img src="https://github.com/Artur-Poffo/Racism-Zero/blob/main/public/README/Personality.png?raw=true" alt="Print of Personality Page Layout" />


---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

This project also uses aCMS called [hygraph](https://hygraph.com/), create your account and create a project for free, you will need to save the information.

#### Running the project

```bash
# Clone this repository
$ git clone https://github.com/Artur-Poffo/Racism-Zero.git

# Access the project folder cmd/terminal
$ cd Racism-Zero

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The server will start at port: 3333 - go to http://localhost:3333
```

**But, before running perfectly you must add an environment variable**

On root directory, create a `.env.local` file:

```bash
# Hygraph
CONTENT_API="Insert here your URL of hygraph CMS"
```

---

## Tech Stack

The following tools were used in the construction of the project:

- React.js
- Next.js
- Typescript
- Framer-Motion (Lib for animations)
- Tailwind CSS (Lib for styles)
- React-Markdown (Lib to transpile markdown on HTML)
- graphql + graphql-request (To make requests to hygraph CMS)

> See the file  [package.json](https://github.com/Artur-Poffo/Hacking-News/blob/main/package.json)

---

## Author

- _**Artur Poffo - Developer**_

[![Linkedin Badge](https://img.shields.io/badge/-Artur-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arturpoffo/)](https://www.linkedin.com/in/arturpoffo/)
[![Gmail Badge](https://img.shields.io/badge/-arturpoffop@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:arturpoffop@gmail.com)

---