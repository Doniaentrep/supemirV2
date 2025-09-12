import { useState } from "react";
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
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
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
    programType: "",
    specificProgram: "",
    
    // Additional Information
    motivation: "",
    previousExperience: "",
    availability: "",
    source: ""
  });

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
    { value: "formation-rapide", label: "Formation Rapide (3 jours à 4 mois)" }
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

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Registration data:", formData);
    
    // For now, we'll just show a success message
    alert("Votre inscription a été envoyée avec succès! Nous vous contacterons bientôt.");
    onClose();
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
        return formData.programType;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
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
                <Select value={formData.educationalLevel} onValueChange={(value) => handleInputChange('educationalLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationalLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm cursor-pointer">
                        {interest}
                      </Label>
                    </div>
                  ))}
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
                <Select value={formData.programType} onValueChange={(value) => handleInputChange('programType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de formation" />
                  </SelectTrigger>
                  <SelectContent>
                    {programTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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
                <Select value={formData.source} onValueChange={(value) => handleInputChange('source', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Site web</SelectItem>
                    <SelectItem value="social-media">Réseaux sociaux</SelectItem>
                    <SelectItem value="recommendation">Recommandation</SelectItem>
                    <SelectItem value="event">Événement</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
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
      </Card>
    </div>
  );
};

export default RegistrationForm;
