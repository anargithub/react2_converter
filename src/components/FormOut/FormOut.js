import Form from "../Form/Form";

export default function FormOut({
  courses,
  activeCourseOut,
  setActiveCourseOut,
  courseInputOut
}) {
  const onClick = (buttonValue) => {
    setActiveCourseOut(buttonValue);
  };

  return (
    <Form
      buttonValues={courses}
      activeButton={activeCourseOut}
      onClick={onClick}
      inputValue={courseInputOut}
    />
  );
}