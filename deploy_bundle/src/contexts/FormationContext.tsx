import { createContext, useContext, useState, ReactNode } from 'react';

interface FormationContextType {
  selectedFormation: string | null;
  setSelectedFormation: (formation: string | null) => void;
  selectedFormations: string[];
  setSelectedFormations: (formations: string[]) => void;
  selectedProgramType: string | null;
  setSelectedProgramType: (programType: string | null) => void;
  selectedProgram: string | null;
  setSelectedProgram: (program: string | null) => void;
  getFormationType: () => string | null;
  getAvailableFormations: () => string[];
}

const FormationContext = createContext<FormationContextType | undefined>(undefined);

export const FormationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);
  const [selectedFormations, setSelectedFormations] = useState<string[]>([]);
  const [selectedProgramType, setSelectedProgramType] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const getFormationType = () => {
    // If we have a program type, use it
    if (selectedProgramType) {
      return selectedProgramType;
    }
    
    // If we have a formation, try to determine type from the formation ID
    if (selectedFormation) {
      // Bootcamp formations
      if (selectedFormation.includes('bootcamp')) {
        return 'formation-certifiee';
      }
      
      // Licence formations
      if (selectedFormation.includes('licence') || selectedFormation.includes('licence-pro')) {
        return 'licence';
      }
      
      // Master formations
      if (selectedFormation.includes('master') || selectedFormation.includes('mba')) {
        return 'master';
      }
      
      // Certificat formations
      if (selectedFormation.includes('certificat') || selectedFormation.includes('formation-rapide')) {
        return 'formation-certifiee';
      }
    }
    
    return null;
  };

  const getAvailableFormations = () => {
    // If we have multiple selected formations, return them
    if (selectedFormations.length > 0) {
      return selectedFormations;
    }
    
    // If we're on a 3D bootcamp page, only show 3D formations
    if (selectedFormation && selectedFormation.includes('bootcamp-3d')) {
      return [
        'bootcamp-3d-generaliste',
        'bootcamp-3d-architecture', 
        'bootcamp-3d-produits'
      ];
    }
    
    // If we're on a specific bootcamp page, show only that bootcamp
    if (selectedFormation && selectedFormation.includes('bootcamp-marketing-digital')) {
      return ['bootcamp-marketing-digital'];
    }
    
    // If we're on a specific formation page, show only that formation
    if (selectedFormation && !selectedFormation.includes('bootcamp')) {
      return [selectedFormation];
    }
    
    // Default: show all formations
    return [
      'developpement-web-express',
      'marketing-digital-intensif',
      'bootcamp-marketing-digital',
      'bootcamp-3d-generaliste',
      'bootcamp-3d-architecture',
      'bootcamp-3d-produits',
      'cybersecurite-pratique',
      'data-analytics-express',
      'management-projet-agile',
      'design-ux-ui-intensif',
      'domaine-sante-soins-infirmiers',
      'secourisme-premiers-secours',
      'bureautique-express',
      'gestion-stress-bien-etre',
      'domaine-sante-aide-soignant',
      'formation-express-comptabilite',
      'modelisation-3d-animation'
    ];
  };

  return (
    <FormationContext.Provider value={{ 
      selectedFormation, 
      setSelectedFormation,
      selectedFormations,
      setSelectedFormations,
      selectedProgramType,
      setSelectedProgramType,
      selectedProgram,
      setSelectedProgram,
      getFormationType,
      getAvailableFormations
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
