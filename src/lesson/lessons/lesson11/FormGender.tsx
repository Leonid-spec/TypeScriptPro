import { useFormik } from "formik";
import React, { useState } from "react";

interface IFormValues {
  name: string;
}

interface IFormData {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

const initialData: IFormData = {
  count: 0,
  name: "",
  gender: "",
  probability: 0,
};

export default function FormGender(): JSX.Element {
  const [genderData, setGenderData] = useState<IFormData>(initialData);

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data: IFormData = await res.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormValues,
    onSubmit: (values) => {
      fetchGender(values.name);
      console.log(values);
    },
  });

  return (
    <div>
      <h2>FormGender</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="type your name"
          name="name"
        />
        <button type="submit"> send request</button>
      </form>
      {genderData.name && (
        <p>
          {genderData.name} is {genderData.gender === "male" ? "🧔" : "👩‍🦰"}{" "}
          {genderData.probability * 100}%
        </p>
      )}
    </div>
  );
}
