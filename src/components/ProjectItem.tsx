import { TECH_ICONS, TechIconType, TECH_COLORS } from './TechIcons';
import { FaGithub, FaNpm } from 'react-icons/fa';

interface ProjectItemProps {
    name: string;
    description: string;
    technologies: TechIconType[];
    githubUrl?: string;  // Optional GitHub URL
    npmUrl?: string;     // Optional NPM URL
}

export function ProjectItem({ name, description, technologies, githubUrl, npmUrl }: ProjectItemProps) {
    const formatTechName = (tech: string) => {
        return tech.charAt(0).toUpperCase() + tech.slice(1);
    };

    const styles = {
        card: {
            // Remove background and border styles
        },
        title: {
            color: '#FDF0D5',  // Cream color
        },
        description: {
            color: '#FFFFFF',  // White color for description
        }
    };

    // Update the helper function to handle dark icons with background
    const needsLightBackground = (color: string) => {
        return color === '#000000' || color === '#092E20';  // Flask/Express (black) and Django (dark green)
    };

    return (
        <li className="text-center" style={styles.card}>
            <div className="flex items-center justify-center gap-4 mb-2">
                <h4 className="text-xl font-bold" style={styles.title}>{name}</h4>
                <div className="flex gap-2">
                    {githubUrl && (
                        <a href={githubUrl} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="hover:opacity-80 transition-opacity"
                           style={{ color: '#FFFFFF' }}>
                            <FaGithub size={24} />
                        </a>
                    )}
                    {npmUrl && (
                        <a href={npmUrl} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="hover:opacity-80 transition-opacity"
                           style={{ color: '#CB3837' }}>
                            <FaNpm size={24} />
                        </a>
                    )}
                </div>
            </div>
            <p className="mb-3" style={styles.description}>{description}</p>
            <div className="flex gap-2 justify-center">
                {technologies.map((tech, index) => (
                    <div 
                        key={index} 
                        className="w-6 h-6 transition-colors flex items-center justify-center"
                        title={formatTechName(tech)}
                        style={{ 
                            color: TECH_COLORS[tech],
                            backgroundColor: needsLightBackground(TECH_COLORS[tech]) ? '#FFFFFF' : 'transparent',
                            borderRadius: needsLightBackground(TECH_COLORS[tech]) ? '50%' : '0',
                            padding: needsLightBackground(TECH_COLORS[tech]) ? '2px' : '0'
                        }}
                    >
                        {TECH_ICONS[tech]}
                    </div>
                ))}
            </div>
        </li>
    );
} 