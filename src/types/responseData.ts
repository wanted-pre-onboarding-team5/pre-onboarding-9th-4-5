export type ResponseData = ResponseObject[];
export type ResponseObject = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};
