export type CourseFormState = {
   success: boolean;
   errors: {
     name?: string[];
     surname?: string[];
     phone?: string[];
     course?: string[];
     message?: string[];
   };
   error?: string;
 };