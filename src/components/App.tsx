import { ProjectItem } from './ProjectItem'
import { ExperienceItem } from './ExperienceItem'
import { FaLinkedin, FaGithub, FaPython, FaReact } from 'react-icons/fa'
import '../styles/colors.css'

const styles = {
  container: {
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-text)',
  },
  header: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text)',
  },
  button: {
    backgroundColor: 'var(--color-accent)',
    color: 'var(--color-text-inverse)',
  },
  sectionHeader: {
    color: '#C1121F',
  }
}

function App() {
    return (
        <>
            <div className='min-h-screen mx-4 md:mx-16 lg:mx-96 font-mono' style={styles.container}>
                <header className='text-center p-6' style={styles.header}>
                    <div className="flex justify-center items-center">
                        <h1 className='text-3xl md:text-5xl antialiased font-extrabold tracking-wider hover:scale-105 transition-transform duration-300 uppercase scale-125 transform-gpu' style={{ color: 'var(--color-yellow)' }}>
                            Abdeljalal
                        </h1>
                    </div>
                    <h2 className='text-balance py-5 text-2xl antialiased' style={{ color: 'var(--color-cream)' }}>
                        <span className='mr-2' aria-hidden='true'>&lt;</span>
                        Software Developer
                        <span className='ml-2' aria-hidden='true'>/&gt;</span>
                    </h2>
                </header>
                <main>
                    <section className='w-full flex flex-col 2xl:flex-row items-center p-4 md:p-8'>
                        <picture className="w-full 2xl:w-1/2 px-4 2xl:px-12 order-1 2xl:order-2">
                            <img 
                                className='dark:brightness-100 drop-shadow-xl brightness-125 w-full mx-auto mask-image-fade-up' 
                                src="/assets/chill-guy.png" 
                                alt="" 
                            />
                        </picture>
                        <section className="w-full 2xl:w-1/2 order-2 2xl:order-1 mt-8 2xl:mt-0">
                            <h3 className='text-balance text-3xl text-center mb-4 font-bold' style={styles.sectionHeader}>
                                Experience
                            </h3>
                            <section className="text-center">
                                <ul className="space-y-6 list-none">
                                    <ExperienceItem 
                                        startDate={new Date(2023, 0)}
                                        company="TechCorp Solutions"
                                        description="Led development of microservices architecture, improving system scalability by 40%. Mentored junior developers and implemented CI/CD pipelines."
                                    />
                                    <ExperienceItem 
                                        startDate={new Date(2021, 2)}
                                        endDate={new Date(2022, 11)}
                                        company="DataFlow Systems"
                                        description="Developed and maintained cloud-native applications using React and Node.js. Reduced application load time by 60% through optimization."
                                    />
                                    <ExperienceItem 
                                        startDate={new Date(2019, 5)}
                                        endDate={new Date(2021, 1)}
                                        company="InnovateSoft"
                                        description="Built responsive web applications and RESTful APIs. Implemented automated testing, achieving 90% code coverage."
                                    />
                                    <ExperienceItem 
                                        startDate={new Date(2018, 7)}
                                        endDate={new Date(2019, 4)}
                                        company="WebTech Solutions"
                                        description="Collaborated on full-stack development projects using TypeScript and PostgreSQL. Integrated third-party APIs and improved user authentication system."
                                    />
                                </ul>
                            </section>
                            <div className="flex justify-center mt-4">
                                <a href="https://linkedin.com" 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   className="font-bold py-2 px-4 rounded transition duration-200 flex items-center"
                                   style={{ backgroundColor: 'var(--color-prussian-blue)', color: 'var(--color-yellow)' }}>
                                    Connect on LinkedIn
                                    <FaLinkedin size={16} className="ml-2" style={{ color: '#0A66C2' }} />
                                </a>
                            </div>
                        </section>
                    </section>
                    <section className="p-4 md:p-8">
                        <h3 className='text-balance text-3xl text-center mb-8 font-bold' style={styles.sectionHeader}>
                            Projects
                        </h3>
                        <ul className="space-y-8">
                            <ProjectItem 
                                name="E-commerce Platform"
                                description="Full-stack e-commerce solution with real-time inventory management"
                                technologies={['react', 'python', 'django', 'postgresql']}
                                githubUrl="https://github.com/username/e-commerce"
                            />
                            <ProjectItem 
                                name="Task Management API"
                                description="RESTful API for task management with authentication and role-based access"
                                technologies={['typescript', 'fastapi', 'postgresql']}
                                githubUrl="https://github.com/username/task-api"
                                npmUrl="https://www.npmjs.com/package/task-api"
                            />
                            <ProjectItem 
                                name="Weather Dashboard"
                                description="Real-time weather monitoring dashboard with historical data analysis"
                                technologies={['react', 'python', 'flask', 'mongodb']}
                            />
                        </ul>
                        <div className="flex justify-center mt-8">
                            <a href="https://github.com/username" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="font-bold py-2 px-4 rounded transition duration-200 flex items-center"
                               style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-oxford-blue-dark)' }}>
                                View on GitHub
                                <FaGithub size={16} className="ml-2" style={{ color: '#FFFFFF' }} />
                            </a>
                        </div>
                    </section>
                    
                    <section className="p-4 md:p-8 mx-2 md:mx-8">
                        <h3 className='text-balance text-3xl text-center mb-6 font-bold' style={styles.sectionHeader}>
                            About Me
                        </h3>
                        <div className="max-w-2xl mx-auto space-y-8 md:space-y-3 text-base md:text-lg text-center">
                            {/* Coding with section */}
                            <div className="space-y-4 md:flex md:items-center md:justify-center md:gap-3 md:space-y-0">
                                <p className="font-semibold" style={{ color: '#FDF0D5' }}>
                                    🚀 Coding with:
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="flex items-center gap-2" style={{ color: '#FFFFFF' }}>
                                        <FaPython style={{ color: '#3776AB' }} size={20} />
                                        Python
                                    </span>
                                    <span className="flex items-center gap-2" style={{ color: '#FFFFFF' }}>
                                        <FaReact style={{ color: '#61DAFB' }} size={20} />
                                        React
                                    </span>
                                </div>
                            </div>

                            {/* Working at section */}
                            <div className="space-y-4 md:flex md:items-center md:justify-center md:gap-3 md:space-y-0">
                                <p className="font-semibold" style={{ color: '#FDF0D5' }}>
                                    💼 Working at:
                                </p>
                                <p style={{ color: '#FFFFFF' }}>TechCorp Solutions</p>
                            </div>

                            {/* Location section */}
                            <div className="space-y-4 md:flex md:items-center md:justify-center md:gap-3 md:space-y-0">
                                <p className="font-semibold" style={{ color: '#FDF0D5' }}>
                                    📍 Location:
                                </p>
                                <p style={{ color: '#FFFFFF' }}>Murcia, Spain</p>
                            </div>

                            {/* Social links remain unchanged */}
                            <div className="flex justify-center gap-4 mt-6">
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="transition-colors"
                                    style={{ color: '#0A66C2' }}
                                >
                                    <FaLinkedin style={{ color: '#0A66C2' }} size={24} />
                                </a>
                                <a 
                                    href="https://github.com/username" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="transition-colors"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <FaGithub style={{ color: '#FFFFFF' }} size={24} />
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default App
