import { useState, useEffect } from "react";
import FormIn from "../FormIn/FormIn";
import FormOut from "../FormOut/FormOut";
import "./Converter.css";

export default function Converter() {
  const [currencies, setCurrencies] = useState({});
  const [courses, setCourses] = useState([]);
  const [courseInputIn, setCourseInputIn] = useState("1");
  const [courseInputOut, setCourseInputOut] = useState("1");
  const [activeCourseIn, setActiveCourseIn] = useState("EUR");
  const [activeCourseOut, setActiveCourseOut] = useState("EUR");

  useEffect(() => {
    setActiveCourseIn(courses[0]);
    setActiveCourseOut(courses[0]);
    console.log(courses);
  }, [courses]);

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetch(
        "http://data.fixer.io/api/latest?access_key=c3fc773eea1e0b61487c3a398efe35bd"
      ).then((res) => res.json());
      // .then((rates) => {
      //   console.log(rates)
      // })
      console.log(courseData.rates);
      const newCurrencies = courseData.rates;
      const newCourses = Object.keys(courseData.rates).filter(
        (e) => e === "RUB" || e === "USD" || e === "EUR" || e === "GBP"
      );
      setCourses(newCourses);
      setCurrencies(newCurrencies);
      console.log(newCurrencies);
    };
    fetchData();
  }, []);

  return (
    <div className="converter">
      <FormIn
        currencies={currencies}
        courses={courses}
        activeCourseOut={activeCourseOut}
        activeCourseIn={activeCourseIn}
        courseInputIn={courseInputIn}
        setCourseInputIn={setCourseInputIn}
        setCourseInputOut={setCourseInputOut}
        setActiveCourseIn={setActiveCourseIn}
      />
      <FormOut
        courses={courses}
        activeCourseOut={activeCourseOut}
        setActiveCourseOut={setActiveCourseOut}
        courseInputOut={courseInputOut}
      />
    </div>
  );
}
