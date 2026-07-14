# Annual Lab Review

A de-identified, static dashboard summarizing annual blood-work results collected on July 9, 2026. It highlights the main follow-up priorities, provides plain-language context, lists all clearly visible values from the supplied report images, and links to authoritative sources.

## Privacy

The source report photographs contain direct patient identifiers and are stored only in the ignored local folder `private-source/`. They must never be committed, uploaded, or included in a deployment artifact.

## Completeness

The supplied main-report images cover pages 1 through 7 of 8. Page 8 was not supplied. The dashboard also includes the visible results from the separate one-page STI report.

## Local development

```bash
npm install
npm run dev
npm run build
```

The static export is written to `out/`. Pushes to `main` deploy that folder to GitHub Pages through the included workflow.

## Medical notice

This project is an educational summary, not a diagnosis or treatment plan. Clinical decisions should be made with a licensed clinician who knows the full medical history.
