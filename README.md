# react-cv

Loads a CV from a JSON object and renders it as React components.

## Motivation

Plenty of online tools are available that populate and design resumes, but few allow for data portability and full configuration. With react-cv it's easy to personalize and tweak a resume and keep data up to date or manage multiple variants of the same cv.

## Usage

### Setup

- Build:

  - git clone this repo
  - npm install
  - npm run

- Codesandbox: https://codesandbox.io/s/react-cv-4bgff

### Change content

Edit [resume.json](src/config/resume.json), currently populated with dummy data. Sections are optional.

### Change design

Edit [styles.ts](src/common/styles/styles.ts) and change to your liking.

### Save as PDF

In Google Chrome, `file >> print >> save as PDF` has been tested to work correctly and output a good A4 format.

## License

Apache License v2.0.
