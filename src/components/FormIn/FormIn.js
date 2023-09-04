import Form from "../Form/Form";
import { useEffect } from "react";

export default function FormIn({
  currencies,
  courses,
  activeCourseOut,
  activeCourseIn,
  setActiveCourseIn,
  courseInputIn,
  setCourseInputIn,
  setCourseInputOut,
}) {
  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const result = (
        (currencies[activeCourseOut] * courseInputIn) /
        currencies[activeCourseIn]
      ).toFixed(2);
      if (Number(result)) {
        setCourseInputOut(result);
      } else {
        setCourseInputOut(1)
      }
    }
  }, [courseInputIn, activeCourseIn, activeCourseOut]);

  const onClick = (buttonValue) => {
    setActiveCourseIn(buttonValue);
  };

  const onChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length < 19) {
      if (e.target.value.length === 0) {
        setCourseInputIn(1);
        return;
      }
      setCourseInputIn(e.target.value);
    }
  };

  return (
    <Form
      buttonValues={courses}
      activeButton={activeCourseIn}
      onClick={onClick}
      inputValue={courseInputIn}
      onChange={onChange}
    />
  );
}
