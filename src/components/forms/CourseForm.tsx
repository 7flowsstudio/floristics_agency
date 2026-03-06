'use client';
import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { sendCourseForm } from '@/lib/actions/send-form-actions';

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
    <form action={formAction} ref={formRef} className="flex flex-col gap-6">
      <input name="name" placeholder="Ім'я" />
      {state.errors?.name && <p>{state.errors.name}</p>}

      <input name="surname" placeholder="Прізвище" />

      <input name="phone" placeholder="Телефон (+38)" />
      {state.errors?.phone && <p>{state.errors.phone}</p>}

      <select name="course" aria-label="Бажаний курс">
        <option value="">Бажаний курс</option>
        <option value="my-work-my-dream">Моя робота — моя мрія</option>
        <option value="food-floristry">Food-флористика</option>
        <option value="floristry">Флористика</option>
        <option value="business-management">Ведення бізнесу</option>
      </select>

      <textarea name="message" placeholder="Питання"></textarea>

      <button disabled={pending}>
        {pending ? 'Відправка...' : 'Хочу творити разом'}
      </button>

      {state.success && <p>Дякуємо! Ми зв'яжемось з вами.</p>}
    </form>
  );
}
