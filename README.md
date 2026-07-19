# Vamshi Krishna Chatla — Portfolio

Personal portfolio site. Java backend engineer building production GenAI services.

**Live:** _(pending deploy)_

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)

## Editing content

All site content lives in one file — **`src/content/profile.ts`**. Edit that to update
the hero, about, skills, experience, case studies, and contact links. Nothing else needs
to change. Lines marked `// TODO` are placeholders to fill in with real, sanitized details.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
src/
  app/
    layout.tsx        # metadata, fonts, SEO / Open Graph tags
    page.tsx          # assembles the sections
    globals.css       # theme tokens (colors, fonts)
  components/          # one file per section
  content/
    profile.ts        # ALL CONTENT LIVES HERE
public/
  resume.pdf          # drop your resume here (linked from the hero)
```
