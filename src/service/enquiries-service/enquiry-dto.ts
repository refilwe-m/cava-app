import { EnquiryProps } from "./types";

export const enquiryPayload = (enquiry: EnquiryProps) => {
  console.log(enquiry)
  return {
    created_at: enquiry.createdAt,
    question: enquiry.enquiry,
    by: enquiry.by,
    tags: enquiry.tags,
  };
};
