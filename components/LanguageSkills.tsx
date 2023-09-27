import React from 'react';

interface LanguageSkill {
    language: string;
    percentage: number;
}

const LanguageSkills: React.FC = () => {
    //define el percentage de cada idioma
    const languageSkills: LanguageSkill[] = [
        {
            language: 'English',
            percentage: 90,
        },
        {
            language: 'Spanish',
            percentage: 100,
        },
        {
            language: 'Frances',
            percentage: 70,
        }
    ];

    return (
        <div>
            <h2>En Idiomas</h2>
            {languageSkills.map((skill) => (
                <div key={skill.language} className='flex items-center mb-4'>
                    <h3 className='w-1/3'>{skill.language}</h3>
                    <div className="w-1/3">
                    <div className="bg-blue-500 h-4 rounded-full">
                        <div
                            className="h-4 bg-blue-800 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                        />
                        </div>
                    </div>
                    <span className="w-1/3 text-rigth"> {skill.percentage}%</span>
                </div>
            ))}
        </div>
    );
    };

export { LanguageSkills };