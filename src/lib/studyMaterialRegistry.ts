export interface StudyFile {
  id: string;
  name: string;
  driveId: string;
  type: "dpp" | "notes" | "assignment" | "paper";
  addedAt: string;
}

export interface Chapter {
  id: string;
  name: string;
  files: StudyFile[];
}

export interface Subject {
  id: string;
  name: string;
  chapters: Chapter[];
}

export interface ClassSection {
  id: string;
  className: string;
  subjects: Subject[];
}

export const STUDY_MATERIAL_REGISTRY: ClassSection[] = [
  { id: "class-6", className: "Class 6", subjects: [] },
  { id: "class-7", className: "Class 7", subjects: [] },
  { id: "class-8", className: "Class 8", subjects: [] },
  { id: "class-9", className: "Class 9", subjects: [] },
  { id: "class-10", className: "Class 10", subjects: [] },
  { id: "class-10-nlq", className: "Class 10th NLQ", subjects: [] },
  {
    id: "class-11-jee",
    className: "Class 11th JEE",
    subjects: [
      {
        id: "chem-11",
        name: "Chemistry",
        chapters: [
          {
            id: "mole-concept-11",
            name: "Mole Concept",
            files: [
              { id: "mole-dpp-1", name: "DPP 01 - Basics of Mole Concept", driveId: "1H4waw932s4eIHfazYaZ8CmC0uGZ846tt", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-2", name: "DPP 02 - Laws of Chemical Combination", driveId: "18Vv3tkJF9Q3xsUVtD232Q71q0BxmEYT3", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-3", name: "DPP 03 - Stoichiometry & Yield", driveId: "1qcvNOOxGMdjs-UHcn91vBOBgjNQhSTWv", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-4", name: "DPP 04 - Limiting Reagent", driveId: "1soPuByIcs2iRP_mSdPbpQXndxhIjZNqX", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-5", name: "DPP 05 - Concentration Terms-I", driveId: "1mkG-D47RlBCP2lvH9Jy9a6Ex8UqbykdA", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-6", name: "DPP 06 - Concentration Terms-II", driveId: "1Rny9Dq14N7neUDgxEUG7jwuqQdzRBto-", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-7", name: "DPP 07 - Equivalent Concept-I", driveId: "19Y_MdSixqABecGAEJQWHoWGWbmnH3fO0", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-8", name: "DPP 08 - Equivalent Concept-II", driveId: "1nj5HPd32s2OP5ACUtMPVaqFT7JUN90ia", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-9", name: "DPP 09 - Redox Basics", driveId: "1nl21elq83OIGf_ADfdwgkuAdHRCl8PkP", type: "dpp", addedAt: "2026-04-11" },
              { id: "mole-dpp-10", name: "DPP 10 - Mole Concept Master Revision", driveId: "1y_sPAE9by3F6Z0kZj3ndyfe3KCMno3SP", type: "dpp", addedAt: "2026-04-11" },
            ]
          }
        ]
      },
      {
        id: "phys-11",
        name: "Physics",
        chapters: [
          {
            id: "basic-maths-11",
            name: "Basic Maths",
            files: [
              { id: "phys-bm-dpp-1", name: "DPP 01 - Basic Mathematics", driveId: "1pdaUxZU3nDXYiuyU51N9YH74EQjqP1Ex", type: "dpp", addedAt: "2026-04-12" },
              { id: "phys-bm-dpp-2", name: "DPP 02 - Basic Mathematics", driveId: "11MfNMvzuUf3yCErd8WCvkMfK90AW1d22", type: "dpp", addedAt: "2026-04-12" },
              { id: "phys-bm-dpp-3", name: "DPP 03 - Basic Mathematics", driveId: "1E2XiqcLqK2cMwquToT5rkjqKApgrMjqe", type: "dpp", addedAt: "2026-04-12" },
              { id: "phys-bm-dpp-4", name: "DPP 04 - Basic Mathematics", driveId: "1NBiNS_akXe5n7PqMR5JaLzfPgirflMzi", type: "dpp", addedAt: "2026-04-12" },
              { id: "phys-bm-dpp-5", name: "DPP 05 - Basic Mathematics", driveId: "1PjxcRjdIzYGhWg_Z6YmdDMF__8jSk9Kb", type: "dpp", addedAt: "2026-04-12" },
            ]
          }
        ]
      },
      { id: "math-11", name: "Mathematics", chapters: [] }
    ]
  },
  { id: "class-11-neet", className: "Class 11th NEET", subjects: [] },
  { id: "class-12-jee", className: "Class 12th JEE", subjects: [] },
  { id: "class-12-neet", className: "Class 12th NEET", subjects: [] },
];
