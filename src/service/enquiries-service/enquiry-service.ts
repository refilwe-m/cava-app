import { EnquiryProps, enquiryPayload, supabaseService } from "..";

export const enquiryService = (data: EnquiryProps) => {
  return supabaseService
    .from("Enquiries")
    .insert(enquiryPayload(data))
    .then((res) => console.log(res));
};
