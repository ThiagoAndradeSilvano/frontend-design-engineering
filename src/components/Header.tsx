import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-lg">HC</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">HC Connect</h1>
                            <p className="text-blue-100 text-sm">Hospital das Clínicas FMUSP</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-blue-100 text-sm">Sistema de Gestão Hospitalar</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;