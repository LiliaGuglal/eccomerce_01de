# Anti-Regression & Stability Rules

## 1. Scope Restriction (CRITICAL)
- **Frontend Only:** All modifications must be strictly limited to the `/frontend` directory. 
- **Backend Protection:** DO NOT modify, delete, or overwrite any files in the `/backend` directory under any circumstances. If a frontend feature requires a backend change, notify the user instead of making the change.

## 2. Principle of Non-Interference
- **Logic Preservation:** Never delete or alter existing logic, functions, or variables unless explicitly instructed in the current task.
- **Incremental Changes:** Add new functionality as extensions rather than replacements of old code.

## 3. Dependency & Context Analysis
- **Import Analysis:** Before modifying any file, perform a global search to identify all files that import functions, components, or constants from the file being edited. Ensure that changes do not break these dependencies.
- **Service Architecture:** Strictly adhere to the existing architecture within the `src/services` folder. Do not introduce new patterns that contradict the current service layer logic.
- **Deep Context:** Always read the full content of a file before applying a patch to understand the internal state and side effects.

## 4. Type Safety & Integrity
- **TypeScript Strictness:** New changes must not introduce any TypeScript errors.
- **Type Conflicts:** Ensure that modifications do not create conflicts in `types/` or shared interfaces. Always verify that component props match their defined types.
- **No 'any':** Avoid using `any` type to bypass errors; solve the type conflict properly.

## 5. UI/UX & Component Stability
- **Visual Consistency:** When adding or modifying components, ensure they match the existing design system and Tailwind/CSS patterns used in the project.
- **Component Lifecycle:** Ensure that new hooks or state updates do not cause infinite re-renders or break existing component lifecycles.

## 6. Verification Protocol
- **Side-Effect Check:** After every task, verify that the primary features of the modified page still function as expected.
- **Console Audit:** Ensure that new frontend code does not flood the browser console with warnings or errors.