import { EnquiryProps } from "./types";

export const enquiryPayload = (enquiry: EnquiryProps) => {
  return {
    created_at: enquiry.createdAt,
    question: enquiry.enquiry,
    by: enquiry.by,
    tag: enquiry.tag,
  };
};
