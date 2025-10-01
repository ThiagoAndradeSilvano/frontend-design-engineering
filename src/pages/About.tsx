import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o HC Connect</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Conectando tecnologia e saúde para um futuro mais eficiente
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                Nossa Missão
                            </h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-lg text-gray-600 mb-6">
                                        O HC Connect é um sistema integrado de gestão hospitalar desenvolvido 
                                        especificamente para o Hospital das Clínicas da Faculdade de Medicina 
                                        da Universidade de São Paulo (FMUSP).
                                    </p>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Nossa missão é revolucionar a gestão hospitalar através da tecnologia, 
                                        proporcionando ferramentas inovadoras que conectam profissionais de saúde, 
                                        pacientes e administradores em uma plataforma unificada.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-8 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-blue-800">Nossos Valores</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-blue-600 mr-3">✓</span>
                                            <span className="text-gray-700">Excelência em atendimento</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-600 mr-3">✓</span>
                                            <span className="text-gray-700">Inovação tecnológica</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-600 mr-3">✓</span>
                                            <span className="text-gray-700">Segurança e privacidade</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-600 mr-3">✓</span>
                                            <span className="text-gray-700">Acessibilidade universal</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            O que nos diferencia
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Gestão Integrada</h3>
                                <p className="text-gray-600">
                                    Sistema unificado que integra todas as áreas hospitalares, 
                                    desde agendamentos até prontuários eletrônicos.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                                <p className="text-gray-600">
                                    Interface otimizada para máxima eficiência, reduzindo tempo 
                                    de atendimento e melhorando a experiência do usuário.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                                <p className="text-gray-600">
                                    Proteção avançada de dados com conformidade total às normas 
                                    de privacidade e segurança da informação.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                Nossa História
                            </h2>
                            <div className="prose prose-lg mx-auto">
                                <p className="text-gray-600 mb-6">
                                    O HC Connect nasceu da necessidade de modernizar e integrar os sistemas 
                                    de gestão do Hospital das Clínicas da FMUSP, uma das principais instituições 
                                    de saúde do Brasil.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Desenvolvido por uma equipe multidisciplinar de profissionais de tecnologia 
                                    e saúde, o sistema foi projetado para atender às especificidades e desafios 
                                    únicos de um hospital de alta complexidade.
                                </p>
                                <p className="text-gray-600">
                                    Hoje, o HC Connect é referência em inovação hospitalar, servindo como modelo 
                                    para outras instituições de saúde que buscam modernizar seus processos e 
                                    melhorar a qualidade do atendimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;