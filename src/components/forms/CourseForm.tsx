'use client';
import { useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';
import { sendCourseForm } from '@/lib/actions/send-form-actions';
import { FormInput } from '../ui/form/FormInput';
import { FormSelect } from '../ui/form/FormSelect';
import { FormTextarea } from '../ui/form/FormTextarea';
import Button from '../ui/Button';
import { CourseFormState } from '@/lib/types/forms';
import Link from 'next/link';

const initialState: CourseFormState = {
  success: false,
  errors: {},
};
interface CourseFormProps {
  onSuccess: () => void;
}

export default function CourseForm({ onSuccess }: CourseFormProps) {
  const [state, formAction, pending] = useActionState<
    CourseFormState,
    FormData
  >(sendCourseForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [isAgreed, setIsAgreed] = useState(true);

  const courses = [
    { value: 'my-work-my-dream', label: 'Моя робота — моя мрія' },
    { value: 'food-floristry', label: 'Food-флористика' },
    { value: 'floristry', label: 'Флористика' },
    { value: 'business-management', label: 'Ведення бізнесу' },
  ];

  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseLabel, setSelectedCourseLabel] = useState('');
  const [courseTouched, setCourseTouched] = useState(false);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setSelectedCourse('');
      setSelectedCourseLabel('');
      setCourseTouched(false);
      onSuccess();
    }
  }, [state.success]);

  const handleCourseChange = (val: string) => {
    setSelectedCourse(val);
    const option = courses.find(c => c.value === val);
    setSelectedCourseLabel(option?.label || '');
  };

  return (
    <form
      action={formAction}
      ref={formRef}
      className="max-w-211 mx-auto mt-6 lg:mt-10"
    >
      <div className="bg-card rounded-2xl py-8 px-4 flex flex-col gap-6 lg:mt-10 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            name="name"
            placeholder="Ім'я"
            error={state.errors?.name?.join(', ')}
          />

          <FormInput name="surname" placeholder="Прізвище" />

          <FormInput
            name="phone"
            placeholder="Телефон"
            error={state.errors?.phone?.join(', ')}
          />

          <FormSelect
            name="courseValue"
            placeholder="Бажаний курс"
            value={selectedCourse}
            onChange={handleCourseChange}
            onBlur={() => setCourseTouched(true)}
            options={courses}
            error={state.errors?.course?.join(', ')}
            touched={courseTouched}
          />
        </div>

        <input type="hidden" name="course" value={selectedCourseLabel} />

        <FormTextarea
          name="message"
          placeholder="Маєш конкретні питання? (необов’язково)"
        />
      </div>

      <div
        className="flex items-center justify-center gap-3 mt-8 cursor-pointer select-none"
        onClick={() => setIsAgreed(!isAgreed)}
      >
        <div
          className={`
            mt-1 min-w-[20px] h-5 border-2 rounded-md flex items-center justify-center transition-all duration-200
            ${isAgreed ? 'bg-[#1C686D] border-[#1C686D]' : 'bg-transparent border-[#9DC6C9]'}
          `}
        >
          {isAgreed && (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://w3.org"
            >
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <p className="text-[14px] leading-tight text-[#4A4A4A] lg:text-[16px]">
          Я погоджуюся з{' '}
          <Link
            href="/privacy-policy"
            className="underline hover:text-[#1C686D] transition-colors"
            onClick={e => e.stopPropagation()}
          >
            Політикою конфіденційності
          </Link>
        </p>
      </div>

      {state.error && (
        <p className="text-error text-center pt-2">{state.error}</p>
      )}

      <Button
        disabled={pending || !isAgreed} 
        className="w-full md:w-[412px] mt-8 mb-20 lg:mt-10 lg:mb-45 mx-auto lg:max-w-103"
      >
        {pending ? 'Відправка...' : 'Хочу творити разом'}
      </Button>
    </form>
  );
}
