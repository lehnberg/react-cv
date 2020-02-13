import * as React from 'react';
import * as resume from './config/resume.json';
import { Page, Body, Column } from './common/styles/styles';
import { TextPanel, SmallPanel } from './common/components';
import {
  Courses,
  Education,
  Header,
  Languages,
  SourceCode,
  Work
} from './components';

export default function App() {
  return (
    <Page>
      <Header {...resume.about.content} />
      <Body>
        <Column secondary>
          {resume.profile ? <TextPanel {...resume.profile} /> : ''}
          {resume.skills ? <SmallPanel {...resume.skills} /> : ''}
          {resume.education ? <Education {...resume.education} /> : ''}
          {resume.courses ? <Courses {...resume.courses} /> : ''}
          {resume.languages ? <Languages {...resume.languages} /> : ''}
          {resume.interests ? <SmallPanel {...resume.interests} /> : ''}
        </Column>
        <Column primary>
          {resume.work ? <Work {...resume.work} /> : ''}
          {resume.references ? <TextPanel {...resume.references} /> : ''}
          {resume.meta ? <SourceCode {...resume.meta} /> : ''}
        </Column>
      </Body>
    </Page>
  );
}
