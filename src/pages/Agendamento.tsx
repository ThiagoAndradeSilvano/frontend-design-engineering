import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

interface TimeSlot {
    id: string;
    time: string;
    available: boolean;
}

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    avatar: string;
}

const Agendamento: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [step, setStep] = useState<number>(1);

    const doctors: Doctor[] = [
        { id: '1', name: 'Dr. João Silva', specialty: 'Cardiologia', avatar: 'JS' },
        { id: '2', name: 'Dra. Maria Santos', specialty: 'Dermatologia', avatar: 'MS' },
        { id: '3', name: 'Dr. Pedro Costa', specialty: 'Ortopedia', avatar: 'PC' },
        { id: '4', name: 'Dra. Ana Oliveira', specialty: 'Pediatria', avatar: 'AO' }
    ];

    const timeSlots: TimeSlot[] = [
        { id: '1', time: '08:00', available: true },
        { id: '2', time: '08:30', available: true },
        { id: '3', time: '09:00', available: false },
        { id: '4', time: '09:30', available: true },
        { id: '5', time: '10:00', available: true },
        { id: '6', time: '10:30', available: false },
        { id: '7', time: '11:00', available: true },
        { id: '8', time: '11:30', available: true },
        { id: '9', time: '14:00', available: true },
        { id: '10', time: '14:30', available: true },
        { id: '11', time: '15:00', available: false },
        { id: '12', time: '15:30', available: true }
    ];

    const getNextWeekDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        });
    };

    const formatDateForInput = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleConfirm = () => {
        // Aqui você implementaria a lógica de confirmação
        alert('Consulta agendada com sucesso!');
        setStep(1);
        setSelectedDate('');
        setSelectedDoctor('');
        setSelectedTime('');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Agendar Consulta</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Agende sua consulta de forma rápida e fácil
                        </p>
                    </div>
                </section>

                {/* Progress Steps */}
                <section className="py-8 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="flex items-center space-x-4">
                                {[1, 2, 3, 4].map((stepNumber) => (
                                    <div key={stepNumber} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                            step >= stepNumber 
                                                ? 'bg-blue-600 text-white' 
                                                : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            {stepNumber}
                                        </div>
                                        {stepNumber < 4 && (
                                            <div className={`w-16 h-1 mx-2 ${
                                                step > stepNumber ? 'bg-blue-600' : 'bg-gray-300'
                                            }`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="flex space-x-16 text-sm">
                                <span className={step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Data</span>
                                <span className={step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Médico</span>
                                <span className={step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Horário</span>
                                <span className={step >= 4 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Confirmação</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-md p-8">
                                {/* Step 1: Select Date */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione a Data</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            {getNextWeekDates().map((date) => (
                                                <button
                                                    key={date.toISOString()}
                                                    onClick={() => setSelectedDate(formatDateForInput(date))}
                                                    className={`p-4 rounded-lg border-2 text-center transition-colors ${
                                                        selectedDate === formatDateForInput(date)
                                                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                            : 'border-gray-300 hover:border-blue-300'
                                                    }`}
                                                >
                                                    <div className="text-sm font-medium">{formatDate(date)}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Select Doctor */}
                                {step === 2 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione o Médico</h2>
                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            {doctors.map((doctor) => (
                                                <button
                                                    key={doctor.id}
                                                    onClick={() => setSelectedDoctor(doctor.id)}
                                                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                                                        selectedDoctor === doctor.id
                                                            ? 'border-blue-600 bg-blue-50'
                                                            : 'border-gray-300 hover:border-blue-300'
                                                    }`}
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                            {doctor.avatar}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                                                            <p className="text-gray-600">{doctor.specialty}</p>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Select Time */}
                                {step === 3 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione o Horário</h2>
                                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => slot.available && setSelectedTime(slot.time)}
                                                    disabled={!slot.available}
                                                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                                                        selectedTime === slot.time
                                                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                            : slot.available
                                                            ? 'border-gray-300 hover:border-blue-300'
                                                            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    }`}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Confirmation */}
                                {step === 4 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirme seu Agendamento</h2>
                                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                            <h3 className="text-lg font-semibold mb-4">Detalhes da Consulta</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Data:</span>
                                                    <span className="font-medium">{selectedDate && new Date(selectedDate).toLocaleDateString('pt-BR')}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Médico:</span>
                                                    <span className="font-medium">{doctors.find(d => d.id === selectedDoctor)?.name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Especialidade:</span>
                                                    <span className="font-medium">{doctors.find(d => d.id === selectedDoctor)?.specialty}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Horário:</span>
                                                    <span className="font-medium">{selectedTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between">
                                    <Button
                                        label="Voltar"
                                        onClick={handleBack}
                                        disabled={step === 1}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2"
                                    />
                                    
                                    {step < 4 ? (
                                        <Button
                                            label="Próximo"
                                            onClick={handleNext}
                                            disabled={
                                                (step === 1 && !selectedDate) ||
                                                (step === 2 && !selectedDoctor) ||
                                                (step === 3 && !selectedTime)
                                            }
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                                        />
                                    ) : (
                                        <Button
                                            label="Confirmar Agendamento"
                                            onClick={handleConfirm}
                                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                                        />
                                    )}
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

export default Agendamento;
