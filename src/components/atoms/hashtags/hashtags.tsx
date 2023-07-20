import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";

const hashtags = [
  { id: 1, name: "#Menstruation" },
  { id: 2, name: "Contraceptive Methods" },
  { id: 3, name: "Fertility" },
  { id: 4, name: "#Hormones" },
  { id: 5, name: "#FemaleHealth" },
];
export type HashTag = {
  id: number;
  name: string;
};

export default function HashTag({
  setSelectedHashTag,
  selectedHashTag,
}: {
  selectedHashTag: HashTag;
  setSelectedHashTag: (hashtag: HashTag) => void;
}) {
  const [query, setQuery] = useState("");

  const filteredHashtags =
    query === ""
      ? hashtags
      : hashtags.filter((hashtag: HashTag) =>
          hashtag.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full border rounded-xl">
      <Combobox value={selectedHashTag} onChange={setSelectedHashTag}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default ring-0 focus:ring-0 overflow-hidden rounded-lg  text-left shadow-md sm:text-sm">
            <Combobox.Input
              placeholder="Select a hashtag"
              className="w-full border-none py-2 pl-3 pr-10 text-sm text-gray-900 ring-0 focus:ring-0"
              displayValue={(hashtag: HashTag) => hashtag?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 ring-0 focus:ring-0 flex items-center pr-2">
              <BsChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
              {filteredHashtags.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredHashtags.map((hashtag) => (
                  <Combobox.Option
                    key={hashtag.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      }`
                    }
                    value={hashtag}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {hashtag.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <BsCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
