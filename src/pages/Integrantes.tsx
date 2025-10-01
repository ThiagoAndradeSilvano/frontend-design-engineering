import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface TeamMember {
    id: number;
    name: string;
    rm: string;
    turma: string;
    role: string;
    email: string;
    avatar: string;
    bio: string;
    skills: string[];
}

const Integrantes: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Diogo Cunha',
            rm: 'RM563654',
            turma: '2º Semestre',
            role: 'Desenvolvedor Full Stack',
            email: 'diogoabrao@gmail.com',
            avatar: 'DC',
            bio: 'Desenvolvedor full stack especializado em React, Node.js e sistemas de gestão hospitalar.',
            skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
        },
        {
            id: 2,
            name: 'Thiago Andrade',
            rm: 'RM562493',
            turma: '2º Semestre',
            role: 'Desenvolvedor Frontend',
            email: 'thiago.silvano369@gmail.com',
            avatar: 'TA',
            bio: 'Especialista em desenvolvimento frontend com foco em interfaces de usuário responsivas e acessíveis.',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX']
        },
        {
            id: 3,
            name: 'Gabriel Neris',
            rm: 'RM564093',
            turma: '2º Semestre',
            role: 'Desenvolvedor Backend',
            email: 'gn.losano@gmail.com',
            avatar: 'GN',
            bio: 'Desenvolvedor backend com experiência em APIs REST, bancos de dados e integração de sistemas.',
            skills: ['Node.js', 'PostgreSQL', 'API REST', 'Docker']
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa Equipe</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Conheça os profissionais dedicados que tornaram o HC Connect uma realidade
                        </p>
                    </div>
                </section>

                {/* Team Stats */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">{teamMembers.length}</div>
                                <div className="text-gray-600">Membros da Equipe</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                                <div className="text-gray-600">Especialidades</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                <div className="text-gray-600">Dedicados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                <div className="text-gray-600">Disponibilidade</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Members */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Conheça Nossa Equipe
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Uma equipe multidisciplinar de profissionais apaixonados por tecnologia e saúde
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        {/* Avatar */}
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                            {member.avatar}
                                        </div>

                                        {/* Member Info */}
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>RM: {member.rm}</p>
                                                <p>Turma: {member.turma}</p>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-gray-600 text-sm mb-4 text-center">
                                            {member.bio}
                                        </p>

                                        {/* Skills */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</h4>
                                            <div className="flex flex-wrap gap-1 justify-center">
                                                {member.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="text-center">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Nossos Valores como Equipe
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Colaboração</h3>
                                    <p className="text-gray-600">
                                        Trabalhamos juntos para alcançar objetivos comuns, compartilhando conhecimento e apoiando uns aos outros.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                                    <p className="text-gray-600">
                                        Buscamos constantemente novas soluções e melhorias para entregar o melhor produto possível.
                                    </p>
                                </div>
                                <div className="p-6">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
                                    <p className="text-gray-600">
                                        Comprometidos com a excelência em cada linha de código e cada decisão de design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Integrantes;