import Container from "../container/container";

import Typography from "../ui/typography";
import { ListSkills } from "./list-skills";
import { SkillsBadge } from "./skills-badge";

const Skills = () => {
  return (
    <Container className=" mt-10 sm:mt-36">
      <Typography variant="h1" className="text-center">
        Skills
      </Typography>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8  mt-10 sm:mt-20">
        {ListSkills.map((skill) => (
          <div key={skill.title} className="flex justify-center items-center">
            <SkillsBadge icon={{ icon: skill.icon.icon }} title={skill.title} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
