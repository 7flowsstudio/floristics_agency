"use client";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { sendCourseForm } from "@/lib/actions/send-form-actions";
import { FormInput } from "../ui/form/FormInput";
import { FormSelect } from "../ui/form/FormSelect";
import { FormTextarea } from "../ui/form/FormTextarea";
import Button from "../ui/Button";

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

  const courses = [
    { value: "my-work-my-dream", label: "Моя робота — моя мрія" },
    { value: "food-floristry", label: "Food-флористика" },
    { value: "floristry", label: "Флористика" },
    { value: "business-management", label: "Ведення бізнесу" },
  ];

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseLabel, setSelectedCourseLabel] = useState("");
  const [courseTouched, setCourseTouched] = useState(false);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setSelectedCourse("");
      setSelectedCourseLabel("");
      setCourseTouched(false);
      onSuccess();
    }
  }, [state.success]);

  const handleCourseChange = (val: string) => {
    setSelectedCourse(val);
    const option = courses.find((c) => c.value === val);
    setSelectedCourseLabel(option?.label || "");
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
            error={state.errors?.name?.join(", ")}
          />

          <FormInput name="surname" placeholder="Прізвище" />

          <FormInput
            name="phone"
            placeholder="Телефон"
            error={state.errors?.phone?.join(", ")}
          />

          <FormSelect
            name="course"
            placeholder="Бажаний курс"
            value={selectedCourse}
            onChange={handleCourseChange}
            onBlur={() => setCourseTouched(true)}
            options={courses}
            error={state.errors?.course?.join(", ")}
            touched={courseTouched}
          />
        </div>

        <input type="hidden" name="course" value={selectedCourseLabel} />

        <FormTextarea
          name="message"
          placeholder="Маєш конкретні питання? (необов’язково)"
        />
      </div>

      {state.error && <p className="text-red-500 text-center pt-2">{state.error}</p>}

      <Button
        disabled={pending}
        className="w-full mt-8 mb-20 lg:mt-10 lg:mb-45  lg:mx-auto lg:max-w-103"
      >
        {pending ? "Відправка..." : "Хочу творити разом"}
      </Button>
    </form>
  );
}
