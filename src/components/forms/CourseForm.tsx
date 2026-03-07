'use client';
import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { sendCourseForm } from '@/lib/actions/send-form-actions';
import { FormInput } from '../ui/form/FormInput';
import { FormSelect } from '../ui/form/FormSelect';
import { FormTextarea } from '../ui/form/FormTextarea';
import Button from '../ui/Button';

const initialState = {
  success: false,
  errors: {},
};

interface CourseFormProps {
  onSuccess: () => void;
}

export default function CourseForm({ onSuccess }: CourseFormProps) {
  const [state, formAction, pending] = useActionState(
    sendCourseForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      onSuccess();
    }
  }, [state.success]);

  return (
    <form action={formAction} ref={formRef}>
      <div className="bg-card rounded-2xl py-8.75 px-[15px] flex flex-col gap-6">
        {/* <FormInput name="name" placeholder="Ім'я" />
        {state.errors?.name && <p>{state.errors.name}</p>} */}

        <FormInput name="name" placeholder="Ім'я" error={state.errors?.name} />

        <FormInput name="surname" placeholder="Прізвище" />

        <FormInput
          name="phone"
          placeholder="Телефон"
          error={state.errors?.phone}
        />

         <select name="course" aria-label="Бажаний курс">
          <option value="">Бажаний курс</option>
          <option value="my-work-my-dream">Моя робота — моя мрія</option>
          <option value="food-floristry">Food-флористика</option>
          <option value="floristry">Флористика</option>
          <option value="business-management">Ведення бізнесу</option>
        </select> 
        {/* <FormSelect name="course" options={courses} /> */}
        <FormTextarea name="message" placeholder="Маєш конкретні питання? (необов’язково)" />
      </div>

      <Button disabled={pending} className='w-full mt-8 mb-20'>
        {pending ? 'Відправка...' : 'Хочу творити разом'}
      </Button>
    </form>
  );
}
