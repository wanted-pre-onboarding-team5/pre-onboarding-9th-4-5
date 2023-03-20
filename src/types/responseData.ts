export type ResponseData = ResponseObject[];
export type ResponseObject = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};

export type TransformedData = TransformedObject[];
export type TransformedObject = {
  id: number;
  customer: { id: number; name: string };
  status: 'approved' | 'rejected';
  currency: string;
  datetime: string;
};
