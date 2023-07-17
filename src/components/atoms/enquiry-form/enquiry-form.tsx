import { Field, Form, Formik, FormikProps } from "formik";
import { Status } from "..";
import Hashtags from "../hashtags/hashtags";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { EnquiryProps, enquiryService } from "../../../service";

export const EnquiryForm = () => {
  const clearFormFields = () => {
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
  };
  const initialValues = {
    tags: [""],
    enquiry: "",
    by: "Jane Doe",
    createdAt: new Date().toDateString(),
  };
  const [startValues, setStartValues] = useState(initialValues);
  const onAsk = (payload: EnquiryProps) => {
    enquiryService(payload).then(
      () => console.log("Success"),
      () => console.log("Failed")
    );
  };

  return (
    <section className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onAsk(values);
          // eslint-disable-next-line react-hooks/rules-of-hooks
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="flex flex-col gap-2 w-full">
            <Field
              className="drop-shadow-lg border rounded-2xl grow w-full h-24 px-2"
              name="enquiry"
              placeholder="Ask your question"
            />
            <Field name="tags" as="select" component={Hashtags} />

            <div className="flex justify-between">
              <Status status="private" />
              <button
                className="rounded-xl bg-primary font-bold hover:bg-secondary text-white px-8 py-1 justify-self-end"
                type="submit"
                onClick={() =>
                  setTimeout(() => toast("Successfully Asked Question!"), 1000)
                }
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
