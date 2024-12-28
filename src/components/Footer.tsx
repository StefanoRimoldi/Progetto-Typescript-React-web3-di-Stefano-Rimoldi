
import { FaReact, FaEthereum } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';


const Footer = () => {
    console.log("Footer is rendered");
    return (
        <footer className={`py-4 rounded-lg mb-8 p-4`}>

            <div className="text-center text-gray-400 flex flex-col items-center">

                <div className="mt-2">
                    <img
                        src="/images/SmartFarm.png"
                        alt="Logo"
                        className="h-8"
                    />
                </div>


                <p className="mt-4 text-sm text-gray-500">
                    Realizzato con React, TypeScript, e Tailwind CSS, sviluppato in Visual Studio Code.
                </p>


                <div className="flex space-x-4 mt-4 text-gray-400">
                    <FaReact className="text-2xl" title="React" />
                    <FaEthereum className="text-2xl" title="React" />
                    <SiTypescript className="text-2xl" title="TypeScript" />
                    <SiTailwindcss className="text-2xl" title="Tailwind CSS" />
                    <SiVisualstudiocode className="text-2xl" title="Visual Studio Code" />
                </div>
                <div className="text-center mt-6 text-sm text-gray-400">
                    <p>&copy; 2024 SmartFarm3.0</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
