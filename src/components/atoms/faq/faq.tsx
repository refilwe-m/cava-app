import { BsChevronUp } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

export const FAQ = () => {
  return (
    <div className="w-full rounded-2xl bg-primary p-2">
      <h1 className="font-bold text-xl text-white">
        Frequetly Asked Questions (FAQs)?
      </h1>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What is menstruation and why does it occur?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Menstruation is the monthly shedding of the uterine lining, typically lasting 3-7 days. It occurs as a result of hormonal changes in the menstrual cycle.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>How does fertility work and when is a person most fertile?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Fertility refers to the ability to conceive and have a successful pregnancy. A person is most fertile around the time of ovulation, which usually occurs mid-cycle.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What are hormones and how do they influence the body?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Hormones are chemical messengers produced by the body's endocrine system that regulate various bodily functions and processes.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>How does conception occur and what factors influence successful reproduction?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Conception occurs when sperm fertilizes an egg, typically in the fallopian tubes. Factors influencing successful reproduction include ovulation, healthy sperm and egg, and favorable conditions in the reproductive tract.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What is contraception?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Contraception, also known as birth control, refers to methods and techniques used to prevent pregnancy. It allows individuals to make informed decisions about if and when they want to have children.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>When should I start using contraception?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              It is recommended to start using contraception before becoming sexually active to prevent unintended pregnancies and protect against sexually transmitted infections (STIs).
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>How long does a typical menstrual cycle last?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              The average menstrual cycle lasts around 28 days, but it can vary between individuals.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>How can I know if I am pregnant?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              If you have had unprotected sex or suspect you might be pregnant, it's important to take a pregnancy test to confirm. Home pregnancy tests are available over-the-counter at pharmacies and are easy to use. You can also consult a healthcare professional for a pregnancy test and guidance.

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Is abortion safe?</span>
              <BsChevronUp
                className={`${open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Abortion, when performed by trained healthcare professionals in a safe and legal setting, is generally considered a safe medical procedure. Complications are rare, but like any medical procedure, there are some potential risks and side effects. It's crucial to seek abortion services from qualified healthcare providers who can provide appropriate care and support.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
