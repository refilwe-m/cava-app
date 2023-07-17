import { EnquiryProps } from "../service/enquiries-service";
import { enquiryService } from "../service";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (data: EnquiryProps) => {
  return useQuery(["postEnquiry"], async () => enquiryService(data));
};
