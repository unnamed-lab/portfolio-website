import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn-ui/card";

export default function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Project</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          reiciendis error accusantium tenetur exercitationem necessitatibus
          nulla accusamus pariatur incidunt obcaecati.
        </CardDescription>
        Content
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
