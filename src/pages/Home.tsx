import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/agendamento');
    };

    const handleLearnMore = () => {
        navigate('/about');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Bem-vindo ao <span className="text-blue-600">HC Connect</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Sistema integrado de gestão hospitalar do Hospital das Clínicas da FMUSP. 
                            Conectando profissionais, pacientes e tecnologia para uma saúde mais eficiente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                label="Começar Agora"
                                onClick={handleGetStarted}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                            />
                            <Button
                                label="Saiba Mais"
                                onClick={handleLearnMore}
                                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 text-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Nossos Recursos
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Gestão Integrada</h3>
                                <p className="text-gray-600">
                                    Sistema unificado para gerenciar pacientes, consultas e recursos hospitalares.
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Acesso Rápido</h3>
                                <p className="text-gray-600">
                                    Interface intuitiva que permite acesso rápido às informações essenciais.
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                                <p className="text-gray-600">
                                    Proteção avançada de dados com conformidade às normas de privacidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">1000+</div>
                                <div className="text-blue-100">Profissionais Ativos</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">50K+</div>
                                <div className="text-blue-100">Pacientes Atendidos</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-blue-100">Disponibilidade</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">99.9%</div>
                                <div className="text-blue-100">Uptime</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;