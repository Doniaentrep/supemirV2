import { createContext, useContext, useState, ReactNode } from 'react';

interface FormationContextType {
  selectedFormation: string | null;
  setSelectedFormation: (formation: string | null) => void;
  selectedProgramType: string | null;
  setSelectedProgramType: (programType: string | null) => void;
  selectedProgram: string | null;
  setSelectedProgram: (program: string | null) => void;
}

const FormationContext = createContext<FormationContextType | undefined>(undefined);

export const FormationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);
  const [selectedProgramType, setSelectedProgramType] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <FormationContext.Provider value={{ 
      selectedFormation, 
      setSelectedFormation,
      selectedProgramType,
      setSelectedProgramType,
      selectedProgram,
      setSelectedProgram
    }}>
      {children}
    </FormationContext.Provider>
  );
};

export const useFormation = () => {
  const context = useContext(FormationContext);
  if (context === undefined) {
    throw new Error('useFormation must be used within a FormationProvider');
  }
  return context;
};
