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
import { X, User, Mail, Phone, MapPin, GraduationCap, BookOpen, CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  isOpen?: boolean;
  onClose: () => void;
  preselectedFormation?: string;
  preselectedProgramType?: string;
  preselectedProgram?: string;
  selectedFormation?: string;
}

const RegistrationForm = ({ isOpen = true, onClose, preselectedFormation, preselectedProgramType, preselectedProgram, selectedFormation }: RegistrationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  console.log('RegistrationForm rendered, isOpen:', isOpen);
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
    
    // Program Selection
    programType: preselectedFormation ? "formation-certifiee" : "",
    specificProgram: preselectedFormation || "",
    
    // Additional Information
    motivation: "",
    previousExperience: "",
    availability: "",
    source: ""
  });

  // Update form data when preselectedFormation, selectedFormation or preselectedProgramType changes
  useEffect(() => {
    const formationToUse = selectedFormation || preselectedFormation;
    if (formationToUse) {
      // Map formation names to their corresponding interests
      const formationToInterestMap: { [key: string]: string } = {
        "developpement-web-express": "Développement Informatique",
        "marketing-digital-intensif": "Marketing Digital",
        "bootcamp-marketing-digital": "Marketing Digital",
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
        programType: "formation-certifiee",
        specificProgram: formationToUse,
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
        programType: preselectedProgramType,
        specificProgram: preselectedProgram,
        interests: correspondingInterest ? [correspondingInterest] : []
      }));
    }
  }, [selectedFormation, preselectedFormation, preselectedProgramType, preselectedProgram]);

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
    { value: "formation-certifiee", label: "Certificat exécutif (3 jours à 4 mois)" }
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

  const handleSubmit = async () => {
    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            site: 'supemirV2'
          })
        });
      } else {
        console.warn('VITE_N8N_WEBHOOK_URL is not set. Skipping webhook.');
      }
      alert("Votre inscription a été envoyée avec succès! Nous vous contacterons bientôt.");
      onClose();
    } catch (err) {
      console.error('Failed to submit registration to n8n', err);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
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
        return formData.programType && (formData.programType !== "formation-certifiee" || formData.specificProgram);
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
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl border-0 bg-white rounded-lg" 
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
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+212 6XX XXX XXX"
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
                
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => {
                    const isPreselected = (selectedFormation || preselectedFormation || preselectedProgram) && 
                      ((selectedFormation && getPreselectedInterestFromFormation(selectedFormation) === interest) ||
                       (preselectedFormation && getPreselectedInterestFromFormation(preselectedFormation) === interest) ||
                       (preselectedProgram && getPreselectedInterestFromProgram(preselectedProgram) === interest));
                    
                    return (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm cursor-pointer">
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
                <Label>Type de formation souhaitée *</Label>
                <select 
                  value={formData.programType} 
                  onChange={(e) => handleInputChange('programType', e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez le type de formation</option>
                  {programTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {(selectedFormation || preselectedFormation || preselectedProgramType) && (
                  <p className="text-xs text-blue-600 mt-1">
                    💡 Pré-sélectionné selon votre choix - vous pouvez modifier si nécessaire
                  </p>
                )}
              </div>

              {formData.programType === "formation-certifiee" && (
                <div>
                  <Label>Formation spécifique *</Label>
                  <select 
                    value={formData.specificProgram} 
                    onChange={(e) => handleInputChange('specificProgram', e.target.value)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Sélectionnez votre formation</option>
                    <option value="developpement-web-express">Développement Web Express</option>
                    <option value="marketing-digital-intensif">Marketing Digital Intensif</option>
                    <option value="bootcamp-marketing-digital">Bootcamp Marketing Digital</option>
                    <option value="cybersecurite-pratique">Cybersécurité Pratique</option>
                    <option value="data-analytics-express">Data Analytics Express</option>
                    <option value="management-projet-agile">Management de Projet Agile</option>
                    <option value="design-ux-ui-intensif">Design UX/UI Intensif</option>
                    <option value="domaine-sante-soins-infirmiers">Domaine de Santé - Soins Infirmiers</option>
                    <option value="secourisme-premiers-secours">Secourisme & Premiers Secours</option>
                    <option value="bureautique-express">Bureautique Express</option>
                    <option value="gestion-stress-bien-etre">Gestion de Stress & Bien-être</option>
                    <option value="domaine-sante-aide-soignant">Domaine de Santé - Aide-Soignant</option>
                    <option value="formation-express-comptabilite">Formation Express - Comptabilité</option>
                    <option value="modelisation-3d-animation">Modélisation 3D & Animation</option>
                  </select>
                  {(selectedFormation || preselectedFormation) && (
                    <p className="text-xs text-blue-600 mt-1">
                      💡 Pré-sélectionné selon votre choix - vous pouvez modifier si nécessaire
                    </p>
                  )}
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
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Précédent
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-primary hover:bg-primary/90"
              >
                Suivant
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-supemir-magenta to-supemir-green text-white"
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
