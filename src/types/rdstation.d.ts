// src/types/rdstation.d.ts

interface RDStationForms {
  new (formId: string, token: string): {
    createForm(): void;
  };
}

interface Window {
  RDStationForms?: RDStationForms;
}
