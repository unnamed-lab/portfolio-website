export interface IProjectData {
  title: string;
  desc: string;
  stack: string[];
  github: string;
  preview: string;
}

export type TProjectData = Array<IProjectData>;

const projects: TProjectData = [];

export default projects;
