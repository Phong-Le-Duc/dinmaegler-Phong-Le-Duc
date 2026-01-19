# Din Mægler – Ejendomsmægler Portfolio Projekt

Dette projekt er en moderne ejendomsmægler-applikation udviklet som portfolio-projekt. Herunder finder du en oversigt over de teknologier, teknikker og elementer, der er anvendt.

---

## Brugte teknologier

- **React** (med TypeScript)  
  Moderne frontend-udvikling med komponentbaseret arkitektur og type-sikkerhed.
- **React Router**  
  Klient-side routing for navigation mellem sider.
- **Tailwind CSS**  
  Utility-first CSS framework for hurtig og responsiv styling.
- **Formik & Yup**  
  Håndtering og validering af formularer.
- **Vite**  
  Hurtig udviklingsserver og build-værktøj.
- **ESLint & Prettier**  
  Kodekvalitet og automatisk formatering.

---

## Funktionelle elementer

- **Dynamisk boligvisning**  
  Huse vises med billeder, detaljer, galleri, plantegning og kort.
- **Favoritfunktion**  
  Brugere kan tilføje/fjerne boliger som favoritter (kræver login).
- **Kontaktformular**  
  Brugervenlig formular med validering og fejlbeskeder.
- **Agentinformation**  
  Ansvarlig mægler vises med billede, kontaktinfo og titel.
- **Google Maps integration**  
  Interaktivt kort med butikkens placering.
- **Modaler**  
  Galleri, plantegning og kort vises i modale vinduer.
- **Fejlhåndtering**  
  Brugervenlige fejlbeskeder ved validering og navigation.

---

## Udviklingsteknikker

- **State management med React Hooks**  
  Brug af `useState`, `useEffect`, `useRef` m.fl.
- **Props og komponent-kommunikation**  
  Data og funktioner sendes mellem komponenter via props.
- **Custom hooks**  
  Fx til autentificering og favoritter.
- **Betinget rendering**  
  Elementer vises/skjules afhængigt af brugerens status og valg.
- **Formularvalidering**  
  Med Yup og Formik for robust brugerinput.
- **SVG og billedhåndtering**  
  Ikoner og billeder håndteres effektivt.
- **Routing og URL-parametre**  
  Modalvisning styres via query params.

---

## Mappestruktur (uddrag)

```
src/
  assets/           // Billeder og ikoner
  components/       // Genanvendelige komponenter
  pages/            // Sider (fx Home, Contact, HouseDetail)
  utility/          // Hjælpefunktioner og valideringsskemaer
  App.tsx           // Hovedapplikation
```



## Kontakt

Projektet er udviklet af Phong Le Duc som portfolio.  
Kontakt: phongleduc@gmail.com

---