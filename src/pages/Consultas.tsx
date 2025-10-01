import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

interface Consulta {
    id: string;
    date: string;
    time: string;
    doctor: string;
    specialty: string;
    status: 'agendada' | 'confirmada' | 'realizada' | 'cancelada';
    patient: string;
    notes?: string;
}

const Consultas: React.FC = () => {
    const [filter, setFilter] = useState<string>('todas');
    const [selectedConsulta, setSelectedConsulta] = useState<Consulta | null>(null);

    const consultas: Consulta[] = [
        {
            id: '1',
            date: '2024-01-15',
            time: '09:00',
            doctor: 'Dr. João Silva',
            specialty: 'Cardiologia',
            status: 'agendada',
            patient: 'João da Silva',
            notes: 'Primeira consulta - dor no peito'
        },
        {
            id: '2',
            date: '2024-01-16',
            time: '14:30',
            doctor: 'Dra. Maria Santos',
            specialty: 'Dermatologia',
            status: 'confirmada',
            patient: 'Maria Oliveira',
            notes: 'Retorno - acompanhamento'
        },
        {
            id: '3',
            date: '2024-01-17',
            time: '10:00',
            doctor: 'Dr. Pedro Costa',
            specialty: 'Ortopedia',
            status: 'realizada',
            patient: 'Pedro Santos',
            notes: 'Consulta realizada com sucesso'
        },
        {
            id: '4',
            date: '2024-01-18',
            time: '15:30',
            doctor: 'Dra. Ana Oliveira',
            specialty: 'Pediatria',
            status: 'cancelada',
            patient: 'Ana Costa',
            notes: 'Cancelada pelo paciente'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'agendada': return 'bg-yellow-100 text-yellow-800';
            case 'confirmada': return 'bg-blue-100 text-blue-800';
            case 'realizada': return 'bg-green-100 text-green-800';
            case 'cancelada': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'agendada': return 'Agendada';
            case 'confirmada': return 'Confirmada';
            case 'realizada': return 'Realizada';
            case 'cancelada': return 'Cancelada';
            default: return status;
        }
    };

    const filteredConsultas = filter === 'todas' 
        ? consultas 
        : consultas.filter(consulta => consulta.status === filter);

    const handleViewDetails = (consulta: Consulta) => {
        setSelectedConsulta(consulta);
    };

    const handleCloseModal = () => {
        setSelectedConsulta(null);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Minhas Consultas</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Gerencie suas consultas e acompanhe seu histórico médico
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="py-8 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => setFilter('todas')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === 'todas'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Todas
                            </button>
                            <button
                                onClick={() => setFilter('agendada')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === 'agendada'
                                        ? 'bg-yellow-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Agendadas
                            </button>
                            <button
                                onClick={() => setFilter('confirmada')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === 'confirmada'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Confirmadas
                            </button>
                            <button
                                onClick={() => setFilter('realizada')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === 'realizada'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Realizadas
                            </button>
                            <button
                                onClick={() => setFilter('cancelada')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === 'cancelada'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Canceladas
                            </button>
                        </div>
                    </div>
                </section>

                {/* Consultas List */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid gap-6">
                                {filteredConsultas.map((consulta) => (
                                    <div key={consulta.id} className="bg-white rounded-lg shadow-md p-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900">{consulta.doctor}</h3>
                                                        <p className="text-gray-600">{consulta.specialty}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-500">Data:</span>
                                                        <p className="font-medium">{new Date(consulta.date).toLocaleDateString('pt-BR')}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Horário:</span>
                                                        <p className="font-medium">{consulta.time}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Paciente:</span>
                                                        <p className="font-medium">{consulta.patient}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Status:</span>
                                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(consulta.status)}`}>
                                                            {getStatusText(consulta.status)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <Button
                                                    label="Ver Detalhes"
                                                    onClick={() => handleViewDetails(consulta)}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredConsultas.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma consulta encontrada</h3>
                                    <p className="text-gray-600">Não há consultas com o filtro selecionado.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Modal de Detalhes */}
            {selectedConsulta && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Detalhes da Consulta</h2>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Consulta</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">ID:</span>
                                                <span className="font-medium">{selectedConsulta.id}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Data:</span>
                                                <span className="font-medium">{new Date(selectedConsulta.date).toLocaleDateString('pt-BR')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Horário:</span>
                                                <span className="font-medium">{selectedConsulta.time}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Status:</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedConsulta.status)}`}>
                                                    {getStatusText(selectedConsulta.status)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações do Médico</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Nome:</span>
                                                <span className="font-medium">{selectedConsulta.doctor}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Especialidade:</span>
                                                <span className="font-medium">{selectedConsulta.specialty}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações do Paciente</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Nome:</span>
                                            <span className="font-medium">{selectedConsulta.patient}</span>
                                        </div>
                                    </div>
                                </div>

                                {selectedConsulta.notes && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Observações</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-gray-700">{selectedConsulta.notes}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-end space-x-4 pt-6 border-t">
                                    <Button
                                        label="Fechar"
                                        onClick={handleCloseModal}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2"
                                    />
                                    {selectedConsulta.status === 'agendada' && (
                                        <Button
                                            label="Confirmar Consulta"
                                            onClick={() => {
                                                alert('Consulta confirmada!');
                                                handleCloseModal();
                                            }}
                                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Consultas;

