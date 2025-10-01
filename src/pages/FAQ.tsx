import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const FAQ: React.FC = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const faqData: FAQItem[] = [
        {
            id: 1,
            question: "O que é o HC Connect?",
            answer: "O HC Connect é um sistema integrado de gestão hospitalar desenvolvido especificamente para o Hospital das Clínicas da FMUSP. Ele conecta profissionais de saúde, pacientes e administradores em uma plataforma unificada para melhorar a eficiência e qualidade do atendimento.",
            category: "geral"
        },
        {
            id: 2,
            question: "Como posso acessar o sistema?",
            answer: "O acesso ao HC Connect é restrito a profissionais autorizados do Hospital das Clínicas. Você pode fazer login usando suas credenciais institucionais fornecidas pelo departamento de TI.",
            category: "acesso"
        },
        {
            id: 3,
            question: "O sistema é seguro?",
            answer: "Sim, o HC Connect implementa as mais rigorosas medidas de segurança, incluindo criptografia de dados, autenticação de dois fatores e conformidade total com as normas de privacidade e segurança da informação em saúde.",
            category: "seguranca"
        },
        {
            id: 4,
            question: "Como posso agendar uma consulta?",
            answer: "As consultas podem ser agendadas através do módulo de agendamento do sistema. Basta acessar a seção 'Agendamentos', selecionar o médico e horário disponível, e confirmar o agendamento.",
            category: "agendamento"
        },
        {
            id: 5,
            question: "Posso acessar o sistema pelo celular?",
            answer: "Sim, o HC Connect é totalmente responsivo e pode ser acessado através de dispositivos móveis. Recomendamos o uso de navegadores atualizados para melhor experiência.",
            category: "acesso"
        },
        {
            id: 6,
            question: "Como faço para recuperar minha senha?",
            answer: "Na tela de login, clique em 'Esqueci minha senha' e siga as instruções. Um link de recuperação será enviado para seu email institucional.",
            category: "acesso"
        },
        {
            id: 7,
            question: "O sistema funciona 24 horas?",
            answer: "Sim, o HC Connect está disponível 24 horas por dia, 7 dias por semana, com monitoramento contínuo para garantir 99.9% de uptime.",
            category: "geral"
        },
        {
            id: 8,
            question: "Como posso reportar um problema técnico?",
            answer: "Problemas técnicos podem ser reportados através da seção 'Suporte' no sistema ou entrando em contato com a equipe de TI através do email suporte@hcconnect.com.br.",
            category: "suporte"
        },
        {
            id: 9,
            question: "Meus dados estão protegidos?",
            answer: "Absolutamente. Todos os dados são criptografados e armazenados em servidores seguros. O sistema está em conformidade com a LGPD e outras regulamentações de proteção de dados.",
            category: "seguranca"
        },
        {
            id: 10,
            question: "Posso personalizar minha interface?",
            answer: "Sim, o HC Connect oferece opções de personalização da interface, incluindo temas, layout e configurações de notificações para melhorar sua experiência de uso.",
            category: "geral"
        }
    ];

    const categories = [
        { value: 'all', label: 'Todas' },
        { value: 'geral', label: 'Geral' },
        { value: 'acesso', label: 'Acesso' },
        { value: 'seguranca', label: 'Segurança' },
        { value: 'agendamento', label: 'Agendamento' },
        { value: 'suporte', label: 'Suporte' }
    ];

    const filteredFAQs = selectedCategory === 'all' 
        ? faqData 
        : faqData.filter(item => item.category === selectedCategory);

    const toggleItem = (id: number) => {
        setOpenItems(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Encontre respostas para as dúvidas mais comuns sobre o HC Connect
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Category Filter */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Filtrar por categoria</h2>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <button
                                            key={category.value}
                                            onClick={() => setSelectedCategory(category.value)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                                selectedCategory === category.value
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            {category.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Items */}
                            <div className="space-y-4">
                                {filteredFAQs.map(item => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                                {item.question}
                                            </h3>
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className={`w-5 h-5 text-gray-500 transition-transform ${
                                                        openItems.includes(item.id) ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                        {openItems.includes(item.id) && (
                                            <div className="px-6 pb-4">
                                                <div className="border-t border-gray-200 pt-4">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Não encontrou sua resposta?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Nossa equipe de suporte está pronta para ajudar você.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Entrar em Contato
                                    </a>
                                    <a
                                        href="mailto:suporte@hcconnect.com.br"
                                        className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                                    >
                                        Enviar Email
                                    </a>
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

export default FAQ;