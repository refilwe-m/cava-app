import { Field, Form, Formik, FormikProps } from "formik";
import { Status } from "..";
import Hashtags, { HashTag } from "../hashtags/hashtags";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { EnquiryProps, enquiryService } from "../../../service";

export const EnquiryForm = () => {
  const [selectedHashTag, setSelectedHashTag] = useState<HashTag>();

  const clearFormFields = () => {
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
  };

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  const initialValues = {
    tag: "",
    enquiry: "",
    by: "Jane Doe",
    createdAt: formatDate(new Date()),
  };

  const invalidateForm = (formValues: EnquiryProps) =>
    formValues.enquiry === "";
  const onAsk = (payload: EnquiryProps) => {
    enquiryService(payload).then(
      () => console.log("Success"),
      () => console.log("Failed")
    );
    clearFormFields();
  };

  return (
    <section className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          const submission = {
            ...values,
            tag: selectedHashTag?.name || "#Menstruation",
          };
          onAsk(submission);
          resetForm({ values: initialValues });
        }}
      >
        {(props: FormikProps<EnquiryProps>) => (
          <Form className="flex flex-col gap-2 w-full">
            <Field
              className="drop-shadow-lg border rounded-2xl grow w-full h-24 px-2"
              name="enquiry"
              placeholder="Ask your question"
            />
            <Field
              name="tag"
              as="select"
              value={selectedHashTag}
              selectedHashTag={selectedHashTag}
              setSelectedHashTag={setSelectedHashTag}
              onChange={setSelectedHashTag}
              component={Hashtags}
            />

            <div className="flex justify-between">
              <Status status="private" />
              <button
                className="rounded-xl bg-primary font-bold hover:bg-secondary text-white px-8 py-1 justify-self-end"
                type="submit"
                onClick={() => {
                  if (invalidateForm(props.values)) {
                    setTimeout(() => toast("Please type in a question"), 1000);
                    return;
                  }
                  setTimeout(() => toast("Successfully Asked Question!"), 1000);
                }}
              >
                Ask
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
