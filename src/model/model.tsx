interface QuestionTemplate {
    id: string;
    type:
      | "paragraph"
      | "short answer"
      | "yes/no"
      | "dropdown"
      | "multiple choice"
      | "date"
      | "dumber"
      | "file upload"
      | "video question";
    question: string;
    choices?: string[]; 
    maxChoice?: number; 
    disqualify?: boolean;
    other?: boolean;
    maxDuration?: number;
    durationType?: string;
  }
  
  interface ProfileTemplate {
    mandatory: boolean;
    show: boolean;
  }
  
  interface PersonalInformationTemplate {
    internalUse: boolean;
    show: boolean;
  }
  
  interface FormInfo {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: {
        firstName: PersonalInformationTemplate;
        lastName: PersonalInformationTemplate;
        emailId: PersonalInformationTemplate;
        phoneNumber: PersonalInformationTemplate;
        nationality: PersonalInformationTemplate;
        currentResidence: PersonalInformationTemplate;
        idNumber: PersonalInformationTemplate;
        dateOfBirth: PersonalInformationTemplate;
        gender: PersonalInformationTemplate;
        personalQuestions: QuestionTemplate[];
      };
      profile: {
        education: ProfileTemplate;
        experience: ProfileTemplate;
        resume: ProfileTemplate;
        profileQuestions: QuestionTemplate[];
      };
      customizedQuestions: QuestionTemplate[];

    }
  }
  
  export default FormInfo;