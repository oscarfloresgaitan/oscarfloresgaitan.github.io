# How to Prompt AI to Update Your LaTeX CV

Your CV is now organized into modular single-topic files located in `CV-Editable/sections/`. You can simply ask AI to add, edit, or remove entries in plain English using any of the prompt templates below!

---

## Quick Prompting Cheat Sheet

### 1. Adding a New Publication
> **Prompt Example:**
> *"Add a new publication to my CV: 'Flores Gaitán, O.A., Dodson-Robinson, S. (2026). Precision Radial Velocities of M-Dwarfs with KECK-HIRES, ApJ (Submitted).'"*

### 2. Adding a Conference Talk or Poster
> **Prompt Example:**
> *"Add a contributed talk to my CV: 'Searching for Earth-mass planets around M-Dwarfs' at AAS 247th Meeting in Phoenix, AZ on January 12, 2026. Link: https://aas.org/meetings/aas247"*

### 3. Adding a Research Experience or Fellowship
> **Prompt Example:**
> *"Add a new research experience: Visiting Graduate Scholar at Caltech, Pasadena, CA from Jun 2027 – Aug 2027. Advisor: Prof. Andrew Howard. Highlights: Modeled TESS light curves using MCMC."*

### 4. Updating Teaching or Mentorship
> **Prompt Example:**
> *"Add a new mentree to my Mentorship section: Jane Doe (UD Undergraduate Research Program, 2026)."*

### 5. Adding Awards or Skills
> **Prompt Example:**
> *"Add 'AAS Chambliss Astronomy Achievement Student Award (2026)' to my Awards section."*
> *"Add Julia to my Programming Languages skill list."*

---

## File Structure Reference

| Section | Target File | LaTeX Helper Command Used |
| :--- | :--- | :--- |
| Header & Links | `sections/00_header.tex` | `\resumeHeader{Name}{Email}{GitHub}{Website}{Location}` |
| Education | `sections/01_education.tex` | `\resumeEduEntry{Degree}{Dates}{Institution}{Location}{Highlights}` |
| Research Interests | `sections/02_research_interests.tex` | Bullet list in `\begin{highlights}` |
| Publications | `sections/03_publications.tex` | `\resumePubEntry{Authors}{Title}{Journal/Status}` |
| Talks & Posters | `sections/04_talks_posters.tex` | `\resumeTalkEntry{Authors}{Title}{TalkType}{Venue}{Location}{Date}{Link}` |
| Research Exp. | `sections/05_research_experience.tex` | `\resumeExpEntry{Title}{Dates}{Inst}{Location}{Advisors}{Highlights}` |
| Teaching Exp. | `sections/06_teaching.tex` | `\resumeExpEntry{Title}{Dates}{Inst}{Location}{Advisors}{Highlights}` |
| Mentorship | `sections/07_mentorship.tex` | `\resumeExpEntry{Program}{Dates}{Advisors}{Location}{}{Highlights}` |
| Workshops | `sections/08_workshops.tex` | `\resumeEduEntry{WorkshopName}{Date}{Organizer}{Location}{}` |
| Awards | `sections/09_awards.tex` | Bullet list in `\begin{highlights}` |
| Technical Skills | `sections/10_skills.tex` | `\resumeSkillGroup{Category}{SkillsList}` |
| Outreach | `sections/11_outreach.tex` | Bullet list in `\begin{highlights}` |

---

## Compiling & Syncing to Website

After making changes, compile and sync your PDF to the personal website download link by running:

```bash
# From workspace root:
npm run build:cv

# Or directly inside CV-Editable/:
./build.sh
```
