import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, User, Mail, Phone, MapPin, GraduationCap, BookOpen, CheckCircle, Lock } from "lucide-react";
import { useFormation } from "@/contexts/FormationContext";

interface RegistrationFormProps {
  isOpen?: boolean;
  onClose: () => void;
  preselectedFormation?: string;
  preselectedProgramType?: string;
  preselectedProgram?: string;
  selectedFormation?: string;
  selectedFormations?: string[];
}

const RegistrationForm = ({ isOpen = true, onClose, preselectedFormation, preselectedProgramType, preselectedProgram, selectedFormation, selectedFormations }: RegistrationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSelectedFormations, setFormSelectedFormations] = useState<string[]>([]);
  const { getFormationType, getAvailableFormations, selectedFormation: contextFormation, selectedFormations: contextFormations } = useFormation();
  
  console.log('RegistrationForm rendered, isOpen:', isOpen);
  
  // Get the smart formation type
  const smartFormationType = getFormationType();
  const isFormationTypeLocked = false; // Allow users to change program type - giving students full choice
  
  // Get available formations based on context
  const availableFormations = getAvailableFormations();
  
  // Formation mapping for display
  const formationMapping: { [key: string]: string } = {
    'developpement-web-express': 'Développement Web Express',
    'marketing-digital-intensif': 'Marketing Digital Intensif',
    'bootcamp-marketing-digital': 'Bootcamp Marketing Digital',
    'bootcamp-3d-generaliste': '3D Généraliste - Création de Scènes Complètes',
    'bootcamp-3d-architecture': '3D Architecture - Archviz',
    'bootcamp-3d-produits': '3D Produits - Rendu E-commerce & Publicité',
    'cybersecurite-pratique': 'Cybersécurité Pratique',
    'data-analytics-express': 'Data Analytics Express',
    'management-projet-agile': 'Management de Projet Agile',
    'design-ux-ui-intensif': 'Design UX/UI Intensif',
    'domaine-sante-soins-infirmiers': 'Domaine de Santé - Soins Infirmiers',
    'secourisme-premiers-secours': 'Secourisme & Premiers Secours',
    'bureautique-express': 'Bureautique Express',
    'gestion-stress-bien-etre': 'Gestion de Stress & Bien-être',
    'domaine-sante-aide-soignant': 'Domaine de Santé - Aide-Soignant',
    'formation-express-comptabilite': 'Formation Express - Comptabilité',
    'modelisation-3d-animation': 'Modélisation 3D & Animation'
  };

  // Handle formation selection within the form - giving students full freedom to choose
  const handleFormationToggle = (formationId: string) => {
    setFormSelectedFormations(prev => {
      if (prev.includes(formationId)) {
        // Remove formation if already selected - allow complete freedom
        const newSelection = prev.filter(id => id !== formationId);
        return newSelection; // Allow students to deselect all if they want
      } else {
        // Add formation if not selected
        return [...prev, formationId];
      }
    });
  };
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    
    // Educational Level
    educationalLevel: "",
    
    // Interests
    interests: [] as string[],
    
    // Program Selection - use smart detection
    programType: smartFormationType || preselectedProgramType || "",
    specificProgram: contextFormation || preselectedFormation || selectedFormation || "",
    selectedFormations: contextFormations || selectedFormations || [],
    
    // Additional Information
    motivation: "",
    previousExperience: "",
    availability: "",
    source: ""
  });

  // Update form data when context changes
  useEffect(() => {
    const formationsToUse = contextFormations || selectedFormations || [];
    const formationToUse = contextFormation || selectedFormation || preselectedFormation;
    const programTypeToUse = smartFormationType || preselectedProgramType;
    
    // Initialize form selections - giving students choice instead of forcing defaults
    if (formationsToUse.length > 0) {
      setFormSelectedFormations(formationsToUse);
    } else if (formationToUse) {
      setFormSelectedFormations([formationToUse]);
    } else {
      // Don't force any default selection - let students choose freely
      setFormSelectedFormations([]);
    }
    
    if (formationsToUse.length > 0) {
      // Handle multiple formations
      const formationToInterestMap: { [key: string]: string } = {
        "developpement-web-express": "Développement Informatique",
        "marketing-digital-intensif": "Marketing Digital",
        "bootcamp-marketing-digital": "Marketing Digital",
        "bootcamp-3d-generaliste": "3D & Animation",
        "bootcamp-3d-architecture": "3D & Animation",
        "bootcamp-3d-produits": "3D & Animation",
        "cybersecurite-pratique": "Cybersécurité",
        "data-analytics-express": "Data Analytics",
        "management-projet-agile": "Management",
        "design-ux-ui-intensif": "Design UX/UI",
        "domaine-sante-soins-infirmiers": "Santé",
        "secourisme-premiers-secours": "Santé",
        "bureautique-express": "Formation Continue",
        "gestion-stress-bien-etre": "Formation Continue",
        "domaine-sante-aide-soignant": "Santé",
        "formation-express-comptabilite": "Finance & Audit",
        "modelisation-3d-animation": "3D & Animation"
      };

      // Get interests for all selected formations
      const interests = formationsToUse.map(formation => formationToInterestMap[formation]).filter(Boolean);
      const uniqueInterests = [...new Set(interests)];

      setFormData(prev => ({
        ...prev,
        programType: programTypeToUse || "formation-certifiee",
        specificProgram: formationsToUse[0], // Use first formation as primary
        selectedFormations: formationsToUse,
        interests: uniqueInterests
      }));
    } else if (formationToUse) {
      // Handle single formation
      const formationToInterestMap: { [key: string]: string } = {
        "developpement-web-express": "Développement Informatique",
        "marketing-digital-intensif": "Marketing Digital",
        "bootcamp-marketing-digital": "Marketing Digital",
        "bootcamp-3d-generaliste": "3D & Animation",
        "bootcamp-3d-architecture": "3D & Animation",
        "bootcamp-3d-produits": "3D & Animation",
        "cybersecurite-pratique": "Cybersécurité",
        "data-analytics-express": "Data Analytics",
        "management-projet-agile": "Management",
        "design-ux-ui-intensif": "Design UX/UI",
        "domaine-sante-soins-infirmiers": "Santé",
        "secourisme-premiers-secours": "Santé",
        "bureautique-express": "Formation Continue",
        "gestion-stress-bien-etre": "Formation Continue",
        "domaine-sante-aide-soignant": "Santé",
        "formation-express-comptabilite": "Finance & Audit",
        "modelisation-3d-animation": "3D & Animation"
      };

      const correspondingInterest = formationToInterestMap[formationToUse];

      setFormData(prev => ({
        ...prev,
        programType: programTypeToUse || "formation-certifiee",
        specificProgram: formationToUse,
        selectedFormations: [formationToUse],
        interests: correspondingInterest ? [correspondingInterest] : []
      }));
    } else if (preselectedProgramType && preselectedProgram) {
      // Map program names to their corresponding interests
      const programToInterestMap: { [key: string]: string } = {
        "developpement-web-fullstack": "Développement Informatique",
        "marketing-digital": "Marketing Digital",
        "cybersecurite": "Cybersécurité",
        "data-analytics": "Data Analytics",
        "management-projet": "Management",
        "design-ux-ui": "Design UX/UI",
        "sante-soins-infirmiers": "Santé",
        "comptabilite-gestion": "Finance & Audit",
        "electrotechnique": "Électrotechnique",
        "entrepreneuriat": "Entrepreneuriat"
      };

      const correspondingInterest = programToInterestMap[preselectedProgram];

      setFormData(prev => ({
        ...prev,
        programType: programTypeToUse || preselectedProgramType,
        specificProgram: preselectedProgram,
        selectedFormations: [preselectedProgram],
        interests: correspondingInterest ? [correspondingInterest] : []
      }));
    }
  }, [contextFormation, contextFormations, selectedFormation, selectedFormations, preselectedFormation, smartFormationType, preselectedProgramType, preselectedProgram, availableFormations]);

  // Update form data when form selections change
  useEffect(() => {
    if (formSelectedFormations.length > 0) {
      const formationToInterestMap: { [key: string]: string } = {
        "developpement-web-express": "Développement Informatique",
        "marketing-digital-intensif": "Marketing Digital",
        "bootcamp-marketing-digital": "Marketing Digital",
        "bootcamp-3d-generaliste": "3D & Animation",
        "bootcamp-3d-architecture": "3D & Animation",
        "bootcamp-3d-produits": "3D & Animation",
        "cybersecurite-pratique": "Cybersécurité",
        "data-analytics-express": "Data Analytics",
        "management-projet-agile": "Management",
        "design-ux-ui-intensif": "Design UX/UI",
        "domaine-sante-soins-infirmiers": "Santé",
        "secourisme-premiers-secours": "Santé",
        "bureautique-express": "Formation Continue",
        "gestion-stress-bien-etre": "Formation Continue",
        "domaine-sante-aide-soignant": "Santé",
        "formation-express-comptabilite": "Finance & Audit",
        "modelisation-3d-animation": "3D & Animation"
      };

      // Get interests for all selected formations
      const interests = formSelectedFormations.map(formation => formationToInterestMap[formation]).filter(Boolean);
      const uniqueInterests = [...new Set(interests)];

      setFormData(prev => ({
        ...prev,
        specificProgram: formSelectedFormations[0], // Use first formation as primary
        selectedFormations: formSelectedFormations,
        interests: uniqueInterests
      }));
    }
  }, [formSelectedFormations]);

  const educationalLevels = [
    "Baccalauréat",
    "Bac+1",
    "Bac+2",
    "Bac+3",
    "Bac+4",
    "Bac+5",
    "Autre"
  ];

  const interestOptions = [
    "Développement Informatique",
    "Cybersécurité",
    "Marketing Digital",
    "Finance & Audit",
    "Management",
    "Santé",
    "Électrotechnique",
    "3D & Animation",
    "Data Analytics",
    "Design UX/UI",
    "Entrepreneuriat",
    "Formation Continue"
  ];

  const programTypes = [
    { value: "licence", label: "Licence Professionnelle (Bac+3)" },
    { value: "master", label: "Master Professionnel (Bac+5)" },
    { value: "formation-certifiee", label: "Certificat exécutif" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  // Helper function to get pre-selected interest from formation
  const getPreselectedInterestFromFormation = (formation: string) => {
    const formationToInterestMap: { [key: string]: string } = {
      "developpement-web-express": "Développement Informatique",
      "marketing-digital-intensif": "Marketing Digital",
      "cybersecurite-pratique": "Cybersécurité",
      "data-analytics-express": "Data Analytics",
      "management-projet-agile": "Management",
      "design-ux-ui-intensif": "Design UX/UI",
      "domaine-sante-soins-infirmiers": "Santé",
      "secourisme-premiers-secours": "Santé",
      "bureautique-express": "Formation Continue",
      "gestion-stress-bien-etre": "Formation Continue",
      "domaine-sante-aide-soignant": "Santé",
      "formation-express-comptabilite": "Finance & Audit",
      "modelisation-3d-animation": "3D & Animation"
    };
    return formationToInterestMap[formation];
  };

  // Helper function to get pre-selected interest from program
  const getPreselectedInterestFromProgram = (program: string) => {
    const programToInterestMap: { [key: string]: string } = {
      "developpement-web-fullstack": "Développement Informatique",
      "marketing-digital": "Marketing Digital",
      "cybersecurite": "Cybersécurité",
      "data-analytics": "Data Analytics",
      "management-projet": "Management",
      "design-ux-ui": "Design UX/UI",
      "sante-soins-infirmiers": "Santé",
      "comptabilite-gestion": "Finance & Audit",
      "electrotechnique": "Électrotechnique",
      "entrepreneuriat": "Entrepreneuriat"
    };
    return programToInterestMap[program];
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isValidEmail = (email: string) => {
    // Simple RFC 5322-like check
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  const normalizePhoneForWhatsapp = (raw: string) => {
    // Keep digits only
    const digits = raw.replace(/\D/g, "");
    // If starts with 0 and looks like Moroccan mobile (06/07), convert to +2126/7...
    if (/^0[6-7]\d{8}$/.test(digits)) {
      return `+212${digits.slice(1)}`;
    }
    // If already starts with 212 and length valid
    if (/^212[6-7]\d{8}$/.test(digits)) {
      return `+${digits}`;
    }
    // If already in +2126... format
    if (/^\+212[6-7]\d{8}$/.test(raw)) {
      return raw;
    }
    return raw; // fallback
  };

  const isValidMoroccanMobile = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    // Accept 06XXXXXXXXX, 07XXXXXXXXX, 2126XXXXXXXX, 2127XXXXXXXX, +2126XXXXXXXX, +2127XXXXXXXX
    return /^0[6-7]\d{8}$/.test(digits) || /^\+?212[6-7]\d{8}$/.test(digits);
  };

  const handleSubmit = async () => {
    try {
      // Client-side validation
      if (!formData.firstName || !formData.lastName) {
        alert("Veuillez saisir votre prénom et votre nom.");
        return;
      }
      if (!isValidEmail(formData.email)) {
        alert("Veuillez saisir une adresse email valide.");
        return;
      }
      if (!isValidMoroccanMobile(formData.phone)) {
        alert("Veuillez saisir un numéro mobile marocain valide (06/07 …).");
        return;
      }
      if (formData.interests.length === 0) {
        alert("Veuillez sélectionner au moins un centre d'intérêt.");
        return;
      }
      if (!formData.programType) {
        alert("Veuillez sélectionner le type de formation souhaité.");
        return;
      }
      if (formData.programType === 'formation-certifiee' && formSelectedFormations.length === 0) {
        alert("Veuillez sélectionner au moins une formation de votre choix.");
        return;
      }

      const normalizedPhone = normalizePhoneForWhatsapp(formData.phone);
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;
      
      // Log submission data for debugging
      console.log('Submitting registration data to n8n:', {
        ...formData,
        submittedAt: new Date().toISOString(),
        site: 'supemirV2'
      });
      
      if (webhookUrl) {
        console.log('Attempting to submit to webhook:', webhookUrl);
        
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            phone: normalizedPhone,
            interests: formData.interests.join(', '), // Convert array to string for better spreadsheet compatibility
            submittedAt: new Date().toISOString(),
            site: 'supemirV2'
          })
        });
        
        console.log('Webhook response status:', response.status);
        console.log('Webhook response headers:', response.headers);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.log('Webhook error response:', errorText);
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        // Be tolerant to webhook responses (JSON, text, or empty)
        let responseData: unknown = null;
        try {
          const contentType = response.headers.get('content-type') || '';
          const hasBody = response.status !== 204;
          if (hasBody && contentType.includes('application/json')) {
            responseData = await response.json();
          } else if (hasBody) {
            responseData = { text: await response.text() };
          }
        } catch (parseErr) {
          console.warn('Non-JSON webhook response (ignored):', parseErr);
        }
        console.log('Webhook success response:', responseData);
        console.log('Registration submitted successfully to n8n');
        alert("Votre inscription a été envoyée avec succès! Nous vous contacterons bientôt.");
        onClose();
      } else {
        console.warn('VITE_N8N_WEBHOOK_URL is not set. Saving to localStorage as fallback.');
        // Fallback: save to localStorage if webhook URL is not configured
        const submissions = JSON.parse(localStorage.getItem('registrations') || '[]');
        const newSubmission = {
          ...formData,
          interests: formData.interests.join(', '),
          submittedAt: new Date().toISOString(),
          site: 'supemirV2',
          id: Date.now()
        };
        submissions.push(newSubmission);
        localStorage.setItem('registrations', JSON.stringify(submissions));
        alert("Votre inscription a été sauvegardée localement! Configurez l'intégration n8n pour l'envoi automatique.");
        onClose();
      }
    } catch (err) {
      console.error('Failed to submit registration to n8n', err);
      
      // Check if it's a webhook activation issue
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      const isWebhookNotActivated = errorMessage.includes('404') || errorMessage.includes('not registered');
      
      if (isWebhookNotActivated) {
        alert("⚠️ Le webhook n8n n'est pas encore activé. Vos données ont été sauvegardées localement. Veuillez activer le workflow n8n pour l'envoi automatique.");
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer. Les données ont été sauvegardées localement.");
      }
      
      // Fallback: save to localStorage on error
      try {
        const submissions = JSON.parse(localStorage.getItem('registrations') || '[]');
        const newSubmission = {
          ...formData,
          interests: formData.interests.join(', '),
          submittedAt: new Date().toISOString(),
          site: 'supemirV2',
          id: Date.now(),
          error: errorMessage,
          webhookStatus: isWebhookNotActivated ? 'not_activated' : 'error'
        };
        submissions.push(newSubmission);
        localStorage.setItem('registrations', JSON.stringify(submissions));
        console.log('Registration saved to localStorage:', newSubmission);
      } catch (storageErr) {
        console.error('Failed to save registration to localStorage', storageErr);
      }
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.educationalLevel;
      case 3:
        return formData.interests.length > 0;
      case 4:
        return formData.programType && (formData.programType !== "formation-certifiee" || formSelectedFormations.length > 0);
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm" 
      style={{
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div 
        className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] sm:max-h-[95vh] overflow-y-auto relative shadow-2xl border-0 bg-white rounded-lg lg:rounded-xl" 
        style={{
          zIndex: 999999,
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-primary">
                🚀 Inscription SUPEMIR
              </CardTitle>
              <CardDescription>
                Rejoignez l'excellence académique - Étape {currentStep} sur 4
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex space-x-2 mt-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full ${
                  step <= currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Informations Personnelles</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm lg:text-base">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Votre prénom"
                    className="h-10 lg:h-12 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm lg:text-base">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Votre nom"
                    className="h-10 lg:h-12 text-sm lg:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label htmlFor="email" className="text-sm lg:text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className="h-10 lg:h-12 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm lg:text-base">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+212 6XX XXX XXX"
                    className="h-10 lg:h-12 text-sm lg:text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Votre adresse complète"
                />
              </div>
            </div>
          )}

          {/* Step 2: Educational Level */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Niveau Scolaire</h3>
              </div>
              
              <div>
                <Label>Votre niveau d'études actuel *</Label>
                <select 
                  value={formData.educationalLevel} 
                  onChange={(e) => handleInputChange('educationalLevel', e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez votre niveau</option>
                  {educationalLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Conseil</h4>
                <p className="text-sm text-muted-foreground">
                  Votre niveau actuel nous aide à vous orienter vers la formation la plus adaptée à votre profil.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Interests */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Centres d'Intérêt</h3>
              </div>
              
              <div>
                <Label>Sélectionnez vos domaines d'intérêt *</Label>
                <p className="text-sm text-muted-foreground mb-4">
                  Choisissez un ou plusieurs domaines qui vous intéressent
                </p>
                {(selectedFormation || preselectedFormation || preselectedProgram) && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-700">
                      💡 Domaine d'intérêt pré-sélectionné selon votre choix - vous pouvez modifier si nécessaire
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                  {interestOptions.map((interest) => {
                    const isPreselected = (selectedFormation || preselectedFormation || preselectedProgram) && 
                      ((selectedFormation && getPreselectedInterestFromFormation(selectedFormation) === interest) ||
                       (preselectedFormation && getPreselectedInterestFromFormation(preselectedFormation) === interest) ||
                       (preselectedProgram && getPreselectedInterestFromProgram(preselectedProgram) === interest));
                    
                    return (
                      <div key={interest} className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          className="h-4 w-4 lg:h-5 lg:w-5"
                        />
                        <Label htmlFor={interest} className="text-sm lg:text-base cursor-pointer flex-1">
                          {interest}
                          {isPreselected && <span className="text-xs text-blue-600 ml-1">💡</span>}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </div>

              {formData.interests.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Program Selection */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Choix du Programme</h3>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                <Label>Type de formation souhaitée *</Label>
                  {isFormationTypeLocked && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      <span>Détecté automatiquement</span>
                    </div>
                  )}
                </div>
                <select 
                  value={formData.programType} 
                  onChange={(e) => handleInputChange('programType', e.target.value)}
                  disabled={false}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez le type de formation</option>
                  {programTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {isFormationTypeLocked ? (
                  <p className="text-xs text-muted-foreground mt-1">
                    Le type de formation a été automatiquement détecté selon la page que vous visitez.
                  </p>
                ) : (selectedFormation || preselectedFormation || preselectedProgramType) && (
                  <p className="text-xs text-blue-600 mt-1">
                    💡 Pré-sélectionné selon votre choix - vous pouvez modifier si nécessaire
                  </p>
                )}
              </div>

              {formData.programType === "formation-certifiee" && (
                <div>
                  <Label>Formation(s) de votre choix *</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sélectionnez une ou plusieurs formations selon vos intérêts et objectifs professionnels
                  </p>
                  <div className="space-y-3">
                    {/* Formation Selection Cards */}
                    <div className="grid gap-2">
                      {availableFormations.map((formationId) => (
                        <div
                          key={formationId}
                          className={`cursor-pointer rounded-lg border-2 p-3 transition-all duration-200 ${
                            formSelectedFormations.includes(formationId)
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                          onClick={() => handleFormationToggle(formationId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formSelectedFormations.includes(formationId)
                                  ? 'border-primary bg-primary'
                                  : 'border-gray-300'
                              }`}>
                                {formSelectedFormations.includes(formationId) && (
                                  <CheckCircle className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span className={`text-sm font-medium ${
                                formSelectedFormations.includes(formationId)
                                  ? 'text-primary'
                                  : 'text-gray-700'
                              }`}>
                                {formationMapping[formationId] || formationId}
                              </span>
                            </div>
                            {formSelectedFormations.includes(formationId) && (
                              <Badge className="bg-primary text-primary-foreground text-xs">
                                Choisie
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Selection Summary */}
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          Formations choisies:
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {formSelectedFormations.length}
                        </span>
                      </div>
                      {formSelectedFormations.length === 0 && (
                        <p className="text-xs text-orange-600 mt-2">
                          ⚠️ Veuillez choisir au moins une formation qui vous intéresse
                        </p>
                      )}
                      {formSelectedFormations.length === 1 && (
                        <p className="text-xs text-blue-600 mt-2">
                          ✅ Formation unique sélectionnée
                        </p>
                      )}
                      {formSelectedFormations.length > 1 && (
                        <p className="text-xs text-green-600 mt-2">
                          ✅ Excellente sélection ! Nous vous contacterons pour organiser votre parcours personnalisé
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <Label>Motivation et objectifs</Label>
                <Textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Décrivez vos motivations et objectifs professionnels..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Comment avez-vous connu SUPEMIR ?</Label>
                <select 
                  value={formData.source} 
                  onChange={(e) => handleInputChange('source', e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="website">Site web</option>
                  <option value="social-media">Réseaux sociaux</option>
                  <option value="recommendation">Recommandation</option>
                  <option value="event">Événement</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[44px] text-sm lg:text-base"
            >
              Précédent
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[48px] sm:min-h-[44px] text-sm lg:text-base"
              >
                Suivant
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-supemir-magenta to-supemir-green text-white w-full sm:w-auto min-h-[48px] sm:min-h-[44px] text-sm lg:text-base"
              >
                🚀 Envoyer l'inscription
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </div>,
    document.body
  );
};

export default RegistrationForm;
