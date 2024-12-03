import { 
    FaReact, 
    FaNodeJs, 
    FaPython,
} from 'react-icons/fa';
import { 
    SiTypescript, 
    SiExpress, 
    SiPostgresql, 
    SiMongodb, 
    SiTailwindcss,
    SiFastapi,
    SiDjango,
    SiFlask 
} from 'react-icons/si';

export const TECH_ICONS = {
    react: <FaReact size={24} />,
    nodejs: <FaNodeJs size={24} />,
    mongodb: <SiMongodb size={24} />,
    typescript: <SiTypescript size={24} />,
    express: <SiExpress size={24} />,
    postgresql: <SiPostgresql size={24} />,
    tailwind: <SiTailwindcss size={24} />,
    python: <FaPython size={24} />,
    fastapi: <SiFastapi size={24} />,
    django: <SiDjango size={24} />,
    flask: <SiFlask size={24} />
} as const;

export type TechIconType = keyof typeof TECH_ICONS;

export const TECH_COLORS = {
    react: '#61DAFB',      // React blue
    nodejs: '#339933',     // Node.js green
    python: '#3776AB',     // Python blue
    django: '#092E20',     // Django dark green
    postgresql: '#336791', // PostgreSQL blue
    typescript: '#3178C6', // TypeScript blue
    express: '#000000',    // Express black
    tailwind: '#06B6D4',   // Tailwind cyan
    fastapi: '#009688',    // FastAPI teal
    flask: '#000000',      // Flask black
    mongodb: '#47A248',    // MongoDB green
} as const; 