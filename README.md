# 🖥️ MNTCODES.COM [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/MedNT/portfoli-website-mntcodes)
Created with ❤️️ by [mntcodes.com](https://www.mntcodes.com)

CodeCraftr is my personal portfolio website, designed to showcase my projects, skills, and experiences as a software engineer. The website is built using **Next.js**, **React**, and modern UI components, styled with **TailwindCSS**. It's fully responsive and customizable, making it suitable for anyone looking to create their own portfolio.

## 🌐 Live Demo

Check out the live version of my portfolio: [Portfolio Website](https://www.mntcodes.com)

## ✨ Features

- **Modern UI**: Uses Radix UI components for a clean and accessible interface.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Projects Section**: Displays a list of my recent projects, with descriptions and links.
- **Interactive Skills Cloud**: Visualize skills using an interactive 3D skills cloud (powered by `react-icon-cloud`).
- **Theme Switcher**: Light and dark theme toggle using `next-themes`.
- **Markdown Support**: Blog posts and project descriptions can be written in Markdown and rendered with syntax highlighting using `react-markdown`, `remark`, and `rehype-pretty-code`.
- **Animation**: Smooth animations and transitions using `framer-motion`.

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Radix UI](https://www.radix-ui.com/)**: Accessible, high-quality UI components.
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-tooltip`
  - `@radix-ui/react-icons`
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Framer Motion](https://www.framer.com/motion/)**: For creating animations.
- **[react-markdown](https://github.com/remarkjs/react-markdown)**: To render Markdown.
- **[rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code)**: For syntax highlighting in code blocks.
- **[Lucide Icons](https://lucide.dev/)**: Beautiful icons for React.
- **[next-themes](https://github.com/pacocoursey/next-themes)**: Theme management for Next.js.
- **[Shiki](https://shiki.matsu.io/)**: Syntax highlighter used for Markdown rendering.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Combines conflicting Tailwind classes intelligently.

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management
- [Git](https://git-scm.com/) for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd portfolio-website
   ```

3. **Install dependencies**:
   If you are using `npm`:
   ```bash
   npm install
   ```
   Or with `yarn`:
   ```bash
   yarn install
   ```

4. **Run the project locally**:
   For development, start the local server:
   ```bash
   npm run dev
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
Then start the production server:
```bash
npm run start
```

## 🎨 Customization

You can customize this portfolio by:

- **Updating content**: Modify the `resume.tsx` file under `./src/data/` folder with your own projects, skills, and experience.
- **Styling**: TailwindCSS allows easy modification of styles. Update the `tailwind.config.js` file to change theme colors, fonts, etc.
- **Blog posts**: Write blog posts in Markdown and store them in the `posts` folder. They will be automatically rendered.

## 🐛 Reporting Issues & Contributions

Found a bug or want to contribute? Contributions are highly encouraged! Please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request and describe your changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## 🙏 Acknowledgements

- [Magic UI](https://magicui.design/) for their amazing UI library.
- [Visual Studio Code](https://code.visualstudio.com/) for being an amazing code editor.

---

## 💬 Contact

Feel free to reach out for any questions or suggestions!

[About Me](https://mntcodes.com) <br/>
[Twitter](https://x.com/NaciriTaoufik) <br/>
[LinkedIn](https://www.linkedin.com/in/mednt/) <br/>
[GitHub](https://github.com/MedNT) <br/>
[Blog](https://mntcode.substack.com/) 


---

> **Note**: This portfolio website is open-source and available on [GitHub](https://github.com/MedNT/portfoli-website-mntcodes). Contributions and suggestions are greatly appreciated!
