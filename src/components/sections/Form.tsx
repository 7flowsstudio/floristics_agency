import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import SectionSubheading from '../ui/SectionSubheading';
import CourseForm from '../forms/CourseForm';

function Form() {
  return (
    <Container>
      <SectionHeading className="pt-20.25 pb-2">
        Готові творити з нами?
      </SectionHeading>
      <SectionSubheading className="pb-6">
        Залиш заявку, і ми зв'яжемось, щоб забронювати для тебе місце на курсі
      </SectionSubheading>
      <CourseForm />
    </Container>
  );
}

export default Form;
